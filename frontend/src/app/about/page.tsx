"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Landmark, 
  History, 
  Award, 
  Users, 
  Target, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t, isUrdu } = useLanguage();

  return (
    <div className={`flex flex-col min-h-screen bg-background overflow-hidden ${isUrdu ? "font-urdu" : "font-sans"}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-44 pb-24 bg-transparent px-4 sm:px-6 lg:px-8 overflow-hidden group">
         <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-linear-to-t from-accent/20 to-transparent"></div>
         </div>

         <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
            <div className={`inline-flex items-center gap-3 bg-primary/5 border border-primary/10 px-6 py-2.5 rounded-full shadow-2xl animate-fade-in ${isUrdu ? "flex-row-reverse" : ""}`}>
               <History className="w-5 h-5 text-accent" />
               <span className={`text-primary text-[10px] font-black uppercase tracking-[0.4em] leading-none underline decoration-accent/40 decoration-2 underline-offset-4 ${isUrdu ? "font-urdu text-xs tracking-normal" : ""}`}>
                 {t("about_p.hero_legacy")}
               </span>
            </div>
            <h1 className={`text-5xl md:text-7xl lg:text-9xl font-serif font-black text-primary leading-tight ${isUrdu ? "font-urdu text-6xl md:text-8xl lg:text-[10rem]" : ""}`}>
               {isUrdu ? (
                 <>
                   <span className="text-accent italic">العمیمہ</span> کے بارے میں
                 </>
               ) : (
                 <>
                   About <span className="text-accent italic">Al-Umaima</span>
                 </>
               )}
            </h1>
            <p className={`text-xl md:text-2xl text-primary/40 max-w-2xl mx-auto italic leading-relaxed ${isUrdu ? "font-urdu text-2xl" : ""}`}>
              {t("about_p.hero_subtitle")}
            </p>
         </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-32 bg-transparent px-4 sm:px-6 lg:px-8 relative overflow-hidden group">
         <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${isUrdu ? "text-right" : "text-left"}`}>
            <div className="space-y-10">
               <div className="space-y-6">
                  <h2 className={`text-4xl lg:text-6xl font-serif font-black text-primary leading-tight underline decoration-primary/10 decoration-8 underline-offset-8 group-hover:decoration-accent/20 transition-all ${isUrdu ? "font-urdu text-4xl lg:text-6xl" : ""}`}>
                    {t("about_p.journey_title")}
                  </h2>
                  <p className={`text-2xl text-primary/40 font-bold italic leading-relaxed ${isUrdu ? "font-urdu text-3xl" : ""}`}>
                    {t("about_p.journey_subtitle")}
                  </p>
               </div>
               
               <div className="space-y-8 relative z-10 pt-4">
                  {[
                    { label: t("about_p.journey_feat1_label"), val: t("about_p.journey_feat1_val"), icon: Landmark },
                    { label: t("about_p.journey_feat2_label"), val: t("about_p.journey_feat2_val"), icon: Award },
                    { label: t("about_p.journey_feat3_label"), val: t("about_p.journey_feat3_val"), icon: Users }
                  ].map((info, i) => (
                    <div key={i} className={`flex gap-8 group/info hover:translate-x-2 transition-transform ${isUrdu ? "flex-row-reverse" : ""}`}>
                       <div className={`w-16 h-16 bg-cream rounded-4xl flex items-center justify-center p-4 shadow-xl shadow-black/5 group-hover/info:bg-primary group-hover/info:text-white transition-all`}>
                          <info.icon className="w-8 h-8 text-primary group-hover/info:text-white transition-colors" />
                       </div>
                       <div className={`flex-1 space-y-1 pt-2 ${isUrdu ? "text-right" : "text-left"}`}>
                          <p className={`text-[10px] uppercase font-black tracking-widest text-primary/40 leading-none ${isUrdu ? "font-urdu text-xs tracking-normal" : ""}`}>{info.label}</p>
                          <p className={`text-lg font-bold text-primary italic leading-tight ${isUrdu ? "font-urdu text-2xl" : ""}`}>{info.val}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="relative">
               <div className="aspect-square bg-cream rounded-5xl group-hover:rotate-3 transition-transform duration-700 shadow-premium overflow-hidden border-8 border-white group/pic">
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-3xl group-hover/pic:opacity-0 transition-opacity"></div>
                  <div className="w-full h-full flex flex-col items-center justify-center p-20 text-center space-y-6">
                     <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-xl shadow-primary/20"><Landmark className="w-12 h-12 text-accent" /></div>
                     <h3 className={`text-4xl font-serif font-black text-primary italic ${isUrdu ? "font-urdu text-5xl" : ""}`}>
                       {t("about_p.journey_campus_one")}
                     </h3>
                     <p className={`text-xs text-primary/40 font-bold uppercase tracking-widest leading-none ${isUrdu ? "font-urdu text-sm" : ""}`}>
                       {t("about_p.journey_established")}
                     </p>
                  </div>
               </div>
               {/* Decorative floating badges */}
               <div className={`absolute -top-12 p-8 bg-accent text-primary-dark rounded-4xl shadow-2xl space-y-1 border-4 border-white transform hover:scale-110 transition-transform cursor-default ${isUrdu ? "-left-12" : "-right-12 text-left"}`}>
                  <p className="text-4xl font-black font-serif italic text-white underline decoration-primary decoration-4 underline-offset-4 leading-none select-none">28+</p>
                  <p className={`text-[10px] font-black uppercase tracking-widest leading-none ${isUrdu ? "font-urdu text-xs tracking-normal" : ""}`}>
                    {t("about_p.journey_years")}
                  </p>
               </div>
               <div className={`absolute -bottom-8 p-8 bg-primary text-white rounded-4xl shadow-2xl space-y-1 border-4 border-white transform hover:scale-110 transition-transform cursor-default ${isUrdu ? "-right-8" : "-left-8"}`}>
                  <p className="text-4xl font-black font-serif italic text-accent leading-none select-none">1200</p>
                  <p className={`text-[10px] font-black uppercase tracking-widest leading-none text-white/40 ${isUrdu ? "font-urdu text-xs tracking-normal" : ""}`}>
                    {t("about_p.journey_alumni")}
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-24 bg-transparent px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { title: t("about_p.vision_title"), desc: t("about_p.vision_desc"), icon: Target, color: "bg-primary text-white" },
            { title: t("about_p.mission_title"), desc: t("about_p.mission_desc"), icon: GraduationCap, color: "bg-white border border-black/5 text-primary" },
            { title: t("about_p.values_title"), desc: t("about_p.values_desc"), icon: ShieldCheck, color: "bg-accent text-primary" }
          ].map((card, c) => (
             <div key={c} className={`p-16 rounded-5xl flex flex-col justify-between group shadow-premium hover:scale-[1.03] transition-all cursor-default relative overflow-hidden ${card.color} ${isUrdu ? "text-right" : "text-left"}`}>
                <div className={`w-16 h-16 bg-background/20 rounded-2xl flex items-center justify-center p-4 mb-10 shadow-lg border border-white/10 group-hover:rotate-12 transition-transform ${isUrdu ? "mr-0 ml-auto" : ""}`}>
                   <card.icon className="w-8 h-8" />
                </div>
                <div className="space-y-6">
                   <h3 className={`text-4xl font-serif font-black leading-tight italic ${isUrdu ? "font-urdu text-4xl" : ""}`}>{card.title}</h3>
                   <p className={`text-lg opacity-60 leading-relaxed font-medium italic ${isUrdu ? "font-urdu text-xl" : ""}`}>"{card.desc}"</p>
                </div>
                <div className={`absolute bottom-0 right-0 p-8 transform translate-x-4 -translate-y-4 opacity-5 group-hover:scale-125 transition-transform duration-1000 pointer-events-none select-none ${isUrdu ? "right-auto left-0 -translate-x-4" : ""}`}>
                   <card.icon className="w-40 h-40" />
                </div>
             </div>
          ))}
        </div>
      </section>

      {/* Institutional Goals List */}
      <section className="py-32 bg-transparent relative overflow-hidden">
         <div className="max-w-4xl mx-auto space-y-16 relative z-10 px-4">
            <div className="text-center space-y-6">
               <span className={`text-accent text-sm font-bold uppercase tracking-[0.3em] ${isUrdu ? "font-urdu text-xs tracking-normal" : ""}`}>
                 {t("about_p.goals_strategy")}
               </span>
               <h2 className={`text-5xl font-serif font-black text-primary italic underline decoration-primary/10 decoration-8 underline-offset-8 leading-tight ${isUrdu ? "font-urdu text-5xl" : ""}`}>
                 {t("about_p.goals_title")}
               </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
               {[
                 { t: t("about_p.goal1_title"), d: t("about_p.goal1_desc") },
                 { t: t("about_p.goal2_title"), d: t("about_p.goal2_desc") },
                 { t: t("about_p.goal3_title"), d: t("about_p.goal3_desc") },
                 { t: t("about_p.goal4_title"), d: t("about_p.goal4_desc") }
               ].map((goal, g) => (
                 <div key={g} className={`p-8 bg-cream/40 rounded-4xl border border-primary/5 flex items-center gap-8 group hover:bg-white hover:shadow-xl transition-all ${isUrdu ? "flex-row-reverse text-right" : "text-left"}`}>
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-primary shadow-sm border border-black/5 group-hover:bg-accent group-hover:text-primary transition-all">
                       <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <div className="space-y-1">
                       <h5 className={`text-xl font-serif font-black text-primary leading-none group-hover:translate-x-1 transition-transform ${isUrdu ? "font-urdu text-2xl group-hover:-translate-x-1" : ""}`}>
                         {goal.t}
                       </h5>
                       <p className={`text-sm font-medium text-primary/40 italic ${isUrdu ? "font-urdu text-lg" : ""}`}>"{goal.d}"</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="pt-10 flex justify-center">
               <Link 
                 href="/admission" 
                 className={`px-12 py-5 bg-primary text-white font-black text-xl uppercase tracking-[0.2em] rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-6 ${isUrdu ? "flex-row-reverse font-urdu tracking-normal text-2xl" : ""}`}
               >
                 {t("about_p.enroll_btn")} <ArrowRight className={`w-6 h-6 text-accent ${isUrdu ? "rotate-180" : ""}`} />
               </Link>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}


