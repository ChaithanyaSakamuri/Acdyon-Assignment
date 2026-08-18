import React from 'react';
import { Eye, ArrowUpDown, Paperclip, Workflow, Sparkles, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeatureGrid: React.FC = () => {
  const features = [
    {
      id: 'f-1',
      title: 'See the signal',
      description: 'Surface the information that actually needs attention instead of scanning every tool.',
      icon: Eye,
      accentColor: 'from-indigo-500/20 to-indigo-600/5',
      borderColor: 'group-hover:border-indigo-500/40',
      badge: 'Signal Ingestion',
      customVisual: (
        <div className="w-full h-32 rounded-xl bg-slate-950/90 border border-white/10 p-3 space-y-2 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-indigo-400 font-mono font-semibold">Active Ingest Streams</span>
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          </div>
          <div className="space-y-1.5">
            <div className="h-6 rounded bg-slate-900 border border-white/5 flex items-center px-2 text-[10px] text-slate-300 justify-between">
              <span>Jira #402 (Checkout validation)</span>
              <span className="text-rose-400 font-mono">High Urgency</span>
            </div>
            <div className="h-6 rounded bg-slate-900 border border-white/5 flex items-center px-2 text-[10px] text-slate-400 justify-between opacity-75">
              <span>Intercom #8901 (Safari feedback)</span>
              <span className="text-amber-400 font-mono">7 Notes</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'f-2',
      title: 'Prioritize the next move',
      description: 'Turn competing tasks into a focused sequence of actions.',
      icon: ArrowUpDown,
      accentColor: 'from-emerald-500/20 to-emerald-600/5',
      borderColor: 'group-hover:border-emerald-500/40',
      badge: 'Action Sequencing',
      customVisual: (
        <div className="w-full h-32 rounded-xl bg-slate-950/90 border border-white/10 p-3 space-y-2 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-emerald-400 font-mono font-semibold">Synthesized Sequence</span>
            <span className="text-[10px] text-slate-400">Order by Impact</span>
          </div>
          <div className="space-y-1.5">
            <div className="p-1.5 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 text-[11px] font-semibold text-emerald-300">
              <span className="w-4 h-4 rounded bg-emerald-500 text-slate-950 flex items-center justify-center text-[10px] font-bold">1</span>
              <span className="truncate">Fix checkout validation regex</span>
            </div>
            <div className="p-1 rounded bg-slate-900 border border-white/5 flex items-center gap-2 text-[10px] text-slate-400">
              <span className="w-4 h-4 rounded bg-slate-800 text-slate-300 flex items-center justify-center text-[10px]">2</span>
              <span className="truncate">Review onboarding feedback</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'f-3',
      title: 'Keep context attached',
      description: 'Give every action the context needed to move without another meeting.',
      icon: Paperclip,
      accentColor: 'from-amber-500/20 to-amber-600/5',
      borderColor: 'group-hover:border-amber-500/40',
      badge: 'Zero Knowledge Loss',
      customVisual: (
        <div className="w-full h-32 rounded-xl bg-slate-950/90 border border-white/10 p-3 space-y-2 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-amber-400 font-mono font-semibold">Context Bundle Attached</span>
            <span className="text-[10px] text-slate-400">3 Links</span>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-white/5 space-y-1 text-[10px] text-slate-300 font-mono">
            <div className="flex items-center gap-1.5 text-amber-300">
              <Paperclip className="w-3 h-3" />
              <span>Safari Card Expiration Regex Spec</span>
            </div>
            <div className="text-slate-400 truncate">Includes 7 intercom customer notes + 2 SRE crash dumps.</div>
          </div>
        </div>
      ),
    },
    {
      id: 'f-4',
      title: 'Stay in flow',
      description: 'Move from insight to action without jumping between disconnected systems.',
      icon: Workflow,
      accentColor: 'from-purple-500/20 to-purple-600/5',
      borderColor: 'group-hover:border-purple-500/40',
      badge: 'Continuous Execution',
      customVisual: (
        <div className="w-full h-32 rounded-xl bg-slate-950/90 border border-white/10 p-3 space-y-2 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-purple-400 font-mono font-semibold">1-Click Dispatch</span>
            <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <div className="p-2 rounded bg-purple-500/10 border border-purple-500/30 flex items-center justify-between text-[11px]">
            <span className="text-purple-200 font-semibold">Execute Task #P-1</span>
            <span className="px-2 py-0.5 rounded bg-purple-600 text-white font-bold text-[10px]">Active</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>ENGINEERED FOR MODERN TEAMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Product capabilities built for precision.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Four core architectural primitives designed to keep execution fast and focused.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-card rounded-2xl p-6 md:p-8 border border-white/10 space-y-6 group transition-all duration-300 ${feat.borderColor} hover:bg-white/[0.04]`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                    {feat.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Bespoke Custom Visual Widget */}
                {feat.customVisual}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
