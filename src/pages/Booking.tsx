import React from 'react';
import { motion } from 'motion/react';
import { Mail, Calendar, Video, Clock, MessageSquare, Shield, Check } from 'lucide-react';

export const Booking = () => {
  return (
    <div className="bg-primary min-h-screen text-ink">
      <section className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full text-accent border border-accent/20">
                  <Video size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Virtual Bio-Fitting</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-[0.85] text-ink uppercase">
                  Remote <br />
                  <span className="text-accent underline decoration-1 underline-offset-8 uppercase">Assessment.</span>
                </h1>
                <p className="text-xl text-ink-muted leading-relaxed max-w-md font-light">
                  Direct clinical access. Our specialists assist with your remote VR scan and verify postural metrics before production.
                </p>

                <div className="space-y-6 pt-10">
                  {[
                    "Zero-cost initial biometric consultation.",
                    "Live postural biomechanics synthesis.",
                    "Synchronous VR 1:1 fitting.",
                    "Compliance & coverage documentation."
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-4 group">
                      <div className="w-5 h-5 rounded-sm border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                        <Check size={12} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-ink/70">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-white/5 rounded-sm border border-white/10 flex items-center space-x-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent shadow-2xl">
                    <img src="https://picsum.photos/seed/doctor/200/200" alt="Specialist" className="grayscale" />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-ink uppercase tracking-wider">Dr. Sara Chen</h4>
                    <p className="text-technical text-accent">Chief clinical officer</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               className="bg-surface-dark p-10 rounded-sm shadow-2xl border border-white/10 w-full"
            >
              <div className="text-center mb-10 border-b border-white/5 pb-8">
                <h3 className="text-2xl font-display font-black uppercase tracking-widest mb-2">Request Uplink</h3>
                <p className="text-technical text-ink-muted">Select secure transmission channel</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-technical text-white/30 px-1">Identity: First</label>
                    <input type="text" className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-sm focus:outline-none focus:border-accent text-white text-xs uppercase" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-technical text-white/30 px-1">Identity: Last</label>
                    <input type="text" className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-sm focus:outline-none focus:border-accent text-white text-xs uppercase" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-technical text-white/30 px-1">Metric Focus</label>
                  <select className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-sm focus:outline-none focus:border-accent text-white text-xs uppercase appearance-none">
                    <option>Smart-Alpha Fitting</option>
                    <option>Biometric Analysis</option>
                    <option>Remote VR Assessment</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-technical text-white/30 px-1">Window Date</label>
                    <input type="date" className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-sm focus:outline-none focus:border-accent text-white text-xs invert" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-technical text-white/30 px-1">Coordination Zone</label>
                    <select className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-sm focus:outline-none focus:border-accent text-white text-xs uppercase appearance-none">
                      <option>Pacific Time (PT)</option>
                      <option>Central Time (CT)</option>
                      <option>Eastern Time (ET)</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="w-full py-6 bg-accent text-black rounded-sm font-black text-sm uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-xl shadow-accent/10">
                  Transmit Request
                </button>

                <div className="flex items-center justify-center space-x-2 text-[8px] text-white/20 uppercase tracking-[0.3em] font-black pt-4">
                  <Shield size={10} />
                  <span>Secure HIPAA-encrypted Link Established</span>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
