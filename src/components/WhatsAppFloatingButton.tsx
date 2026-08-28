import React from 'react';
import { COMPANY_INFO } from '../data/engineeringData';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <aside aria-label="Direct WhatsApp Contact" className="hidden md:block fixed bottom-6 left-6 z-40">
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp chat with Engineering Enterprises at +92 300 8425772 (opens in new tab)"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-emerald-300/40"
        title="Chat with Technical Team on WhatsApp (+92 300 8425772)"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping" aria-hidden="true"></span>

        {/* WhatsApp Vector Icon */}
        <svg className="w-7 h-7 fill-current relative z-10" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.178L2 22l4.981-1.309C8.423 21.516 10.154 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
        </svg>

        {/* Hover Label Tooltip */}
        <span className="hidden sm:block absolute left-full ml-3 px-3 py-1.5 bg-[#0B1B2B] text-white text-xs font-semibold rounded-xl whitespace-nowrap shadow-xl border border-[#1a2f45] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" aria-hidden="true">
          WhatsApp Direct: +92 300 8425772
        </span>
      </a>
    </aside>
  );
};
