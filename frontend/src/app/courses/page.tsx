"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  BookOpen, 
  Clock, 
  Users, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Heart, 
  Star,
  Award,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CoursesPage() {
  const { t, isUrdu } = useLanguage();

  const courses = [
    { id: 1, title: t("course.c1_title"), desc: t("course.c1_desc"), duration: t("course.time_1y"), age: "5+ Years", fee: t("course.fee_monthly"), icon: BookOpen, color: "bg-primary/5", accent: "text-primary" },
    { id: 2, title: t("course.c2_title"), desc: t("course.c2_desc"), duration: t("course.time_34y"), age: "7+ Years", fee: t("course.fee_monthly"), icon: GraduationCap, color: "bg-accent/10", accent: "text-primary" },
    { id: 3, title: t("courses_p.c3_title"), desc: t("courses_p.c3_desc"), duration: t("course.time_2y"), age: t("courses_p.c3_age"), fee: t("courses_p.c3_fee"), icon: Star, color: "bg-cream", accent: "text-accent" },
    { id: 4, title: t("courses_p.c4_title"), desc: t("courses_p.c4_desc"), duration: "3 Years", age: t("courses_p.c4_age"), fee: t("courses_p.c4_fee"), icon: Heart, color: "bg-primary/10", accent: "text-primary-dark" },
    { id: 5, title: t("courses_p.c5_title"), desc: t("courses_p.c5_desc"), duration: t("course.time_1y"), age: t("courses_p.c5_age"), fee: t("courses_p.c5_fee"), icon: Award, color: "bg-white", accent: "text-accent" },
    { id: 6, title: t("courses_p.c6_title"), desc: t("courses_p.c6_desc"), duration: "6 Months", age: t("courses_p.c6_age"), fee: t("courses_p.c6_fee"), icon: Users, color: "bg-primary/5", accent: "text-primary" },
    { id: 7, title: t("courses_p.c7_title"), desc: t("courses_p.c7_desc"), duration: "Ongoing", age: t("courses_p.c7_age"), fee: t("courses_p.c7_fee"), icon: Clock, color: "bg-accent/5", accent: "text-primary" }
  ];

  return (
    <div className={`flex flex-col min-h-screen bg-background overflow-hidden ${isUrdu ? "font-urdu" : "font-sans"}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-44 pb-24 bg-transparent px-4 sm:px-6 lg:px-8 overflow-hidden group border-b border-primary/5">
         <div className="absolute inset-0 z-0 opacity-10 pointer-events-none select-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
         </div>

         <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
            <div className={`inline-flex items-center gap-2 bg-primary/5 border border-primary/10 px-6 py-2.5 rounded-full backdrop-blur-md animate-fade-in shadow-2xl ${isUrdu ? "flex-row-reverse" : ""}`}>
               <span className={`text-accent text-xs font-black uppercase tracking-[0.3em] leading-none ${isUrdu ? "font-urdu tracking-normal text-sm" : ""}`}>
                 {t("courses_p.hero_label")}
               </span>
               <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-glow"></div>
            </div>
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-serif font-black text-primary leading-tight underline decoration-accent decoration-8 underline-offset-8 ${isUrdu ? "font-urdu text-6xl md:text-8xl" : ""}`}>
              {isUrdu ? (
                <>ہمارے بنیادی <span className="text-accent italic">پروگرام</span></>
              ) : (
                <>Our Core <span className="text-accent italic">Programs</span></>
              )}
            </h1>
            <p className={`text-xl md:text-2xl text-primary/40 max-w-3xl mx-auto italic leading-relaxed ${isUrdu ? "font-urdu text-2xl" : ""}`}>
              {t("courses_p.hero_subtitle")}
            </p>
         </div>
      </section>

      {/* Course Grid Section */}
      <section className="py-24 bg-transparent relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-12">
          {courses.map((course, idx) => (
            <div key={idx} className={`rounded-4xl p-10 space-y-10 border border-black/5 flex flex-col justify-between group hover:scale-[1.03] hover:shadow-premium transition-all cursor-default shadow-sm ${course.color} ${isUrdu ? "text-right" : "text-left"}`}>
              <div className="space-y-6">
                <div className={`flex justify-between items-center ${isUrdu ? "flex-row-reverse" : ""}`}>
                  <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-3 shadow-xl border border-black/5 group-hover:rotate-12 transition-transform shadow-black/5`}>
                    <course.icon className={`w-8 h-8 ${course.accent}`} />
                  </div>
                  <div className={`flex flex-col ${isUrdu ? "items-start text-left" : "items-end"}`}>
                    <p className={`text-[10px] font-black uppercase tracking-widest opacity-20 leading-none ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>
                      {t("courses_p.admission_fee")}
                    </p>
                    <p className={`text-2xl font-serif font-black text-primary italic leading-none mt-1 ${isUrdu ? "font-urdu" : ""}`}>{course.fee}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className={`text-4xl font-serif font-bold text-primary group-hover:text-accent transition-colors leading-tight ${isUrdu ? "font-urdu text-4xl" : ""}`}>{course.title}</h3>
                  <p className={`text-primary/40 text-sm font-medium leading-relaxed italic line-clamp-2 ${isUrdu ? "font-urdu text-lg" : ""}`}>"{course.desc}"</p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-6 border-y border-black/5">
                   <div className="flex flex-col gap-1">
                      <span className={`text-[9px] font-black uppercase tracking-widest opacity-20 ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>
                        {t("courses_p.duration_label")}
                      </span>
                      <div className={`flex items-center gap-2 text-primary font-bold text-xs ${isUrdu ? "flex-row-reverse font-urdu text-sm" : ""}`}>
                        <Clock className="w-3.5 h-3.5 text-accent" /> {course.duration}
                      </div>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className={`text-[9px] font-black uppercase tracking-widest opacity-20 ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>
                        {t("courses_p.category_label")}
                      </span>
                      <div className={`flex items-center gap-2 text-primary font-bold text-xs ${isUrdu ? "flex-row-reverse font-urdu text-sm" : ""}`}>
                        <Users className="w-3.5 h-3.5 text-accent" /> {course.age}
                      </div>
                   </div>
                </div>
              </div>

              <div className="pt-8">
                 <Link 
                   href="/admission" 
                   className={`w-full h-16 bg-white text-primary text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 rounded-2xl shadow-xl shadow-black/5 hover:bg-primary hover:text-white transition-all transform group-hover:-translate-y-1 ${isUrdu ? "font-urdu flex-row-reverse tracking-normal text-lg" : ""}`}
                 >
                   {t("courses_p.enroll_btn")} <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-2 ${isUrdu ? "rotate-180" : ""}`} />
                 </Link>
                 <div className={`pt-6 flex items-center justify-center gap-4 text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] italic opacity-0 group-hover:opacity-100 transition-opacity ${isUrdu ? "font-urdu tracking-normal text-xs flex-row-reverse" : ""}`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent/40" /> {t("courses_p.verified")}
                 </div>
              </div>
            </div>
          ))}

          {/* Promotion Card */}
          <div className="rounded-4xl p-12 bg-primary-dark text-white flex flex-col justify-center items-center text-center space-y-8 relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_100%)] opacity-10"></div>
              <Heart className={`w-20 h-20 text-accent/20 absolute -top-4 ${isUrdu ? "-left-4" : "-right-4"}`} />
              <div className="space-y-4 relative z-10">
                 <h4 className={`text-3xl font-serif font-black italic underline decoration-accent decoration-4 underline-offset-8 ${isUrdu ? "font-urdu text-4xl" : ""}`}>
                   {isUrdu ? <>اسکالرشپ <br /> دستیاب ہے</> : <>Scholarships <br /> Available</>}
                 </h4>
                 <p className={`text-sm text-white/40 font-medium max-w-xs leading-relaxed ${isUrdu ? "font-urdu text-lg" : ""}`}>
                   {t("courses_p.sch_desc")}
                 </p>
                 <button className={`w-full h-14 bg-accent text-primary-dark font-black text-xs uppercase tracking-widest rounded-2xl transform hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-accent/20 ${isUrdu ? "font-urdu tracking-normal text-sm" : ""}`}>
                   {t("courses_p.sch_btn")}
                 </button>
              </div>
          </div>

        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-24 bg-transparent px-4 sm:px-6 lg:px-8">
         <div className="max-w-4xl mx-auto space-y-12 bg-white p-12 lg:p-20 rounded-5xl shadow-premium relative overflow-hidden group h-full">
            <div className={`flex flex-col md:flex-row justify-between items-center gap-12 relative z-10 ${isUrdu ? "md:flex-row-reverse" : ""}`}>
               <div className={`space-y-6 text-center ${isUrdu ? "md:text-right" : "md:text-left"}`}>
                  <h2 className={`text-4xl lg:text-5xl font-serif font-black text-primary leading-tight underline decoration-primary/10 decoration-8 underline-offset-8 ${isUrdu ? "font-urdu text-5xl" : ""}`}>
                    {t("courses_p.faq_title")}
                  </h2>
                  <p className={`text-xl text-primary/40 font-bold italic leading-relaxed ${isUrdu ? "font-urdu text-2xl" : ""}`}>
                    {t("courses_p.faq_desc")}
                  </p>
                  <button className={`inline-flex items-center gap-4 bg-primary text-white font-black text-sm uppercase tracking-widest py-4 px-10 rounded-2xl shadow-xl hover:-translate-y-1 transition-all ${isUrdu ? "font-urdu flex-row-reverse tracking-normal text-lg" : ""}`}>
                    {t("courses_p.faq_btn")} <ChevronRight className={`w-5 h-5 text-accent ${isUrdu ? "rotate-180" : ""}`} />
                  </button>
               </div>
               <div className="shrink-0 w-32 h-32 bg-accent/20 rounded-full flex items-center justify-center p-8 group-hover:rotate-12 transition-transform">
                  <Star className="w-16 h-16 text-primary fill-primary/10" />
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}


