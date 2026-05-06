import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000"
          alt="Hotel C.I.G Aura Lakeside"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in">
          Where Tranquility Meets <br /> Modern Elegance
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90 font-light mb-10">
          A serene lakeside retreat in the breathtaking Indrasarowar, Nepal.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#about" className="bg-white text-primary px-8 py-4 rounded-none font-semibold transition-transform hover:scale-105">
            Discover More
          </a>
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
