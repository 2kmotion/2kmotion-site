import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/companyData';
import {
  Search,
  Map,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  Layers,
} from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Search className="w-5 h-5 text-[#238B45]" />;
      case 2:
        return <Map className="w-5 h-5 text-[#238B45]" />;
      case 3:
        return <Palette className="w-5 h-5 text-[#238B45]" />;
      case 4:
        return <Code2 className="w-5 h-5 text-[#238B45]" />;
      case 5:
        return <CheckCircle2 className="w-5 h-5 text-[#238B45]" />;
      case 6:
        return <Rocket className="w-5 h-5 text-[#238B45]" />;
      default:
        return <Layers className="w-5 h-5 text-[#238B45]" />;
    }
  };

  const currentStepData = PROCESS_STEPS.find((s) => s.step === activeStep) || PROCESS_STEPS[0];

  return (
    <section id="process" className="py-20 md:py-28 bg-white relative border-b border-[#E5F5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-wider font-semibold text-[#238B45] font-['Space_Grotesk'] mb-2 flex items-center gap-2">
            <span className="w-5 h-0.5 bg-[#41AB5D]" />
            <span>Structured Execution</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-[#005A32] tracking-tight">
            Our Transparent 6-Step Workflow.
          </h2>
          <p className="text-slate-600 mt-4 text-base">
            From initial business requirement gathering to live deployment and post-launch maintenance, we follow a disciplined milestone process.
          </p>
        </div>

        {/* Desktop / Tablet Timeline Stepper Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {PROCESS_STEPS.map((s) => {
            const isSelected = activeStep === s.step;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#E5F5E0] border-[#238B45] shadow-xs'
                    : 'bg-white border-[#E5F5E0] hover:border-[#A1D99B]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#005A32]' : 'text-slate-400'}`}>
                    0{s.step}
                  </span>
                  {getStepIcon(s.step)}
                </div>
                <p className={`text-xs sm:text-sm font-bold font-['Space_Grotesk'] ${isSelected ? 'text-[#005A32]' : 'text-slate-700'}`}>
                  {s.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Focus Card */}
        <div className="rounded-2xl bg-[#F7FCF5] border border-[#C7E9C0] p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-white font-bold bg-[#238B45] px-2.5 py-1 rounded-md shadow-xs">
                  {currentStepData.duration}
                </span>
                <span className="text-xs text-slate-500 font-mono font-semibold">Stage 0{currentStepData.step} of 06</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-[#005A32]">
                {currentStepData.title}
              </h3>

              <p className="text-base text-slate-700 leading-relaxed max-w-3xl">
                {currentStepData.description}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs">
                <span className="text-slate-500 font-mono font-bold uppercase tracking-wider">Tangible Output:</span>
                <span className="text-[#005A32] font-semibold bg-white px-3.5 py-2 rounded-lg border border-[#C7E9C0] shadow-xs">
                  {currentStepData.deliverables}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 rounded-xl bg-white border border-[#E5F5E0] text-xs space-y-2 shadow-xs">
                <p className="font-bold text-[#005A32] font-['Space_Grotesk']">Quality Guarantee</p>
                <p className="text-slate-600 leading-relaxed">
                  No stage transitions without client walkthrough and sign-off. You stay in full control from day one.
                </p>
              </div>

              <div className="flex items-center justify-between text-xs pt-2">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 1 ? prev - 1 : 6))}
                  className="text-slate-600 hover:text-[#005A32] font-semibold cursor-pointer"
                >
                  &larr; Previous Stage
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < 6 ? prev + 1 : 1))}
                  className="text-[#238B45] hover:text-[#005A32] font-bold cursor-pointer"
                >
                  Next Stage &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
