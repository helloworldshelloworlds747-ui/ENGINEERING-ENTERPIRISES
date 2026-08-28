import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ExternalLink, 
  Wind, 
  Flame, 
  Zap, 
  Award,
  ChevronRight,
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO, OFFICE_LOCATIONS } from '../data/engineeringData';
import { CompanyLogoMark } from './CompanyLogo';

interface FooterProps {
  onOpenCertModal: (certId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCertModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1B2B] text-slate-300 text-xs border-t border-[#1a2f45]">
      
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Credentials (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <CompanyLogoMark className="w-10 h-10 shadow-md border border-white/20" />

              <div>
                <div className="text-base font-black tracking-tight text-white font-display">
                  ENGINEERING ENTERPRISES
                </div>
                <div className="text-[11px] text-[#1677FF] font-bold tracking-wider uppercase">
                  Veloair Envirotech (Pvt) Ltd
                </div>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Established in 1992, Engineering Enterprises is Pakistan's pioneer in turnkey energy-saving Evaporative Air Cooling (Veloair), NFPA Fire Fighting Suppression networks, Central HVAC, and in-house Type-Tested Electrical Switchboards.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-slate-200 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>PEC License # 20000 (Category C4)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200 font-medium">
                <Award className="w-4 h-4 text-[#1677FF] shrink-0" />
                <span>Carrier USA Awarded Engineering Leadership</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href={COMPANY_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all shadow"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow flex items-center gap-1"
              >
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>

          {/* Quick Links (Cols 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider font-display">
              Engineering Solutions
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => scrollToSection('products')} className="hover:text-[#1677FF] text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer text-left">
                  <ChevronRight className="w-3 h-3 text-[#1677FF] shrink-0" />
                  <span>Veloair Evaporative Coolers (90% Save)</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="hover:text-[#1677FF] text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer text-left">
                  <ChevronRight className="w-3 h-3 text-[#1677FF] shrink-0" />
                  <span>Fire Hydrants & FM-200 Fire Fighting</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="hover:text-[#1677FF] text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer text-left">
                  <ChevronRight className="w-3 h-3 text-[#1677FF] shrink-0" />
                  <span>Air Handling Units (AHU) & Central HVAC</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="hover:text-[#1677FF] text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer text-left">
                  <ChevronRight className="w-3 h-3 text-[#1677FF] shrink-0" />
                  <span>LT, ATS & Motor Control Switchboards</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('energy-calculator')} className="hover:text-emerald-300 text-emerald-400 font-bold transition-colors flex items-center gap-1.5 cursor-pointer text-left">
                  <ChevronRight className="w-3 h-3 shrink-0" />
                  <span>CFM & Electricity Savings Calculator</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('insights')} className="hover:text-[#1677FF] text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer text-left">
                  <ChevronRight className="w-3 h-3 text-[#1677FF] shrink-0" />
                  <span>Technical Insights & Engineering Library</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faqs')} className="hover:text-[#1677FF] text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer text-left">
                  <ChevronRight className="w-3 h-3 text-[#1677FF] shrink-0" />
                  <span>Frequently Asked Questions (FAQ)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Accreditations & About (Cols 8-9) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider font-display">
              Accreditations
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => onOpenCertModal('pec-license')} className="hover:text-[#1677FF] text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer text-left">
                  <ChevronRight className="w-3 h-3 text-[#1677FF] shrink-0" />
                  <span>PEC License # 20000</span>
                </button>
              </li>
              <li>
                <button onClick={() => onOpenCertModal('iso-9001')} className="hover:text-[#1677FF] text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer text-left">
                  <ChevronRight className="w-3 h-3 text-[#1677FF] shrink-0" />
                  <span>ISO 9001:2008 Quality</span>
                </button>
              </li>
              <li>
                <button onClick={() => onOpenCertModal('ohsas-18001')} className="hover:text-[#1677FF] text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer text-left">
                  <ChevronRight className="w-3 h-3 text-[#1677FF] shrink-0" />
                  <span>OHSAS 18001:2007 Safety</span>
                </button>
              </li>
              <li>
                <button onClick={() => onOpenCertModal('carrier-award')} className="hover:text-[#1677FF] text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer text-left">
                  <ChevronRight className="w-3 h-3 text-[#1677FF] shrink-0" />
                  <span>Carrier USA Apex Award</span>
                </button>
              </li>
              <li>
                <button onClick={() => onOpenCertModal('lcci-membership')} className="hover:text-[#1677FF] text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer text-left">
                  <ChevronRight className="w-3 h-3 text-[#1677FF] shrink-0" />
                  <span>LCCI Corporate Member</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider font-display">
              Head Office Contact
            </h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                <span>10-Q, Johar Town, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1677FF] shrink-0" />
                <span>+92 (42) 3595 6625-6</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <span>WhatsApp: +92 (300) 8425 772</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1677FF] shrink-0" />
                <span className="text-slate-300">info@engineeringenterprises.com.pk</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SEO Industrial Coverage & Search Ranking Strip */}
      <div className="border-t border-[#1a2f45] bg-[#081522] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1677FF] block mb-1">
              Nationwide Industrial HVAC & MEP Service Network (Pakistan):
            </span>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              <strong className="text-slate-300">Punjab:</strong> Lahore (Sundar Industrial Estate, Quaid-e-Azam Industrial Estate Kot Lakhpat, Multan Road, Raiwind), Faisalabad (M3 Industrial City, Value Addition City), Gujranwala, Sialkot, Sheikhupura, Multan, Rawalpindi, Kasur, Rahim Yar Khan. | 
              <strong className="text-slate-300"> Sindh:</strong> Karachi (Korangi Industrial Area, SITE, Federal B Area, Landhi, Port Qasim, North Karachi), Nooriabad, Hyderabad, Sukkur. | 
              <strong className="text-slate-300"> KPK & Balochistan:</strong> Hattar Industrial Estate, Gadoon Amazai, Peshawar, Hub Balochistan, Quetta, Islamabad Capital Territory (I-9 / I-10 Industrial Areas).
            </p>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] text-slate-400">
            <span className="text-slate-300 font-semibold">Popular Searches:</span>
            <span>• Industrial Evaporative Cooling Pakistan</span>
            <span>• Veloair Cooling Pads Price</span>
            <span>• NFPA Fire Fighting Contractors Lahore</span>
            <span>• FM-200 Clean Agent Suppression System</span>
            <span>• PEC Licensed C4 MEP Contractors</span>
            <span>• Factory Shed Ventilation CFM Calculator</span>
            <span>• Industrial Air Handling Unit AHU Karachi</span>
            <span>• LT Switchboard & ATS Panel Manufacturers</span>
            <span>• Textile Mill Humidification & Cooling</span>
            <span>• Carrier International Award Winner Pakistan</span>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="bg-[#06101B] border-t border-[#122436] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Engineering Enterprises & Veloair Envirotech (Pvt) Ltd. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>NTN: 1219169-8 / 3969653-0</span>
            <span>STRN / PRA Registered</span>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
