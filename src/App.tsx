import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductPreview } from './components/ProductPreview';
import { ProblemSolution } from './components/ProblemSolution';
import { FeatureGrid } from './components/FeatureGrid';
import { InteractiveDemo } from './components/InteractiveDemo';
import { WorkflowSection } from './components/WorkflowSection';
import { HowItWorks } from './components/HowItWorks';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { EasterEgg } from './components/EasterEgg';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      {/* Konami Code Easter Egg Listener */}
      <EasterEgg />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* B. Hero Section */}
        <Hero />

        {/* C. Product Preview Dashboard */}
        <ProductPreview />

        {/* D. Problem -> Solution Section */}
        <ProblemSolution />

        {/* E. Feature Section */}
        <FeatureGrid />

        {/* F. Interactive Product Demo Section */}
        <InteractiveDemo />

        {/* G. Workflow Section */}
        <WorkflowSection />

        {/* G2. Architectural How It Works */}
        <HowItWorks />

        {/* H. Final Call to Action */}
        <CTASection />
      </main>

      {/* I. Footer */}
      <Footer />
    </div>
  );
};

export default App;
