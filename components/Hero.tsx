import React from 'react';
import { Button } from './ui/Button';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/16/1920/1080" 
          alt="Serene nature landscape reflecting craftsmanship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 lg:bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-wood-900/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white pt-20">
        <span className="animate-fade-in uppercase tracking-[0.2em] text-sm md:text-base text-wood-200 mb-4 font-semibold">
          Est. 1984 • Family Owned
        </span>
        <h1 className="animate-slide-up font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-shadow-lg">
          Crafting Serenity <br />
          <span className="text-wood-300 italic font-normal">in Every Grain</span>
        </h1>
        <p className="animate-slide-up delay-100 max-w-2xl text-lg md:text-xl text-wood-100 mb-10 leading-relaxed">
          Transforming houses into homes with bespoke carpentry, mindful remodeling, and a dedication to timeless quality.
        </p>
        
        <div className="animate-slide-up delay-200 flex flex-col md:flex-row gap-4">
          <Button variant="primary" size="lg" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth'})}>
            View Our Work
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-wood-900" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
            Start a Project
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce text-white/70">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};