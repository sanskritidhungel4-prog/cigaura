import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div className="space-y-8">
            <div className="relative w-40 h-16">
              <Image 
                src="/images/hotal_logo.png" 
                alt="C.I.G Aura Logo" 
                fill 
                className="object-contain" 
              />
            </div>
            <p className="text-white/60 font-light italic leading-relaxed">
              "A sanctuary where contemporary luxury meets the raw beauty of Nepal's highlands."
            </p>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-accent">Navigation</h3>
            <ul className="space-y-4 text-white/60 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Accommodations</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">Experiences</a></li>
              <li><a href="#sustainability" className="hover:text-white transition-colors">Commitment</a></li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-accent">Contact</h3>
            <ul className="space-y-5 text-white/60 font-light">
              <li className="flex items-center gap-4">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Indrasarowar, Nepal</span>
              </li>
              <li className="flex items-center gap-4">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+977 9802344086</span>
              </li>
              <li className="flex items-center gap-4">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hotelciga@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-medium flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span>© {new Date().getFullYear()} Hotel C.I.G Aura. All rights reserved.</span>
            <span className="w-1 h-1 bg-accent/30 rounded-full hidden md:block" />
            <span className="text-accent/60 italic">Restaurant Open — Remaining Project Under Construction</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

