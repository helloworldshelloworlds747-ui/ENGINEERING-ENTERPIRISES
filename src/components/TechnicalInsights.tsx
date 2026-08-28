import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  Tag, 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Share2, 
  X, 
  ExternalLink,
  Zap,
  Wrench,
  Newspaper,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Award,
  Flame,
  Wind,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { Article, ArticleCategory } from '../types';
import { ARTICLES_DATA, TECHNICAL_FAQS } from '../data/articlesData';
import { COMPANY_INFO } from '../data/engineeringData';
import { TechnicalInfographicsStudio } from './TechnicalInfographicsStudio';

const ARTICLE_FALLBACK_IMAGES: Record<string, string> = {
  'evaporative-cooling-energy-savings-90-percent': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
  'celdek-honeycomb-pad-maintenance-guide': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  'nfpa-fire-hydrant-sprinkler-inspection': 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=1200&q=80',
  'poultry-fcr-cooling-optimization': 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80',
  'carrier-apex-award-archive': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
};

interface TechnicalInsightsProps {
  onSelectProductForQuote?: (productName: string) => void;
  onOpenCalculator?: () => void;
}

export const TechnicalInsights: React.FC<TechnicalInsightsProps> = ({
  onSelectProductForQuote,
  onOpenCalculator
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Filtered articles based on category and search query
  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesCategory = 
        selectedCategory === 'all' || article.category === selectedCategory;
      
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = 
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.seoKeywords.some((k) => k.toLowerCase().includes(q)) ||
        article.categoryLabel.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = useMemo(() => {
    return ARTICLES_DATA.find((a) => a.featured) || ARTICLES_DATA[0];
  }, []);

  const handleShareWhatsApp = (article: Article) => {
    const text = encodeURIComponent(
      `Check out this technical insight from Engineering Enterprises & Veloair:\n"${article.title}"\n${window.location.origin}#insights`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText?.(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'energy-saving':
        return <Zap className="w-3.5 h-3.5" />;
      case 'hvac-maintenance':
        return <Wrench className="w-3.5 h-3.5" />;
      case 'company-news':
        return <Newspaper className="w-3.5 h-3.5" />;
      default:
        return <BookOpen className="w-3.5 h-3.5" />;
    }
  };

  const getCategoryBadgeClass = (cat: string) => {
    switch (cat) {
      case 'energy-saving':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'hvac-maintenance':
        return 'bg-[#EBF3FF] text-[#1677FF] border-blue-200';
      case 'company-news':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="insights" className="py-24 bg-[#F5F6F3] text-[#0B1B2B] relative border-t border-[#E2E6EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3FF] border border-[#1677FF]/30 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#1677FF]" />
            <span>Engineering Knowledge Base & Interactive Studio</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-[#0B1B2B] font-display tracking-tight leading-tight"
          >
            Technical Insights & Energy Intelligence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#6B747C] leading-relaxed"
          >
            Explore interactive thermodynamic infographics, psychrometric simulations, authoritative HVAC whitepapers, and certified NFPA fire engineering intelligence.
          </motion.p>
        </div>

        {/* Premier Interactive Infographics Studio */}
        <TechnicalInfographicsStudio
          onOpenCalculator={onOpenCalculator}
          onConsultEngineering={() => {
            if (onSelectProductForQuote) {
              onSelectProductForQuote('Technical Inquiry regarding Engineering Studio & Infographics');
            }
          }}
        />

        {/* Featured Hero Article Banner */}
        {featuredArticle && !searchQuery && selectedCategory === 'all' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 rounded-3xl bg-white border border-[#E2E6EA] p-6 sm:p-8 shadow-xl shadow-[#0B1B2B]/5 relative overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                    Featured Spotlight
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border flex items-center gap-1 ${getCategoryBadgeClass(featuredArticle.category)}`}>
                    {getCategoryIcon(featuredArticle.category)}
                    {featuredArticle.categoryLabel}
                  </span>
                  <span className="text-xs text-[#6B747C] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#0B1B2B] group-hover:text-[#1677FF] transition-colors leading-tight">
                  {featuredArticle.title}
                </h3>

                <p className="text-[#6B747C] text-sm sm:text-base line-clamp-3 leading-relaxed">
                  {featuredArticle.summary}
                </p>

                {/* Key Takeaways Highlight */}
                <div className="bg-[#F5F6F3] rounded-2xl p-4 border border-[#E2E6EA] space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1677FF] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Executive Takeaways
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#0B1B2B]">
                    {featuredArticle.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#1677FF] font-bold">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveArticle(featuredArticle)}
                    className="px-5 py-2.5 rounded-xl bg-[#1677FF] hover:bg-blue-600 text-white font-bold text-sm shadow-md shadow-[#1677FF]/20 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Read Full Whitepaper</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <div className="flex items-center gap-2 text-xs text-[#6B747C]">
                    <div className="w-7 h-7 rounded-full bg-[#EBF3FF] flex items-center justify-center text-[#1677FF] font-bold">
                      {featuredArticle.author.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-[#0B1B2B] font-semibold">{featuredArticle.author.name}</div>
                      <div className="text-[11px] text-[#6B747C]">{featuredArticle.publishedDate}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Preview / Archival Badge */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-[#E2E6EA] shadow-md aspect-video sm:aspect-4/3">
                  <img
                    src={featuredArticle.imageUrl}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B]/60 via-transparent to-transparent" />
                  
                  {featuredArticle.id === 'carrier-apex-award-archive' && (
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-amber-200 flex items-center gap-3 shadow-md">
                      <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 text-amber-700" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-amber-900">Carrier International USA</div>
                        <div className="text-[11px] text-[#6B747C]">Apex Award Archival Record (Geneva & Riyadh)</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white rounded-2xl border border-[#E2E6EA] shadow-2xs">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#1677FF] text-white shadow-sm'
                  : 'text-[#6B747C] hover:text-[#0B1B2B] hover:bg-[#F5F6F3]'
              }`}
            >
              All Insights ({ARTICLES_DATA.length})
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory('energy-saving')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                selectedCategory === 'energy-saving'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-[#6B747C] hover:text-emerald-700 hover:bg-[#F5F6F3]'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Energy-Saving Trends</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory('hvac-maintenance')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                selectedCategory === 'hvac-maintenance'
                  ? 'bg-[#1677FF] text-white shadow-sm'
                  : 'text-[#6B747C] hover:text-[#1677FF] hover:bg-[#F5F6F3]'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>HVAC Maintenance</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory('company-news')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                selectedCategory === 'company-news'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-[#6B747C] hover:text-amber-700 hover:bg-[#F5F6F3]'
              }`}
            >
              <Newspaper className="w-3.5 h-3.5" />
              <span>Company News & History</span>
            </motion.button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] sm:w-72">
            <Search className="w-4 h-4 text-[#6B747C] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search trends, NFPA, CELdek..."
              className="w-full bg-white border border-[#E2E6EA] rounded-2xl pl-9 pr-8 py-2 text-xs text-[#0B1B2B] placeholder-[#6B747C] focus:outline-none focus:border-[#1677FF] transition-colors shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6B747C] hover:text-[#0B1B2B] cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Articles Grid with Framer Motion AnimatePresence */}
        {filteredArticles.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-3xl border border-[#E2E6EA] shadow-2xs"
          >
            <BookOpen className="w-10 h-10 text-[#6B747C] mx-auto mb-3" />
            <p className="text-[#6B747C] text-sm">No technical articles found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 text-xs text-[#1677FF] hover:underline font-bold cursor-pointer"
            >
              Reset filters
            </button>
          </motion.div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <motion.article
                  key={article.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  onClick={() => setActiveArticle(article)}
                  className="bg-white hover:bg-white rounded-3xl border border-[#E2E6EA] hover:border-[#1677FF] transition-colors p-5 flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-xl hover:shadow-[#0B1B2B]/5"
                >
                  <div>
                    {/* Article Thumbnail Image */}
                    <div className="relative rounded-2xl overflow-hidden aspect-16/10 mb-4 bg-slate-100 border border-[#E2E6EA]">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const fallback = ARTICLE_FALLBACK_IMAGES[article.id] || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80";
                          if (e.currentTarget.src !== fallback) {
                            e.currentTarget.src = fallback;
                          }
                        }}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      <div className="absolute top-2.5 left-2.5">
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border backdrop-blur-md shadow-2xs ${getCategoryBadgeClass(article.category)}`}>
                          {article.categoryLabel}
                        </span>
                      </div>

                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-lg bg-white/90 text-[10px] text-[#0B1B2B] font-semibold flex items-center gap-1 border border-[#E2E6EA] shadow-2xs">
                        <Clock className="w-3 h-3 text-[#1677FF]" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Article Meta */}
                    <div className="flex items-center gap-2 text-[11px] text-[#6B747C] mb-2 font-medium">
                      <Calendar className="w-3 h-3 text-[#6B747C]" />
                      <span>{article.publishedDate}</span>
                      <span>•</span>
                      <span>{article.author.name}</span>
                    </div>

                    {/* Title & Summary */}
                    <h4 className="text-base sm:text-lg font-bold text-[#0B1B2B] group-hover:text-[#1677FF] transition-colors leading-snug mb-2 font-display">
                      {article.title}
                    </h4>
                    <p className="text-xs text-[#6B747C] line-clamp-3 mb-4 leading-relaxed">
                      {article.summary}
                    </p>

                    {/* SEO Keyword Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {article.seoKeywords.slice(0, 3).map((keyword, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-lg bg-[#F5F6F3] text-[10px] font-semibold text-[#6B747C] border border-[#E2E6EA]"
                        >
                          #{keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-3 border-t border-[#E2E6EA] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1677FF] group-hover:text-blue-700 flex items-center gap-1">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    
                    {article.relatedCategoryName && (
                      <span className="text-[10px] text-[#6B747C]">
                        {article.relatedCategoryName}
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Technical FAQ Section with Motion Height Transitions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-white rounded-3xl border border-[#E2E6EA] p-6 sm:p-8 shadow-xl shadow-[#0B1B2B]/5"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-xl bg-[#EBF3FF] border border-blue-200 flex items-center justify-center text-[#1677FF]">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0B1B2B] font-display">
                Frequently Asked Engineering Questions (HVAC & Evaporative Cooling)
              </h3>
              <p className="text-xs text-[#6B747C]">
                Direct answers from our senior HVAC engineers and certified consultants.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {TECHNICAL_FAQS.map((faq, idx) => {
              const isOpen = faqOpenIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E2E6EA] bg-[#F5F6F3] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setFaqOpenIndex(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-white transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-[#0B1B2B]">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-[#1677FF]' : 'text-[#6B747C]'}`} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#6B747C] leading-relaxed border-t border-[#E2E6EA] bg-white">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Full Article Reader Modal with Motion AnimatePresence */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#0B1B2B]/60 backdrop-blur-md"
              onClick={() => setActiveArticle(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white border border-[#E2E6EA] rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-[#E2E6EA] bg-[#F5F6F3] flex items-start justify-between gap-4 sticky top-0 z-20">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getCategoryBadgeClass(activeArticle.category)}`}>
                      {activeArticle.categoryLabel}
                    </span>
                    <span className="text-xs text-[#6B747C] flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {activeArticle.readTime}
                    </span>
                    <span className="text-xs text-[#6B747C]">• {activeArticle.publishedDate}</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-[#0B1B2B] font-display leading-snug">
                    {activeArticle.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => handleShareWhatsApp(activeArticle)}
                    className="p-2 rounded-xl bg-white border border-[#E2E6EA] hover:bg-emerald-50 text-[#6B747C] hover:text-emerald-700 transition-colors cursor-pointer"
                    title="Share on WhatsApp"
                  >
                    <Share2 className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => setActiveArticle(null)}
                    className="p-2 rounded-xl bg-white border border-[#E2E6EA] hover:bg-slate-100 text-[#6B747C] hover:text-[#0B1B2B] transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Modal Scrollable Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#0B1B2B] text-sm sm:text-base leading-relaxed">
                {/* Cover Image */}
                <div className="rounded-2xl overflow-hidden border border-[#E2E6EA] max-h-72 aspect-21/9 bg-slate-100">
                  <img
                    src={activeArticle.imageUrl}
                    alt={activeArticle.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const fallback = ARTICLE_FALLBACK_IMAGES[activeArticle.id] || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80";
                      if (e.currentTarget.src !== fallback) {
                        e.currentTarget.src = fallback;
                      }
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Author Strip */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F5F6F3] border border-[#E2E6EA]">
                  <div className="w-10 h-10 rounded-full bg-[#EBF3FF] text-[#1677FF] flex items-center justify-center font-bold">
                    {activeArticle.author.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#0B1B2B] text-sm">{activeArticle.author.name}</div>
                    <div className="text-xs text-[#6B747C]">{activeArticle.author.role}</div>
                  </div>
                </div>

                {/* Executive Key Takeaways Box */}
                <div className="bg-[#EBF3FF] border border-blue-200 rounded-2xl p-5 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1677FF] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#1677FF]" />
                    Key Technical Summary & Takeaways
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#0B1B2B]">
                    {activeArticle.keyTakeaways.map((point, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Article Sections */}
                <div className="space-y-6">
                  {activeArticle.sections.map((sec, idx) => (
                    <div key={idx} className="space-y-3">
                      {sec.heading && (
                        <h4 className="text-lg sm:text-xl font-bold text-[#0B1B2B] font-display border-l-3 border-[#1677FF] pl-3">
                          {sec.heading}
                        </h4>
                      )}
                      <p className="text-[#6B747C] leading-relaxed">
                        {sec.paragraph}
                      </p>

                      {sec.callout && (
                        <div className="p-4 rounded-2xl bg-amber-50 border-l-4 border-amber-500 text-amber-900 text-xs sm:text-sm italic my-3 font-medium">
                          {sec.callout}
                        </div>
                      )}

                      {sec.bullets && sec.bullets.length > 0 && (
                        <ul className="space-y-2 pl-2">
                          {sec.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#6B747C]">
                              <span className="text-[#1677FF] font-bold mt-0.5">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                {/* Archival Note for Carrier Award */}
                {activeArticle.id === 'carrier-apex-award-archive' && (
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 space-y-3">
                    <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                      <Award className="w-5 h-5 text-amber-600" />
                      <span>Archival Verification (Carrier Federation Newsletter)</span>
                    </div>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      Source documentation preserved at Engineering Enterprises Headquarters (10-Q Johar Town, Lahore). Certified by President Jean Pierre van Rooy, Carrier International Corporation, Geneva / Syracuse, NY.
                    </p>
                  </div>
                )}

                {/* SEO Tags Cloud */}
                <div className="pt-4 border-t border-[#E2E6EA]">
                  <div className="text-xs font-bold text-[#6B747C] mb-2 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#1677FF]" />
                    <span>Topics & Industry Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeArticle.seoKeywords.map((k, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-[#F5F6F3] text-xs font-semibold text-[#1677FF] border border-[#E2E6EA]"
                      >
                        #{k}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Sticky Footer CTAs */}
              <div className="p-4 sm:p-5 border-t border-[#E2E6EA] bg-[#F5F6F3] flex flex-wrap items-center justify-between gap-3 sticky bottom-0 z-20">
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleCopyLink}
                    className="px-3 py-2 rounded-xl bg-white border border-[#E2E6EA] hover:bg-slate-100 text-xs text-[#0B1B2B] font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5 text-[#1677FF]" />
                    <span>{copiedLink ? 'Link Copied!' : 'Copy Article Link'}</span>
                  </motion.button>
                </div>

                <div className="flex items-center gap-2">
                  {onOpenCalculator && (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        setActiveArticle(null);
                        onOpenCalculator();
                      }}
                      className="px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Zap className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Calculate Energy Savings</span>
                    </motion.button>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      const note = activeArticle.title;
                      setActiveArticle(null);
                      if (onSelectProductForQuote) {
                        onSelectProductForQuote(`Inquiry regarding whitepaper: ${note}`);
                      }
                    }}
                    className="px-4 py-2 rounded-xl bg-[#1677FF] hover:bg-blue-600 text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-md shadow-[#1677FF]/20"
                  >
                    <span>Consult Engineering Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
