import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Nastaliq_Urdu, Gulzar } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { AuthProvider } from "@/context/AuthContext";
import SystemStatus from "@/components/SystemStatus";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const urdu = Noto_Nastaliq_Urdu({
  variable: "--font-urdu",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const gulzar = Gulzar({
  variable: "--font-gulzar",
  subsets: ["arabic"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Madrasa Al-Umaima | A Place for Quran, Knowledge & Character",
  description: "Modern Islamic educational institute dedicated to Quranic and character building education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${urdu.variable} ${gulzar.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="font-sans min-h-screen bg-background text-foreground selection:bg-primary/20 relative">
        {/* Global Shared Background Pattern */}
        <div className="fixed inset-0 opacity-15 pointer-events-none z-[-1] overflow-hidden select-none">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_100%)] blur-[150px] transform translate-x-1/3 -translate-y-1/3 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_100%)] blur-[120px] transform -translate-x-1/4 translate-y-1/4 opacity-15"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')] opacity-5 mix-blend-overlay"></div>
        </div>

        <LanguageProvider>
          <AuthProvider>
            <SystemStatus />
            {children}
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}


