import React, { useState, Suspense, lazy } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedProducts } from './components/FeaturedProducts';
import { EnergyCalculator } from './components/EnergyCalculator';
import { CeoAndLeadership } from './components/CeoAndLeadership';
import { ApplicationsSection } from './components/ApplicationsSection';
import { ProjectRoadmap } from './components/ProjectRoadmap';
import { FAQSection } from './components/FAQSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ClientsAndTestimonials } from './components/ClientsAndTestimonials';
import { ContactAndLocations } from './components/ContactAndLocations';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { MobileBottomBar } from './components/MobileBottomBar';

// Code-split heavy interactive components for instantaneous initial page load
const TechnicalInsights = lazy(() => 
  import('./components/TechnicalInsights').then(m => ({ default: m.TechnicalInsights }))
);
const CertificationsModal = lazy(() => 
  import('./components/CertificationsModal').then(m => ({ default: m.CertificationsModal }))
);
const QuoteModal = lazy(() => 
  import('./components/QuoteModal').then(m => ({ default: m.QuoteModal }))
);
const ChatbotWidget = lazy(() => 
  import('./components/ChatbotWidget').then(m => ({ default: m.ChatbotWidget }))
);

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string>('');
  const [activeCertModalId, setActiveCertModalId] = useState<string | null>(null);
  const [chatOpen, setChatOpen] = useState(false);

  const handleOpenQuoteModal = (productName?: string) => {
    setSelectedProductForQuote(productName || '');
    setQuoteModalOpen(true);
  };

  const handleOpenCalculator = () => {
    const el = document.getElementById('energy-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#0B1B2B] font-sans selection:bg-[#1677FF] selection:text-white relative pb-16 md:pb-0">
      
      {/* Subtle Horizontal Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Top Main Navigation */}
      <Navbar
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenCertModal={(id) => setActiveCertModalId(id || 'pec-license')}
        onOpenChat={() => setChatOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section with Live Stats & CTAs */}
        <HeroSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onOpenCalculator={handleOpenCalculator}
          onOpenChat={() => setChatOpen(true)}
          onOpenCertModal={(id) => setActiveCertModalId(id)}
        />

        {/* Featured Products & Solutions (Evaporative Cooling, Fire Fighting, HVAC, Electrical Panels) */}
        <FeaturedProducts
          onSelectProductForQuote={(pName) => handleOpenQuoteModal(pName)}
        />

        {/* Interactive Energy & Power Savings Calculator (Saves up to 90% in bills) */}
        <EnergyCalculator
          onOpenQuoteModal={(note) => handleOpenQuoteModal(note)}
        />

        {/* About Organization, Carrier International USA Awarded CEO, Ideology & Lifecycle */}
        <CeoAndLeadership
          onOpenCertModal={(id) => setActiveCertModalId(id)}
        />

        {/* Industry Applications (Poultry, Dairy, Textile, Greenhouses, Factories, Commercial) */}
        <ApplicationsSection
          onSelectApplicationForQuote={(appName) => handleOpenQuoteModal(`Turnkey Solution for: ${appName}`)}
        />

        {/* 6-Stage Engineering Project Lifecycle Roadmap (Design to Commissioning & TAB) */}
        <ProjectRoadmap
          onOpenQuoteModal={(stepName) => handleOpenQuoteModal(stepName || 'Turnkey Project Execution')}
        />

        {/* Technical Insights & Articles (Code-split for fast execution) */}
        <Suspense fallback={
          <div className="py-20 text-center text-[#6B747C] bg-white animate-pulse">
            <div className="max-w-7xl mx-auto px-4 h-64 flex items-center justify-center">
              <span className="text-sm font-semibold">Loading Technical Knowledgebase...</span>
            </div>
          </div>
        }>
          <TechnicalInsights
            onSelectProductForQuote={(pName) => handleOpenQuoteModal(pName)}
            onOpenCalculator={handleOpenCalculator}
          />
        </Suspense>

        {/* Frequently Asked Questions (HVAC Maintenance, Energy Savings & System ROI) */}
        <FAQSection
          onOpenCalculator={handleOpenCalculator}
          onOpenQuoteModal={(prod) => handleOpenQuoteModal(prod)}
          onOpenCertModal={(id) => setActiveCertModalId(id)}
          onOpenChat={() => setChatOpen(true)}
        />

        {/* Official Certifications, PEC Category C4 License & ISO Standards */}
        <CertificationsSection
          onOpenCertModal={(id) => setActiveCertModalId(id)}
        />

        {/* Prestigious Clients & Verified Client Testimonials */}
        <ClientsAndTestimonials 
          onSelectClientSectorForQuote={(sector) => handleOpenQuoteModal(sector)}
        />

        {/* Contact, Newsletter Subscription & 3 Nationwide Offices (Lahore HQ, Bund Rd Factory, Islamabad) */}
        <ContactAndLocations
          initialProductOrNote={selectedProductForQuote}
        />
      </main>

      {/* Site Footer */}
      <Footer
        onOpenCertModal={(id) => setActiveCertModalId(id)}
      />

      {/* Interactive AI Chatbot Widget */}
      <Suspense fallback={null}>
        <ChatbotWidget
          isOpen={chatOpen}
          onToggle={() => setChatOpen(!chatOpen)}
        />
      </Suspense>

      {/* Floating Direct WhatsApp Button (+92 300 8425772) on Desktop */}
      <WhatsAppFloatingButton />

      {/* Persistent Mobile Quick Action Bar */}
      <MobileBottomBar
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenCalculator={handleOpenCalculator}
        onOpenChat={() => setChatOpen(true)}
      />

      {/* High-Resolution Certificate & Award Inspection Modal */}
      {activeCertModalId && (
        <Suspense fallback={null}>
          <CertificationsModal
            certId={activeCertModalId}
            onClose={() => setActiveCertModalId(null)}
          />
        </Suspense>
      )}

      {/* Turnkey Project Quotation Modal */}
      {quoteModalOpen && (
        <Suspense fallback={null}>
          <QuoteModal
            isOpen={quoteModalOpen}
            initialProductOrNote={selectedProductForQuote}
            onClose={() => setQuoteModalOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}
