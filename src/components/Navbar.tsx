import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navigation = [
    { name: 'Products', href: '/product' },
    { name: 'Tele-Consultation', href: '/booking' },
    { name: 'Our Story', href: '/story' },
    { name: 'Blueprint', href: '/blueprint' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10" role="navigation" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-8">
            <NavLink to="/" className="flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-accent rounded-lg">
              <span className="font-display font-bold text-2xl tracking-tighter text-accent">CHRONOS</span>
              <span className="font-display font-light text-2xl tracking-tighter text-ink underline decoration-1 underline-offset-4">WHEELS</span>
            </NavLink>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "text-xs font-bold uppercase tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-2 py-1",
                    isActive ? "text-accent" : "text-ink/70 hover:text-ink"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="flex items-center space-x-4 border-l border-white/10 pl-6">
              <button className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                ACCESSIBILITY: AA
              </button>
              <NavLink 
                to="/booking"
                className="bg-accent text-black px-6 py-2.5 rounded-sm font-black text-xs tracking-widest uppercase hover:brightness-110 transition-all"
              >
                Book Consultation
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-primary focus:outline-none focus:ring-2 focus:ring-accent rounded-md"
              aria-expanded={isOpen}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block px-3 py-4 text-base font-medium rounded-xl transition-colors",
                      isActive ? "bg-accent/5 text-accent" : "text-primary hover:bg-gray-50"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
