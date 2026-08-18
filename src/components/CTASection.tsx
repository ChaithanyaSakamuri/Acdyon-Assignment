import React from 'react';
import { ArrowUp, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const CTASection: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    const el = document.querySelector('#product');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 md:py-32 relative bg-[#090D16] border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-indigo-600/15 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 sm:p-14 border border-indigo-500/30 text-center space-y-8 shadow-2xl relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>START WORKING WITH CLARITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Know what matters next.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Bring your scattered signals into focus and make the next move obvious for your entire team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={handleExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 transition-all duration-200"
            >
              <span>Explore SignalFlow</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleScrollToTop}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-medium text-slate-300 hover:text-white glass-card hover:bg-white/10 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Honest Proof Note */}
          <div className="pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center justify-center gap-4 flex-wrap font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Product-led operational clarity
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Built around zero-noise prioritization
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
