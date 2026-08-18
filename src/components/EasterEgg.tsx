import React, { useState, useEffect } from 'react';
import { Sparkles, Activity, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const EasterEgg: React.FC = () => {
  const [, setKeySequence] = useState<string[]>([]);
  const [unlocked, setUnlocked] = useState(false);

  const konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

      // Avoid capturing input when typing in an input or textarea
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      setKeySequence((prev) => {
        const updated = [...prev, key].slice(-10);
        // Compare with Konami sequence
        const match = konamiCode.every(
          (k, index) => k.toLowerCase() === (updated[index] || '').toLowerCase()
        );
        if (match && updated.length === 10) {
          setUnlocked(true);
        }
        return updated;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {unlocked && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed top-6 right-6 z-50 max-w-md w-full glass-panel border border-indigo-400/60 p-5 rounded-2xl shadow-2xl shadow-indigo-500/30 bg-slate-950/95"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-400 p-0.5 shadow-lg shadow-indigo-500/40 animate-pulse">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Activity className="w-5 h-5 text-emerald-400" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    SIGNAL ACQUIRED
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <h4 className="text-sm font-bold text-white">
                  You found the hidden signal.
                </h4>
                <p className="text-xs text-slate-300">
                  Konami Code confirmed: <code className="text-indigo-300 font-mono">↑ ↑ ↓ ↓ ← → ← → B A</code>. Engineering mode unlocked.
                </p>
              </div>
            </div>

            <button
              onClick={() => setUnlocked(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close Easter Egg Notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
