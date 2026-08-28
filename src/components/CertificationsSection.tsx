import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle,
  Eye
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/engineeringData';

interface CertificationsSectionProps {
  onOpenCertModal: (certId: string) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onOpenCertModal }) => {
  return (
    <section id="certifications" className="py-24 bg-[#F5F6F3] text-[#0B1B2B] relative border-t border-[#E2E6EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3FF] border border-[#1677FF]/30 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1677FF]" />
            <span>Government & International Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0B1B2B] font-display leading-tight">
            Official Certifications & Licenses
          </h2>
          <p className="mt-4 text-[#6B747C] text-sm sm:text-base leading-relaxed">
            Fully licensed and certified under statutory engineering bodies, quality assurance registries, and international safety councils.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-white border border-[#E2E6EA] hover:border-[#1677FF] rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#0B1B2B]/5 shadow-sm group hover:-translate-y-1 cursor-pointer"
              onClick={() => onOpenCertModal(cert.id)}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#EBF3FF] text-[#1677FF] border border-blue-200 text-[11px] font-bold">
                    {cert.category}
                  </span>
                  <Award className="w-5 h-5 text-amber-500" />
                </div>

                <h3 className="text-lg font-bold text-[#0B1B2B] group-hover:text-[#1677FF] transition-colors font-display">
                  {cert.title}
                </h3>

                <div className="text-xs text-[#6B747C] mt-1 font-medium">
                  {cert.issuingBody}
                </div>

                {cert.certNumber && (
                  <div className="text-xs font-bold text-emerald-800 mt-2 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200 inline-block">
                    {cert.certNumber}
                  </div>
                )}

                <p className="text-xs text-[#6B747C] mt-3 leading-relaxed">
                  {cert.summary}
                </p>

                <div className="mt-3 text-[11px] text-[#6B747C] bg-[#F5F6F3] p-3 rounded-2xl border border-[#E2E6EA]">
                  <span className="font-bold text-[#0B1B2B]">Approved Scope: </span>
                  {cert.scope}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E2E6EA] flex items-center justify-between">
                <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified Document
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenCertModal(cert.id);
                  }}
                  className="min-h-[44px] px-3 py-2 rounded-xl bg-blue-50/60 hover:bg-blue-100/80 active:bg-blue-200/80 text-xs font-bold text-[#1677FF] hover:text-blue-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Certificate</span>
                </button>
              </div>
            </div>
          ))}

          {/* Carrier Apex Award Special Card */}
          <div 
            className="bg-white border border-amber-300 rounded-3xl p-6 flex flex-col justify-between shadow-md hover:shadow-xl hover:shadow-[#0B1B2B]/5 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            onClick={() => onOpenCertModal('carrier-award')}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-[11px] font-bold">
                  International Recognition
                </span>
                <Award className="w-5 h-5 text-amber-600" />
              </div>

              <h3 className="text-lg font-bold text-[#0B1B2B] group-hover:text-amber-700 transition-colors font-display">
                Carrier International USA Apex Award
              </h3>
              <div className="text-xs text-[#6B747C] mt-1 font-medium">
                Carrier International Corporation, Syracuse, USA
              </div>

              <div className="text-xs font-bold text-amber-900 mt-2 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200 inline-block">
                Top 10 Worldwide Award Winner
              </div>

              <p className="text-xs text-[#6B747C] mt-3 leading-relaxed">
                Conferred to Founder Mr. Mohammad Boota by Carrier Corp President Jean Pierre van Rooy for outstanding HVAC execution in remote desert areas, royal palaces, and airports.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#E2E6EA] flex items-center justify-between">
              <span className="text-[11px] text-amber-800 font-bold">
                Presidential Citation
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenCertModal('carrier-award');
                }}
                className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Citation Record</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
