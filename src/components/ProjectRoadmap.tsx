import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Layers, 
  Factory, 
  Wrench, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  FileText, 
  Cpu, 
  ArrowRight, 
  Play, 
  Pause, 
  Check, 
  PhoneCall,
  CalendarCheck,
  Zap,
  Award
} from 'lucide-react';
import { COMPANY_INFO } from '../data/engineeringData';

interface RoadmapStep {
  id: number;
  phaseNumber: string;
  title: string;
  shortTitle: string;
  tagline: string;
  duration: string;
  icon: React.ElementType;
  colorScheme: {
    badgeBg: string;
    badgeText: string;
    accent: string;
    border: string;
    lightBg: string;
  };
  summary: string;
  deliverables: {
    name: string;
    detail: string;
  }[];
  standardsAndQc: string[];
  toolsAndTech: string[];
  clientAction: string;
  keyMetric: {
    value: string;
    label: string;
  };
}

const ROADMAP_STEPS: RoadmapStep[] = [
  {
    id: 1,
    phaseNumber: "PHASE 01",
    title: "Engineering Site Survey & Thermal Audit",
    shortTitle: "Site Survey & Audit",
    tagline: "Precision data collection, heat load diagnostics & baseline psychrometric mapping",
    duration: "2 – 5 Working Days",
    icon: Compass,
    colorScheme: {
      badgeBg: "bg-blue-100",
      badgeText: "text-[#1677FF]",
      accent: "#1677FF",
      border: "border-blue-200",
      lightBg: "bg-blue-50/50"
    },
    summary: "Our PEC-registered HVAC engineers visit your industrial or commercial facility to perform an exhaustive heat load audit, evaluating solar gain, machinery dissipation, occupancy, and ambient humidity patterns across peak summer conditions.",
    deliverables: [
      { name: "Psychrometric Heat Load Calculation", detail: "Comprehensive CFM airflow and sensible/latent heat capacity modeling" },
      { name: "Existing Infrastructure Audit", detail: "Electrical switchgear capacity, water source TDS, and structural roof load review" },
      { name: "NFPA Fire Risk Assessment", detail: "Hazard classification (Light/Ordinary/Extra) and hydrant/sprinkler baseline mapping" },
      { name: "Techno-Commercial Feasibility Matrix", detail: "Comparative operating cost projections: Veloair Evaporative vs conventional DX HVAC" }
    ],
    standardsAndQc: [
      "ASHRAE Standard 55 (Thermal Environmental Conditions)",
      "NFPA 13 / 14 / 20 Baseline Hazard Classification",
      "ISO 50002 Energy Audit Guidelines",
      "Pakistan Engineering Council (PEC) Professional Practice Standards"
    ],
    toolsAndTech: [
      "Testo 875 Industrial Thermal Imaging Camera",
      "Digital Vane Anemometer & Pitot Tubes",
      "Fluke Laser Distance & Psychrometer Meters",
      "Carrier HAP 5.1 & Elite CHVAC Simulation Engine"
    ],
    clientAction: "Provide architectural layouts and utility power/water connection points for surveyor access.",
    keyMetric: {
      value: "100%",
      label: "Custom Data Precision"
    }
  },
  {
    id: 2,
    phaseNumber: "PHASE 02",
    title: "3D CAD Blueprinting & Custom Sizing",
    shortTitle: "3D CAD & Sizing",
    tagline: "BIM ductwork modeling, hydraulic calculations & comprehensive BOQ generation",
    duration: "5 – 10 Working Days",
    icon: Layers,
    colorScheme: {
      badgeBg: "bg-indigo-100",
      badgeText: "text-indigo-700",
      accent: "#4f46e5",
      border: "border-indigo-200",
      lightBg: "bg-indigo-50/50"
    },
    summary: "Our design team translates site diagnostics into high-fidelity 3D CAD/BIM blueprints. We calculate friction losses in ducting, optimize air throw dispersion with double-deflection grilles, and finalize structural equipment layout drawings.",
    deliverables: [
      { name: "3D Ducting & Piping Schematics", detail: "Isometric drawings with structural hanging points and diffuser coordinates" },
      { name: "Hydraulic Calculation Dossier", detail: "Pump head sizing, friction losses, and pipe diameter optimization" },
      { name: "Single Line Diagram (SLD)", detail: "Electrical panel schematics, circuit breakers, and ATS interlock plans" },
      { name: "Certified Equipment BOQ", detail: "Itemized bill of quantities with guaranteed performance warranties" }
    ],
    standardsAndQc: [
      "SMACNA HVAC Duct Construction Standards (Metal & Flexible)",
      "NFPA 20 Standard for the Installation of Stationary Pumps",
      "IEC 61439 Low-Voltage Switchgear Standards",
      "ASHRAE 62.1 Ventilation for Acceptable Indoor Air Quality"
    ],
    toolsAndTech: [
      "AutoCAD MEP & Revit 3D Building Information Modeling",
      "SolidWorks 3D Sheet Metal & Stress Analysis",
      "HydraCAD & PipeFlow Professional",
      "Schneider & Siemens Panel Design Softwares"
    ],
    clientAction: "Engineering review and formal design sign-off on 3D drawings and proposed Bill of Quantities.",
    keyMetric: {
      value: "±1 CFM",
      label: "Airflow Simulation Accuracy"
    }
  },
  {
    id: 3,
    phaseNumber: "PHASE 03",
    title: "In-House Precision Manufacturing & FAT",
    shortTitle: "Manufacturing & FAT",
    tagline: "ISO 9001 certified CNC sheet metal fabrication, motor balancing & factory testing",
    duration: "10 – 20 Working Days",
    icon: Factory,
    colorScheme: {
      badgeBg: "bg-amber-100",
      badgeText: "text-amber-800",
      accent: "#d97706",
      border: "border-amber-200",
      lightBg: "bg-amber-50/50"
    },
    summary: "Equipment is manufactured at our 50,000 sq ft Bund Road Lahore factory. Heavy-gauge galvanized casings, Swedish cellulose 5090/7090 cooling pads, balanced axial impellers, and IP54/IP65 electrical switchboards undergo rigorous Factory Acceptance Testing (FAT).",
    deliverables: [
      { name: "Heavy-Duty Veloair Unit Assemblies", detail: "Anti-UV polymer / GI heavy gauge cabinets with variable speed copper motors" },
      { name: "Custom Double-Skin AHUs & Air Washers", detail: "Extruded aluminum profile frames with polyurethane thermal break insulation" },
      { name: "Custom Motor Control Centers (MCC)", detail: "Powder-coated sheet steel switchboards with Schneider / ABB switchgear" },
      { name: "FAT Compliance Certificate", detail: "Hydrostatic test logs, megger insulation reports, and vibration test sheets" }
    ],
    standardsAndQc: [
      "ISO 9001:2008 Quality Management System",
      "Carrier International Apex Manufacturing Standards",
      "ISO 1940-1 Dynamic Balancing Grades for Industrial Fans",
      "IP54 / IP65 Enclosure Ingress Protection Validation"
    ],
    toolsAndTech: [
      "CNC Fiber Laser Cutting & Hydraulic Bending Presses",
      "Dynamic Electronic Wheel Balancing Machines",
      "High-Voltage Dielectric Breakdown Test Rigs",
      "Automated Electrostatic Powder Coating Oven"
    ],
    clientAction: "Optional client delegation factory visit to inspect equipment prior to dispatch.",
    keyMetric: {
      value: "100%",
      label: "Pre-Dispatch Inspected"
    }
  },
  {
    id: 4,
    phaseNumber: "PHASE 04",
    title: "Turnkey On-Site Installation & Erection",
    shortTitle: "On-Site Installation",
    tagline: "PEC-supervised mechanical erection, galvanized duct hanging & pipework rigging",
    duration: "10 – 30 Working Days",
    icon: Wrench,
    colorScheme: {
      badgeBg: "bg-emerald-100",
      badgeText: "text-emerald-800",
      accent: "#059669",
      border: "border-emerald-200",
      lightBg: "bg-emerald-50/50"
    },
    summary: "Experienced project managers and technicians execute the on-site mechanical and electrical erection. Work proceeds with strict safety compliance, minimizing disruption to active factory production lines and continuous commercial operations.",
    deliverables: [
      { name: "Galvanized Ductwork Network", detail: "Acoustically insulated and properly sealed with neoprene gaskets and canvas joints" },
      { name: "Rigid Structural Mounting Frames", detail: "Vibration-damped steel trusses engineered for high wind load stability" },
      { name: "Hydronic & Water Loop Integration", detail: "Piping, valves, strainers, float assemblies, and automated drainage loops" },
      { name: "Power & Automation Cabling", detail: "Armored power feeds, VFD controllers, and sensor network integration" }
    ],
    standardsAndQc: [
      "PEC Construction Safety & Supervision By-laws",
      "OSHA Industrial Rigging & Fall Protection Compliance",
      "NFPA 70 National Electrical Code (NEC) Wiring Standards",
      "Site QA/QC Daily Log & Milestone Sign-offs"
    ],
    toolsAndTech: [
      "Laser Level Alignment Systems",
      "Hydraulic Pipe Threaders & Groovers",
      "Torque Wrenches & Flange Calibration Kits",
      "Heavy-Duty Scissor Lifts & Rigging Cranes"
    ],
    clientAction: "Provide site clearance, unhindered roof/floor access, and primary power termination points.",
    keyMetric: {
      value: "0.00",
      label: "Lost-Time Injury Target"
    }
  },
  {
    id: 5,
    phaseNumber: "PHASE 05",
    title: "Testing, Adjusting & Balancing (TAB) & Commissioning",
    shortTitle: "TAB & Commissioning",
    tagline: "Airflow calibration, temperature drop verification & NFPA hydrostatic flow testing",
    duration: "3 – 7 Working Days",
    icon: Activity,
    colorScheme: {
      badgeBg: "bg-teal-100",
      badgeText: "text-teal-800",
      accent: "#0d9488",
      border: "border-teal-200",
      lightBg: "bg-teal-50/50"
    },
    summary: "We perform formal Testing, Adjusting, and Balancing (TAB). Every duct run and grille is measured and adjusted to deliver designed CFM. The system is run continuously under peak ambient conditions to verify the 10°C to 15°C temperature drop and 90% energy savings.",
    deliverables: [
      { name: "Comprehensive TAB Air Balance Report", detail: "Room-by-room CFM distribution readings matching design specs within ±5%" },
      { name: "Thermal Performance Verification", detail: "Delta-T measurements proving 10°C–15°C temperature drop across the workspace" },
      { name: "NFPA Fire Pump Flow & Pressure Graph", detail: "Hydrostatic test logs at 200 PSI proving leak-free integrity" },
      { name: "Electrical Power Factor & Amperage Logs", detail: "Verified power consumption matching the 90% savings guarantee" }
    ],
    standardsAndQc: [
      "NEBB & ASHRAE 111 TAB Performance Guidelines",
      "NFPA 25 Inspection, Testing, and Maintenance of Water-Based Fire Protection",
      "ISO 3744 Acoustic & Decibel Level Sound Compliance",
      "PEC Engineering Commissioning Handover Code"
    ],
    toolsAndTech: [
      "TSI Airflow Hood & Micro-manometers",
      "Fluke Power Quality & Energy Analyzers",
      "Digital Sound Level Meters (dBA)",
      "Non-contact Infrared Thermometers"
    ],
    clientAction: "Join the joint testing team for live witnessing and performance protocol sign-off.",
    keyMetric: {
      value: "10-15°C",
      label: "Guaranteed Temp Drop"
    }
  },
  {
    id: 6,
    phaseNumber: "PHASE 06",
    title: "Handover, Operator Training & Lifetime AMC",
    shortTitle: "Handover & Lifetime AMC",
    tagline: "As-built schematics, operator certifications, 12-month warranty & 24/7 technical hotline",
    duration: "Ongoing Service & Support",
    icon: ShieldCheck,
    colorScheme: {
      badgeBg: "bg-sky-100",
      badgeText: "text-sky-800",
      accent: "#0284c7",
      border: "border-sky-200",
      lightBg: "bg-sky-50/50"
    },
    summary: "Upon completion, we deliver comprehensive As-Built drawing dossiers and Operations & Maintenance (O&M) manuals. We conduct hands-on training for your facilities team and activate our 12-month full replacement warranty backed by 24/7 nationwide emergency support.",
    deliverables: [
      { name: "Complete As-Built Documentation", detail: "Stamped CAD schematics, panel wiring diagrams, and equipment serial registry" },
      { name: "Comprehensive O&M Manuals", detail: "Preventive maintenance schedules, chemical water treatment specs, and spare parts lists" },
      { name: "Staff Operational Training Certificate", detail: "Certified operator training for facility managers and on-duty technicians" },
      { name: "Warranty & AMC Service Contract", detail: "1-year full equipment warranty + quarterly proactive preventive health checks" }
    ],
    standardsAndQc: [
      "ISO 9001 Customer Satisfaction & Service Level Agreement (SLA)",
      "PEC Professional Engineering Ethics & Lifetime Accountability",
      "2-Hour Emergency Response Guarantee in Major Metros",
      "Original OEM Spares Supply Guarantee"
    ],
    toolsAndTech: [
      "Cloud Maintenance Ticketing Portal",
      "Digital Operation Manual Tablets",
      "Mobile Fleet of Rapid Engineering Response Vans",
      "Dedicated Technical WhatsApp Hotline"
    ],
    clientAction: "Receive formal handover keys, warranty certificates, and sign final project acceptance.",
    keyMetric: {
      value: "24/7",
      label: "Engineering SLA Support"
    }
  }
];

interface ProjectRoadmapProps {
  onOpenQuoteModal: (stepName?: string) => void;
}

export const ProjectRoadmap: React.FC<ProjectRoadmapProps> = ({ onOpenQuoteModal }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeDetailTab, setActiveDetailTab] = useState<'deliverables' | 'standards' | 'tools'>('deliverables');
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const activeStep = ROADMAP_STEPS[activeStepIndex];

  // Auto-play timer for presentation mode
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setActiveStepIndex((prev) => (prev + 1) % ROADMAP_STEPS.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev < ROADMAP_STEPS.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : ROADMAP_STEPS.length - 1));
  };

  return (
    <section id="roadmap" className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-[#E2E6EA]">
      {/* Background Subtle Blueprint Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B1B2B06_1px,transparent_1px),linear-gradient(to_bottom,#0B1B2B06_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FF] border border-[#1677FF]/20 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#1677FF]" />
            <span>Turnkey Engineering Lifecycle</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1B2B] font-display tracking-tight leading-tight">
            Our 6-Stage Engineering <br className="hidden sm:inline" />
            <span className="text-[#1677FF]">Project Execution Roadmap</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#6B747C] font-medium leading-relaxed">
            From initial thermal site audit and 3D CAD design to in-house manufacturing, turnkey erection, TAB commissioning, and lifetime warranty support.
          </p>
        </motion.div>

        {/* Top Interactive Stepper Bar (Horizontal Progress Tracker) */}
        <div className="mb-10 lg:mb-12">
          
          {/* Stepper Controls Bar (Auto-play & Jump) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-between pb-4 mb-4 border-b border-[#E2E6EA]"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B1B2B]">
                Interactive Roadmap Stepper
              </span>
              <span className="hidden sm:inline-flex text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                PEC C4 #20000 Protocol
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`min-h-[38px] px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border ${
                  isAutoPlaying 
                    ? 'bg-[#1677FF] text-white border-[#1677FF] shadow-sm'
                    : 'bg-[#F5F6F3] hover:bg-[#E2E6EA] text-[#0B1B2B] border-[#E2E6EA]'
                }`}
                title={isAutoPlaying ? 'Pause presentation' : 'Auto-walkthrough stages'}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isAutoPlaying ? 'Auto-Advancing' : 'Auto Walkthrough'}</span>
              </button>

              <div className="hidden sm:flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="min-h-[38px] min-w-[38px] p-2 rounded-xl bg-[#F5F6F3] hover:bg-[#E2E6EA] text-[#0B1B2B] flex items-center justify-center transition-colors cursor-pointer border border-[#E2E6EA]"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="min-h-[38px] min-w-[38px] p-2 rounded-xl bg-[#F5F6F3] hover:bg-[#E2E6EA] text-[#0B1B2B] flex items-center justify-center transition-colors cursor-pointer border border-[#E2E6EA]"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Stepper Steps Row with Intersection-Observer Staggered Scroll Animations */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {ROADMAP_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStepIndex === idx;
              const isPast = idx < activeStepIndex;

              return (
                <motion.button
                  key={step.id}
                  type="button"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ 
                    duration: 0.45, 
                    delay: idx * 0.08, 
                    ease: "easeOut" 
                  }}
                  whileHover={{ 
                    y: -4, 
                    scale: 1.02,
                    transition: { duration: 0.2 } 
                  }}
                  onClick={() => {
                    setActiveStepIndex(idx);
                    setIsAutoPlaying(false);
                  }}
                  className={`group relative p-3 sm:p-3.5 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between min-h-[96px] sm:min-h-[105px] ${
                    isActive
                      ? 'bg-[#0B1B2B] text-white border-[#0B1B2B] shadow-lg shadow-[#0B1B2B]/10 ring-2 ring-[#1677FF]/40'
                      : isPast
                      ? 'bg-[#F8F9FA] hover:bg-[#EBF3FF] text-[#0B1B2B] border-[#E2E6EA]'
                      : 'bg-white hover:bg-[#F5F6F3] text-[#6B747C] border-[#E2E6EA]'
                  }`}
                >
                  {/* Active Indicator Bar at Top */}
                  {isActive && (
                    <motion.div
                      layoutId="activeStepperIndicator"
                      className="absolute -top-1 left-3 right-3 h-1 bg-[#1677FF] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between w-full mb-1">
                    <span className={`text-[10px] font-black uppercase tracking-wider ${
                      isActive ? 'text-[#1677FF]' : isPast ? 'text-emerald-600' : 'text-[#6B747C]'
                    }`}>
                      {step.phaseNumber}
                    </span>

                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isActive 
                        ? 'bg-[#1677FF] text-white' 
                        : isPast 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-[#F5F6F3] text-[#6B747C]'
                    }`}>
                      {isPast ? <Check className="w-3 h-3 text-emerald-600" /> : idx + 1}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-auto">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive 
                        ? 'bg-white/10 text-white' 
                        : 'bg-[#F5F6F3] text-[#0B1B2B] group-hover:text-[#1677FF]'
                    }`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className={`text-xs font-bold line-clamp-1 ${
                      isActive ? 'text-white' : 'text-[#0B1B2B]'
                    }`}>
                      {step.shortTitle}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Presentation View with Framer Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="bg-[#F8F9FA] border border-[#E2E6EA] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-[#0B1B2B]/5 relative overflow-hidden"
          >
            {/* Top Stage Header Row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E2E6EA]">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${activeStep.colorScheme.badgeBg} ${activeStep.colorScheme.badgeText}`}>
                    {activeStep.phaseNumber} of 06
                  </span>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#6B747C] bg-white border border-[#E2E6EA] px-3 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-[#1677FF]" />
                    <span>Estimated Duration: {activeStep.duration}</span>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>PEC Regulated Milestone</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1B2B] font-display tracking-tight">
                  {activeStep.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6B747C] font-medium">
                  {activeStep.tagline}
                </p>
              </div>

              {/* Stage Hero Metric & CTA */}
              <div className="flex items-center gap-4 shrink-0">
                <div className="bg-white border border-[#E2E6EA] rounded-2xl p-3.5 sm:p-4 text-center min-w-[120px] sm:min-w-[140px] shadow-2xs">
                  <div className="text-xl sm:text-2xl font-black text-[#1677FF] font-display">
                    {activeStep.keyMetric.value}
                  </div>
                  <div className="text-[11px] font-bold text-[#6B747C] uppercase tracking-wider">
                    {activeStep.keyMetric.label}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(`Initiate ${activeStep.phaseNumber}: ${activeStep.title}`)}
                  className="min-h-[48px] px-5 py-3 rounded-2xl bg-[#1677FF] hover:bg-[#0E65E5] active:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-[#1677FF]/20 flex items-center gap-2 transition-all cursor-pointer active:scale-95"
                >
                  <span>Inquire This Phase</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Stage Summary Description */}
            <div className="py-6 border-b border-[#E2E6EA]">
              <p className="text-sm sm:text-base text-[#0B1B2B] leading-relaxed font-medium">
                {activeStep.summary}
              </p>
            </div>

            {/* Tabbed Interactive Detail Explorer */}
            <div className="pt-6">
              
              {/* Tab Navigation Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-6">
                <button
                  type="button"
                  onClick={() => setActiveDetailTab('deliverables')}
                  className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                    activeDetailTab === 'deliverables'
                      ? 'bg-[#0B1B2B] text-white shadow-sm'
                      : 'bg-white hover:bg-slate-100 text-[#6B747C] border border-[#E2E6EA]'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>Key Deliverables & Documentation ({activeStep.deliverables.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveDetailTab('standards')}
                  className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                    activeDetailTab === 'standards'
                      ? 'bg-[#0B1B2B] text-white shadow-sm'
                      : 'bg-white hover:bg-slate-100 text-[#6B747C] border border-[#E2E6EA]'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Engineering Standards & Quality Checks</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveDetailTab('tools')}
                  className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                    activeDetailTab === 'tools'
                      ? 'bg-[#0B1B2B] text-white shadow-sm'
                      : 'bg-white hover:bg-slate-100 text-[#6B747C] border border-[#E2E6EA]'
                  }`}
                >
                  <Cpu className="w-4 h-4" />
                  <span>Tools, Softwares & Equipment Used</span>
                </button>
              </div>

              {/* Tab Content Panes */}
              <div className="min-h-[220px]">
                {activeDetailTab === 'deliverables' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {activeStep.deliverables.map((item, idx) => (
                      <div 
                        key={idx}
                        className="bg-white border border-[#E2E6EA] rounded-2xl p-4 sm:p-5 shadow-2xs hover:border-[#1677FF]/40 transition-all flex items-start gap-3.5"
                      >
                        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 stroke-[2.5]" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-[#0B1B2B] mb-1">
                            {item.name}
                          </div>
                          <div className="text-xs text-[#6B747C] leading-relaxed">
                            {item.detail}
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeDetailTab === 'standards' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {activeStep.standardsAndQc.map((std, idx) => (
                      <div 
                        key={idx}
                        className="bg-white border border-[#E2E6EA] rounded-2xl p-4 sm:p-5 shadow-2xs flex items-center gap-3.5"
                      >
                        <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1677FF] border border-blue-200 flex items-center justify-center shrink-0">
                          <Award className="w-4 h-4" />
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-[#0B1B2B]">
                          {std}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeDetailTab === 'tools' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                  >
                    {activeStep.toolsAndTech.map((tool, idx) => (
                      <div 
                        key={idx}
                        className="bg-white border border-[#E2E6EA] rounded-2xl p-4 shadow-2xs flex flex-col justify-between"
                      >
                        <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center mb-3">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div className="text-xs font-bold text-[#0B1B2B] leading-snug">
                          {tool}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Bottom Client Action & Navigation Footer */}
            <div className="mt-8 pt-6 border-t border-[#E2E6EA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              {/* Client Action Note */}
              <div className="flex items-center gap-2.5 text-xs text-[#0B1B2B] bg-white border border-[#E2E6EA] px-4 py-3 rounded-2xl max-w-xl">
                <CalendarCheck className="w-4 h-4 text-[#1677FF] shrink-0" />
                <span>
                  <strong className="font-bold text-[#0B1B2B]">Client Input at this stage:</strong>{' '}
                  <span className="text-[#6B747C]">{activeStep.clientAction}</span>
                </span>
              </div>

              {/* Prev / Next Stage Buttons */}
              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="min-h-[48px] px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#0B1B2B] font-bold text-xs border border-[#E2E6EA] transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Phase</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="min-h-[48px] px-5 py-2.5 rounded-xl bg-[#0B1B2B] hover:bg-[#14273C] text-white font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Next Phase ({activeStepIndex < ROADMAP_STEPS.length - 1 ? ROADMAP_STEPS[activeStepIndex + 1].shortTitle : ROADMAP_STEPS[0].shortTitle})</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Turnkey Assurance Guarantee Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-12 bg-[#0B1B2B] text-white rounded-3xl p-6 sm:p-8 border border-[#14273C] flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="space-y-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>30+ Years Flawless Turnkey Execution Guarantee</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
              Ready to schedule your Phase 01 Site Thermal Audit?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our engineering team operates nationwide across Punjab, Sindh, KPK, and federal territories.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              type="button"
              onClick={() => onOpenQuoteModal("Phase 01: Engineering Site Survey & Load Calculations")}
              className="w-full sm:w-auto min-h-[50px] px-6 py-3 rounded-2xl bg-[#1677FF] hover:bg-[#0E65E5] active:bg-blue-700 text-white font-bold text-sm transition-all shadow-md shadow-[#1677FF]/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Site Survey (No Obligation)</span>
            </button>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[50px] px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp Lead Engineer</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
