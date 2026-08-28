import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Layers,
  CheckCircle2,
  TrendingUp,
  Award,
  BookOpen,
  ArrowRight,
  PhoneCall,
  FileText,
  Clock,
  User,
  Calendar,
  Building2,
  MapPin,
  Flame,
  Wind,
  ShieldCheck,
  ChevronRight,
  ZoomIn,
  Sparkles,
  ExternalLink,
  Percent,
  Gauge
} from 'lucide-react';
import { IndustryApplication, SectorCaseStudy, SectorArticle } from '../types';

interface SectorDetailModalProps {
  application: IndustryApplication | null;
  onClose: () => void;
  onRequestQuote: (sectorName: string) => void;
}

type TabType = 'overview' | 'cases' | 'articles' | 'equipment' | 'gallery';

export const SectorDetailModal: React.FC<SectorDetailModalProps> = ({
  application,
  onClose,
  onRequestQuote,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<SectorCaseStudy | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<SectorArticle | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; caption: string } | null>(null);

  if (!application) return null;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80";
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl border border-[#E2E6EA] shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden text-[#0B1B2B]"
        >
          {/* Header Banner */}
          <div className="relative bg-[#0B1B2B] text-white shrink-0 overflow-hidden">
            {/* Background Backdrop Image */}
            <div className="absolute inset-0 opacity-25">
              <img
                src={application.imageUrl}
                alt={application.title}
                onError={handleImageError}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B2B] via-[#0B1B2B]/90 to-transparent" />
            </div>

            {/* Top Close Button & Badges */}
            <div className="relative z-10 px-6 sm:px-8 pt-6 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-0.5 rounded-full bg-[#1677FF] text-white text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow">
                    <Layers className="w-3 h-3" />
                    Sector Engineering Blueprint
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-cyan-200 text-[11px] font-semibold border border-white/10">
                    PEC C4 Licensed Turnkey
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold border border-emerald-500/30">
                    ISO 9001:2008
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
                  {application.title}
                </h2>
                <p className="text-sm text-cyan-200/90 font-medium mt-1">
                  {application.tagline}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="self-end sm:self-start w-11 h-11 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 text-white/90 hover:text-white transition-all flex items-center justify-center cursor-pointer border border-white/10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Tabs Bar */}
            <div className="relative z-10 px-4 sm:px-8 flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar border-t border-white/10 pt-2">
              <button
                onClick={() => { setActiveTab('overview'); setSelectedCaseStudy(null); setSelectedArticle(null); }}
                className={`min-h-[44px] px-4 py-2.5 text-xs sm:text-sm font-bold rounded-t-xl transition-all flex items-center gap-2 cursor-pointer border-b-2 whitespace-nowrap shrink-0 ${
                  activeTab === 'overview'
                    ? 'bg-white text-[#0B1B2B] border-[#1677FF] shadow-sm'
                    : 'text-white/70 hover:text-white border-transparent'
                }`}
              >
                <Gauge className="w-4 h-4 text-[#1677FF]" />
                <span>Sector Overview & Specs</span>
              </button>

              <button
                onClick={() => { setActiveTab('cases'); setSelectedArticle(null); }}
                className={`min-h-[44px] px-4 py-2.5 text-xs sm:text-sm font-bold rounded-t-xl transition-all flex items-center gap-2 cursor-pointer border-b-2 whitespace-nowrap shrink-0 ${
                  activeTab === 'cases'
                    ? 'bg-white text-[#0B1B2B] border-[#1677FF] shadow-sm'
                    : 'text-white/70 hover:text-white border-transparent'
                }`}
              >
                <Award className="w-4 h-4 text-amber-500" />
                <span>Project Case Studies ({application.caseStudies?.length || 0})</span>
              </button>

              <button
                onClick={() => { setActiveTab('articles'); setSelectedCaseStudy(null); }}
                className={`min-h-[44px] px-4 py-2.5 text-xs sm:text-sm font-bold rounded-t-xl transition-all flex items-center gap-2 cursor-pointer border-b-2 whitespace-nowrap shrink-0 ${
                  activeTab === 'articles'
                    ? 'bg-white text-[#0B1B2B] border-[#1677FF] shadow-sm'
                    : 'text-white/70 hover:text-white border-transparent'
                }`}
              >
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Technical Articles ({application.articles?.length || 0})</span>
              </button>

              <button
                onClick={() => { setActiveTab('equipment'); setSelectedCaseStudy(null); setSelectedArticle(null); }}
                className={`min-h-[44px] px-4 py-2.5 text-xs sm:text-sm font-bold rounded-t-xl transition-all flex items-center gap-2 cursor-pointer border-b-2 whitespace-nowrap shrink-0 ${
                  activeTab === 'equipment'
                    ? 'bg-white text-[#0B1B2B] border-[#1677FF] shadow-sm'
                    : 'text-white/70 hover:text-white border-transparent'
                }`}
              >
                <Wind className="w-4 h-4 text-cyan-400" />
                <span>Equipment & BOQ</span>
              </button>

              <button
                onClick={() => { setActiveTab('gallery'); setSelectedCaseStudy(null); setSelectedArticle(null); }}
                className={`min-h-[44px] px-4 py-2.5 text-xs sm:text-sm font-bold rounded-t-xl transition-all flex items-center gap-2 cursor-pointer border-b-2 whitespace-nowrap shrink-0 ${
                  activeTab === 'gallery'
                    ? 'bg-white text-[#0B1B2B] border-[#1677FF] shadow-sm'
                    : 'text-white/70 hover:text-white border-transparent'
                }`}
              >
                <ZoomIn className="w-4 h-4 text-indigo-400" />
                <span>Site Photos</span>
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#F8F9FA] space-y-8">
            
            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                {/* Key Metrics Grid */}
                {application.keyMetrics && application.keyMetrics.length > 0 && (
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#6B747C] mb-3 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#1677FF]" />
                      Proven Sector Performance Benchmarks
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                      {application.keyMetrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="bg-white p-4 rounded-2xl border border-[#E2E6EA] shadow-xs flex flex-col justify-between"
                        >
                          <span className="text-xs font-bold text-[#6B747C]">
                            {metric.label}
                          </span>
                          <div className="mt-2">
                            <span className="text-xl sm:text-2xl font-black text-[#1677FF] font-display">
                              {metric.value}
                            </span>
                            {metric.subtext && (
                              <p className="text-[11px] text-[#6B747C] mt-0.5 font-medium leading-tight">
                                {metric.subtext}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Challenge & Solution 2-Column */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* The Problem / Challenge */}
                  <div className="bg-white p-6 rounded-3xl border border-red-100 shadow-xs space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-200">
                      <Flame className="w-3.5 h-3.5 text-red-600" />
                      <span>Operational Challenge</span>
                    </div>
                    <p className="text-sm text-[#0B1B2B] leading-relaxed font-normal">
                      {application.challenge || application.overview}
                    </p>
                  </div>

                  {/* The Engineering Solution */}
                  <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-xs space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Engineering Enterprises Solution</span>
                    </div>
                    <p className="text-sm text-[#0B1B2B] leading-relaxed font-normal">
                      {application.engineeringSolution || application.recommendedSolution}
                    </p>
                  </div>
                </div>

                {/* Executive Overview Paragraph */}
                {application.overview && (
                  <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E2E6EA] shadow-xs space-y-3">
                    <h4 className="text-base font-bold text-[#0B1B2B] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#1677FF]" />
                      Comprehensive Sector Analysis
                    </h4>
                    <p className="text-sm text-[#4A5568] leading-relaxed">
                      {application.overview}
                    </p>
                  </div>
                )}

                {/* Core Benefits */}
                <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E2E6EA] shadow-xs space-y-4">
                  <h4 className="text-base font-bold text-[#0B1B2B]">
                    Engineered Sector Advantages & Guarantees
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {application.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F5F6F3] border border-[#E2E6EA] text-xs text-[#0B1B2B]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured Teasers to Case Studies & Articles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {application.caseStudies && application.caseStudies.length > 0 && (
                    <div 
                      onClick={() => setActiveTab('cases')}
                      className="bg-white p-5 rounded-2xl border border-[#E2E6EA] hover:border-[#1677FF] shadow-xs cursor-pointer group transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-amber-600 flex items-center gap-1">
                          <Award className="w-3.5 h-3.5" />
                          Featured Case Study
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#1677FF] group-hover:translate-x-1 transition-transform" />
                      </div>
                      <h5 className="font-bold text-sm text-[#0B1B2B] group-hover:text-[#1677FF] transition-colors">
                        {application.caseStudies[0].clientName}: {application.caseStudies[0].projectTitle}
                      </h5>
                      <p className="text-xs text-[#6B747C] mt-1 line-clamp-2">
                        {application.caseStudies[0].summary}
                      </p>
                    </div>
                  )}

                  {application.articles && application.articles.length > 0 && (
                    <div 
                      onClick={() => setActiveTab('articles')}
                      className="bg-white p-5 rounded-2xl border border-[#E2E6EA] hover:border-[#1677FF] shadow-xs cursor-pointer group transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5" />
                          Sector Engineering Article
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#1677FF] group-hover:translate-x-1 transition-transform" />
                      </div>
                      <h5 className="font-bold text-sm text-[#0B1B2B] group-hover:text-[#1677FF] transition-colors">
                        {application.articles[0].title}
                      </h5>
                      <p className="text-xs text-[#6B747C] mt-1 line-clamp-2">
                        {application.articles[0].summary}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 2: CASE STUDIES */}
            {activeTab === 'cases' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {!selectedCaseStudy ? (
                  <>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-black text-[#0B1B2B] font-display">
                          Installed Projects & Real Case Studies
                        </h3>
                        <p className="text-xs text-[#6B747C]">
                          Turnkey systems designed, supplied, and commissioned across Pakistan's leading commercial enterprises.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {application.caseStudies?.map((cs) => (
                        <div
                          key={cs.id}
                          onClick={() => setSelectedCaseStudy(cs)}
                          className="bg-white rounded-3xl border border-[#E2E6EA] hover:border-[#1677FF] overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col group"
                        >
                          <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                            <img
                              src={cs.imageUrl}
                              alt={cs.projectTitle}
                              onError={handleImageError}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B]/80 via-transparent to-transparent" />
                            <div className="absolute top-3 left-3">
                              <span className="px-2.5 py-1 rounded-full bg-white/95 text-[#0B1B2B] text-xs font-bold shadow-sm backdrop-blur-sm">
                                {cs.clientName}
                              </span>
                            </div>
                            <div className="absolute bottom-3 left-3 right-3 text-white">
                              <div className="flex items-center gap-2 text-[11px] text-cyan-200 font-semibold mb-0.5">
                                <MapPin className="w-3 h-3" />
                                <span>{cs.location}</span>
                                <span>•</span>
                                <span>Completed {cs.completedYear}</span>
                              </div>
                            </div>
                          </div>

                          <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                            <div>
                              <h4 className="font-bold text-sm text-[#0B1B2B] group-hover:text-[#1677FF] transition-colors leading-snug">
                                {cs.projectTitle}
                              </h4>
                              <p className="text-xs text-[#6B747C] mt-2 line-clamp-2 leading-relaxed">
                                {cs.summary}
                              </p>
                            </div>

                            {/* Metrics snippet */}
                            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#E2E6EA] text-xs">
                              <div className="bg-[#F5F6F3] p-2 rounded-xl">
                                <span className="text-[10px] text-[#6B747C] block font-semibold">Temp Reduction</span>
                                <span className="font-bold text-[#1677FF]">{cs.temperatureDrop}</span>
                              </div>
                              <div className="bg-[#F5F6F3] p-2 rounded-xl">
                                <span className="text-[10px] text-[#6B747C] block font-semibold">Energy Savings</span>
                                <span className="font-bold text-emerald-600">{cs.energySavingsPercentage}</span>
                              </div>
                            </div>

                            <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#1677FF]">
                              <span>Read Project Breakdown</span>
                              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  /* Single Case Study View */
                  <div className="bg-white rounded-3xl border border-[#E2E6EA] p-6 sm:p-8 space-y-6 animate-in fade-in">
                    <button
                      onClick={() => setSelectedCaseStudy(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1677FF] hover:underline cursor-pointer"
                    >
                      ← Back to All Case Studies
                    </button>

                    <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-100">
                      <img
                        src={selectedCaseStudy.imageUrl}
                        alt={selectedCaseStudy.projectTitle}
                        onError={handleImageError}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B]/85 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="px-3 py-1 rounded-full bg-[#1677FF] text-white text-xs font-bold mb-2 inline-block">
                          {selectedCaseStudy.clientName}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black font-display">
                          {selectedCaseStudy.projectTitle}
                        </h3>
                        <p className="text-xs text-cyan-200 flex items-center gap-2 mt-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{selectedCaseStudy.location}</span>
                          <span>•</span>
                          <span>Year: {selectedCaseStudy.completedYear}</span>
                        </p>
                      </div>
                    </div>

                    {/* Highlights Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="bg-[#F5F6F3] p-4 rounded-2xl border border-[#E2E6EA]">
                        <span className="text-xs text-[#6B747C] font-semibold block">Covered Area / Capacity</span>
                        <span className="text-base font-bold text-[#0B1B2B]">{selectedCaseStudy.capacityOrArea}</span>
                      </div>
                      <div className="bg-[#F5F6F3] p-4 rounded-2xl border border-[#E2E6EA]">
                        <span className="text-xs text-[#6B747C] font-semibold block">Thermal Differential</span>
                        <span className="text-base font-bold text-[#1677FF]">{selectedCaseStudy.temperatureDrop}</span>
                      </div>
                      <div className="bg-[#F5F6F3] p-4 rounded-2xl border border-[#E2E6EA]">
                        <span className="text-xs text-[#6B747C] font-semibold block">Power Cost Reduction</span>
                        <span className="text-base font-bold text-emerald-600">{selectedCaseStudy.energySavingsPercentage}</span>
                      </div>
                    </div>

                    {/* Scope & Narrative */}
                    <div className="space-y-4 text-sm text-[#0B1B2B]">
                      <div>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-[#6B747C] mb-1">Contract Scope of Work</h4>
                        <p className="p-3.5 bg-blue-50/50 rounded-2xl border border-blue-100 text-xs font-medium text-[#0B1B2B]">
                          {selectedCaseStudy.scope}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-[#6B747C] mb-1">Project Summary</h4>
                        <p className="text-sm text-[#4A5568] leading-relaxed">
                          {selectedCaseStudy.summary}
                        </p>
                      </div>

                      {selectedCaseStudy.financialRoi && (
                        <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 font-semibold flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>ROI & Business Impact: {selectedCaseStudy.financialRoi}</span>
                        </div>
                      )}

                      <div>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-[#6B747C] mb-2">Key Engineering Milestones</h4>
                        <ul className="space-y-2">
                          {selectedCaseStudy.highlights.map((hl, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[#0B1B2B]">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: TECHNICAL ARTICLES */}
            {activeTab === 'articles' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {!selectedArticle ? (
                  <>
                    <div>
                      <h3 className="text-lg font-black text-[#0B1B2B] font-display">
                        Sector Engineering Articles & Technical Whitepapers
                      </h3>
                      <p className="text-xs text-[#6B747C]">
                        Grounded thermodynamic equations, airflow calculations, and NFPA safety standards compiled by our senior engineers.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                      {application.articles?.map((art) => (
                        <div
                          key={art.id}
                          onClick={() => setSelectedArticle(art)}
                          className="bg-white rounded-3xl border border-[#E2E6EA] hover:border-[#1677FF] p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col md:flex-row gap-6 group"
                        >
                          <div className="w-full md:w-64 h-48 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                            <img
                              src={art.imageUrl}
                              alt={art.title}
                              onError={handleImageError}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          <div className="flex-1 flex flex-col justify-between space-y-3">
                            <div>
                              <div className="flex items-center gap-3 text-xs text-[#6B747C] mb-2">
                                <span className="flex items-center gap-1 font-semibold text-[#1677FF]">
                                  <Clock className="w-3.5 h-3.5" />
                                  {art.readTime}
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3.5 h-3.5" />
                                  {art.publishDate}
                                </span>
                              </div>

                              <h4 className="text-base sm:text-lg font-black text-[#0B1B2B] group-hover:text-[#1677FF] transition-colors leading-snug">
                                {art.title}
                              </h4>
                              <p className="text-xs text-[#4A5568] mt-2 leading-relaxed line-clamp-2">
                                {art.summary}
                              </p>
                            </div>

                            <div className="pt-3 border-t border-[#E2E6EA] flex items-center justify-between text-xs">
                              <span className="text-[#6B747C] font-medium flex items-center gap-1">
                                <User className="w-3.5 h-3.5 text-[#1677FF]" />
                                {art.author}
                              </span>
                              <span className="font-bold text-[#1677FF] flex items-center gap-1">
                                Read Full Article <ArrowRight className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  /* Single Article Reader */
                  <div className="bg-white rounded-3xl border border-[#E2E6EA] p-6 sm:p-8 space-y-6 animate-in fade-in">
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1677FF] hover:underline cursor-pointer"
                    >
                      ← Back to All Articles
                    </button>

                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#6B747C] mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1677FF] font-bold border border-blue-100">
                          {application.title} Guide
                        </span>
                        <span className="flex items-center gap-1 font-semibold">
                          <Clock className="w-3.5 h-3.5 text-[#1677FF]" />
                          {selectedArticle.readTime}
                        </span>
                        <span>•</span>
                        <span>{selectedArticle.publishDate}</span>
                        <span>•</span>
                        <span className="font-semibold text-[#0B1B2B]">{selectedArticle.author}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-[#0B1B2B] font-display">
                        {selectedArticle.title}
                      </h3>
                      <p className="text-sm text-[#4A5568] mt-2 italic leading-relaxed border-l-2 border-[#1677FF] pl-3 py-1 bg-slate-50 rounded-r-xl">
                        "{selectedArticle.summary}"
                      </p>
                    </div>

                    {/* Key Takeaways */}
                    <div className="p-5 bg-[#F5F6F3] rounded-2xl border border-[#E2E6EA] space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1B2B] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#1677FF]" />
                        Key Engineering Takeaways
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#0B1B2B]">
                        {selectedArticle.keyTakeaways.map((kt, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{kt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Article Sections */}
                    <div className="space-y-6 pt-2">
                      {selectedArticle.sections.map((sec, i) => (
                        <div key={i} className="space-y-2 text-sm text-[#0B1B2B]">
                          {sec.heading && (
                            <h4 className="text-base font-bold text-[#0B1B2B] font-display">
                              {sec.heading}
                            </h4>
                          )}
                          <p className="text-sm text-[#4A5568] leading-relaxed">
                            {sec.paragraph}
                          </p>
                          {sec.keyPoint && (
                            <div className="p-3 bg-blue-50/70 border border-blue-200/60 rounded-xl text-xs font-semibold text-[#0B1B2B] flex items-start gap-2">
                              <ShieldCheck className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                              <span>{sec.keyPoint}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 4: EQUIPMENT & BOQ */}
            {activeTab === 'equipment' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <h3 className="text-lg font-black text-[#0B1B2B] font-display">
                    Recommended Turnkey Equipment & BOQ Specifications
                  </h3>
                  <p className="text-xs text-[#6B747C]">
                    Standard engineered Bill of Quantities components tailored specifically for {application.title}.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {application.systemEquipment?.map((eq, i) => (
                    <div key={i} className="bg-white p-5 rounded-3xl border border-[#E2E6EA] shadow-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-[#1677FF] uppercase tracking-wider">
                          Module {i + 1}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[#0B1B2B] text-[10px] font-bold">
                          {eq.role}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-[#0B1B2B]">
                        {eq.name}
                      </h4>
                      <p className="text-xs text-[#6B747C] font-mono bg-[#F5F6F3] p-2.5 rounded-xl border border-[#E2E6EA]">
                        {eq.spec}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-white rounded-3xl border border-[#E2E6EA] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center sm:text-left">
                    <h5 className="font-bold text-sm text-[#0B1B2B]">
                      Need a Custom Sized BOQ for Your Specific Factory/Shed?
                    </h5>
                    <p className="text-xs text-[#6B747C]">
                      Our PEC registered HVAC consultants calculate exact CFM, pad area, pump heads, and duct dimensions for your facility.
                    </p>
                  </div>
                  <button
                    onClick={() => onRequestQuote(application.title)}
                    className="px-5 py-2.5 rounded-xl bg-[#1677FF] hover:bg-[#0E65E5] text-white font-bold text-xs transition-all shadow shrink-0 cursor-pointer"
                  >
                    Request Custom BOQ & Sizing
                  </button>
                </div>
              </div>
            )}

            {/* TAB 5: SITE PHOTOS */}
            {activeTab === 'gallery' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <h3 className="text-lg font-black text-[#0B1B2B] font-display">
                    On-Site Project Installations & Photos
                  </h3>
                  <p className="text-xs text-[#6B747C]">
                    High-resolution photographs of executed projects, duct distribution runs, and equipment assemblies.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {application.galleryImages?.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setLightboxImage({ url: img.url, caption: img.caption })}
                      className="bg-white rounded-2xl border border-[#E2E6EA] overflow-hidden shadow-xs hover:border-[#1677FF] cursor-pointer group flex flex-col"
                    >
                      <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                        <img
                          src={img.url}
                          alt={img.caption}
                          onError={handleImageError}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          <ZoomIn className="w-3.5 h-3.5" />
                        </div>
                        <div className="absolute top-2 left-2">
                          <span className="px-2 py-0.5 rounded-full bg-white/90 text-[#0B1B2B] text-[10px] font-bold shadow">
                            {img.tag}
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <p className="text-xs text-[#0B1B2B] font-medium line-clamp-2">
                          {img.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Bottom Action Footer */}
          <div className="p-4 sm:p-5 bg-white border-t border-[#E2E6EA] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2 text-xs text-[#6B747C]">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Direct PEC C4 Engineering Guarantee & Free Site Survey in Lahore, Faisalabad, Karachi, Islamabad.</span>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={`https://wa.me/923008425772?text=Hello%20Engineering%20Enterprises%2C%20I%20reviewed%20your%20sector%20case%20studies%20for%20${encodeURIComponent(application.title)}%20and%20would%20like%20to%20discuss%20a%20turnkey%20proposal.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none min-h-[48px] px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs transition-all shadow text-center flex items-center justify-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>WhatsApp Query</span>
              </a>

              <button
                onClick={() => {
                  const title = application.title;
                  onClose();
                  onRequestQuote(title);
                }}
                className="flex-1 sm:flex-none min-h-[48px] px-5 py-2.5 rounded-xl bg-[#1677FF] hover:bg-[#0E65E5] active:bg-blue-700 text-white font-bold text-xs transition-all shadow text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Request {application.title} Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </motion.div>

        {/* Lightbox for Gallery */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
            onClick={() => setLightboxImage(null)}
          >
            <div className="max-w-4xl w-full bg-[#0B1B2B] rounded-2xl overflow-hidden border border-white/10" onClick={(e) => e.stopPropagation()}>
              <div className="relative h-[65vh] w-full bg-slate-900 flex items-center justify-center">
                <img
                  src={lightboxImage.url}
                  alt={lightboxImage.caption}
                  onError={handleImageError}
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 bg-[#0B1B2B] text-white text-xs">
                <p className="font-medium text-slate-200">{lightboxImage.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};
