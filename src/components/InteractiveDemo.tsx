import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight } from 'lucide-react';
import { demoQueryResult } from '../data/dashboardData';

export const InteractiveDemo: React.FC = () => {
  const [queryInput, setQueryInput] = useState('Show me what needs attention.');
  const [hasExecuted, setHasExecuted] = useState(true);
  const [selectedSignalId, setSelectedSignalId] = useState<string | null>('demo-1');

  const handleRunQuery = (text?: string) => {
    if (text) setQueryInput(text);
    setHasExecuted(true);
  };

  const selectedSignal = demoQueryResult.find((s) => s.id === selectedSignalId);

  return (
    <section id="demo" className="py-20 md:py-28 relative bg-[#090D16] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-indigo-600/10 blur-[130px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>TRY IT YOURSELF</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Interactive Signal Query Demo
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Type or click a prompt below to see how SignalFlow aggregates fragmented inputs into prioritised actions in real-time.
          </p>
        </div>

        {/* Demo Widget Shell */}
        <div className="max-w-4xl mx-auto glass-panel rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
          {/* Query Bar */}
          <div className="space-y-3">
            <label htmlFor="signalQueryInput" className="block text-xs font-bold text-slate-300 font-mono uppercase tracking-wider">
              Signal Query Input
            </label>
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-indigo-400 absolute left-4" />
              <input
                id="signalQueryInput"
                type="text"
                value={queryInput}
                onChange={(e) => setQueryInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleRunQuery();
                }}
                className="w-full bg-slate-950/90 text-white pl-11 pr-32 py-3.5 rounded-xl border border-white/15 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 text-sm font-sans placeholder-slate-500 shadow-inner"
                placeholder="Ask SignalFlow to surface priorities..."
              />
              <button
                onClick={() => handleRunQuery()}
                className="absolute right-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-indigo-600/30 transition-all"
              >
                <span>Query</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Preset Buttons */}
            <div className="flex items-center gap-2 flex-wrap text-xs pt-1">
              <span className="text-slate-400 font-medium">Quick presets:</span>
              {[
                'Show me what needs attention.',
                'Filter high impact customer bugs',
                'What is blocking sprint release?',
              ].map((preset) => (
                <button
                  key={preset}
                  onClick={() => handleRunQuery(preset)}
                  className={`px-3 py-1 rounded-lg text-xs transition-all border ${
                    queryInput === preset
                      ? 'bg-indigo-600/20 text-indigo-300 border-indigo-500/40'
                      : 'bg-white/5 text-slate-400 hover:text-slate-200 border-white/10'
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          {/* Result Panel */}
          {hasExecuted && (
            <div className="space-y-6 pt-4 border-t border-white/10">
              {/* Header Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-bold text-white font-mono">
                    3 signals need your attention
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">Synthesized in &lt;10ms</span>
              </div>

              {/* Grid: Signal Results list + Detail Inspection Panel */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Results List */}
                <div className="md:col-span-7 space-y-3">
                  {demoQueryResult.map((item) => {
                    const isSelected = selectedSignalId === item.id;
                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelectedSignalId(item.id)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-indigo-950/40 border-indigo-500/50 shadow-md shadow-indigo-500/10'
                            : 'bg-slate-900/80 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                                item.urgency === 'HIGH'
                                  ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                                  : item.urgency === 'MEDIUM'
                                  ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                  : 'bg-slate-500/10 text-slate-400 border-slate-500/20'
                              }`}
                            >
                              {item.urgency}
                            </span>
                            <h4 className="text-sm font-semibold text-white truncate max-w-[200px] sm:max-w-[280px]">
                              {item.title}
                            </h4>
                          </div>
                        </div>

                        <p className="text-xs text-slate-400 line-clamp-2">
                          {item.description}
                        </p>

                        <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5 pt-2">
                          <span className="font-mono text-indigo-400">{item.sourceCount}</span>
                          <span className="text-slate-300 font-medium hover:text-white flex items-center gap-1">
                            Inspect details &rarr;
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Detail Panel */}
                <div className="md:col-span-5 glass-card rounded-xl p-5 border border-indigo-500/30 flex flex-col justify-between space-y-4">
                  {selectedSignal ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                        <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase">
                          SIGNAL DETAIL INSPECTOR
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                            selectedSignal.urgency === 'HIGH'
                              ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                              : selectedSignal.urgency === 'MEDIUM'
                              ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                              : 'bg-slate-500/10 text-slate-400 border-slate-500/20'
                          }`}
                        >
                          {selectedSignal.urgency}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-white">
                          {selectedSignal.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {selectedSignal.description}
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-950/80 border border-white/5 text-xs text-slate-300 space-y-1 font-mono">
                        <div className="text-indigo-400 font-semibold">Attached Context:</div>
                        <p className="text-[11px] text-slate-400">{selectedSignal.context}</p>
                      </div>

                      <div className="pt-2">
                        <button className="w-full px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all">
                          <span>{selectedSignal.actionText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-xs text-slate-500 py-10">
                      Click a signal on the left to inspect detailed context.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
