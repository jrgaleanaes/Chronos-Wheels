import React from 'react';
import { motion } from 'motion/react';
import { Layers, Globe, Box, Settings, Cpu, Wind, Scissors, CheckCircle, Info } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Product = () => {
  return (
    <div className="bg-primary scroll-smooth text-ink">
      {/* Product Hero */}
      <section className="pt-20 pb-32 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="sticky top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <nav className="flex space-x-2 text-technical text-white/40 mb-8">
                <NavLink to="/" className="hover:text-accent transition-colors">Home</NavLink>
                <span>/</span>
                <span className="text-accent italic">Smart-Alpha Series</span>
              </nav>
              <h1 className="text-5xl md:text-8xl font-display font-black leading-[0.85] tracking-tighter text-ink uppercase">
                Alpha <br />
                <span className="text-accent">Carbon.</span>
              </h1>
              <p className="text-xl text-ink-muted max-w-lg leading-relaxed font-light">
                Engineering for the active athlete. Zero-gravity performance meet biometric intelligence in the world's lightest chassis.
              </p>
              
              <div className="pt-8 space-y-4">
                <div className="flex items-center space-x-3 group">
                  <div className="p-2 border border-accent/20 rounded-sm text-accent group-hover:bg-accent group-hover:text-black transition-all"><CheckCircle size={16} /></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-ink/80">Aerospace T1000 Carbon Fiber</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="p-2 border border-accent/20 rounded-sm text-accent group-hover:bg-accent group-hover:text-black transition-all"><CheckCircle size={16} /></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-ink/80">Adaptive Biometric Interface</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="p-2 border border-accent/20 rounded-sm text-accent group-hover:bg-accent group-hover:text-black transition-all"><CheckCircle size={16} /></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-ink/80">Precision Flow Hub</span>
                </div>
              </div>

              <div className="pt-10 flex flex-col space-y-4">
                <button className="w-full py-5 bg-white text-black rounded-sm font-black text-sm uppercase tracking-[0.2em] hover:bg-accent transition-all transform hover:-translate-y-1 shadow-2xl shadow-white/5">
                  Start 3D Configurator
                </button>
                <div className="flex items-center justify-center space-x-2 text-technical text-white/30">
                  <Globe size={12} />
                  <span>Available for instant VR simulation</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="bg-surface-dark rounded-sm overflow-hidden aspect-[4/5] relative border-subtle"
            >
               <img 
                 src="https://picsum.photos/seed/mobility-product/1000/1250" 
                 alt="Smart-Alpha" 
                 referrerPolicy="no-referrer"
                 className="w-full h-full object-cover grayscale opacity-80"
               />
               <div className="absolute top-6 right-6 flex flex-col space-y-2">
                 <div className="bg-black/60 backdrop-blur px-4 py-2 rounded-sm border border-white/10 text-technical text-accent flex items-center space-x-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                   <span>Matrix active</span>
                 </div>
               </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-accent transition-colors group">
                <Cpu className="text-accent mb-6 group-hover:scale-110 transition-transform" size={24} />
                <h4 className="text-sm font-display font-black uppercase tracking-widest mb-2">Neural Hub</h4>
                <p className="text-[10px] text-ink-muted leading-relaxed uppercase tracking-tighter">Integrated processing unit that manages postural alerts and tracks daily biometrics.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-accent transition-colors group">
                <Wind className="text-accent mb-6 group-hover:scale-110 transition-transform" size={24} />
                <h4 className="text-sm font-display font-black uppercase tracking-widest mb-2">Aero Flow</h4>
                <p className="text-[10px] text-ink-muted leading-relaxed uppercase tracking-tighter">Precision tuned geometry for minimal resistance and superior chassis agility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Breakdown */}
      <section className="py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-5xl font-display font-medium tracking-tighter mb-8 leading-none">The Science of <br /> <span className="text-accent">Dignified Mobility.</span></h2>
              <p className="text-gray-400 text-lg">We use the same carbon layering techniques found in Formula 1 to create a frame that responds to your intent, not just your movement.</p>
            </div>
            <div className="text-right">
              <span className="text-8xl font-display font-light text-white/10 select-none">3.8 KG</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { id: '01', title: 'Carbon Matrix', desc: 'Pre-preg carbon fiber cured at 120°C for maximum tensile strength and minimum mass.' },
              { id: '02', title: 'Biometric Fabric', desc: 'Seat upholstery integrated with piezoelectric pressure sensors every 4cm².' },
              { id: '03', title: 'Postural AI', desc: 'Edge-computing AI that learns your specific seating tendencies to prevent long-term fatigue.' },
              { id: '04', title: 'D2C Pipeline', desc: 'No wholesalers. No medical waitlists. Straight from our lab to your front door.' },
            ].map((item) => (
              <div key={item.id} className="pt-12 border-t border-white/10 hover:border-accent transition-colors group">
                <span className="text-accent font-display font-bold text-lg mb-4 block group-hover:translate-y-[-4px] transition-transform">{item.id}</span>
                <h3 className="text-xl font-display font-semibold mb-4">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VR Fitting Teaser */}
      <section className="py-32 bg-gray-50 flex items-center justify-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center z-10">
          <Globe className="mx-auto text-accent mb-8 w-16 h-16 opacity-50" />
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-8">Measure yourself in the Metaverse.</h2>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Our VR web portal uses your webcam's spatial data to generate a perfect 3D avatar. See, sit, and test your wheelchair configuration before it's even built.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="flex items-center space-x-2 px-8 py-4 bg-white border border-gray-200 rounded-full font-bold hover:shadow-xl transition-all">
              <Box size={20} />
              <span>Launch VR Browser</span>
            </button>
            <NavLink to="/booking" className="flex items-center space-x-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-accent transition-all">
              <span>Book Assisted Scan</span>
            </NavLink>
          </div>
        </div>
        
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </section>
    </div>
  );
};
