import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import {
  Calculator,
  CheckSquare,
  Square,
  Send,
  MessageCircle,
  Copy,
  Check,
} from 'lucide-react';

interface QuoteEstimatorProps {
  onPreFillContact: (messageText: string, selectedService: string) => void;
}

export const QuoteEstimator: React.FC<QuoteEstimatorProps> = ({ onPreFillContact }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Web Application Development']);
  const [projectScale, setProjectScale] = useState<'startup' | 'retail' | 'enterprise'>('retail');
  const [timeline, setTimeline] = useState<'standard' | 'fast' | 'flexible'>('standard');
  const [copied, setCopied] = useState<boolean>(false);

  const toggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? (prev.length > 1 ? prev.filter((s) => s !== title) : prev) : [...prev, title]
    );
  };

  const scaleDetails = {
    retail: {
      label: 'Local Retail / Small Business',
      desc: 'Ideal for local stores, shops, clinics, restaurants needing point-of-sale, billing, or catalog apps.',
    },
    startup: {
      label: 'Emerging Startup / Venture',
      desc: 'Custom MVP, mobile consumer apps, multi-tenant web platforms, branding & pitch decks.',
    },
    enterprise: {
      label: 'Established Business / Agency',
      desc: 'Large-scale workflow automation, multi-branch billing, high-volume marketing & media production.',
    },
  };

  const timelineLabels = {
    fast: 'Expedited (1–2 Weeks Sprint)',
    standard: 'Standard Milestone (3–4 Weeks)',
    flexible: 'Comprehensive Build (1–2 Months)',
  };

  const generatedSummary = `Hello 2K Motion team,

I am interested in collaborating on a digital project:
- Target Services: ${selectedServices.join(', ')}
- Business Category: ${scaleDetails[projectScale].label}
- Estimated Timeline: ${timelineLabels[timeline]}

Please share a detailed proposal and quotation for our requirements.
Thank you!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleApplyToForm = () => {
    const primaryService = selectedServices[0] || 'Web Application Development';
    onPreFillContact(generatedSummary, primaryService);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(generatedSummary);
    window.open(`https://wa.me/918148544881?text=${encoded}`, '_blank');
  };

  return (
    <section id="quote-builder" className="py-20 md:py-28 bg-[#F7FCF5] relative border-b border-[#E5F5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-wider font-semibold text-[#238B45] font-['Space_Grotesk'] mb-2 flex items-center gap-2">
            <span className="w-5 h-0.5 bg-[#41AB5D]" />
            <span>Interactive Scope Builder</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-[#005A32] tracking-tight">
            Configure Your Project Requirements.
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Select the digital services you require, configure your timeline, and instantly generate a formatted project brief to discuss with our engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Left Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Service Selection */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5F5E0] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase font-bold text-slate-500">
                  Step 1: Choose Required Services
                </span>
                <span className="text-xs text-[#238B45] font-mono font-bold bg-[#E5F5E0] px-2.5 py-0.5 rounded-full border border-[#C7E9C0]">
                  {selectedServices.length} selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICES_DATA.map((srv) => {
                  const isChecked = selectedServices.includes(srv.title);
                  return (
                    <button
                      key={srv.id}
                      onClick={() => toggleService(srv.title)}
                      className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-colors cursor-pointer ${
                        isChecked
                          ? 'bg-[#E5F5E0] border-[#238B45] text-[#005A32]'
                          : 'bg-[#F7FCF5] border-[#E5F5E0] text-slate-600 hover:text-slate-900 hover:bg-white'
                      }`}
                    >
                      <div className="mt-0.5 shrink-0 text-[#238B45]">
                        {isChecked ? <CheckSquare className="w-4 h-4 text-[#238B45]" /> : <Square className="w-4 h-4 text-slate-400" />}
                      </div>
                      <div className="text-xs">
                        <p className="font-bold text-slate-800">{srv.title}</p>
                        <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{srv.badge}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Business Scale */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5F5E0] shadow-xs space-y-4">
              <span className="text-xs font-mono uppercase font-bold text-slate-500">
                Step 2: Business / Operation Scale
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(['retail', 'startup', 'enterprise'] as const).map((scale) => {
                  const isSelected = projectScale === scale;
                  return (
                    <button
                      key={scale}
                      onClick={() => setProjectScale(scale)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#E5F5E0] border-[#238B45] text-[#005A32] shadow-xs'
                          : 'bg-[#F7FCF5] border-[#E5F5E0] text-slate-600 hover:text-slate-900 hover:bg-white'
                      }`}
                    >
                      <p className={`text-xs font-bold font-['Space_Grotesk'] ${isSelected ? 'text-[#005A32]' : 'text-slate-800'}`}>
                        {scaleDetails[scale].label}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                        {scaleDetails[scale].desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Delivery Timeline */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5F5E0] shadow-xs space-y-4">
              <span className="text-xs font-mono uppercase font-bold text-slate-500">
                Step 3: Target Timeline
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(['fast', 'standard', 'flexible'] as const).map((t) => {
                  const isSelected = timeline === t;
                  return (
                    <button
                      key={t}
                      onClick={() => setTimeline(t)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#E5F5E0] border-[#238B45] text-[#005A32] font-bold shadow-xs'
                          : 'bg-[#F7FCF5] border-[#E5F5E0] text-slate-600 hover:text-slate-900 hover:bg-white'
                      }`}
                    >
                      <span className="text-xs">{timelineLabels[t]}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-time Summary Card Right Column */}
          <div className="lg:col-span-5 space-y-4 sticky top-24">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#C7E9C0] shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-[#E5F5E0] pb-3">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#238B45]" />
                  <h3 className="text-base font-bold font-['Space_Grotesk'] text-[#005A32]">
                    Project Scope Summary
                  </h3>
                </div>
                <span className="text-xs font-mono font-semibold text-[#238B45] bg-[#E5F5E0] px-2.5 py-0.5 rounded-full border border-[#C7E9C0]">
                  Ready
                </span>
              </div>

              {/* Formatted Output Box */}
              <div className="bg-[#F7FCF5] p-4 rounded-xl border border-[#C7E9C0] font-mono text-xs text-slate-800 leading-relaxed whitespace-pre-wrap">
                {generatedSummary}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleApplyToForm}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#238B45] hover:bg-[#005A32] text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Transfer to Official Contact Form</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleWhatsApp}
                    className="py-2.5 px-3 rounded-xl bg-[#E5F5E0] hover:bg-[#C7E9C0] border border-[#A1D99B] text-[#005A32] font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#238B45]" />
                    <span>Send WhatsApp</span>
                  </button>

                  <button
                    onClick={handleCopy}
                    className="py-2.5 px-3 rounded-xl bg-white hover:bg-[#F7FCF5] border border-[#C7E9C0] text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#238B45]" /> : <Copy className="w-4 h-4 text-slate-500" />}
                    <span>{copied ? 'Copied Brief' : 'Copy Brief'}</span>
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E5F5E0] text-[11px] text-slate-500 leading-normal">
                Direct phone consultation available daily: <strong className="text-[#005A32]">+91 8148544881</strong> (Mon–Sat)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
