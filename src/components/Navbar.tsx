import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  ShieldCheck, 
  Sparkles,
  ExternalLink,
  MessageSquare,
  Wind,
  Flame,
  Zap,
  Cpu,
  Award,
  Building2,
  Factory,
  Layers,
  FileText,
  Calculator,
  HelpCircle,
  Clock,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS, CLIENTS } from '../data/engineeringData';
import { CompanyLogoMark } from './CompanyLogo';

interface NavbarProps {
  onOpenQuoteModal: (productName?: string) => void;
  onOpenCertModal: (certId?: string) => void;
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenQuoteModal, 
  onOpenCertModal, 
  onOpenChat 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = isScrolled ? 70 : 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileAccordion = (section: string) => {
    setMobileAccordion(mobileAccordion === section ? null : section);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-[#E2E6EA] shadow-md' 
        : 'bg-white border-b border-[#E2E6EA]'
    }`}>
      {/* Top Notification / Contact Bar (Smoothly collapses or condenses on scroll) */}
      <div className={`bg-[#0B1B2B] text-slate-300 text-xs transition-all duration-300 overflow-hidden ${
        isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-12 py-2 opacity-100 border-b border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a 
              href="tel:+924235956625" 
              className="flex items-center gap-1.5 hover:text-[#1677FF] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#1677FF]" />
              <span>+92 (42) 3595 6625-6</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a 
              href={COMPANY_INFO.whatsappUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors font-semibold text-emerald-400"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>WhatsApp: +92 (300) 8425 772</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a 
              href="mailto:info@engineeringenterprises.com.pk" 
              className="hidden lg:flex items-center gap-1.5 hover:text-[#1677FF] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#1677FF]" />
              <span>info@engineeringenterprises.com.pk</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div 
              onClick={() => onOpenCertModal('pec-license')}
              className="hidden sm:flex items-center gap-1.5 bg-[#14273C] px-2.5 py-0.5 rounded-full text-slate-200 border border-slate-700/60 cursor-pointer hover:border-[#1677FF] transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-bold text-[11px]">PEC License # 20000 (Category C4)</span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2">
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-6 h-6 rounded-full bg-[#14273C] text-slate-300 flex items-center justify-center hover:bg-[#1677FF] hover:text-white transition-all shadow-xs"
                title="Facebook: Engineering Enterprises"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={COMPANY_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Page"
                className="w-6 h-6 rounded-full bg-[#14273C] text-slate-300 flex items-center justify-center hover:bg-[#1677FF] hover:text-white transition-all shadow-xs"
                title="LinkedIn: Engineering Enterprises"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          
          {/* Official Engineering Enterprises Logo & Emblem */}
          <div 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            {/* Authentic Engineering Enterprises Geometric Structural Emblem */}
            <div className="relative group-hover:scale-105 transition-all duration-300">
              <CompanyLogoMark className="w-11 h-11 shadow-md shadow-[#24225A]/25 border border-slate-700/60 group-hover:border-[#1677FF]" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-[22px] font-black tracking-tight text-[#0B1B2B] font-display">
                  ENGINEERING
                </span>
                <span className="text-xl sm:text-[22px] font-black tracking-tight text-[#1677FF] group-hover:text-blue-600 transition-colors">
                  ENTERPRISES
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-widest text-[#1677FF] font-bold uppercase">
                  Veloair Envirotech
                </span>
                <span className="text-[10px] text-[#D4D9DE]">|</span>
                <span className="text-[10px] text-[#6B747C] font-semibold">Since 1992</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links & Mega Menus */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1.5 rounded-full bg-[#F5F6F3]/80 border border-[#E2E6EA]/80 backdrop-blur-md shadow-inner">
            
            {/* Home Link */}
            <button
              onClick={() => scrollToSection('hero')}
              className="px-3.5 py-1.5 text-xs xl:text-sm font-bold text-[#0B1B2B] hover:text-[#1677FF] hover:bg-white rounded-full transition-all duration-200 hover:shadow-xs cursor-pointer"
            >
              Home
            </button>

            {/* 1. Products Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => scrollToSection('products')}
                className={`flex items-center gap-1 px-3.5 py-1.5 text-xs xl:text-sm font-bold rounded-full transition-all duration-200 cursor-pointer ${
                  activeDropdown === 'products' ? 'text-white bg-[#1677FF] shadow-md shadow-[#1677FF]/25' : 'text-[#0B1B2B] hover:text-[#1677FF] hover:bg-white hover:shadow-xs'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180 text-white' : 'text-[#6B747C]'}`} />
              </button>

              {activeDropdown === 'products' && (
                <div className="absolute top-full -left-20 w-[780px] bg-white rounded-3xl shadow-2xl border border-[#E2E6EA] p-6 mt-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-12 gap-6">
                    {/* Categories Grid (8 cols) */}
                    <div className="col-span-8 grid grid-cols-2 gap-4">
                      
                      {/* Veloair Coolers */}
                      <div 
                        onClick={() => {
                          scrollToSection('products');
                          setActiveDropdown(null);
                        }}
                        className="p-3.5 rounded-2xl bg-[#F5F6F3] hover:bg-[#EBF3FF] hover:border-[#1677FF]/40 border border-transparent transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#1677FF] flex items-center justify-center">
                            <Wind className="w-4 h-4" />
                          </div>
                          <div className="font-bold text-sm text-[#0B1B2B] group-hover:text-[#1677FF]">
                            Veloair Coolers
                          </div>
                        </div>
                        <p className="text-xs text-[#6B747C] leading-relaxed">
                          Industrial evaporative cooling. Saves up to 90% electricity. 18,000 to 30,000 CFM airflow.
                        </p>
                      </div>

                      {/* Fire Fighting */}
                      <div 
                        onClick={() => {
                          scrollToSection('products');
                          setActiveDropdown(null);
                        }}
                        className="p-3.5 rounded-2xl bg-[#F5F6F3] hover:bg-rose-50 hover:border-rose-300 border border-transparent transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                            <Flame className="w-4 h-4" />
                          </div>
                          <div className="font-bold text-sm text-[#0B1B2B] group-hover:text-rose-600">
                            Fire Protection
                          </div>
                        </div>
                        <p className="text-xs text-[#6B747C] leading-relaxed">
                          NFPA hydrants, automatic sprinklers & FM-200 clean agent gas suppression.
                        </p>
                      </div>

                      {/* Central HVAC */}
                      <div 
                        onClick={() => {
                          scrollToSection('products');
                          setActiveDropdown(null);
                        }}
                        className="p-3.5 rounded-2xl bg-[#F5F6F3] hover:bg-[#EBF3FF] hover:border-[#1677FF]/40 border border-transparent transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                            <Cpu className="w-4 h-4" />
                          </div>
                          <div className="font-bold text-sm text-[#0B1B2B] group-hover:text-[#1677FF]">
                            HVAC & AHU Systems
                          </div>
                        </div>
                        <p className="text-xs text-[#6B747C] leading-relaxed">
                          Double-skin air handling units (AHU), ducted packaged units & industrial chillers.
                        </p>
                      </div>

                      {/* Electrical Panels */}
                      <div 
                        onClick={() => {
                          scrollToSection('products');
                          setActiveDropdown(null);
                        }}
                        className="p-3.5 rounded-2xl bg-[#F5F6F3] hover:bg-amber-50 hover:border-amber-300 border border-transparent transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                            <Zap className="w-4 h-4" />
                          </div>
                          <div className="font-bold text-sm text-[#0B1B2B] group-hover:text-amber-700">
                            Electrical Panels
                          </div>
                        </div>
                        <p className="text-xs text-[#6B747C] leading-relaxed">
                          Type-tested LT switchboards, ATS, PFI & motor control panels (MCC).
                        </p>
                      </div>
                    </div>

                    {/* Featured Product Preview (4 cols) */}
                    <div className="col-span-4 bg-gradient-to-br from-[#0B1B2B] to-[#14273C] rounded-2xl p-4 text-white flex flex-col justify-between shadow-md">
                      <div>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#1677FF] text-[10px] font-bold uppercase tracking-wider text-white">
                          Flagship Model
                        </span>
                        <h4 className="font-bold text-sm text-white mt-2.5">
                          Veloair 30,000 CFM Industrial System
                        </h4>
                        <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                          Ideal for textile sheds, FMCG hubs & large warehouses. 100% fresh conditioned air with 85%+ lower running cost.
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-700/60 mt-3">
                        <button
                          onClick={() => {
                            setActiveDropdown(null);
                            onOpenQuoteModal('Veloair 30,000 CFM Industrial Unit');
                          }}
                          className="w-full py-2 px-3 rounded-xl bg-[#1677FF] hover:bg-blue-600 text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                        >
                          <span>Get Sizing & Pricing</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => scrollToSection('applications')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  activeDropdown === 'solutions' ? 'text-[#1677FF] bg-[#EBF3FF]' : 'text-[#0B1B2B] hover:text-[#1677FF] hover:bg-[#F5F6F3]'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180 text-[#1677FF]' : 'text-[#6B747C]'}`} />
              </button>

              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-3xl shadow-2xl border border-[#E2E6EA] p-3 mt-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div 
                    onClick={() => {
                      scrollToSection('applications');
                      setActiveDropdown(null);
                    }}
                    className="p-3 rounded-2xl hover:bg-[#EBF3FF] cursor-pointer group transition-colors"
                  >
                    <div className="font-bold text-sm text-[#0B1B2B] group-hover:text-[#1677FF]">Industrial Factory Cooling</div>
                    <div className="text-xs text-[#6B747C]">Shed ventilation, textile weaving & heat relief</div>
                  </div>
                  <div 
                    onClick={() => {
                      scrollToSection('products');
                      setActiveDropdown(null);
                    }}
                    className="p-3 rounded-2xl hover:bg-[#EBF3FF] cursor-pointer group transition-colors"
                  >
                    <div className="font-bold text-sm text-[#0B1B2B] group-hover:text-[#1677FF]">NFPA Fire Suppression</div>
                    <div className="text-xs text-[#6B747C]">Hydrant networks & FM-200 server room protection</div>
                  </div>
                  <div 
                    onClick={() => {
                      scrollToSection('applications');
                      setActiveDropdown(null);
                    }}
                    className="p-3 rounded-2xl hover:bg-[#EBF3FF] cursor-pointer group transition-colors"
                  >
                    <div className="font-bold text-sm text-[#0B1B2B] group-hover:text-[#1677FF]">Poultry & Agriculture Climate</div>
                    <div className="text-xs text-[#6B747C]">Precision CelDek pads & negative pressure fans</div>
                  </div>
                  <div 
                    onClick={() => {
                      scrollToSection('energy-calculator');
                      setActiveDropdown(null);
                    }}
                    className="p-3 rounded-2xl hover:bg-[#EBF3FF] cursor-pointer group transition-colors"
                  >
                    <div className="font-bold text-sm text-[#1677FF]">Energy Bill Retrofits (90% Save)</div>
                    <div className="text-xs text-[#6B747C]">Replace high-draw DX ACs with Veloair systems</div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Industries Link */}
            <button
              onClick={() => scrollToSection('applications')}
              className="px-3.5 py-1.5 text-xs xl:text-sm font-bold text-[#0B1B2B] hover:text-[#1677FF] hover:bg-white rounded-full transition-all duration-200 hover:shadow-xs cursor-pointer"
            >
              Industries
            </button>

            {/* 4. Projects & Clients Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('projects')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => scrollToSection('clients')}
                className={`flex items-center gap-1 px-3.5 py-1.5 text-xs xl:text-sm font-bold rounded-full transition-all duration-200 cursor-pointer ${
                  activeDropdown === 'projects' ? 'text-white bg-[#1677FF] shadow-md shadow-[#1677FF]/25' : 'text-[#0B1B2B] hover:text-[#1677FF] hover:bg-white hover:shadow-xs'
                }`}
              >
                <span>Projects</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'projects' ? 'rotate-180 text-white' : 'text-[#6B747C]'}`} />
              </button>

              {activeDropdown === 'projects' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-3xl shadow-2xl border border-[#E2E6EA] p-4 mt-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#6B747C] px-2 mb-2">
                    500+ Turnkey Deliveries Across Pakistan
                  </div>
                  <div 
                    onClick={() => {
                      scrollToSection('clients');
                      setActiveDropdown(null);
                    }}
                    className="p-3 rounded-2xl hover:bg-[#EBF3FF] cursor-pointer group transition-colors"
                  >
                    <div className="font-bold text-sm text-[#0B1B2B] group-hover:text-[#1677FF]">Prestigious Client Roster</div>
                    <div className="text-xs text-[#6B747C]">Nestle, Packages Ltd, Guard Filters, Al-Karam, Descon</div>
                  </div>
                  <div 
                    onClick={() => {
                      scrollToSection('clients');
                      setActiveDropdown(null);
                    }}
                    className="p-3 rounded-2xl hover:bg-[#EBF3FF] cursor-pointer group transition-colors"
                  >
                    <div className="font-bold text-sm text-[#0B1B2B] group-hover:text-[#1677FF]">CEO & Client Testimonials</div>
                    <div className="text-xs text-[#6B747C]">Verified temperature drop & 80%+ bill reduction audits</div>
                  </div>
                </div>
              )}
            </div>

            {/* 5. About Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => scrollToSection('about-company')}
                className={`flex items-center gap-1 px-3.5 py-1.5 text-xs xl:text-sm font-bold rounded-full transition-all duration-200 cursor-pointer ${
                  activeDropdown === 'about' ? 'text-white bg-[#1677FF] shadow-md shadow-[#1677FF]/25' : 'text-[#0B1B2B] hover:text-[#1677FF] hover:bg-white hover:shadow-xs'
                }`}
              >
                <span>About</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-white' : 'text-[#6B747C]'}`} />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-3xl shadow-2xl border border-[#E2E6EA] p-3 mt-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div 
                    onClick={() => {
                      scrollToSection('about-company');
                      setActiveDropdown(null);
                    }}
                    className="p-3 rounded-2xl hover:bg-[#EBF3FF] cursor-pointer group transition-colors"
                  >
                    <div className="font-bold text-sm text-[#0B1B2B] group-hover:text-[#1677FF]">Company Profile & History</div>
                    <div className="text-xs text-[#6B747C]">Established 1992 • 30+ Years of Engineering</div>
                  </div>
                  <div 
                    onClick={() => {
                      scrollToSection('ceo-profile');
                      setActiveDropdown(null);
                    }}
                    className="p-3 rounded-2xl hover:bg-[#EBF3FF] cursor-pointer group transition-colors"
                  >
                    <div className="font-bold text-sm text-[#0B1B2B] group-hover:text-[#1677FF]">CEO & Carrier Apex Award</div>
                    <div className="text-xs text-[#6B747C]">Founder Mr. Mohammad Boota (Carrier USA Awarded)</div>
                  </div>
                  <div 
                    onClick={() => {
                      scrollToSection('project-ideology');
                      setActiveDropdown(null);
                    }}
                    className="p-3 rounded-2xl hover:bg-[#EBF3FF] cursor-pointer group transition-colors"
                  >
                    <div className="font-bold text-sm text-[#0B1B2B] group-hover:text-[#1677FF]">Project Ideology & Values</div>
                    <div className="text-xs text-[#6B747C]">Innovation, Enhancement, Improvement & Growth</div>
                  </div>
                  <div 
                    onClick={() => {
                      scrollToSection('roadmap');
                      setActiveDropdown(null);
                    }}
                    className="p-3 rounded-2xl hover:bg-[#EBF3FF] cursor-pointer group transition-colors"
                  >
                    <div className="font-bold text-sm text-[#1677FF]">🗺️ 6-Stage Project Roadmap</div>
                    <div className="text-xs text-[#6B747C]">Lifecycle from Site Survey to TAB Commissioning</div>
                  </div>
                </div>
              )}
            </div>

            {/* 6. Certifications Dropdown / Modal Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('certifications')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => scrollToSection('certifications')}
                className={`flex items-center gap-1 px-3.5 py-1.5 text-xs xl:text-sm font-bold rounded-full transition-all duration-200 cursor-pointer ${
                  activeDropdown === 'certifications' ? 'text-white bg-[#1677FF] shadow-md shadow-[#1677FF]/25' : 'text-[#0B1B2B] hover:text-[#1677FF] hover:bg-white hover:shadow-xs'
                }`}
              >
                <span>Certifications</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'certifications' ? 'rotate-180 text-white' : 'text-[#6B747C]'}`} />
              </button>

              {activeDropdown === 'certifications' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-3xl shadow-2xl border border-[#E2E6EA] p-3 mt-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div 
                    onClick={() => {
                      setActiveDropdown(null);
                      onOpenCertModal('pec-license');
                    }}
                    className="p-3 rounded-2xl hover:bg-[#EBF3FF] cursor-pointer group transition-colors flex items-start gap-3"
                  >
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-[#0B1B2B] group-hover:text-[#1677FF]">PEC License # 20000</div>
                      <div className="text-xs text-[#6B747C]">Category C4 - Specialized ME01/EE04</div>
                    </div>
                  </div>

                  <div 
                    onClick={() => {
                      setActiveDropdown(null);
                      onOpenCertModal('carrier-award');
                    }}
                    className="p-3 rounded-2xl hover:bg-amber-50 cursor-pointer group transition-colors flex items-start gap-3"
                  >
                    <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-[#0B1B2B] group-hover:text-amber-700">Carrier USA Apex Award</div>
                      <div className="text-xs text-[#6B747C]">Top 10 Global Presidential Award</div>
                    </div>
                  </div>

                  <div 
                    onClick={() => {
                      setActiveDropdown(null);
                      onOpenCertModal('iso-9001');
                    }}
                    className="p-3 rounded-2xl hover:bg-[#EBF3FF] cursor-pointer group transition-colors flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-[#0B1B2B] group-hover:text-[#1677FF]">ISO 9001:2008 & OHSAS 18001</div>
                      <div className="text-xs text-[#6B747C]">Quality management & safety standard</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 7. Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => scrollToSection('energy-calculator')}
                className={`flex items-center gap-1 px-3.5 py-1.5 text-xs xl:text-sm font-bold rounded-full transition-all duration-200 cursor-pointer ${
                  activeDropdown === 'resources' ? 'text-white bg-[#1677FF] shadow-md shadow-[#1677FF]/25' : 'text-[#0B1B2B] hover:text-[#1677FF] hover:bg-white hover:shadow-xs'
                }`}
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180 text-white' : 'text-[#6B747C]'}`} />
              </button>

              {activeDropdown === 'resources' && (
                <div className="absolute top-full right-0 w-80 bg-white rounded-3xl shadow-2xl border border-[#E2E6EA] p-3 mt-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div 
                    onClick={() => {
                      scrollToSection('energy-calculator');
                      setActiveDropdown(null);
                    }}
                    className="p-3 rounded-2xl hover:bg-[#EBF3FF] cursor-pointer group transition-colors flex items-start gap-3"
                  >
                    <Calculator className="w-5 h-5 text-[#1677FF] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-[#1677FF]">⚡ CFM & Electricity Calculator</div>
                      <div className="text-xs text-[#6B747C]">Calculate instant energy and monthly bill savings</div>
                    </div>
                  </div>

                  <div 
                    onClick={() => {
                      scrollToSection('insights');
                      setActiveDropdown(null);
                    }}
                    className="p-3 rounded-2xl hover:bg-[#EBF3FF] cursor-pointer group transition-colors flex items-start gap-3"
                  >
                    <FileText className="w-5 h-5 text-[#6B747C] shrink-0 mt-0.5 group-hover:text-[#1677FF]" />
                    <div>
                      <div className="font-bold text-sm text-[#0B1B2B] group-hover:text-[#1677FF]">Engineering Insights & Articles</div>
                      <div className="text-xs text-[#6B747C]">Technical guides, evaporative physics & trends</div>
                    </div>
                  </div>

                  <div 
                    onClick={() => {
                      scrollToSection('faqs');
                      setActiveDropdown(null);
                    }}
                    className="p-3 rounded-2xl hover:bg-[#EBF3FF] cursor-pointer group transition-colors flex items-start gap-3"
                  >
                    <HelpCircle className="w-5 h-5 text-[#6B747C] shrink-0 mt-0.5 group-hover:text-[#1677FF]" />
                    <div>
                      <div className="font-bold text-sm text-[#0B1B2B] group-hover:text-[#1677FF]">Frequently Asked Questions</div>
                      <div className="text-xs text-[#6B747C]">Maintenance, water consumption & ROI answers</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 8. Contact Link */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-3.5 py-1.5 text-xs xl:text-sm font-bold text-[#0B1B2B] hover:text-[#1677FF] hover:bg-white rounded-full transition-all duration-200 hover:shadow-xs cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Highly Attractive Action CTAs: Get a Quote, WhatsApp & AI Chat */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* WhatsApp Quick Action Button */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-3.5 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-emerald-600/30 flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0 select-none overflow-hidden"
              title="Chat with Technical Engineer on WhatsApp"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping absolute left-3.5"></span>
              <span className="w-2 h-2 rounded-full bg-white relative"></span>
              <span className="tracking-wide">WhatsApp</span>
            </a>

            {/* Glowing & Shimmering 'Get a Quote' Primary Action Button */}
            <button
              onClick={() => onOpenQuoteModal()}
              className="group relative px-4 py-2 rounded-full bg-gradient-to-r from-[#1677FF] via-[#2F8BFF] to-[#0052CC] hover:from-[#2F8BFF] hover:to-[#1677FF] text-white font-bold text-xs transition-all duration-300 shadow-md shadow-[#1677FF]/30 hover:shadow-xl hover:shadow-[#1677FF]/40 flex items-center gap-2 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 select-none overflow-hidden"
            >
              {/* Shimmer Light Sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
              
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
              <span className="tracking-wide">Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] p-2.5 rounded-2xl text-[#0B1B2B] bg-[#F5F6F3] hover:bg-[#E2E6EA] active:scale-95 transition-all flex items-center justify-center cursor-pointer border border-[#E2E6EA]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#0B1B2B]" /> : <Menu className="w-6 h-6 text-[#0B1B2B]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Premium Mobile Full Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2E6EA] px-4 pt-3.5 pb-10 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          
          {/* Quick Header in Mobile with Touch Contact Pills */}
          <div className="bg-[#0B1B2B] text-white p-3.5 rounded-2xl border border-[#14273C] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">Engineering Enterprises</span>
              </div>
              <div 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCertModal('pec-license');
                }}
                className="text-[11px] font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/40 cursor-pointer"
              >
                PEC C4 #20000
              </div>
            </div>

            {/* Quick 1-tap dial and WhatsApp buttons on mobile */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-3 py-2 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-all"
              >
                <span>WhatsApp Tech</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChat();
                }}
                className="min-h-[44px] px-3 py-2 rounded-xl bg-[#1677FF] active:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Consultant</span>
              </button>
            </div>
          </div>

          {/* Primary Navigation Sections */}
          <div className="space-y-1.5">
            {/* Home */}
            <button
              onClick={() => scrollToSection('hero')}
              className="w-full min-h-[48px] text-left px-4 py-3 rounded-2xl font-bold text-[#0B1B2B] hover:bg-[#F5F6F3] active:bg-[#EBF3FF] flex items-center justify-between transition-colors"
            >
              <span className="text-sm">Home & Engineering Overview</span>
              <ChevronRight className="w-4 h-4 text-[#6B747C]" />
            </button>

            {/* Products Accordion */}
            <div className="border border-[#E2E6EA] rounded-2xl overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleMobileAccordion('products')}
                className="w-full min-h-[50px] text-left px-4 py-3.5 font-bold text-[#0B1B2B] bg-[#F8F9FA] active:bg-[#F0F2F5] flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#EBF3FF] text-[#1677FF] flex items-center justify-center">
                    <Wind className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm">Products & Systems Catalog</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-[#6B747C] transition-transform duration-200 ${mobileAccordion === 'products' ? 'rotate-180 text-[#1677FF]' : ''}`} />
              </button>

              {mobileAccordion === 'products' && (
                <div className="p-2.5 space-y-1.5 bg-white border-t border-[#E2E6EA]">
                  <div 
                    onClick={() => scrollToSection('products')}
                    className="min-h-[50px] p-3 rounded-xl hover:bg-[#EBF3FF] active:bg-[#EBF3FF] cursor-pointer transition-colors"
                  >
                    <div className="font-bold text-xs text-[#0B1B2B] flex items-center justify-between">
                      <span>Veloair Evaporative Coolers</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">90% Save</span>
                    </div>
                    <div className="text-[11px] text-[#6B747C] mt-0.5">18,000 to 30,000 CFM units & axial industrial fans</div>
                  </div>

                  <div 
                    onClick={() => scrollToSection('products')}
                    className="min-h-[50px] p-3 rounded-xl hover:bg-rose-50 active:bg-rose-50 cursor-pointer transition-colors"
                  >
                    <div className="font-bold text-xs text-[#0B1B2B] flex items-center justify-between">
                      <span>Fire Fighting & FM-200 Clean Agent</span>
                      <span className="text-[10px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full font-bold">NFPA Std</span>
                    </div>
                    <div className="text-[11px] text-[#6B747C] mt-0.5">Hydrant networks, sprinklers & suppression cylinders</div>
                  </div>

                  <div 
                    onClick={() => scrollToSection('products')}
                    className="min-h-[50px] p-3 rounded-xl hover:bg-[#EBF3FF] active:bg-[#EBF3FF] cursor-pointer transition-colors"
                  >
                    <div className="font-bold text-xs text-[#0B1B2B] flex items-center justify-between">
                      <span>Central HVAC & Double-Skin AHUs</span>
                      <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-bold">Carrier Specs</span>
                    </div>
                    <div className="text-[11px] text-[#6B747C] mt-0.5">Modular air handling units, chillers & ducting works</div>
                  </div>

                  <div 
                    onClick={() => scrollToSection('products')}
                    className="min-h-[50px] p-3 rounded-xl hover:bg-amber-50 active:bg-amber-50 cursor-pointer transition-colors"
                  >
                    <div className="font-bold text-xs text-[#0B1B2B] flex items-center justify-between">
                      <span>Electrical Switchboards & Panels</span>
                      <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">IP54/65</span>
                    </div>
                    <div className="text-[11px] text-[#6B747C] mt-0.5">LT distribution, ATS sync, PFI power factor plants</div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions & Industries */}
            <button
              onClick={() => scrollToSection('applications')}
              className="w-full min-h-[48px] text-left px-4 py-3 rounded-2xl font-bold text-[#0B1B2B] hover:bg-[#F5F6F3] active:bg-[#EBF3FF] flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Factory className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm">Sector Solutions & Case Studies</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#6B747C]" />
            </button>

            {/* Energy Savings Calculator CTA */}
            <button
              onClick={() => scrollToSection('energy-calculator')}
              className="w-full min-h-[52px] text-left px-4 py-3 rounded-2xl font-bold text-[#1677FF] bg-[#EBF3FF] active:bg-[#dbe9fe] border border-[#1677FF]/30 flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-[#1677FF] text-white flex items-center justify-center">
                  <Calculator className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-[#1677FF]">⚡ Energy & CFM Calculator</div>
                  <div className="text-[11px] text-[#1677FF]/80 font-normal">Calculate instant 90% power bill savings</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#1677FF]" />
            </button>

            {/* Technical Blueprints & Infographics */}
            <button
              onClick={() => scrollToSection('infographics')}
              className="w-full min-h-[48px] text-left px-4 py-3 rounded-2xl font-bold text-[#0B1B2B] hover:bg-[#F5F6F3] active:bg-[#EBF3FF] flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm">Interactive System Blueprints</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#6B747C]" />
            </button>

            {/* Projects & Clients */}
            <button
              onClick={() => scrollToSection('clients')}
              className="w-full min-h-[48px] text-left px-4 py-3 rounded-2xl font-bold text-[#0B1B2B] hover:bg-[#F5F6F3] active:bg-[#EBF3FF] flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-slate-100 text-[#0B1B2B] flex items-center justify-center">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm">Prestigious Clients & Projects</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#6B747C]" />
            </button>

            {/* About Company & Leadership Accordion */}
            <div className="border border-[#E2E6EA] rounded-2xl overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleMobileAccordion('about')}
                className="w-full min-h-[50px] text-left px-4 py-3.5 font-bold text-[#0B1B2B] bg-[#F8F9FA] active:bg-[#F0F2F5] flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm">About Company & Leadership</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-[#6B747C] transition-transform duration-200 ${mobileAccordion === 'about' ? 'rotate-180 text-[#1677FF]' : ''}`} />
              </button>

              {mobileAccordion === 'about' && (
                <div className="p-2.5 space-y-1.5 bg-white border-t border-[#E2E6EA]">
                  <div 
                    onClick={() => scrollToSection('about-company')}
                    className="min-h-[48px] p-3 rounded-xl hover:bg-[#EBF3FF] active:bg-[#EBF3FF] cursor-pointer transition-colors"
                  >
                    <div className="font-bold text-xs text-[#0B1B2B]">30+ Years Legacy (Since 1992)</div>
                    <div className="text-[11px] text-[#6B747C]">Pioneers of energy-efficient cooling in Pakistan</div>
                  </div>
                  <div 
                    onClick={() => scrollToSection('ceo-profile')}
                    className="min-h-[48px] p-3 rounded-xl hover:bg-[#EBF3FF] active:bg-[#EBF3FF] cursor-pointer transition-colors"
                  >
                    <div className="font-bold text-xs text-[#0B1B2B]">CEO Mohammad Boota Profile</div>
                    <div className="text-[11px] text-[#6B747C]">Carrier International USA Apex Award Winner</div>
                  </div>
                  <div 
                    onClick={() => scrollToSection('roadmap')}
                    className="min-h-[48px] p-3 rounded-xl hover:bg-[#EBF3FF] active:bg-[#EBF3FF] cursor-pointer transition-colors"
                  >
                    <div className="font-bold text-xs text-[#1677FF]">🗺️ 6-Stage Project Execution Roadmap</div>
                    <div className="text-[11px] text-[#6B747C]">From site survey to TAB commissioning</div>
                  </div>
                </div>
              )}
            </div>

            {/* Certifications Modal Triggers in Mobile */}
            <div className="border border-[#E2E6EA] rounded-2xl overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleMobileAccordion('certs')}
                className="w-full min-h-[50px] text-left px-4 py-3.5 font-bold text-[#0B1B2B] bg-[#F8F9FA] active:bg-[#F0F2F5] flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm">Certifications & Licenses</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-[#6B747C] transition-transform duration-200 ${mobileAccordion === 'certs' ? 'rotate-180 text-[#1677FF]' : ''}`} />
              </button>

              {mobileAccordion === 'certs' && (
                <div className="p-2.5 space-y-1.5 bg-white border-t border-[#E2E6EA]">
                  <div 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenCertModal('pec-license');
                    }}
                    className="min-h-[48px] p-3 rounded-xl hover:bg-[#EBF3FF] active:bg-[#EBF3FF] cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <span className="font-bold text-xs text-[#0B1B2B]">PEC License # 20000 (Category C4)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#1677FF]" />
                  </div>
                  <div 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenCertModal('carrier-award');
                    }}
                    className="min-h-[48px] p-3 rounded-xl hover:bg-amber-50 active:bg-amber-50 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <span className="font-bold text-xs text-amber-800">Carrier USA Apex Global Award</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-700" />
                  </div>
                  <div 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenCertModal('iso-9001');
                    }}
                    className="min-h-[48px] p-3 rounded-xl hover:bg-[#EBF3FF] active:bg-[#EBF3FF] cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <span className="font-bold text-xs text-[#0B1B2B]">ISO 9001:2008 Standard</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#1677FF]" />
                  </div>
                </div>
              )}
            </div>

            {/* Resources & Insights */}
            <button
              onClick={() => scrollToSection('insights')}
              className="w-full min-h-[48px] text-left px-4 py-3 rounded-2xl font-bold text-[#0B1B2B] hover:bg-[#F5F6F3] active:bg-[#EBF3FF] flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                  <FileText className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm">Technical Resources & Articles</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#6B747C]" />
            </button>

            {/* FAQs */}
            <button
              onClick={() => scrollToSection('faqs')}
              className="w-full min-h-[48px] text-left px-4 py-3 rounded-2xl font-bold text-[#0B1B2B] hover:bg-[#F5F6F3] active:bg-[#EBF3FF] flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                  <HelpCircle className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm">Frequently Asked Questions (FAQ)</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#6B747C]" />
            </button>

            {/* Contact */}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full min-h-[48px] text-left px-4 py-3 rounded-2xl font-bold text-[#0B1B2B] hover:bg-[#F5F6F3] active:bg-[#EBF3FF] flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm">Nationwide Offices & Contact</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#6B747C]" />
            </button>
          </div>

          {/* Action CTAs in Mobile with high touch targets */}
          <div className="pt-3 border-t border-[#E2E6EA] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full min-h-[50px] py-3.5 px-4 rounded-2xl bg-[#1677FF] hover:bg-blue-600 active:bg-blue-700 text-white font-bold text-sm text-center cursor-pointer shadow-md shadow-[#1677FF]/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get a Turnkey Engineering Quote</span>
            </button>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[50px] py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-all"
            >
              <span>Connect on WhatsApp (+92 300 8425772)</span>
            </a>

            {/* Direct Dial Options */}
            <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
              <a
                href="tel:+924235956625"
                className="min-h-[44px] p-2.5 rounded-xl bg-[#F5F6F3] border border-[#E2E6EA] text-[#0B1B2B] hover:text-[#1677FF] flex items-center justify-center gap-1.5 font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#1677FF]" />
                <span>Lahore Office</span>
              </a>
              <a
                href="tel:+922134320217"
                className="min-h-[44px] p-2.5 rounded-xl bg-[#F5F6F3] border border-[#E2E6EA] text-[#0B1B2B] hover:text-[#1677FF] flex items-center justify-center gap-1.5 font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#1677FF]" />
                <span>Karachi Office</span>
              </a>
            </div>

            {/* Social Icons Footer in Mobile */}
            <div className="flex items-center justify-between pt-2 px-1 text-xs text-[#6B747C]">
              <span>Follow Official Channels:</span>
              <div className="flex items-center gap-2">
                <a 
                  href={COMPANY_INFO.facebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="min-h-[40px] min-w-[40px] rounded-xl bg-[#F5F6F3] border border-[#E2E6EA] text-[#0B1B2B] flex items-center justify-center hover:bg-[#1677FF] hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href={COMPANY_INFO.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="min-h-[40px] min-w-[40px] rounded-xl bg-[#F5F6F3] border border-[#E2E6EA] text-[#0B1B2B] flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
