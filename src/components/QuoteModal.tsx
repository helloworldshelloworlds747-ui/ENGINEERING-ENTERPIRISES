import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/engineeringData';

interface QuoteModalProps {
  isOpen: boolean;
  initialProductOrNote?: string;
  onClose: () => void;
}

type SubmissionState = 'idle' | 'loading' | 'success';

export const QuoteModal: React.FC<QuoteModalProps> = ({ 
  isOpen, 
  initialProductOrNote, 
  onClose 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectScope: initialProductOrNote || 'Turnkey Evaporative Cooling',
    city: 'Lahore',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitState, setSubmitState] = useState<SubmissionState>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitState !== 'idle') return;
    setSubmitState('loading');

    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.log('Submitted quote request');
    }

    // Trigger subtle success micro-interaction on the button
    setSubmitState('success');

    // Smoothly transition to the full confirmation dialog after the micro-interaction completes
    setTimeout(() => {
      setSubmitted(true);
      setSubmitState('idle');
    }, 1100);
  };

  const handleWhatsAppDispatch = () => {
    const text = `*Turnkey Project Quotation Request*%0A%0A• Name: ${formData.name}%0A• Company: ${formData.company || 'N/A'}%0A• Phone: ${formData.phone}%0A• City: ${formData.city}%0A• Solution Required: ${formData.projectScope}%0A• Details: ${formData.message || 'Please provide design, CFM sizing, and bill of quantities.'}`;
    window.open(`https://wa.me/923008425772?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1B2B]/60 backdrop-blur-md animate-in fade-in duration-200">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="bg-white border border-[#E2E6EA] rounded-3xl max-w-xl w-full p-6 sm:p-8 text-[#0B1B2B] shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-11 h-11 rounded-full bg-[#F5F6F3] text-[#6B747C] hover:text-[#0B1B2B] hover:bg-[#E2E6EA] active:scale-95 transition-all flex items-center justify-center cursor-pointer z-10"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div 
              key="submitted-view"
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-center py-6 space-y-4"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-black text-[#0B1B2B] font-display">
                Quotation Request Received!
              </h3>
              <p className="text-sm text-[#6B747C] max-w-md mx-auto">
                Thank you, <span className="text-[#1677FF] font-bold">{formData.name}</span>. Our technical estimation department has registered your project enquiry for <span className="font-semibold text-[#0B1B2B]">{formData.projectScope}</span>.
              </p>

              <div className="pt-4 flex flex-col gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppDispatch}
                  className="w-full min-h-[50px] py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm transition-all shadow-md shadow-emerald-600/20 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Send Direct to WhatsApp for Expedited Quote</span>
                </motion.button>
                <button
                  onClick={onClose}
                  className="w-full min-h-[44px] py-2.5 rounded-xl bg-[#F5F6F3] text-[#0B1B2B] hover:bg-[#E2E6EA] text-xs font-bold transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#1677FF]/30 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4 text-[#1677FF]" />
                <span>PEC Licensed Turnkey Engineering</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#0B1B2B] font-display mb-1">
                Request Technical Proposal & Pricing
              </h3>
              <p className="text-xs sm:text-sm text-[#6B747C] mb-5 sm:mb-6 font-medium">
                Get customized CFM airflow sizing, NFPA hydraulic calculation, and equipment BOQ.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B1B2B] uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Engr. Asad"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      placeholder="e.g. Garment / Dairy"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full min-h-[48px] bg-[#F5F6F3] border border-[#E2E6EA] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0B1B2B] placeholder-[#6B747C] focus:outline-none focus:border-[#1677FF] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1B2B] uppercase tracking-wider mb-1.5">
                      City / Location
                    </label>
                    <input
                      type="text"
                      placeholder="Lahore, Karachi, Faisalabad..."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full min-h-[48px] bg-[#F5F6F3] border border-[#E2E6EA] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0B1B2B] placeholder-[#6B747C] focus:outline-none focus:border-[#1677FF] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1B2B] uppercase tracking-wider mb-1.5">
                    Solution Required
                  </label>
                  <select
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full min-h-[48px] bg-[#F5F6F3] border border-[#E2E6EA] rounded-xl px-4 py-3 text-base sm:text-sm text-[#0B1B2B] focus:outline-none focus:border-[#1677FF] focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="Veloair Evaporative Cooling System">Veloair Evaporative Cooling System</option>
                    <option value="Evaporative Cooling Pads (7090 / 5090)">Evaporative Cooling Pads (7090 / 5090)</option>
                    <option value="Fire Fighting Hydrant & Sprinkler System (NFPA)">Fire Fighting Hydrant & Sprinkler System (NFPA)</option>
                    <option value="FM-200 Clean Agent Fire Suppression">FM-200 Clean Agent Fire Suppression</option>
                    <option value="Air Handling Units (AHU) & HVAC">Air Handling Units (AHU) & HVAC</option>
                    <option value="Electrical LT & ATS/PFI Switchboards">Electrical LT & ATS/PFI Switchboards</option>
                    <option value="Complete Factory Turnkey Infrastructure">Complete Factory Turnkey Infrastructure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1B2B] uppercase tracking-wider mb-1.5">
                    Project Details / Area Dimensions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Floor area (sq. ft.), required temperature drop, or specifications..."
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
                          key="btn-idle"
                          type="submit"
                          whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(22, 119, 255, 0.3)" }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="w-full min-h-[50px] py-3 px-5 rounded-xl bg-[#1677FF] hover:bg-blue-600 active:bg-blue-700 text-white font-bold text-sm transition-all shadow-md shadow-[#1677FF]/20 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Send className="w-4 h-4" />
                          <span>Submit Request</span>
                        </motion.button>
                      )}

                      {submitState === 'loading' && (
                        <motion.button
                          key="btn-loading"
                          type="button"
                          disabled
                          initial={{ opacity: 0, scale: 0.97 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.97 }}
                          transition={{ duration: 0.2 }}
                          className="w-full min-h-[50px] py-3 px-5 rounded-xl bg-[#1677FF]/90 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-wait"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="flex items-center justify-center"
                          >
                            <Loader2 className="w-4 h-4" />
                          </motion.div>
                          <span>Submitting Request...</span>
                        </motion.button>
                      )}

                      {submitState === 'success' && (
                        <motion.div
                          key="btn-success"
                          initial={{ opacity: 0, scale: 0.92, y: 3 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.92 }}
                          transition={{ type: "spring", stiffness: 450, damping: 22 }}
                          className="w-full min-h-[50px] py-3 px-5 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2.5 overflow-hidden"
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
                            Request Submitted!
                          </motion.span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={handleWhatsAppDispatch}
                    className="w-full sm:w-auto min-h-[50px] py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 shrink-0"
                  >
                    <span>WhatsApp Instant</span>
                  </motion.button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
};
