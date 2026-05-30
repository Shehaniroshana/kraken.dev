"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import iconImg from "@/app/icon.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { Target, Zap, Code2, Mail, Shield, CreditCard, Users } from "lucide-react";

const navLinks = [
  { href: "#vision", label: "Vision", Icon: Target },
  { href: "#why-us", label: "Why Us", Icon: Shield },
  { href: "#pricing", label: "Pricing", Icon: CreditCard },
  { href: "#services", label: "Services", Icon: Zap },
  { href: "#tech", label: "Technology", Icon: Code2 },
  { href: "#contact", label: "Contact", Icon: Mail },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [isMobile]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-4" : "py-8"
        }`}
      >
        <div className={`container mx-auto px-6 max-w-7xl flex justify-between items-center transition-all duration-500 ${
            scrolled ? "glass-panel !border-0 !border-none rounded-full px-8 py-3 max-w-4xl" : ""
        }`}>
          <a href="#hero" className="flex items-center group cursor-pointer">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={iconImg}
                  alt="Kraken Icon"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <span className="ml-3 font-display font-black text-lg tracking-tighter uppercase hidden sm:block">KRAKEN</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 text-[10px] font-display font-black tracking-[0.25em] uppercase text-white/50">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className={`transition-all duration-300 relative group ${isActive ? "text-white" : "hover:text-white"}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-red-600 transition-all duration-500 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </a>
              );
            })}
          </nav>
          
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              else window.location.href = "#contact";
            }}
            className="hidden md:inline-block px-5 py-2.5 bg-white text-black text-[10px] font-display font-black uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all duration-500"
          >
            Connect
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-px bg-white mb-1.5 transition-transform duration-300" style={{ transform: mobileMenuOpen ? 'translateY(4px) rotate(45deg)' : 'none' }} />
            <div className="w-6 h-px bg-white transition-transform duration-300" style={{ transform: mobileMenuOpen ? 'translateY(-3px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-3xl font-display font-black uppercase tracking-tighter text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => {
                    setMobileMenuOpen(false);
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-8 px-10 py-4 bg-white text-black text-sm font-display font-black uppercase tracking-[0.2em]"
              >
                Connect
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
