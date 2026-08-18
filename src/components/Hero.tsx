import React, { useState } from 'react';
import { ArrowDown, Sparkles, CheckCircle2, ArrowRight, Zap, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const [activePrompt, setActivePrompt] = useState(
    'What should we focus on today?'
  );
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedResults, setSimulatedResults] = useState([
    {
      type: 'URGENT MOVE',
      title: 'Checkout Form Error Rate Spike',
      desc: '7 customer reports linked to Safari card expiration regex.',
      action: 'Assign to Frontend Ops',
      badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    },
    {
      type: 'TEAM CONTEXT',
      title: 'v2.4 Onboarding Drop-off',
      desc: '14 user notes clustered around invite step 3 error states.',
      action: 'Cluster into Sprint 15',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    },
  ]);

  const handleSimulate = (promptText: string) => {
    setActivePrompt(promptText);
    setIsSimulating(true);
    setTimeout(() => {
      if (promptText.includes('onboarding')) {
        setSimulatedResults([
          {
            type: 'USER FEEDBACK',
            title: 'Onboarding Confusion at Step 3',
            desc: '14 session replays show members stuck on domain verification.',
            action: 'Add inline domain validation banner',
            badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
          },
          {
            type: 'NEXT STEP',
            title: 'Update Invite Flow copy',
            desc: 'Clarify multi-workspace seat allocation policies.',
            action: 'Draft text in Figma spec',
            badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
          },
        ]);
      } else if (promptText.includes('release')) {
        setSimulatedResults([
          {
            type: 'RELEASE BLOCKER',
            title: 'API Deprecation Warning',
            desc: '3 backend endpoints scheduled for shutdown in 14 days.',
            action: 'Patch auth token header format',
            badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
          },
          {
            type: 'DOCUMENTATION',
            title: 'Update v2.4 Changelog',
            desc: 'Changelog draft missing webhook retry behavior notes.',
            action: 'Publish changelog revision',
            badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
          },
        ]);
      } else {
        setSimulatedResults([
          {
            type: 'URGENT MOVE',
            title: 'Checkout Form Error Rate Spike',
            desc: '7 customer reports linked to Safari card expiration regex.',
            action: 'Assign to Frontend Ops',
            badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
          },
          {
            type: 'TEAM CONTEXT',
            title: 'v2.4 Onboarding Drop-off',
            desc: '14 user notes clustered around invite step 3 error states.',
            action: 'Cluster into Sprint 15',
            badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
          },
        ]);
      }
      setIsSimulating(false);
    }, 400);
  };

  const handleScrollToProduct = () => {
    const el = document.querySelector('#product');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToWorkflow = () => {
    const el = document.querySelector('#workflow');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-indigo-600/15 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wider uppercase shadow-inner"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span>THE WORKSPACE FOR WHAT’S NEXT</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            From scattered signals to a{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-100">
              clear next move.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            SignalFlow brings tasks, feedback, notes, and priorities into one focused workspace — so your team knows what matters next.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <button
              onClick={handleScrollToProduct}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 transition-all duration-200"
            >
              <span>Explore the workspace</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleScrollToWorkflow}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white glass-card hover:bg-white/10 transition-colors"
            >
              <span>See how it works</span>
              <ArrowDown className="w-4 h-4 text-slate-400" />
            </button>
          </motion.div>

          {/* Product Micro Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-2 text-xs text-slate-400 flex items-center justify-center gap-4 flex-wrap"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Zero setup required
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Unified context model
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Real-time priority synthesis
            </span>
          </motion.div>
        </div>

        {/* Hero Interactive Command & Live Signal Preview Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 sm:mt-16 max-w-4xl mx-auto"
        >
          <div className="glass-panel rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/10 relative overflow-hidden">
            {/* Window controls header decoration */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs text-slate-400 font-mono">signalflow-engine / priority-synthesis</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-400 font-mono bg-white/5 px-2.5 py-1 rounded-md">
                <Zap className="w-3 h-3 text-indigo-400" />
                Live Context Ingested
              </div>
            </div>

            {/* Interactive Prompt Command Area */}
            <div className="space-y-4">
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-indigo-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={activePrompt}
                  onChange={(e) => setActivePrompt(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSimulate(activePrompt);
                  }}
                  className="w-full bg-[#0F172A]/90 text-white pl-10 pr-24 py-3 rounded-xl border border-indigo-500/30 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-sm font-sans placeholder-slate-500 shadow-inner"
                  placeholder="Ask SignalFlow what to focus on..."
                />
                <button
                  onClick={() => handleSimulate(activePrompt)}
                  className="absolute right-2 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium flex items-center gap-1 transition-colors"
                >
                  {isSimulating ? (
                    <span className="inline-block w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Play className="w-3 h-3 fill-current" />
                      <span>Synthesize</span>
                    </>
                  )}
                </button>
              </div>

              {/* Preset suggestion chips */}
              <div className="flex items-center gap-2 flex-wrap text-xs">
                <span className="text-slate-400 font-medium">Try asking:</span>
                {[
                  'What should we focus on today?',
                  'Show onboarding blockers',
                  'Summarize release risks',
                ].map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSimulate(prompt)}
                    className={`px-2.5 py-1 rounded-md text-[11px] transition-all border ${
                      activePrompt === prompt
                        ? 'bg-indigo-600/30 text-indigo-300 border-indigo-500/50'
                        : 'bg-white/5 text-slate-400 hover:text-slate-200 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Generated Actionable Signal Cards */}
              <div className="space-y-2.5 pt-2">
                {simulatedResults.map((res, i) => (
                  <motion.div
                    key={res.title + i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-white/20 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border tracking-wide uppercase ${res.badgeColor}`}>
                          {res.type}
                        </span>
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-200">
                          {res.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400">{res.desc}</p>
                    </div>
                    <button className="self-start sm:self-center px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-indigo-300 hover:text-white text-xs font-medium border border-white/10 transition-colors whitespace-nowrap flex items-center gap-1">
                      <span>{res.action}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
