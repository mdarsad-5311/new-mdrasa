"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Users,
  Heart,
  Clock,
  Calendar,
  MessageCircle,
  Quote,
  CheckCircle2,
  ChevronRight,
  Landmark,
  MapPin,
  LogIn as LogInIcon,
  Sparkles
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { api } from "@/lib/api";

export default function Home() {
  const { t, isUrdu } = useLanguage();
  const [notices, setNotices] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        setError(null);
        const data = await api.getNotices();
        // Take latest 3 notices, ensure data is an array
        if (Array.isArray(data)) {
          setNotices(data.slice(0, 3));
        } else if (data && typeof data === 'object' && Array.isArray((data as any).notices)) {
           // Handle cases where data is { notices: [...] }
           setNotices((data as any).notices.slice(0, 3));
        }
      } catch (err: any) {
        console.error("Failed to fetch notices", err);
        setError(err.message);
      }
    };
    fetchNotices();
  }, []);

  return (
    <div className={`flex flex-col min-h-screen bg-background ${isUrdu ? "font-urdu" : "font-sans"}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-35 pb-24 flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 text-center ${isUrdu ? "lg:text-right" : "lg:text-left"}`}>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 backdrop-blur-3xl px-6 py-3 rounded-full animate-fade-in group/badge cursor-default">
              <span className={`text-primary text-[10px] font-black uppercase tracking-[0.4em] leading-none underline decoration-accent/40 decoration-2 underline-offset-4 ${isUrdu ? "font-urdu tracking-normal text-sm" : ""}`}>
                {t("hero.admissions")}
              </span>
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-glow"></div>
            </div>

            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-serif font-black text-primary leading-[1.1] tracking-tight ${isUrdu ? "font-urdu text-6xl md:text-8xl leading-snug" : ""}`}>
              {t("hero.title_p1")} <br />
              <span className="text-accent italic relative inline-block">
                {t("hero.title_quran")}
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-accent/20 -z-10 skew-x-12"></span>
              </span>, {isUrdu ? "" : <br />}
              {t("hero.title_p2")}
            </h1>

            <p className={`text-xl md:text-2xl text-primary/60 max-w-xl leading-relaxed font-medium italic underline decoration-primary/5 decoration-8 underline-offset-8 ${isUrdu ? "font-urdu text-3xl leading-relaxed mx-auto lg:mx-0" : ""}`}>
              "{t("hero.subtitle")}"
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isUrdu ? "lg:justify-start" : "lg:justify-start"}`}>
              <Link
                href="/admission"
                className={`bg-primary text-white px-10 py-5 rounded-2xl font-serif font-black text-lg flex items-center justify-center gap-3 hover:bg-primary-dark transition-all shadow-2xl hover:shadow-primary/30 transform hover:-translate-y-1 group ${isUrdu ? "font-urdu text-2xl" : ""}`}
              >
                {t("btn.apply")} <ArrowRight className={`w-5 h-5 group-hover:translate-x-2 transition-transform ${isUrdu ? "rotate-180" : ""}`} />
              </Link>
              <Link
                href="/donation"
                className={`bg-cream border-2 border-accent text-primary px-10 py-5 rounded-2xl font-serif font-black text-lg flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl hover:-translate-y-1 group ${isUrdu ? "font-urdu text-2xl" : ""}`}
              >
                {t("btn.donate")} <Heart className="w-5 h-5 fill-accent/20 group-hover:scale-125 transition-transform" />
              </Link>
              <Link
                href="/login"
                className={`inline-flex items-center justify-center gap-2 font-bold px-8 py-4 text-primary hover:text-accent transition-colors ${isUrdu ? "font-urdu text-xl" : ""}`}
              >
                {t("nav.login")} <LogInIcon className={`w-5 h-5 ${isUrdu ? "rotate-180" : ""}`} />
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative group">
            <div className="relative z-10 overflow-hidden rounded-4xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
              {/* Replace with actual image in production */}
              <div className="aspect-4/5 bg-primary/20 flex flex-col items-center justify-center p-12 border-8 border-white/50 backdrop-blur-sm relative">
                <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <Landmark className="w-12 h-12 text-primary" />
                </div>
                <h3 className={`text-3xl font-serif font-bold text-primary text-center mb-4 ${isUrdu ? "font-urdu" : ""}`}>
                  {t("about.title")}
                </h3>
                <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl border border-primary/10 space-y-2 max-w-[200px]">
                  <GraduationCap className="w-8 h-8 text-accent" />
                  <p className={`text-xs text-text-dark/60 font-semibold leading-tight ${isUrdu ? "font-urdu" : ""}`}>
                    {t("hero.join_msg")}
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-6 ${isUrdu ? "text-right" : "text-left"}`}>
            <div className={`text-secondary font-bold text-sm tracking-[0.2em] uppercase leading-none border-l-4 border-accent pl-4 ${isUrdu ? "font-urdu border-l-0 border-r-4 pl-0 pr-4" : ""}`}>
              {t("about.legacy")}
            </div>
            <h2 className={`text-4xl md:text-5xl font-serif font-bold text-primary ${isUrdu ? "font-urdu" : ""}`}>
              {t("about.title")}
            </h2>
            <div className={`space-y-4 text-text-dark/70 leading-relaxed text-lg ${isUrdu ? "font-urdu text-xl" : ""}`}>
              <p>
                {t("about.desc1")}
              </p>
              <p>
                {t("about.desc2")}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { label: t("about.vision_label"), text: t("about.vision_text") },
                { label: t("about.values_label"), text: t("about.values_text") }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white/40 backdrop-blur-sm rounded-xl space-y-1">
                  <span className={`text-accent font-bold text-xs uppercase tracking-widest ${isUrdu ? "font-urdu" : ""}`}>{item.label}</span>
                  <p className={`text-primary font-semibold text-sm leading-tight ${isUrdu ? "font-urdu" : ""}`}>{item.text}</p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className={`inline-flex items-center gap-4 text-primary font-black uppercase tracking-widest text-xs group pt-4 ${isUrdu ? "font-urdu text-sm flex-row-reverse" : ""}`}
            >
              {t("about.learn_more")}
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                <ChevronRight className={`w-5 h-5 ${isUrdu ? "rotate-180" : ""}`} />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] -z-10 scale-150"></div>
            <div className="space-y-8 pt-12">
              <div className="aspect-square bg-white/80 rounded-3xl flex flex-col justify-center items-center shadow-premium border border-black/5 transform hover:-translate-y-4 transition-all duration-500 p-10 group/card">
                <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover/card:bg-primary transition-colors">
                  <Landmark className="w-10 h-10 text-primary group-hover/card:text-white" />
                </div>
                <p className={`text-center font-black text-primary uppercase tracking-widest text-xs ${isUrdu ? "font-urdu" : ""}`}>{t("about.masjid_learning")}</p>
              </div>
              <div className="aspect-square bg-primary-dark text-white rounded-3xl flex flex-col justify-center items-center shadow-2xl transform hover:scale-105 transition-all duration-500 p-10 group/card relative overflow-hidden">
                <BookOpen className="w-12 h-12 text-accent mb-6 relative z-10 animate-bounce" />
                <p className={`text-center font-black uppercase tracking-widest text-xs relative z-10 ${isUrdu ? "font-urdu" : ""}`}>{t("about.hifz_program")}</p>
                <div className="absolute bottom-0 right-0 p-4 opacity-10">
                  <Sparkles className="w-20 h-20" />
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="aspect-square bg-white/60 rounded-3xl flex flex-col justify-center items-center shadow-premium border border-accent/10 transform hover:scale-105 transition-all duration-500 p-10 group/card">
                <Users className="w-12 h-12 text-accent mb-6" />
                <p className={`text-center font-black text-primary uppercase tracking-widest text-xs ${isUrdu ? "font-urdu" : ""}`}>{t("about.student_centered")}</p>
              </div>
              <div className="aspect-square bg-white/80 rounded-3xl flex flex-col justify-center items-center shadow-premium border border-black/5 transform hover:-translate-y-4 transition-all duration-500 p-10 group/card">
                <div className="w-20 h-20 bg-accent/5 rounded-2xl flex items-center justify-center mb-6 group-hover/card:bg-accent transition-colors">
                  <ShieldCheck className="w-10 h-10 text-accent group-hover/card:text-white" />
                </div>
                <p className={`text-center font-black text-primary uppercase tracking-widest text-xs ${isUrdu ? "font-urdu" : ""}`}>{t("about.global_standards")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4">
            <h2 className={`text-4xl md:text-5xl font-serif font-bold text-primary ${isUrdu ? "font-urdu" : ""}`}>{t("why.title")}</h2>
            <p className={`text-text-dark/60 max-w-2xl mx-auto italic ${isUrdu ? "font-urdu text-2xl" : ""}`}>
              {t("why.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t("why.feat1_title"),
                desc: t("why.feat1_desc"),
                icon: GraduationCap
              },
              {
                title: t("why.feat2_title"),
                desc: t("why.feat2_desc"),
                icon: ShieldCheck
              },
              {
                title: t("why.feat3_title"),
                desc: t("why.feat3_desc"),
                icon: Heart
              },
              {
                title: t("why.feat4_title"),
                desc: t("why.feat4_desc"),
                icon: BookOpen
              },
              {
                title: t("why.feat5_title"),
                desc: t("why.feat5_desc"),
                icon: CheckCircle2
              },
              {
                title: t("why.feat6_title"),
                desc: t("why.feat6_desc"),
                icon: Users
              }
            ].map((feature, id) => (
              <div key={id} className={`bg-white/40 backdrop-blur-sm p-10 rounded-4xl shadow-soft border border-transparent hover:border-accent hover:shadow-premium transition-all duration-500 group relative overflow-hidden ${isUrdu ? "text-right" : "text-left"}`}>
                <div className={`absolute top-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity ${isUrdu ? "left-0" : "right-0"}`}>
                  <feature.icon className="w-32 h-32" />
                </div>
                <div className={`w-16 h-16 bg-white/60 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12 ${isUrdu ? "mr-0 ml-auto" : ""}`}>
                  <feature.icon className="w-8 h-8 transition-colors" />
                </div>
                <h3 className={`text-2xl font-serif font-black text-primary mb-4 ${isUrdu ? "font-urdu" : ""}`}>{feature.title}</h3>
                <p className={`text-primary/50 text-sm font-medium leading-relaxed italic line-clamp-3 ${isUrdu ? "font-urdu text-lg" : ""}`}>"{feature.desc}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="py-24 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className={`flex flex-col md:flex-row justify-between items-end gap-6 ${isUrdu ? "md:flex-row-reverse" : ""}`}>
            <div className={`space-y-4 ${isUrdu ? "text-right" : "text-left"}`}>
              <span className={`text-accent font-bold tracking-widest text-xs uppercase underline underline-offset-8 ${isUrdu ? "font-urdu text-sm" : ""}`}>{t("course.label")}</span>
              <h2 className={`text-4xl md:text-5xl font-serif font-bold text-primary leading-tight ${isUrdu ? "font-urdu" : ""}`}>{t("course.title")}</h2>
            </div>
            <Link
              href="/courses"
              className={`bg-primary/5 text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-sm ${isUrdu ? "font-urdu text-lg" : ""}`}
            >
              {t("course.view_all")}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              { title: t("course.c1_title"), desc: t("course.c1_desc"), time: t("course.time_1y"), fee: t("course.fee_monthly"), color: "bg-primary/5" },
              { title: t("course.c2_title"), desc: t("course.c2_desc"), time: t("course.time_34y"), fee: t("course.fee_monthly"), color: "bg-accent/5" },
              { title: t("course.c3_title"), desc: t("course.c3_desc"), time: t("course.time_2y"), fee: t("course.fee_semester"), color: "bg-cream" },
              { title: t("course.c4_title"), desc: t("course.c4_desc"), time: t("course.time_1y"), fee: t("course.fee_free"), color: "bg-primary/10" }
            ].map((course, idx) => (
              <div key={idx} className={`relative overflow-hidden rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-xl transition-all group ${course.color} ${isUrdu ? "text-right" : "text-left"}`}>
                <div className="relative z-10 space-y-6">
                  <h3 className={`text-2xl font-serif font-bold text-primary ${isUrdu ? "font-urdu" : ""}`}>{course.title}</h3>
                  <p className={`text-text-dark/70 text-sm leading-relaxed min-h-[60px] ${isUrdu ? "font-urdu text-lg" : ""}`}>{course.desc}</p>

                  <div className={`flex items-center gap-4 py-4 border-y border-black/5 ${isUrdu ? "flex-row-reverse" : ""}`}>
                    <div className={`flex items-center gap-1.5 text-xs font-bold text-primary ${isUrdu ? "font-urdu" : ""}`}>
                      <Clock className="w-3.5 h-3.5" /> {course.time}
                    </div>
                    <div className={`flex items-center gap-1.5 text-xs font-bold text-accent italic ${isUrdu ? "font-urdu" : ""}`}>
                      <Heart className="w-3.5 h-3.5" /> {t("hero.admissions")}
                    </div>
                  </div>

                  <Link
                    href="/admission"
                    className={`w-full py-3 bg-white text-primary text-sm font-bold rounded-xl shadow-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all transform group-hover:-translate-y-1 ${isUrdu ? "font-urdu text-lg flex-row-reverse" : ""}`}
                  >
                    {t("course.enroll_now")} <ArrowRight className={`w-4 h-4 ${isUrdu ? "rotate-180" : ""}`} />
                  </Link>
                </div>
                <div className={`absolute top-0 p-8 transform translate-x-4 -translate-y-4 opacity-5 pointer-events-none group-hover:rotate-12 transition-transform ${isUrdu ? "left-0" : "right-0"}`}>
                  <BookOpen className="w-24 h-24 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-x-0 bottom-0 top-0 opacity-10 flex flex-col justify-between items-center pointer-events-none select-none">
          <div className="text-[200px] font-serif font-bold text-white/20 whitespace-nowrap -rotate-6 transform -translate-x-1/4 leading-none select-none">KNOWLEDGE</div>
          <div className="text-[200px] font-serif font-bold text-white/20 whitespace-nowrap rotate-2 transform translate-x-1/4 leading-none select-none">LIGHT</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square bg-cream/10 rounded-4xl overflow-hidden border-8 border-white/10 relative z-20">
              <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent"></div>
              {/* Image Placeholder */}
              <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center space-y-4">
                <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-10 h-10 text-accent" />
                </div>
                <p className={`text-cream/50 text-xs font-bold tracking-[0.3em] uppercase ${isUrdu ? "font-urdu tracking-normal text-sm" : ""}`}>{t("founder.designation")}</p>
                <h4 className={`text-3xl font-serif font-bold text-cream ${isUrdu ? "font-urdu" : ""}`}>{t("founder.name")}</h4>
              </div>
            </div>
            {/* Elegant Accent Frames */}
            <div className="absolute top-6 left-6 -right-6 bottom-6 border-2 border-accent/30 rounded-4xl -z-10 transform -rotate-2"></div>
            <div className="absolute top-6 left-6 -right-6 bottom-6 border-2 border-white/20 rounded-4xl -z-10 transform rotate-2"></div>
          </div>

          <div className={`space-y-8 relative ${isUrdu ? "text-right" : "text-left"}`}>
            <Quote className={`w-20 h-20 text-accent/10 absolute -top-12 ${isUrdu ? "-right-8" : "-left-8"}`} />
            <div className="space-y-4">
              <span className={`text-accent font-bold tracking-widest text-xs uppercase leading-none ${isUrdu ? "font-urdu text-sm" : ""}`}>{t("founder.badge")}</span>
              <h2 className={`text-4xl md:text-5xl font-serif font-bold text-white leading-tight ${isUrdu ? "font-urdu" : ""}`}>{t("founder.title")}</h2>
            </div>

            <div className={`space-y-6 text-cream/80 text-xl font-light italic leading-relaxed ${isUrdu ? "font-urdu text-3xl leading-relaxed" : ""}`}>
              <p>
                {t("founder.msg")}
              </p>
            </div>

            <div className="space-y-1">
              <p className={`text-accent font-bold text-xl ${isUrdu ? "font-urdu text-2xl" : ""}`}>{t("founder.name")}</p>
              <p className={`text-cream/40 text-xs font-semibold uppercase tracking-widest ${isUrdu ? "font-urdu tracking-normal text-sm" : ""}`}>{t("founder.role")}</p>
            </div>

            <Link
              href="/about"
              className={`inline-flex items-center gap-3 py-4 text-white hover:text-accent font-bold transition-all border-b border-white/20 hover:border-accent ${isUrdu ? "font-urdu text-lg flex-row-reverse" : ""}`}
            >
              {t("founder.link")} <ChevronRight className={`w-5 h-5 text-accent ${isUrdu ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-accent py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-12 relative z-10">
          {[
            { tag: t("stats.students"), val: "500+", icon: GraduationCap },
            { tag: t("stats.alumni"), val: "1200+", icon: BookOpen },
            { tag: t("stats.teachers"), val: "45+", icon: Users },
            { tag: t("stats.courses"), val: t("stats.courses"), icon: Landmark }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-3 group cursor-default">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-500 transform group-hover:rotate-12">
                <stat.icon className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <p className={`text-5xl font-serif font-black text-primary leading-none tracking-tighter ${isUrdu ? "font-urdu" : ""}`}>{stat.val}</p>
              <p className={`text-primary/70 font-bold text-sm tracking-widest uppercase ${isUrdu ? "font-urdu tracking-normal text-lg" : ""}`}>{stat.tag}</p>
            </div>
          ))}
        </div>
        {/* Floating background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      </section>

      {/* Latest Notices Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className={`flex flex-col md:flex-row justify-between items-end gap-6 ${isUrdu ? "md:flex-row-reverse" : ""}`}>
            <h2 className={`text-4xl md:text-5xl font-serif font-bold text-primary ${isUrdu ? "font-urdu" : ""}`}>{t("notice.title")}</h2>
            <Link
              href="/notices"
              className={`text-primary font-bold border-b-2 border-accent pb-1 inline-flex items-center gap-2 hover:gap-4 transition-all ${isUrdu ? "font-urdu text-xl flex-row-reverse" : ""}`}
            >
              {t("notice.link")} <ArrowRight className={`w-5 h-5 ${isUrdu ? "rotate-180" : ""}`} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {error ? (
               <div className="text-center col-span-3 p-8 bg-red-50 rounded-2xl border border-red-100">
                 <p className="text-red-600 font-medium">{error}</p>
                 <p className="text-red-400 text-sm mt-2">Please ensure the backend server and MongoDB are running.</p>
               </div>
            ) : notices.length === 0 ? (
               <p className="text-center col-span-3 opacity-50 italic">No recent notices found.</p>
            ) : notices.map((notice, n) => (
              <div key={n} className={`bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-primary/5 hover:border-accent group transition-all cursor-pointer relative overflow-hidden ${isUrdu ? "text-right" : "text-left"}`}>
                <div className={`absolute top-0 w-24 h-24 bg-accent/10 rounded-bl-5xl group-hover:h-28 group-hover:w-28 transition-all ${isUrdu ? "left-0 rounded-bl-0 rounded-br-5xl" : "right-0"}`}></div>
                <div className="relative z-10 space-y-6">
                  <div className={`flex items-center gap-3 ${isUrdu ? "flex-row-reverse" : ""}`}>
                    <span className={`bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest leading-none ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>
                      {notice.category || notice.type || "General"}
                    </span>
                    <span className={`text-primary/40 text-xs font-bold flex items-center gap-1 ${isUrdu ? "font-urdu" : ""}`}>
                      <Calendar className="w-3.5 h-3.5" /> {new Date(notice.createdAt || notice.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold text-primary leading-tight group-hover:text-accent transition-colors ${isUrdu ? "font-urdu text-2xl" : ""}`}>{notice.title}</h3>
                  <p className={`text-text-dark/60 text-sm leading-relaxed line-clamp-2 ${isUrdu ? "font-urdu text-lg" : ""}`}>{notice.description || notice.desc}</p>
                  <button className={`text-sm font-bold text-primary flex items-center gap-2 group/btn ${isUrdu ? "font-urdu text-lg flex-row-reverse" : ""}`}>
                    {t("notice.read_more")} <ChevronRight className={`w-4 h-4 transition-transform group-hover/btn:translate-x-1 ${isUrdu ? "rotate-180" : ""}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 bg-white/80 backdrop-blur-md rounded-4xl p-16 shadow-premium relative z-10 border border-black/5">
          <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="w-10 h-10 text-primary fill-primary/10" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-primary ${isUrdu ? "font-urdu" : ""}`}>{t("donation.title")}</h2>
          <p className={`text-xl text-text-dark/60 max-w-3xl mx-auto leading-relaxed ${isUrdu ? "font-urdu text-3xl" : ""}`}>
            {t("donation.desc")}
          </p>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center pt-8 ${isUrdu ? "flex-row-reverse" : ""}`}>
            <Link href="/donation" className={`bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:bg-primary-dark transition-all transform hover:-translate-y-1 ${isUrdu ? "font-urdu text-2xl" : ""}`}>
              {t("donation.btn")}
            </Link>
            <div className={`p-4 bg-cream rounded-2xl border border-accent/20 flex items-center gap-4 text-left max-w-md ${isUrdu ? "flex-row-reverse text-right" : ""}`}>
              <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xl font-bold text-primary text-xs">QR</div>
              <div>
                <p className={`text-[10px] uppercase font-bold text-accent tracking-[0.2em] leading-none mb-1 ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>{t("donation.quick_pay")}</p>
                <p className={`text-sm font-bold text-primary ${isUrdu ? "font-urdu text-lg" : ""}`}>{t("donation.scan_qr")}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-black/5">
            {[
              { label: t("donation.bank"), value: "9527635311", hint: "AL-UMAIMA TRUST" },
              { label: t("donation.upi"), value: "madrasa@upi", hint: "One-click pay" },
              { label: t("donation.phonepay"), value: "+91 90000 00000", hint: "Mobile Transfer" }
            ].map((pay, p) => (
              <div key={p} className="text-center space-y-1">
                <p className={`text-[10px] text-text-dark/40 font-bold uppercase tracking-widest ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>{pay.label}</p>
                <p className={`text-primary font-bold text-lg leading-none ${isUrdu ? "font-urdu" : ""}`}>{pay.value}</p>
                <p className={`text-accent text-[10px] italic ${isUrdu ? "font-urdu" : ""}`}>{pay.hint}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Background Ornaments */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none z-0">
          <Landmark className="w-[800px] h-[800px] absolute -top-40 -left-40 transform -rotate-12 text-primary" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4">
            <span className={`text-accent text-sm font-bold uppercase tracking-[0.3em] ${isUrdu ? "font-urdu tracking-normal" : ""}`}>{t("test.label")}</span>
            <h2 className={`text-4xl md:text-5xl font-serif font-bold text-primary ${isUrdu ? "font-urdu" : ""}`}>{t("test.title")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-10">
            {[
              { name: t("test.t1_name"), role: t("test.t1_role"), text: t("test.t1_text"), stars: 5 },
              { name: t("test.t2_name"), role: t("test.t2_role"), text: t("test.t2_text"), stars: 5 },
              { name: t("test.t3_name"), role: t("test.t3_role"), text: t("test.t2_text"), stars: 5 }
            ].map((test, t) => (
              <div key={t} className={`p-10 bg-white/40 backdrop-blur-sm rounded-4xl space-y-6 relative border border-transparent hover:border-accent transition-all group shadow-sm hover:shadow-xl ${isUrdu ? "text-right" : "text-left"}`}>
                <Quote className={`w-12 h-12 text-primary/10 absolute -top-4 group-hover:text-accent/20 transition-colors ${isUrdu ? "-right-4 rotate-180" : "-left-4"}`} />
                <div className={`flex gap-1 ${isUrdu ? "justify-end" : "justify-start"}`}>
                  {[...Array(test.stars)].map((_, s) => <span key={s} className="text-accent text-lg leading-none">★</span>)}
                </div>
                <p className={`text-primary font-medium leading-relaxed italic ${isUrdu ? "font-urdu text-xl" : ""}`}>"{test.text}"</p>
                <div className={`pt-6 border-t border-black/5 flex items-center gap-4 ${isUrdu ? "flex-row-reverse" : ""}`}>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary uppercase">{test.name.charAt(0)}</div>
                  <div className={isUrdu ? "text-right" : "text-left"}>
                    <p className={`text-primary font-bold leading-none ${isUrdu ? "font-urdu text-lg" : ""}`}>{test.name}</p>
                    <p className={`text-accent text-xs font-semibold leading-none mt-1 uppercase tracking-widest ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-primary-dark px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fancy-pants.png')] opacity-10 mix-blend-overlay animate-pulse"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 bg-white/5 p-16 lg:p-24 rounded-5xl backdrop-blur-3xl border border-white/10 relative overflow-hidden group shadow-[0_0_100px_rgba(0,0,0,0.3)]">
          <div className="absolute top-0 right-0 w-full h-[500px] bg-[radial-gradient(circle_at_top_right,var(--accent),transparent_70%)] opacity-20 pointer-events-none"></div>
          <div className={`space-y-10 relative z-10 max-w-xl text-center ${isUrdu ? "md:text-right" : "md:text-left"}`}>
            <div className="flex flex-col gap-4">
              <h2 className={`text-5xl md:text-7xl font-serif font-black text-white italic ${isUrdu ? "font-urdu" : ""}`}>{t("cta.title")}</h2>
              <p className={`text-2xl text-white/50 italic font-medium leading-relaxed ${isUrdu ? "font-urdu text-3xl" : ""}`}>{t("cta.subtitle")}</p>
            </div>
            <div className={`flex flex-wrap gap-8 justify-center ${isUrdu ? "md:justify-end" : "md:justify-start"}`}>
              <div className={`flex items-center gap-4 group/item ${isUrdu ? "flex-row-reverse" : ""}`}>
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover/item:bg-accent transition-all">
                  <MessageCircle className="w-6 h-6 text-accent group-hover/item:text-primary" />
                </div>
                <div className={`flex flex-col ${isUrdu ? "text-right" : "text-left"}`}>
                  <span className={`text-[10px] uppercase font-black tracking-widest text-white/30 ${isUrdu ? "font-urdu tracking-normal" : ""}`}>{t("cta.direct_line")}</span>
                  <span className={`text-lg font-bold text-white tracking-widest ${isUrdu ? "font-urdu tracking-normal text-xl" : ""}`}>9527635311</span>
                </div>
              </div>
              <div className={`flex items-center gap-4 group/item ${isUrdu ? "flex-row-reverse" : ""}`}>
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover/item:bg-white transition-all">
                  <Landmark className="w-6 h-6 text-white group-hover/item:text-primary" />
                </div>
                <div className={`flex flex-col ${isUrdu ? "text-right" : "text-left"}`}>
                  <span className={`text-[10px] uppercase font-black tracking-widest text-white/30 ${isUrdu ? "font-urdu tracking-normal" : ""}`}>{t("cta.visit")}</span>
                  <span className={`text-lg font-bold text-white tracking-widest ${isUrdu ? "font-urdu tracking-normal text-xl" : ""}`}>nashik maharastra ,india</span>
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className={`bg-accent text-primary-dark px-16 py-8 rounded-3xl font-serif font-black text-3xl shadow-2xl hover:scale-110 active:scale-95 transition-all transform relative z-10 hover:shadow-accent/40 group overflow-hidden ${isUrdu ? "font-urdu" : ""}`}
          >
            <span className="relative z-10">{t("cta.btn")}</span>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function LogIn(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" y1="12" x2="3" y2="12" />
    </svg>
  );
}


