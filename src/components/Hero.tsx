import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import {
  ArrowRight,
  MapPin,
  CheckCircle2,
  Sparkles,
  Code2,
  Smartphone,
  Receipt,
  Layers,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreWork }) => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#F7FCF5] border-b border-[#E5F5E0]">
      {/* Background subtle radial grid and soft green ambient glow */}
      <div className="absolute inset-0 radial-grid-green opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 radial-glow-green pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines, Description, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top location & badge row */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 text-[#005A32] bg-[#E5F5E0] px-3 py-1 rounded-full border border-[#C7E9C0]">
                <span className="w-2 h-2 rounded-full bg-[#238B45] animate-pulse inline-block" />
                <span className="font-semibold">Startup IT & Digital Services</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1 text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-[#238B45]" />
                Rameswaram, Tamil Nadu
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#005A32] font-['Space_Grotesk'] leading-[1.12]">
                Turning Ideas Into{' '}
                <span className="text-[#238B45]">
                  Powerful Digital Solutions.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
                {COMPANY_INFO.subheadline}
              </p>
            </div>

            {/* Supporting Text Tagline */}
            <div className="pt-1">
              <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#238B45] font-['Space_Grotesk'] flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#41AB5D]" />
                <span>{COMPANY_INFO.supportingText}</span>
              </p>
            </div>

            {/* CTAs: Primary #238B45 hover #005A32, Secondary white with green border and green text */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#238B45] hover:bg-[#005A32] rounded-xl transition-all shadow-md shadow-[#238B45]/20 hover:shadow-lg cursor-pointer active:scale-95"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#005A32] hover:text-white bg-white hover:bg-[#238B45] border border-[#41AB5D] rounded-xl transition-all shadow-xs cursor-pointer active:scale-95"
              >
                <span>Explore Our Work</span>
              </button>
            </div>

            {/* Factual Highlights */}
            <div className="pt-6 border-t border-[#E5F5E0] grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-[#005A32]">6 Core</p>
                <p className="text-xs text-slate-600 font-medium mt-0.5">Digital Disciplines</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-[#238B45]">100%</p>
                <p className="text-xs text-slate-600 font-medium mt-0.5">Custom Tailored</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-[#41AB5D]">2–10</p>
                <p className="text-xs text-slate-600 font-medium mt-0.5">Dedicated Team</p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White-Green SaaS Illustration Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white p-6 sm:p-7 border border-[#C7E9C0] shadow-xl shadow-[#238B45]/5 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5F5E0]">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#74C476]" />
                  <div className="w-3 h-3 rounded-full bg-[#A1D99B]" />
                  <div className="w-3 h-3 rounded-full bg-[#C7E9C0]" />
                  <span className="text-xs font-mono font-semibold text-[#005A32] ml-1">
                    2K Motion Digital Suite
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#238B45] bg-[#E5F5E0] px-2.5 py-0.5 rounded-full border border-[#C7E9C0] flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Active
                </span>
              </div>

              {/* Solution Pillars */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#F7FCF5] border border-[#E5F5E0] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white border border-[#C7E9C0] text-[#238B45]">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#005A32]">Web Application Development</p>
                      <p className="text-[11px] text-slate-500">React · Next.js · Node.js · APIs</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#238B45]">Modern</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7FCF5] border border-[#E5F5E0] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white border border-[#C7E9C0] text-[#238B45]">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#005A32]">Mobile App Engineering</p>
                      <p className="text-[11px] text-slate-500">Grace Fresh Market on Google Play</p>
                    </div>
                  </div>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.gracefresh.market.grace_fresh_market"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#238B45] hover:text-[#005A32] bg-white px-2 py-1 rounded border border-[#C7E9C0] hover:border-[#238B45] transition-colors"
                  >
                    Play Store &rarr;
                  </a>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7FCF5] border border-[#E5F5E0] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white border border-[#C7E9C0] text-[#238B45]">
                      <Receipt className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#005A32]">Custom Billing & POS Software</p>
                      <p className="text-[11px] text-slate-500">GST Invoices · Non-GST · Print Engine</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#238B45]">Fast</span>
                </div>
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-600 border-t border-[#E5F5E0]">
                <span className="flex items-center gap-1.5 font-medium text-[#005A32]">
                  <CheckCircle2 className="w-4 h-4 text-[#238B45]" />
                  Engineered for Business Growth
                </span>
                <span className="text-slate-400 font-mono text-[11px]">Rameswaram HQ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
