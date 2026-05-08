"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled ? "bg-white/95 backdrop-blur-xl py-4 border-b border-primary/5" : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="relative w-32 h-12 md:w-40 md:h-16">
            <Image 
              src="/images/hotal_logo.png" 
              alt="C.I.G Aura Logo" 
              fill 
              className="object-contain"
              priority
            />
          </Link>
          
          <div className={`hidden md:flex space-x-12 text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-500 ${scrolled ? 'text-primary' : 'text-white'}`}>
            <Link href="#about" className="hover:text-accent transition-colors">About</Link>
            <Link href="#rooms" className="hover:text-accent transition-colors">Rooms</Link>
            <Link href="#experiences" className="hover:text-accent transition-colors">Experiences</Link>
            <Link href="#sustainability" className="hover:text-accent transition-colors">Commitment</Link>
            <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-[9px] uppercase tracking-[0.4em] text-accent font-bold hidden md:block border border-accent/20 px-4 py-2">
              Opening Soon
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 transition-colors duration-500 ${scrolled ? 'text-primary' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-4 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 transition-all duration-300 ${isMenuOpen ? 'bg-primary rotate-45 translate-y-1.5' : 'bg-current'}`} />
                <span className={`w-full h-0.5 transition-all duration-300 ${isMenuOpen ? 'bg-primary opacity-0' : 'bg-current'}`} />
                <span className={`w-full h-0.5 transition-all duration-300 ${isMenuOpen ? 'bg-primary -rotate-45 -translate-y-2' : 'bg-current'}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center space-y-12 px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <Link 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-bold tracking-tighter hover:text-accent transition-colors uppercase"
            >
              About
            </Link>
            <Link 
              href="#rooms" 
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-bold tracking-tighter hover:text-accent transition-colors uppercase"
            >
              Rooms
            </Link>
            <Link 
              href="#experiences" 
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-bold tracking-tighter hover:text-accent transition-colors uppercase"
            >
              Experiences
            </Link>
            <Link 
              href="#sustainability" 
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-bold tracking-tighter hover:text-accent transition-colors uppercase"
            >
              Commitment
            </Link>
            <Link 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-bold tracking-tighter hover:text-accent transition-colors uppercase"
            >
              Contact
            </Link>
          </div>
          
          <div className="pt-12 border-t border-primary/5 w-full max-w-[200px] text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">
              Opening Soon
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
