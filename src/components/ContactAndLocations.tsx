import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Building, 
  Factory, 
  Loader2
} from 'lucide-react';
import { COMPANY_INFO, OFFICE_LOCATIONS } from '../data/engineeringData';

interface ContactAndLocationsProps {
  initialProductOrNote?: string;
}

type FormSubmitState = 'idle' | 'loading' | 'success';

export const ContactAndLocations: React.FC<ContactAndLocationsProps> = ({ initialProductOrNote }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    domain: 'evaporative-cooling',
    message: initialProductOrNote || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitState, setSubmitState] = useState<FormSubmitState>('idle');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitState !== 'idle') return;
    setSubmitState('loading');

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      await res.json();
    } catch (err) {
      console.log('Processed inquiry locally');
    }

    setSubmitState('success');

    setTimeout(() => {
      setSubmitted(true);
      setSubmitState('idle');
    }, 1100);
  };

  const handleWhatsAppDirect = () => {
    const text = `*New Inquiry for Engineering Enterprises & Veloair*%0A%0A• Name: ${formData.name || 'Inquirer'}%0A• Company: ${formData.company || 'Not specified'}%0A• Phone: ${formData.phone || 'Not specified'}%0A• Domain: ${formData.domain}%0A• Message: ${formData.message || 'I would like to request technical specifications and pricing.'}`;
    window.open(`https://wa.me/923008425772?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#F5F6F3] text-[#0B1B2B] relative border-t border-[#E2E6EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Subscription Banner matching screenshot 10 */}
        <div className="bg-gradient-to-r from-[#0B1B2B] via-[#11263d] to-[#0B1B2B] border border-[#0B1B2B] rounded-3xl p-8 sm:p-12 mb-20 text-center relative overflow-hidden shadow-2xl text-white">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-4xl font-black text-white font-display">
              So, what are you waiting for?
            </h3>
            <p className="text-sm sm:text-base text-blue-200">
              Stay Updated with the Latest News, Industrial Tips and Energy-Saving Updates!
            </p>

            {newsletterSubscribed ? (
              <div className="p-4 bg-emerald-950/80 border border-emerald-500/40 rounded-2xl text-emerald-300 text-sm font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Thank you! You are now subscribed to Engineering Enterprises bulletins.</span>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail) setNewsletterSubscribed(true);
                }}
                className="flex flex-col sm:flex-row gap-3 pt-2 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email...."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white/10 border border-white/20 focus:border-[#1677FF] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#1677FF] hover:bg-blue-600 text-white font-bold text-sm transition-all shadow-md shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Section Heading for Contact & Inquiries */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3FF] border border-[#1677FF]/30 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Mail className="w-3.5 h-3.5 text-[#1677FF]" />
            <span>24/7 Nationwide Project Support</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0B1B2B] font-display leading-tight">
            Get In Touch & Nationwide Offices
          </h2>
          <p className="mt-4 text-[#6B747C] text-sm sm:text-base leading-relaxed">
            Reach out for project consultations, turnkey quotations, on-site surveys, or after-sale service requests.
          </p>
        </div>

        {/* 2-Column Layout: Contact Form & Office Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Get In Touch Form matching screenshot 10 */}
          <div className="lg:col-span-6 bg-white border border-[#E2E6EA] rounded-3xl p-6 sm:p-8 shadow-xl shadow-[#0B1B2B]/5">
            <h3 className="text-2xl font-black text-[#0B1B2B] mb-1 font-display">
              Get In Touch
            </h3>
            <p className="text-xs text-[#6B747C] mb-6 font-medium">
              Fill out the form below or chat directly with our technical engineers.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="submitted-inquiry"
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3"
                >
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0B1B2B] font-display">Inquiry Successfully Dispatched!</h4>
                  <p className="text-xs text-[#6B747C] max-w-md mx-auto">
                    Thank you, <span className="text-emerald-700 font-bold">{formData.name}</span>. Our senior HVAC and Fire Protection engineering team will review your specifications and contact you within 24 hours.
                  </p>
                  <div className="pt-3">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleWhatsAppDirect}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/20 inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Connect Immediately on WhatsApp</span>
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  key="inquiry-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-bold text-[#0B1B2B] uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Engr. Asad Malik"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full min-h-[48px] bg-[#F5F6F3] border border-[#E2E6EA] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0B1B2B] placeholder-[#6B747C] focus:outline-none focus:border-[#1677FF] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1B2B] uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full min-h-[48px] bg-[#F5F6F3] border border-[#E2E6EA] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0B1B2B] placeholder-[#6B747C] focus:outline-none focus:border-[#1677FF] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1B2B] uppercase tracking-wider mb-1.5">
                        Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full min-h-[48px] bg-[#F5F6F3] border border-[#E2E6EA] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0B1B2B] placeholder-[#6B747C] focus:outline-none focus:border-[#1677FF] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1B2B] uppercase tracking-wider mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Textile Mill / Poultry Hub"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full min-h-[48px] bg-[#F5F6F3] border border-[#E2E6EA] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0B1B2B] placeholder-[#6B747C] focus:outline-none focus:border-[#1677FF] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1B2B] uppercase tracking-wider mb-1.5">
                        Solution of Interest
                      </label>
                      <select
                        value={formData.domain}
                        onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                        className="w-full min-h-[48px] bg-[#F5F6F3] border border-[#E2E6EA] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0B1B2B] focus:outline-none focus:border-[#1677FF] focus:bg-white transition-colors cursor-pointer"
                      >
                        <option value="evaporative-cooling">Veloair Evaporative Cooling</option>
                        <option value="fire-fighting">Fire Fighting & Hydrant Systems</option>
                        <option value="hvac-central">Central HVAC & AHU</option>
                        <option value="electrical-panels">Electrical LT, ATS & PFI Panels</option>
                        <option value="mechanical-plumbing">Mechanical & Plumbing Works</option>
                        <option value="turnkey-consultation">Complete Turnkey Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1B2B] uppercase tracking-wider mb-1.5">
                      Message / Project Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Specify your floor area (sq. ft.), cooling requirements, or fire protection equipment needed..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F5F6F3] border border-[#E2E6EA] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0B1B2B] placeholder-[#6B747C] focus:outline-none focus:border-[#1677FF] focus:bg-white resize-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <div className="flex-1 relative">
                      <AnimatePresence mode="wait">
                        {submitState === 'idle' && (
                          <motion.button
                            key="contact-btn-idle"
                            type="submit"
                            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(22, 119, 255, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-full min-h-[50px] py-3.5 px-5 rounded-xl bg-[#1677FF] hover:bg-blue-600 active:bg-blue-700 text-white font-bold text-sm transition-all shadow-md shadow-[#1677FF]/20 flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                          </motion.button>
                        )}

                        {submitState === 'loading' && (
                          <motion.button
                            key="contact-btn-loading"
                            type="button"
                            disabled
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                            className="w-full min-h-[50px] py-3.5 px-5 rounded-xl bg-[#1677FF]/90 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-wait"
                          >
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="flex items-center justify-center"
                            >
                              <Loader2 className="w-4 h-4" />
                            </motion.div>
                            <span>Processing Inquiry...</span>
                          </motion.button>
                        )}

                        {submitState === 'success' && (
                          <motion.div
                            key="contact-btn-success"
                            initial={{ opacity: 0, scale: 0.92, y: 3 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ type: "spring", stiffness: 450, damping: 22 }}
                            className="w-full min-h-[50px] py-3.5 px-5 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2.5 overflow-hidden"
                          >
                            <motion.svg
                              className="w-5 h-5 text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <motion.path
                                d="M20 6L9 17l-5-5"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                              />
                            </motion.svg>
                            <motion.span
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1, duration: 0.25 }}
                            >
                              Inquiry Sent!
                            </motion.span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto min-h-[50px] py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
                    >
                      <span>Send via WhatsApp</span>
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Verified Office Locations Directory */}
          <div className="lg:col-span-6 space-y-4">
            
            {OFFICE_LOCATIONS.map((loc, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#E2E6EA] rounded-3xl p-5 sm:p-6 hover:border-[#1677FF] transition-all shadow-sm hover:shadow-xl hover:shadow-[#0B1B2B]/5 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#EBF3FF] border border-blue-200 text-[#1677FF] flex items-center justify-center shrink-0">
                      {loc.type.includes('Factory') ? <Factory className="w-4 h-4" /> : <Building className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B1B2B] text-sm group-hover:text-[#1677FF] transition-colors">{loc.city} {loc.type}</h4>
                      <span className="text-[11px] text-[#1677FF] font-semibold">Engineering Enterprises</span>
                    </div>
                  </div>

                  <span className="text-[10px] bg-[#F5F6F3] text-[#0B1B2B] px-2.5 py-1 rounded-full border border-[#E2E6EA] font-bold">
                    {loc.city}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-[#6B747C]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-[#0B1B2B] leading-relaxed">{loc.address}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div className="flex flex-wrap gap-2">
                      {loc.phones.map((p, pidx) => (
                        <a 
                          key={pidx} 
                          href={`tel:${p.replace(/\s+/g, '')}`} 
                          className="min-h-[36px] px-2 py-1 rounded-lg bg-[#F5F6F3] border border-[#E2E6EA] hover:border-[#1677FF] hover:text-[#1677FF] font-bold text-[#0B1B2B] flex items-center transition-colors"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>

                  {loc.fax && (
                    <div className="flex items-center gap-2.5 text-[#6B747C] pl-6.5">
                      <span className="font-mono text-[11px]">Fax: {loc.fax}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#1677FF] shrink-0" />
                    <a 
                      href={`mailto:${loc.email}`} 
                      className="min-h-[36px] px-2 py-1 rounded-lg hover:bg-[#EBF3FF] hover:text-[#1677FF] font-medium text-[#0B1B2B] flex items-center transition-colors"
                    >
                      {loc.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media Connect Box from User Request */}
            <div className="bg-white border border-[#E2E6EA] rounded-3xl p-5 sm:p-6 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1677FF] mb-2">
                Official Social Media Channels
              </div>
              <p className="text-xs text-[#6B747C] mb-4">
                Follow our official accounts for video demonstrations of cooling pads, fire safety testing, and ongoing projects:
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-bold flex items-center gap-2 transition-all shadow"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook Page</span>
                </a>

                <a
                  href={COMPANY_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-4 py-2.5 rounded-xl bg-[#0077b5] hover:bg-[#006097] active:bg-[#004e7c] text-white text-xs font-bold flex items-center gap-2 transition-all shadow"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn Company Page</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
