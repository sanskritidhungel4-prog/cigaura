import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_aura.png"
          alt="Refined Himalayan Luxury"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight animate-reveal">
          Experience <br /> Lakeside Tranquility
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-80 font-medium mb-12 tracking-wide animate-reveal [animation-delay:200ms]">
          A modern retreat in the heart of Indrasarowar.
        </p>
        <div className="pt-8 animate-reveal [animation-delay:400ms]">
          <span className="text-xs uppercase tracking-[0.4em] opacity-50 border-t border-white/20 pt-8 inline-block">
            Project in Progress
          </span>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
