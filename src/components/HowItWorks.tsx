import React from 'react';
import { ShieldCheck, Cpu, GitMerge } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 relative bg-[#090D16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>ARCHITECTURE & INTEGRATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Built to fit your existing stack.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            SignalFlow connects directly into your existing tools via read-only APIs and webhooks — zero database migrations or workflow replacements required.
          </p>
        </div>

        {/* 3 Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 space-y-4 hover:border-indigo-500/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <GitMerge className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">1. Read-Only Ingestion</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Connects to Linear, Jira, GitHub, Slack, and Zendesk through secure OAuth connectors. Signals are continuously indexed without altering your source data.
            </p>
            <div className="text-[11px] font-mono text-indigo-400 pt-2 border-t border-white/5">
              • Zero write access required
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 space-y-4 hover:border-indigo-500/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">2. Real-Time Clustering</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our lightweight NLP engine groups related feedback notes, crash logs, and task tickets into single actionable clusters so no signal is lost.
            </p>
            <div className="text-[11px] font-mono text-emerald-400 pt-2 border-t border-white/5">
              • Under 15ms synthesis speed
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 space-y-4 hover:border-indigo-500/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">3. Context-Rich Dispatch</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              When a priority is selected, SignalFlow generates complete execution specs with full customer &amp; code context attached for instant handover.
            </p>
            <div className="text-[11px] font-mono text-amber-400 pt-2 border-t border-white/5">
              • Eliminates preliminary triage meetings
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
