import React, { useState } from 'react';
import { Database, BrainCircuit, ListOrdered, Rocket, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const WorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Capture',
      subtitle: 'Collect the signals.',
      desc: 'Seamlessly ingest tasks, customer support notes, Slack threads, and GitHub activity into one real-time data stream.',
      icon: Database,
      tag: 'Data Stream Ingestion',
      badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      detailSnippet: 'Ingesting 14 Intercom notes + 3 SRE crash logs...',
    },
    {
      num: '02',
      title: 'Understand',
      subtitle: 'Group context and identify what matters.',
      desc: 'SignalFlow automatically clusters related bug reports, customer requests, and documentation tasks using semantic NLP.',
      icon: BrainCircuit,
      tag: 'Context Clustering',
      badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      detailSnippet: 'Clustered: 7 Safari Card Validation notes into ENG-402',
    },
    {
      num: '03',
      title: 'Prioritize',
      subtitle: 'Turn information into actionable priorities.',
      desc: 'Evaluate relative impact vs effort to surface a clear, unambiguous sequence of top priorities for the team.',
      icon: ListOrdered,
      tag: 'Priority Synthesis',
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      detailSnippet: 'Ranked #1: Hotfix Safari Card regex before v2.4 launch',
    },
    {
      num: '04',
      title: 'Act',
      subtitle: 'Take the next step.',
      desc: 'Dispatch actions directly to your team’s existing tools with all background context attached to prevent endless meeting cycles.',
      icon: Rocket,
      tag: '1-Click Execution',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      detailSnippet: 'Dispatched Hotfix task to Sarah Chen with full context',
    },
  ];

  return (
    <section id="workflow" className="py-20 md:py-28 relative bg-[#090D16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>HOW SIGNALFLOW WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            From noise to execution in four steps.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Click through each step below to inspect how SignalFlow transforms raw operational clutter into immediate progress.
          </p>
        </div>

        {/* Workflow Interactive Stepper Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                  isActive
                    ? 'glass-panel border-indigo-500/50 shadow-lg shadow-indigo-500/10 bg-indigo-950/30'
                    : 'glass-card border-white/5 hover:border-white/20 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-indigo-400' : 'text-slate-500'}`}>
                    {step.num}
                  </span>
                  {isActive && <CheckCircle2 className="w-4 h-4 text-indigo-400" />}
                </div>
                <h3 className={`text-sm sm:text-base font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {step.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Step Content Spotlight Box */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${steps[activeStep].badgeColor}`}>
                  STEP {steps[activeStep].num} — {steps[activeStep].tag}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {steps[activeStep].title} — <span className="text-indigo-300 font-normal">{steps[activeStep].subtitle}</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="p-4 rounded-xl bg-slate-950/90 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{steps[activeStep].detailSnippet}</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm h-64 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950/50 border border-white/15 p-6 flex flex-col justify-between shadow-inner">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>SIGNALFLOW PIPELINE</span>
                  <span>STAGE {activeStep + 1}/4</span>
                </div>

                <div className="space-y-3 my-auto text-center">
                  {React.createElement(steps[activeStep].icon, {
                    className: 'w-12 h-12 text-indigo-400 mx-auto animate-bounce duration-1000',
                  })}
                  <h4 className="text-lg font-bold text-white">
                    {steps[activeStep].title} Engine
                  </h4>
                  <p className="text-xs text-slate-400">{steps[activeStep].subtitle}</p>
                </div>

                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 rounded-full transition-all duration-300"
                    style={{ width: `${((activeStep + 1) / 4) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
