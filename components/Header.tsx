import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer } from 'lucide-react';
import { NavigationLink } from '../types';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2 group">
          <div className={`p-2 rounded bg-wood-800 text-white transition-transform duration-300 group-hover:rotate-12`}>
            <Hammer size={24} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif text-xl leading-none font-bold tracking-tight ${isScrolled ? 'text-wood-900' : 'text-wood-900 lg:text-white'}`}>
              FAULKNER
            </span>
            <span className={`text-[0.65rem] uppercase tracking-widest ${isScrolled ? 'text-wood-600' : 'text-wood-700 lg:text-wood-200'}`}>
              Remodeling & Carpentry
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-wood-500 ${
                isScrolled ? 'text-slate-700' : 'text-wood-100'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isScrolled 
                ? 'bg-wood-800 text-white hover:bg-wood-700' 
                : 'bg-white text-wood-900 hover:bg-wood-100'
            }`}
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-wood-800 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-wood-900' : 'text-wood-900 lg:text-white'} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-wood-50 z-50 flex flex-col items-center justify-center space-y-8 transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <button 
          className="absolute top-6 right-6 text-wood-800"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-3xl text-wood-900 hover:text-wood-600 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
};