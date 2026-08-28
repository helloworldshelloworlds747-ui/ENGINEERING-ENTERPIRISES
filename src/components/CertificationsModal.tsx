import React from 'react';
import { X, Award, ShieldCheck, CheckCircle2, Download, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS, COMPANY_INFO } from '../data/engineeringData';

interface CertificationsModalProps {
  certId: string | null;
  onClose: () => void;
}

export const CertificationsModal: React.FC<CertificationsModalProps> = ({ certId, onClose }) => {
  if (!certId) return null;

  const cert = CERTIFICATIONS.find((c) => c.id === certId);
  const isCarrier = certId === 'carrier-award';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1B2B]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border border-[#E2E6EA] rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-[#0B1B2B] shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#F5F6F3] text-[#6B747C] hover:text-[#0B1B2B] hover:bg-[#E2E6EA] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isCarrier ? (
          <div>
            <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" />
              <span>International Carrier Corporation Award</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#0B1B2B] font-display">
              Apex - Appreciation of Excellence Award
            </h3>
            <div className="text-sm font-bold text-amber-700 mt-1">
              Carrier International Corporation (Syracuse, New York, USA)
            </div>

            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 my-6 space-y-4">
              <div className="text-xs sm:text-sm text-[#0B1B2B] leading-relaxed font-serif italic border-l-2 border-amber-500 pl-4">
                "The APEX program was started by Carrier International Corporation as a means of identifying and recognizing employees who make extraordinary contributions to the success of the company... Our Middle East Zone was singled out with one of the top ten awards in the person of Mohammed Boota, a service mechanic at Carrier Saudi Service Company in Riyadh. His willingness to tackle jobs in remote desert areas has improved sales threefold."
              </div>

              <div className="text-xs text-[#6B747C] font-semibold flex justify-between items-center pt-2 border-t border-amber-200">
                <span>Signatory: Jean Pierre van Rooy (President, Carrier International)</span>
                <span className="text-amber-800 font-bold">Top 10 Global Honoree</span>
              </div>
            </div>

            <div className="bg-[#F5F6F3] p-4 rounded-2xl border border-[#E2E6EA] text-xs text-[#6B747C] space-y-2">
              <div className="font-bold text-[#0B1B2B]">Significance to Engineering Enterprises:</div>
              <p className="leading-relaxed">
                This elite foundational training in Carrier global engineering standards drives every HVAC and Veloair cooling solution we design, manufacture, and erect in Pakistan today.
              </p>
            </div>
          </div>
        ) : cert ? (
          <div>
            <div className="flex items-center gap-2 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>{cert.category}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#0B1B2B] font-display">
              {cert.title}
            </h3>
            <div className="text-sm font-bold text-[#1677FF] mt-1">
              Issued by: {cert.issuingBody}
            </div>

            <div className="bg-[#F5F6F3] border border-[#E2E6EA] rounded-2xl p-5 my-6 space-y-3">
              {cert.certNumber && (
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#6B747C] font-semibold">Registration / License #:</span>
                  <span className="text-emerald-700 font-mono font-bold">{cert.certNumber}</span>
                </div>
              )}

              {cert.validity && (
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#6B747C] font-semibold">Status / Validity:</span>
                  <span className="text-[#0B1B2B] font-bold">{cert.validity}</span>
                </div>
              )}

              <div className="pt-2 border-t border-[#E2E6EA]">
                <div className="text-xs font-bold text-[#0B1B2B] mb-1">Approved Specialization Scope:</div>
                <div className="text-xs text-[#6B747C] bg-white p-3 rounded-xl border border-[#E2E6EA] font-medium">
                  {cert.scope}
                </div>
              </div>
            </div>

            <div className="text-xs text-[#6B747C] leading-relaxed mb-6">
              {cert.summary}
            </div>
          </div>
        ) : null}

        {/* Modal Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-[#E2E6EA] text-xs">
          <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Document on Record at Head Office</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#1677FF] hover:bg-blue-600 text-white font-bold transition-colors cursor-pointer shadow-md shadow-[#1677FF]/20"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
