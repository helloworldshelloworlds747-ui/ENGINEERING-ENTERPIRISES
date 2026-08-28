import React, { useState } from 'react';
import { 
  Building2, 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink,
  Sparkles,
  PhoneCall,
  X
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

  return (
    <section id="clients" className="py-24 bg-[#F5F6F3] text-[#0B1B2B] relative border-t border-[#E2E6EA]">
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
          <p className="mt-4 text-[#6B747C] text-sm sm:text-base leading-relaxed">
            From national FMCG giants and major textile conglomerates to international restaurant chains and government institutions. Click any client to view turnkey installations.
          </p>
        </div>

        {/* Client Logos / Identity Grid - Fully Clickable */}
        <div className="bg-white border border-[#E2E6EA] rounded-3xl p-6 sm:p-8 mb-20 shadow-xl shadow-[#0B1B2B]/5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {CLIENTS.map((client, idx) => (
              <button
                key={idx}
                onClick={() => handleClientClick(client)}
                className="group p-4 bg-[#F5F6F3] border border-[#E2E6EA] hover:border-[#1677FF] hover:bg-white rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-200 hover:shadow-lg hover:shadow-[#0B1B2B]/5 cursor-pointer text-left w-full hover:-translate-y-0.5"
              >
                <div 
                  className="font-black text-base sm:text-lg font-display tracking-tight text-[#0B1B2B] group-hover:text-[#1677FF] transition-colors"
                >
                  {client.name}
                </div>
                <div className="text-[11px] text-[#6B747C] mt-1 font-semibold group-hover:text-[#0B1B2B]">
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
            <p className="text-xs sm:text-sm text-[#6B747C] mt-2">
              Real results, dramatic temperature improvements, and up to 80%-90% electricity bill reductions.
            </p>
          </div>

          {/* Testimonial Cards 3-Column Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="bg-white border border-[#E2E6EA] hover:border-[#1677FF] rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-[#0B1B2B]/5 transition-all duration-300 group"
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

                <div className="mt-6 pt-4 border-t border-[#E2E6EA]">
                  <div className="font-bold text-[#0B1B2B] text-sm">
                    {test.name}
                  </div>
                  <div className="text-xs text-[#1677FF] font-semibold">
                    {test.title}, {test.company}
                  </div>
                  {test.location && (
                    <div className="text-[11px] text-[#6B747C] mt-0.5 font-medium">
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
            className="bg-white border border-[#E2E6EA] rounded-3xl max-w-md w-full p-6 text-[#0B1B2B] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedClient(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-[#F5F6F3] text-[#6B747C] hover:text-[#0B1B2B] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#1677FF]/30 text-[#1677FF] text-xs font-bold mb-3">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Engineering Client</span>
            </div>

            <h3 className="text-2xl font-black text-[#0B1B2B] mb-1 font-display">
              {selectedClient.name}
            </h3>
            <p className="text-xs text-[#6B747C] font-semibold mb-4">
              Sector: {selectedClient.category}
            </p>

            <div className="bg-[#F5F6F3] p-4 rounded-2xl border border-[#E2E6EA] space-y-2 mb-4 text-xs">
              <div className="flex items-center justify-between text-[#6B747C]">
                <span>Deployed Solutions:</span>
                <span className="font-bold text-[#1677FF]">Evaporative Cooling / Fire / HVAC</span>
              </div>
              <div className="flex items-center justify-between text-[#6B747C]">
                <span>Standards Compliance:</span>
                <span className="font-bold text-[#0B1B2B]">PEC Category C4 & ISO 9001</span>
              </div>
              <div className="flex items-center justify-between text-[#6B747C]">
                <span>Performance Outcome:</span>
                <span className="font-bold text-emerald-700">80%+ Energy Savings Verified</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#E2E6EA]">
              <a
                href={`https://wa.me/923008425772?text=Hello%2C%20I%20saw%20your%20project%20for%20${encodeURIComponent(selectedClient.name)}%20(${encodeURIComponent(selectedClient.category)}).%20I%20would%20like%20a%20similar%20system%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow flex items-center gap-1.5"
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
                  className="px-4 py-2 rounded-xl bg-[#1677FF] hover:bg-blue-600 text-white text-xs font-bold shadow-md shadow-[#1677FF]/20 cursor-pointer"
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

