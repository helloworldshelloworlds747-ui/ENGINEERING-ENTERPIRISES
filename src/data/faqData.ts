export interface FAQItem {
  id: string;
  category: 'energy-savings' | 'hvac-maintenance' | 'fire-safety' | 'licensing-turnkey';
  categoryLabel: string;
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  keyPoints?: string[];
  metrics?: { label: string; value: string }[];
  tags: string[];
  relatedAction?: {
    type: 'calculator' | 'quote' | 'whatsapp' | 'cert';
    label: string;
    target?: string;
  };
}

export const FAQ_CATEGORIES = [
  { id: 'all', label: 'All FAQs', icon: 'HelpCircle' },
  { id: 'energy-savings', label: '⚡ Energy Savings & ROI', icon: 'Zap' },
  { id: 'hvac-maintenance', label: '🛠️ HVAC Maintenance & Pad Care', icon: 'Wrench' },
  { id: 'fire-safety', label: '🚒 Fire Protection & NFPA', icon: 'ShieldAlert' },
  { id: 'licensing-turnkey', label: '📜 PEC Licensing & Execution', icon: 'Award' },
] as const;

export const COMPREHENSIVE_FAQS: FAQItem[] = [
  {
    id: 'evaporative-vs-dx-savings',
    category: 'energy-savings',
    categoryLabel: 'Energy Savings & ROI',
    question: 'How does Veloair evaporative cooling achieve up to 85% to 90% electricity bill savings compared to conventional DX air conditioning?',
    shortAnswer: 'Evaporative cooling uses natural water evaporation (latent heat conversion) requiring only 1.1 kW for 18,000 CFM airflow, whereas equivalent 15-ton DX refrigeration compressors consume 18–22 kW of electricity.',
    detailedAnswer: 'Conventional air conditioning relies on energy-intensive mechanical vapor-compression cycles using refrigerants (R410A, R32) that consume approximately 1.2 to 1.8 kW per ton of cooling. In contrast, Veloair evaporative systems exploit the thermodynamic principle of water evaporation, where 1 kg of evaporating water absorbs 2,260 kJ of sensible heat from the atmosphere. By utilizing direct-drive inverter motors, high-efficiency impellers, and submersible pumps, an 18,000 CFM unit draws merely 1.1 kW of power while displacing 44,000 m³/h of hot, stale air with 100% fresh, oxygen-rich cooled air.',
    metrics: [
      { label: 'DX AC Power Draw', value: '18 - 22 kW / 15 Ton' },
      { label: 'Veloair 18K CFM Draw', value: '1.1 - 1.5 kW' },
      { label: 'Net Energy Reduction', value: 'Up to 90%' },
      { label: 'Fresh Air Turnover', value: '100% (Zero Recirculation)' }
    ],
    keyPoints: [
      'Eliminates heavy refrigeration compressor loads, resulting in minimal utility kW demand charges.',
      'Operates on standard single-phase or three-phase connections without requiring costly electrical sub-station upgrades.',
      'Maintains positive indoor pressure, preventing the ingress of outdoor dust, flies, and ambient contaminants.'
    ],
    tags: ['Energy Savings', 'Thermodynamics', 'Power Reduction', 'DX AC Comparison', '18000 CFM'],
    relatedAction: {
      type: 'calculator',
      label: 'Calculate Your Factory Savings'
    }
  },
  {
    id: 'pad-maintenance-and-lifespan',
    category: 'hvac-maintenance',
    categoryLabel: 'HVAC Maintenance & Pad Care',
    question: 'How long do CELdek 7090 honeycomb cooling pads last, and what is the proper maintenance procedure?',
    shortAnswer: 'With high-density cross-fluted Finnish kraft paper, Veloair CELdek pads last 4 to 6 years if water bleed-off is maintained at 5–10% and pads are dried daily for 30 minutes.',
    detailedAnswer: 'Veloair 7090 and 5090 honeycomb pads are manufactured from virgin cellulose kraft paper impregnated with anti-rot resins and rigidifying agents. To maximize operational lifespan and cooling efficiency: (1) Maintain a continuous bleed-off rate of 5–10% of circulation water to prevent the accumulation of Total Dissolved Solids (TDS) and mineral crusting; (2) Run the fan in dry mode (water pump switched off) for 30 minutes every evening to prevent algae and fungal colonization; (3) Clean water distribution headers and sump strainers bi-weekly during peak operational months.',
    metrics: [
      { label: 'Expected Pad Lifespan', value: '4 - 6 Years' },
      { label: 'Bleed-Off Rate', value: '5 - 10% Continuous' },
      { label: 'Daily Dry Cycle', value: '30 Minutes Evening' },
      { label: 'Optimum Water pH', value: '6.5 - 8.5' }
    ],
    keyPoints: [
      'Never pressure-wash cellulose pads with high-pressure nozzles; use gentle garden hose pressure to wash off surface dust.',
      'Ensure water distribution pipes are unclogged to guarantee 100% uniform pad surface wetting without dry streaks.',
      'End-of-season winterization requires complete water draining and fitting protective weather covers.'
    ],
    tags: ['CELdek 7090', 'Pad Maintenance', 'Algae Prevention', 'Descaling', 'Water Bleed-Off'],
    relatedAction: {
      type: 'quote',
      label: 'Order Replacement CELdek Pads',
      target: 'CELdek 7090 Honeycomb Cooling Pads'
    }
  },
  {
    id: 'payback-period-roi',
    category: 'energy-savings',
    categoryLabel: 'Energy Savings & ROI',
    question: 'What is the typical Return on Investment (ROI) and payback period for industrial factories retrofitting to Veloair cooling?',
    shortAnswer: 'Due to peak-hour electricity tariff savings and increased labor productivity, the full capital expenditure is typically recovered within 8 to 14 months of operation.',
    detailedAnswer: 'Industrial facilities in Pakistan facing high commercial electricity tariffs (Rs. 45–65 per kWh) see immediate drastic reductions in monthly utility bills. For a 40,000 sq.ft production hall, replacing or downsizing conventional air conditioning with a customized Veloair evaporative cooling network reduces electrical consumption by hundreds of thousands of rupees per month during hot summer cycles. Furthermore, cooling factory ambient temperatures from 42°C down to 27°C boosts worker productivity by up to 25% and reduces heat-induced fatigue.',
    metrics: [
      { label: 'Average Payback Period', value: '8 - 14 Months' },
      { label: 'Summer Temp Drop', value: '10°C to 15°C' },
      { label: 'Worker Productivity Boost', value: '+20% to +25%' },
      { label: 'Motor Inverter Efficiency', value: '92% EC Direct Drive' }
    ],
    keyPoints: [
      'Qualifies for industrial green energy incentives and peak load reduction compliance.',
      'Low maintenance and replacement parts cost compared to compressor overhauls and refrigerant top-ups.',
      'Dramatically reduces factory internal heat build-up from machinery, steam presses, and injection molding lines.'
    ],
    tags: ['ROI', 'Payback Period', 'Industrial Economics', 'Factory Electricity Bill', 'Productivity'],
    relatedAction: {
      type: 'calculator',
      label: 'Run Financial ROI Simulation'
    }
  },
  {
    id: 'water-quality-tds-bleedoff',
    category: 'hvac-maintenance',
    categoryLabel: 'HVAC Maintenance & Pad Care',
    question: 'What water quality (TDS and pH) is required for industrial evaporative coolers to prevent scaling?',
    shortAnswer: 'Water supply should have TDS below 800 ppm and pH between 6.5 and 8.5. Continuous bleed-off prevents salt concentration build-up in the reservoir.',
    detailedAnswer: 'As pure water evaporates from the pads into the airstream, dissolved minerals (calcium carbonate, magnesium, and silica) remain behind in the sump. Without continuous bleed-off, the mineral concentration (TDS) multiplies rapidly, forming hard scale on the flutes that chokes airflow and reduces evaporation efficiency. Engineering Enterprises recommends keeping sump water TDS below 1,500 ppm by maintaining a continuous bleed-off or utilizing automatic blow-down solenoid valves.',
    metrics: [
      { label: 'Supply Water TDS', value: '< 800 ppm Ideal' },
      { label: 'Sump Water Threshold', value: '< 1,500 ppm' },
      { label: 'Water Consumption', value: '20 - 45 L/h per unit' },
      { label: 'Recommended Filtration', value: '100 Mesh Pre-Filter' }
    ],
    keyPoints: [
      'Install inline sediment disc filters before the cooler water inlet to trap sand and debris from tube-wells.',
      'If supply water is excessively hard (TDS > 1,200 ppm), consider an inline catalytic scale preventer or soft water blending.',
      'Drain and flush the water basin completely once every 15 to 30 days during active summer usage.'
    ],
    tags: ['Water Quality', 'TDS Control', 'Scale Prevention', 'Sump Bleed-Off', 'Water Softening'],
    relatedAction: {
      type: 'whatsapp',
      label: 'Consult Water Quality Engineer'
    }
  },
  {
    id: 'solar-pv-integration',
    category: 'energy-savings',
    categoryLabel: 'Energy Savings & ROI',
    question: 'Can Veloair industrial coolers be integrated with rooftop solar PV systems for zero daytime operating costs?',
    shortAnswer: 'Yes! Because each unit consumes only 1.1 kW to 1.5 kW with soft-start variable frequency inverters, a modest 25–30 kW rooftop solar array can power 20+ industrial cooling units.',
    detailedAnswer: 'Evaporative cooling and solar photovoltaic (PV) generation share a 100% synchronized demand-supply curve: factory cooling demand is highest when solar irradiance is at its daily peak (11:00 AM to 4:00 PM). Modern Veloair units feature variable frequency drive (VFD) inverter motors with high power factors (PFI > 0.96) and zero inrush startup currents. This allows industrial facilities to run complete factory cooling networks entirely on solar power with zero grid import during peak daytime billing periods.',
    metrics: [
      { label: 'Solar Capacity for 20 Units', value: '25 - 30 kW Solar PV' },
      { label: 'Grid Import Savings', value: '100% Daytime Shaving' },
      { label: 'Power Factor', value: '0.96+ (Active PFC)' },
      { label: 'Inverter Soft-Start', value: '0A Inrush Current' }
    ],
    keyPoints: [
      'Seamlessly pairs with on-grid, net-metered, and zero-export hybrid industrial solar systems.',
      'Protects factories from peak-hour utility surcharges and grid load-shedding shutdowns.',
      'Low power draw allows seamless operation on existing backup diesel generator sets with negligible fuel consumption.'
    ],
    tags: ['Solar HVAC', 'Net Metering', 'Peak Shaving', 'Inverter Coolers', 'Zero Carbon'],
    relatedAction: {
      type: 'quote',
      label: 'Request Solar-HVAC Integration Quote',
      target: 'Solar Hybrid Veloair Cooling System'
    }
  },
  {
    id: 'routine-seasonal-winterization',
    category: 'hvac-maintenance',
    categoryLabel: 'HVAC Maintenance & Pad Care',
    question: 'What is the recommended seasonal winterization procedure for industrial cooling units and rooftop pipework?',
    shortAnswer: 'Shut off water isolation valves, drain internal sumps and exterior GI pipelines completely to prevent freeze-cracking, wash pads, and fit heavy-duty PVC weather covers.',
    detailedAnswer: 'Proper end-of-season decommissioning guarantees trouble-free startup next spring: (1) Isolate main water supply ball valves and open lowest drain points on rooftop distribution piping; (2) Drain cooler water reservoirs completely and remove residual sediment with a soft sponge; (3) Run fans on dry ventilation mode for 2–3 hours until pads are thoroughly dry; (4) Inspect fan belt tension and apply anti-corrosion grease to motor bearings; (5) Fasten custom heavy-duty PVC weather covers over each unit to protect against winter rain, dust storms, and UV degradation.',
    keyPoints: [
      'Water left in pump impellers or solenoid valves can freeze and rupture the pump housing during cold winter nights.',
      'Disconnect power isolator switches or lock out the dedicated circuit breakers on the main electrical LT panel.',
      'Schedule a pre-season inspection in March with Engineering Enterprises certified technicians for chemical descaling and fresh start-up commissioning.'
    ],
    tags: ['Winterization', 'Seasonal Maintenance', 'Pipe Draining', 'Weather Covers', 'Pre-Season Service'],
    relatedAction: {
      type: 'quote',
      label: 'Book Annual Maintenance Contract (AMC)',
      target: 'Turnkey Annual Maintenance Contract'
    }
  },
  {
    id: 'nfpa-fire-hydrant-sprinkler-testing',
    category: 'fire-safety',
    categoryLabel: 'Fire Protection & NFPA',
    question: 'What are the mandatory NFPA 25 inspection protocols for industrial fire hydrants and automatic sprinkler systems?',
    shortAnswer: 'Weekly 10-minute churn tests for electric/diesel booster pumps, 18-inch clearance below sprinkler deflectors, annual 15-bar hose hydrostatic testing, and semi-annual FM-200 weight audits.',
    detailedAnswer: 'Engineering Enterprises designs and commissions life safety installations in strict accordance with NFPA 13 (Sprinklers), NFPA 20 (Stationary Fire Pumps), and NFPA 25 (Inspection, Testing, and Maintenance). Key compliance mandates include: (1) Automatic Fire Pumps must undergo a weekly no-flow churn test to ensure pressure switches start pumps immediately upon pressure drop; (2) Maintain at least 18 inches (450mm) of clear vertical space below all sprinkler deflector heads; (3) Outdoor landing valves and underground loop lines must maintain 7 to 10 bar static pressure; (4) FM-200 clean agent cylinders require certified weight calibration semi-annually.',
    metrics: [
      { label: 'Booster Pump Churn Test', value: 'Weekly (10-30 min)' },
      { label: 'Sprinkler Head Clearance', value: 'Min. 18 Inches' },
      { label: 'Hose Hydrostatic Test', value: '15 Bar Annual' },
      { label: 'Loop Operating Pressure', value: '7 - 10 Bar Constant' }
    ],
    keyPoints: [
      'Hydrant bottom barrel drain valves must automatically empty residual water within 60 seconds of valve closure.',
      'All fire alarm control panels (FACP) must have monitored tamper switches on control gate valves.',
      'Emergency diesel engine booster pumps must maintain fresh battery electrolyte and full fuel tank capacity at all times.'
    ],
    tags: ['NFPA 25', 'Fire Hydrant System', 'Automatic Sprinklers', 'FM-200', 'Pump Churn Test'],
    relatedAction: {
      type: 'quote',
      label: 'Schedule Fire Safety Compliance Audit',
      target: 'Turnkey Fire Hydrant & Sprinkler System'
    }
  },
  {
    id: 'pec-licensing-importance',
    category: 'licensing-turnkey',
    categoryLabel: 'PEC Licensing & Execution',
    question: 'What is Pakistan Engineering Council (PEC) Category C4 licensing and why is it essential for factory turnkey EPC projects?',
    shortAnswer: 'PEC Category C4 License (# 20000) officially certifies that Engineering Enterprises has verified engineering capital, certified engineers, and authorized capacity to execute major mechanical and electrical infrastructure projects.',
    detailedAnswer: 'The Pakistan Engineering Council (PEC) is the apex statutory regulatory body governing engineering practices in Pakistan. A Category C4 registration with ME01 (HVACR), ME02 (Fire Fighting), EE04 (Electrical Power Distribution), and EE05 (Industrial Automation) codes legally authorizes the company to design, fabricate, and commission high-value government and private sector infrastructure up to PEC financial limits with verified compliance to building codes, safety protocols, and labor laws.',
    metrics: [
      { label: 'PEC License Number', value: '# 20000' },
      { label: 'Registration Category', value: 'Category C4' },
      { label: 'Quality Certification', value: 'ISO 9001:2008' },
      { label: 'Safety Standard', value: 'OHSAS 18001:2007' }
    ],
    keyPoints: [
      'Guarantees all engineering designs are stamped and supervised by licensed professional mechanical and electrical engineers.',
      'Ensures full legal compliance for corporate fire safety insurance audits and third-party bank financing.',
      'Over 30 years of continuous active status without legal sanctions or default penalties.'
    ],
    tags: ['PEC License C4', 'ISO 9001', 'Engineering Council', 'Turnkey EPC', 'Legal Compliance'],
    relatedAction: {
      type: 'cert',
      label: 'Inspect Official PEC Certificate',
      target: 'pec-c4'
    }
  },
  {
    id: 'poultry-tunnel-ventilation-fcr',
    category: 'energy-savings',
    categoryLabel: 'Energy Savings & ROI',
    question: 'How does evaporative cooling and tunnel ventilation improve broiler Feed Conversion Ratio (FCR) in poultry sheds?',
    shortAnswer: 'Maintaining shed temperatures below 28°C prevents severe panting alkalosis, sustains normal feed consumption, and prevents catastrophic summer heat mortality.',
    detailedAnswer: 'Poultry lack sweat glands and dissipate heat primarily via panting. When ambient shed temperatures exceed 32°C, broilers reduce feed intake by up to 35% while burning valuable metabolic calories solely to expel heat, severely worsening the Feed Conversion Ratio (FCR). By combining 150mm thick Veloair 7090 cellulose pads with 50-inch AMCA-rated galvanized box exhaust fans, sheds achieve a 2.5 to 3.0 m/s wind-chill velocity that drops effective temperature to 22°C–24°C, protecting flock health and maximizing bird market weight.',
    metrics: [
      { label: 'Target Shed Temp', value: '24°C - 27°C' },
      { label: 'Tunnel Air Velocity', value: '2.5 - 3.0 m/s' },
      { label: 'FCR Improvement', value: '0.08 - 0.15 Points' },
      { label: 'Mortality Reduction', value: 'Up to 95% in Summer' }
    ],
    keyPoints: [
      'High wind velocity creates a powerful wind-chill sensation without wetting litter or bedding.',
      'Automated negative-pressure climate controllers modulate fan staging and pad water pump pulsing.',
      'Turnkey packages include emergency alarm sirens, backup generator changeovers, and static pressure inlet dampers.'
    ],
    tags: ['Poultry Ventilation', 'FCR Optimization', 'Broiler Shed Cooling', 'Tunnel Ventilation', '50 Inch Fan'],
    relatedAction: {
      type: 'quote',
      label: 'Get Poultry Shed Climate Quote',
      target: 'Poultry Shed Turnkey Climate System'
    }
  },
  {
    id: 'exhaust-fan-maintenance',
    category: 'hvac-maintenance',
    categoryLabel: 'HVAC Maintenance & Pad Care',
    question: 'What maintenance is required for 50-inch industrial galvanized steel box exhaust fans?',
    shortAnswer: 'Check and tension the V-belt monthly, grease pillow block bearings quarterly, and inspect aluminum-magnesium alloy shutter louvers for free gravity movement.',
    detailedAnswer: 'Heavy-duty 50-inch box exhaust fans operating continuously in dusty industrial or poultry environments require structured preventive maintenance: (1) Check V-belt tension every 30 days—a loose belt slips and reduces CFM airflow by up to 25%, while an over-tightened belt strains motor bearings; (2) Clean dust and lint accumulation off the 6-blade stainless steel impeller to prevent dynamic unbalance and vibration; (3) Clean shutter louver linkage nylon pivots so louvers seal tightly against wind and rain when fans are idle.',
    metrics: [
      { label: 'Airflow Extraction', value: '44,000 m³/h (26,000 CFM)' },
      { label: 'Belt Inspection Cycle', value: 'Monthly (15mm deflection)' },
      { label: 'Impeller Material', value: 'Mirror Finished Stainless Steel' },
      { label: 'Galvanized Frame Zinc', value: '275 g/m² Heavy Coating' }
    ],
    keyPoints: [
      'Use high-temperature lithium-based grease on ball bearings for uninterrupted 24/7 operation.',
      'Inspect centrifugal opening mechanism counterweights for smooth push-pull operation.',
      'Check motor thermal overload protection settings inside the starter control panel.'
    ],
    tags: ['Exhaust Fan Care', 'V-Belt Tension', '50 Inch Fan', 'Bearing Greasing', 'Airflow Optimization'],
    relatedAction: {
      type: 'quote',
      label: 'Inquire Exhaust Fan Solutions',
      target: 'Industrial Heavy Duty Exhaust Fan'
    }
  }
];
