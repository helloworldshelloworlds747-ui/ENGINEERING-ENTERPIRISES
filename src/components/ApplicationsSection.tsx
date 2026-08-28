import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Wind,
  Layers,
  ZoomIn,
  X,
  PhoneCall,
  BookOpen,
  Award,
  ExternalLink,
  ChevronRight,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { INDUSTRY_APPLICATIONS } from '../data/engineeringData';
import { IndustryApplication } from '../types';
import { SectorDetailModal } from './SectorDetailModal';

interface ApplicationsSectionProps {
  onSelectApplicationForQuote: (appName: string) => void;
}

const FALLBACK_APPLICATION_IMAGES: Record<string, string> = {
  dairy: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=1200&q=80",
  poultry: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80",
  textile: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  greenhouses: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
  industrial: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
  commercial: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
};

export const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({ 
  onSelectApplicationForQuote 
}) => {
  const [activeApp, setActiveApp] = useState<IndustryApplication>(INDUSTRY_APPLICATIONS[0]);
  const [modalApp, setModalApp] = useState<IndustryApplication | null>(null);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, appId: string) => {
    const fallback = FALLBACK_APPLICATION_IMAGES[appId] || "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80";
    if (e.currentTarget.src !== fallback) {
      e.currentTarget.src = fallback;
    }
  };

  const handleOpenSectorDetails = (app: IndustryApplication) => {
    setActiveApp(app);
    setModalApp(app);
  };

  return (
    <section id="applications" className="py-20 bg-[#F5F6F3] text-[#0B1B2B] relative border-b border-[#E2E6EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF3FF] border border-[#1677FF]/20 text-[#1677FF] text-xs font-bold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Versatile Sector Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B1B2B] font-display">
            Industry & Sector Applications
          </h2>
          <p className="mt-3 text-[#6B747C] text-sm sm:text-base leading-relaxed">
            Click on any sector below to explore real installed client project case studies, before/after thermal benchmarks, engineering articles, and system photo galleries.
          </p>
        </div>

        {/* 6 Photo Grid matching the brochure screenshot with Framer Motion cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {INDUSTRY_APPLICATIONS.map((app, index) => {
            const isSelected = activeApp.id === app.id;
            const caseCount = app.caseStudies?.length || 0;
            const articleCount = app.articles?.length || 0;

            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.45, 
                  delay: index * 0.08,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.025,
                  transition: { type: "spring", stiffness: 380, damping: 22 }
                }}
                onClick={() => handleOpenSectorDetails(app)}
                className={`group cursor-pointer rounded-3xl overflow-hidden border flex flex-col bg-white select-none relative transition-shadow duration-300 ${
                  isSelected
                    ? 'border-[#1677FF] ring-2 ring-[#1677FF]/25 shadow-xl shadow-[#1677FF]/15'
                    : 'border-[#E2E6EA] hover:border-[#1677FF]/60 shadow-sm hover:shadow-2xl hover:shadow-[#0B1B2B]/12'
                }`}
              >
                {/* Photo Thumbnail with Animated Explore Projects Overlay */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={app.imageUrl}
                    alt={app.title}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => handleImageError(e, app.id)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle dynamic dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B]/90 via-[#0B1B2B]/35 to-transparent group-hover:from-[#0B1B2B]/95 group-hover:via-[#0B1B2B]/50 transition-all duration-300" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 flex flex-wrap items-center gap-1.5 z-10">
                    {caseCount > 0 && (
                      <span className="px-2.5 py-1 rounded-full bg-[#0B1B2B]/85 text-amber-300 text-[10px] font-bold backdrop-blur-md border border-amber-400/30 flex items-center gap-1 shadow-md">
                        <Award className="w-3 h-3 text-amber-400" />
                        {caseCount} {caseCount === 1 ? 'Project' : 'Projects'}
                      </span>
                    )}
                    {articleCount > 0 && (
                      <span className="px-2.5 py-1 rounded-full bg-[#0B1B2B]/85 text-emerald-300 text-[10px] font-bold backdrop-blur-md border border-emerald-400/30 flex items-center gap-1 shadow-md">
                        <BookOpen className="w-3 h-3 text-emerald-400" />
                        Article
                      </span>
                    )}
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-3.5 right-3.5 z-10 px-2.5 py-1 rounded-xl bg-white/90 group-hover:bg-[#1677FF] text-[#0B1B2B] group-hover:text-white backdrop-blur-md transition-all duration-300 border border-[#E2E6EA] group-hover:border-[#1677FF] shadow-sm text-[10px] font-bold flex items-center gap-1">
                    <span>{caseCount > 0 ? `${caseCount} Installed` : 'Spec Ready'}</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  {/* Center 'Explore Projects' Floating Hover Overlay with Icon */}
                  <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none z-20">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85, y: 10 }}
                      whileHover={{ scale: 1.05 }}
                      className="opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:y-0 transition-all duration-300 ease-out flex flex-col items-center gap-2"
                    >
                      <div className="w-13 h-13 rounded-2xl bg-[#1677FF]/95 text-white flex items-center justify-center shadow-xl shadow-[#1677FF]/40 backdrop-blur-md border border-white/30 transform group-hover:scale-110 transition-transform duration-300">
                        <Compass className="w-6 h-6 animate-pulse" />
                      </div>
                      <div className="px-4 py-1.5 rounded-full bg-white/95 text-[#0B1B2B] font-black text-xs tracking-wide shadow-lg backdrop-blur-md border border-white flex items-center gap-1.5">
                        <span>Explore Projects</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#1677FF] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Sector Title at Bottom of Image */}
                  <div className="absolute bottom-3.5 left-4 right-4 z-10">
                    <h3 className="text-xl font-black text-white group-hover:text-cyan-200 transition-colors font-display drop-shadow-sm flex items-center justify-between">
                      <span>{app.title}</span>
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5">
                  <p className="text-xs text-[#1677FF] font-bold leading-relaxed">
                    {app.tagline}
                  </p>

                  <ul className="space-y-2 text-xs text-[#6B747C]">
                    {app.benefits.slice(0, 2).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1 text-[#0B1B2B] font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Key Metric Preview if available */}
                  {app.keyMetrics && app.keyMetrics[0] && (
                    <div className="bg-[#F5F6F3] p-2.5 rounded-2xl border border-[#E2E6EA] flex items-center justify-between text-xs">
                      <span className="text-[#6B747C] font-semibold text-[11px]">{app.keyMetrics[0].label}:</span>
                      <span className="font-bold text-[#1677FF]">{app.keyMetrics[0].value}</span>
                    </div>
                  )}

                  <div className="pt-3 border-t border-[#E2E6EA] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#6B747C]">
                      Click to explore full details
                    </span>
                    <span className="font-bold text-[#1677FF] group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                      Case Studies & Specs <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Deep Dive Spotlight Box on Selected Sector */}
        {activeApp && (
          <div className="bg-white border border-[#E2E6EA] rounded-3xl p-6 sm:p-8 shadow-xl shadow-[#0B1B2B]/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full bg-[#1677FF] text-white text-xs font-bold shadow">
                    Active Blueprint
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B1B2B] font-display">
                    {activeApp.title} Engineering Spec
                  </h3>
                </div>

                <p className="text-sm text-[#1677FF] font-semibold">
                  {activeApp.tagline}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {activeApp.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-[#F5F6F3] p-3 rounded-2xl border border-[#E2E6EA] text-xs text-[#0B1B2B]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#F5F6F3] p-4 rounded-2xl border border-[#E2E6EA] flex items-center gap-3">
                  <Wind className="w-5 h-5 text-[#1677FF] shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-[#0B1B2B]">Recommended Turnkey Setup: </span>
                    <span className="text-[#6B747C]">{activeApp.recommendedSolution}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setModalApp(activeApp)}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#0B1B2B] hover:bg-[#162738] text-white font-bold text-xs sm:text-sm transition-all shadow text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Open {activeApp.title} Project Details</span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectApplicationForQuote(activeApp.title)}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#1677FF] hover:bg-[#0E65E5] text-white font-bold text-xs sm:text-sm transition-all shadow text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request {activeApp.title} Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/923008425772?text=Hello%20Engineering%20Enterprises%2C%20I%20would%20like%20a%20solution%20proposal%20for%3A%20${encodeURIComponent(activeApp.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all text-center flex items-center justify-center gap-2 shadow"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Sector Project Details & Articles Modal */}
      {modalApp && (
        <SectorDetailModal
          application={modalApp}
          onClose={() => setModalApp(null)}
          onRequestQuote={(title) => {
            setModalApp(null);
            onSelectApplicationForQuote(title);
          }}
        />
      )}
    </section>
  );
};

