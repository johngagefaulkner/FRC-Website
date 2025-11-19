import React from 'react';
import { Home, Ruler, Armchair, Hammer } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Complete Remodeling",
    description: "From kitchens to extensions, we manage the entire lifecycle of your renovation with minimal disruption to your daily tranquility.",
    icon: <Home size={32} />,
  },
  {
    title: "Custom Cabinetry",
    description: "Bespoke storage solutions designed to fit your lifestyle perfectly, handcrafted in our local workshop.",
    icon: <Hammer size={32} />,
  },
  {
    title: "Furniture Restoration",
    description: "Breathing new life into beloved heirlooms using traditional techniques and organic finishes.",
    icon: <Armchair size={32} />,
  },
  {
    title: "Architectural Carpentry",
    description: "Wainscoting, crown molding, and structural timber work that adds character and value to your property.",
    icon: <Ruler size={32} />,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-widest text-wood-600 text-sm font-semibold mb-2 block">Our Expertise</span>
          <h2 className="font-serif text-4xl md:text-5xl text-wood-900 mb-6">Designed for Living</h2>
          <p className="text-slate-600 text-lg">
            We don't just build; we curate environments. Our services are tailored to bring warmth, function, and elegance to every corner of your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-wood-50 hover:bg-wood-800 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl border border-wood-100"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-wood-700 mb-6 shadow-sm group-hover:bg-wood-700 group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-800 mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed group-hover:text-wood-100 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};