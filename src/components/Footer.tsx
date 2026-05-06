export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter">C.I.G AURA</h2>
          <p className="text-white/60 font-light max-w-xs">
            At Hotel C.I.G Aura, we don't just offer a stay—we offer an experience defined by tranquility, care, and authenticity.
          </p>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-sm uppercase tracking-widest font-semibold text-accent">Quick Links</h3>
          <ul className="space-y-4 text-white/80 font-light">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#rooms" className="hover:text-white transition-colors">Rooms</a></li>
            <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-sm uppercase tracking-widest font-semibold text-accent">Connect</h3>
          <ul className="space-y-4 text-white/80 font-light">
            <li>Indrasarowar, Nepal</li>
            <li>+977 9802344086</li>
            <li>info@cigaura.com</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-white/40 text-sm font-light">
        © {new Date().getFullYear()} Hotel C.I.G Aura. All rights reserved. Part of Chandragiri Investment Group Limited.
      </div>
    </footer>
  );
}
