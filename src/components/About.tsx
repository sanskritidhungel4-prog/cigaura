import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[600px] rounded-none overflow-hidden border border-primary/5">
          <Image
            src="/images/room-interior.png"
            alt="Himalayan Sanctuary View"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-[0.4em] text-accent font-bold">About C.I.G Aura</h2>
            <h3 className="text-5xl font-bold leading-tight text-primary">
              A Lakeside Sanctuary <br /> for the Soul
            </h3>
          </div>
          
          <p className="text-base text-secondary leading-relaxed font-light">
            Discover the essence of tranquility at C.I.G Aura, a refined lakeside sanctuary nestled within the majestic landscape of Indrasarowar. Under the stewardship of Chandragiri Investment Group, we balance contemporary luxury with the raw beauty of Nepal's highlands.
          </p>
          
          <p className="text-base text-secondary leading-relaxed font-light">
            Our spaces are crafted with a minimalist touch, ensuring every moment is infused with authentic Himalayan charm and genuine connection with nature.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {[
              "Lakeside Tranquility",
              "Modern Architecture",
              "Mountain Fresh Air",
              "Authentic Hospitality"
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-accent" />
                <span className="text-sm font-medium text-secondary uppercase tracking-wider">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
