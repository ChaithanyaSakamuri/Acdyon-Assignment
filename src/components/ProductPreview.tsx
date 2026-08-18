import React, { useState } from 'react';
import {
  LayoutDashboard,
  Inbox,
  ListTodo,
  FolderKanban,
  LineChart,
  Search,
  Bell,
  ArrowUpRight,
  Sparkles,
  Zap,
  Check,
  Clock,
} from 'lucide-react';
import { initialPriorities, initialSignals, activityFeed, type PriorityItem } from '../data/dashboardData';

export const ProductPreview: React.FC = () => {
  const [priorities, setPriorities] = useState<PriorityItem[]>(initialPriorities);
  const [activeTab, setActiveTab] = useState('Overview');
  const [activeTaskModal, setActiveTaskModal] = useState<PriorityItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  const togglePriority = (id: string) => {
    setPriorities((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const filteredPriorities = priorities.filter((p) => {
    if (filterCategory === 'ALL') return true;
    return p.category === filterCategory;
  });

  return (
    <section id="product" className="py-20 md:py-28 relative bg-[#090D16]">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] bg-indigo-600/10 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>THE LIVE PRODUCT EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Designed for clarity, built for execution.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Below is an exact interactive preview of the SignalFlow engine synthesis dashboard.
          </p>
        </div>

        {/* Dashboard Shell Container */}
        <div className="glass-panel rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Top Bar */}
          <div className="bg-slate-900/90 border-b border-white/10 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
            {/* Top Left Brand & Status */}
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-md shadow-indigo-600/40">
                SF
              </div>
              <span className="font-semibold text-sm text-white hidden sm:inline-block">
                SignalFlow Workspace
              </span>
              <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                v2.4 Live Synthesis
              </span>
            </div>

            {/* Top Search Bar */}
            <div className="flex-1 max-w-md mx-2">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  readOnly
                  placeholder="Search signals, priorities, context notes (Press ⌘K)..."
                  className="w-full bg-slate-950/80 text-xs text-slate-300 pl-9 pr-4 py-2 rounded-lg border border-white/10 focus:outline-none placeholder-slate-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Top Right User Profile & Notifications */}
            <div className="flex items-center gap-3">
              <button
                className="relative p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                aria-label="View Notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              </button>

              <div className="flex items-center gap-2.5 pl-2 border-l border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                  alt="Chaitu avatar"
                  className="w-8 h-8 rounded-full border border-indigo-400/40 object-cover"
                />
                <div className="hidden lg:block text-left">
                  <p className="text-xs font-semibold text-white leading-tight">Chaitu</p>
                  <p className="text-[10px] text-slate-400 leading-tight">Lead Product Designer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Body Layout: Sidebar + Main Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-2 bg-slate-950/60 border-b lg:border-b-0 lg:border-r border-white/10 p-3 sm:p-4 flex lg:flex-col justify-between overflow-x-auto custom-scrollbar">
              <div className="flex lg:flex-col gap-1 w-full">
                {[
                  { name: 'Overview', icon: LayoutDashboard, badge: 'Live' },
                  { name: 'Inbox', icon: Inbox, count: 5 },
                  { name: 'Priorities', icon: ListTodo, count: 3 },
                  { name: 'Projects', icon: FolderKanban },
                  { name: 'Insights', icon: LineChart },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.name;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setActiveTab(item.name)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 shadow-inner'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
                        <span>{item.name}</span>
                      </div>
                      {item.badge && (
                        <span className="hidden lg:inline-block px-1.5 py-0.5 text-[9px] font-mono rounded bg-emerald-500/20 text-emerald-300">
                          {item.badge}
                        </span>
                      )}
                      {item.count && (
                        <span className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-white/10 text-slate-300">
                          {item.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Sidebar Footer Context */}
              <div className="hidden lg:block pt-4 border-t border-white/10 space-y-2">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-medium">Signal Clarity</span>
                    <span className="text-emerald-400 font-bold font-mono">92%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[92%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Dashboard Area */}
            <div className="lg:col-span-10 p-4 sm:p-6 lg:p-8 space-y-6 bg-slate-900/40">
              {/* Header Greeting */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    Good morning, Chaitu.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Here’s what needs your attention based on real-time signal analysis.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-indigo-400" />
                    <span>3 Urgent Moves Identified</span>
                  </div>
                </div>
              </div>

              {/* Top Banner Card 3: NEXT MOVE SPOTLIGHT */}
              <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-indigo-500/40 shadow-xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[60px] pointer-events-none rounded-full" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 font-mono">
                        TOP RECOMMENDED NEXT MOVE
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      Resolve checkout validation before the next release.
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      7 customer feedback notes &amp; 2 crash logs point to card expiration month formatting on Safari mobile. Addressing this unblocks sprint deployment.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-start md:self-center">
                    <button
                      onClick={() =>
                        setActiveTaskModal({
                          id: 'p-1',
                          title: 'Fix checkout validation before next release',
                          category: 'Product Infrastructure',
                          urgency: 'HIGH',
                          completed: false,
                          timeEstimate: '45 mins',
                          impactScore: 94,
                        })
                      }
                      className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02]"
                    >
                      <span>Open task</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Grid Layout: Priority Queue + Signal Summary */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* 1. Priority Queue Card */}
                <div className="lg:col-span-7 glass-card rounded-2xl p-5 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ListTodo className="w-4 h-4 text-indigo-400" />
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                        Priority Queue
                      </h4>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex items-center gap-1">
                      {['ALL', 'Product Infrastructure', 'User Experience'].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setFilterCategory(cat)}
                          className={`px-2 py-1 rounded text-[10px] font-medium transition-colors ${
                            filterCategory === cat
                              ? 'bg-indigo-600 text-white'
                              : 'bg-white/5 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {cat === 'ALL' ? 'All' : cat === 'Product Infrastructure' ? 'Infra' : 'UX'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Priority List items */}
                  <div className="space-y-2.5">
                    {filteredPriorities.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => togglePriority(item.id)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          item.completed
                            ? 'bg-slate-950/40 border-white/5 opacity-60'
                            : 'bg-slate-900/90 border-white/10 hover:border-indigo-500/40'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                              item.completed
                                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                                : 'border-slate-600 hover:border-indigo-400'
                            }`}
                          >
                            {item.completed && <Check className="w-3.5 h-3.5" />}
                          </div>

                          <div className="space-y-0.5">
                            <p
                              className={`text-xs sm:text-sm font-medium ${
                                item.completed ? 'line-through text-slate-400' : 'text-slate-200'
                              }`}
                            >
                              {item.title}
                            </p>
                            <div className="flex items-center gap-2 text-[10px] text-slate-400">
                              <span>{item.category}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-2.5 h-2.5" />
                                {item.timeEstimate}
                              </span>
                            </div>
                          </div>
                        </div>

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
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Signal Summary Card */}
                <div className="lg:col-span-5 glass-card rounded-2xl p-5 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                        Signal Summary
                      </h4>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">3 sources synchronized</span>
                  </div>

                  <div className="space-y-3">
                    {initialSignals.map((signal) => (
                      <div
                        key={signal.id}
                        className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 space-y-2 hover:border-white/20 transition-colors"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-200">{signal.title}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                            {signal.count} Signals
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {signal.snippet}
                        </p>
                        <div className="flex items-center justify-between text-[10px] pt-1 text-slate-400 border-t border-white/5">
                          <span className="text-indigo-400 font-medium">{signal.source}</span>
                          <span className="font-mono text-emerald-400">{signal.trend}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. Timeline / Activity Stream */}
              <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                      Real-Time Context Activity
                    </h4>
                  </div>
                  <span className="text-xs text-slate-400">Auto-synced</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {activityFeed.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-slate-900/70 border border-white/5 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={item.user.avatar}
                            alt={item.user.name}
                            className="w-6 h-6 rounded-full object-cover border border-white/10"
                          />
                          <span className="text-xs font-semibold text-slate-200">
                            {item.user.name}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {item.timestamp}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">
                        {item.action}{' '}
                        <span className="text-white font-medium">{item.target}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Notice Note (Assessment Requirement 7) */}
              <div className="text-center pt-2">
                <p className="text-[11px] text-slate-400 font-mono">
                  * Note: Dashboard values are simulated product data designed to demonstrate SignalFlow UI architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Details Modal */}
      {activeTaskModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="glass-panel max-w-lg w-full rounded-2xl p-6 border border-white/20 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="px-2.5 py-1 rounded text-xs font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                {activeTaskModal.urgency} PRIORITY TASK
              </span>
              <button
                onClick={() => setActiveTaskModal(null)}
                className="text-slate-400 hover:text-white text-xs font-semibold p-1"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">{activeTaskModal.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Attached Context: 7 customer feedback notes mention payment form validation failure on Mobile Safari when entering international card expiration dates.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10 text-xs space-y-1.5 font-mono text-slate-300">
              <div className="text-indigo-400 font-semibold">Recommended Fix Plan:</div>
              <div>1. Update regex validator in checkout-validator.ts</div>
              <div>2. Run safari mobile automated assertion specs</div>
              <div>3. Deploy hotfix patch to production</div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setActiveTaskModal(null)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
              >
                Mark In Progress
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
