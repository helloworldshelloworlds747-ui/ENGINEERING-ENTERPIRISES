import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Quote, 
  Star, 
  CheckCircle, 
  ShieldCheck, 
  ArrowRight,
  PhoneCall,
  X,
  Award,
  Flame,
  FileCheck
} from 'lucide-react';
import { CLIENTS, TESTIMONIALS } from '../data/engineeringData';
import { Client } from '../types';

interface ClientsAndTestimonialsProps {
  onSelectClientSectorForQuote?: (sectorName: string) => void;
}

export const ClientsAndTestimonials: React.FC<ClientsAndTestimonialsProps> = ({ 
  onSelectClientSectorForQuote 
}) => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const handleClientClick = (client: Client) => {
    setSelectedClient(client);
  };

  const TRUST_BADGES = [
    {
      title: 'ISO 9001:2008 Certified',
      subtitle: 'Quality Management System',
      description: 'Strict manufacturing, procurement & installation quality controls audited for compliance.',
      icon: Award,
      badge: 'Certified',
      color: 'blue'
    },
    {
      title: 'PEC Registered Category C4',
      subtitle: 'License # 20000',
      description: 'Pakistan Engineering Council recognized contractor for specialized MEP & HVAC execution.',
      icon: ShieldCheck,
      badge: 'Govt. Licensed',
      color: 'emerald'
    },
    {
      title: 'NFPA Compliant',
      subtitle: 'NFPA 13, 20 & 2001',
      description: 'Life safety fire fighting networks & clean agent gas suppression adhering to global fire standards.',
      icon: Flame,
      badge: 'Global Standard',
      color: 'rose'
    },
    {
      title: 'Carrier USA Apex Award',
      subtitle: 'Global HVAC Recognition',
      description: 'Directly headed by Carrier International USA Apex Award winner Engr. Mohammad Boota.',
      icon: FileCheck,
      badge: 'Excellence',
      color: 'amber'
    }
  ];

  return (
    <section id="clients" className="py-24 bg-[#F8FAFD] text-[#0B1B2B] relative border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3FF] border border-[#1677FF]/30 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Building2 className="w-3.5 h-3.5 text-[#1677FF]" />
            <span>Trusted by Industry Leaders Across Pakistan</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0B1B2B] font-display leading-tight">
            Our Prestigious Clients & Partners
          </h2>
          <p className="mt-4 text-[#5C6B7A] text-sm sm:text-base leading-relaxed">
            From national FMCG giants and major textile conglomerates to international restaurant chains and government institutions. Click any client to view turnkey installations.
          </p>
        </div>

        {/* Visual Trust Badges Section to Reinforce Authority & Reliability */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {TRUST_BADGES.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-5 border border-[#E2E8F0] hover:border-[#1677FF] transition-all duration-300 shadow-2xs hover:shadow-lg hover:shadow-[#1677FF]/10 group relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      badge.color === 'blue' ? 'bg-[#EBF3FF] text-[#1677FF]' :
                      badge.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                      badge.color === 'rose' ? 'bg-rose-50 text-rose-600' :
                      'bg-amber-50 text-amber-600'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      badge.color === 'blue' ? 'bg-[#EBF3FF] text-[#1677FF] border-[#1677FF]/30' :
                      badge.color === 'emerald' ? 'bg-emerald-50 text-emerald-700 border-emerald-300' :
                      badge.color === 'rose' ? 'bg-rose-50 text-rose-700 border-rose-300' :
                      'bg-amber-50 text-amber-800 border-amber-300'
                    }`}>
                      {badge.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-[#0B1B2B] group-hover:text-[#1677FF] transition-colors">
                    {badge.title}
                  </h4>
                  <div className="text-[11px] font-semibold text-[#1677FF] mt-0.5">
                    {badge.subtitle}
                  </div>
                  <p className="text-[12px] text-[#5C6B7A] mt-2 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Officially Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Grayscale Logo Marquee / Ribbon Strip */}
        <div className="mb-14 bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm overflow-hidden">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-ping" />
              <span className="text-xs uppercase font-bold text-[#5C6B7A] tracking-wider">
                Trusted by 100+ Leading Industrial, Commercial & Multinational Brands
              </span>
            </div>
            <span className="text-[11px] font-semibold text-[#1677FF] hidden sm:inline-block">
              Turnkey MEP & Cooling Contractor
            </span>
          </div>

          {/* Infinite Marquee Container */}
          <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <motion.div 
              className="flex items-center gap-6 sm:gap-8 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                ease: 'linear',
                duration: 28,
                repeat: Infinity,
              }}
            >
              {[...CLIENTS, ...CLIENTS].map((client, idx) => (
                <button
                  key={`marquee-${client.name}-${idx}`}
                  onClick={() => handleClientClick(client)}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] hover:border-[#1677FF] hover:bg-white transition-all group shrink-0 cursor-pointer shadow-2xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-200/80 group-hover:bg-[#EBF3FF] flex items-center justify-center font-black text-xs text-slate-600 group-hover:text-[#1677FF] transition-colors">
                    {client.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="text-left">
                    <div className="font-extrabold text-sm text-slate-700 group-hover:text-[#0B1B2B] transition-colors tracking-tight">
                      {client.name}
                    </div>
                    <div className="text-[10px] text-slate-400 group-hover:text-[#1677FF] font-medium transition-colors">
                      {client.category}
                    </div>
                  </div>
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Client Logos / Identity Grid - Fully Clickable */}
        <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-8 mb-20 shadow-xl shadow-[#0B1B2B]/5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {CLIENTS.map((client, idx) => (
              <button
                key={`client-grid-${client.name}-${idx}`}
                onClick={() => handleClientClick(client)}
                className="group p-4 bg-[#F8FAFD] border border-[#E2E8F0] hover:border-[#1677FF] hover:bg-white rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-200 hover:shadow-lg hover:shadow-[#0B1B2B]/5 cursor-pointer text-left w-full hover:-translate-y-0.5"
              >
                <div 
                  className="font-black text-base sm:text-lg font-display tracking-tight text-[#0B1B2B] group-hover:text-[#1677FF] transition-colors"
                >
                  {client.name}
                </div>
                <div className="text-[11px] text-[#5C6B7A] mt-1 font-semibold group-hover:text-[#0B1B2B]">
                  {client.category}
                </div>
                <div className="mt-2 text-[10px] text-[#1677FF] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-bold">
                  <span>View Project Specs</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Verified CEO Testimonials Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-4xl font-black text-[#0B1B2B] font-display">
              Client Testimonials
            </h3>
            <p className="text-xs sm:text-sm text-[#5C6B7A] mt-2">
              Real results, dramatic temperature improvements, and up to 80%-90% electricity bill reductions.
            </p>
          </div>

          {/* Testimonial Cards 3-Column Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="bg-white border border-[#E2E8F0] hover:border-[#1677FF] rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-[#0B1B2B]/5 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#1677FF]/20" />
                  </div>

                  <p className="text-xs sm:text-sm text-[#0B1B2B] leading-relaxed italic font-medium">
                    "{test.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                  <div className="font-bold text-[#0B1B2B] text-sm">
                    {test.name}
                  </div>
                  <div className="text-xs text-[#1677FF] font-semibold">
                    {test.title}, {test.company}
                  </div>
                  {test.location && (
                    <div className="text-[11px] text-[#5C6B7A] mt-0.5 font-medium">
                      {test.location}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Client Detail Popup Modal */}
      {selectedClient && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1B2B]/60 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedClient(null)}
        >
          <div 
            className="bg-white border border-[#E2E8F0] rounded-3xl max-w-md w-full p-6 text-[#0B1B2B] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedClient(null)}
              aria-label="Close client details"
              className="absolute top-4 right-4 min-h-[44px] min-w-[44px] rounded-xl bg-[#F8FAFD] text-[#5C6B7A] hover:text-[#0B1B2B] flex items-center justify-center cursor-pointer border border-[#E2E8F0]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#1677FF]/30 text-[#1677FF] text-xs font-bold mb-3">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Engineering Client</span>
            </div>

            <h3 className="text-2xl font-black text-[#0B1B2B] mb-1 font-display">
              {selectedClient.name}
            </h3>
            <p className="text-xs text-[#5C6B7A] font-semibold mb-4">
              Sector: {selectedClient.category}
            </p>

            <div className="bg-[#F8FAFD] p-4 rounded-2xl border border-[#E2E8F0] space-y-2 mb-4 text-xs">
              <div className="flex items-center justify-between text-[#5C6B7A]">
                <span>Deployed Solutions:</span>
                <span className="font-bold text-[#1677FF]">Evaporative Cooling / Fire / HVAC</span>
              </div>
              <div className="flex items-center justify-between text-[#5C6B7A]">
                <span>Standards Compliance:</span>
                <span className="font-bold text-[#0B1B2B]">PEC Category C4 & ISO 9001</span>
              </div>
              <div className="flex items-center justify-between text-[#5C6B7A]">
                <span>Performance Outcome:</span>
                <span className="font-bold text-emerald-700">80%+ Energy Savings Verified</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#E2E8F0]">
              <a
                href={`https://wa.me/923008425772?text=Hello%2C%20I%20saw%20your%20project%20for%20${encodeURIComponent(selectedClient.name)}%20(${encodeURIComponent(selectedClient.category)}).%20I%20would%20like%20a%20similar%20system%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-bold shadow flex items-center justify-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              {onSelectClientSectorForQuote && (
                <button
                  onClick={() => {
                    const cName = selectedClient.name;
                    setSelectedClient(null);
                    onSelectClientSectorForQuote(`Turnkey solution matching: ${cName} (${selectedClient.category})`);
                  }}
                  className="min-h-[44px] px-4 py-2.5 rounded-xl bg-[#1677FF] hover:bg-blue-600 active:bg-blue-700 text-white text-xs font-bold shadow-md shadow-[#1677FF]/20 cursor-pointer flex items-center justify-center"
                >
                  Request Similar Quote
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


