import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { AIConsultant } from './components/AIConsultant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-wood-300 selection:text-wood-900">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <AIConsultant />

      <footer className="bg-slate-850 text-wood-200 py-10 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h5 className="font-serif font-bold text-white text-lg">Faulkner Remodeling</h5>
            <p className="text-sm opacity-60">Crafting serenity since 1984.</p>
          </div>
          <div className="flex space-x-6 text-sm opacity-60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>&copy; {new Date().getFullYear()} Faulkner Remodeling</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;