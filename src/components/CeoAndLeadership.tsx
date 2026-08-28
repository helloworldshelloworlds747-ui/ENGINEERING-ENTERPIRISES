import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  Calendar, 
  Briefcase, 
  Quote, 
  Target, 
  Eye, 
  CheckCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { CEO_PROFILE, PROJECT_IDEOLOGY, LIFECYCLE_STEPS } from '../data/engineeringData';

interface CeoAndLeadershipProps {
  onOpenCertModal: (certId: string) => void;
}

export const CeoAndLeadership: React.FC<CeoAndLeadershipProps> = ({ onOpenCertModal }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'timeline' | 'award'>('profile');

  return (
    <section id="about-company" className="py-20 bg-[#F5F6F3] text-[#0B1B2B] relative border-b border-[#E2E6EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF3FF] border border-[#1677FF]/20 text-[#1677FF] text-xs font-bold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Over 3 Decades of Visionary Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B1B2B] font-display">
            About Organization & Leadership
          </h2>
          <p className="mt-3 text-[#6B747C] text-sm sm:text-base leading-relaxed">
            Since 1992, Engineering Enterprises has converted engineering challenges into sustainable opportunities across HVAC, fire protection, and electrical infrastructure.
          </p>
        </div>

        {/* 3 Core Pillars Card Grid (CEO Message, Vision, Mission) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* CEO Message Card */}
          <div className="bg-white rounded-3xl p-7 hover:border-[#1677FF] transition-all shadow-xs hover:shadow-xl hover:shadow-[#0B1B2B]/5 flex flex-col justify-between border border-[#E2E6EA]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3FF] text-[#1677FF] flex items-center justify-center mb-5">
                <Quote className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1B2B] mb-2.5 font-display">CEO Message</h3>
              <p className="text-xs sm:text-sm text-[#6B747C] leading-relaxed font-normal">
                "Cost-effective and innovative evaporative cooling and fire fighting solutions. At Engineering Enterprises, we don't just cool the air, but engineer smarter, greener futures."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E2E6EA] text-xs text-[#1677FF] font-bold flex items-center justify-between">
              <span>— Mr. Mohammad Boota Aziz</span>
              <span className="text-[10px] text-[#6B747C] font-semibold">CEO & Founder</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-7 hover:border-[#1677FF] transition-all shadow-xs hover:shadow-xl hover:shadow-[#0B1B2B]/5 flex flex-col justify-between border border-[#E2E6EA]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3FF] text-[#1677FF] flex items-center justify-center mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1B2B] mb-2.5 font-display">Our Vision</h3>
              <p className="text-xs sm:text-sm text-[#6B747C] leading-relaxed font-normal">
                As part of Engineering Enterprises & Veloair, our vision is to deliver sustainable, ISO-standard, energy-saving customer solutions that protect lives and maximize industrial productivity.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E2E6EA] text-xs text-[#1677FF] font-bold">
              The New Vision In Cooling & Safety
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-7 hover:border-emerald-500 transition-all shadow-xs hover:shadow-xl hover:shadow-[#0B1B2B]/5 flex flex-col justify-between border border-[#E2E6EA]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1B2B] mb-2.5 font-display">Our Mission</h3>
              <p className="text-xs sm:text-sm text-[#6B747C] leading-relaxed font-normal">
                To convert customer problems into satisfied solutions through a committed workforce, cutting-edge technology, strict PEC/NFPA quality compliance, and prompt responsiveness.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E2E6EA] text-xs text-emerald-600 font-bold">
              Turnkey Affordable Engineering
            </div>
          </div>
        </div>

        {/* Deep CEO Profile & Carrier International Award Spotlight */}
        <div id="ceo-profile" className="bg-white border border-[#E2E6EA] rounded-3xl p-6 sm:p-10 shadow-xl shadow-[#0B1B2B]/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* CEO Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#1677FF]/20 text-[#1677FF] text-xs font-bold">
                <Award className="w-3.5 h-3.5" />
                <span>Carrier International USA Trained Veteran</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#0B1B2B] font-display">
                {CEO_PROFILE.name}
              </h3>
              <div className="text-sm font-bold text-[#1677FF]">
                {CEO_PROFILE.title} — {CEO_PROFILE.organization}
              </div>

              <p className="text-xs sm:text-sm text-[#6B747C] leading-relaxed">
                {CEO_PROFILE.bio}
              </p>

              {/* Carrier Apex Award Callout Box */}
              <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 sm:p-5 mt-4">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider mb-1.5">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Apex - Appreciation of Excellence Award</span>
                </div>
                <div className="text-xs text-[#0B1B2B] leading-relaxed">
                  Conferred by <strong>Carrier International Corporation (USA)</strong> President Jean Pierre van Rooy. Mr. Boota was awarded as one of the <strong>top ten worldwide performers</strong> for extraordinary HVAC commissioning across Middle East airports, heavy industrial plants, and royal palaces.
                </div>
                <button
                  onClick={() => onOpenCertModal('carrier-award')}
                  className="mt-3 text-xs text-amber-700 hover:text-amber-900 font-bold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>View Carrier International Citation & Award Record →</span>
                </button>
              </div>

              {/* Credentials Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-[#F5F6F3] text-[#0B1B2B] text-xs font-medium rounded-full border border-[#E2E6EA]">
                  Life Member, Pakistan HVACR Society
                </span>
                <span className="px-3 py-1 bg-[#F5F6F3] text-[#0B1B2B] text-xs font-medium rounded-full border border-[#E2E6EA]">
                  PEC Registered Constructor Category C4
                </span>
                <span className="px-3 py-1 bg-[#F5F6F3] text-[#0B1B2B] text-xs font-medium rounded-full border border-[#E2E6EA]">
                  LCCI Corporate Member since 2002
                </span>
              </div>
            </div>

            {/* Career Timeline Interactive Tab */}
            <div className="lg:col-span-5 bg-[#F5F6F3] rounded-2xl p-6 border border-[#E2E6EA] space-y-4">
              <h4 className="text-sm font-bold text-[#0B1B2B] uppercase tracking-wider flex items-center gap-2 border-b border-[#E2E6EA] pb-3">
                <Briefcase className="w-4 h-4 text-[#1677FF]" />
                <span>Executive Experience Track</span>
              </h4>

              <div className="space-y-3.5">
                {CEO_PROFILE.careerTimeline.map((item, idx) => (
                  <div key={idx} className="relative pl-5 border-l-2 border-[#E2E6EA] hover:border-[#1677FF] transition-colors group">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#6B747C] group-hover:bg-[#1677FF] transition-colors" />
                    <div className="text-[11px] font-bold text-[#1677FF]">{item.period}</div>
                    <div className="text-xs font-bold text-[#0B1B2B]">{item.role}</div>
                    <div className="text-xs text-[#6B747C] font-medium">{item.company}</div>
                    <div className="text-[11px] text-[#6B747C] mt-0.5">{item.details}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Ideology & Turnkey 5-Step Lifecycle from Brochure */}
        <div id="project-ideology" className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-black text-[#0B1B2B] font-display">
              Project Ideology & Execution Lifecycle
            </h3>
            <p className="text-xs text-[#6B747C] mt-1">
              Structured pentagonal engineering workflow delivering predictable precision from initial CFM design to lifetime preventative maintenance.
            </p>
          </div>

          {/* 5-Step Lifecycle Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-10">
            {LIFECYCLE_STEPS.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#E2E6EA] rounded-2xl p-4 hover:border-[#1677FF] transition-all flex flex-col justify-between shadow-2xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1677FF]">
                      Phase 0{idx + 1}
                    </span>
                    <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${step.color}`} />
                  </div>
                  <h4 className="text-sm font-bold text-[#0B1B2B]">{step.name}</h4>
                  <p className="text-[11px] text-[#6B747C] mt-1.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 4 Pillars of Ideology */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROJECT_IDEOLOGY.map((pillar) => (
              <div 
                key={pillar.step} 
                className="p-5 rounded-2xl bg-white border border-[#E2E6EA] text-center hover:border-[#1677FF] transition-all shadow-2xs group"
              >
                <div className="text-2xl font-black text-[#0B1B2B] group-hover:text-[#1677FF] transition-colors font-display mb-1">
                  {pillar.title}
                </div>
                <div className="text-xs text-[#6B747C] leading-relaxed">
                  {pillar.description}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
