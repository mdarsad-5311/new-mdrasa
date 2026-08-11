"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Landmark, GraduationCap, Heart, LogIn, Home, Info, BookOpen, Phone, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, isUrdu } = useLanguage();
  const pathname = usePathname();

  const navLinks = [
    { name: t("nav.home"), href: "/", icon: <Home className="w-4 h-4" /> },
    { name: t("nav.about"), href: "/about", icon: <Info className="w-4 h-4" /> },
    { name: t("nav.courses"), href: "/courses", icon: <BookOpen className="w-4 h-4" /> },
    { name: t("nav.admission"), href: "/admission", icon: <GraduationCap className="w-4 h-4" /> },
    { name: t("nav.gallery"), href: "/gallery", icon: <Sparkles className="w-4 h-4" /> },
    { name: t("nav.donation"), href: "/donation", icon: <Heart className="w-4 h-4" /> },
    { name: t("nav.contact"), href: "/contact", icon: <Phone className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-premium py-2"
          : "bg-transparent py-5"
        }`}
    >
      {/* Islamic Pattern Background Layer */}
      {scrolled && (
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
      )}

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-primary p-2.5 rounded-xl group-hover:bg-primary-dark transition-all transform group-hover:rotate-6">
              <Landmark className="w-6 h-6 text-cream" />
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className={`text-xl font-serif font-bold text-primary leading-tight ${isUrdu ? "font-urdu text-2xl" : ""}`}>
                {t("nav.madrasa_name")}
              </span>
              <span className={`text-[10px] uppercase tracking-widest text-accent font-semibold leading-none ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>
                {t("nav.tagline")}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-6">
            <div className={`flex gap-1 items-center bg-primary/5 p-1.5 rounded-2xl border border-primary/5 ${isUrdu ? "flex-row-reverse" : ""}`}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-all transform hover:-translate-y-0.5 whitespace-nowrap group ${
                      isActive 
                        ? "bg-primary text-white shadow-sm" 
                        : "text-primary hover:bg-primary-dark hover:text-white"
                    } ${isUrdu ? "font-urdu text-base flex-row-reverse" : ""}`}
                  >
                    <span className={`${isActive ? "text-accent" : "text-accent group-hover:text-accent"} transition-colors`}>{link.icon}</span>
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className={`flex items-center gap-4 flex-nowrap border-primary/10 ${isUrdu ? "border-r pr-6" : "border-l pl-6"}`}>
              <LanguageToggle />
              <Link
                href="/login"
                className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:text-primary-dark px-2 transition-colors whitespace-nowrap ${isUrdu ? "font-urdu tracking-normal text-base" : ""}`}
              >
                <LogIn className="w-4 h-4" />
                {t("nav.login")}
              </Link>
              <Link
                href="/admission"
                className={`bg-primary text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 shadow-md whitespace-nowrap shrink-0 ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}
              >
                {t("btn.apply")}
              </Link>
            </div>
          </div>

          {/* Mobile/Tablet Menu Button / Toggle */}
          <div className="xl:hidden flex items-center gap-4">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary p-2 focus:outline-none bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden absolute top-full left-0 w-full bg-[#FCFBF8] shadow-2xl transition-all duration-500 ease-in-out border-b-2 border-primary/10 overflow-hidden z-50 ${isOpen ? "max-h-[85vh] opacity-100 py-8" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 text-xl font-bold py-4 border-b border-primary/5 px-4 rounded-xl transition-all ${
                  isActive 
                    ? "bg-primary text-white" 
                    : "text-primary hover:bg-primary/5"
                } ${isUrdu ? "font-urdu flex-row-reverse text-right" : ""}`}
              >
                <span className={isActive ? "text-accent" : "text-accent"}>{link.icon}</span>
                {link.name}
              </Link>
            );
          })}
          <div className="pt-6 flex flex-col gap-4">
            <Link
              href="/login"
              className={`flex items-center justify-center gap-3 bg-cream text-primary py-4 rounded-2xl font-bold transition-all active:scale-95 ${isUrdu ? "font-urdu text-xl" : ""}`}
            >
              <LogIn className="w-5 h-5 text-accent" /> {t("nav.login")}
            </Link>
            <Link
              href="/admission"
              className={`flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-2xl font-bold shadow-lg transition-all active:scale-95 ${isUrdu ? "font-urdu text-xl" : ""}`}
            >
              <GraduationCap className="w-5 h-5 text-accent" /> {t("btn.apply")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
