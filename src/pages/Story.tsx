import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Quote, Heart, Target, Sparkles, User, History } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Story = () => {
  return (
    <div className="bg-primary min-h-screen text-ink">
      {/* Editorial Header */}
      <section className="pt-24 pb-32 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
             <div className="flex justify-center mb-8">
               <div className="p-4 border border-accent/20 text-accent rounded-sm">
                 <History size={24} />
               </div>
             </div>
             <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-[0.85] text-ink uppercase">
               One Accident. <br />
               <span className="text-accent underline decoration-1 underline-offset-8 uppercase italic">One Mission.</span>
             </h1>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 text-xl text-ink-muted leading-relaxed max-w-xl font-light">
            <p className="first-letter:text-8xl first-letter:font-black first-letter:text-accent first-letter:float-left first-letter:mr-4 first-letter:mt-2 uppercase first-letter:leading-none">
              In 2018, everything changed. A motorcycle accident left our founder, Marco de Silva, searching for a wheelchair that matched his active lifestyle. What he found were hospital-grade tools that felt like obstacles, not enablers.
            </p>
            <p>
              "The industry was focused on maintenance, not performance. I felt like the world saw my injury before they saw me. I wanted to build something that screamed 'autonomy' through design."
            </p>
            <div className="py-12 px-8 bg-white/5 border-l-2 border-accent rounded-sm italic font-display text-ink text-2xl relative overflow-hidden">
               <Quote className="absolute top-4 right-4 text-accent/10 w-20 h-20 -z-0" />
               <p className="relative z-10 leading-snug">
                 Mobility is a human right. Inclusion is a design mandate.
               </p>
            </div>
            <p className="text-sm uppercase tracking-wider leading-relaxed opacity-60">
              Chronos Wheels was born from that frustration. By merging aerospace carbon fiber with modern AI biometrics, we've created a direct-to-consumer platform that bypasses the bureaucratic friction of traditional medical supply chains.
            </p>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-surface-dark rounded-sm overflow-hidden shadow-2xl relative border-subtle"
            >
              <img 
                src="https://picsum.photos/seed/story-img/1200/1600" 
                alt="Marco" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale opacity-50 transition-all duration-1000 hover:opacity-100 hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
              <div className="absolute bottom-10 left-10">
                <span className="text-technical text-accent mb-2 block">The Lab, 2024</span>
                <h3 className="text-2xl font-display font-black uppercase tracking-tight">Reinventing the movement.</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-display font-black tracking-widest uppercase mb-4 text-ink">Core Directives</h2>
            <div className="w-12 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-subtle">
            {[
              { icon: Heart, title: 'Radical Empathy', desc: 'Every design choice is rooted in lived experience. We are our own core users and harshest critics.' },
              { icon: Sparkles, title: 'Disruptive Tech', desc: 'We ignore the industry standards. We look to aerospace and AI nodes to set new global benchmarks.' },
              { icon: Target, title: 'Total Autonomy', desc: 'Our goal is for you to forget you are using a tool. It should be a seamless biometric extension of self.' },
            ].map((value, i) => (
              <div key={i} className="bg-primary p-12 border-r border-white/10 hover:bg-white/5 transition-all duration-300 group last:border-r-0">
                <div className="w-14 h-14 border border-accent/20 text-accent flex items-center justify-center mb-10 group-hover:bg-accent group-hover:text-black transition-all">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-display font-black uppercase tracking-widest mb-6 text-ink">{value.title}</h3>
                <p className="text-ink-muted leading-relaxed text-xs uppercase tracking-tight opacity-70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-5xl font-display font-medium mb-10 tracking-tight">Join the movement.</h2>
          <NavLink 
             to="/product"
             className="inline-flex items-center space-x-2 px-10 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-accent transition-all shadow-xl hover:-translate-y-1"
          >
            <span>Explore Smart-Alpha</span>
            <Sparkles size={20} className="text-accent" />
          </NavLink>
        </div>
      </section>
    </div>
  );
};
