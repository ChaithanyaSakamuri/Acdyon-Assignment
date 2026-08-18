import React from 'react';
import { MessageSquare, CheckSquare, FileText, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-[#090D16] border-y border-white/5 overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-rose-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight"
          >
            Your work isn't scattered because your team is disorganized.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-indigo-300 font-medium"
          >
            It’s scattered because information lives everywhere.
          </motion.p>
        </div>

        {/* 3 Scattered Data Sources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Source 1: Scattered Tasks */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-card rounded-2xl p-6 border border-white/10 space-y-4 relative overflow-hidden group hover:border-rose-500/30 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <CheckSquare className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                SOURCE 01 — TASKS
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">40+ Pending Backlog Tickets</h3>
              <p className="text-xs text-slate-400 mt-1">
                Linear, Jira, Trello, and GitHub issues competing for attention without clear relative priority.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 text-[11px] text-slate-400 space-y-1.5 font-mono">
              <div className="flex justify-between text-slate-300">
                <span>ENG-402</span>
                <span className="text-rose-400">P1 Urgent</span>
              </div>
              <div className="truncate">Fix checkout validation regex</div>
            </div>
          </motion.div>

          {/* Source 2: Scattered Customer Feedback */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="glass-card rounded-2xl p-6 border border-white/10 space-y-4 relative overflow-hidden group hover:border-amber-500/30 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                SOURCE 02 — FEEDBACK
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">Unstructured User Voice</h3>
              <p className="text-xs text-slate-400 mt-1">
                Intercom chats, support tickets, and sales notes buried across disconnected channels.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 text-[11px] text-slate-400 space-y-1.5 font-mono">
              <div className="flex justify-between text-slate-300">
                <span>Intercom #8901</span>
                <span className="text-amber-400">7 Notes</span>
              </div>
              <div className="truncate">"Safari card month dropdown is broken"</div>
            </div>
          </motion.div>

          {/* Source 3: Scattered Team Context */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="glass-card rounded-2xl p-6 border border-white/10 space-y-4 relative overflow-hidden group hover:border-indigo-500/30 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                SOURCE 03 — CONTEXT
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">Fragmented Meeting Notes</h3>
              <p className="text-xs text-slate-400 mt-1">
                Slack threads, Notion docs, and Zoom transcripts holding critical background decision context.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 text-[11px] text-slate-400 space-y-1.5 font-mono">
              <div className="flex justify-between text-slate-300">
                <span>#proj-checkout</span>
                <span className="text-indigo-400">Slack</span>
              </div>
              <div className="truncate">"Need release notes before engineering sync"</div>
            </div>
          </motion.div>
        </div>

        {/* Visual Transformation Transition Arrow */}
        <div className="flex flex-col items-center justify-center space-y-4 my-10">
          <div className="w-px h-12 bg-gradient-to-b from-slate-700 via-indigo-500 to-emerald-500" />
          <div className="p-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-lg shadow-emerald-500/20">
            <Zap className="w-6 h-6 animate-pulse" />
          </div>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400">
            CONVERGING INTO ONE FOCUSED SIGNAL
          </span>
        </div>

        {/* Focused Solution Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-emerald-500/30 shadow-2xl text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-bold font-mono">
            <Target className="w-3.5 h-3.5 text-emerald-400" />
            <span>THE SIGNALFLOW ENGINE</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            SignalFlow turns the noise into a prioritized next move.
          </h3>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            By continuously synthesizing live data streams from your tools, SignalFlow surfaces what matters right now — with zero manual status meetings or endless document digging.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
