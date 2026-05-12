import Image from "next/image";

export default function Restaurant() {
  return (
    <section id="restaurant" className="py-24 px-6 bg-white border-t border-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-[0.4em] text-accent font-bold">
            Restaurant in Operation
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
            Our Restaurant is Open
          </h3>
          <p className="text-base text-secondary font-light leading-relaxed pt-2">
            Our restaurant is currently open and fully operational. Enjoy authentic local meals and refreshing beverages in a beautifully crafted traditional setting while the remaining resort facilities are being completed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden bg-[#fafafa] border border-primary/5">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/extra/IMG_0082.JPG.jpeg"
                alt="Welcoming guests at the courtyard entry"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 bg-white border-t border-primary/5">
              <h4 className="text-lg font-bold text-primary mb-1">Warm Hospitality</h4>
              <p className="text-xs text-secondary/80 font-light">
                Welcoming guests by the serene traditional courtyard and reflection pond.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-[#fafafa] border border-primary/5">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/extra/IMG_0123.JPG.jpeg"
                alt="Relaxing dining setting and bar area"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 bg-white border-t border-primary/5">
              <h4 className="text-lg font-bold text-primary mb-1">Authentic Setting</h4>
              <p className="text-xs text-secondary/80 font-light">
                Relaxing dining atmosphere featuring traditional carved architecture and bar services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
