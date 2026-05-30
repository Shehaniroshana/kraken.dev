"use client";

import { motion } from "motion/react";
import { MagnetButton } from "@/components/ui/magnet-button";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { sendEmail } from "@/lib/actions";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const closeSuccessModal = useCallback(() => {
    setIsSuccessOpen(false);
    setStatus(null);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const result = await sendEmail(formData);
      
      if (result.success) {
        setStatus({ type: 'success', message: 'Handshake complete. Transmission received.' });
        setIsSuccessOpen(true);
        formRef.current.reset();
      } else {
        setStatus({ type: 'error', message: result.error || 'System error. Handshake failed.' });
      }
    }
    setIsSubmitting(false);
  };

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

  useEffect(() => {
    if (!isSuccessOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSuccessModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeSuccessModal, isSuccessOpen]);

  return (
    <section id="contact" className="relative py-32 z-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-red-600 text-[10px] font-display font-black uppercase tracking-[0.4em] block mb-6">Start a Project</span>
              <h3 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter mb-8 leading-[1.1]">
                Let&apos;s build the <br/> <span className="premium-gradient-text">next chapter together</span>
              </h3>
              <p className="text-gray-400 font-display font-black text-[10px] leading-relaxed mb-10 max-w-sm uppercase tracking-[0.2em]">
                If the story resonates, we&apos;re ready to turn it into software systems, digital platforms, and AI-powered experiences that feel true to your vision.
              </p>

              <div className="glass-panel p-8 inline-block bg-white/5 border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                  <span className="text-white text-[9px] font-display font-black uppercase tracking-widest">Status: Ready</span>
                </div>
                <div className="text-gray-500 text-[9px] font-display font-black uppercase tracking-widest">&gt; Awaiting the idea that starts everything...</div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="glass-panel p-10 bg-white/5 border-white/5 backdrop-blur-3xl rounded-[32px]">
              <form ref={formRef} className="space-y-10" onSubmit={handleSubmit}>
                <div className="relative group border-b border-white/10 focus-within:border-red-600 transition-colors duration-500">
                  <label htmlFor="identifier" className="text-[9px] font-display font-black text-white/30 uppercase tracking-[0.3em] block mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="identifier"
                    name="identifier"
                    required
                    className="w-full bg-transparent py-2 text-white font-display font-black text-xs focus:outline-none placeholder:text-white/5 uppercase tracking-[0.2em]"
                    placeholder="IDENT_REQUIRED"
                  />
                </div>

                <div className="relative group border-b border-white/10 focus-within:border-red-600 transition-colors duration-500">
                  <label htmlFor="commlink" className="text-[9px] font-display font-black text-white/30 uppercase tracking-[0.3em] block mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="commlink"
                    name="commlink"
                    required
                    className="w-full bg-transparent py-2 text-white font-display font-black text-xs focus:outline-none placeholder:text-white/5 uppercase tracking-[0.2em]"
                    placeholder="LINK_REQUIRED"
                  />
                </div>

                <div className="relative group border-b border-white/10 focus-within:border-red-600 transition-colors duration-500">
                  <label htmlFor="data" className="text-[9px] font-display font-black text-white/30 uppercase tracking-[0.3em] block mb-1">Message Details</label>
                  <textarea 
                    id="data"
                    name="data"
                    rows={3}
                    required
                    className="w-full bg-transparent py-2 text-white font-display font-black text-xs focus:outline-none resize-none placeholder:text-white/5 uppercase tracking-[0.2em]"
                    placeholder="DESC_REQUIRED"
                  ></textarea>
                </div>

                {status?.type === "error" && (
                  <div className="text-[9px] font-display font-black uppercase tracking-widest p-4 text-red-600 bg-red-600/5 rounded-lg border border-red-600/20">
                    &gt; {status.message}
                  </div>
                )}

                <MagnetButton variant="primary" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Transmitting...' : 'Send Inquiry'}
                </MagnetButton>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {isSuccessOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={closeSuccessModal} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 w-full max-w-md glass-panel p-12 text-center bg-black/40 rounded-[32px] border-red-600/30 shadow-[0_0_50px_rgba(220,38,38,0.2)]"
          >
            <div className="w-16 h-16 rounded-full border border-red-600/30 flex items-center justify-center mx-auto mb-8 bg-red-600/5">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-ping"></div>
            </div>
            <h4 className="text-2xl font-display font-black text-white uppercase tracking-tighter mb-4">Signal Received</h4>
            <p className="text-[10px] font-display font-black text-gray-500 uppercase tracking-[0.3em] mb-10">Handshake complete. Transmission received.</p>
            <button
              onClick={closeSuccessModal}
              className="w-full py-4 bg-white text-black text-[10px] font-display font-black uppercase tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all duration-500"
            >
              Back to Core
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
