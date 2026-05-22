"use client";

import { motion } from "motion/react";
import Image from "next/image";
import logoImg from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="py-16 border-t border-[var(--glass-border)] relative z-20 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-red-600/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2 relative">
                {/* Zero-height container for absolute logo to prevent vertical push */}
                <div className="h-8 mb-4 relative">
                    <div className="absolute -top-8 -left-2 w-72 h-28">
                        <Image src={logoImg} alt="Kraken Logo" fill className="object-contain object-left" />
                    </div>
                </div>
                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest max-w-xs leading-relaxed">
                    Engineering scalable enterprise systems and next-generation AI platforms.
                </p>

                <div className="mt-12">
                    <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
                        Newsletter Subscription
                    </h4>
                    <div className="relative w-full max-w-sm border-b border-white/10 group-hover:border-red-600/30 transition-colors duration-500">
                        <input 
                            type="email" 
                            className="w-full bg-transparent py-2 text-white font-mono text-xs focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-700 uppercase tracking-widest"
                            placeholder="COMM_LINK@KRAKEN"
                        />
                        <button className="absolute right-0 top-1/2 -translate-y-1/2 text-red-500 hover:text-white transition-all duration-300 hover:translate-x-1">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Intel</h4>
                <ul className="space-y-4">
                    <li><a href="/manifesto" className="text-gray-500 hover:text-red-500 font-mono text-xs uppercase tracking-widest transition-colors">Manifesto</a></li>
                    <li><a href="/architecture" className="text-gray-500 hover:text-red-500 font-mono text-xs uppercase tracking-widest transition-colors">Architecture</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-red-500 font-mono text-xs uppercase tracking-widest transition-colors">Career</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Directives</h4>
                <ul className="space-y-4">
                    <li><a href="/privacy" className="text-gray-500 hover:text-red-500 font-mono text-xs uppercase tracking-widest transition-colors">Privacy Grid</a></li>
                    <li><a href="/terms" className="text-gray-500 hover:text-red-500 font-mono text-xs uppercase tracking-widest transition-colors">Terms of Service</a></li>
                    <li><a href="/security" className="text-gray-500 hover:text-red-500 font-mono text-xs uppercase tracking-widest transition-colors">Security Protocol</a></li>
                </ul>
            </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-gray-600">
          <p>© 2026 KRAKEN ENTERPRISE SYSTEMS. ALL PROTOCOLS ACTIVE.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
             <div className="w-2 h-2 rounded-full bg-[var(--color-red)] animate-ping" />
             <span>SECURE NODE 190.286.21.89</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
