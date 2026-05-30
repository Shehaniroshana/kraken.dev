"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "It depends on the complexity. A standard business website usually takes 2-4 weeks from discovery to launch. Full-stack applications and complex platforms can take 2-3 months. We provide a precise timeline after our initial architecture review."
  },
  {
    question: "What is your primary tech stack?",
    answer: "We specialize in modern Javascript/Typescript ecosystems. Our core stack includes React, Next.js, TailwindCSS for the frontend, and Node.js with scalable databases (PostgreSQL, MongoDB) for the backend. We also heavily integrate modern AI APIs where applicable."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Absolutely. Launching is just the beginning. We offer dedicated retention retainers that include security updates, performance monitoring, server management, and continuous feature development."
  },
  {
    question: "How does the pricing and payment process work?",
    answer: "We structure our payments around project milestones. Typically, this looks like a 40% upfront deposit to commence engineering, 30% after the core design/architecture is approved, and the final 30% upon successful deployment to production."
  },
  {
    question: "Will my website be mobile-responsive and SEO optimized?",
    answer: "Yes, by default. Every platform we engineer is strictly mobile-first and optimized for Core Web Vitals. We implement technical SEO best practices, semantic HTML, and dynamic metadata generation out of the box."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} id="faq" className="relative py-24 sm:py-32 bg-black overflow-hidden z-30">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="uppercase tracking-[0.4em] text-[10px] font-black text-red-600 block mb-4 opacity-80">
              Clarity & Transparency
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter mb-6">
              Frequently <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700">Asked</span>
            </h2>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [0, 1], [0, -30 * (index + 1)]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const springY = useSpring(y, { stiffness: 100, damping: 30 });
            
            return (
              <motion.div
                key={index}
                style={{ y: springY }}
                initial={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border transition-all duration-300 rounded-[20px] overflow-hidden ${
                  isOpen ? "bg-white/[0.03] border-red-500/30" : "bg-transparent border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
                >
                  <span className={`text-sm sm:text-base font-mono uppercase tracking-widest font-bold pr-8 transition-colors ${
                    isOpen ? "text-white" : "text-zinc-400"
                  }`}>
                    <span className="text-red-600 mr-4">0{index + 1}</span>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                    isOpen ? "border-red-500/50 bg-red-500/10 text-red-500" : "border-white/10 text-zinc-500"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-0 text-zinc-400 text-sm font-mono uppercase tracking-widest leading-relaxed border-t border-white/5 mt-4 pt-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
