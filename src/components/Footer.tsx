import React from 'react';
import { Activity } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/10 pb-8">
          {/* Left Brand */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Activity className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-white font-sans">
                SignalFlow
              </span>
            </div>
            <p className="text-slate-400 max-w-sm text-xs leading-relaxed">
              Clarity for the work that moves things forward. Ingestion, synthesis, and focused priority execution.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-6 text-slate-300 font-medium">
            <a href="#product" className="hover:text-white transition-colors">
              Product
            </a>
            <a href="#demo" className="hover:text-white transition-colors">
              Interactive Demo
            </a>
            <a href="#workflow" className="hover:text-white transition-colors">
              Workflow
            </a>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              How It Works
            </a>
          </div>
        </div>

        {/* Assessment Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400">
          <p className="font-mono text-[11px]">
            © {new Date().getFullYear()} SignalFlow Systems Inc. All rights reserved.
          </p>
          <div className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-indigo-300">
            Concept product created for the Acdyon Technologies frontend challenge.
          </div>
        </div>
      </div>
    </footer>
  );
};
