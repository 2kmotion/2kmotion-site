import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { QuoteEstimator } from './components/QuoteEstimator';
import { ContactUs } from './components/ContactUs';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { COMPANY_INFO } from './data/companyData';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [preFilledMessage, setPreFilledMessage] = useState<string>('');
  const [preFilledService, setPreFilledService] = useState<string>('Web Application Development');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuote = () => {
    scrollTo('quote-builder');
  };

  const handleExploreWork = () => {
    scrollTo('portfolio');
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setPreFilledService(serviceTitle);
    setPreFilledMessage(
      `Hello 2K Motion team,\n\nI would like to inquire about your "${serviceTitle}" services for our business. Please share details on process, deliverables, and estimated turnaround.`
    );
    scrollTo('contact');
  };

  const handleSelectProjectForQuote = (projectName: string) => {
    setPreFilledService('Custom Software Development');
    setPreFilledMessage(
      `Hello 2K Motion team,\n\nI reviewed your project showcase for "${projectName}" and would like to build a similar software solution tailored to our business operations.`
    );
    scrollTo('contact');
  };

  const handlePreFillContact = (message: string, service: string) => {
    setPreFilledMessage(message);
    setPreFilledService(service);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#C7E9C0] selection:text-[#005A32]">
      {/* Navbar Header */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenQuote={handleOpenQuote} onExploreWork={handleExploreWork} />

        {/* 2. About Us Section */}
        <AboutUs />

        {/* 3. Services Section */}
        <Services onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* 4. Portfolio Section (Grace Fresh Market, KA Studio, Mugavai Ads) */}
        <Portfolio onSelectProjectForQuote={handleSelectProjectForQuote} />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Process Workflow Section */}
        <Process />

        {/* 7. Interactive Scope & Quote Estimator */}
        <QuoteEstimator onPreFillContact={handlePreFillContact} />

        {/* 8. Call To Action Section */}
        <CTA
          onStartProject={handleOpenQuote}
          onContactUs={() => scrollTo('contact')}
        />

        {/* 9. Contact Us Section with working form */}
        <ContactUs
          preFilledMessage={preFilledMessage}
          preFilledService={preFilledService}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action: Direct WhatsApp & Call Helper */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
        {/* Quick WhatsApp pill action */}
        <a
          href={`https://wa.me/918148544881?text=Hello%202K%20Motion,%20I%20would%20like%20to%20discuss%20a%20project`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 bg-[#238B45] hover:bg-[#005A32] text-white font-bold text-xs rounded-full shadow-lg shadow-[#238B45]/25 hover:shadow-xl transition-all duration-200 cursor-pointer group"
          title="Chat directly on WhatsApp with 2K Motion"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline font-semibold">WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
}
