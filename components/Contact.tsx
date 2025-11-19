import React from 'react';
import { Button } from './ui/Button';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-wood-900 text-wood-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info */}
          <div className="lg:w-1/3 space-y-10">
            <div>
              <span className="text-wood-400 uppercase tracking-widest text-sm font-semibold mb-2 block">Contact Us</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Let's Build Something Beautiful</h2>
              <p className="text-wood-200/80 text-lg leading-relaxed">
                Ready to transform your space? Reach out for a consultation. We treat every inquiry with the attention it deserves.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-wood-400 mt-1" />
                <div>
                  <h4 className="font-serif text-lg text-white">Workshop</h4>
                  <p className="text-wood-200/70">128 Artisan Way<br/>Burlington, VT 05401</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-wood-400 mt-1" />
                <div>
                  <h4 className="font-serif text-lg text-white">Phone</h4>
                  <p className="text-wood-200/70">(555) 802-1984</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-wood-400 mt-1" />
                <div>
                  <h4 className="font-serif text-lg text-white">Email</h4>
                  <p className="text-wood-200/70">hello@faulknerremodeling.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 bg-white rounded-3xl p-8 md:p-12 text-slate-800 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600 uppercase tracking-wide">First Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-wood-50 border-none rounded-lg focus:ring-2 focus:ring-wood-400 outline-none transition-all" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-wood-50 border-none rounded-lg focus:ring-2 focus:ring-wood-400 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-wood-50 border-none rounded-lg focus:ring-2 focus:ring-wood-400 outline-none transition-all" placeholder="jane@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Project Type</label>
                <select className="w-full px-4 py-3 bg-wood-50 border-none rounded-lg focus:ring-2 focus:ring-wood-400 outline-none transition-all text-slate-600">
                  <option>Full Home Remodel</option>
                  <option>Kitchen Renovation</option>
                  <option>Custom Cabinetry</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-wood-50 border-none rounded-lg focus:ring-2 focus:ring-wood-400 outline-none transition-all resize-none" placeholder="Tell us a bit about your vision..."></textarea>
              </div>

              <Button type="submit" className="w-full bg-wood-800 hover:bg-wood-700 text-white py-4">
                Request Consultation
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};