import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Hotel C.I.G Aura | Lakeside Retreat in Indrasarowar, Nepal",
  description: "Experience tranquility at Hotel C.I.G Aura, a serene lakeside retreat in Indrasarowar, Nepal. Modern comfort meets natural beauty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${urbanist.variable} h-full antialiased`}>
      <body className="min-h-full font-sans bg-[#faf9f6] text-[#1a1a1a] selection:bg-accent/20">
        {children}
      </body>
    </html>
  );
}

