import React from 'react';
import { motion } from 'motion/react';
import { 
  Wind, 
  Shield, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Award,
  Zap,
  Percent
} from 'lucide-react';
import { COMPANY_INFO, ACHIEVEMENTS } from '../data/engineeringData';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onOpenCalculator: () => void;
  onOpenChat: () => void;
  onOpenCertModal?: (certId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenQuoteModal, 
  onOpenCalculator,
  onOpenChat,
  onOpenCertModal
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="hero" className="relative overflow-hidden bg-[#F8FAFD] text-[#0B1B2B] border-b border-[#E2E8F0]">
      {/* Background Subtle Mesh & Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_75%_at_50%_-15%,rgba(22,119,255,0.12),rgba(248,250,253,0.98))] z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8FAFD]/60 to-[#F8FAFD] z-10" />
      
      {/* Subtle blueprint grid watermark */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-cover bg-center mix-blend-multiply scale-105 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80')`
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Animated Slogan Pill with Sweeping Light Shimmer & Pulsing Beacon */}
            <motion.div 
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex relative group overflow-hidden items-center gap-2.5 px-4 py-2 rounded-full bg-white backdrop-blur-md border border-[#1677FF]/35 text-[#0B1B2B] text-xs font-semibold shadow-md shadow-[#1677FF]/10 hover:shadow-lg hover:shadow-[#1677FF]/20 hover:border-[#1677FF] transition-all duration-300 select-none cursor-default"
            >
              {/* Continuous Traveling Light Sweep / Laser Shimmer Animation */}
              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/90 via-[#1677FF]/20 to-transparent pointer-events-none"
                animate={{
                  translateX: ['-100%', '200%']
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3.2,
                  ease: "easeInOut",
                  repeatDelay: 1.2
                }}
              />

              {/* Pulsing Live Beacon Indicator */}
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1677FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1677FF]"></span>
              </span>

              {/* Rotating & Pulsing Sparkle Icon */}
              <motion.div
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.15, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4, 
                  ease: "easeInOut" 
                }}
                className="shrink-0 text-[#1677FF]"
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>

              {/* Motto Text with Gradient Accent */}
              <span className="font-bold tracking-tight text-[#0B1B2B] text-xs sm:text-[13px] bg-gradient-to-r from-[#0B1B2B] via-[#1677FF] to-[#0B1B2B] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                Convert the Challenges into Opportunities
              </span>

              {/* Divider */}
              <span className="text-[#1677FF]/40 font-bold">•</span>

              {/* Since 1992 Tag with subtle highlighted pill */}
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EBF3FF] border border-[#1677FF]/30 text-[#1677FF] font-bold text-[11px] uppercase tracking-wider shadow-2xs">
                Since 1992
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#0B1B2B] leading-tight">
              Sustainable And Smarter{' '}
              <span className="text-[#1677FF]">
                Cooling Power
              </span>{' '}
              Solution
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-[#0B1B2B]/90 font-medium">
              With Veloair to Cool All! Save up to <span className="text-[#1677FF] font-bold">90% in electricity bills</span> while delivering 100% fresh, filtered atmospheric airflow.
            </p>

            <p className="text-sm sm:text-base text-[#5C6B7A] max-w-2xl leading-relaxed">
              Engineering Enterprises delivers end-to-end turnkey HVAC, Veloair Evaporative Cooling, NFPA-Compliant Fire Fighting Networks, and Electrical Panels for Pakistan's premier manufacturing, textile, poultry, and commercial hubs.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#0B1B2B]">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs hover:border-[#1677FF]/40 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">PEC License # 20000 (Category C4)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs hover:border-[#1677FF]/40 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">ISO 9001:2008 & OHSAS 18001 Certified</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs hover:border-[#1677FF]/40 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">Direct Importer & Turnkey MEP Contractor</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs hover:border-[#1677FF]/40 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">Carrier International USA Apex Awarded CEO</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-4">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-xl bg-[#1677FF] hover:bg-[#0E65E5] active:bg-[#0B54C2] text-white font-bold text-sm tracking-wide shadow-md shadow-[#1677FF]/25 hover:shadow-lg hover:shadow-[#1677FF]/35 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>GET FREE CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="w-full sm:w-auto min-h-[48px] px-5 py-3.5 rounded-xl bg-white hover:bg-[#F0F6FF] active:bg-[#EBF3FF] text-[#0B1B2B] hover:text-[#1677FF] border border-[#E2E8F0] hover:border-[#1677FF] font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs active:scale-[0.98]"
              >
                <Percent className="w-4 h-4 text-[#1677FF]" />
                <span>Calculate Power Savings</span>
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.98]"
              >
                <span>WhatsApp Instant</span>
              </a>
            </div>
          </div>

          {/* Right Visual Card - Spotlight Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-7 shadow-xl shadow-[#1677FF]/8">
              
              {/* Highlight Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs uppercase tracking-wider text-emerald-700 font-bold">
                    Turnkey Engineering
                  </span>
                </div>
                <span className="text-xs bg-[#EBF3FF] text-[#1677FF] px-3 py-1 rounded-full border border-[#1677FF]/25 font-bold shadow-2xs">
                  Since 1992
                </span>
              </div>

              {/* Core Offerings Mini Grid */}
              <div className="grid grid-cols-2 gap-3.5 my-5">
                <button
                  type="button"
                  onClick={() => scrollToSection('products')}
                  className="bg-[#F8FAFD] hover:bg-white p-4 rounded-2xl border border-[#E2E8F0] hover:border-[#1677FF] text-left transition-all cursor-pointer group shadow-2xs hover:shadow-md"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EBF3FF] text-[#1677FF] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                    <Wind className="w-4.5 h-4.5" />
                  </div>
                  <div className="font-bold text-[#0B1B2B] text-sm group-hover:text-[#1677FF] transition-colors">Veloair Cooling</div>
                  <div className="text-[11px] text-[#5C6B7A] mt-0.5">Up to 90% Bill Reduction ↗</div>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('products')}
                  className="bg-[#F8FAFD] hover:bg-white p-4 rounded-2xl border border-[#E2E8F0] hover:border-rose-400 text-left transition-all cursor-pointer group shadow-2xs hover:shadow-md"
                >
                  <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                    <Shield className="w-4.5 h-4.5" />
                  </div>
                  <div className="font-bold text-[#0B1B2B] text-sm group-hover:text-rose-600 transition-colors">Fire Fighting</div>
                  <div className="text-[11px] text-[#5C6B7A] mt-0.5">NFPA 291 & 13 Certified ↗</div>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('products')}
                  className="bg-[#F8FAFD] hover:bg-white p-4 rounded-2xl border border-[#E2E8F0] hover:border-[#1677FF] text-left transition-all cursor-pointer group shadow-2xs hover:shadow-md"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EBF3FF] text-[#1677FF] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                    <Zap className="w-4.5 h-4.5" />
                  </div>
                  <div className="font-bold text-[#0B1B2B] text-sm group-hover:text-[#1677FF] transition-colors">Electrical Panels</div>
                  <div className="text-[11px] text-[#5C6B7A] mt-0.5">LT, ATS/AMF & PFI ↗</div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (onOpenCertModal) {
                      onOpenCertModal('pec-c4');
                    } else {
                      scrollToSection('certifications');
                    }
                  }}
                  className="bg-[#F8FAFD] hover:bg-white p-4 rounded-2xl border border-[#E2E8F0] hover:border-amber-400 text-left transition-all cursor-pointer group shadow-2xs hover:shadow-md"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                    <Award className="w-4.5 h-4.5" />
                  </div>
                  <div className="font-bold text-[#0B1B2B] text-sm group-hover:text-amber-600 transition-colors">PEC Category C4</div>
                  <div className="text-[11px] text-[#5C6B7A] mt-0.5">License # 20000 ↗</div>
                </button>
              </div>

              {/* Interactive Quick Assistant Banner */}
              <div 
                onClick={onOpenChat}
                className="mt-3 p-3.5 rounded-2xl bg-[#0B1B2B] text-white border border-[#1677FF]/40 flex items-center justify-between cursor-pointer hover:border-[#1677FF] hover:bg-[#122438] transition-all group shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1677FF]/20 text-[#1677FF] flex items-center justify-center text-lg">
                    💬
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-[#1677FF] transition-colors">
                      AI Engineering Consultant
                    </div>
                    <div className="text-[11px] text-slate-300">Ask any technical question in English or Urdu</div>
                  </div>
                </div>
                <span className="text-xs text-[#1677FF] font-bold group-hover:translate-x-1 transition-transform">
                  Chat Now →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#E2E8F0] grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {ACHIEVEMENTS.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-3.5 sm:p-5 border border-[#E2E8F0] text-center hover:border-[#1677FF] transition-all shadow-2xs hover:shadow-md group"
            >
              <div className="text-2xl sm:text-4xl font-black text-[#0B1B2B] group-hover:text-[#1677FF] transition-colors font-display">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0B1B2B] mt-1 sm:mt-1.5">
                {item.label}
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#5C6B7A] mt-0.5 sm:mt-1 line-clamp-1">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
