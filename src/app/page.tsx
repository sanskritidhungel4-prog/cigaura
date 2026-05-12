"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Restaurant from "@/components/Restaurant";
import Sustainability from "@/components/Sustainability/Sustainability";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
                desc: "Experience the calming presence of Indrasarowar from your private sanctuary. These rooms blend local craftsmanship with comfort, offering stunning sunrise views over the water.",
                amenities: ["Lake View", "King Bed", "Private Balcony"],
                image: "/images/rooms/room1.jpeg"
              },
              { 
                title: "Executive Suite", 
                desc: "A refined space featuring handcrafted furniture and panoramic windows. The Executive Suite offers a peaceful atmosphere with premium finishes that reflect the highland landscape.",
                amenities: ["Extended Lounge", "Tea & Coffee", "Modern Ensuite"],
                image: "/images/rooms/room2.jpeg"
              },
              { 
                title: "Premium Villa", 
                desc: "Our most secluded retreat, offering direct visual connection to the lake. This standalone-style accommodation provides complete tranquility with authentic Nepali design touches.",
                amenities: ["Water's Edge", "Private Balcony", "Premium Bedding"],
                image: "/images/rooms/room4.jpeg"
              },
              { 
                title: "Standard Comfort", 
                desc: "A warm and inviting space for the modern traveler. These rooms provide essential comforts with a focus on genuine hospitality and a restful mountain atmosphere.",
                amenities: ["Hillside View", "High-speed Wi-Fi", "Cozy Interior"],
                image: "/images/rooms/room3.jpeg"
              }
            ].map((room, i) => (
              <div key={i} className="space-y-12">
                <div className="w-full aspect-[4/3] md:aspect-[16/8] relative overflow-hidden bg-accent/5">
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

      {/* Virtual Tour Section - Optimized for Vertical Video & Responsiveness */}
      <section className="py-20 md:py-32 bg-primary overflow-hidden min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6 md:space-y-10 order-2 md:order-1 text-center md:text-left">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent font-bold">Virtual Experience</h2>
              <h3 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-tight md:leading-[1.1]">
                A Glimpse into <br /> Your Retreat
              </h3>
            </div>
            <p className="text-base md:text-xl text-white/60 font-light leading-relaxed max-w-lg mx-auto md:mx-0">
              Take a vertical journey through our meticulously curated spaces. This immersive tour captures the raw textures, natural light, and the serene "aura" that defines the C.I.G experience.
            </p>
          </div>
          
          <div className="relative order-1 md:order-2 flex justify-center md:justify-end w-full h-[60vh] md:h-[80vh]">
            <div 
              className="relative h-full aspect-[9/16] rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[8px] md:border-[14px] border-white/5 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/10 cursor-pointer group"
              onClick={togglePlay}
            >
              <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/room_tour.mp4" type="video/mp4" />
              </video>
              
              {/* Subtle Play/Pause Button in Corner */}
              <div className="absolute bottom-6 right-6 z-20">
                <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-black/60 transition-colors">
                  {isPlaying ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
              <div className="absolute -top-10 md:-top-20 -right-10 md:-right-20 w-48 md:w-80 h-48 md:h-80 bg-accent/15 rounded-full blur-[60px] md:blur-[100px]" />
              <div className="absolute -bottom-10 md:-bottom-20 -left-10 md:-left-20 w-56 md:w-96 h-56 md:h-96 bg-white/5 rounded-full blur-[80px] md:blur-[120px]" />
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-xs uppercase tracking-[0.4em] text-accent font-bold">Lakeside Experiences</h2>
              <h3 className="text-5xl md:text-6xl font-bold text-primary tracking-tighter">
                Discover the Magic <br /> of Indrasarowar
              </h3>
            </div>
            <p className="text-secondary/70 max-w-sm font-light leading-relaxed mb-2">
              Beyond the comfort of your room lies a world of tranquil water and breathtaking landscapes waiting to be explored.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Traditional Boating",
                desc: "A peaceful journey across the mirror-like surface of the lake.",
                image: "/images/boat.jpg"
              },
              {
                title: "Paddle Boating",
                desc: "Explore at your own pace with our comfortable paddle boats.",
                image: "/images/paddle_boating.jpg"
              },
              {
                title: "Lake Exploration",
                desc: "Discover hidden coves and the unique flora of the highlands.",
                image: "/images/boating.jpg"
              }
            ].map((activity, i) => (
              <div key={i} className="group relative h-[500px] overflow-hidden bg-accent/5">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-2xl font-bold text-white mb-2">{activity.title}</h4>
                  <p className="text-white/70 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {activity.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Restaurant />

      <section className="py-40 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { 
                title: "Restaurant Now Open", 
                desc: "Savor local flavors with a backdrop of Indrasarowar's serene waters.",
                icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" 
              },
              { 
                title: "Connectivity", 
                desc: "Stay connected with high-speed Wi-Fi throughout the entire retreat.",
                icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9.9 9.9 0 0114.142 0M2.05 8.05a15.559 15.559 0 0121.9 0" 
              },
              { 
                title: "Secure Parking", 
                desc: "Worry-free arrival with our dedicated and monitored parking facilities.",
                icon: "M5 18h14M5 8h14M12 8v10M9 8v10M15 8v10" 
              },
              { 
                title: "Tranquility", 
                desc: "A dedicated atmosphere of peace, away from the bustle of city life.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center group p-8 transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-primary/5 border border-transparent hover:border-primary/5">
                <div className="w-16 h-16 rounded-full border border-primary/10 flex items-center justify-center text-accent mb-8 relative">
                  <div className="absolute inset-0 rounded-full border border-accent/0 scale-100 group-hover:scale-125 group-hover:border-accent/20 transition-all duration-700" />
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={feature.icon} />
                  </svg>
                </div>
                <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold text-primary mb-4">
                  {feature.title}
                </h4>
                <p className="text-xs text-secondary/60 leading-relaxed font-light max-w-[200px]">
                  {feature.desc}
                </p>
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

