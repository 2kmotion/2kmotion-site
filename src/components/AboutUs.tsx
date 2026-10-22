import React from 'react';
import { COMPANY_INFO, ABOUT_CONTENT } from '../data/companyData';
import {
  Compass,
  Target,
  Users2,
  MapPin,
  Workflow,
  Sparkles,
} from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative border-b border-[#E5F5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-wider font-semibold text-[#238B45] font-['Space_Grotesk'] mb-2 flex items-center gap-2">
            <span className="w-5 h-0.5 bg-[#41AB5D]" />
            <span>About 2K Motion</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-[#005A32] tracking-tight">
            From Freelance Roots to an Emerging Technology Startup.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Story & Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p className="text-[#005A32] font-semibold text-lg sm:text-xl leading-relaxed">
              {ABOUT_CONTENT.paragraph1}
            </p>

            <p className="text-slate-600">
              {ABOUT_CONTENT.paragraph2}
            </p>

            <p className="text-slate-600">
              {ABOUT_CONTENT.paragraph3}
            </p>

            {/* Vision and Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl bg-[#F7FCF5] border border-[#E5F5E0] space-y-2.5 shadow-xs">
                <div className="flex items-center gap-2 text-[#005A32] font-bold font-['Space_Grotesk'] text-base">
                  <div className="p-1.5 rounded-lg bg-[#E5F5E0] text-[#238B45]">
                    <Compass className="w-4 h-4" />
                  </div>
                  <span>Our Vision</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {ABOUT_CONTENT.vision}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F7FCF5] border border-[#E5F5E0] space-y-2.5 shadow-xs">
                <div className="flex items-center gap-2 text-[#005A32] font-bold font-['Space_Grotesk'] text-base">
                  <div className="p-1.5 rounded-lg bg-[#E5F5E0] text-[#238B45]">
                    <Target className="w-4 h-4" />
                  </div>
                  <span>Our Mission</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {ABOUT_CONTENT.mission}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Company Snapshot Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#C7E9C0] shadow-sm space-y-6">
              <div className="border-b border-[#E5F5E0] pb-4">
                <span className="text-xs uppercase font-mono tracking-wider text-[#238B45] font-semibold">
                  Company Overview
                </span>
                <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#005A32] mt-1">
                  2K Motion Profile
                </h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#E5F5E0] text-[#238B45] shrink-0">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Company Type</p>
                    <p className="font-semibold text-slate-800">{COMPANY_INFO.companyType}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#E5F5E0] text-[#238B45] shrink-0">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Company Team Size</p>
                    <p className="font-semibold text-slate-800">{COMPANY_INFO.companySize}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#E5F5E0] text-[#238B45] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Headquarters Address</p>
                    <p className="font-semibold text-slate-800 leading-relaxed">{COMPANY_INFO.address}</p>
                  </div>
                </div>
              </div>

              {/* Startup Journey Highlight Box */}
              <div className="p-4 rounded-xl bg-[#F7FCF5] border border-[#C7E9C0] text-xs space-y-1.5">
                <p className="font-bold text-[#005A32] font-['Space_Grotesk'] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#238B45]" />
                  Our Growth Journey
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Starting as an independent freelance practice solving software challenges for retail shops and local businesses, 2K Motion has officially expanded into a full-service technology startup delivering end-to-end digital excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
