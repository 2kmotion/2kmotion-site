import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/companyData';
import { ProjectItem } from '../types';
import { CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

interface PortfolioProps {
  onSelectProjectForQuote: (projectName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProjectForQuote }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mobile' | 'billing'>('all');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'mobile') return project.mockupType === 'mobile-app';
    if (activeFilter === 'billing') return project.mockupType === 'billing-dashboard' || project.mockupType === 'ad-billing';
    return true;
  });

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white relative border-b border-[#E5F5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#238B45] font-['Space_Grotesk'] mb-2 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#41AB5D]" />
              <span>Proven Deliverables</span>
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-[#005A32] tracking-tight">
              Our Projects & Client Work.
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Explore completed solutions built for retail markets, studios, and advertising enterprises—engineered for daily performance and operational simplicity.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#F7FCF5] border border-[#C7E9C0] rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#238B45] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#005A32]'
              }`}
            >
              All Projects ({PROJECTS_DATA.length})
            </button>
            <button
              onClick={() => setActiveFilter('mobile')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'mobile'
                  ? 'bg-[#238B45] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#005A32]'
              }`}
            >
              Mobile & E-Commerce
            </button>
            <button
              onClick={() => setActiveFilter('billing')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'billing'
                  ? 'bg-[#238B45] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#005A32]'
              }`}
            >
              Billing & Custom Software
            </button>
          </div>
        </div>

        {/* Projects Showcase Cards */}
        <div className="space-y-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white border border-[#E5F5E0] overflow-hidden shadow-xs hover:border-[#A1D99B] hover:shadow-md transition-all duration-300 p-6 sm:p-8 space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#E5F5E0] pb-5">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#238B45] font-mono mb-2 font-semibold">
                    <span>{project.typeBadge}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-slate-500 font-sans">{project.demoDetails.highlightTag}</span>
                    {project.playStoreUrl && (
                      <>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-[#005A32] bg-[#E5F5E0] px-2 py-0.5 rounded text-[11px] font-semibold border border-[#C7E9C0]">
                          Live on Google Play
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-[#005A32]">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">
                    Category: {project.category}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 self-start">
                  {/* Google Play Store Link Button */}
                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#238B45] hover:bg-[#005A32] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm hover:shadow transition-all group"
                      title="View Grace Fresh Market on Google Play Store"
                    >
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M3.609 1.814L13.793 12 3.61 22.186c-.198-.198-.31-.476-.31-.786V2.6c0-.31.112-.588.31-.786zm11.598 11.599L4.852 23.768c.249.074.529.043.766-.088l11.455-6.545-1.866-3.722zm0-2.826l1.866-3.722L5.618.32c-.237-.131-.517-.162-.766-.088l10.355 10.355zm1.414 1.413l3.633 2.076c.749.428.749 1.127 0 1.556l-3.633 2.076 1.867-2.854-1.867-2.854z" />
                      </svg>
                      <span>View on Google Play</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover:text-white" />
                    </a>
                  )}

                  <button
                    onClick={() => onSelectProjectForQuote(project.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white hover:bg-[#238B45] text-[#005A32] hover:text-white text-xs sm:text-sm font-semibold rounded-xl border border-[#41AB5D] transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Request Similar Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Key features checklist */}
              <div className="space-y-2.5">
                <p className="text-xs font-bold text-[#005A32] font-mono uppercase tracking-wider">
                  Key Features & Capabilities:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#238B45] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack metadata & direct store link */}
              <div className="pt-3 border-t border-[#E5F5E0] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-slate-500 font-bold uppercase tracking-wider text-[11px] font-mono">Stack:</span>
                  {project.techUsed.map((tech) => (
                    <span key={tech} className="bg-[#E5F5E0] text-[#005A32] border border-[#C7E9C0] px-2 py-0.5 rounded text-[11px] font-mono font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#238B45] hover:text-[#005A32] font-semibold underline flex items-center gap-1"
                    >
                      <span>play.google.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <div className="text-slate-500 text-xs">
                    Client Context: <span className="text-slate-800 font-semibold">{project.clientContext}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
