import React from 'react';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

interface CTAProps {
  onStartProject: () => void;
  onContactUs: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onStartProject, onContactUs }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#F7FCF5] border-b border-[#E5F5E0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#005A32] mb-6 bg-[#E5F5E0] border border-[#C7E9C0] px-3.5 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-[#238B45]" />
          <span>Ready to Accelerate Your Digital Transformation</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Space_Grotesk'] text-[#005A32] tracking-tight max-w-4xl mx-auto leading-tight">
          Have an Idea?{' '}
          <span className="text-[#238B45]">
            Let's Build It Together.
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
          Whether you need a website, mobile application, custom software, creative design, or digital marketing services, 2K Motion is ready to help turn your vision into reality.
        </p>

        {/* Buttons: Start Your Project (#238B45 hover #005A32) & Contact Us (white with green border) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2.5 px-7 py-4 text-sm sm:text-base font-bold text-white bg-[#238B45] hover:bg-[#005A32] rounded-xl shadow-md shadow-[#238B45]/20 hover:shadow-lg transition-all cursor-pointer active:scale-95"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onContactUs}
            className="inline-flex items-center gap-2 px-7 py-4 text-sm sm:text-base font-semibold text-[#005A32] hover:text-white bg-white hover:bg-[#238B45] border border-[#41AB5D] rounded-xl transition-all shadow-xs cursor-pointer active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-[#238B45] group-hover:text-white" />
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </section>
  );
};
