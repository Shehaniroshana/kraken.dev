"use client";

import { useInView } from "motion/react";
import Image from "next/image";
import iconImg from "@/app/icon.png";
import { useMemo, useRef, useState } from "react";
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

  const [email, setEmail] = useState("");

  const hyperspeedOptions = useMemo(() => ({
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 1.5,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.1, 0.4],
    lightStickHeight: [1.2, 1.6],
    movingAwaySpeed: [50, 70],
    movingCloserSpeed: [-100, -140],
    carLightsLength: [400 * 0.03, 400 * 0.15],
    carLightsRadius: [0.04, 0.12],
    carWidthPercentage: [0.2, 0.4],
    carShiftX: [-0.6, 0.6],
    carFloorSeparation: [0, 4],
    colors: {
      roadColor: 0x050505,
      islandColor: 0x080808,
      background: 0x000000,
      shoulderLines: 0xffffff,
      brokenLines: 0xffffff,
      leftCars: [0xDC2626, 0x7F1D1D, 0x450A0A],
      rightCars: [0xDC2626, 0x7F1D1D, 0x000000],
      sticks: 0xDC2626
    }
  }), []);

  return (
    <footer ref={footerRef} className="pt-20 pb-12 border-t border-white/5 relative z-20 bg-black overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        {isInView && <Hyperspeed effectOptions={hyperspeedOptions} />}
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-2">
                <div className="flex items-center mb-8">
                    <div className="relative w-10 h-10">
                        <Image
                            src={iconImg}
                            alt="Kraken Icon"
                            fill
                            sizes="40px"
                            className="object-contain"
                        />
                    </div>
                    <span className="ml-3 font-display font-black text-xl tracking-tighter uppercase">KRAKEN</span>
                </div>
                <p className="text-gray-500 font-display font-black text-[10px] uppercase tracking-[0.2em] max-w-xs leading-relaxed mb-12">
                  Two lifelong friends shaping software systems, digital platforms, and AI-powered experiences with precision and intent.
                </p>

                <div className="max-w-sm">
                    <h4 className="text-white font-display font-black uppercase tracking-[0.3em] text-[10px] mb-6 flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
                        Newsletter
                    </h4>
                    <div className="relative border-b border-white/10 focus-within:border-red-600 transition-colors duration-500">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-transparent py-3 text-white font-display font-black text-[10px] focus:outline-none placeholder:text-white/5 uppercase tracking-[0.2em]"
                          placeholder="IDENT_MAIL@KRAKEN"
                        />
                        <button
                          onClick={() => {}}
                          className="absolute right-0 top-1/2 -translate-y-1/2 text-white/20 hover:text-red-600 transition-all duration-500"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <h4 className="text-white font-display font-black uppercase tracking-[0.3em] text-[10px] mb-8">Intel</h4>
                <ul className="space-y-4">
                    <li><a href="/manifesto" className="text-gray-500 hover:text-white font-display font-black text-[10px] uppercase tracking-[0.2em] transition-colors">Manifesto</a></li>
                    <li><a href="/architecture" className="text-gray-500 hover:text-white font-display font-black text-[10px] uppercase tracking-[0.2em] transition-colors">Architecture</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-white font-display font-black text-[10px] uppercase tracking-[0.2em] transition-colors">Careers</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-display font-black uppercase tracking-[0.3em] text-[10px] mb-8">Directives</h4>
                <ul className="space-y-4">
                    <li><a href="/privacy" className="text-gray-500 hover:text-white font-display font-black text-[10px] uppercase tracking-[0.2em] transition-colors">Privacy</a></li>
                    <li><a href="/terms" className="text-gray-500 hover:text-white font-display font-black text-[10px] uppercase tracking-[0.2em] transition-colors">Terms</a></li>
                    <li><a href="/security" className="text-gray-500 hover:text-white font-display font-black text-[10px] uppercase tracking-[0.2em] transition-colors">Security</a></li>
                </ul>
            </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[8px] font-display font-black text-white/20 uppercase tracking-[0.3em]">
            © 2026 KRAKEN ENTERPRISE SYSTEMS. ALL PROTOCOLS ACTIVE.
          </p>

          <div className="flex justify-center gap-8">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/20 hover:text-white transition-colors"><Github size={16} /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white/20 hover:text-white transition-colors"><Twitter size={16} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/20 hover:text-white transition-colors"><Linkedin size={16} /></a>
          </div>

          <div className="flex items-center gap-3 text-[8px] font-display font-black text-white/20 uppercase tracking-[0.3em]">
             <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
             <span>Secure Node Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
