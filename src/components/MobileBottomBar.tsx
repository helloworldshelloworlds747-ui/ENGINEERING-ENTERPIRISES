import React from 'react';
import { 
  Phone, 
  Calculator, 
  Sparkles, 
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../data/engineeringData';

interface MobileBottomBarProps {
  onOpenQuoteModal: () => void;
  onOpenCalculator: () => void;
  onOpenChat: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onOpenQuoteModal,
  onOpenCalculator,
  onOpenChat,
}) => {
  return (
    <nav 
      aria-label="Mobile quick actions"
      role="navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#E2E6EA] shadow-2xl px-2 py-1.5 safe-area-pb"
    >
      <div className="grid grid-cols-5 gap-1 items-center max-w-md mx-auto" role="menubar" aria-label="Quick action shortcuts">
        
        {/* Call Button */}
        <a
          href="tel:+924235956625"
          aria-label="Call Engineering Enterprises Head Office at +92 42 35956625"
          role="menuitem"
          className="flex flex-col items-center justify-center py-1 rounded-xl text-[#0B1B2B] hover:text-[#1677FF] active:bg-[#EBF3FF] transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-[#F5F6F3] border border-[#E2E6EA] flex items-center justify-center text-[#1677FF]" aria-hidden="true">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold mt-0.5">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat directly with Engineering Enterprises on WhatsApp at +92 300 8425772"
          role="menuitem"
          className="flex flex-col items-center justify-center py-1 rounded-xl text-[#0B1B2B] hover:text-emerald-600 active:bg-emerald-50 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs" aria-hidden="true">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.178L2 22l4.981-1.309C8.423 21.516 10.154 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
            </svg>
          </div>
          <span className="text-[10px] font-bold text-emerald-700 mt-0.5">WhatsApp</span>
        </a>

        {/* Energy Calculator */}
        <button
          onClick={onOpenCalculator}
          aria-label="Open 90% Industrial Energy and CFM Savings Calculator"
          role="menuitem"
          className="flex flex-col items-center justify-center py-1 rounded-xl text-[#0B1B2B] hover:text-[#1677FF] active:bg-[#EBF3FF] transition-all cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 text-[#1677FF] flex items-center justify-center" aria-hidden="true">
            <Calculator className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold text-[#1677FF] mt-0.5">90% Save</span>
        </button>

        {/* AI Chat Consultant */}
        <button
          onClick={onOpenChat}
          aria-label="Open AI Engineering Consultant and Technical Assistant"
          role="menuitem"
          className="flex flex-col items-center justify-center py-1 rounded-xl text-[#0B1B2B] hover:text-indigo-600 active:bg-indigo-50 transition-all cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center relative" aria-hidden="true">
            <Sparkles className="w-4 h-4" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white" aria-hidden="true"></span>
          </div>
          <span className="text-[10px] font-bold text-indigo-700 mt-0.5">AI Help</span>
        </button>

        {/* Turnkey Quote CTA Button */}
        <button
          onClick={onOpenQuoteModal}
          aria-label="Request a Turnkey Engineering Project Quotation"
          role="menuitem"
          className="flex flex-col items-center justify-center py-1 rounded-xl bg-[#1677FF] active:bg-blue-700 text-white shadow-md transition-all cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center" aria-hidden="true">
            <FileText className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-black mt-0.5">Quote</span>
        </button>

      </div>
    </nav>
  );
};
