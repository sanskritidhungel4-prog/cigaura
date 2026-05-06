import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
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
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full font-sans bg-[#faf9f6] text-[#1a1a1a]">
        {children}
      </body>
    </html>
  );
}

