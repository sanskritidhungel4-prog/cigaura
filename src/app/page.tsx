import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Sustainability from "@/components/Sustainability/Sustainability";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      
      <section id="rooms" className="py-24 bg-[#f0f0f0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 space-y-4">
            <h2 className="text-xs uppercase tracking-[0.4em] text-accent font-bold">Accommodations</h2>
            <h3 className="text-5xl font-bold text-primary">Refined Spaces</h3>
          </div>
          
          <div className="space-y-40">
            {[
              { 
                title: "Deluxe Lakeside", 
                desc: "A seamless blend of traditional Nepali craftsmanship and modern minimalistic design. These rooms offer expansive views of Indrasarowar, creating a serene environment for relaxation.",
                amenities: ["Lake View", "King Bed", "Private Balcony"],
                image: "/images/room-interior.png"
              },
              { 
                title: "Executive Suite", 
                desc: "Designed for those who appreciate space and quiet luxury. The Executive Suite features natural stone and wood textures, reflecting the raw beauty of the surrounding landscape.",
                amenities: ["Spacious Living", "Mini Bar", "Premium Bath"],
                image: "/images/hero.png"
              },
              { 
                title: "Premium Villa", 
                desc: "Our most secluded sanctuary, nestled right at the water's edge. This villa offers complete privacy with traditional Newari architectural touches and modern comforts.",
                amenities: ["Private Garden", "Lakeside Access", "Butler Service"],
                image: "/images/villa.png"
              },
              { 
                title: "Standard Comfort", 
                desc: "A peaceful retreat for the modern traveler. These rooms provide all the essential luxuries with a warm, authentic Himalayan atmosphere.",
                amenities: ["Mountain View", "Cozy Interior", "Essential Luxury"],
                image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&q=80&w=1200"
              }
            ].map((room, i) => (
              <div key={i} className="space-y-12">
                <div className="w-full aspect-[4/3] md:aspect-[21/9] relative overflow-hidden bg-accent/5">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                  <div className="max-w-xl space-y-4">
                    <h4 className="text-5xl font-bold tracking-tight text-primary leading-tight">{room.title}</h4>
                    <p className="text-lg text-secondary font-light leading-relaxed">
                      {room.desc}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {room.amenities.map((ami, j) => (
                      <span key={j} className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold border border-accent/20 px-4 py-2">
                        {ami}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
            {[
              { title: "Scenic Dining", icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" },
              { title: "Connectivity", icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9.9 9.9 0 0114.142 0M2.05 8.05a15.559 15.559 0 0121.9 0" },
              { title: "Secure Parking", icon: "M5 18h14M5 8h14M12 8v10M9 8v10M15 8v10" },
              { title: "Tranquility", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full border border-primary/5 flex items-center justify-center text-accent mb-8 group-hover:border-accent/40 transition-colors duration-500 bg-[#faf9f6]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={feature.icon} />
                  </svg>
                </div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary group-hover:text-accent transition-colors duration-500">
                  {feature.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Sustainability />

      <Footer />
    </main>
  );
}

