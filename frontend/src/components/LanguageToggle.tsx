"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";

export default function LanguageToggle() {
  const { language, toggleLanguage, isUrdu } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="group flex items-center gap-3 bg-white/5 hover:bg-accent border border-white/10 hover:border-accent p-2.5 sm:px-4 rounded-xl transition-all shadow-pill active:scale-95"
      aria-label="Toggle Language"
    >
      <Languages className={`w-5 h-5 text-accent group-hover:text-primary transition-colors ${isUrdu ? "order-1" : ""}`} />
      <span className={`text-[11px] font-black uppercase tracking-widest group-hover:text-primary transition-colors ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>
        {language === "en" ? "اردو" : "English"}
      </span>
    </button>
  );
}
