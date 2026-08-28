import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wind, 
  Flame, 
  Cpu, 
  Zap, 
  Wrench, 
  ShieldCheck, 
  ExternalLink, 
  Check, 
  ArrowRight,
  Eye,
  Percent,
  X,
  Maximize2,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '../data/engineeringData';
import { Product, ProductCategory } from '../types';

interface FeaturedProductsProps {
  onSelectProductForQuote: (productName: string) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onSelectProductForQuote }) => {
  const [activeTab, setActiveTab] = useState<ProductCategory>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [zoomedImage, setZoomedImage] = useState<{ url: string; title: string } | null>(null);

  const categories = [
    { id: 'all', label: 'All Solutions' },
    { id: 'evaporative-cooling', label: 'Evaporative Cooling', icon: Wind },
    { id: 'fire-fighting', label: 'Fire Fighting (NFPA)', icon: Flame },
    { id: 'hvac', label: 'Central HVAC & AHU', icon: Cpu },
    { id: 'electrical-panels', label: 'Electrical & Panels', icon: Zap },
  ];

  const filteredProducts = activeTab === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeTab);

  // Fallback image provider if any link has network block
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, category: string) => {
    const target = e.currentTarget;
    if (category === 'evaporative-cooling') {
      target.src = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80';
    } else if (category === 'fire-fighting') {
      target.src = 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80';
    } else {
      target.src = 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80';
    }
  };

  return (
    <section id="products" className="py-20 bg-[#F5F6F3] text-[#0B1B2B] relative border-b border-[#E2E6EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF3FF] border border-[#1677FF]/20 text-[#1677FF] text-xs font-bold mb-3 shadow-2xs"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Industrial Grade & Turnkey Execution</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B1B2B] font-display"
          >
            Featured Products & Engineering Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-3 text-[#6B747C] text-sm sm:text-base leading-relaxed"
          >
            From energy-saving Veloair cooling units for Pakistan's severe climate to certified NFPA fire suppression and in-house electrical panels.
          </motion.p>

          {/* Category Filter Tabs with Motion Layout */}
          <div className="flex items-center justify-start sm:justify-center gap-2 mt-8 overflow-x-auto no-scrollbar pb-2 sm:pb-0 px-1 sm:px-0 sm:flex-wrap">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id as ProductCategory)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative flex items-center gap-2 px-4 py-2.5 min-h-[44px] shrink-0 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'text-white font-bold'
                      : 'bg-white text-[#6B747C] hover:text-[#0B1B2B] hover:bg-slate-50 border border-[#E2E6EA] shadow-2xs'
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeProductCategoryTab"
                      className="absolute inset-0 bg-[#1677FF] rounded-xl shadow-md shadow-[#1677FF]/20"
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {Icon && <Icon className="w-3.5 h-3.5" />}
                    <span>{cat.label}</span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid with Framer Motion AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setSelectedProduct(product)}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#0B1B2B]/8 flex flex-col cursor-pointer border border-[#E2E6EA] hover:border-[#1677FF] transition-colors"
              >
                {/* Product Visual Area */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => handleImageError(e, product.category)}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B]/75 via-transparent to-transparent" />

                  {/* Badge Overlay */}
                  {product.badge && (
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute top-3.5 right-3.5 bg-[#1677FF] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-xs"
                    >
                      {product.badge}
                    </motion.div>
                  )}

                  {product.savingsOrRating && (
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute top-3.5 left-3.5 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3 animate-pulse" />
                      <span>{product.savingsOrRating}</span>
                    </motion.div>
                  )}

                  {/* Enlarge Image Icon Button */}
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setZoomedImage({ url: product.imageUrl, title: product.name });
                    }}
                    className="absolute bottom-11 right-3 p-2 rounded-xl bg-white/95 text-[#0B1B2B] hover:text-[#1677FF] hover:bg-white border border-[#E2E6EA] opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md shadow-md"
                    title="Enlarge Image"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </motion.button>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="text-white font-semibold px-2.5 py-0.5 rounded-full bg-[#0B1B2B]/80 backdrop-blur-md border border-white/20 text-[11px]">
                      {product.categoryName}
                    </span>
                    {product.standard && (
                      <span className="text-white bg-slate-900/80 px-2.5 py-0.5 rounded-full text-[11px] border border-white/10 backdrop-blur-md">
                        {product.standard}
                      </span>
                    )}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1B2B] group-hover:text-[#1677FF] transition-colors font-display">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#6B747C] mt-1.5 line-clamp-2 leading-relaxed">
                      {product.tagline}
                    </p>

                    {/* Bullet Specs preview */}
                    <ul className="mt-4 space-y-2 text-xs text-[#6B747C]">
                      {product.keySpecs.slice(0, 2).map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#1677FF] shrink-0 mt-0.5" />
                          <span className="line-clamp-1 text-[#0B1B2B] font-medium">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Actions */}
                  <div 
                    className="pt-4 border-t border-[#E2E6EA] flex items-center gap-2.5"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 py-2.5 px-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-[#0B1B2B] transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-[#E2E6EA]"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#1677FF]" />
                      <span>Specs</span>
                    </motion.button>

                    <motion.a
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      href={`https://wa.me/923008425772?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.%20Please%20send%20technical%20catalog%20and%20pricing.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-medium transition-colors flex items-center justify-center"
                      title="Quick WhatsApp Inquire"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                    </motion.a>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onSelectProductForQuote(product.name)}
                      className="flex-1 py-2.5 px-3.5 rounded-xl bg-[#1677FF] hover:bg-[#0E65E5] text-white font-bold text-xs transition-colors shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner for Custom Fabrication */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#0B1B2B] text-white border border-slate-700/60 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-xl font-bold text-white">Need Custom Sizing or Turnkey Engineering Design?</h4>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Our engineering team conducts on-site surveys for duct layouts, CFM load calculation, and NFPA hydraulic flow tests across Pakistan.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={`https://wa.me/923008425772?text=Hello%2C%20I%20would%20like%20to%20request%20a%20turnkey%20engineering%20consultation%20for%20my%20facility.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-all shadow"
            >
              Inquire via WhatsApp
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onSelectProductForQuote('Custom Turnkey System')}
              className="px-4 py-2.5 rounded-xl bg-[#1677FF] hover:bg-[#0E65E5] text-white text-xs sm:text-sm font-bold transition-all shadow cursor-pointer"
            >
              Request Site Visit
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Product Quick View Modal with Motion AnimatePresence */}
      <AnimatePresence>
        {selectedProduct && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
              onClick={() => setSelectedProduct(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white border border-[#E2E6EA] rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-[#0B1B2B] shadow-2xl relative max-h-[90vh] overflow-y-auto z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-[#6B747C] hover:text-[#0B1B2B] hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Product Image in Modal */}
              <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-100 mb-5 border border-[#E2E6EA]">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  onError={(e) => handleImageError(e, selectedProduct.category)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1677FF] text-white text-xs font-bold shadow">
                  {selectedProduct.categoryName}
                </div>
                {selectedProduct.savingsOrRating && (
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow">
                    {selectedProduct.savingsOrRating}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-2">
                <span>{selectedProduct.categoryName}</span>
                {selectedProduct.standard && (
                  <>
                    <span className="text-[#D4D9DE]">•</span>
                    <span className="text-[#6B747C]">{selectedProduct.standard}</span>
                  </>
                )}
              </div>

              <h3 className="text-2xl font-bold text-[#0B1B2B] mb-1 font-display">{selectedProduct.name}</h3>
              <p className="text-sm text-[#1677FF] font-semibold mb-3">{selectedProduct.tagline}</p>
              <p className="text-sm text-[#6B747C] leading-relaxed mb-6">{selectedProduct.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#F5F6F3] p-4 rounded-2xl border border-[#E2E6EA]">
                  <h4 className="text-xs font-bold text-[#0B1B2B] uppercase tracking-wider mb-2.5">
                    Technical Specifications
                  </h4>
                  <ul className="space-y-2 text-xs text-[#6B747C]">
                    {selectedProduct.keySpecs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-[#0B1B2B] font-medium">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#F5F6F3] p-4 rounded-2xl border border-[#E2E6EA]">
                  <h4 className="text-xs font-bold text-[#0B1B2B] uppercase tracking-wider mb-2.5">
                    Key Features & Durability
                  </h4>
                  <ul className="space-y-2 text-xs text-[#6B747C]">
                    {selectedProduct.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#1677FF] shrink-0 mt-0.5" />
                        <span className="text-[#0B1B2B] font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-[#F5F6F3] p-4 rounded-2xl border border-[#E2E6EA] mb-6">
                <h4 className="text-xs font-bold text-[#0B1B2B] uppercase tracking-wider mb-2">
                  Ideal Industry Applications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.applications.map((app, i) => (
                    <span 
                      key={i} 
                      onClick={() => {
                        setSelectedProduct(null);
                        onSelectProductForQuote(`${selectedProduct.name} for ${app}`);
                      }}
                      className="px-3 py-1 bg-white hover:bg-[#EBF3FF] hover:text-[#1677FF] hover:border-[#1677FF] border border-[#E2E6EA] text-[#0B1B2B] text-xs font-medium rounded-lg cursor-pointer transition-all shadow-2xs"
                    >
                      {app} ↗
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 pt-4 border-t border-[#E2E6EA]">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-[#6B747C] hover:text-[#0B1B2B] text-xs font-semibold cursor-pointer transition-colors flex items-center justify-center order-3 sm:order-1"
                >
                  Close
                </button>
                <a
                  href={`https://wa.me/923008425772?text=Hello%2C%20I%20would%20like%20to%20get%20pricing%20and%20technical%20specs%20for%3A%20${encodeURIComponent(selectedProduct.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-semibold shadow flex items-center justify-center order-2"
                >
                  Inquire on WhatsApp
                </a>
                <button
                  onClick={() => {
                    const pName = selectedProduct.name;
                    setSelectedProduct(null);
                    onSelectProductForQuote(pName);
                  }}
                  className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-xl bg-[#1677FF] hover:bg-[#0E65E5] active:bg-blue-700 text-white text-xs font-bold shadow cursor-pointer flex items-center justify-center order-1 sm:order-3"
                >
                  Request Quotation
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Image Zoom Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {zoomedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
              onClick={() => setZoomedImage(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="max-w-4xl w-full bg-white border border-[#E2E6EA] rounded-3xl overflow-hidden shadow-2xl relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 bg-[#F5F6F3] flex items-center justify-between border-b border-[#E2E6EA]">
                <h4 className="text-sm font-bold text-[#0B1B2B]">{zoomedImage.title}</h4>
                <button
                  onClick={() => setZoomedImage(null)}
                  className="p-1.5 rounded-lg bg-white text-[#6B747C] hover:text-[#0B1B2B] border border-[#E2E6EA] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 bg-white flex items-center justify-center max-h-[75vh]">
                <img
                  src={zoomedImage.url}
                  alt={zoomedImage.title}
                  className="max-h-[70vh] w-auto object-contain rounded-xl"
                />
              </div>
              <div className="p-4 bg-[#F5F6F3] flex items-center justify-between border-t border-[#E2E6EA] text-xs">
                <span className="text-[#6B747C]">High-Resolution Engineering Asset</span>
                <button
                  onClick={() => {
                    const title = zoomedImage.title;
                    setZoomedImage(null);
                    onSelectProductForQuote(title);
                  }}
                  className="px-4 py-2 rounded-xl bg-[#1677FF] text-white font-bold hover:bg-[#0E65E5] cursor-pointer"
                >
                  Request Quote for this Model
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

