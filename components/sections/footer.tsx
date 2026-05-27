"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import iconImg from "@/app/icon.png";
import { useMemo, useRef } from "react";
import Hyperspeed from "@/components/ui/hyperspeed/Hyperspeed";
import { Github, Twitter, Facebook, Linkedin } from "lucide-react";

const TikTok = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: false, margin: "200px 0px 200px 0px" });

  const hyperspeedOptions = useMemo(() => ({
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xffffff,
      brokenLines: 0xffffff,
      leftCars: [0xDC2626, 0x991B1B, 0x450A0A],
      rightCars: [0xDC2626, 0x7F1D1D, 0x000000],
      sticks: 0xDC2626
    }
  }), []);

  return (
    <footer ref={footerRef} className="py-16 border-t border-[var(--glass-border)] relative z-20 bg-black overflow-hidden min-h-[600px] flex items-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        {isInView && <Hyperspeed effectOptions={hyperspeedOptions} />}
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2 relative">
                {/* Zero-height container for absolute logo to prevent vertical push */}
                <div className="h-20 mb-4 relative">
                    <div className="absolute -top-8 -left-2 flex items-center">
                        <div className="relative w-14 h-14">
                            <Image 
                                src={iconImg} 
                                alt="Kraken Icon" 
                                fill
                                sizes="56px"
                                className="object-contain drop-shadow-[0_0_12px_rgba(220,38,38,0.6)]"
                            />
                        </div>
                        <div className="relative w-72 h-28 -ml-2">
                            <Image src={logoImg} alt="Kraken Logo" fill sizes="288px" className="object-contain object-left" />
                        </div>
                    </div>
                </div>
                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest max-w-xs leading-relaxed">
                    Beyond Code. Beyond Design. Engineering the future of immersive digital experiences.
                </p>

                <div className="mt-12 group">
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

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-1 hidden md:flex justify-start">
            <p className="text-[10px] font-mono text-gray-600">© 2026 KRAKEN ENTERPRISE SYSTEMS. ALL PROTOCOLS ACTIVE.</p>
          </div>

          <div className="flex justify-center gap-6 order-1 md:order-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-white transition-colors"><Github size={18} /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-white transition-colors"><Facebook size={18} /></a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-white transition-colors"><TikTok size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-white transition-colors"><Linkedin size={18} /></a>
          </div>

          <div className="flex md:hidden order-2">
            <p className="text-[10px] font-mono text-gray-600">© 2026 KRAKEN ENTERPRISE SYSTEMS. ALL PROTOCOLS ACTIVE.</p>
          </div>

          <div className="flex-1 flex justify-center md:justify-end items-center gap-2 text-[10px] font-mono text-gray-600 order-3">
             <div className="w-2 h-2 rounded-full bg-[var(--color-red)] animate-ping" />
             <span>SECURE NODE 190.286.21.89</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
