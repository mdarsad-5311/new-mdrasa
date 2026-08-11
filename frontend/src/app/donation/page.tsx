"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Heart, 
  Wallet, 
  TrendingUp, 
  Users, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  DollarSign,
  Download,
  ShieldCheck,
  Award,
  ChevronRight,
  Sparkles,
  Mail
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function DonationPage() {
  const { t, isUrdu } = useLanguage();

  return (
    <div className={`flex flex-col min-h-screen bg-background overflow-hidden ${isUrdu ? "font-urdu" : "font-sans"}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-44 pb-24 bg-transparent px-4 sm:px-6 lg:px-8 overflow-hidden group border-b border-primary/5">
         <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
         </div>

         <div className="max-w-7xl mx-auto text-center space-y-10 relative z-10">
            <div className={`inline-flex items-center gap-3 bg-primary/5 border border-primary/10 px-8 py-3 rounded-full backdrop-blur-md shadow-2xl animate-fade-in group-hover:scale-110 transition-transform ${isUrdu ? "flex-row-reverse" : ""}`}>
               <Heart className="w-5 h-5 text-accent fill-accent/20" />
               <span className={`text-primary text-[11px] font-black uppercase tracking-[0.4em] leading-none underline decoration-accent/40 decoration-2 underline-offset-4 ${isUrdu ? "font-urdu tracking-normal text-sm" : ""}`}>
                 {t("don_p.hero_label")}
               </span>
            </div>
            <h1 className={`text-5xl md:text-7xl lg:text-9xl font-serif font-black text-primary leading-tight ${isUrdu ? "font-urdu text-6xl md:text-8xl" : ""}`}>
               {t("don_p.hero_title")} <span className="text-accent italic">{t("don_p.hero_accent")}</span>
            </h1>
            <p className={`text-xl md:text-2xl text-primary/40 max-w-2xl mx-auto italic leading-relaxed ${isUrdu ? "font-urdu text-2xl" : ""}`}>
               {t("don_p.hero_subtitle")}
            </p>
         </div>
      </section>

      {/* Donation Categories */}
      <section className="py-24 bg-transparent relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
           <div className="text-center space-y-6">
              <span className={`text-accent font-bold tracking-[0.3em] uppercase underline underline-offset-8 text-xs leading-none ${isUrdu ? "font-urdu tracking-normal text-sm" : ""}`}>
                {t("don_p.ways_label")}
              </span>
              <h2 className={`text-4xl lg:text-6xl font-serif font-black text-primary leading-tight ${isUrdu ? "font-urdu text-5xl lg:text-7xl" : ""}`}>
                {t("don_p.ways_title")}
              </h2>
           </div>

           <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ${isUrdu ? "direction-rtl" : ""}`}>
              {[
                { title: t("don_p.cat1_title"), desc: t("don_p.cat1_desc"), icon: Award, color: "bg-primary/5", accent: "text-primary" },
                { title: t("don_p.cat2_title"), desc: t("don_p.cat2_desc"), icon: Heart, color: "bg-accent/10", accent: "text-primary" },
                { title: t("don_p.cat3_title"), desc: t("don_p.cat3_desc"), icon: TrendingUp, color: "bg-cream", accent: "text-accent" },
                { title: t("don_p.cat4_title"), desc: t("don_p.cat4_desc"), icon: Users, color: "bg-primary/10", accent: "text-primary-dark" },
                { title: t("don_p.cat5_title"), desc: t("don_p.cat5_desc"), icon: MapPin, color: "bg-white", accent: "text-accent" },
                { title: t("don_p.cat6_title"), desc: t("don_p.cat6_desc"), icon: Sparkles, color: "bg-primary/5", accent: "text-primary" }
              ].map((cat, idx) => (
                <div key={idx} className={`p-10 rounded-4xl border border-black/5 space-y-8 group hover:-translate-y-2 transition-all cursor-pointer shadow-sm ${cat.color} ${isUrdu ? "text-right" : "text-left"}`}>
                   <div className={`flex justify-between items-start ${isUrdu ? "flex-row-reverse" : ""}`}>
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-4 shadow-xl border border-black/5 group-hover:rotate-12 transition-transform">
                         <cat.icon className={`w-8 h-8 ${cat.accent}`} />
                      </div>
                      <ChevronRight className={`w-6 h-6 text-primary/10 group-hover:text-accent transition-all ${isUrdu ? "rotate-180" : ""}`} />
                   </div>
                   <div className="space-y-3 px-2">
                      <h3 className={`text-3xl font-serif font-bold text-primary group-hover:text-accent transition-colors ${isUrdu ? "font-urdu text-4xl" : ""}`}>{cat.title}</h3>
                      <p className={`text-primary/40 text-sm font-medium leading-relaxed italic line-clamp-2 ${isUrdu ? "font-urdu text-base" : ""}`}>"{cat.desc}"</p>
                   </div>
                   <button className={`w-full h-14 bg-white text-primary text-xs font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-black/5 hover:bg-primary hover:text-white transition-all transform group-hover:-translate-y-1 ${isUrdu ? "font-urdu tracking-normal text-sm" : ""}`}>
                      {t("don_p.cat_btn")} {cat.title}
                   </button>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Payment Details Section */}
      <section className="py-24 bg-transparent px-4 sm:px-6 lg:px-8 relative overflow-hidden group">
         <div className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10 bg-white/80 backdrop-blur-md p-16 lg:p-24 rounded-5xl shadow-premium border border-black/5 ${isUrdu ? "direction-rtl" : ""}`}>
            <div className={`space-y-10 ${isUrdu ? "text-right" : "text-left"}`}>
               <div className="space-y-6">
                  <span className={`text-accent font-bold tracking-[0.2em] uppercase text-xs ${isUrdu ? "font-urdu tracking-normal text-sm" : ""}`}>
                    {t("don_p.details_label")}
                  </span>
                  <h2 className={`text-4xl lg:text-5xl font-serif font-black text-primary leading-tight italic underline decoration-primary/10 decoration-8 underline-offset-8 ${isUrdu ? "font-urdu text-5xl lg:text-6xl" : ""}`}>
                    {t("don_p.details_title")}
                  </h2>
                  <p className={`text-xl text-primary/40 font-bold max-w-md italic leading-relaxed ${isUrdu ? "font-urdu text-2xl mx-auto lg:mr-0" : ""}`}>
                    {t("don_p.details_subtitle")}
                  </p>
               </div>
               
               <div className="space-y-8">
                  {[
                    { label: t("don_p.bank_label"), val: "9382 0482 1092 5900", sub: "Standard Chartered Bank" },
                    { label: t("don_p.account_name"), val: t("don_p.account_val"), sub: t("don_p.trust_verified") },
                    { label: t("don_p.ifsc_label"), val: "ALUMAIMAPK92XXXX", sub: t("don_p.int_transfers") }
                  ].map((pay, p) => (
                    <div key={p} className={`flex gap-6 items-center group/pay hover:translate-x-2 transition-transform ${isUrdu ? "flex-row-reverse" : ""}`}>
                       <div className="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center font-black group-hover/pay:bg-primary group-hover/pay:text-white transition-all shadow-sm border border-primary/5 italic text-primary text-xl">0{p+1}</div>
                       <div className={`space-y-1 ${isUrdu ? "text-right" : "text-left"}`}>
                          <p className={`text-[10px] uppercase font-black tracking-widest text-primary/30 leading-none ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>{pay.label}</p>
                          <p className={`text-xl font-serif font-black text-primary leading-tight tracking-tighter decoration-accent/10 underline decoration-2 underline-offset-4 ${isUrdu ? "font-urdu text-2xl" : ""}`}>{pay.val}</p>
                          <p className={`text-[10px] italic font-bold text-accent uppercase tracking-widest leading-none mt-1 ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>{pay.sub}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="space-y-10">
               <div className="p-12 bg-primary-dark text-white rounded-4xl shadow-2xl relative overflow-hidden group/box">
                  <div className={`absolute top-0 ${isUrdu ? "left-0" : "right-0"} p-8 transform ${isUrdu ? "-translate-x-4" : "translate-x-4"} -translate-y-4 opacity-10 group-hover/box:scale-110 transition-transform duration-700`}>
                    <ShieldCheck className="w-40 h-40" />
                  </div>
                  <div className="relative z-10 space-y-10">
                     <div className={`space-y-2 ${isUrdu ? "text-right" : "text-left"}`}>
                        <h4 className={`text-3xl font-serif font-black text-white italic underline decoration-accent decoration-4 underline-offset-8 ${isUrdu ? "font-urdu text-4xl" : ""}`}>
                          {t("don_p.receipt_title")}
                        </h4>
                        <p className={`text-white/30 text-xs font-bold leading-none tracking-widest uppercase ${isUrdu ? "font-urdu tracking-normal text-sm" : ""}`}>
                          {t("don_p.receipt_sub")}
                        </p>
                     </div>
                     
                     <div className="p-8 bg-white/5 rounded-3xl border border-white/10 space-y-4">
                        <div className="w-40 h-40 bg-accent/20 rounded-2xl mx-auto flex items-center justify-center p-4 border-2 border-dashed border-accent/40 shadow-inner">
                           <div className="w-full h-full bg-white flex items-center justify-center font-bold text-primary text-xl shadow-xl shadow-black/20">QR</div>
                        </div>
                        <p className={`text-center font-bold text-white leading-snug italic underline decoration-white/10 decoration-2 underline-offset-4 ${isUrdu ? "font-urdu text-lg" : ""}`}>
                          {t("don_p.qr_text")}
                        </p>
                     </div>

                     <button className={`w-full py-4 px-8 bg-accent text-primary-dark font-black text-sm uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-accent/20 hover:bg-white transition-all flex items-center justify-center gap-4 ${isUrdu ? "font-urdu tracking-normal text-base flex-row-reverse" : ""}`}>
                        <Download className="w-5 h-5" /> {t("don_p.download_btn")}
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Trust Quote Section */}
      <section className="py-32 bg-transparent relative overflow-hidden group">
         <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto shadow-inner group-hover:scale-110 transition-transform">
               <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className={`text-4xl md:text-5xl font-serif font-black text-primary leading-tight italic underline decoration-primary/10 decoration-8 underline-offset-8 ${isUrdu ? "font-urdu text-5xl md:text-6xl" : ""}`}>
              {t("don_p.reward_title")}
            </h2>
            <p className={`text-2xl text-primary/40 leading-relaxed font-medium italic ${isUrdu ? "font-urdu text-3xl" : ""}`}>
               {t("don_p.reward_desc")}
            </p>
            <Link 
              href="/admission" 
              className={`inline-flex items-center gap-6 px-12 py-5 bg-primary text-white font-black text-xl uppercase tracking-[0.2em] rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all ${isUrdu ? "font-urdu tracking-normal text-2xl flex-row-reverse" : ""}`}
            >
              {t("don_p.partner_btn")} <ArrowRight className={`w-6 h-6 text-accent ${isUrdu ? "rotate-180" : ""}`} />
            </Link>
         </div>
         {/* Decorative Landmark Background */}
         <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-center overflow-hidden">
            <div className="text-[500px] font-serif font-black text-primary-dark/20 transform rotate-45 scale-150">
              {isUrdu ? "اسلام" : "ISLAM"}
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}


