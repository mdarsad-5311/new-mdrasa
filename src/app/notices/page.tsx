"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Bell, 
  Calendar, 
  ChevronRight, 
  Search, 
  Filter, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  GraduationCap, 
  Landmark, 
  Award,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const notices = [
  { id: 1, title: "Admission Open For Session 2026-27", cat: "Admission", date: "April 15, 2026", details: "Online and offline applications are now open for Nazra and Hifz courses.", color: "bg-primary text-white" },
  { id: 2, title: "Ramadan Holidays & Schedule", cat: "Holidays", date: "Jan 10, 2026", details: "Madrasa will remain closed from 20th Ramadan to 5th Shawwal.", color: "bg-accent text-primary" },
  { id: 3, title: "Annual Examination Results Released", cat: "Results", date: "May 20, 2026", details: "Students can check results on their dashboards from today.", color: "bg-primary-dark text-white" },
  { id: 4, title: "Weekly Parents-Teacher Meeting", cat: "Event", date: "Every Sunday", details: "Join us for progress evaluation of your child every Sunday after Asr prayer.", color: "bg-cream text-primary border border-primary/5 shadow-inner italic" },
  { id: 5, title: "New Arabic Grammar Workshop", cat: "Academic", date: "June 05, 2026", details: "Special 10-day intensive workshop for advanced Arabic morphology.", color: "bg-white border border-black/5 shadow-sm" },
  { id: 6, title: "Library Expansion Notice", cat: "Facility", date: "Ongoing", details: "New classical books and study materials added to the main library.", color: "bg-primary/5 text-primary-dark" }
];

export default function NoticePage() {
  const { t, isUrdu } = useLanguage();

  return (
    <div className={`flex flex-col min-h-screen bg-transparent ${isUrdu ? "font-urdu" : "font-sans"} overflow-hidden`}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-44 pb-24 bg-transparent px-4 sm:px-6 lg:px-8 overflow-hidden group border-b border-primary/5">
         <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
         </div>

         <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
            <div className={`inline-flex items-center gap-3 bg-primary/5 border border-primary/10 px-6 py-2.5 rounded-full shadow-2xl animate-fade-in ${isUrdu ? "flex-row-reverse" : ""}`}>
               <Bell className="w-5 h-5 text-accent" />
               <span className={`text-primary text-[10px] font-black uppercase tracking-[0.4em] leading-none underline decoration-accent/40 decoration-2 underline-offset-4 ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>
                 {t("notice.hero_label") || "Board & Announcements"}
               </span>
            </div>
            <h1 className={`text-5xl md:text-7xl lg:text-9xl font-serif font-black text-primary leading-tight underline decoration-accent decoration-8 underline-offset-8 ${isUrdu ? "font-urdu text-6xl md:text-8xl" : ""}`}>
              {isUrdu ? "تازہ ترین " : "Latest "}
              <span className="text-accent italic">{isUrdu ? "اعلانات" : "Notices"}</span>
            </h1>
            <p className={`text-xl md:text-2xl text-primary/40 max-w-2xl mx-auto font-medium italic underline decoration-primary/10 decoration-8 underline-offset-8 leading-relaxed ${isUrdu ? "font-urdu text-2xl" : ""}`}>
              {t("notice.hero_subtitle") || "Stay updated with the heartbeat of Madrasa Al-Umaima."}
            </p>
         </div>
      </section>

      {/* Main Board Section */}
      <section className="py-24 bg-transparent relative z-10 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto space-y-16">
            
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-cream/50 p-6 rounded-4xl border border-primary/5 shadow-sm">
               <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {["All", "Admission", "Academic", "Holidays", "Events"].map((f) => (
                    <button key={f} className={`h-11 px-8 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${
                      f === "All" ? "bg-primary text-white shadow-xl shadow-primary/20" : "bg-white text-primary/40 hover:bg-white hover:text-primary border border-black/5"
                    }`}>{f}</button>
                  ))}
               </div>
               <div className="flex gap-4">
                  <div className="relative group/search">
                     <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within/search:text-primary transition-colors" />
                     <input type="text" placeholder="Search Notice..." className="h-11 pl-12 pr-6 bg-white border border-black/5 rounded-xl outline-none focus:ring-4 focus:ring-primary/5 font-bold text-sm text-primary placeholder:font-medium transition-all w-64 shadow-inner" />
                  </div>
                  <button className="h-11 w-11 bg-white flex items-center justify-center rounded-xl text-primary/40 hover:text-accent border border-black/5 shadow-inner transition-all"><Filter className="w-5 h-5" /></button>
               </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {notices.map((notice, idx) => (
                 <div key={idx} className={`p-10 rounded-4xl border border-black/5 space-y-10 group hover:scale-[1.03] hover:shadow-premium transition-all flex flex-col justify-between overflow-hidden relative shadow-sm h-full ${notice.color}`}>
                   
                   {/* Background Ornaments */}
                   <div className="absolute top-0 right-0 p-8 transform translate-x-12 -translate-y-12 opacity-5 scale-[2] pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
                     <Landmark className="w-24 h-24 text-white" />
                   </div>

                   <div className="space-y-6 relative z-10">
                      <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] opacity-60 leading-none">
                         <span className="flex items-center gap-2 italic">{notice.cat} Center</span>
                         <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 opacity-20" /> {notice.date}</span>
                      </div>
                      
                      <div className="space-y-4 pt-4 border-t border-black/5">
                         <div className="w-14 h-14 bg-background/20 backdrop-blur-md rounded-2xl flex items-center justify-center p-4 shadow-xl border border-white/10 group-hover:bg-white group-hover:text-primary transition-all">
                            <Bell className="w-8 h-8" />
                         </div>
                         <h3 className="text-3xl font-serif font-black leading-tight italic decoration-accent/10 underline decoration-4 underline-offset-8 transition-colors group-hover:decoration-accent">{notice.title}</h3>
                         <p className="text-sm font-medium leading-relaxed italic opacity-40 line-clamp-3">"{notice.details}"</p>
                      </div>
                   </div>

                   <div className="pt-8 relative z-10 flex flex-col gap-4">
                      <button className="w-full h-14 bg-white/20 hover:bg-white/40 text-current text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl border border-white/10 transition-all shadow-xl shadow-black/5 flex items-center justify-center gap-2">
                         Read Document <ChevronRight className="w-4 h-4" />
                      </button>
                      <button className="flex items-center justify-center gap-2 text-[9px] font-black text-white/40 uppercase tracking-[0.2em] group-hover:px-2 transition-all opacity-0 group-hover:opacity-100">
                         Verify Source <ShieldCheck className="w-3 h-3 text-accent/40" />
                      </button>
                   </div>
                 </div>
               ))}
            </div>

         </div>
      </section>

      {/* Newsletter / Notifications CTA */}
      <section className="py-24 bg-transparent px-4">
         <div className="max-w-4xl mx-auto bg-primary-dark p-12 lg:p-20 rounded-5xl text-center space-y-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_100%)] opacity-10 pointer-events-none scale-150"></div>
            <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center mx-auto shadow-xl shadow-accent/20 rotate-3 transition-transform group-hover:-rotate-3">
               <GraduationCap className="w-10 h-10 text-primary-dark" />
            </div>
            <div className="space-y-6 relative z-10">
               <h2 className="text-4xl lg:text-6xl font-serif font-black text-white underline decoration-accent decoration-8 underline-offset-8 leading-tight">Stay Connected</h2>
               <p className="text-xl text-white/40 font-bold italic max-w-xl mx-auto leading-relaxed">Join our WhatsApp notification community and never miss a crucial update from the Madrasa.</p>
            </div>
            <button className="inline-flex items-center gap-6 px-12 py-5 bg-accent text-primary-dark font-black text-xl uppercase tracking-[0.2em] rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all relative z-10 group-hover:shadow-accent/40">
               Direct Support <ArrowRight className="w-6 h-6 text-primary shadow-glow" />
            </button>
         </div>
      </section>

      <Footer />
    </div>
  );
}


