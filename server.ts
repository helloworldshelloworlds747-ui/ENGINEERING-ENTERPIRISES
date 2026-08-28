import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client server-side
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

const SYSTEM_INSTRUCTION = `
You are the official AI Technical Assistant & Engineering Consultant for "Engineering Enterprises" and its brand "Veloair Envirotech (Pvt) Ltd".

ABOUT THE COMPANY:
- Founded: 1992 (over 30+ years of engineering excellence).
- Leadership: Founded and led by Mr. Mohammad Boota Aziz (Ex-Carrier International KSA award winner from Carrier International Corp USA, Ex-Kahuta Research Laboratories KRL, Ex-Packages Pakistan AC Dept, Life Member of Pakistan HVACR Society).
- Motto / Vision: "Convert the Challenges into Opportunities" & "Sustainable And Smarter Cooling Power Solution".
- Licenses & Accreditations:
  * Pakistan Engineering Council (PEC) License No. 20000, Category C4 (ME01-ME07, EE01-EE11).
  * ISO 9001:2008 Quality Management System Certified.
  * OHSAS 18001:2007 Health & Safety Management System Certified.
  * Lahore Chamber of Commerce & Industry (LCCI) Member since 2002.
  * Federal Board of Revenue (FBR) Registered Taxpayer.

CORE ENGINEERING DOMAINS & PRODUCTS:
1. Veloair Evaporative Cooling Solutions:
   - Evaporative Air Coolers (Centralized & spot cooling units). Saves up to 90% electricity compared to conventional AC.
   - Evaporative Cooling Pads (High-density cellulose honeycomb cooling pads in green & brown).
   - Industrial Exhaust Fans, Kitchen Ventilation Hoods, Air Curtains (Theodoor), Duct forming tools.
   - Applications: Poultry farms, Dairy sheds, Textile factories, Large warehouses, Greenhouses, Shopping centers.
2. Fire Fighting Solutions:
   - Fire Hydrant Systems (Valves, pillar hydrants - NFPA 291 standard).
   - Fire Hose Pipes (2.5-inch diameter, 30m standard lengths & extendable - NFPA 1961).
   - Fire Monitors (Industrial & commercial high pressure).
   - Fire Sprinkler Systems (Pendent, Upright, Concealed, Quick Response - NFPA 13).
   - Fire Extinguishers (CO2, Dry Powder, Foam, Wet Chemical - NFPA 10).
   - FM-200 Clean Agent Fire Suppression System (UL/FM approved, Zero Ozone Depletion ODP).
3. HVAC & Air Conditioning:
   - AHU (Air Handling Units) / FCUs (Fan Coil Units), Package Units, Split ACs, Boilers, Chemical dosing plants for chillers & cooling towers, Automatic HVAC controllers.
4. Electrical & Power Panels:
   - LT Panels, AMF / ATS Auto Transfer Switch Panels, Distribution Boards (DBs), PFI Power Factor Improvement Plants, MCC Motor Control Centers, Cable Trays.
5. Mechanical & Plumbing:
   - GI Piping, Pipe Fabrication, Water Tanks, Fuel Tanks, Booster Pumps.

TECHNICAL INSIGHTS & WHITE PAPERS KNOWLEDGE:
- Evaporative Cooling vs DX AC Thermodynamics: Evaporative cooling converts sensible heat to latent heat via water evaporation (2,260 kJ/kg). In dry summers (42°C dry bulb / 24°C wet bulb), supply air reaches 26°C-28°C with only 1.1 kW connected load for 18,000 CFM, saving over 90% in electricity compared to 15 tons of DX AC (~18-22 kW).
- Honeycomb CELdek Pad Maintenance (7090 & 5090): Maintain continuous 5-10% water bleed-off to prevent mineral scale (TDS). Water pH should be 6.5-8.5. Run pads dry for 30 minutes every evening with fan only to prevent algae/fungi. Lifespan is 4-6 years.
- NFPA 25 Inspection Protocols: Weekly 10-min churn tests on jockey/booster pumps, 18-inch clearance below sprinkler heads, annual 15-bar hose hydrostatic testing, and semi-annual FM-200 cylinder pressure/weight checks.
- Solar PV Hybrid Integration: Because Veloair coolers consume only 1.1 - 1.5 kW per unit with inverter drives, a modest 25 kW rooftop solar PV system can completely power 20 industrial units at zero operating expense during peak daytime hours.
- Poultry & Broiler FCR Optimization: High-speed tunnel ventilation (2.5-3.0 m/s) with 7090 cellulose pads prevents summer heat mortality, reduces panting alkalosis, and improves Feed Conversion Ratio (FCR).

CLIENT HIGHLIGHTS:
Servis, Unifoam, Olympia, Nando's, Cakes & Bakes, Outfitters, ProSafety, ITC Islamabad Tea, Stylers, Awan Sports, Bareeze, Beacon Impex, Forward Sports, CrossRoad, Joy Land, Style Textile.

CONTACT & OFFICES:
- Head Office: 10-Q, Johar Town, Lahore, Pakistan.
- Lahore Factory: Abu Bakar Siddique Colony, Bund Road, Lahore. Tel: +92 42 35469186 / +92 42 3741 9890.
- Islamabad Office: Suite 25-26, Al-Hameed Mall / Shopping Center, G-11 Markaz, Islamabad. Mob: +92 343 4999 038 / +92 51 2361351.
- Direct Telephones: +92 (42) 3595 6625-6 | Fax: +92 (42) 3595 6617 | WhatsApp/Mob: +92 (300) 8425 772.
- Official Emails: info@engineeringenterprises.com.pk / info@veloair.pk.
- Official Website: www.engineeringenterprises.com.pk / www.veloair.pk.
- Social Links: Facebook (https://www.facebook.com/share/18cMNfL5Z7/), LinkedIn (https://www.linkedin.com/company/engineering-enterprises/).

YOUR TONE & STYLE:
- Professional, knowledgeable, polite, and helpful engineer/consultant.
- Answer questions in English or Urdu/Roman Urdu depending on what the user asks.
- Provide practical engineering insights on cooling pad sizing, power savings, NFPA fire compliance, and turnkey quotation procedures.
- Invite the user to connect on WhatsApp (+92 300 8425772) or request an on-site technical survey when appropriate.
`;

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    company: "Engineering Enterprises & Veloair",
    aiEnabled: Boolean(process.env.GEMINI_API_KEY),
  });
});

// Chatbot API endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { messages, userMessage, message } = req.body;
    const query = userMessage || message || (messages && messages.length > 0 ? messages[messages.length - 1].content : "");

    if (!query || typeof query !== "string") {
      return res.status(400).json({ error: "A message string is required." });
    }

    if (ai) {
      try {
        const conversationHistory = (messages || []).map((m: { role: string; content: string }) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        }));

        // Call Gemini 3.7 Flash
        const response = await ai.models.generateContent({
          model: "gemini-3.7-flash",
          contents: conversationHistory.length > 0
            ? conversationHistory
            : [{ role: "user", parts: [{ text: query }] }],
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
          },
        });

        const reply = response.text || "Thank you for reaching out to Engineering Enterprises. How can we assist your project today?";
        return res.json({ reply, source: "gemini" });
      } catch (geminiError) {
        console.error("Gemini API generation error:", geminiError);
        // Fallback gracefully below
      }
    }

    // High quality intelligent fallback if Gemini key is not configured or fails
    const lower = query.toLowerCase();
    let reply = "";

    if (lower.includes("evaporative") || lower.includes("cooler") || lower.includes("veloair") || lower.includes("pad")) {
      reply = "Veloair Evaporative Cooling systems save up to 90% in electricity bills compared to standard AC systems while providing 100% fresh, filtered air. We supply high-density cellulose honeycomb cooling pads (green/brown), heavy-duty industrial coolers, and industrial exhaust fans tailored for factories, poultry farms, dairy sheds, and greenhouses. Would you like a CFM cooling calculation or quote?";
    } else if (lower.includes("fire") || lower.includes("hydrant") || lower.includes("nfpa") || lower.includes("sprinkler") || lower.includes("extinguisher") || lower.includes("fm200") || lower.includes("fm-200")) {
      reply = "Engineering Enterprises delivers certified Fire Fighting Solutions compliant with NFPA standards: Fire Hydrant Systems (NFPA 291), Fire Hose Pipes (2.5\" NFPA 1961), Fire Sprinklers (NFPA 13), Fire Extinguishers (NFPA 10), and UL/FM approved FM-200 Clean Agent Suppression systems. Contact us at +92 (300) 8425772 for complete design and execution.";
    } else if (lower.includes("contact") || lower.includes("phone") || lower.includes("number") || lower.includes("address") || lower.includes("office") || lower.includes("lahore") || lower.includes("islamabad")) {
      reply = "You can contact Engineering Enterprises & Veloair at:\n• Head Office: 10-Q, Johar Town, Lahore\n• Lahore Factory: Bund Road, Lahore (Tel: 042-35469186)\n• Islamabad Office: Suite 25-26, Al-Hameed Mall, G-11 Markaz (0343-4999038)\n• Direct Call & WhatsApp: +92 (300) 8425 772 / +92 (42) 3595 6625-6\n• Email: info@engineeringenterprises.com.pk";
    } else if (lower.includes("price") || lower.includes("cost") || lower.includes("rate") || lower.includes("quote") || lower.includes("quotation")) {
      reply = "Our engineering solutions and turnkey equipment are sized according to your facility's area (sq ft / CFM requirements) and heat load. Please share your project dimensions or click our 'Get a Quote' / WhatsApp button (+92 300 8425772) for an instant customized estimate!";
    } else if (lower.includes("ceo") || lower.includes("boota") || lower.includes("owner") || lower.includes("founder") || lower.includes("experience")) {
      reply = "Engineering Enterprises was founded in 1992 by Mr. Mohammad Boota Aziz, an esteemed HVACR veteran trained at Carrier International USA (awarded the Apex Award for Excellence in KSA), with decades of experience across Kahuta Research Labs (KRL) and Packages Pakistan. He is also a Life Member of the Pakistan HVACR Society.";
    } else if (lower.includes("pec") || lower.includes("iso") || lower.includes("license") || lower.includes("certificate")) {
      reply = "We are registered with the Pakistan Engineering Council (PEC) under Category C4 (License No. 20000), certified for ISO 9001:2008 Quality Management, OHSAS 18001:2007 Health & Safety, and are active members of the Lahore Chamber of Commerce & Industry (LCCI) since 2002.";
    } else {
      reply = "Welcome to Engineering Enterprises & Veloair Envirotech! We provide turnkey HVAC, Veloair Evaporative Cooling (up to 90% power savings), Fire Fighting Systems (NFPA standard), Electrical Panels, and Mechanical Engineering solutions across Pakistan since 1992. How may our engineering team assist you today?";
    }

    return res.json({ reply, source: "knowledge-base" });
  } catch (error) {
    console.error("Chat endpoint error:", error);
    return res.status(500).json({ error: "Failed to process chat message." });
  }
});

// Quote Request API endpoint
app.post("/api/quote", (req, res) => {
  const { name, email, phone, company, domain, message } = req.body;
  console.log("New Quote Request Received:", { name, email, phone, company, domain, message });
  return res.json({
    success: true,
    message: "Thank you! Your quote request has been received. Our engineering representative will contact you within 24 hours.",
  });
});

// Vite middleware & Static serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Engineering Enterprises Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
