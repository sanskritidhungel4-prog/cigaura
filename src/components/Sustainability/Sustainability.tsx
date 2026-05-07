"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const sustainabilityItems = [
  {
    title: "Limiting Plastic Use",
    description: "We actively reduce plastic waste by using eco-friendly packaging and encouraging reusable alternatives.",
    image: "/images/sustainability/plastic.png",
  },
  {
    title: "Waste Management",
    description: "We responsibly sort, recycle, and dispose of waste to reduce our environmental footprint.",
    image: "/images/sustainability/waste.png",
  },
  {
    title: "Lake Conservation",
    description: "We organize regular cleaning drives to preserve the purity of Indrasarowar and protect its surrounding watershed.",
    image: "/images/sustainability/cleaning.png",
  },
  {
    title: "Local Staffing",
    description: "We hire from the local community, creating jobs while reducing long commutes and their impact on the environment.",
    image: "/images/sustainability/staffing.png",
  },
  {
    title: "Local Fisheries",
    description: "We partner with Indrasarowar's local fishing community to promote sustainable practices and support traditional livelihoods.",
    image: "/images/sustainability/fishery.png",
  },
];

export default function Sustainability() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = containerRef.current?.querySelectorAll(".sustainability-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sustainability" className="py-32 bg-bg-ivory overflow-hidden relative">
      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-24 space-y-6">
          <div className="flex items-center gap-4 w-full justify-center">
            <div className="h-[1px] flex-1 bg-primary/10 max-w-[100px]"></div>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Our Commitment</h2>
            <div className="h-[1px] flex-1 bg-primary/10 max-w-[100px]"></div>
          </div>
          <h3 className="text-5xl md:text-7xl font-bold text-primary text-center leading-[1.1] tracking-tighter">
            Sustainability <br /> & Community
          </h3>
          <p className="text-secondary/70 max-w-2xl text-center font-light text-lg leading-relaxed">
            Preserving the natural beauty of the highlands while fostering a thriving local ecosystem through responsible practices and community empowerment.
          </p>
        </div>

        <div ref={containerRef} className="flex flex-col md:flex-row h-[700px] md:h-[600px] gap-2">
          {sustainabilityItems.map((item, index) => (
            <div
              key={index}
              className="sustainability-item group relative overflow-hidden flex-1 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:flex-[2.5] opacity-0 cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end transform transition-all duration-700">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    Impact 0{index + 1}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight transform group-hover:translate-y-0 transition-transform duration-700">
                    {item.title}
                  </h4>
                  <div className="h-[1px] w-8 bg-accent/50 group-hover:w-16 transition-all duration-700" />
                  <p className="text-white/0 group-hover:text-white/70 transition-all duration-700 text-sm font-light leading-relaxed max-h-0 group-hover:max-h-32 overflow-hidden">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Number indicator background */}
              <div className="absolute -bottom-4 -right-4 text-white/5 text-9xl font-bold font-heading select-none group-hover:text-white/10 transition-colors duration-700">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
