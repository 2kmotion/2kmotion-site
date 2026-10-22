import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/companyData';
import {
  Globe,
  Smartphone,
  TerminalSquare,
  Palette,
  Video,
  TrendingUp,
  Check,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from 'lucide-react';

interface ServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#238B45]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#238B45]" />;
      case 'TerminalSquare':
        return <TerminalSquare className="w-5 h-5 text-[#238B45]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#238B45]" />;
      case 'Video':
        return <Video className="w-5 h-5 text-[#238B45]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#238B45]" />;
      default:
        return <Globe className="w-5 h-5 text-[#238B45]" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F7FCF5] relative border-b border-[#E5F5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#238B45] font-['Space_Grotesk'] mb-2 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#41AB5D]" />
              <span>Comprehensive Capabilities</span>
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-[#005A32] tracking-tight">
              Our Digital & Technology Services.
            </h2>
            <p className="text-slate-600 mt-4 text-base">
              Tailored software engineering, digital product design, and creative visual content crafted to help retail shops, startups, and growing enterprises thrive.
            </p>
          </div>

          <div className="text-xs font-semibold text-[#005A32] bg-[#E5F5E0] px-3 py-1.5 rounded-full border border-[#C7E9C0] flex items-center gap-2 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#238B45]" />
            <span>6 Specialized Core Practices</span>
          </div>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                className={`rounded-2xl transition-all duration-300 flex flex-col justify-between p-6 bg-white border ${
                  isExpanded
                    ? 'border-[#74C476] shadow-md shadow-[#238B45]/10'
                    : 'border-[#E5F5E0] hover:border-[#A1D99B] hover:shadow-md'
                }`}
              >
                <div>
                  {/* Icon & Kicker */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-[#E5F5E0] border border-[#C7E9C0]">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-xs font-mono font-medium text-[#238B45]">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#005A32] mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Expandable deliverables and full details */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-[#E5F5E0] space-y-4 animate-in fade-in duration-200">
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {service.fullDesc}
                      </p>

                      <div className="space-y-2">
                        <p className="text-xs font-bold text-[#005A32] font-mono uppercase tracking-wider">
                          Key Deliverables:
                        </p>
                        <ul className="space-y-1.5">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                              <Check className="w-3.5 h-3.5 text-[#238B45] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="pt-2">
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono mb-1.5">
                          Technologies & Tools:
                        </p>
                        <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#005A32] font-mono">
                          {service.techStack.map((tech, i) => (
                            <span key={tech} className="bg-[#E5F5E0] px-2 py-0.5 rounded text-[11px] border border-[#C7E9C0]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Actions */}
                <div className="mt-6 pt-4 border-t border-[#E5F5E0] flex items-center justify-between gap-3">
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="text-xs font-medium text-slate-600 hover:text-[#005A32] flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Less Details' : 'View Deliverables'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-[#238B45]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#238B45]" />}
                  </button>

                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="text-xs font-bold text-[#238B45] hover:text-[#005A32] flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
