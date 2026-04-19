import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, ShieldCheck, Zap, Star, Activity, UserPlus } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 pr-12 border-r border-white/5"
          >
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-[10px] font-bold tracking-widest uppercase">
              <span className="animate-pulse">●</span> AI-POSTURE INTEGRATED
            </div>
            <h1 className="text-7xl md:text-9xl font-display font-black leading-[0.85] text-ink mb-6 tracking-tighter uppercase">
              Redefining <br />
              <span className="text-accent underline decoration-1 underline-offset-8">Autonomy.</span>
            </h1>
            <p className="text-xl text-ink-muted max-w-md mb-10 leading-relaxed font-light">
              The Smart-Alpha is the world’s first ultra-lightweight carbon fiber wheelchair with real-time biometric feedback.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink 
                to="/product"
                className="flex-1 bg-white text-black py-5 text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-accent transition-all transform hover:-translate-y-1"
              >
                Start 3D Configurator
                <ArrowRight size={18} />
              </NavLink>
              <NavLink 
                to="/product"
                className="flex-1 border border-white/20 text-white py-5 text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/5 transition-all"
              >
                View The Tech
              </NavLink>
            </div>

            {/* Founder Segment */}
            <div className="mt-16 flex items-start gap-6 p-6 bg-white/5 rounded-sm border-l-2 border-accent">
              <div className="w-14 h-14 rounded-full bg-surface-dark flex-shrink-0 border-2 border-accent overflow-hidden">
                <img src="https://picsum.photos/seed/founder-small/100/100" alt="Marco" className="grayscale" />
              </div>
              <div>
                <p className="text-sm italic text-ink/80 mb-2 leading-relaxed">"I built Chronos because the world shouldn't slow down when your mobility changes. We design for the athlete, the parent, the pioneer."</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-accent">Marco de Silva, Founder</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative h-full flex flex-col bg-surface-dark p-12"
          >
            <div className="flex-1 flex items-center justify-center relative">
               {/* Circular HUD Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-[120%] h-[120%] border border-accent/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
                 <div className="absolute w-[140%] h-[140%] border border-white/5 rounded-full" />
              </div>
              
              <div className="relative z-10">
                <img 
                  src="https://picsum.photos/seed/mobility/800/1000" 
                  alt="Smart-Alpha Wheelchair" 
                  referrerPolicy="no-referrer"
                  className="w-full max-w-[340px] aspect-[3/4] object-cover rounded-sm shadow-2xl grayscale"
                />
                {/* HUD Tags */}
                <div className="absolute -top-4 -right-12 bg-black/80 border border-white/20 p-3 rounded-sm text-[10px] backdrop-blur-md">
                   <div className="text-accent font-black uppercase tracking-widest">Posture Sync</div>
                   <div className="text-white opacity-60">98% Fit Accuracy</div>
                </div>
                <div className="absolute bottom-12 -left-12 bg-black/80 border border-white/20 p-3 rounded-sm text-[10px] backdrop-blur-md">
                   <div className="text-accent font-black uppercase tracking-widest">Carbon Weave</div>
                   <div className="text-white opacity-60">3.2kg Chassis</div>
                </div>
              </div>
            </div>

            <div className="h-32 border-t border-white/10 flex items-center justify-between">
               <div className="text-technical text-ink-muted">
                 System: Active <br /> Core: 6.0 GHz
               </div>
               <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center text-accent">
                 <Cpu size={18} />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-black py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-technical text-white/40 mb-10">Trusted by Global Adaptive Communities</p>
          <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale invert">
            <span className="text-2xl font-display font-black tracking-tighter">MED-TECH</span>
            <span className="text-2xl font-display font-black tracking-tighter">POSTURE-MAX</span>
            <span className="text-2xl font-display font-black tracking-tighter">PARA-SPORT</span>
            <span className="text-2xl font-display font-black tracking-tighter">ZERO-GRAVITY</span>
          </div>
        </div>
      </section>

      {/* Core Innovation Section */}
      <section className="py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-subtle">
            <div className="p-12 border-r border-white/10 space-y-6 hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-display font-bold uppercase tracking-tight">Postural Intelligence</h3>
              <p className="text-sm text-ink-muted leading-relaxed">Our AI core tracks spine alignment 10,000 times a second, adjusting tension via adaptive haptic sensors.</p>
            </div>
            <div className="p-12 border-r border-white/10 space-y-6 hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-display font-bold uppercase tracking-tight">Ultra-Light Frame</h3>
              <p className="text-sm text-ink-muted leading-relaxed">Aerospace-grade T1000 carbon fiber enables a total weight of sub-4kg. Strength without the burden.</p>
            </div>
            <div className="p-12 space-y-6 hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-display font-bold uppercase tracking-tight">VR Simulation</h3>
              <p className="text-sm text-ink-muted leading-relaxed">Experience your custom setup in a virtual world before manufacture. Zero friction, total certainty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="text-[30vw] font-black text-white leading-none select-none tracking-tighter opacity-10 blur-sm">AUTONOMY</div>
        </div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="inline-block border border-accent text-accent px-4 py-1 mb-8 text-[10px] font-black uppercase tracking-widest">
            Limited Beta Access
          </div>
          <h2 className="text-6xl md:text-8xl font-display font-black mb-12 tracking-tighter uppercase text-ink">Take Command <br /> of your movement.</h2>
          <NavLink 
            to="/booking"
            className="inline-flex items-center justify-center px-10 py-5 bg-accent text-black font-black uppercase tracking-widest text-sm rounded-sm hover:brightness-110 transition-all shadow-2xl shadow-accent/20"
          >
            Book Virtual Assessment
          </NavLink>
          <p className="mt-8 text-technical text-white/30 uppercase">Clinical specialists available 24/7</p>
        </div>
      </section>
    </div>
  );
};
