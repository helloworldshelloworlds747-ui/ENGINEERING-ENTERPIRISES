import { Product, Achievement, Testimonial, Client, Certification, IndustryApplication, OfficeLocation } from '../types';
import fireHydrantImage from '../assets/images/fire_hydrant_system_1787902119250.jpg';
import fireExtinguishersImage from '../assets/images/fire_extinguishers_1787902133543.jpg';

export const COMPANY_INFO = {
  name: "Engineering Enterprises",
  subBrand: "Veloair Envirotech (Pvt) Ltd",
  slogan: "Convert the Challenges into Opportunities",
  tagline: "Sustainable And Smarter Cooling Power Solution",
  visionStatement: "The New Vision In Cooling & Industrial Engineering",
  foundedYear: "1992",
  yearsOfExperience: "30+",
  headOffice: "10-Q, Johar Town, Lahore, Pakistan",
  lahoreFactory: "Abu Bakar Siddique Colony, Bund Road, Lahore",
  islamabadOffice: "Suite 25-26, Al-Hameed Mall, G-11 Markaz, Islamabad",
  primaryPhone: "+92 (42) 3595 6625-6",
  directWhatsApp: "+92 300 8425772",
  whatsappUrl: "https://wa.me/923008425772?text=Hello%20Engineering%20Enterprises%20/%20Veloair%2C%20I%20would%20like%20to%20inquire%20about%20your%20cooling%20and%20engineering%20solutions.",
  fax: "+92 (42) 3595 6617",
  emails: ["info@engineeringenterprises.com.pk", "info@veloair.pk"],
  websiteUrl: "www.engineeringenterprises.com.pk",
  facebookUrl: "https://www.facebook.com/share/18cMNfL5Z7/",
  linkedinUrl: "https://www.linkedin.com/company/engineering-enterprises/",
  pecLicense: "20000 (Category C4)",
  ntn: "1219169-8 / 3969653-0",
  iso: "ISO 9001:2008 & OHSAS 18001:2007",
};

export const CEO_PROFILE = {
  name: "Mr. Mohammad Boota Aziz",
  title: "Founder & Chief Executive Officer",
  organization: "Engineering Enterprises & Veloair Envirotech",
  bio: "A remarkable personality with excellent leadership qualities, who leads Engineering Enterprises rise to the heights of success since 1992. He is a trained professional in the field of HVACR from Carrier International, USA and a distinguished Life Member of the Pakistan HVACR Society.",
  quote: "At Engineering Enterprises, our major goal is to convert customer problems into satisfied solutions through a fully committed and industrious workforce, cutting-edge technologies, and strict quality control through best industry practices.",
  carrierAward: {
    title: "Apex - Appreciation of Excellence Award",
    issuer: "Carrier International Corporation, USA",
    description: "Awarded as one of the top ten worldwide performers by President Jean Pierre van Rooy for extraordinary contributions and turnkey HVAC commissioning across airports, industrial complexes, and royal palaces in the Middle East."
  },
  careerTimeline: [
    {
      period: "1979 - 1981",
      role: "Team Member - Erection & Mechanical Works",
      company: "Kahuta Research Laboratories (KRL)",
      details: "Took part in mission-critical erection and mechanical engineering setup."
    },
    {
      period: "1981 - 1988",
      role: "Service Engineer & Turnkey Lead",
      company: "Carrier International, K.S.A.",
      details: "Responsible for major turnkey HVAC projects across airports, industrial plants, commercial centers, and royal palaces. Supervised testing & commissioning of Carrier heavy units."
    },
    {
      period: "1989 - 1990",
      role: "Junior Executive, AC Department",
      company: "Packages Pakistan Limited",
      details: "Responsible for comprehensive air conditioning operations and plant maintenance."
    },
    {
      period: "1991 - 1992",
      role: "Maintenance Manager (HVAC & Electrical)",
      company: "Rain Bow Textile Industry",
      details: "Supervised high-capacity HVAC and electrical systems, workshop operations, and plant uptime."
    },
    {
      period: "1992 - Present",
      role: "Founder & Chief Executive Officer",
      company: "Engineering Enterprises & Veloair Envirotech",
      details: "Founded the enterprise, expanding into multi-discipline HVAC, Evaporative Cooling, Fire Protection Systems, and Electrical Panel manufacturing across Pakistan."
    }
  ]
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    value: "100%",
    label: "Success Rate",
    description: "Flawless project handover rate across industrial, commercial, and government tenders.",
    iconName: "Trophy"
  },
  {
    value: "30+",
    label: "Years of Experience",
    description: "Pioneering engineering innovations in Pakistan and the Middle East since 1992.",
    iconName: "Calendar"
  },
  {
    value: "50+",
    label: "Working Staff & Engineers",
    description: "Full-time certified HVAC engineers, PEC registered supervisors, and technicians.",
    iconName: "Users"
  },
  {
    value: "108+",
    label: "No. of Flagship Projects",
    description: "Executed for renowned multinationals, textile giants, and poultry/livestock hubs.",
    iconName: "Award"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "veloair-evaporative-cooler",
    name: "Veloair Evaporative Air Cooler",
    category: "evaporative-cooling",
    categoryName: "Evaporative Cooling",
    tagline: "Saves up to 90% in electricity bills with 100% fresh, cooled airflow",
    description: "Heavy-duty industrial and commercial evaporative cooling units engineered specifically for harsh, dry environments. Delivers massive airflow with minimal electricity consumption compared to standard compressor ACs.",
    standard: "ISO 9001 & CE Certified",
    savingsOrRating: "Up to 90% Energy Saving",
    badge: "Best Seller",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      "Airflow capacity: 18,000 - 30,000 m³/hr",
      "Power consumption: Only 1.1 kW - 1.5 kW",
      "100% fresh, filtered cool air delivery",
      "Corrosion-resistant UV-stabilized composite polymer casing"
    ],
    features: [
      "Direct drive variable speed inverter motor",
      "Automatic water level sensor and auto-drain purge cycle",
      "High saturation efficiency with high-density cellulose pads",
      "Low noise aerofoil blade axial fan assembly"
    ],
    applications: [
      "Industrial manufacturing plants & assembly lines",
      "Textile weaving and spinning mills",
      "Poultry sheds and hatchery incubators",
      "Warehouses, logistics centers & hypermarkets"
    ]
  },
  {
    id: "evaporative-cooling-pad",
    name: "Honeycomb Evaporative Cooling Pad",
    category: "evaporative-cooling",
    categoryName: "Evaporative Cooling",
    tagline: "High-absorption virgin kraft paper cellulose pads in green and brown",
    description: "Premium grade cross-fluted cellulose honeycomb cooling pads engineered for maximum evaporation efficiency and long service life. Available in standard 5090 and 7090 fluting angles with anti-rot resins.",
    standard: "ISO Certified Cellulose",
    savingsOrRating: "88%+ Evaporation Efficiency",
    badge: "Eco-Friendly",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      "Flute geometry: 7090 / 5090 cross-fluted angles",
      "Colors: High-durability Emerald Green & Natural Brown",
      "Thickness: 100mm, 150mm, 200mm custom sizes",
      "Anti-algae, anti-fungal chemical treatment"
    ],
    features: [
      "Exceptional water absorption with fast wet-out",
      "Low air resistance allowing maximum airflow velocity",
      "Self-cleaning cross-flute water distribution design",
      "Long operational life (5+ years with proper maintenance)"
    ],
    applications: [
      "Controlled environment poultry & dairy farms",
      "Commercial agricultural greenhouses",
      "Industrial pre-cooling for air handling units (AHU)",
      "Livestock and equine stables"
    ]
  },
  {
    id: "industrial-exhaust-fan",
    name: "Industrial Heavy-Duty Exhaust Fan",
    category: "evaporative-cooling",
    categoryName: "Evaporative Cooling & Ventilation",
    tagline: "High-volume air extractors with automatic gravity louvers",
    description: "Galvanized steel box exhaust fans designed to swiftly expel stale, hot air, fumes, and humidity from expansive industrial spaces to maintain continuous positive/negative cross-ventilation.",
    standard: "AMCA & ISO Compliant",
    savingsOrRating: "44,000 m³/h CFM Extract",
    imageUrl: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      "Impeller size: 50 inch / 1380mm diameter",
      "Frame: Heavy galvanized steel (275g/m² zinc coating)",
      "Motor: IP55 Class F energy efficient induction motor",
      "Noise level: <65 dB(A) at 1 meter"
    ],
    features: [
      "Centrifugal shutter opening mechanism for tight closure",
      "Stainless steel high-strength aerofoil stamped blades",
      "Belt-driven system with automatic belt tensioner",
      "Weather-proof, dust-proof and pest-proof backdraft louvers"
    ],
    applications: [
      "Foundries, steel mills & welding workshops",
      "Poultry and broiler farms tunnel ventilation",
      "Chemical processing & paint booth areas",
      "Kitchen exhaust & food production plants"
    ]
  },
  {
    id: "fire-hydrant-system",
    name: "Fire Hydrant & Pillar System",
    category: "fire-fighting",
    categoryName: "Fire Fighting Solutions",
    tagline: "Heavy-duty outdoor and indoor emergency water delivery systems",
    description: "Complete turnkey fire hydrant stations comprising dry/wet barrel pillar hydrants, landing valves, loop control manifold piping, and booster pump automation as per international life safety codes.",
    standard: "NFPA 291 Standard Compliant",
    savingsOrRating: "Class 1 High Pressure",
    badge: "Life Safety",
    imageUrl: fireHydrantImage,
    keySpecs: [
      "Pillar size: 4\" & 6\" inlet with dual 2.5\" BS/Storz outlets",
      "Design standard: NFPA 291 & BS 750",
      "Working pressure: 16 bar test pressure, 10 bar working",
      "Construction: Ductile cast iron with epoxy powder coating"
    ],
    features: [
      "Loop control system integration for zero pressure drop",
      "Tamper-resistant operating nut and brass valve seats",
      "Integrated automatic drain valve to prevent water stagnation",
      "Available with weatherproof outdoor breeching cabinets"
    ],
    applications: [
      "Industrial estates & manufacturing facilities",
      "Petrochemical depots & oil storage terminals",
      "High-rise commercial towers & shopping plazas",
      "Government complexes & public infrastructures"
    ]
  },
  {
    id: "fire-hose-pipe",
    name: "Fire Hose Pipe & Reel System",
    category: "fire-fighting",
    categoryName: "Fire Fighting Solutions",
    tagline: "Synthetic woven high-pressure fire hose with instantaneous couplings",
    description: "Durable non-kinking fire fighting hose pipes equipped with precision brass/aluminum instantaneous couplings, jet/spray branch pipes, and heavy gauge cabinet reels.",
    standard: "NFPA 1961 & BS 6391",
    savingsOrRating: "2.5\" Dia, 30m Length",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      "Diameter: 2.5 inch (65mm) and 1.5 inch (38mm)",
      "Length: Standard 30 meters & extendable up to 60m",
      "Bursting pressure: 45 bar (650 PSI)",
      "Lining: EPDM / Polyurethane synthetic rubber"
    ],
    features: [
      "100% high-tenacity polyester jacket with abrasion guard",
      "Resistant to ozone, weathering, heat, and oil contamination",
      "Lightweight, ultra-flexible, and easy to flake/roll",
      "Equipped with instantaneous BS336 couplings"
    ],
    applications: [
      "Internal fire safety cabinets in factories",
      "Multi-story office buildings and hospitals",
      "Warehouses, storage depots and hotels"
    ]
  },
  {
    id: "fire-sprinkler-system",
    name: "Automatic Fire Sprinkler System",
    category: "fire-fighting",
    categoryName: "Fire Fighting Solutions",
    tagline: "Rapid response heat-sensitive bulb sprinkler networks",
    description: "Engineered automatic water sprinkler networks designed for early fire detection and suppression. Includes pendent, upright, sidewall, and aesthetic concealed types.",
    standard: "NFPA 13 Standard Compliant",
    savingsOrRating: "Quick Response (RTI < 50)",
    badge: "Certified",
    imageUrl: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      "Types: Pendent, Upright, Concealed, Sidewall, Quick Response",
      "Temperature ratings: 57°C (Orange), 68°C (Red), 79°C (Yellow), 93°C (Green)",
      "Thread size: 1/2\" NPT / 3/4\" NPT with K-factor 5.6 / 8.0",
      "Bulb: Standard Job Germany quartz glass bulb"
    ],
    features: [
      "Rapid activation suppressing fires before full ignition",
      "Complete zone control valves, flow switches, and alarm gongs",
      "Concealed flush plates for luxury hotel and boardroom ceilings",
      "Heavy-duty forged bronze casting with corrosion-proof finish"
    ],
    applications: [
      "Garment & textile sewing floors",
      "Commercial plazas, shopping malls, supermarkets",
      "Pharmaceutical storage and cleanrooms",
      "Residential high-rises and hospitals"
    ]
  },
  {
    id: "fire-extinguishers",
    name: "Industrial Fire Extinguishers",
    category: "fire-fighting",
    categoryName: "Fire Fighting Solutions",
    tagline: "Full range portable and trolley-mounted fire suppression cylinders",
    description: "Certified fire extinguishers formulated for Class A, B, C, D, and electrical hazards. Supplied in Wet Chemical, Dry Chemical Powder (DCP), CO2 Gas, and Aqueous Film Forming Foam (AFFF).",
    standard: "NFPA 10 & EN3 Standard",
    savingsOrRating: "All Classes (A, B, C, E, F)",
    imageUrl: fireExtinguishersImage,
    keySpecs: [
      "Capacities: 1kg, 2kg, 6kg, 9kg portable & 25kg, 50kg trolley units",
      "Agents: ABC Dry Powder, Carbon Dioxide (CO2), AFFF Foam, Wet Chemical",
      "Discharge time: 10 to 30 seconds with 4-6 meter range",
      "Pressure gauge: High-accuracy magnetic diaphragm gauge"
    ],
    features: [
      "Seamless steel / aluminum cylinder with anti-corrosive internal lining",
      "Heavy-duty brass valve assembly with stainless steel safety pin",
      "High UV resistance exterior polyester powder coat",
      "Supplied with wall brackets and maintenance inspection tags"
    ],
    applications: [
      "Server rooms, control rooms, electrical sub-stations",
      "Commercial kitchens, restaurants, food courts",
      "Automotive workshops, chemical stores, factories"
    ]
  },
  {
    id: "fm200-suppression",
    name: "FM-200 Clean Agent Fire Suppression",
    category: "fire-fighting",
    categoryName: "Fire Fighting Solutions",
    tagline: "Waterless, residue-free gaseous fire suppression for critical assets",
    description: "UL/FM listed clean agent gas flood system that extinguishes fires within 10 seconds without damaging sensitive electrical electronics, server servers, or leaving residue.",
    standard: "UL / FM Approved & Zero ODP",
    savingsOrRating: "10-Sec Rapid Suppression",
    badge: "UL/FM Listed",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      "Agent: HFC-227ea (FM-200) / FK-5-1-12",
      "Zero Ozone Depletion Potential (ODP: 0.0)",
      "Safe for human-occupied spaces at design concentrations",
      "Discharge time: Complete flood in under 10 seconds"
    ],
    features: [
      "Electrically non-conductive and zero cleanup required",
      "Complete abort switches, warning strobes, and gas release nozzles",
      "Interlocked with intelligent smoke & laser obscuration detectors",
      "High-pressure seamless cylinders with pressure transducer monitoring"
    ],
    applications: [
      "Data centers, telecom exchanges, server rooms",
      "Control rooms in power plants and oil refineries",
      "Hospital MRI suites and surgical operating theatres",
      "Museums, archives, and bank vault safety"
    ]
  },
  {
    id: "hvac-ahu-fcu",
    name: "Central HVAC, AHU & FCU Systems",
    category: "hvac",
    categoryName: "HVAC & Climate Systems",
    tagline: "Custom Air Handling Units, Fan Coil Units & Package Systems",
    description: "Custom engineered central air conditioning solutions including double-skin AHUs, FCUs, packaged rooftop units, chilled water dosing systems, and air terminal diffusers.",
    standard: "Carrier / ASHRAE Standards",
    savingsOrRating: "High COP & Low Noise",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      "Capacity: 1,000 CFM to 50,000 CFM custom double-skin AHUs",
      "Filters: G4 primary, F7 secondary, and H13 HEPA filtration",
      "Coils: Copper tube aluminum fin chilled water / direct expansion",
      "Casing: Thermal break polyurethane injected double skin panels"
    ],
    features: [
      "High static plug fans with variable frequency drives (VFD)",
      "Chemical dosing plant for cooling tower and chiller longevity",
      "Hot water boilers and integrated winter heating systems",
      "Complete automatic DDC micro-controller integration"
    ],
    applications: [
      "Hospitals, cleanrooms & pharmaceutical laboratories",
      "Corporate headquarters & multi-story office towers",
      "Airports, auditoriums & luxury hotel ballrooms"
    ]
  },
  {
    id: "electrical-lt-ats-panels",
    name: "Electrical LT, ATS & PFI Panels",
    category: "electrical-panels",
    categoryName: "Electrical & Power Panels",
    tagline: "Custom fabricated switchgear, motor control centers & power factor units",
    description: "Type-tested low tension switchboards, Automatic Transfer Switch (ATS/AMF) panels, Power Factor Improvement (PFI) plants, and Motor Control Centers (MCC) built with Schneider/ABB components.",
    standard: "IEC 61439 & PEC Compliant",
    savingsOrRating: "Power Factor > 0.98",
    badge: "In-House Fabricated",
    imageUrl: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80",
    keySpecs: [
      "Current rating: Up to 4000A LT Panels",
      "Protection: Form 2b / Form 4b segregation, IP54 / IP65 enclosure",
      "Components: Schneider Electric, ABB, Siemens, Terasaki",
      "Enclosure: CNC laser cut 1.5mm - 2.0mm powder coated sheet metal"
    ],
    features: [
      "Microprocessor-based automatic generator changeover (AMF/ATS)",
      "Automatic step-switched capacitor banks with detuned reactors for PFI",
      "Motor protection circuits with soft-starters and VFDs in MCC panels",
      "Integrated surge protection systems and heavy cable management"
    ],
    applications: [
      "Industrial manufacturing power sub-stations",
      "Commercial plazas and residential grid changeovers",
      "Pump houses and HVAC central mechanical rooms"
    ]
  }
];

export const CLIENTS: Client[] = [
  { name: "Servis", category: "Footwear & Tyres", color: "#DC2626" },
  { name: "Unifoam", category: "Foam & Bedding", color: "#EA580C" },
  { name: "Olympia", category: "Chemicals & Plastics", color: "#0284C7" },
  { name: "Nando's", category: "International Food Chain", color: "#B91C1C" },
  { name: "Cakes & Bakes", category: "Baking & FMCG", color: "#D97706" },
  { name: "Outfitters", category: "Apparel Retail", color: "#111827" },
  { name: "ProSafety", category: "Industrial Safety", color: "#DC2626" },
  { name: "Islamabad Tea (ITC)", category: "Beverages & Tea", color: "#16A34A" },
  { name: "Stylers", category: "Denim & Garments", color: "#1E40AF" },
  { name: "Awan Sports", category: "Sports Manufacturing", color: "#DC2626" },
  { name: "Bareeze", category: "Textiles & Fashion", color: "#4B5563" },
  { name: "Beacon Impex", category: "Textile Exports", color: "#0D9488" },
  { name: "Forward Sports", category: "Official FIFA Ball Makers", color: "#059669" },
  { name: "CrossRoad", category: "Retail & Apparel", color: "#2563EB" },
  { name: "Joy Land", category: "Entertainment Parks", color: "#7C3AED" },
  { name: "Style Textile", category: "Textile Conglomerate", color: "#1E3A8A" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Sultan Uddin",
    title: "Chief Executive Officer",
    company: "CrossRoad",
    quote: "Unexpectedly I saved 80% of the bills. My whole factory is ventilated and cool with fresh air. Installation of Evaporative cooler was such an incredible decision for our manufacturing floor.",
    rating: 5,
    location: "Lahore, Pakistan"
  },
  {
    id: "test-2",
    name: "Ahsan Tariq",
    title: "Chief Executive Officer",
    company: "Joy Land",
    quote: "Air is fresh, the environment is cool. I save a lot on energy bills; now your air cooler systems are a vital part of our space. Thank you Veloair. Highly Recommended for large footfall zones!",
    rating: 5,
    location: "Rawalpindi / Lahore"
  },
  {
    id: "test-3",
    name: "Bilal Khan",
    title: "Chief Executive Officer",
    company: "Style Textile Pvt. Ltd",
    quote: "Drastically improved temperature helps our employees work at their peak. We get significantly more production while simultaneously saving electricity costs, which is a perfect industrial solution.",
    rating: 5,
    location: "Lahore Industrial Zone"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "pec-c4",
    title: "Pakistan Engineering Council (PEC) License",
    issuingBody: "Pakistan Engineering Council, Islamabad",
    certNumber: "Licence No: 20000 (Serial: 594518)",
    validity: "Active (Renewed as per Bye-laws)",
    category: "Category C4 Constructor / Operator",
    scope: "ME01-ME07 (Mechanical Works, HVAC, Fire Protection, Plumbing) & EE01-EE11 (Electrical Works, Panels, Solar)",
    summary: "Official government engineering constructor accreditation authorizing major multi-million industrial and turnkey public sector execution."
  },
  {
    id: "iso-9001",
    title: "ISO 9001:2008 Quality Management System",
    issuingBody: "Integrated Quality Standards / ASCB(E)",
    certNumber: "Registration No: 4100942",
    validity: "Certified System",
    category: "Quality Assurance",
    scope: "Provision of HVAC, Electrical & Mechanical Services and Import of Related Equipments",
    summary: "Guarantees strict international quality control protocols throughout project lifecycle, testing, and delivery."
  },
  {
    id: "ohsas-18001",
    title: "OHSAS 18001:2007 Health & Safety Management",
    issuingBody: "Integrated Quality Standards / ASCB(E)",
    certNumber: "Registration No: 4100943",
    validity: "Certified System",
    category: "Occupational Safety",
    scope: "Provision of HVAC, Electrical & Mechanical Services and Import of Related Equipments",
    summary: "Ensures workplace health, rigorous site safety standards, and hazard-free turnkey execution."
  },
  {
    id: "lcci-membership",
    title: "The Lahore Chamber of Commerce & Industry (LCCI)",
    issuingBody: "LCCI Lahore",
    certNumber: "Membership No: 47376-A (Since 10/2002)",
    validity: "Active Corporate Member",
    category: "Chamber of Commerce",
    scope: "Engineering Enterprises - 10-Q Johar Town, Lahore",
    summary: "Over two decades of registered active membership with Pakistan's premier trade and commerce chamber."
  },
  {
    id: "hvacr-society",
    title: "Pakistan HVACR Society Life Membership",
    issuingBody: "Pakistan HVACR Society",
    certNumber: "Life Membership # 042-2-0097",
    validity: "Lifetime Member",
    category: "Industry Body",
    scope: "Mr. Mohammad Boota (Granted Life Member Grade)",
    summary: "Recognized among the country's most distinguished HVAC and refrigeration professionals."
  }
];

export const INDUSTRY_APPLICATIONS: IndustryApplication[] = [
  {
    id: "poultry",
    title: "Poultry Farms & Hatcheries",
    tagline: "Prevent heat mortality & boost feed conversion ratio (FCR)",
    overview: "High-density broiler, breeder, and layer houses in Pakistan face intense summer ambient peaks of 44°C–48°C. Without engineered negative pressure tunnel ventilation and evaporative cooling, bird mortality skyrockets and Feed Conversion Ratio (FCR) deteriorates rapidly. Engineering Enterprises delivers turnkey climate automation that maintains steady 24°C–28°C core temperatures and optimal relative humidity across 50,000+ bird sheds.",
    challenge: "Extreme ambient heatwaves causing heat stress, ammonia (NH3) gas buildup (>25 ppm), high bird mortality, and reduced egg production in closed poultry houses across Punjab and Sindh.",
    engineeringSolution: "Engineered negative-pressure tunnel ventilation system coupling Munters-standard CELdek 7090 cellulose pad cassettes with 50-inch heavy-duty aerofoil cone exhaust fans, automated climate controllers, and backup generator changeover panels.",
    keyMetrics: [
      { label: "Summer Temp Reduction", value: "14°C - 18°C", subtext: "Drops 45°C ambient to ~27°C" },
      { label: "FCR Improvement", value: "+8.4%", subtext: "Better weight gain per feed kg" },
      { label: "Bird Mortality", value: "<1.2%", subtext: "Reduced from >12% in heatwaves" },
      { label: "Tunnel Air Speed", value: "2.5 - 3.0 m/s", subtext: "Ideal wind-chill effect on broilers" }
    ],
    benefits: [
      "Maintains optimal 24°C-28°C temperature during extreme 45°C+ summer heat waves",
      "Continuously flushes out toxic ammonia (NH3) and carbon dioxide (CO2) gases",
      "Green/brown honeycomb cooling pads with negative pressure tunnel fans",
      "Low moisture buildup preventing wet litter diseases and foot pad dermatitis"
    ],
    recommendedSolution: "Veloair 7090 Cellulose Pads + 50\" Heavy Duty Exhaust Fans + Auto Variable Speed Logic",
    imageUrl: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80",
    systemEquipment: [
      { name: "CELdek 7090 Evaporative Cooling Pads", spec: "150mm depth, 70°/90° cross-flute, treated anti-rot kraft", role: "Primary evaporative cooling wall" },
      { name: "50-inch Cone Exhaust Fan", spec: "44,000 m³/h capacity, IP55 Siemens/ABB motor, stainless blades", role: "Negative pressure extraction" },
      { name: "Automated Water Distribution System", spec: "Submersible pump with auto-flush and salinity bleed-off", role: "Uniform pad wetting" },
      { name: "Integrated Microprocessor Climate Console", spec: "Dual temp/RH sensors, multistage fan cycling, alarm alerts", role: "Automated climate supervision" }
    ],
    caseStudies: [
      {
        id: "case-poultry-1",
        clientName: "Big Bird Poultry Complex",
        projectTitle: "120,000-Bird Closed Broiler Farm Tunnel Ventilation & Pad System",
        location: "Raiwind Road, Lahore, Punjab",
        completedYear: "2024",
        scope: "Turnkey Design, Supply & Commissioning of Evaporative Cooling Pads and Cone Fans for 4 Sheds (450ft x 50ft each)",
        capacityOrArea: "90,000 sq. ft. Total Floor Area (4 Modern Sheds)",
        temperatureDrop: "From 46.5°C down to 26.8°C",
        energySavingsPercentage: "42% Lower Operating Cost vs Traditional Duct Blowers",
        financialRoi: "Payback achieved in single summer flock cycle via mortality reduction",
        imageUrl: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=80",
        summary: "Big Bird required an ultra-reliable climate system capable of handling scorching Punjab peak summers without risking flock mortality during 45°C ambient surges.",
        highlights: [
          "Installed 32 units of 50-inch high-static cone fans with galvanized butterfly shutters",
          "Engineered 180 linear meters of 150mm thick CELdek 7090 evaporative cooling wall",
          "Automated differential pressure control maintaining uniform air velocity of 2.8 m/s",
          "Zero heat stress casualties recorded during record June 2024 heatwave"
        ]
      },
      {
        id: "case-poultry-2",
        clientName: "Al-Noor Grandparent Breeder Farm",
        projectTitle: "Precision Climate & Biosecurity Ventilation Retrofit",
        location: "Kamalia, Punjab",
        completedYear: "2023",
        scope: "Supply of 5090 Cellulose Pads, Positive Pressure Air Filtration, and Electrical Automation Panel",
        capacityOrArea: "35,000 Birds Breeder Stock",
        temperatureDrop: "15.2°C Temperature Differential",
        energySavingsPercentage: "35% Energy Reduction",
        imageUrl: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1000&q=80",
        summary: "Breeder birds require stringent biosecurity combined with stable egg production temperatures. Engineering Enterprises designed a balanced positive-negative transition system.",
        highlights: [
          "Maintained constant 25.5°C and 60% relative humidity",
          "Hatchability index increased by 4.8% compared to previous season",
          "Stainless steel water gutters with integrated scale prevention bleed-off"
        ]
      }
    ],
    articles: [
      {
        id: "art-poultry-1",
        title: "Engineering Negative-Pressure Tunnel Ventilation for 45°C+ Summer Heatwaves in Pakistan",
        readTime: "7 min read",
        summary: "A comprehensive technical whitepaper on calculating CFM requirement, static pressure loss, and evaporative cooling pad area for modern closed poultry sheds.",
        author: "Engr. Asad Malik, Senior HVAC & Agricultural Engineer",
        publishDate: "January 2025",
        imageUrl: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1000&q=80",
        keyTakeaways: [
          "Air exchange rate must achieve 1 complete volume change every 45 to 60 seconds during peak summer.",
          "Pad face velocity must be maintained at 1.5 m/s for 150mm CELdek 7090 pads to prevent water droplet carryover.",
          "Wind-chill effect of 2.5 m/s velocity provides an apparent 4°C to 6°C cooling on feathered birds."
        ],
        sections: [
          {
            heading: "1. The Physics of Poultry Heat Exchange",
            paragraph: "Unlike mammals, chickens do not possess sweat glands. They rely almost exclusively on panting (respiratory evaporative heat loss) and convective heat dissipation over their skin. When ambient temperatures exceed 30°C, sensible heat transfer ceases, and birds must pant rapidly, inducing respiratory alkalosis and mortality.",
            keyPoint: "Convective cooling requires maintaining an unobstructed airspeed of 2.5 to 3.0 meters per second across bird level."
          },
          {
            heading: "2. Calculating Required Airflow (CFM) & Pad Area",
            paragraph: "For a standard 400 ft x 50 ft x 9 ft shed (180,000 cu. ft.), the required summer CFM is calculated at 8 CFM per bird for 30,000 birds = 240,000 CFM total. Using 50-inch fans delivering 24,000 CFM at 0.10 in. wg static pressure, 10 fans are required. Pad area is calculated using a face velocity of 300 FPM (1.5 m/s), requiring 800 sq. ft. of 150mm CELdek pad surface.",
            keyPoint: "Under-sizing pad area increases static pressure above 0.15 in. wg, choking fan airflow by up to 25%."
          },
          {
            heading: "3. Water Chemistry & Pad Lifespan Optimization",
            paragraph: "Pakistan's groundwater often exhibits high Total Dissolved Solids (TDS > 800 ppm). Without continuous bleed-off (3% to 5% of circulating volume), calcium and magnesium carbonates deposit rapidly inside pad flutes, choking airflow within 2 seasons. Engineering Enterprises systems integrate automated conductivity-triggered bleed valves.",
            keyPoint: "Maintain recirculating water pH between 6.5 and 8.5 and bleed water continuously to achieve 5+ years pad longevity."
          }
        ]
      }
    ],
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80", caption: "High-capacity evaporative pad bank installed on modern closed broiler shed", tag: "Pad Installation" },
      { url: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=80", caption: "50-inch cone exhaust fan battery delivering continuous negative pressure tunnel draft", tag: "Fan Battery" },
      { url: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80", caption: "Microprocessor climate control station with automated stage switching", tag: "Automation" }
    ]
  },
  {
    id: "dairy",
    title: "Dairy & Livestock Sheds",
    tagline: "Alleviate dairy cow heat stress & maximize milk yield",
    overview: "High-yielding Holstein-Friesian dairy cattle are extremely vulnerable to heat stress when the Temperature-Humidity Index (THI) exceeds 68. In Pakistani summers (THI reaching 85+), cows reduce dry matter intake (DMI) by 30-40%, leading to massive milk yield drops, reproductive failure, and mastitis. Our high-velocity low-pressure evaporative cooling systems drop shed temperatures and cool cow surfaces directly.",
    challenge: "Summer milk production drops of 25% to 35%, extended calving intervals, and high veterinary expenses due to thermal strain on imported dairy cows.",
    engineeringSolution: "Zoned evaporative cooling combining high-volume overhead circulation fans over free-stalls and feeding lanes with synchronized low-pressure soaking manifolds and CELdek evaporative intake walls.",
    keyMetrics: [
      { label: "Milk Production Protected", value: "3.5 - 5.0 L/cow/day", subtext: "Avoided typical summer drop" },
      { label: "THI Reduction", value: "From 84 to 69", subtext: "Brings cows into safe thermal comfort" },
      { label: "Dry Matter Intake (DMI)", value: "+18%", subtext: "Maintains strong feed consumption" },
      { label: "Power Efficiency", value: "0.85 kW/1000m²", subtext: "High-efficiency Veloair fans" }
    ],
    benefits: [
      "Reduces respiration rates and core body temperatures in high-yield dairy cows",
      "Prevents summer milk production drops of up to 30%",
      "Keeps feeding alleys cool and dry with directed airflow",
      "Robust corrosion-resistant galvanized fan casings designed for ammonia environments"
    ],
    recommendedSolution: "Veloair Evaporative Central Units + High Velocity Air Circulators",
    imageUrl: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=1200&q=80",
    systemEquipment: [
      { name: "Veloair 30,000 m³/h Roof Mounted Evaporative Units", spec: "3.0 kW motor, down-discharge, 100% fresh cooled air", role: "Primary barn cooling" },
      { name: "50-inch High-Velocity Dairy Circulator Fans", spec: "Hanging bracket mounted, 3-blade aerofoil, IP55 wash-down motor", role: "Feeding lane air draft" },
      { name: "Automated Pulse Soaking & Misting Manifold", spec: "Timer-controlled solenoid valves with anti-drip nozzles", role: "Direct cow evaporative soaking" },
      { name: "Central Electrical Control Panel with THI Sensors", spec: "Auto-starts fans and soakers when THI index exceeds 68", role: "Automated climate management" }
    ],
    caseStudies: [
      {
        id: "case-dairy-1",
        clientName: "Sapphire Dairy Farms",
        projectTitle: "1,500-Head High-Yield Holstein Herd Thermal Mitigation Project",
        location: "Manga Mandi, Lahore, Punjab",
        completedYear: "2024",
        scope: "Turnkey Evaporative Cooling System for 3 Large Free-Stall Barns and Holding Pen",
        capacityOrArea: "120,000 sq. ft. Total Covered Shed Area",
        temperatureDrop: "12.5°C Effective Temperature Reduction",
        energySavingsPercentage: "65% Lower Power than Chilled Air Systems",
        financialRoi: "Estimated additional 4,200 Liters milk/day retained during peak summer",
        imageUrl: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=1000&q=80",
        summary: "Sapphire Dairy sought to eliminate annual July-August milk yield slumps caused by high heat index conditions in Punjab.",
        highlights: [
          "Installed 18 units of Veloair high-capacity down-discharge evaporative coolers",
          "Equipped all 3 feeding lanes with synchronized low-pressure cow soakers",
          "Average cow respiration rates dropped from 92 breaths/min down to 48 breaths/min",
          "Zero heat-stroke casualties across 1,500 lactating cows"
        ]
      }
    ],
    articles: [
      {
        id: "art-dairy-1",
        title: "Managing the Temperature-Humidity Index (THI) in Commercial Dairy Herds in South Asia",
        readTime: "6 min read",
        summary: "A technical evaluation of THI thresholds for Holstein Friesian cows and the thermo-dynamics of combined soaking and high-speed air velocity.",
        author: "Dr. Engr. Tariq Mehmood, Thermal Systems Specialist",
        publishDate: "February 2025",
        imageUrl: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=1000&q=80",
        keyTakeaways: [
          "When THI exceeds 68, cow core body temperature rises by 0.5°C within 2 hours, suppressing rumination.",
          "Direct high-velocity airflow (2.0 to 2.5 m/s) coupled with short 45-second water soaking cycles provides maximum heat dissipation.",
          "Holding pens before milking parlor require 3x air exchange due to extreme cow density and heat concentration."
        ],
        sections: [
          {
            heading: "1. The Critical THI Curve",
            paragraph: "THI is calculated using Dry Bulb temperature and Relative Humidity: THI = 0.8 * Tdb + (RH / 100) * (Tdb - 14.4) + 46.4. At 38°C and 45% RH, THI reaches 86, which is classified as severe heat stress.",
            keyPoint: "Keeping THI under 72 prevents 80% of summer lactation losses."
          },
          {
            heading: "2. The Soaking-and-Blowing Protocol",
            paragraph: "The most energy-efficient technique is soaking the cow's back with low-pressure large water droplets (wetting the skin without creating mist), followed by 10-12 minutes of continuous 2.5 m/s air draft from 50-inch Veloair fans. This mimics artificial perspiration and dissipates up to 600 Watts of thermal energy per cow.",
            keyPoint: "Low pressure soakers (>20 PSI) prevent fine mist that cows can inhale, which could cause respiratory infection."
          }
        ]
      }
    ],
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=1200&q=80", caption: "High-volume air circulators positioned over dairy free-stall cubicles", tag: "Barn Cooling" },
      { url: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=1200&q=80", caption: "Automated feeding alley cooling and low-pressure soaking array", tag: "Feeding Lane" }
    ]
  },
  {
    id: "textile",
    title: "Textile & Garment Mills",
    tagline: "Maintain yarn moisture balance & worker peak productivity",
    overview: "Textile manufacturing—spinning, weaving, processing, and garment stitching—demands rigorous temperature and relative humidity (RH) control. In spinning halls, dry ambient air causes yarn brittleness, static electricity buildup, and continuous thread breakages. In sewing lines with hundreds of machine operators, ambient heat leads to operator fatigue and high defect rates. Engineering Enterprises supplies central duct evaporative HVAC and NFPA fire safety systems for leading exporters.",
    challenge: "High yarn breakage rates on spinning frames, static electric shocks, high temperatures (>42°C) in sewing halls, and compliance requirements for international social audits (WRAP, BSCI, Oeko-Tex).",
    engineeringSolution: "Custom-engineered central evaporative cooling plants with galvanized spiral and rectangular duct distribution, high-throw grilles, return air fluff filtration, and integrated automatic NFPA 13 fire sprinkler coverage.",
    keyMetrics: [
      { label: "Energy Savings vs AC", value: "85% - 90%", subtext: "Uses ~1.5 kW per 2,500 sq ft" },
      { label: "Spinning Breakages", value: "-45%", subtext: "Due to stable 65% RH control" },
      { label: "Operator Output", value: "+14.2%", subtext: "Measured on garment stitching lines" },
      { label: "NFPA Fire Compliance", value: "100%", subtext: "Sprinklers & fire hydrants certified" }
    ],
    benefits: [
      "Controls electrostatic charges and prevents thread snapping on spinning frames",
      "Drops ambient temperature by 10°C-15°C while saving 85-90% electricity compared to central chiller AC",
      "Rapidly removes fluff, lint, and airborne particulate matter with return air wash systems",
      "Complies with international buyer social and environmental audit standards (BSCI, WRAP, SEDEX)"
    ],
    recommendedSolution: "Central Evaporative Duct Systems + Automatic Mist Humidification + NFPA 13 Fire Sprinklers",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    systemEquipment: [
      { name: "Veloair Industrial 30,000 CFM Central Evaporative Coolers", spec: "Heavy-duty fiberglass/SS casing, Munters CELdek 5090 pads, IP55 high-static fan", role: "Primary air conditioning" },
      { name: "Galvanized Steel Supply Ductwork", spec: "CNC-fabricated 22/24 gauge GI sheet with aerodynamic volume control dampers", role: "Precision airflow distribution" },
      { name: "Automatic Fire Sprinkler Network", spec: "NFPA 13 compliant upright/pendent sprinklers, zone control valves", role: "Factory life safety" },
      { name: "PFI & LT Electrical Power Switchboards", spec: "4000A LT panel with automated PFI capacitor banks maintaining 0.98 power factor", role: "Main power distribution" }
    ],
    caseStudies: [
      {
        id: "case-textile-1",
        clientName: "Style Textile Pvt. Ltd.",
        projectTitle: "Garment Sewing Floor & Spinning Hall Climate + Fire Safety Turnkey",
        location: "Manghopir Road / Lahore Plant",
        completedYear: "2024",
        scope: "Turnkey Installation of 24 Veloair 30,000 m³/h Evaporative Coolers with Galvanized Ducting & NFPA 13 Sprinklers",
        capacityOrArea: "180,000 sq. ft. Total Production Floor (3,500 Sewing Operators)",
        temperatureDrop: "From 43.8°C down to 27.2°C",
        energySavingsPercentage: "88% Electricity Savings vs Central Chilled Water AC",
        financialRoi: "Saved ~Rs. 1.8 Million/month in electricity bills during summer months",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
        summary: "Style Textile needed to create a compliant, cool, 100% fresh air working environment for thousands of machine operators while keeping power consumption minimal.",
        highlights: [
          "Delivered 720,000 CFM of 100% fresh cooled air distributed evenly through double-deflection grilles",
          "Achieved compliance with international social audit standards (WRAP & BSCI)",
          "Installed complete NFPA 13 wet pipe fire sprinkler system with 2,500 GPM fire pump set",
          "CEO Bilal Khan commended the project for boosting worker productivity and reducing energy overhead"
        ]
      },
      {
        id: "case-textile-2",
        clientName: "Beacon Impex Textiles",
        projectTitle: "Weaving Shed Humidity & Thermal Management Retrofit",
        location: "Faisalabad Industrial Estate",
        completedYear: "2023",
        scope: "Design and supply of high-static evaporative humidification units with lint separators",
        capacityOrArea: "65,000 sq. ft. Air-Jet Weaving Hall",
        temperatureDrop: "Maintained 26°C with 72% ± 3% RH",
        energySavingsPercentage: "82% Cost Savings",
        imageUrl: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
        summary: "Air-jet looms require strict relative humidity to prevent warp yarn breakage. Engineering Enterprises provided a precision humidification loop.",
        highlights: [
          "Warp breakage rate reduced by 38%, maximizing loom efficiency to 94%",
          "Continuous lint evacuation improved indoor air particulate quality",
          "Integrated FM-200 clean agent gas flood system for electronic loom control rooms"
        ]
      }
    ],
    articles: [
      {
        id: "art-textile-1",
        title: "Optimizing Psychrometric Humidity & Energy in Textile Spinning & Garment Floors",
        readTime: "8 min read",
        summary: "How evaporative cooling delivers the dual benefit of thermal reduction and yarn-friendly relative humidity at one-tenth the power of compressor-based HVAC.",
        author: "Engr. M. Boota, Founder & HVACR Life Member",
        publishDate: "December 2024",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
        keyTakeaways: [
          "Spinning processes require 60%-68% RH; weaving requires 70%-78% RH to prevent static and yarn brittleness.",
          "Evaporative cooling naturally raises RH while lowering dry bulb temperature along the wet bulb enthalpy line.",
          "Compressor AC removes moisture, requiring costly artificial re-humidification steam boilers."
        ],
        sections: [
          {
            heading: "1. The Thermodynamic Advantage for Textiles",
            paragraph: "Standard air conditioning relies on refrigeration coils that dehumidify the air. In a textile mill, removing moisture is disastrous: cotton fibers become brittle and break under loom tension. Evaporative cooling follows an isenthalpic psychrometric curve—cooling the air while simultaneously adding beneficial moisture.",
            keyPoint: "No need for secondary steam or ultrasonic humidifiers; the cooling process itself creates optimal weaving conditions."
          },
          {
            heading: "2. Energy Comparison: 100 Tons AC vs Veloair",
            paragraph: "Cooling a 50,000 sq. ft. sewing floor with conventional chillers requires ~150 Tons of refrigeration (approx. 180 kW electrical power). The equivalent Veloair evaporative duct network requires only 18 kW (a 90% reduction in connected load), saving millions of rupees in industrial electricity tariffs every single quarter.",
            keyPoint: "Operational electrical cost drops from Rs. 950,000/month to under Rs. 110,000/month."
          }
        ]
      }
    ],
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80", caption: "Galvanized high-static ductwork delivering fresh cooled air along garment lines", tag: "Duct Distribution" },
      { url: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80", caption: "Roof-mounted Veloair central evaporative units supplying multiple production sheds", tag: "Roof Units" }
    ]
  },
  {
    id: "greenhouses",
    title: "Commercial Greenhouses & Floriculture",
    tagline: "Precision climate management for high-value agricultural crops",
    overview: "Commercial greenhouses, seed multiplication centers, and high-tech floriculture require exact microclimate envelopes. Intense solar radiation in Pakistan can heat greenhouse interiors to over 52°C, causing flower abortion, crop burning, and failure in export-grade Dutch roses, bell peppers, and tomatoes. Engineering Enterprises provides engineered fan-and-pad wall systems with automated shade screens and irrigation loops.",
    challenge: "Excessive solar radiation spikes, heat stress on delicate crops, inconsistent humidity gradients, and algae fouling on low-grade cooling pads.",
    engineeringSolution: "Munters-standard CELdek 5090 cross-flute evaporative pad walls, heavy-duty exhaust extractors with light-trap louvers, automated climate controllers, and water UV purification.",
    keyMetrics: [
      { label: "Crop Yield Boost", value: "+32%", subtext: "Higher grade produce for export" },
      { label: "Uniform Temp Gradient", value: "<2.5°C", subtext: "From pad wall to exhaust fans" },
      { label: "Solar Heat Reduction", value: "15°C - 20°C", subtext: "Maintains optimal photosynthesis" },
      { label: "Pad Operational Life", value: "5+ Years", subtext: "Algae-resistant resin treatment" }
    ],
    benefits: [
      "Provides uniform cooling and humidity gradients across large canopy areas",
      "Prevents blossom drop and solar leaf scorch in exotic flowers & hydroponics",
      "Automated sensor-driven climate logic with variable speed fan modulation",
      "Durable algae-resistant kraft cellulose pad cassettes"
    ],
    recommendedSolution: "Veloair 5090 Evaporative Wall Pads + Automatic Water Recirculation + Shade Automation",
    imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
    systemEquipment: [
      { name: "CELdek 5090 Evaporative Wall Pads", spec: "100mm/150mm thickness, 45°/45° flute geometry, anti-algae treated", role: "High-efficiency evaporative intake" },
      { name: "50-inch AMCA Certified Exhaust Box Fans", spec: "High airflow at low static resistance, belt driven, IP55", role: "Greenhouse air extraction" },
      { name: "Stainless Steel / Aluminum Pad Cassette Gutters", spec: "Self-draining top distribution pipe with removable cleanout plugs", role: "Water loop distribution" },
      { name: "Greenhouse Microclimate Controller", spec: "Integrates PAR light sensors, temperature, RH, and motorized shade curtains", role: "Total climate automation" }
    ],
    caseStudies: [
      {
        id: "case-greenhouse-1",
        clientName: "Guard Agricultural Research Complex",
        projectTitle: "Hydroponic Seed Multiplication & Floriculture Climate Enclosure",
        location: "Multan Road, Lahore, Punjab",
        completedYear: "2024",
        scope: "Design, Supply & Turnkey Installation of Fan & Pad Systems for 8 Multi-Span Polyhouse Greenhouses",
        capacityOrArea: "45,000 sq. ft. Total Greenhouse Canopy Area",
        temperatureDrop: "From 47°C outside peak down to 26°C inside canopy",
        energySavingsPercentage: "70% Lower Energy vs Compressors",
        financialRoi: "Enabled 100% export-grade Dutch rose yield during summer months",
        imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80",
        summary: "Guard Agri needed to safeguard sensitive export floriculture from intense Punjab summers without incurring exorbitant electrical bills.",
        highlights: [
          "Custom installed 120 linear meters of CELdek 5090 pad walls with auto-flushing water manifolds",
          "Automated variable stage fan cycling based on solar light intensity and canopy temp",
          "Maintained humidity between 65% and 75% for optimal tomato pollination"
        ]
      }
    ],
    articles: [
      {
        id: "art-greenhouse-1",
        title: "Engineering Fan-and-Pad Systems for Multi-Span Greenhouses in Arid & Subtropical Zones",
        readTime: "6 min read",
        summary: "Technical guide on pad-to-fan distance limitations, maximum permissible temperature rise (ΔT), and water quality control in commercial horticulture.",
        author: "Engr. Asad Malik, Turnkey Systems Specialist",
        publishDate: "November 2024",
        imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80",
        keyTakeaways: [
          "Maximum distance between cooling pad wall and exhaust fans should not exceed 40 to 45 meters to prevent excessive temperature rise.",
          "Air exchange rate should be 0.75 to 1.0 greenhouse volume per minute under full summer solar load.",
          "Algae growth can be prevented by drying pads completely once every 24 hours during nighttime."
        ],
        sections: [
          {
            heading: "1. Solar Heat Load & Airflow Sizing",
            paragraph: "Solar radiation in Pakistan routinely delivers 900 to 1,000 W/m² on greenhouse glazing. After applying 50% thermal shade cloth, the remaining heat must be extracted via evaporative air exchange at 8 to 10 CFM per square foot of floor area.",
            keyPoint: "For a 10,000 sq. ft. greenhouse, sizing at 90,000 CFM maintains inside temperatures within 2°C of wet bulb."
          }
        ]
      }
    ],
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80", caption: "High-yield commercial hydroponic tomato canopy under evaporative climate control", tag: "Canopy Cooling" }
    ]
  },
  {
    id: "industrial",
    title: "Industrial Plants & Warehouses",
    tagline: "Spot cooling & wide area thermal relief for busy factory floors",
    overview: "Manufacturing plants—plastics, metal fabrication, packaging, chemical compounding, automotive assembly, and logistics warehouses—suffer from extreme internal heat build-up generated by heavy machinery, extrusion dies, and uninsulated metal roofs. Indoor temperatures frequently cross 48°C, threatening worker health and triggering equipment thermal tripping. Engineering Enterprises delivers high-flow evaporative cooling systems and NFPA fire safety networks.",
    challenge: "Extreme ambient and machinery heat causing heat exhaustion, worker absenteeism, machine motor overheating, and strict compliance requirements for industrial fire safety.",
    engineeringSolution: "Roof/wall mounted Veloair evaporative air coolers delivering up to 30,000 m³/h per unit through aerodynamic 4-way diffusers, combined with high-flow rooftop exhaust fans and NFPA hydrant networks.",
    keyMetrics: [
      { label: "Electricity Savings", value: "80% - 85%", subtext: "Compared to package AC systems" },
      { label: "Worker Absenteeism", value: "-60%", subtext: "Significant improvement in summer months" },
      { label: "Fresh Air Flow", value: "100%", subtext: "Zero stale air recirculation" },
      { label: "Cooling Coverage", value: "2,000 sq ft / unit", subtext: "High velocity 30,000 m³/h units" }
    ],
    benefits: [
      "Converts hot, stuffy factory environments into comfortable productive zones",
      "Consumes only 1.1 kW to 3.0 kW to cool up to 2,000 sq ft area",
      "Eliminates stale indoor air with continuous 100% fresh atmospheric air",
      "Zero expensive refrigerant gases; uses pure natural water evaporation"
    ],
    recommendedSolution: "Veloair Industrial 30,000 m³/h Roof/Side Mounted Coolers + NFPA Fire Hydrant Grid",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    systemEquipment: [
      { name: "Veloair 30,000 m³/h Industrial Evaporative Cooler", spec: "UV-stabilized polymer cabinet, Munters 5090 pads, IP55 inverter motor", role: "Primary warehouse cooling" },
      { name: "Industrial Roof Powered Extractors", spec: "Fibreglass cowl, aerofoil blade, high CFM extraction", role: "Heat and fume expulsion" },
      { name: "NFPA Fire Hydrant & Hose Reel Stations", spec: "Class 1 pillar hydrants, 2.5\" synthetic hose, landing valves", role: "Factory fire defense" },
      { name: "ATS / AMF Generator Changeover Switchboards", spec: "Schneider components, motorized MCCBs, automated load management", role: "Uninterrupted power supply" }
    ],
    caseStudies: [
      {
        id: "case-industrial-1",
        clientName: "Forward Sports (Official FIFA Ball Manufacturer)",
        projectTitle: "Synthetic Ball Production & Printing Hall Climate + Fire Protection",
        location: "Sialkot Export Zone, Punjab",
        completedYear: "2024",
        scope: "Turnkey Installation of 16 Veloair Industrial Coolers with Duct Drops and Complete Fire Hydrant Loop",
        capacityOrArea: "95,000 sq. ft. Multi-Story Manufacturing Complex",
        temperatureDrop: "From 45°C down to 28.5°C on printing & stitching lines",
        energySavingsPercentage: "84% Lower Power than Central Chilled Water AC",
        financialRoi: "Satisfied Adidas global environmental & worker welfare audit benchmarks",
        imageUrl: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
        summary: "Forward Sports required an internationally audited, zero-emission fresh air cooling solution for their high-precision ball production facility.",
        highlights: [
          "Installed roof-mounted units with drop ducts directly above printing tables and lamination machines",
          "Maintained air quality and purged solvent vapors with 100% fresh air displacement",
          "Installed high-pressure fire hydrant ring with 100,000-liter dedicated reserve reservoir",
          "Achieved gold rating on third-party international buyer facility audit"
        ]
      },
      {
        id: "case-industrial-2",
        clientName: "Servis Tyres & Footwear",
        projectTitle: "Molding & Vulcanization Hall High-Heat Ventilation",
        location: "Muridke Industrial Estate",
        completedYear: "2023",
        scope: "High-velocity exhaust fans and evaporative spot cooling manifolds",
        capacityOrArea: "110,000 sq. ft. Heavy Rubber Processing Facility",
        temperatureDrop: "Reduced spot temperatures by 14°C at machine operator stations",
        energySavingsPercentage: "78% Energy Efficiency",
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
        summary: "Rubber vulcanization presses generate intense localized heat. Engineering Enterprises engineered a custom spot-cooling and thermal relief network.",
        highlights: [
          "Engineered directional spot cooling nozzles delivering 18 m/s air streams directly to press operators",
          "Exhausted rubber curing fumes rapidly to maintain safe particulate levels",
          "Installed certified Class A/B dry powder and foam fire extinguishing units"
        ]
      }
    ],
    articles: [
      {
        id: "art-industrial-1",
        title: "Spot Cooling vs. Total Area Air Conditioning in Heavy Manufacturing Facilities",
        readTime: "7 min read",
        summary: "How targeted spot cooling delivers thermal comfort to machine operators in large high-bay warehouses without the unfeasible cost of conditioning millions of cubic feet of dead air.",
        author: "Engr. M. Boota, PEC Registered Consultant",
        publishDate: "October 2024",
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
        keyTakeaways: [
          "In high-bay buildings (>8 meters ceiling), cooling the entire volume with conventional AC wastes 70% of energy cooling unoccupied overhead space.",
          "Targeted spot cooling supplies 100% fresh cooled air directly to human workstations at 2.0 to 3.5 m/s velocity.",
          "Positive pressure prevents outdoor dust and unconditioned ambient heat from infiltrating active zones."
        ],
        sections: [
          {
            heading: "1. The High-Bay Thermal Stratification Reality",
            paragraph: "In manufacturing buildings, heat naturally rises to the ceiling where temperatures can exceed 55°C. Air conditioning units that recirculate air from the floor continually fight this heat mass. Evaporative spot cooling introduces fresh dense cooled air at worker level, while roof-mounted gravity louvers release the hot overhead layer.",
            keyPoint: "Spot cooling delivers 28°C comfort at workstations even when ceiling temperatures hover above 50°C."
          }
        ]
      }
    ],
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80", caption: "High-bay logistics warehouse equipped with roof-mounted evaporative cooling and extractors", tag: "Logistics Cooling" },
      { url: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80", caption: "Industrial factory floor spot-cooling duct drops providing direct worker thermal relief", tag: "Factory Floor" }
    ]
  },
  {
    id: "commercial",
    title: "Commercial Plazas & Food Outlets",
    tagline: "Aesthetic cooling, kitchen smoke extraction & fire safety",
    overview: "Commercial shopping plazas, restaurants, supermarkets, food courts, and entertainment venues require a sophisticated balance of customer thermal comfort, kitchen grease exhaust ventilation, and stringent NFPA life safety fire systems. High footfall during peak hours generates significant internal sensible and latent heat loads. Engineering Enterprises provides hybrid central cooling, FM-200 clean agent server protection, and kitchen hood fire suppression systems.",
    challenge: "High customer footfall heat loads, kitchen smoke and grease buildup, strict fire safety compliance, and the need for whisper-quiet HVAC operation.",
    engineeringSolution: "Hybrid HVAC systems pairing packaged rooftop units or central chillers with low-noise evaporative ventilation, UL300 kitchen hood fire suppression, automatic fire sprinklers, and FM-200 server room systems.",
    keyMetrics: [
      { label: "Kitchen Smoke Clearance", value: "99.4%", subtext: "High-efficiency grease extraction" },
      { label: "Noise Level", value: "<52 dB(A)", subtext: "Whisper-quiet customer dining zones" },
      { label: "Fire Safety Compliance", value: "NFPA 96 & 13", subtext: "Full civil defense certification" },
      { label: "Energy Bill Optimization", value: "40% - 60%", subtext: "Via hybrid cooling & fresh air cycle" }
    ],
    benefits: [
      "Energy-efficient cooling for customer halls, food courts, and supermarkets",
      "Complete NFPA compliant kitchen exhaust hoods and grease filters",
      "Integrated fire sprinkler and hydrant safety networks",
      "Low sound decibel ratings suitable for dining spaces and corporate boardrooms"
    ],
    recommendedSolution: "Packaged Air Conditioning + Kitchen Ventilation & Fire Hydrants + FM-200",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    systemEquipment: [
      { name: "Custom Double-Skin Air Handling Units (AHU)", spec: "Copper tube aluminum fin coils, G4/F7 filtration, low noise plug fans", role: "Primary plaza central cooling" },
      { name: "NFPA 96 Commercial Kitchen Exhaust Hoods", spec: "Stainless steel 304 construction, baffle grease filters, fire damper interlocks", role: "Kitchen smoke/grease expulsion" },
      { name: "Wet Pipe Fire Sprinkler & Hydrant Network", spec: "Job Germany quartz bulb sprinklers, landing valves, dual fire pump skid", role: "Building life safety" },
      { name: "FM-200 Gaseous Fire Suppression System", spec: "UL/FM listed, 10-second discharge, zero ozone depletion", role: "Server & electrical room safety" }
    ],
    caseStudies: [
      {
        id: "case-commercial-1",
        clientName: "Joy Land Amusement & Retail Hubs",
        projectTitle: "High-Footfall Indoor Entertainment Complex Climate & Fire Safety",
        location: "Rawalpindi & Lahore Facilities",
        completedYear: "2024",
        scope: "Turnkey HVAC, Evaporative Fresh Air Injection, and Complete Fire Fighting Network",
        capacityOrArea: "85,000 sq. ft. Total Indoor Entertainment Space",
        temperatureDrop: "Comfortable 24°C - 26°C maintained under 5,000+ simultaneous visitors",
        energySavingsPercentage: "62% Power Savings vs Pure Chiller System",
        financialRoi: "Substantial operational savings with glowing testimonial from CEO Ahsan Tariq",
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
        summary: "Joy Land needed continuous fresh air replacement to eliminate stuffiness and maintain crisp customer comfort during peak weekend crowds.",
        highlights: [
          "Engineered hybrid fresh air evaporative intake combined with secondary DX cooling coils",
          "Installed complete fire sprinkler grid certified by local civil defense authorities",
          "CEO Ahsan Tariq praised the solution: 'Air is fresh, environment is cool, and energy savings are remarkable'"
        ]
      },
      {
        id: "case-commercial-2",
        clientName: "Nando's Pakistan Outlets",
        projectTitle: "Commercial Kitchen Grease Exhaust & Dining Room HVAC",
        location: "Multiple Outlets (Lahore & Islamabad)",
        completedYear: "2023",
        scope: "Stainless Steel 304 Kitchen Hoods, Fire Suppression Damper Links & Dining AC",
        capacityOrArea: "5 Restaurant Outlets",
        temperatureDrop: "Maintained 22°C Dining Area Comfort",
        energySavingsPercentage: "35% Energy Reduction",
        imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
        summary: "High-heat peri-peri flame grills generate intense grease and heat requiring precise air balance and certified fire safety.",
        highlights: [
          "Zero grease odor migration into customer dining areas with calibrated negative pressure kitchen hoods",
          "Installed automatic wet chemical fire suppression systems directly over grill cooktops",
          "100% compliance with international franchise audit criteria"
        ]
      }
    ],
    articles: [
      {
        id: "art-commercial-1",
        title: "NFPA 96 & 13 Compliance for Commercial Kitchens & High-Footfall Retail Centers",
        readTime: "6 min read",
        summary: "A practical guide to kitchen hood exhaust velocity calculations, grease extraction, fire damper integration, and wet chemical suppression.",
        author: "Engr. M. Boota, Life Member Pakistan HVACR Society",
        publishDate: "September 2024",
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
        keyTakeaways: [
          "Commercial kitchen hoods require minimum 1,500 to 2,000 FPM duct velocity to prevent grease coagulation inside ducts.",
          "Kitchen spaces must operate under negative pressure relative to the dining hall to prevent smoke and aroma migration.",
          "UL 300 wet chemical fire suppression automatically interrupts gas supply and douses cooking surfaces within seconds."
        ],
        sections: [
          {
            heading: "1. The Physics of Kitchen Air Balance",
            paragraph: "For every 1,000 CFM of hot grease-laden air exhausted through the hood, approximately 800 CFM of dedicated make-up air (MUA) must be introduced. Drawing unconditioned air from the dining room overworks customer air conditioners and causes drafty doors.",
            keyPoint: "Dedicated tempered make-up air systems reduce dining room AC power consumption by 30%."
          }
        ]
      }
    ],
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", caption: "Modern commercial retail and entertainment mall interior conditioned by Engineering Enterprises", tag: "Retail Mall" },
      { url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80", caption: "High-spec commercial restaurant kitchen ventilation and fire suppression hood setup", tag: "Kitchen Exhaust" }
    ]
  }
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    city: "Lahore",
    type: "Head Office",
    address: "10-Q, Johar Town, Lahore, Punjab, Pakistan",
    phones: ["+92 (42) 3595 6625", "+92 (42) 3595 6626", "+92 (300) 8425 772"],
    fax: "+92 (42) 3595 6617",
    email: "info@engineeringenterprises.com.pk",
    mapQuery: "10-Q Johar Town Lahore Pakistan"
  },
  {
    city: "Lahore",
    type: "Manufacturing Factory & Workshop",
    address: "Abu Bakar Siddique Colony, Bund Road, Lahore, Pakistan",
    phones: ["+92 (42) 3546 9186", "+92 (42) 3741 9890"],
    email: "factory@engineeringenterprises.com.pk",
    mapQuery: "Bund Road Lahore Pakistan"
  },
  {
    city: "Islamabad",
    type: "Regional Office",
    address: "Suite 25-26, Al-Hameed Mall, G-11 Markaz, Islamabad, Pakistan",
    phones: ["+92 (51) 236 1351", "+92 (343) 4999 038"],
    email: "islamabad@engineeringenterprises.com.pk",
    mapQuery: "Al Hameed Mall G-11 Markaz Islamabad"
  }
];

export const PROJECT_IDEOLOGY = [
  {
    step: "01",
    title: "Innovation",
    description: "Pioneering state-of-the-art evaporative thermodynamics, smart inverter controls, and clean agent fire engineering."
  },
  {
    step: "02",
    title: "Enhancement",
    description: "Continually upgrading system efficiency, reducing client operational costs, and boosting environmental sustainability."
  },
  {
    step: "03",
    title: "Improvement",
    description: "Adhering to rigorous ISO 9001 and NFPA quality benchmarks with meticulous quality audits at every junction."
  },
  {
    step: "04",
    title: "Growth",
    description: "Scaling sustainable engineering partnerships with leading multinationals and local industry leaders across Pakistan."
  }
];

export const LIFECYCLE_STEPS = [
  {
    name: "Design",
    color: "from-blue-600 to-cyan-600",
    desc: "Thermal load calculation, CFM sizing, hydraulic fire piping design, and single-line electrical schematics."
  },
  {
    name: "Planning",
    color: "from-rose-600 to-red-600",
    desc: "Project scheduling, material sourcing, NFPA/PEC compliance verification, and budgetary optimization."
  },
  {
    name: "Execution",
    color: "from-slate-800 to-slate-900",
    desc: "On-site installation, duct fabrication, panel assembly, piping erection by certified technicians."
  },
  {
    name: "Completion",
    color: "from-amber-600 to-yellow-600",
    desc: "Hydraulic pressure testing, airflow balancing, smoke testing, and formal client handover."
  },
  {
    name: "After Sale Services",
    color: "from-emerald-600 to-teal-600",
    desc: "24/7 technical hotline, scheduled preventative maintenance, genuine spare parts, and pad replacements."
  }
];
