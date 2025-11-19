import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-wood-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Composition */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto lg:ml-0">
              <img 
                src="https://picsum.photos/id/14/800/1000" 
                alt="Master carpenter working on detail" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-wood-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -z-0 hidden lg:block"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-wood-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -z-0 hidden lg:block"></div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 lg:pl-10">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-px w-12 bg-wood-400"></div>
              <span className="uppercase tracking-widest text-wood-600 text-sm font-semibold">Our Story</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-wood-900 mb-8 leading-tight">
              Three Generations of <br/>
              <span className="italic text-wood-600">Uncompromising Quality</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Founded in 1984 by Arthur Faulkner, our workshop began with a simple philosophy: listen to the wood, and listen to the client. Today, we carry that torch forward, blending traditional joinery techniques with modern sustainable design.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We believe that a renovation isn't just about changing a space—it's about elevating the way you live. Every beam we place and every cabinet we craft is a testament to patience, precision, and the serene beauty of natural materials.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-wood-200 pt-8">
              <div>
                <h4 className="font-serif text-4xl text-wood-800 mb-2">40+</h4>
                <p className="text-slate-500 text-sm uppercase tracking-wider">Years of Experience</p>
              </div>
              <div>
                <h4 className="font-serif text-4xl text-wood-800 mb-2">500+</h4>
                <p className="text-slate-500 text-sm uppercase tracking-wider">Homes Transformed</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};