import React, { useState, useMemo, useEffect } from 'react';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Zap, 
  Wrench, 
  ShieldAlert, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  PhoneCall, 
  Calculator, 
  Tag, 
  Copy, 
  Check, 
  RotateCcw, 
  MessageSquare 
} from 'lucide-react';
import { COMPREHENSIVE_FAQS, FAQ_CATEGORIES, FAQItem } from '../data/faqData';
import { COMPANY_INFO } from '../data/engineeringData';

interface FAQSectionProps {
  onOpenCalculator?: () => void;
  onOpenQuoteModal?: (productOrService?: string) => void;
  onOpenCertModal?: (certId: string) => void;
  onOpenChat?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  onOpenCalculator,
  onOpenQuoteModal,
  onOpenCertModal,
  onOpenChat
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    new Set(['evaporative-vs-dx-savings', 'pad-maintenance-and-lifespan'])
  );
  const [copiedFaqId, setCopiedFaqId] = useState<string | null>(null);

  // Filter FAQs based on category, search text, and active tag
  const filteredFAQs = useMemo(() => {
    return COMPREHENSIVE_FAQS.filter((faq) => {
      const matchesCategory = 
        selectedCategory === 'all' || faq.category === selectedCategory;
      
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = 
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.shortAnswer.toLowerCase().includes(q) ||
        faq.detailedAnswer.toLowerCase().includes(q) ||
        faq.tags.some(t => t.toLowerCase().includes(q)) ||
        faq.categoryLabel.toLowerCase().includes(q);

      const matchesTag = !activeTag || faq.tags.includes(activeTag);

      return matchesCategory && matchesQuery && matchesTag;
    });
  }, [selectedCategory, searchQuery, activeTag]);

  // Toggle individual question
  const toggleAccordion = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Expand all / Collapse all
  const handleExpandAll = () => {
    setExpandedIds(new Set(filteredFAQs.map(f => f.id)));
  };

  const handleCollapseAll = () => {
    setExpandedIds(new Set());
  };

  // Copy direct link to clipboard
  const handleCopyLink = (faq: FAQItem) => {
    const url = `${window.location.origin}${window.location.pathname}#faq-${faq.id}`;
    navigator.clipboard?.writeText?.(url);
    setCopiedFaqId(faq.id);
    setTimeout(() => setCopiedFaqId(null), 2000);
  };

  // Generate JSON-LD Structured Data Schema for Search Engines (SEO)
  useEffect(() => {
    const scriptId = 'faq-jsonld-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": COMPREHENSIVE_FAQS.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${faq.shortAnswer} ${faq.detailedAnswer}`
        }
      }))
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    return () => {
      // Keep script or clean up if needed
    };
  }, []);

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case 'energy-savings':
        return <Zap className="w-4 h-4 text-emerald-600" />;
      case 'hvac-maintenance':
        return <Wrench className="w-4 h-4 text-[#1677FF]" />;
      case 'fire-safety':
        return <ShieldAlert className="w-4 h-4 text-rose-600" />;
      case 'licensing-turnkey':
        return <Award className="w-4 h-4 text-amber-600" />;
      default:
        return <HelpCircle className="w-4 h-4 text-[#1677FF]" />;
    }
  };

  // All unique tags for quick pill filtering
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    COMPREHENSIVE_FAQS.forEach(f => f.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
  }, []);

  return (
    <section id="faqs" className="py-24 bg-[#F5F6F3] text-[#0B1B2B] relative border-t border-[#E2E6EA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3FF] border border-[#1677FF]/30 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#1677FF]" />
            <span>Engineering Q&A & Support Hub</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1B2B] font-display tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[#6B747C] text-sm sm:text-base leading-relaxed">
            Clear, data-backed answers on industrial evaporative cooling savings, CELdek honeycomb pad maintenance, NFPA fire compliance, and turnkey EPC engineering execution.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-white border border-[#E2E6EA] rounded-3xl p-4 sm:p-6 mb-8 shadow-xl shadow-[#0B1B2B]/5">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Live Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B747C]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setActiveTag(null);
                }}
                placeholder="Search maintenance, electricity savings, NFPA, CELdek..."
                className="w-full min-h-[48px] pl-10 pr-12 py-3 rounded-2xl bg-[#F5F6F3] border border-[#E2E6EA] text-[#0B1B2B] placeholder-[#6B747C] text-sm focus:outline-none focus:border-[#1677FF] transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search input"
                  className="absolute right-1 top-1/2 -translate-y-1/2 text-[#6B747C] hover:text-[#0B1B2B] min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer text-sm font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Expand / Collapse All Quick Controls */}
            <div className="flex items-center gap-2 self-end md:self-auto text-xs font-bold text-[#0B1B2B]">
              <button
                onClick={handleExpandAll}
                className="min-h-[44px] px-4 py-2.5 rounded-xl bg-[#F5F6F3] hover:bg-[#E2E6EA] active:bg-[#D6DBE0] border border-[#E2E6EA] text-[#0B1B2B] transition-colors cursor-pointer flex items-center justify-center"
              >
                Expand All
              </button>
              <button
                onClick={handleCollapseAll}
                className="min-h-[44px] px-4 py-2.5 rounded-xl bg-[#F5F6F3] hover:bg-[#E2E6EA] active:bg-[#D6DBE0] border border-[#E2E6EA] text-[#0B1B2B] transition-colors cursor-pointer flex items-center justify-center"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#E2E6EA]">
            {FAQ_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setActiveTag(null);
                  }}
                  className={`min-h-[44px] flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1677FF] text-white shadow-md shadow-[#1677FF]/20'
                      : 'bg-[#F5F6F3] hover:bg-slate-100 active:bg-slate-200 text-[#6B747C] hover:text-[#0B1B2B] border border-[#E2E6EA]'
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Topic Tag Chips */}
          <div className="flex items-center gap-2 flex-wrap mt-3 pt-3 border-t border-[#E2E6EA] text-xs">
            <span className="text-[#6B747C] font-semibold flex items-center gap-1 mr-1 text-[11px]">
              <Tag className="w-3.5 h-3.5 text-[#1677FF]" />
              <span>Popular Tags:</span>
            </span>
            {allTags.slice(0, 8).map((tag, idx) => {
              const isTagActive = activeTag === tag;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveTag(isTagActive ? null : tag);
                    setSelectedCategory('all');
                  }}
                  className={`min-h-[38px] px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center ${
                    isTagActive
                      ? 'bg-[#EBF3FF] text-[#1677FF] border border-[#1677FF]/40 font-bold'
                      : 'bg-[#F5F6F3] hover:bg-slate-100 active:bg-slate-200 text-[#6B747C] hover:text-[#0B1B2B] border border-[#E2E6EA]'
                  }`}
                >
                  #{tag}
                </button>
              );
            })}
            {activeTag && (
              <button
                onClick={() => setActiveTag(null)}
                className="min-h-[38px] px-2 text-xs text-[#1677FF] hover:underline ml-1 flex items-center gap-1 font-bold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Tag</span>
              </button>
            )}
          </div>
        </div>

        {/* FAQs Accordion List */}
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-[#E2E6EA] p-6 shadow-sm">
            <HelpCircle className="w-10 h-10 text-[#6B747C] mx-auto mb-3" />
            <h4 className="text-lg font-bold text-[#0B1B2B] mb-1">No matching questions found</h4>
            <p className="text-sm text-[#6B747C] max-w-md mx-auto mb-4">
              We couldn't find a direct answer for "{searchQuery}". You can submit your question directly to our HVAC engineers via WhatsApp or live chat.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setActiveTag(null);
                }}
                className="px-4 py-2 bg-[#F5F6F3] hover:bg-slate-100 border border-[#E2E6EA] rounded-xl text-xs font-bold text-[#0B1B2B] cursor-pointer"
              >
                Clear Search & Filters
              </button>
              <a
                href={`https://wa.me/923008425772?text=Hello%2C%20I%20have%20a%20technical%20question%20regarding%3A%20${encodeURIComponent(searchQuery || 'Industrial HVAC')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 shadow"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Ask via WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFAQs.map((faq) => {
              const isExpanded = expandedIds.has(faq.id);
              const isCopied = copiedFaqId === faq.id;

              return (
                <div
                  key={faq.id}
                  id={`faq-${faq.id}`}
                  className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                    isExpanded
                      ? 'bg-white border-[#1677FF] shadow-xl shadow-[#0B1B2B]/5'
                      : 'bg-white hover:bg-white border-[#E2E6EA] hover:border-[#1677FF]/40 shadow-sm'
                  }`}
                >
                  {/* Accordion Question Header */}
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full px-5 py-4 sm:py-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="mt-0.5 p-2 rounded-xl bg-[#F5F6F3] border border-[#E2E6EA] shrink-0">
                        {getCategoryIcon(faq.category)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-bold text-[#1677FF] uppercase tracking-wider">
                            {faq.categoryLabel}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-[#0B1B2B] hover:text-[#1677FF] transition-colors leading-snug font-display">
                          {faq.question}
                        </h3>
                        {!isExpanded && (
                          <p className="text-xs text-[#6B747C] mt-1.5 line-clamp-1">
                            {faq.shortAnswer}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="shrink-0 p-1.5 rounded-xl bg-[#F5F6F3] text-[#6B747C] mt-1 border border-[#E2E6EA]">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#1677FF]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#6B747C]" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Expanded Content */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-[#E2E6EA] space-y-4 animate-in fade-in duration-150">
                      
                      {/* Short Executive Answer Callout */}
                      <div className="bg-[#EBF3FF] p-4 rounded-2xl border border-blue-200 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-[#1677FF] uppercase tracking-wider block mb-0.5">
                            Executive Takeaway
                          </span>
                          <p className="text-xs sm:text-sm text-[#0B1B2B] font-semibold leading-relaxed">
                            {faq.shortAnswer}
                          </p>
                        </div>
                      </div>

                      {/* Detailed Engineering Answer */}
                      <div className="text-xs sm:text-sm text-[#6B747C] leading-relaxed space-y-2">
                        <p>{faq.detailedAnswer}</p>
                      </div>

                      {/* Technical Metrics Grid (If Available) */}
                      {faq.metrics && faq.metrics.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                          {faq.metrics.map((m, i) => (
                            <div key={i} className="bg-[#F5F6F3] p-3 rounded-2xl border border-[#E2E6EA] text-center">
                              <div className="text-[10px] text-[#6B747C] font-semibold uppercase tracking-wider">{m.label}</div>
                              <div className="text-xs sm:text-sm font-bold text-[#1677FF] mt-0.5">{m.value}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Actionable Engineering Key Points */}
                      {faq.keyPoints && faq.keyPoints.length > 0 && (
                        <div className="bg-[#F5F6F3] rounded-2xl p-4 border border-[#E2E6EA] space-y-2">
                          <div className="text-xs font-bold text-[#0B1B2B] uppercase tracking-wider">
                            Key Operational Recommendations:
                          </div>
                          <ul className="space-y-1.5 text-xs text-[#6B747C]">
                            {faq.keyPoints.map((pt, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] shrink-0 mt-1.5" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tags & Action Buttons */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E2E6EA]">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {faq.tags.map((t, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveTag(t)}
                              className="px-2.5 py-1 rounded-lg bg-[#F5F6F3] text-[10px] font-semibold text-[#6B747C] hover:text-[#1677FF] border border-[#E2E6EA] cursor-pointer"
                            >
                              #{t}
                            </button>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleCopyLink(faq)}
                            className="p-2 rounded-xl bg-[#F5F6F3] hover:bg-[#E2E6EA] text-[#6B747C] hover:text-[#0B1B2B] text-xs font-medium transition-colors flex items-center gap-1 border border-[#E2E6EA] cursor-pointer"
                            title="Copy link to this answer"
                          >
                            {isCopied ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="text-emerald-600 text-[11px] font-bold">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span className="text-[11px] font-semibold">Share</span>
                              </>
                            )}
                          </button>

                          {faq.relatedAction && (
                            <>
                              {faq.relatedAction.type === 'calculator' && onOpenCalculator && (
                                <button
                                  onClick={onOpenCalculator}
                                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                                >
                                  <Calculator className="w-3.5 h-3.5" />
                                  <span>{faq.relatedAction.label}</span>
                                </button>
                              )}

                              {faq.relatedAction.type === 'quote' && onOpenQuoteModal && (
                                <button
                                  onClick={() => onOpenQuoteModal(faq.relatedAction?.target || faq.question)}
                                  className="px-3.5 py-1.5 rounded-xl bg-[#1677FF] hover:bg-blue-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-[#1677FF]/20 transition-all cursor-pointer"
                                >
                                  <span>{faq.relatedAction.label}</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                              )}

                              {faq.relatedAction.type === 'cert' && onOpenCertModal && (
                                <button
                                  onClick={() => onOpenCertModal(faq.relatedAction?.target || 'pec-c4')}
                                  className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                                >
                                  <Award className="w-3.5 h-3.5" />
                                  <span>{faq.relatedAction.label}</span>
                                </button>
                              )}

                              {faq.relatedAction.type === 'whatsapp' && (
                                <a
                                  href={`https://wa.me/923008425772?text=Hello%20Engineering%20Enterprises%2C%20I%20have%20a%20question%20regarding%20${encodeURIComponent(faq.question)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
                                >
                                  <PhoneCall className="w-3.5 h-3.5" />
                                  <span>{faq.relatedAction.label}</span>
                                </a>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Still Have Questions? Banner */}
        <div className="mt-16 rounded-3xl bg-white border border-[#E2E6EA] p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-[#0B1B2B]/5">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#1677FF]/30 text-[#1677FF] text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Engineering Consultation</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#0B1B2B] font-display">
              Have a customized industrial HVAC or fire safety requirement?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B747C] max-w-xl leading-relaxed">
              Our registered Pakistan Engineering Council (PEC) consultants and Carrier-trained specialists provide complimentary on-site surveys, CFM calculations, and airflow simulation blueprints.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 shrink-0 w-full sm:w-auto">
            {onOpenChat && (
              <button
                onClick={onOpenChat}
                className="min-h-[48px] px-5 py-3 rounded-2xl bg-[#F5F6F3] hover:bg-[#E2E6EA] active:bg-[#D6DBE0] text-[#0B1B2B] text-xs font-bold flex items-center justify-center gap-2 border border-[#E2E6EA] transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#1677FF]" />
                <span>AI Engineering Assistant</span>
              </button>
            )}

            <a
              href="https://wa.me/923008425772?text=Hello%2C%20I%20would%20like%20to%20consult%20with%20an%20engineering%20specialist%20regarding%20my%20factory%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp Helpline</span>
            </a>

            {onOpenQuoteModal && (
              <button
                onClick={() => onOpenQuoteModal('Turnkey Industrial Consultation')}
                className="min-h-[48px] px-5 py-3 rounded-2xl bg-[#1677FF] hover:bg-blue-600 active:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-[#1677FF]/20 transition-all cursor-pointer"
              >
                <span>Request Free Survey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
