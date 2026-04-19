import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <NavLink to="/" className="inline-flex items-center gap-1 mb-6">
              <span className="font-display font-bold text-xl tracking-tighter text-accent uppercase">Chronos</span>
              <span className="font-display font-light text-xl tracking-tighter text-ink underline decoration-1 underline-offset-4 uppercase">Wheels</span>
            </NavLink>
            <p className="text-ink-muted text-xs leading-relaxed mb-6 max-w-xs">
              Direct-to-consumer mobility systems. Engineered with aerospace-grade carbon fibre and adaptive postural AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-ink-muted hover:text-accent transition-colors"><Facebook size={16} /></a>
              <a href="#" aria-label="Instagram" className="text-ink-muted hover:text-accent transition-colors"><Instagram size={16} /></a>
              <a href="#" aria-label="LinkedIn" className="text-ink-muted hover:text-accent transition-colors"><Linkedin size={16} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-technical text-ink mb-6">Solutions</h3>
            <ul className="space-y-3 text-[10px] uppercase font-bold tracking-widest text-ink-muted">
              <li><NavLink to="/product" className="hover:text-accent transition-colors">Smart-Alpha Chair</NavLink></li>
              <li><NavLink to="/booking" className="hover:text-accent transition-colors">VR Assessment</NavLink></li>
              <li><a href="#" className="hover:text-accent transition-colors">Replacement Parts</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-technical text-ink mb-6">Support</h3>
            <ul className="space-y-3 text-[10px] uppercase font-bold tracking-widest text-ink-muted">
              <li><NavLink to="/story" className="hover:text-accent transition-colors">Our Story</NavLink></li>
              <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Care Program</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-technical text-ink mb-6">Legal</h3>
            <ul className="space-y-3 text-[10px] uppercase font-bold tracking-widest text-ink-muted">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Privacy (ARCO)</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service (PROFECO)</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium gap-6">
          <div className="flex gap-6">
            <span>PROFECO Compliant</span>
            <span>ARCO Privacy Shield</span>
            <span>WCAG 2.1 AA</span>
          </div>
          <div className="flex gap-6 text-right">
             <span>Mexico City • San Francisco • London</span>
             <span>© {new Date().getFullYear()} Chronos Wheels</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
