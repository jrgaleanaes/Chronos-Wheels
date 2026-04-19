import React from 'react';
import { motion } from 'motion/react';
import { FileText, Layout, MousePointer2, ShieldCheck, Zap, Globe, Layers, Map, Lock, Database } from 'lucide-react';

export const Blueprint = () => {
  return (
    <div className="bg-primary min-h-screen text-ink py-20 font-sans">
      {/* Technical Header */}
      <section className="border-b border-white/10 pb-20 mb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <div className="inline-block px-3 py-1 bg-accent text-black text-[10px] font-black uppercase tracking-[0.2em] mb-4">Internal System Blueprint v6.4</div>
              <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-[0.85] uppercase text-ink">
                Chronos <br />
                <span className="text-accent underline decoration-1 underline-offset-8 uppercase">Architecture.</span>
              </h1>
            </div>
            <p className="max-w-md text-technical text-white/30 pb-2">
              Foundational matrix for the direct-to-consumer mobility revolution. Focus on Conversion, Accessibility, and Autonomous Trust.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Site Map */}
          <div className="lg:col-span-1 space-y-12">
            <div className="bg-surface-dark p-8 border border-white/10 rounded-sm shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Map size={80} />
              </div>
              <div className="flex items-center space-x-2 mb-8 border-b border-white/5 pb-4">
                <Map size={18} className="text-accent" />
                <h3 className="text-xs font-black uppercase tracking-widest text-ink">01. Vector: Site Map</h3>
              </div>
              <ul className="space-y-4 text-technical text-white/50 lowercase italic">
                <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"/> <span>Homepage / Conversion Rail</span></li>
                <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-accent rounded-full"/> <span>Smart-Alpha Series / Config Hub</span></li>
                <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-accent rounded-full"/> <span>The Story / Founder Trust Anchor</span></li>
                <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-accent rounded-full"/> <span>Uplink / Tele-Booking Funnel</span></li>
                <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-white rounded-full"/> <span className="text-accent font-bold not-italic">Internal Design System (Blueprint)</span></li>
              </ul>
            </div>

            <div className="bg-surface-dark p-8 border border-white/10 rounded-sm shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Database size={80} />
              </div>
              <div className="flex items-center space-x-2 mb-8 border-b border-white/5 pb-4">
                <Database size={18} className="text-accent" />
                <h3 className="text-xs font-black uppercase tracking-widest text-ink">02. Stack: Systems</h3>
              </div>
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-[8px] font-black uppercase tracking-widest text-white/30">Framework Core</span>
                  <p className="text-xs font-bold text-ink uppercase">React 18 / Vite / TS</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[8px] font-black uppercase tracking-widest text-white/30">Motion Engine</span>
                  <p className="text-xs font-bold text-ink uppercase">Motion v11.1</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[8px] font-black uppercase tracking-widest text-white/30">Visual Matrix</span>
                  <p className="text-xs font-bold text-ink uppercase">Tailwind CSS 4.0</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[8px] font-black uppercase tracking-widest text-white/30">Intelligence Node</span>
                  <p className="text-xs font-bold text-ink uppercase italic text-accent">Gemini-AI integrated</p>
                </div>
              </div>
            </div>
          </div>

          {/* CRO & Content Strategy */}
          <div className="lg:col-span-2 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface-dark p-10 border border-white/10 rounded-sm">
                <Zap size={24} className="text-accent mb-6" />
                <h4 className="font-display font-black text-xl mb-4 uppercase tracking-tighter text-ink">Conversion Hooks</h4>
                <p className="text-xs text-white/40 mb-8 uppercase tracking-widest leading-relaxed">Psychological triggers to bypass "Medical Dread" and maximize "Disruptive Excitement".</p>
                <ul className="space-y-4 text-technical text-ink/70 lowercase">
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-black">/</span>
                    <span>Micro-ping on scroll: "Alpha-Linked" green status for active sensors.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-black">/</span>
                    <span>Zero-Gravity UI: High-contrast dark theme emphasizing carbon-fiber strength.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-black">/</span>
                    <span>Direct Uplink: 1-click VR assessment booking with clinical specialists.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-surface-dark p-10 border border-white/10 rounded-sm">
                <ShieldCheck size={24} className="text-accent mb-6" />
                <h4 className="font-display font-black text-xl mb-4 uppercase tracking-tighter text-ink">Legal & Compliance</h4>
                <p className="text-xs text-white/40 mb-8 uppercase tracking-widest leading-relaxed">Strict architecture for handling sensitive biometric and health telemetry data.</p>
                <div className="space-y-4">
                   <div className="bg-white/5 p-4 border border-white/10 text-[10px] text-ink-muted leading-relaxed uppercase tracking-widest">
                     <span className="font-black text-accent block mb-2">PROFECO / ARCO Rights</span>
                     Automated PII deletion workflows and transparent data-usage dashboards.
                   </div>
                   <div className="bg-white/5 p-4 border border-white/10 text-[10px] text-ink-muted leading-relaxed uppercase tracking-widest">
                     <span className="font-black text-accent block mb-2">WCAG 2.1 AA Compliance</span>
                     Accessible font sizing, high-contrast ratios, and screen-readable 3D data.
                   </div>
                </div>
              </div>
            </div>

            {/* Wireframe Strategy List */}
            <div className="bg-black p-12 border border-white/10 rounded-sm">
               <h3 className="font-display font-black text-4xl mb-12 tracking-tighter border-b border-white/5 pb-8 uppercase text-ink">Content Matrix Strategy</h3>
               <div className="space-y-16">
                 {[
                   { page: 'Home', h1: 'Redefining Autonomy.', intent: 'Direct redirect to 3D D2C Configurator.' },
                   { page: 'Product', h1: 'Alpha Carbon.', intent: 'Feature-Spec deep dive + VR Customization CTA.' },
                   { page: 'Story', h1: 'One Mission.', intent: 'Establish trust via Founder-Effect narrative.' },
                   { page: 'Booking', h1: 'Remote Assessment.', intent: 'Secure clinical coordination uplink.' }
                 ].map((item, i) => (
                   <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-8">
                     <div>
                       <span className="text-technical text-accent mb-2 block">VECTOR 0{i+1}</span>
                       <h5 className="font-display font-black text-lg uppercase text-ink">{item.page} Hub</h5>
                     </div>
                     <div className="md:col-span-2">
                       <p className="text-technical text-white/20 mb-2 uppercase">Primary Copy Vector</p>
                       <p className="text-sm font-black text-ink uppercase tracking-widest">H1: "{item.h1}"</p>
                     </div>
                     <div className="bg-white text-black p-4 text-[10px] leading-relaxed uppercase tracking-tighter font-black self-start">
                       <span className="opacity-50 block mb-2">Goal_Output:</span>
                       {item.intent}
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-[8px] text-white/20 uppercase tracking-[0.5em] font-black">
         <span>Property of Chronos Wheels Systems</span>
         <span>Matrix Release v6.4.0</span>
      </div>
    </div>
  );
};
