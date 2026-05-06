"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md py-4 border-b border-primary/5" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-primary">
          C.I.G AURA
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
          <Link href="#about" className="hover:text-accent transition-colors">About Us</Link>
          <Link href="#rooms" className="hover:text-accent transition-colors">Rooms</Link>
          <Link href="#location" className="hover:text-accent transition-colors">Location</Link>
          <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>
        <a
          href="tel:+9779802344086"
          className="bg-primary text-white px-6 py-2 rounded-none text-sm font-medium hover:bg-secondary transition-colors"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}
