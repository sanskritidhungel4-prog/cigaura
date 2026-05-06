import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
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
            <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-semibold">Accommodations</h2>
            <h3 className="text-4xl font-bold">Thoughtfully Designed Spaces</h3>
          </div>
          
          <div className="space-y-24">
            {[
              { 
                title: "Deluxe Lakeside", 
                desc: "Experience the serenity of Indrasarowar with panoramic lake views and a private terrace designed for ultimate relaxation.",
                amenities: ["Lake View", "King Bed", "Private Balcony"],
                image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1200"
              },
              { 
                title: "Executive Suite", 
                desc: "A spacious blend of modern luxury and local charm, featuring a separate living area and premium amenities for the discerning traveler.",
                amenities: ["Spacious Living", "Mini Bar", "Premium Bath"],
                image: "https://images.unsplash.com/photo-1591088398332-8a77d399c805?auto=format&fit=crop&q=80&w=1200"
              },
              { 
                title: "Premium Villa", 
                desc: "Nestled in a secluded corner of our retreat, the villa offers unparalleled privacy with a private garden and direct lake access.",
                amenities: ["Private Garden", "Lakeside Access", "Butler Service"],
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200"
              },
              { 
                title: "Standard Comfort", 
                desc: "A cozy and elegant retreat featuring mountain views and all the essential modern comforts for a peaceful mountain getaway.",
                amenities: ["Cozy Interior", "Mountain View", "Essential Luxury"],
                image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200"
              }
            ].map((room, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                <div className="w-full md:w-3/5 h-[400px] lg:h-[500px] relative overflow-hidden bg-accent/10">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                
                <div className="w-full md:w-2/5 space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-3xl font-bold tracking-tight">{room.title}</h4>
                    <p className="text-secondary font-light leading-relaxed">
                      {room.desc}
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                      {room.amenities.map((ami, j) => (
                        <li key={j} className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-accent font-semibold">
                          <span className="w-1 h-1 bg-accent" />
                          <span>{ami}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="px-10 py-4 border border-primary text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-colors duration-300">
                      Explore Room
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="location" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-semibold">Location</h2>
              <h3 className="text-4xl font-bold leading-tight">Escape to the Heart of Nature</h3>
            </div>
            <p className="text-lg text-secondary leading-relaxed font-light">
              Located in the breathtaking surroundings of Indrasarowar, Hotel C.I.G Aura is easily accessible yet feels worlds away from the hustle of the city.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Indrasarowar, Nepal</p>
                <p className="text-sm text-secondary font-light">The perfect lakeside getaway</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] bg-accent/10 rounded-none flex items-center justify-center border-2 border-dashed border-accent/30">
            <span className="text-accent font-medium uppercase tracking-[0.2em]">Interactive Map Coming Soon</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

