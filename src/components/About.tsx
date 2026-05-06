import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[600px] rounded-none overflow-hidden border border-primary/5">
          <Image
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200"
            alt="Modern Room Interior"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-semibold">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              A Serene Lakeside Retreat in Indrasarowar
            </h3>
          </div>
          
          <p className="text-lg text-secondary leading-relaxed font-light">
            Surrounded by natural beauty, tranquil waters, and fresh mountain air, our hotel offers the perfect escape for guests seeking relaxation, comfort, and a connection with nature.
          </p>
          
          <p className="text-lg text-secondary leading-relaxed font-light">
            Hotel C.I.G Aura operates under the esteemed Chandragiri Investment Group Limited (C.I.G), reflecting a strong commitment to quality, hospitality, and excellence. With thoughtfully designed rooms, scenic views, and warm, personalized service, we strive to create memorable experiences for every guest.
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
          
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <h4 className="text-3xl font-bold text-primary">Indrasarowar</h4>
              <p className="text-sm text-accent uppercase tracking-widest mt-1">Location</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary">+977 9802344086</h4>
              <p className="text-sm text-accent uppercase tracking-widest mt-1">Contact</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
