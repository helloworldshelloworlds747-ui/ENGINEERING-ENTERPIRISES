import React, { useState, useEffect } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSectionName, setActiveSectionName] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
        setScrollProgress(progress);
        setIsVisible(scrollTop > 20);
      }

      // Detect current section for subtle context
      const sections = [
        { id: 'hero', name: 'Engineering Enterprises & Veloair' },
        { id: 'products', name: 'Products & Solutions' },
        { id: 'energy-calculator', name: 'ROI & Energy Calculator' },
        { id: 'about-company', name: 'Engineering Leadership & CEO' },
        { id: 'about', name: 'Engineering Leadership & CEO' },
        { id: 'applications', name: 'Industrial Applications' },
        { id: 'roadmap', name: 'Execution Roadmap' },
        { id: 'insights', name: 'Technical Insights & White Papers' },
        { id: 'technical-insights', name: 'Technical Insights & White Papers' },
        { id: 'faqs', name: 'Technical FAQs' },
        { id: 'certifications', name: 'PEC & ISO Certifications' },
        { id: 'clients', name: 'Client Testimonials' },
        { id: 'contact', name: 'Contact & Nationwide Network' },
      ];

      const currentScrollPos = window.scrollY + 200;
      let currentSection = '';

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentScrollPos >= top && currentScrollPos < top + height) {
            currentSection = section.name;
            break;
          }
        }
      }

      setActiveSectionName(currentSection);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    
    // Initial call
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-[60] pointer-events-none transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0.8 }}
      aria-hidden="true"
    >
      {/* Background Track (Subtle Hairline) */}
      <div className="w-full h-[3px] bg-[#E2E6EA] relative overflow-hidden">
        {/* Animated Gradient Fill Bar */}
        <div
          className="h-full bg-gradient-to-r from-[#0B1B2B] via-[#1677FF] to-[#389e0d] relative transition-[width] duration-100 ease-out will-change-[width] shadow-[0_0_10px_rgba(22,119,255,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Subtle Glowing Leading Edge Pulse Light */}
          {scrollProgress > 0 && scrollProgress < 99.8 && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#1677FF,0_0_18px_#1677FF] opacity-90 animate-pulse" />
          )}
        </div>
      </div>

      {/* Subtle Mini Section Badge at Top-Right when scrolling past hero */}
      {activeSectionName && scrollProgress > 5 && scrollProgress < 98 && (
        <div className="hidden lg:flex absolute top-2 right-4 pointer-events-none items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/95 border border-[#E2E6EA] backdrop-blur-md text-[10px] font-medium text-[#6B747C] shadow-md animate-in fade-in slide-in-from-top-1 duration-200">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] animate-pulse" />
          <span className="text-[#6B747C]">Section:</span>
          <span className="font-semibold text-[#0B1B2B]">{activeSectionName}</span>
          <span className="text-[#D4D9DE]">|</span>
          <span className="font-mono text-[#1677FF] font-bold">{Math.round(scrollProgress)}%</span>
        </div>
      )}
    </div>
  );
};
