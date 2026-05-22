"use client";

import { motion } from "motion/react";
import { MagnetButton } from "@/components/ui/magnet-button";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
     if(formRef.current) {
        const inputs = formRef.current.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement?.classList.add('border-red-500');
            });
            input.addEventListener('blur', () => {
                input.parentElement?.classList.remove('border-red-500');
            });
        });
     }
  }, []);

  return (
    <section id="contact" className="relative py-32 z-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-mono text-[var(--color-red)] tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                Initialize Sequence
              </h2>
              <h3 className="text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tighter mb-8 leading-none">
                Let's Build The <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-900">Future Together</span>
              </h3>
              <p className="text-gray-400 font-mono text-xs leading-relaxed mb-10 max-w-md uppercase tracking-wider">
                Deploy encrypted packets to our central command. Our AI systems will process your query and establish a secure channel.
              </p>

              <div className="glass-panel p-6 inline-block font-mono text-xs text-gray-500 space-y-2 border-red-500/20 shadow-[0_4px_20px_rgba(220,38,38,0.1)]">
                <div className="flex items-center gap-2">
                  <span className="text-white">kraken-cli status:</span> ONLINE
                </div>
                <div>&gt; Awaiting secure handshake...</div>
                <div className="animate-pulse">&gt; _</div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="glass-panel p-10 relative overflow-hidden group">
              {/* Animated glow background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[60px] rounded-full mix-blend-screen pointer-events-none transition-transform duration-1000 group-hover:scale-150 group-hover:bg-red-600/20"></div>
              
              <form ref={formRef} className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group/input border-b border-white/10 transition-colors duration-300">
                  <input 
                    type="text" 
                    id="identifier"
                    className="w-full bg-transparent py-4 text-white font-mono text-sm focus:outline-none focus:border-red-500 transition-colors peer placeholder-transparent"
                    placeholder="Entity Identifier"
                  />
                  <label 
                    htmlFor="identifier"
                    className="absolute left-0 top-4 text-gray-500 font-mono text-xs tracking-widest transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-red-500 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-red-500 uppercase pointer-events-none"
                  >
                    Entity Identifier [Name]
                  </label>
                </div>
                
                <div className="relative group/input border-b border-white/10 transition-colors duration-300">
                  <input 
                    type="email" 
                    id="commlimk"
                    className="w-full bg-transparent py-4 text-white font-mono text-sm focus:outline-none focus:border-red-500 transition-colors peer placeholder-transparent"
                    placeholder="Comm-Link Protocol"
                  />
                  <label 
                    htmlFor="commlimk"
                    className="absolute left-0 top-4 text-gray-500 font-mono text-xs tracking-widest transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-red-500 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-red-500 uppercase pointer-events-none"
                  >
                    Comm-Link Protocol [Email]
                  </label>
                </div>

                <div className="relative group/input pt-6 border-b border-white/10 transition-colors duration-300">
                  <textarea 
                    id="data"
                    rows={4}
                    className="w-full bg-transparent py-4 text-white font-mono text-sm focus:outline-none transition-colors resize-none peer placeholder-transparent"
                    placeholder="Transmit encrypted payload here..."
                  ></textarea>
                  <label 
                    htmlFor="data"
                    className="absolute left-0 top-6 text-gray-500 font-mono text-xs tracking-widest transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-red-500 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-red-500 uppercase pointer-events-none"
                  >
                    Encrypted Payload [Message]
                  </label>
                </div>

                <MagnetButton variant="primary" className="w-full mt-4 group/btn">
                  <span>Execute Transmission</span>
                  <div className="ml-2 w-4 h-[1px] bg-white group-hover/btn:translate-x-2 transition-transform"></div>
                </MagnetButton>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
