import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sliders, 
  Thermometer, 
  Droplets, 
  Gauge, 
  Wind, 
  RefreshCw, 
  TrendingDown, 
  Flame, 
  Layers, 
  Check, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Activity,
  ArrowRight,
  Info,
  Sparkles,
  Building2,
  Filter,
  Shield,
  Clock,
  Settings2,
  ChevronRight,
  Printer
} from 'lucide-react';

interface TechnicalInfographicsStudioProps {
  onOpenCalculator?: () => void;
  onConsultEngineering?: () => void;
}

export const TechnicalInfographicsStudio: React.FC<TechnicalInfographicsStudioProps> = ({
  onOpenCalculator,
  onConsultEngineering
}) => {
  const [activeTab, setActiveTab] = useState<'psychrometric' | 'airflow' | 'comparison' | 'fire-safety' | 'celdek'>('psychrometric');
  const [ambientTemp, setAmbientTemp] = useState<number>(42); // Celsius
  const [ambientRH, setAmbientRH] = useState<number>(30); // Relative Humidity %
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>('celdek-pad');
  const [selectedFireHotspot, setSelectedFireHotspot] = useState<string | null>('pumps');
  const [facilityArea, setFacilityArea] = useState<number>(10000); // Sq. Ft.

  // Psychrometric Calculation (Thermodynamic Stull Estimation)
  const calculatedOutputTemp = useMemo(() => {
    const T = ambientTemp;
    const RH = ambientRH;
    // Approximated Wet-Bulb Temp Tw (Stull formula):
    const Tw = T * Math.atan(0.151977 * Math.sqrt(RH + 8.313659)) +
      Math.atan(T + RH) -
      Math.atan(RH - 1.676331) +
      0.00391838 * Math.pow(RH, 1.5) * Math.atan(0.023101 * RH) -
      4.686035;
    
    // Evaporative cooling saturation effectiveness ~88%
    const coolingEffectiveness = 0.88;
    const dischargeTemp = T - (coolingEffectiveness * (T - Tw));
    return Math.max(18, Math.min(T - 2, Math.round(dischargeTemp * 10) / 10));
  }, [ambientTemp, ambientRH]);

  const deltaT = useMemo(() => {
    return Math.max(1, Math.round((ambientTemp - calculatedOutputTemp) * 10) / 10);
  }, [ambientTemp, calculatedOutputTemp]);

  const wetBulbTemp = useMemo(() => {
    const T = ambientTemp;
    const RH = ambientRH;
    const Tw = T * Math.atan(0.151977 * Math.sqrt(RH + 8.313659)) +
      Math.atan(T + RH) -
      Math.atan(RH - 1.676331) +
      0.00391838 * Math.pow(RH, 1.5) * Math.atan(0.023101 * RH) -
      4.686035;
    return Math.round(Tw * 10) / 10;
  }, [ambientTemp, ambientRH]);

  const coolingCapacityKW = useMemo(() => {
    // Air mass flow at 18,000 m3/h (~6.0 kg/s) * Cp (1.005 kJ/kg.K) * deltaT
    const massFlow = 6.0;
    const cp = 1.005;
    return Math.round(massFlow * cp * deltaT * 10) / 10;
  }, [deltaT]);

  const equivalentACTons = useMemo(() => {
    return Math.round((coolingCapacityKW / 3.517) * 10) / 10;
  }, [coolingCapacityKW]);

  return (
    <div className="mb-16 bg-white rounded-3xl p-6 sm:p-9 border border-[#E2E6EA] shadow-xl shadow-[#0B1B2B]/5">
      
      {/* Studio Header & Navigation Tabs */}
      <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 pb-6 border-b border-[#E2E6EA]">
        <div>
          <div className="flex items-center gap-2 text-[#1677FF] text-xs font-bold uppercase tracking-wider">
            <Activity className="w-4 h-4 text-[#1677FF]" />
            <span>Premier Engineering Infographics Studio & Simulation Lab</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#0B1B2B] mt-1 font-display">
            Interactive Thermodynamic & Safety Visualizers
          </h3>
          <p className="text-xs sm:text-sm text-[#6B747C] mt-1">
            Simulate real psychrometric efficiency, inspect cross-sectional component blueprints, and compare connected power loads.
          </p>
        </div>

        {/* Infographic Tab Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F5F6F3] rounded-2xl border border-[#E2E6EA]">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => setActiveTab('psychrometric')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'psychrometric'
                ? 'bg-[#1677FF] text-white shadow-md shadow-[#1677FF]/20'
                : 'text-[#6B747C] hover:text-[#0B1B2B] hover:bg-white'
            }`}
          >
            <Thermometer className="w-3.5 h-3.5" />
            <span>Psychrometric & Unit Blueprint</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => setActiveTab('airflow')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'airflow'
                ? 'bg-[#1677FF] text-white shadow-md shadow-[#1677FF]/20'
                : 'text-[#6B747C] hover:text-[#0B1B2B] hover:bg-white'
            }`}
          >
            <Wind className="w-3.5 h-3.5" />
            <span>Industrial Airflow Dynamics</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => setActiveTab('comparison')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'comparison'
                ? 'bg-[#1677FF] text-white shadow-md shadow-[#1677FF]/20'
                : 'text-[#6B747C] hover:text-[#0B1B2B] hover:bg-white'
            }`}
          >
            <TrendingDown className="w-3.5 h-3.5" />
            <span>Technology Benchmark</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => setActiveTab('fire-safety')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'fire-safety'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                : 'text-[#6B747C] hover:text-[#0B1B2B] hover:bg-white'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>NFPA 13/291 Fire Network</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => setActiveTab('celdek')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'celdek'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                : 'text-[#6B747C] hover:text-[#0B1B2B] hover:bg-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>CELdek 5090 Science</span>
          </motion.button>
        </div>
      </div>

      {/* TAB 1: PSYCHROMETRIC EVAPORATIVE COOLING SIMULATOR & SCHEMATIC BLUEPRINT */}
      {activeTab === 'psychrometric' && (
        <div className="pt-8 space-y-8 animate-in fade-in duration-300">
          
          {/* Top Controls & Live Psychrometric Reading */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sliders Box */}
            <div className="lg:col-span-6 space-y-6 bg-[#F5F6F3] rounded-2xl p-6 border border-[#E2E6EA]">
              <div className="flex items-center justify-between border-b border-[#E2E6EA] pb-3">
                <span className="text-xs font-bold text-[#0B1B2B] uppercase tracking-wider flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-[#1677FF]" />
                  Ambient Thermodynamic Variables
                </span>
                <span className="text-[11px] text-[#1677FF] font-mono font-bold bg-[#EBF3FF] px-2 py-0.5 rounded-md border border-blue-200">
                  Stull Algorithm Saturation
                </span>
              </div>

              {/* Temperature Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[#0B1B2B] flex items-center gap-1.5">
                    <Thermometer className="w-4 h-4 text-amber-600" />
                    Outdoor Dry-Bulb Temperature (Tdb):
                  </span>
                  <span className="font-mono font-bold text-amber-800 bg-white px-2.5 py-1 rounded-lg border border-[#E2E6EA] text-sm shadow-2xs">
                    {ambientTemp}°C ({Math.round((ambientTemp * 9/5) + 32)}°F)
                  </span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={52}
                  step={1}
                  value={ambientTemp}
                  onChange={(e) => setAmbientTemp(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E2E6EA] rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-[10px] text-[#6B747C]">
                  <span>30°C (Mild Spring)</span>
                  <span>42°C (Lahore / Faisalabad Peak)</span>
                  <span>52°C (Extreme Sibi / Jacobabad)</span>
                </div>
              </div>

              {/* Humidity Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[#0B1B2B] flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-[#1677FF]" />
                    Outdoor Relative Humidity (RH):
                  </span>
                  <span className="font-mono font-bold text-[#1677FF] bg-white px-2.5 py-1 rounded-lg border border-[#E2E6EA] text-sm shadow-2xs">
                    {ambientRH}% RH
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={80}
                  step={5}
                  value={ambientRH}
                  onChange={(e) => setAmbientRH(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E2E6EA] rounded-lg appearance-none cursor-pointer accent-[#1677FF]"
                />
                <div className="flex justify-between text-[10px] text-[#6B747C]">
                  <span>10% (Arid Desert May/June)</span>
                  <span>35% (Industrial Summer Average)</span>
                  <span>80% (Peak Monsoon Monsoon)</span>
                </div>
              </div>

              {/* Wet Bulb & Thermodynamic State Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-[#E2E6EA]">
                  <div className="text-[11px] text-[#6B747C] font-medium">Calculated Wet-Bulb (Twb)</div>
                  <div className="text-lg font-bold text-[#0B1B2B] font-mono mt-0.5">{wetBulbTemp}°C</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Thermodynamic Cooling Limit</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E2E6EA]">
                  <div className="text-[11px] text-[#6B747C] font-medium">Latent Cooling Equivalent</div>
                  <div className="text-lg font-bold text-emerald-600 font-mono mt-0.5">{equivalentACTons} Tons DX AC</div>
                  <div className="text-[10px] text-emerald-700 mt-0.5">{coolingCapacityKW} kW Thermal Yield</div>
                </div>
              </div>
            </div>

            {/* Real-time Calculated Discharge Microclimate */}
            <div className="lg:col-span-6 bg-[#0B1B2B] text-white rounded-2xl p-6 sm:p-7 border border-slate-700 relative overflow-hidden shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Gauge className="w-4 h-4 text-[#1677FF]" />
                  Simulated Veloair Discharge Performance
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  88% Saturation Index
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 my-6">
                {/* Discharged Air Temp */}
                <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-700 text-center">
                  <div className="text-xs text-slate-400 font-medium">Supply Air Temperature</div>
                  <div className="text-3xl sm:text-4xl font-black text-cyan-300 font-mono mt-1">
                    {calculatedOutputTemp}°C
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    ({Math.round((calculatedOutputTemp * 9/5) + 32)}°F Constant Comfort)
                  </div>
                </div>

                {/* Instant Temperature Drop */}
                <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-700 text-center">
                  <div className="text-xs text-slate-400 font-medium">Temperature Drop (ΔT)</div>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono mt-1">
                    -{deltaT}°C
                  </div>
                  <div className="text-[11px] text-emerald-300 mt-1">
                    Direct Adiabatic Sensible Drop
                  </div>
                </div>
              </div>

              {/* Power Comparison Strip */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 space-y-2.5">
                <div className="text-xs font-bold text-white flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    Electrical Power Consumption:
                  </span>
                  <span className="text-emerald-400 font-mono font-bold">1.1 kW (Save ~90% vs DX)</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-[#1677FF] h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, Math.max(25, (deltaT / 22) * 100))}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 pt-0.5">
                  <span>Airflow: 18,000 to 30,000 CFM</span>
                  <span>Sensible Heat Reduction: 2,260 kJ/kg H₂O</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Unit Anatomy & Blueprint Schematic */}
          <div className="bg-[#F5F6F3] rounded-3xl p-6 sm:p-8 border border-[#E2E6EA]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E2E6EA]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#1677FF]" />
                  Interactive Industrial Unit Cross-Section (Veloair V-18 Series)
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#0B1B2B] mt-0.5">
                  Click Hotspots to Inspect High-Efficiency Engineering Assemblies
                </h4>
              </div>
              <span className="text-xs text-[#6B747C] bg-white px-3 py-1 rounded-full border border-[#E2E6EA]">
                Hover or Click Components Below
              </span>
            </div>

            {/* Interactive SVG Unit Schematic */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 bg-white rounded-2xl p-4 sm:p-6 border border-[#E2E6EA] shadow-inner relative overflow-hidden flex items-center justify-center min-h-[340px]">
                
                {/* SVG Blueprint */}
                <svg viewBox="0 0 500 340" className="w-full max-w-[460px] h-auto select-none">
                  <defs>
                    <linearGradient id="warmAirGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="coolAirGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#1677ff" stopOpacity="0.9" />
                    </linearGradient>
                    <pattern id="celdekPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="10" y2="10" stroke="#d97706" strokeWidth="1.5" />
                      <line x1="0" y1="10" x2="10" y2="0" stroke="#b45309" strokeWidth="1.5" />
                    </pattern>
                  </defs>

                  {/* Outer Weatherproof UV Housing */}
                  <rect x="70" y="40" width="360" height="230" rx="16" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />
                  
                  {/* Top Water Distribution Header */}
                  <rect 
                    x="85" y="50" width="330" height="18" rx="4" 
                    fill={selectedHotspot === 'distribution-header' ? '#1677FF' : '#cbd5e1'} 
                    stroke="#475569" strokeWidth="1.5" 
                    className="cursor-pointer transition-colors"
                    onClick={() => setSelectedHotspot('distribution-header')}
                  />
                  <text x="250" y="63" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#0f172a">
                    Multi-Pipe Non-Clog Water Distribution Header
                  </text>

                  {/* Left Side CELdek Pad Media */}
                  <rect 
                    x="85" y="75" width="40" height="150" rx="4" 
                    fill="url(#celdekPattern)" 
                    stroke={selectedHotspot === 'celdek-pad' ? '#1677FF' : '#b45309'} 
                    strokeWidth={selectedHotspot === 'celdek-pad' ? '3' : '1.5'}
                    className="cursor-pointer transition-all"
                    onClick={() => setSelectedHotspot('celdek-pad')}
                  />
                  {/* Right Side CELdek Pad Media */}
                  <rect 
                    x="375" y="75" width="40" height="150" rx="4" 
                    fill="url(#celdekPattern)" 
                    stroke={selectedHotspot === 'celdek-pad' ? '#1677FF' : '#b45309'} 
                    strokeWidth={selectedHotspot === 'celdek-pad' ? '3' : '1.5'}
                    className="cursor-pointer transition-all"
                    onClick={() => setSelectedHotspot('celdek-pad')}
                  />

                  {/* Hot Air Inflow Arrows (Left & Right) */}
                  <path d="M 20 120 L 70 120" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" strokeDasharray="4 2" />
                  <path d="M 20 160 L 70 160" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4 2" />
                  <text x="35" y="110" fontSize="9" fontWeight="bold" fill="#d97706">Hot Air (35°C–48°C)</text>

                  <path d="M 480 120 L 430 120" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4 2" />
                  <path d="M 480 160 L 430 160" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4 2" />
                  <text x="440" y="110" fontSize="9" fontWeight="bold" fill="#d97706" textAnchor="end">Hot Air Intake</text>

                  {/* Central Inverter Motor & Fan Turbine */}
                  <circle 
                    cx="250" cy="140" r="48" 
                    fill={selectedHotspot === 'axial-motor' ? '#dbeafe' : '#f1f5f9'} 
                    stroke={selectedHotspot === 'axial-motor' ? '#1677FF' : '#64748b'} 
                    strokeWidth="2.5" 
                    className="cursor-pointer transition-all"
                    onClick={() => setSelectedHotspot('axial-motor')}
                  />
                  <circle cx="250" cy="140" r="14" fill="#0f172a" />
                  {/* Fan Blades */}
                  <path d="M 250 95 Q 265 115 250 140 Q 235 115 250 95" fill="#3b82f6" opacity="0.85" />
                  <path d="M 250 185 Q 265 165 250 140 Q 235 165 250 185" fill="#3b82f6" opacity="0.85" />
                  <path d="M 205 140 Q 225 155 250 140 Q 225 125 205 140" fill="#3b82f6" opacity="0.85" />
                  <path d="M 295 140 Q 275 155 250 140 Q 275 125 295 140" fill="#3b82f6" opacity="0.85" />

                  {/* Bottom Deep Water Sump Tank */}
                  <rect 
                    x="85" y="235" width="330" height="25" rx="4" 
                    fill={selectedHotspot === 'water-sump' ? '#38bdf8' : '#0284c7'} 
                    stroke="#0369a1" strokeWidth="1.5" 
                    className="cursor-pointer transition-all"
                    onClick={() => setSelectedHotspot('water-sump')}
                  />
                  <text x="250" y="251" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#ffffff">
                    Bottom Water Reservoir Sump & Submersible Pump
                  </text>

                  {/* Bottom Discharge / Supply Duct Outlet */}
                  <path 
                    d="M 190 270 L 190 320 L 310 320 L 310 270 Z" 
                    fill={selectedHotspot === 'discharge-duct' ? '#1677FF' : 'url(#coolAirGrad)'} 
                    stroke="#0284c7" strokeWidth="2"
                    className="cursor-pointer"
                    onClick={() => setSelectedHotspot('discharge-duct')}
                  />
                  <path d="M 250 280 L 250 330" stroke="#ffffff" strokeWidth="3" strokeDasharray="3 3" />
                  <text x="250" y="305" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#ffffff">
                    Cool Fresh Supply Air (22°C–26°C)
                  </text>

                  {/* Hotspot Interactive Badges */}
                  <g className="cursor-pointer" onClick={() => setSelectedHotspot('celdek-pad')}>
                    <circle cx="105" cy="150" r="10" fill="#1677FF" stroke="#ffffff" strokeWidth="2" />
                    <text x="105" y="154" fontSize="10" fontWeight="bold" fill="#ffffff" textAnchor="middle">1</text>
                  </g>

                  <g className="cursor-pointer" onClick={() => setSelectedHotspot('axial-motor')}>
                    <circle cx="250" cy="140" r="10" fill="#1677FF" stroke="#ffffff" strokeWidth="2" />
                    <text x="250" y="144" fontSize="10" fontWeight="bold" fill="#ffffff" textAnchor="middle">2</text>
                  </g>

                  <g className="cursor-pointer" onClick={() => setSelectedHotspot('distribution-header')}>
                    <circle cx="250" cy="59" r="10" fill="#1677FF" stroke="#ffffff" strokeWidth="2" />
                    <text x="250" y="63" fontSize="10" fontWeight="bold" fill="#ffffff" textAnchor="middle">3</text>
                  </g>

                  <g className="cursor-pointer" onClick={() => setSelectedHotspot('water-sump')}>
                    <circle cx="130" cy="247" r="10" fill="#1677FF" stroke="#ffffff" strokeWidth="2" />
                    <text x="130" y="251" fontSize="10" fontWeight="bold" fill="#ffffff" textAnchor="middle">4</text>
                  </g>

                  <g className="cursor-pointer" onClick={() => setSelectedHotspot('discharge-duct')}>
                    <circle cx="250" cy="295" r="10" fill="#1677FF" stroke="#ffffff" strokeWidth="2" />
                    <text x="250" y="299" fontSize="10" fontWeight="bold" fill="#ffffff" textAnchor="middle">5</text>
                  </g>
                </svg>
              </div>

              {/* Hotspot Inspection Details Card */}
              <div className="lg:col-span-5 space-y-4">
                {selectedHotspot === 'celdek-pad' && (
                  <div className="p-5 rounded-2xl bg-white border-2 border-[#1677FF] shadow-lg animate-in fade-in">
                    <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase mb-1">
                      <Layers className="w-4 h-4 text-amber-600" />
                      <span>Component #1: CELdek 5090 Evaporative Media</span>
                    </div>
                    <h5 className="text-base font-bold text-[#0B1B2B] mb-2">
                      Cross-Corrugated Swedish Cellulose Matrix
                    </h5>
                    <p className="text-xs text-[#6B747C] leading-relaxed mb-3">
                      Unequal flute angles (45° x 15°) force turbulence without droplet carryover. High resin impregnation guarantees 5+ years lifespan with 92% continuous evaporative saturation.
                    </p>
                    <div className="p-2.5 rounded-xl bg-[#F5F6F3] text-[11px] text-[#0B1B2B] font-medium flex items-center justify-between">
                      <span>Saturation Efficiency:</span>
                      <strong className="text-emerald-700 font-bold">88% - 92%</strong>
                    </div>
                  </div>
                )}

                {selectedHotspot === 'axial-motor' && (
                  <div className="p-5 rounded-2xl bg-white border-2 border-[#1677FF] shadow-lg animate-in fade-in">
                    <div className="flex items-center gap-2 text-[#1677FF] font-bold text-xs uppercase mb-1">
                      <Zap className="w-4 h-4 text-[#1677FF]" />
                      <span>Component #2: Direct-Drive Inverter Motor</span>
                    </div>
                    <h5 className="text-base font-bold text-[#0B1B2B] mb-2">
                      100% Copper Wound 16-Speed VFD Drive
                    </h5>
                    <p className="text-xs text-[#6B747C] leading-relaxed mb-3">
                      IP55 protected cast-aluminum motor casing resisting high humidity. Consumes only 1.1 kW to 1.5 kW delivering up to 18,000 to 22,000 CFM positive ventilation air.
                    </p>
                    <div className="p-2.5 rounded-xl bg-[#F5F6F3] text-[11px] text-[#0B1B2B] font-medium flex items-center justify-between">
                      <span>Rated Power Draw:</span>
                      <strong className="text-[#1677FF] font-bold">1.1 kW / 3-Phase or 1-Phase</strong>
                    </div>
                  </div>
                )}

                {selectedHotspot === 'distribution-header' && (
                  <div className="p-5 rounded-2xl bg-white border-2 border-[#1677FF] shadow-lg animate-in fade-in">
                    <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase mb-1">
                      <Droplets className="w-4 h-4 text-blue-600" />
                      <span>Component #3: Open-Trough Water Distribution</span>
                    </div>
                    <h5 className="text-base font-bold text-[#0B1B2B] mb-2">
                      Anti-Clog Gravity Flow Water Manifold
                    </h5>
                    <p className="text-xs text-[#6B747C] leading-relaxed mb-3">
                      Unlike micro-spray nozzles that clog with hard water mineral scaling, Veloair uses heavy-bore open troughs that distribute water evenly across all 4 perimeter pads.
                    </p>
                    <div className="p-2.5 rounded-xl bg-[#F5F6F3] text-[11px] text-[#0B1B2B] font-medium flex items-center justify-between">
                      <span>Maintenance Frequency:</span>
                      <strong className="text-blue-700 font-bold">Zero Nozzle Clogs</strong>
                    </div>
                  </div>
                )}

                {selectedHotspot === 'water-sump' && (
                  <div className="p-5 rounded-2xl bg-white border-2 border-[#1677FF] shadow-lg animate-in fade-in">
                    <div className="flex items-center gap-2 text-cyan-700 font-bold text-xs uppercase mb-1">
                      <RefreshCw className="w-4 h-4 text-cyan-600" />
                      <span>Component #4: Auto-Drain & TDS Flush Valve</span>
                    </div>
                    <h5 className="text-base font-bold text-[#0B1B2B] mb-2">
                      Automated Water Quality Management
                    </h5>
                    <p className="text-xs text-[#6B747C] leading-relaxed mb-3">
                      Equipped with electronic auto-drain valve that flushes high-salinity water at preset intervals, preventing calcification and salt crystallization on the cellulose pads.
                    </p>
                    <div className="p-2.5 rounded-xl bg-[#F5F6F3] text-[11px] text-[#0B1B2B] font-medium flex items-center justify-between">
                      <span>Bleed-Off Rate:</span>
                      <strong className="text-cyan-700 font-bold">5–8% Continuous TDS Purge</strong>
                    </div>
                  </div>
                )}

                {selectedHotspot === 'discharge-duct' && (
                  <div className="p-5 rounded-2xl bg-white border-2 border-[#1677FF] shadow-lg animate-in fade-in">
                    <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase mb-1">
                      <Wind className="w-4 h-4 text-indigo-600" />
                      <span>Component #5: Down / Side / Top Discharge Plenum</span>
                    </div>
                    <h5 className="text-base font-bold text-[#0B1B2B] mb-2">
                      Precision Air Throw & Duct Velocity
                    </h5>
                    <p className="text-xs text-[#6B747C] leading-relaxed mb-3">
                      Aerodynamically flared outlet connecting to GI insulated or fabric air distribution ducts with 4-way motorized diffusers for spot cooling at machinery workstations.
                    </p>
                    <div className="p-2.5 rounded-xl bg-[#F5F6F3] text-[11px] text-[#0B1B2B] font-medium flex items-center justify-between">
                      <span>Air Delivery Velocity:</span>
                      <strong className="text-indigo-700 font-bold">12–15 m/s at discharge collar</strong>
                    </div>
                  </div>
                )}

                {/* Quick Selection Buttons */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 pt-2">
                  <button 
                    onClick={() => setSelectedHotspot('celdek-pad')}
                    className={`p-2 rounded-xl text-[10px] font-bold border transition-colors cursor-pointer text-center ${selectedHotspot === 'celdek-pad' ? 'bg-[#1677FF] text-white border-[#1677FF]' : 'bg-white text-[#6B747C] border-[#E2E6EA]'}`}
                  >
                    1. CELdek
                  </button>
                  <button 
                    onClick={() => setSelectedHotspot('axial-motor')}
                    className={`p-2 rounded-xl text-[10px] font-bold border transition-colors cursor-pointer text-center ${selectedHotspot === 'axial-motor' ? 'bg-[#1677FF] text-white border-[#1677FF]' : 'bg-white text-[#6B747C] border-[#E2E6EA]'}`}
                  >
                    2. Motor
                  </button>
                  <button 
                    onClick={() => setSelectedHotspot('distribution-header')}
                    className={`p-2 rounded-xl text-[10px] font-bold border transition-colors cursor-pointer text-center ${selectedHotspot === 'distribution-header' ? 'bg-[#1677FF] text-white border-[#1677FF]' : 'bg-white text-[#6B747C] border-[#E2E6EA]'}`}
                  >
                    3. Header
                  </button>
                  <button 
                    onClick={() => setSelectedHotspot('water-sump')}
                    className={`p-2 rounded-xl text-[10px] font-bold border transition-colors cursor-pointer text-center ${selectedHotspot === 'water-sump' ? 'bg-[#1677FF] text-white border-[#1677FF]' : 'bg-white text-[#6B747C] border-[#E2E6EA]'}`}
                  >
                    4. Sump
                  </button>
                  <button 
                    onClick={() => setSelectedHotspot('discharge-duct')}
                    className={`p-2 rounded-xl text-[10px] font-bold border transition-colors cursor-pointer text-center ${selectedHotspot === 'discharge-duct' ? 'bg-[#1677FF] text-white border-[#1677FF]' : 'bg-white text-[#6B747C] border-[#E2E6EA]'}`}
                  >
                    5. Duct
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: INDUSTRIAL AIRFLOW & VENTILATION DYNAMICS */}
      {activeTab === 'airflow' && (
        <div className="pt-8 space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Facility Air Movement Schematic */}
            <div className="lg:col-span-7 bg-[#0B1B2B] text-white rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Wind className="w-4 h-4 text-cyan-400" />
                  Positive Internal Pressure Air Movement Pattern
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                  25–35 Air Changes / Hour
                </span>
              </div>

              {/* Plant Air Circulation Diagram */}
              <div className="my-6 relative bg-slate-900/90 rounded-2xl p-6 border border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
                    <Building2 className="w-4 h-4" />
                    Industrial Shed / Factory Hall Cross-Section
                  </span>
                  <span>Continuous Air Sweeping Action</span>
                </div>

                {/* Animated Graphic Flow */}
                <div className="relative h-44 border-2 border-dashed border-slate-700 rounded-xl p-4 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
                  {/* Roof Mounted Coolers */}
                  <div className="flex justify-around items-center">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-6 bg-[#1677FF] rounded-t-md text-[9px] font-bold text-center pt-0.5 text-white shadow-md">
                        Veloair 1
                      </div>
                      <div className="w-1.5 h-6 bg-cyan-400" />
                      <div className="text-[10px] text-cyan-300 font-mono">↓ 24°C Supply</div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-12 h-6 bg-[#1677FF] rounded-t-md text-[9px] font-bold text-center pt-0.5 text-white shadow-md">
                        Veloair 2
                      </div>
                      <div className="w-1.5 h-6 bg-cyan-400" />
                      <div className="text-[10px] text-cyan-300 font-mono">↓ 24°C Supply</div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-12 h-6 bg-[#1677FF] rounded-t-md text-[9px] font-bold text-center pt-0.5 text-white shadow-md">
                        Veloair 3
                      </div>
                      <div className="w-1.5 h-6 bg-cyan-400" />
                      <div className="text-[10px] text-cyan-300 font-mono">↓ 24°C Supply</div>
                    </div>
                  </div>

                  {/* Air Stream Arrows Across Floor Level */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 px-2 py-1 bg-slate-800/80 rounded-lg border border-slate-700">
                    <span className="text-emerald-400 font-bold">100% Fresh Oxygenated Air</span>
                    <span className="text-amber-400">Pushes Heat, Fumes & Dust Out →</span>
                    <span className="text-rose-400 font-bold">Relief Dampers / Exhaust</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-4 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                    <div className="text-[10px] text-slate-400">Indoor Air Quality</div>
                    <div className="text-sm font-bold text-cyan-300 mt-0.5">Zero Recirculation</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                    <div className="text-[10px] text-slate-400">Internal Static Pressure</div>
                    <div className="text-sm font-bold text-emerald-400 mt-0.5">+15 to +25 Pa</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                    <div className="text-[10px] text-slate-400">Air Exchange Cycle</div>
                    <div className="text-sm font-bold text-amber-300 mt-0.5">Every 90-120 Sec</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ventilation Engineering Guidelines */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] text-[#1677FF] border border-blue-200 text-xs font-bold">
                <Wind className="w-3.5 h-3.5" />
                <span>ASHRAE 62.1 & Industrial Ventilation Standards</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-[#0B1B2B] font-display">
                Why Positive Pressure Beats Negative Exhaust
              </h4>
              <p className="text-xs sm:text-sm text-[#6B747C] leading-relaxed">
                Conventional exhaust fans pull dirty ambient dust, flies, and hot outside air through doors and wall cracks. Veloair floods the building with filtered cool air, creating positive internal pressure that naturally repels contaminants outward.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-[#F5F6F3] border border-[#E2E6EA] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold">
                    ✓
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-[#0B1B2B]">Textile Mills & Weaving Halls</h5>
                    <p className="text-[11px] text-[#6B747C] mt-0.5">
                      Maintains 65–70% optimal yarn humidity preventing thread breakage, static electricity, and machine jamming.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F5F6F3] border border-[#E2E6EA] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#1677FF] flex items-center justify-center shrink-0 font-bold">
                    ✓
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-[#0B1B2B]">Poultry Environment Control</h5>
                    <p className="text-[11px] text-[#6B747C] mt-0.5">
                      Continuous 2.5 m/s wind-chill velocity flushes ammonia (NH₃) fumes and prevents heat-stress mortality in broiler flocks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: TECHNOLOGY COMPARISON BENCHMARK */}
      {activeTab === 'comparison' && (
        <div className="pt-8 space-y-8 animate-in fade-in duration-300">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h4 className="text-lg sm:text-xl font-bold text-[#0B1B2B] font-display">
              Industrial Cooling Systems Benchmark (Per 10,000 Sq. Ft. Facility)
            </h4>
            <p className="text-xs text-[#6B747C] mt-1">
              Comparing Connected Electrical Load, Monthly Power Tariff, Air Exchange Quality, and GWP Impact.
            </p>
          </div>

          {/* Comparison Matrix Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Veloair Industrial Unit (Winner) */}
            <div className="rounded-3xl p-6 bg-white border-2 border-[#1677FF] shadow-xl relative flex flex-col justify-between">
              <div>
                <div className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-[#1677FF] text-white text-[10px] font-black uppercase tracking-wider shadow">
                  90% Cost Saving
                </div>

                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3FF] text-[#1677FF] flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0B1B2B] text-base">Veloair Evaporative</h5>
                    <div className="text-[11px] text-[#1677FF] font-semibold">Direct Inverter System</div>
                  </div>
                </div>

                <div className="space-y-4 pt-3 border-t border-[#E2E6EA] text-xs">
                  <div>
                    <div className="flex justify-between text-[#0B1B2B] mb-1 font-semibold">
                      <span>Connected Power Load:</span>
                      <span className="font-bold text-[#1677FF] font-mono">2.2 kW</span>
                    </div>
                    <div className="w-full bg-[#E2E6EA] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#1677FF] h-full rounded-full" style={{ width: '10%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#0B1B2B] mb-1 font-semibold">
                      <span>Monthly Power Bill (16h/day):</span>
                      <span className="font-bold text-emerald-600 font-mono">~PKR 58,000</span>
                    </div>
                    <div className="w-full bg-[#E2E6EA] h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: '12%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#0B1B2B] mb-1 font-semibold">
                      <span>Fresh Air Exchange:</span>
                      <span className="font-bold text-[#0B1B2B]">100% Atmospheric</span>
                    </div>
                    <div className="w-full bg-[#E2E6EA] h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: '100%' }} />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E2E6EA] space-y-1.5 text-[11px] text-[#6B747C]">
                    <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                      <Check className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                      <span>Zero ozone-depleting refrigerants (0 GWP)</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                      <Check className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                      <span>Positive pressure airborne dust expulsion</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E2E6EA]">
                <button
                  type="button"
                  onClick={onOpenCalculator}
                  className="w-full py-2 bg-[#EBF3FF] hover:bg-blue-100 text-[#1677FF] font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Run Facility Savings Calc</span>
                </button>
              </div>
            </div>

            {/* Conventional DX Commercial AC */}
            <div className="rounded-3xl p-6 bg-[#F5F6F3] border border-[#E2E6EA] relative flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#6B747C] flex items-center justify-center border border-[#E2E6EA]">
                    <Thermometer className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0B1B2B] text-base">Conventional DX AC</h5>
                    <div className="text-[11px] text-[#6B747C]">Chiller / Package Unit</div>
                  </div>
                </div>

                <div className="space-y-4 pt-3 border-t border-[#E2E6EA] text-xs">
                  <div>
                    <div className="flex justify-between text-[#0B1B2B] mb-1">
                      <span>Connected Power Load:</span>
                      <span className="font-bold text-rose-600 font-mono">25.0 kW - 30.0 kW</span>
                    </div>
                    <div className="w-full bg-[#E2E6EA] h-2 rounded-full overflow-hidden">
                      <div className="bg-rose-500 h-full rounded-full" style={{ width: '90%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#0B1B2B] mb-1">
                      <span>Monthly Power Bill (16h/day):</span>
                      <span className="font-bold text-rose-600 font-mono">~PKR 740,000+</span>
                    </div>
                    <div className="w-full bg-[#E2E6EA] h-2 rounded-full overflow-hidden">
                      <div className="bg-rose-500 h-full rounded-full" style={{ width: '95%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#0B1B2B] mb-1">
                      <span>Fresh Air Exchange:</span>
                      <span className="font-bold text-amber-700">0% - 15% (Recirculated)</span>
                    </div>
                    <div className="w-full bg-[#E2E6EA] h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full rounded-full" style={{ width: '15%' }} />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E2E6EA] space-y-1.5 text-[11px] text-[#6B747C]">
                    <div className="flex items-center gap-1.5">
                      <span className="text-rose-600 font-bold">✕</span>
                      <span>Prohibitive peak demand charges & tariffs</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-rose-600 font-bold">✕</span>
                      <span>Stale air increases factory fatigue & VOCs</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E2E6EA] text-center text-[11px] text-rose-600 font-semibold">
                High Opex & Carbon Tax Penalty
              </div>
            </div>

            {/* Traditional Axial Exhaust Fans */}
            <div className="rounded-3xl p-6 bg-[#F5F6F3] border border-[#E2E6EA] relative flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#6B747C] flex items-center justify-center border border-[#E2E6EA]">
                    <Wind className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0B1B2B] text-base">Standard Exhaust Fans</h5>
                    <div className="text-[11px] text-[#6B747C]">Dry Ventilation Only</div>
                  </div>
                </div>

                <div className="space-y-4 pt-3 border-t border-[#E2E6EA] text-xs">
                  <div>
                    <div className="flex justify-between text-[#0B1B2B] mb-1">
                      <span>Connected Power Load:</span>
                      <span className="font-bold text-amber-700 font-mono">4.5 kW</span>
                    </div>
                    <div className="w-full bg-[#E2E6EA] h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full rounded-full" style={{ width: '30%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#0B1B2B] mb-1">
                      <span>Monthly Power Bill (16h/day):</span>
                      <span className="font-bold text-amber-700 font-mono">~PKR 118,000</span>
                    </div>
                    <div className="w-full bg-[#E2E6EA] h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full rounded-full" style={{ width: '25%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#0B1B2B] mb-1">
                      <span>Cooling Drop (ΔT):</span>
                      <span className="font-bold text-rose-600">0°C (No Cooling Effect)</span>
                    </div>
                    <div className="w-full bg-[#E2E6EA] h-2 rounded-full overflow-hidden">
                      <div className="bg-slate-300 h-full rounded-full" style={{ width: '0%' }} />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E2E6EA] space-y-1.5 text-[11px] text-[#6B747C]">
                    <div className="flex items-center gap-1.5">
                      <span className="text-rose-600 font-bold">✕</span>
                      <span>Only circulates scorching ambient outdoor heat</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-rose-600 font-bold">✕</span>
                      <span>No dust, lint, or particulate filtration</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E2E6EA] text-center text-[11px] text-amber-700 font-semibold">
                Hot Air Recirculation Only
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: NFPA 13 & 291 FIRE SAFETY ANATOMY */}
      {activeTab === 'fire-safety' && (
        <div className="pt-8 space-y-8 animate-in fade-in duration-300">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
              <span>Turnkey NFPA Standards & Civil Defence Approved</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-[#0B1B2B] font-display">
              Turnkey Industrial Fire Protection Network Architecture
            </h4>
            <p className="text-xs text-[#6B747C] mt-1">
              Select nodes to inspect water storage reservoirs, diesel booster pumps, underground ring mains, and FM-200 clean agent server suppression.
            </p>
          </div>

          {/* Interactive Fire Network Node Hotspots */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Node 1 */}
            <div 
              onClick={() => setSelectedFireHotspot('pumps')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 shadow-2xs ${selectedFireHotspot === 'pumps' ? 'bg-white border-2 border-rose-600 shadow-md' : 'bg-[#F5F6F3] border-[#E2E6EA] hover:border-rose-300'}`}
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700">NFPA 20</span>
              </div>
              <h5 className="font-bold text-[#0B1B2B] text-sm">Dedicated Reservoir & UL/FM Pumps</h5>
              <p className="text-xs text-[#6B747C] leading-relaxed">
                NFPA 20 compliant UL/FM Diesel Main, Electric Motor, and Jockey Centrifugal Pumps (500–2,000 GPM at 8–12 Bar).
              </p>
            </div>

            {/* Node 2 */}
            <div 
              onClick={() => setSelectedFireHotspot('ring-main')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 shadow-2xs ${selectedFireHotspot === 'ring-main' ? 'bg-white border-2 border-rose-600 shadow-md' : 'bg-[#F5F6F3] border-[#E2E6EA] hover:border-rose-300'}`}
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700">NFPA 24</span>
              </div>
              <h5 className="font-bold text-[#0B1B2B] text-sm">Underground Ring Main Grid</h5>
              <p className="text-xs text-[#6B747C] leading-relaxed">
                Heavy-duty Schedule 40 MS loop pipelines with sectional isolation butterfly valves to maintain continuous looped pressure.
              </p>
            </div>

            {/* Node 3 */}
            <div 
              onClick={() => setSelectedFireHotspot('hydrants')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 shadow-2xs ${selectedFireHotspot === 'hydrants' ? 'bg-white border-2 border-rose-600 shadow-md' : 'bg-[#F5F6F3] border-[#E2E6EA] hover:border-rose-300'}`}
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700">NFPA 14/291</span>
              </div>
              <h5 className="font-bold text-[#0B1B2B] text-sm">Hydrant Pillars & Landing Valves</h5>
              <p className="text-xs text-[#6B747C] leading-relaxed">
                NFPA 291 color-coded flow rated 2-way / 4-way outdoor pillar hydrants and indoor 30-meter reinforced rubberized hose reels.
              </p>
            </div>

            {/* Node 4 */}
            <div 
              onClick={() => setSelectedFireHotspot('sprinklers')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 shadow-2xs ${selectedFireHotspot === 'sprinklers' ? 'bg-white border-2 border-rose-600 shadow-md' : 'bg-[#F5F6F3] border-[#E2E6EA] hover:border-rose-300'}`}
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xs">
                  04
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700">NFPA 13/2001</span>
              </div>
              <h5 className="font-bold text-[#0B1B2B] text-sm">Automatic Sprinklers & FM-200</h5>
              <p className="text-xs text-[#6B747C] leading-relaxed">
                Ceiling deluge quartzoid glass bulb sprinklers (68°C) + FM-200 gas total flooding system for server & control rooms.
              </p>
            </div>
          </div>

          {/* Deep Inspection Panel for Fire Safety */}
          <div className="p-6 rounded-3xl bg-rose-950 text-white border border-rose-900 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-rose-800/80">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-rose-400" />
                <div>
                  <h5 className="font-bold text-base text-rose-100">
                    {selectedFireHotspot === 'pumps' && 'NFPA 20 Certified Fire Water Booster Pump Set'}
                    {selectedFireHotspot === 'ring-main' && 'Schedule 40 Underground Looped Ring Main Hydraulic Grid'}
                    {selectedFireHotspot === 'hydrants' && 'NFPA 291 Outdoor Pillar Hydrants & Hose Cabinets'}
                    {selectedFireHotspot === 'sprinklers' && 'NFPA 13 Automatic Sprinkler Array & FM-200 Clean Agent System'}
                  </h5>
                  <span className="text-xs text-rose-300">
                    Engineered & Commissioned by PEC Licensed C4 Engineers (License #20000)
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (onConsultEngineering) {
                    onConsultEngineering();
                  }
                }}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-rose-600/30 flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>Request NFPA Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-xs text-rose-200/90">
              <div className="p-3.5 rounded-xl bg-rose-900/40 border border-rose-800">
                <strong className="text-white block mb-1">Standard Compliance:</strong>
                NFPA 13, 14, 20, 24, 2001, and Pakistan Civil Defence Code of Fire Safety 2016.
              </div>
              <div className="p-3.5 rounded-xl bg-rose-900/40 border border-rose-800">
                <strong className="text-white block mb-1">Commissioning Tests:</strong>
                Hydrostatic pressure testing at 200 PSI (14 Bar) for 2 continuous hours with zero pressure drop.
              </div>
              <div className="p-3.5 rounded-xl bg-rose-900/40 border border-rose-800">
                <strong className="text-white block mb-1">Client Applications:</strong>
                Packages Ltd, Nestle Sheikhupura, Guard Group, Al-Karam Textiles, and Descon Engineering.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: CELDEK 5090 / 7090 SCIENCE */}
      {activeTab === 'celdek' && (
        <div className="pt-8 space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
                <Layers className="w-3.5 h-3.5 text-amber-600" />
                <span>Cross-Corrugated Cellulose Matrix Science</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-[#0B1B2B] font-display">
                Why Genuine CELdek 5090 Media Outperforms Local Pads
              </h4>
              <p className="text-xs sm:text-sm text-[#6B747C] leading-relaxed">
                Inferior local straw or cheap craft paper pads decay, foul, and clog within 2 to 3 months. Veloair units exclusively utilize high-density cross-corrugated CELdek 5090 media with unequal flute angles (45° x 15°) to force maximum water-to-air boundary layer contact.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#F5F6F3] border border-[#E2E6EA]">
                  <div className="text-base font-black text-amber-800 font-mono">45° x 15°</div>
                  <div className="text-xs text-[#0B1B2B] font-semibold mt-0.5">Unequal Flute Geometry</div>
                  <div className="text-[11px] text-[#6B747C] mt-1">Directs water toward air inlet side</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F5F6F3] border border-[#E2E6EA]">
                  <div className="text-base font-black text-[#1677FF] font-mono">92%+</div>
                  <div className="text-xs text-[#0B1B2B] font-semibold mt-0.5">Saturation Efficiency</div>
                  <div className="text-[11px] text-[#6B747C] mt-1">Maximum latent cooling yield</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#F5F6F3] rounded-3xl p-6 border border-[#E2E6EA] space-y-3">
              <h5 className="font-bold text-[#0B1B2B] text-sm border-b border-[#E2E6EA] pb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Preventive Maintenance Standards for 5+ Years Lifespan
              </h5>
              <ul className="space-y-2.5 text-xs text-[#6B747C]">
                <li className="flex items-start gap-2">
                  <span className="text-[#1677FF] font-bold mt-0.5">1.</span>
                  <span><strong className="text-[#0B1B2B]">Automated Water Bleed-Off:</strong> Continuous 5–8% bleed-off prevents salt crystallization and TDS accumulation above 1,500 ppm.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1677FF] font-bold mt-0.5">2.</span>
                  <span><strong className="text-[#0B1B2B]">Daily 45-Min Night Drying Cycle:</strong> Running the axial fan without water for 45 minutes daily dries out the media, killing algae spores and bacterial biofilms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1677FF] font-bold mt-0.5">3.</span>
                  <span><strong className="text-[#0B1B2B]">Low-Pressure Soft Spray Cleaning:</strong> Clean annually with soft brush and gentle water spray (avoid high-pressure jet washers that crush flutes).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Studio Quick CTAs Footer Bar */}
      <div className="mt-8 pt-6 border-t border-[#E2E6EA] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-[#6B747C] flex items-center gap-2">
          <Info className="w-4 h-4 text-[#1677FF]" />
          <span>All thermodynamic models based on Stull Wet-Bulb equation & ASHRAE psychrometric standards.</span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {onOpenCalculator && (
            <button
              type="button"
              onClick={onOpenCalculator}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full Energy Savings Calculator</span>
            </button>
          )}

          {onConsultEngineering && (
            <button
              type="button"
              onClick={onConsultEngineering}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-[#1677FF] hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-md shadow-[#1677FF]/20 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Consult Engineering Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

