import React from 'react';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  { id: 1, title: "The Lakeside Kitchen", category: "Remodeling", imageUrl: "https://picsum.photos/id/225/800/600" },
  { id: 2, title: "Oak Study Library", category: "Cabinetry", imageUrl: "https://picsum.photos/id/366/800/800" },
  { id: 3, title: "Minimalist Deck", category: "Exterior", imageUrl: "https://picsum.photos/id/28/800/600" },
  { id: 4, title: "Victorian Staircase", category: "Restoration", imageUrl: "https://picsum.photos/id/413/800/600" },
  { id: 5, title: "Master Suite", category: "Remodeling", imageUrl: "https://picsum.photos/id/102/800/800" },
  { id: 6, title: "Cedar Sunroom", category: "Extension", imageUrl: "https://picsum.photos/id/13/800/600" },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-wood-100/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl text-wood-900 mb-4">Selected Works</h2>
            <p className="text-slate-600">A curated collection of our recent endeavors in crafting serenity.</p>
          </div>
          <button className="hidden md:block text-wood-700 font-semibold hover:text-wood-900 transition-colors uppercase tracking-wider text-sm border-b-2 border-wood-700 pb-1 hover:border-wood-900">
            View Full Archive
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              className={`group relative overflow-hidden rounded-xl shadow-lg cursor-pointer ${idx === 1 || idx === 4 ? 'md:row-span-2 h-full' : 'h-64 md:h-80'}`}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-wood-300 text-xs uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
                <h3 className="text-white font-serif text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
           <button className="text-wood-700 font-semibold uppercase tracking-wider text-sm border-b-2 border-wood-700 pb-1">
            View Full Archive
          </button>
        </div>
      </div>
    </section>
  );
};