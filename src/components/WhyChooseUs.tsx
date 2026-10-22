import React from 'react';
import { WHY_CHOOSE_US } from '../data/companyData';
import { Sparkles, Lightbulb, Briefcase, Cpu, HeartHandshake, Check } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#238B45]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-[#238B45]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#238B45]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#238B45]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#238B45]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#238B45]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#F7FCF5] relative border-b border-[#E5F5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-wider font-semibold text-[#238B45] font-['Space_Grotesk'] mb-2 flex items-center gap-2">
            <span className="w-5 h-0.5 bg-[#41AB5D]" />
            <span>Our Value Proposition</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-[#005A32] tracking-tight">
            Why Businesses Partner With 2K Motion.
          </h2>
          <p className="text-slate-600 mt-4 text-base">
            We bridge the gap between creative visual artistry and dependable software engineering. Here is what sets our technology team apart.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl p-6 sm:p-7 bg-white border border-[#E5F5E0] hover:border-[#A1D99B] hover:shadow-md transition-all duration-300 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#E5F5E0] border border-[#C7E9C0]">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#238B45]">
                    {pillar.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#005A32] mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5F5E0] flex items-center gap-2 text-xs font-medium text-slate-600">
                <Check className="w-3.5 h-3.5 text-[#238B45]" />
                <span>Engineered for long-term growth</span>
              </div>
            </div>
          ))}

          {/* Dedicated Regional Commitment Card */}
          <div className="rounded-2xl p-6 sm:p-7 bg-white border border-[#A1D99B] shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5F5E0]/60 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#005A32] font-bold uppercase tracking-wider bg-[#E5F5E0] px-2.5 py-1 rounded-md border border-[#C7E9C0]">
                  Rameswaram · Tamil Nadu
                </span>
                <span className="text-xs font-mono text-slate-500 font-semibold">HQ Presence</span>
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#005A32] mb-2.5">
                Local Proximity, Modern Standards
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Direct in-person consultations for local retail stores and businesses across Rameswaram and Ramanathapuram district, backed by modern remote digital engineering for clients worldwide.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5F5E0] text-xs text-[#005A32] font-semibold">
              <span>Direct access to engineering founders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
