import React, { useState, useMemo } from 'react';
import { 
  Zap, 
  Percent, 
  TrendingDown, 
  Calculator, 
  CheckCircle2, 
  Send, 
  Wind, 
  HelpCircle,
  Flame,
  FileSpreadsheet
} from 'lucide-react';
import { COMPANY_INFO } from '../data/engineeringData';

interface EnergyCalculatorProps {
  onOpenQuoteModal: (customNote?: string) => void;
}

export const EnergyCalculator: React.FC<EnergyCalculatorProps> = ({ onOpenQuoteModal }) => {
  const [facilityType, setFacilityType] = useState('textile');
  const [areaSqFt, setAreaSqFt] = useState(5000);
  const [ceilingHeightFt, setCeilingHeightFt] = useState(14);
  const [dailyHours, setDailyHours] = useState(16);
  const [electricityRatePKR, setElectricityRatePKR] = useState(55); // average PKR per commercial/industrial kWh

  // Calculations memoized for ultra-responsive 120fps slider response:
  const calculatedResults = useMemo(() => {
    const getACH = (type: string) => {
      switch (type) {
        case 'poultry': return 35;
        case 'textile': return 28;
        case 'dairy': return 30;
        case 'warehouse': return 20;
        case 'factory': return 25;
        case 'commercial': return 22;
        default: return 25;
      }
    };

    const ach = getACH(facilityType);
    const totalVolumeCuFt = areaSqFt * ceilingHeightFt;
    const requiredCFM = Math.round((totalVolumeCuFt * ach) / 60);
    const requiredM3H = Math.round(requiredCFM * 1.699);

    const unitCapacityCFM = 11000;
    const unitsNeeded = Math.max(1, Math.ceil(requiredCFM / unitCapacityCFM));
    const veloairPowerKW = Math.round((unitsNeeded * 1.1) * 10) / 10;
    
    const conventionalTons = Math.round(areaSqFt / 220);
    const conventionalPowerKW = Math.round(conventionalTons * 1.25);

    const daysInMonth = 30;
    const monthlyVeloairKWh = Math.round(veloairPowerKW * dailyHours * daysInMonth);
    const monthlyConventionalKWh = Math.round(conventionalPowerKW * dailyHours * daysInMonth);

    const monthlyVeloairCostPKR = Math.round(monthlyVeloairKWh * electricityRatePKR);
    const monthlyConventionalCostPKR = Math.round(monthlyConventionalKWh * electricityRatePKR);

    const monthlySavingsPKR = Math.max(0, monthlyConventionalCostPKR - monthlyVeloairCostPKR);
    const annualSavingsPKR = monthlySavingsPKR * 12;
    const savingsPercent = Math.round(((monthlyConventionalCostPKR - monthlyVeloairCostPKR) / (monthlyConventionalCostPKR || 1)) * 100) || 88;

    return {
      ach,
      totalVolumeCuFt,
      requiredCFM,
      requiredM3H,
      unitsNeeded,
      veloairPowerKW,
      conventionalTons,
      conventionalPowerKW,
      monthlyVeloairKWh,
      monthlyConventionalKWh,
      monthlyVeloairCostPKR,
      monthlyConventionalCostPKR,
      monthlySavingsPKR,
      annualSavingsPKR,
      savingsPercent
    };
  }, [facilityType, areaSqFt, ceilingHeightFt, dailyHours, electricityRatePKR]);

  const {
    ach,
    totalVolumeCuFt,
    requiredCFM,
    requiredM3H,
    unitsNeeded,
    veloairPowerKW,
    conventionalTons,
    conventionalPowerKW,
    monthlyVeloairKWh,
    monthlyConventionalKWh,
    monthlyVeloairCostPKR,
    monthlyConventionalCostPKR,
    monthlySavingsPKR,
    annualSavingsPKR,
    savingsPercent
  } = calculatedResults;

  const whatsappMessage = `*Engineering Enterprises & Veloair Cooling Calculation*%0A%0A• Facility: ${facilityType.toUpperCase()}%0A• Area: ${areaSqFt.toLocaleString()} sq.ft (Height: ${ceilingHeightFt} ft)%0A• Required Airflow: ${requiredCFM.toLocaleString()} CFM (${requiredM3H.toLocaleString()} m³/h)%0A• Recommended Veloair Units: ${unitsNeeded} Units (${veloairPowerKW} kW total)%0A• Conventional AC Power: ${conventionalPowerKW} kW%0A• Estimated Monthly Bill Savings: PKR ${monthlySavingsPKR.toLocaleString()} (${savingsPercent}%%25 reduction)%0A• Estimated Annual Savings: PKR ${annualSavingsPKR.toLocaleString()}%0A%0APlease provide a formal technical quotation and on-site survey plan.`;

  return (
    <section id="energy-calculator" className="py-20 bg-white text-[#0B1B2B] relative overflow-hidden border-b border-[#E2E6EA]">
      {/* Decorative subtle ambient glows */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-[#1677FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-3">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Industrial ROI & Electricity Reducer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B1B2B] font-display">
            Veloair Energy & Power Savings Calculator
          </h2>
          <p className="mt-3 text-[#6B747C] text-sm sm:text-base leading-relaxed">
            In this inflation, paying high electricity bills becomes unaffordable. Calculate your exact required CFM and discover how Veloair cuts your cooling bill by up to 90%.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-[#F5F6F3] border border-[#E2E6EA] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <h3 className="text-lg font-bold text-[#0B1B2B] flex items-center gap-2 border-b border-[#E2E6EA] pb-3">
              <Calculator className="w-5 h-5 text-[#1677FF]" />
              <span>Facility & Operational Parameters</span>
            </h3>

            {/* Facility Type Selector */}
            <div>
              <label className="block text-xs font-bold text-[#0B1B2B] uppercase tracking-wider mb-2">
                Facility / Industry Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'textile', label: 'Textile & Garment' },
                  { id: 'poultry', label: 'Poultry & Hatchery' },
                  { id: 'dairy', label: 'Dairy & Sheds' },
                  { id: 'factory', label: 'Manufacturing Plant' },
                  { id: 'warehouse', label: 'Logistics Warehouse' },
                  { id: 'commercial', label: 'Commercial Hall / Food' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFacilityType(item.id)}
                    className={`min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-semibold text-center transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center ${
                      facilityType === item.id
                        ? 'bg-[#1677FF] text-white font-bold shadow-md shadow-[#1677FF]/20'
                        : 'bg-white text-[#6B747C] hover:text-[#0B1B2B] border border-[#E2E6EA] shadow-2xs hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Floor Area Slider & Input */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-[#0B1B2B] uppercase tracking-wider">
                  Total Floor Area (Sq. Ft.)
                </label>
                <span className="text-sm font-black text-[#1677FF] bg-white px-3 py-1 rounded-lg border border-[#E2E6EA] shadow-2xs">
                  {areaSqFt.toLocaleString()} sq.ft
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-3 bg-[#E2E6EA] rounded-lg appearance-none cursor-pointer accent-[#1677FF] py-2"
              />
              <div className="flex justify-between text-[11px] text-[#6B747C] mt-1">
                <span>500 sq ft</span>
                <span>25,000 sq ft</span>
                <span>50,000+ sq ft</span>
              </div>
            </div>

            {/* Ceiling Height & Daily Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0B1B2B] uppercase tracking-wider mb-1.5">
                  Ceiling Height (Feet)
                </label>
                <input
                  type="number"
                  min="8"
                  max="40"
                  value={ceilingHeightFt}
                  onChange={(e) => setCeilingHeightFt(Number(e.target.value))}
                  className="w-full min-h-[48px] bg-white border border-[#E2E6EA] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0B1B2B] focus:outline-none focus:border-[#1677FF] shadow-2xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0B1B2B] uppercase tracking-wider mb-1.5">
                  Daily Operating Hours
                </label>
                <input
                  type="number"
                  min="4"
                  max="24"
                  value={dailyHours}
                  onChange={(e) => setDailyHours(Number(e.target.value))}
                  className="w-full min-h-[48px] bg-white border border-[#E2E6EA] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0B1B2B] focus:outline-none focus:border-[#1677FF] shadow-2xs font-semibold"
                />
              </div>
            </div>

            {/* Electricity Tariff (PKR/kWh) */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-[#0B1B2B] uppercase tracking-wider">
                  Electricity Rate (PKR / Unit)
                </label>
                <span className="text-xs text-[#6B747C]">Industrial Peak/Off-peak avg</span>
              </div>
              <input
                type="number"
                min="20"
                max="100"
                value={electricityRatePKR}
                onChange={(e) => setElectricityRatePKR(Number(e.target.value))}
                className="w-full bg-white border border-[#E2E6EA] rounded-xl px-3.5 py-2.5 text-sm text-[#0B1B2B] focus:outline-none focus:border-[#1677FF] shadow-2xs font-semibold"
              />
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Big Savings Card */}
            <div className="bg-[#0B1B2B] text-white border border-slate-700/60 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Estimated Monthly Savings
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-xs font-black">
                  {savingsPercent}% Bill Reduction
                </span>
              </div>

              {/* Huge Savings Number */}
              <div className="mt-4 mb-2">
                <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-display">
                  PKR {monthlySavingsPKR.toLocaleString()}
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  Annual Projected Savings: <span className="text-white font-bold">PKR {annualSavingsPKR.toLocaleString()}</span>
                </div>
              </div>

              {/* Side-by-side power comparison */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-700/70">
                <div className="bg-slate-900/90 p-4 rounded-2xl border border-emerald-500/40">
                  <div className="text-xs font-bold text-emerald-400">Veloair System</div>
                  <div className="text-2xl font-black text-white mt-1">{veloairPowerKW} kW</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {unitsNeeded} units ({monthlyVeloairKWh.toLocaleString()} kWh/mo)
                  </div>
                  <div className="text-xs font-bold text-emerald-300 mt-2">
                    PKR {monthlyVeloairCostPKR.toLocaleString()}/mo
                  </div>
                </div>

                <div className="bg-slate-900/90 p-4 rounded-2xl border border-rose-500/40">
                  <div className="text-xs font-bold text-rose-400">Conventional AC</div>
                  <div className="text-2xl font-black text-white mt-1">{conventionalPowerKW} kW</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    ~{conventionalTons} Tons ({monthlyConventionalKWh.toLocaleString()} kWh/mo)
                  </div>
                  <div className="text-xs font-bold text-rose-300 mt-2">
                    PKR {monthlyConventionalCostPKR.toLocaleString()}/mo
                  </div>
                </div>
              </div>

              {/* Technical Airflow Sizing Output */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-900/90 border border-slate-700 text-xs space-y-2">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Required Sizing:</span>
                  <span className="font-bold text-[#1677FF]">{requiredCFM.toLocaleString()} CFM ({requiredM3H.toLocaleString()} m³/h)</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Air Exchange Rate (ACH):</span>
                  <span className="font-bold text-slate-200">{ach} Air Changes / Hr</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>100% Fresh Air Injection:</span>
                  <span className="font-bold text-emerald-400">Zero Recirculated Stale Air</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/923008425772?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[48px] py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm text-center shadow transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Estimate to WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenQuoteModal(`Calculated for ${areaSqFt} sq ft ${facilityType} - ${unitsNeeded} Veloair Units`)}
                  className="min-h-[48px] py-3.5 px-4 rounded-xl bg-[#1677FF] hover:bg-[#0E65E5] active:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer shadow flex items-center justify-center"
                >
                  Request Technical Quotation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
