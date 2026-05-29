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
                Start the Next Chapter
              </h2>
              <h3 className="text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tighter mb-8 leading-none">
                Let&apos;s Build The <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-900">Next Chapter Together</span>
              </h3>
              <p className="text-gray-400 font-mono text-xs leading-relaxed mb-10 max-w-md uppercase tracking-wider">
                If the story resonates, we&apos;re ready to turn it into software systems, digital platforms, and AI-powered experiences that feel true to your vision.
              </p>

              <div className="glass-panel p-6 inline-block font-mono text-xs text-gray-500 space-y-2 border-red-500/20 shadow-[0_4px_20px_rgba(220,38,38,0.1)]">
                <div className="flex items-center gap-2">
                  <span className="text-white">Communication Status:</span> READY TO LISTEN
                </div>
                <div>&gt; Awaiting the idea that starts everything...</div>
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
              
              <form ref={formRef} className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                <div className="relative group/input border-b border-white/10 transition-colors duration-300">
                  <input 
                    type="text" 
                    id="identifier"
                    name="identifier"
                    required
                    className="w-full bg-transparent py-4 text-white font-mono text-sm focus:outline-none focus:border-red-500 transition-colors peer placeholder-transparent"
                    placeholder="Full Name"
                  />
                  <label 
                    htmlFor="identifier"
                    className="absolute left-0 top-4 text-gray-500 font-mono text-xs tracking-widest transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-red-500 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-red-500 uppercase pointer-events-none"
                  >
                    Your Name
                  </label>
                </div>

                <div className="relative group/input border-b border-white/10 transition-colors duration-300">
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    className="w-full bg-transparent py-4 text-white font-mono text-sm focus:outline-none focus:border-red-500 transition-colors peer placeholder-transparent"
                    placeholder="Subject"
                  />
                  <label 
                    htmlFor="subject"
                    className="absolute left-0 top-4 text-gray-500 font-mono text-xs tracking-widest transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-red-500 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-red-500 uppercase pointer-events-none"
                  >
                    Project Subject
                  </label>
                </div>
                
                <div className="relative group/input border-b border-white/10 transition-colors duration-300">
                  <input 
                    type="email" 
                    id="commlink"
                    name="commlink"
                    required
                    className="w-full bg-transparent py-4 text-white font-mono text-sm focus:outline-none focus:border-red-500 transition-colors peer placeholder-transparent"
                    placeholder="Email Address"
                  />
                  <label 
                    htmlFor="commlink"
                    className="absolute left-0 top-4 text-gray-500 font-mono text-xs tracking-widest transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-red-500 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-red-500 uppercase pointer-events-none"
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative group/input pt-6 border-b border-white/10 transition-colors duration-300">
                  <textarea 
                    id="data"
                    name="data"
                    rows={4}
                    required
                    className="w-full bg-transparent py-4 text-white font-mono text-sm focus:outline-none transition-colors resize-none peer placeholder-transparent"
                    placeholder="Your Message"
                  ></textarea>
                  <label 
                    htmlFor="data"
                    className="absolute left-0 top-6 text-gray-500 font-mono text-xs tracking-widest transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-red-500 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-red-500 uppercase pointer-events-none"
                  >
                    Message Details
                  </label>
                </div>

                {status?.type === "error" && (
                  <div className="text-[10px] font-mono uppercase tracking-widest p-4 text-red-500 bg-red-500/5">
                    &gt; {status.message}
                  </div>
                )}

                <MagnetButton variant="primary" className="w-full mt-4 group/btn" disabled={isSubmitting}>
                  <span>{isSubmitting ? 'Transmitting...' : 'Send Inquiry'}</span>
                  <div className="ml-2 w-4 h-[1px] bg-white group-hover/btn:translate-x-2 transition-transform"></div>
                </MagnetButton>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {isSuccessOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6 py-10">
          <button
            type="button"
            aria-label="Close success modal"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeSuccessModal}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full max-w-md"
          >
            <div className="glass-panel border border-red-500/30 bg-black/80 p-8 text-center shadow-[0_0_40px_rgba(220,38,38,0.2)] overflow-hidden">
              <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-red-600/30 blur-3xl" />
              <div className="absolute -bottom-28 -right-16 h-48 w-48 rounded-full bg-red-900/40 blur-3xl" />
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-red-500/60 to-transparent animate-pulse" />

              <div className="relative z-10">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-red-500/40 bg-red-500/10">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-400"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-xs font-mono uppercase tracking-[0.4em] text-red-400 mb-3">
                  Transmission Confirmed
                </p>
                <h4 className="text-2xl font-display font-black text-white uppercase tracking-tight">
                  Signal Received
                </h4>
                <p className="mt-4 text-xs font-mono uppercase tracking-widest text-gray-400">
                  {status?.message || "Handshake complete. Transmission received."}
                </p>
                <div className="mt-6 flex items-center justify-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-red-500/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
                  Secure Channel Locked
                </div>
                <button
                  type="button"
                  onClick={closeSuccessModal}
                  className="mt-8 w-full border border-red-500/40 bg-red-500/10 px-6 py-3 text-[10px] font-mono uppercase tracking-[0.4em] text-red-300 transition hover:border-red-400 hover:text-white hover:bg-red-500/20"
                >
                  Continue
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
