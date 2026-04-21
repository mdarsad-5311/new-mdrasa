"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { 
  BarChart3, 
  Calendar, 
  Clock, 
  BookOpen, 
  CreditCard, 
  Bell, 
  User, 
  CheckCircle2, 
  FileText,
  Award,
  ChevronRight,
  TrendingUp,
  Download,
  Plus,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

const sidebarItems = [
  { name: "Overview", href: "/student/dashboard", icon: BarChart3 },
  { name: "My Profile", href: "/student/profile", icon: User },
  { name: "Attendance", href: "/student/attendance", icon: Calendar },
  { name: "Fee Status", href: "/student/fees", icon: CreditCard },
  { name: "Results", href: "/student/results", icon: CheckCircle2 },
  { name: "Notices", href: "/student/notices", icon: Bell },
  { name: "Timetable", href: "/student/timetable", icon: Clock },
  { name: "Homework", href: "/student/homework", icon: BookOpen },
];

import { useLanguage } from "@/context/LanguageContext";

export default function StudentDashboard() {
  const { t, isUrdu } = useLanguage();

  const sidebarItems = [
    { name: t("side.dashboard"), href: "/student/dashboard", icon: BarChart3 },
    { name: t("side.profile"), href: "/student/profile", icon: User },
    { name: t("side.attendance"), href: "/student/attendance", icon: Calendar },
    { name: t("side.fees"), href: "/student/fees", icon: CreditCard },
    { name: t("side.results"), href: "/student/results", icon: CheckCircle2 },
    { name: t("side.notice"), href: "/student/notices", icon: Bell },
    { name: t("side.timetable"), href: "/student/timetable", icon: Clock },
    { name: t("side.homework"), href: "/student/homework", icon: BookOpen },
  ];

  return (
    <DashboardLayout 
      role="student" 
      sidebarItems={sidebarItems}
      userProfile={{ name: isUrdu ? "مصطفی احمد" : "Mustafa Ahmed", roleName: isUrdu ? "طالب علم" : "Student", avatar: "" }}
    >
      <div className={`max-w-[1440px] mx-auto px-4 md:px-10 space-y-12 pb-20 relative ${isUrdu ? "text-right" : "text-left"}`}>
        
        {/* Welcome Section */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-8 bg-white p-8 md:p-12 rounded-4xl shadow-soft border border-beige/10 overflow-hidden relative group ${isUrdu ? "md:flex-row-reverse" : ""}`}>
           <div className={`absolute top-0 ${isUrdu ? "left-0" : "right-0"} w-64 h-64 bg-accent/5 rounded-full ${isUrdu ? "-ml-32" : "-mr-32"} -mt-32 blur-3xl group-hover:bg-accent/10 transition-colors duration-700`}></div>
           <div className="space-y-4 relative z-10 w-full md:w-auto">
              <div className={`flex items-center gap-3 ${isUrdu ? "flex-row-reverse" : "flex-row"}`}>
                <span className="w-12 h-px bg-accent"></span>
                <span className={`text-accent font-sans font-bold tracking-[0.3em] uppercase text-[10px] ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>
                  {isUrdu ? "اسٹوڈنٹ پورٹل" : "Student Dashboard"}
                </span>
              </div>
              <h2 className={`text-4xl md:text-6xl font-serif font-bold text-primary leading-tight ${isUrdu ? "font-urdu text-5xl md:text-7xl" : ""}`}>
                {isUrdu ? "السلام علیکم، مصطفی" : "Salaam, Mustafa"} 👋
              </h2>
              <p className={`text-primary/60 font-sans font-semibold text-sm tracking-widest uppercase flex items-center gap-3 ${isUrdu ? "font-urdu tracking-normal text-lg flex-row-reverse" : ""}`}>
                {isUrdu ? "رول نمبر" : "Roll No"}: #MN-2026-084 <span className="text-accent/30 font-light">|</span> {isUrdu ? "حفظ القرآن (لیول 2)" : "Hifz-ul-Quran (Level 2)"}
              </p>
           </div>
           <div className="flex flex-wrap gap-4 relative z-10 w-full md:w-auto justify-start md:justify-end">
              <Link href="/student/id-card" className={`flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:bg-primary-dark hover:-translate-y-1 active:scale-95 transition-all group/btn ${isUrdu ? "font-urdu text-base" : ""}`}>
                <Download className={`w-4 h-4 text-accent group-hover/btn:scale-110 transition-transform ${isUrdu ? "order-1" : ""}`} />
                <span>{isUrdu ? "شناختی کارڈ" : "ID Card View"}</span>
              </Link>
              <Link href="/student/report-card" className={`flex items-center gap-3 bg-white border-2 border-primary/5 text-primary px-8 py-4 rounded-2xl font-bold shadow-sm hover:bg-cream hover:border-accent/20 hover:-translate-y-1 transition-all group/btn ${isUrdu ? "font-urdu text-base" : ""}`}>
                <FileText className={`w-4 h-4 text-accent group-hover/btn:scale-110 transition-transform ${isUrdu ? "order-1" : ""}`} />
                <span>{isUrdu ? "رزلٹ کارڈ" : "Report Card"}</span>
              </Link>
           </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { label: isUrdu ? "حاضری %" : "Attendance %", value: isUrdu ? "۹۴.۵%" : "94.5%", icon: Calendar, color: "bg-primary text-white", sub: isUrdu ? "ماہانہ اوسط" : "Monthly average", accent: "text-accent", trend: isUrdu ? "بہترین" : "+2.4%" },
             { label: isUrdu ? "باقی فیس" : "Pending Fees", value: isUrdu ? "۴۵.۰۰$" : "$45.00", icon: CreditCard, color: "bg-white border-2 border-beige/10 shadow-soft", sub: isUrdu ? "۵ اپریل تک" : "Due by April 5", accent: "text-accent", trend: isUrdu ? "بر وقت" : "On Time" },
             { label: isUrdu ? "موجودہ کورس" : "Current Course", value: isUrdu ? "حفظ قرآن" : "Hifz Quran", icon: BookOpen, color: "bg-white border-2 border-beige/10 shadow-soft", sub: isUrdu ? "لیول ۲ / پارہ ۱۴" : "Level 2 / Juz 14", accent: "text-primary", trend: isUrdu ? "لیول ۲" : "Level 2" },
             { label: isUrdu ? "تازہ نوٹس" : "Latest Notice", value: isUrdu ? "امتحان ۲۰ مئی" : "Exam May 20", icon: Bell, color: "bg-white border-2 border-beige/10 shadow-soft", sub: isUrdu ? "سالانہ شیڈول" : "Annual Schedule", accent: "text-accent", trend: isUrdu ? "اہم" : "Important" }
           ].map((stat, i) => (
             <div key={i} className={`p-8 rounded-4xl space-y-8 flex flex-col justify-between group cursor-default transition-all hover:shadow-2xl hover:-translate-y-2 ${stat.color}`}>
                <div className={`flex justify-between items-center ${isUrdu ? "flex-row-reverse" : "flex-row"}`}>
                   <div className={`w-14 h-14 ${i === 0 ? 'bg-white/10' : 'bg-primary/5'} rounded-2xl flex items-center justify-center transition-all group-hover:scale-110`}>
                      <stat.icon className={`w-6 h-6 ${stat.accent}`} />
                   </div>
                   <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${i === 0 ? 'bg-white/20 text-white' : 'bg-accent/10 text-accent'} ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>
                     {stat.trend}
                   </span>
                </div>
                <div className="space-y-2">
                  <p className={`text-4xl md:text-5xl font-serif font-bold tracking-tight leading-none group-hover:text-accent transition-colors ${isUrdu ? "font-urdu" : ""}`}>{stat.value}</p>
                  <p className={`text-[11px] font-sans font-bold uppercase tracking-[0.2em] leading-none ${i === 0 ? 'text-white/60' : 'text-primary/40'} ${isUrdu ? "font-urdu tracking-normal text-sm" : ""}`}>{stat.label}</p>
                </div>
                <div className={`pt-6 border-t ${i === 0 ? 'border-white/10' : 'border-primary/5'} flex items-center justify-between ${isUrdu ? "flex-row-reverse" : "flex-row"}`}>
                   <span className={`text-xs font-medium italic ${i === 0 ? 'text-white/40' : 'text-primary/30'} ${isUrdu ? "text-sm" : ""}`}>{stat.sub}</span>
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all ${i === 0 ? 'bg-white/10' : 'bg-primary/5'} ${isUrdu ? "rotate-180" : ""}`}>
                    <ChevronRight className="w-4 h-4" />
                   </div>
                </div>
             </div>
           ))}
        </div>

        <div className={`grid grid-cols-1 xl:grid-cols-12 gap-12 pt-8 ${isUrdu ? "rtl" : ""}`}>
           {/* Timetable Section */}
           <div className="xl:col-span-7 space-y-8">
              <div className={`flex justify-between items-center pb-6 border-b-2 border-primary/5 ${isUrdu ? "flex-row-reverse" : ""}`}>
                 <div className="space-y-1">
                    <h4 className={`text-3xl md:text-4xl font-serif font-bold text-primary ${isUrdu ? "font-urdu" : ""}`}>
                      {isUrdu ? "کلاس ٹائم ٹیبل" : "Class Timetable"}
                    </h4>
                    <p className={`text-xs font-sans font-semibold text-primary/40 uppercase tracking-widest ${isUrdu ? "font-urdu tracking-normal text-sm" : ""}`}>
                      {isUrdu ? "آج کا شیڈول / پیر" : "Today's Schedule / Monday"}
                    </p>
                 </div>
                 <Link href="#" className={`flex items-center gap-2 text-[10px] font-black text-accent uppercase tracking-widest px-4 py-2 bg-accent/10 rounded-full hover:bg-accent hover:text-white transition-all group ${isUrdu ? "font-urdu tracking-normal text-xs flex-row-reverse" : ""}`}>
                    <Download className="w-3.5 h-3.5" />
                    {isUrdu ? "ڈاؤن لوڈ" : "Download PDF"}
                 </Link>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                 {[
                   { period: isUrdu ? "۱" : "1", name: isUrdu ? "تجوید و قرأت" : "Tajweed & Recitation", teacher: isUrdu ? "مولانا احمد" : "Maulana Ahmed", time: isUrdu ? "۰۸:۰۰ - ۱۰:۰۰ بجے صبح" : "08:00 AM - 10:00 AM", status: isUrdu ? "آئندہ" : "Upcoming", color: "bg-white" },
                   { period: isUrdu ? "۲" : "2", name: isUrdu ? "اردو گرامر" : "Urdu Grammar", teacher: isUrdu ? "استاد سلیم" : "Ustad Saleem", time: isUrdu ? "۱۰:۳۰ - ۱۲:۳۰ بجے دوپہر" : "10:30 AM - 12:30 PM", status: isUrdu ? "جاری ہے" : "Ongoing", color: "bg-white" },
                   { period: isUrdu ? "۳" : "3", name: isUrdu ? "اسلامی تاریخ" : "Islamic History", teacher: isUrdu ? "حافظ بلال" : "Hafiz Bilal", time: isUrdu ? "۰۲:۰۰ - ۰۴:۰۰ بجے شام" : "02:00 PM - 04:00 PM", status: isUrdu ? "اگلا" : "Next", color: "bg-white" }
                 ].map((cl, idx) => (
                    <div key={idx} className={`p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8 group hover:shadow-soft transition-all border border-beige/10 ${cl.color} ${isUrdu ? "md:flex-row-reverse" : ""}`}>
                       <div className={`flex items-center gap-8 w-full md:w-auto ${isUrdu ? "flex-row-reverse" : ""}`}>
                          <div className={`w-16 h-16 ${cl.status === (isUrdu ? "جاری ہے" : "Ongoing") ? 'bg-accent shadow-lg shadow-accent/20' : 'bg-primary/5'} rounded-2xl flex flex-col items-center justify-center font-bold transition-all group-hover:scale-105`}>
                             <span className={`text-[9px] uppercase leading-none ${cl.status === (isUrdu ? "جاری ہے" : "Ongoing") ? 'text-white/60' : 'text-primary/30'} pb-1 ${isUrdu ? "font-urdu text-[10px]" : ""}`}>
                               {isUrdu ? "گھنٹہ" : "Period"}
                             </span>
                             <span className={`text-2xl font-serif font-black leading-none ${cl.status === (isUrdu ? "جاری ہے" : "Ongoing") ? 'text-white' : 'text-primary'}`}>{cl.period}</span>
                          </div>
                          <div className={`space-y-1 ${isUrdu ? "text-right" : "text-left"}`}>
                             <h5 className={`text-xl font-serif font-black text-primary leading-tight group-hover:text-accent transition-colors ${isUrdu ? "font-urdu text-2xl" : ""}`}>{cl.name}</h5>
                             <p className={`text-xs font-sans font-bold text-primary/30 flex items-center gap-2 uppercase tracking-widest ${isUrdu ? "font-urdu tracking-normal text-sm flex-row-reverse" : ""}`}>
                                <User className="w-3.5 h-3.5 text-accent/50" /> {cl.teacher}
                             </p>
                          </div>
                       </div>
                       
                       <div className={`flex items-center justify-between w-full md:w-auto gap-8 px-8 border-t md:border-t-0 ${isUrdu ? "md:border-r" : "md:border-l"} border-primary/5 md:ml-auto rtl:md:mr-auto rtl:md:ml-0 pt-6 md:pt-0 ${isUrdu ? "flex-row-reverse" : ""}`}>
                          <div className={`space-y-1 ${isUrdu ? "text-right" : "text-left"}`}>
                             <p className={`text-[10px] font-sans font-black text-primary/20 leading-none uppercase tracking-widest ${isUrdu ? "font-urdu tracking-normal" : ""}`}>
                               {isUrdu ? "وقت" : "Session Time"}
                             </p>
                             <p className={`text-sm font-sans font-bold text-primary flex items-center gap-2 mt-1 ${isUrdu ? "flex-row-reverse" : ""}`}>
                                <Clock className="w-4 h-4 text-accent/60" /> {cl.time}
                             </p>
                          </div>
                          <div className="flex flex-col items-end">
                             <span className={`text-[9px] uppercase font-bold tracking-widest px-4 py-2 rounded-full border shadow-sm transition-all ${isUrdu ? "font-urdu tracking-normal text-[10px]" : ""} ${
                                cl.status === (isUrdu ? "جاری ہے" : "Ongoing") 
                                ? "bg-accent/10 border-accent/20 text-accent animate-pulse" 
                                : "bg-primary/5 border-primary/5 text-primary/40 group-hover:text-primary group-hover:border-primary/10"
                             }`}>
                               {cl.status}
                             </span>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Alerts & News Section */}
           <div className="xl:col-span-5 space-y-8">
              <div className={`flex justify-between items-center pb-6 border-b-2 border-primary/5 ${isUrdu ? "flex-row-reverse" : ""}`}>
                 <div className="space-y-1">
                    <h4 className={`text-3xl md:text-4xl font-serif font-bold text-primary ${isUrdu ? "font-urdu" : ""}`}>
                       {isUrdu ? "تعلیمی اطلاعات" : "Student Alerts"}
                    </h4>
                    <p className={`text-xs font-sans font-semibold text-primary/40 uppercase tracking-widest ${isUrdu ? "font-urdu tracking-normal text-sm" : ""}`}>
                       {isUrdu ? "اہم نوٹس" : "Important Notices"}
                    </p>
                 </div>
                 <button className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary/30 hover:bg-primary hover:text-white transition-all"><ExternalLink className="w-4 h-4" /></button>
              </div>

              <div className="grid grid-cols-1 gap-6">
                 {[
                   { title: isUrdu ? "ماہانہ جائزہ" : "Monthly Assessment", details: isUrdu ? "لیول ۲ کے امتحانات اگلے ہفتے شروع ہو رہے ہیں۔ تیاری شروع کریں۔" : "Exam for Level 2 starting next week. Preparation is key for better grades.", cat: isUrdu ? "تعلیمی" : "Academic", time: isUrdu ? "۲ گھنٹے پہلے" : "2h ago", color: "bg-primary" },
                   { title: isUrdu ? "داخلہ فیس کی آخری تاریخ" : "Admission Fee Last Date", details: isUrdu ? "یاد دہانی: فیس کی ادائیگی کی آخری تاریخ کل ہے۔" : "A gentle reminder that the last date for payment is tomorrow.", cat: isUrdu ? "ادائیگی" : "Payment", time: isUrdu ? "۱ دن پہلے" : "1d ago", color: "bg-accent" },
                 ].map((alert, a) => (
                    <div key={a} className={`p-8 bg-white border border-beige/10 rounded-4xl shadow-sm hover:shadow-soft transition-all group flex items-start gap-6 cursor-pointer relative overflow-hidden ${isUrdu ? "flex-row-reverse text-right" : ""}`}>
                       <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500">
                          <Bell className="w-6 h-6 text-primary group-hover:text-white transition-all" />
                       </div>
                       <div className="flex-1 space-y-3">
                          <div className={`flex items-center justify-between ${isUrdu ? "flex-row-reverse" : ""}`}>
                             <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${a === 1 ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'} ${isUrdu ? "font-urdu tracking-normal text-[10px]" : ""}`}>{alert.cat}</span>
                             <span className={`text-[10px] font-bold text-primary/30 flex items-center gap-1.5 ${isUrdu ? "flex-row-reverse" : ""}`}><Clock className="w-3 h-3" /> {alert.time}</span>
                          </div>
                          <h5 className={`text-lg font-serif font-bold text-primary leading-tight group-hover:text-accent transition-colors ${isUrdu ? "font-urdu text-xl" : ""}`}>{alert.title}</h5>
                          <p className={`text-xs text-primary/50 font-medium leading-relaxed line-clamp-2 italic ${isUrdu ? "text-sm" : ""}`}>"{alert.details}"</p>
                       </div>
                    </div>
                 ))}
              </div>

              {/* Achievement Card */}
              <div className="bg-primary p-10 rounded-4xl text-white relative overflow-hidden group">
                 <div className={`absolute top-0 ${isUrdu ? "left-0" : "right-0"} p-8 transform ${isUrdu ? "-translate-x-8" : "translate-x-8"} -translate-y-8 opacity-10 group-hover:scale-110 transition-all duration-1000`}>
                    <Award className="w-48 h-48" />
                 </div>
                 <div className="relative z-10 space-y-6">
                    <div className={`flex items-center gap-3 ${isUrdu ? "flex-row-reverse" : ""}`}>
                       <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                          <Award className="w-5 h-5 text-accent" />
                       </div>
                       <span className={`text-accent text-[10px] font-bold uppercase tracking-[0.3em] ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>
                         {isUrdu ? "اعزاز" : "Recognition"}
                       </span>
                    </div>
                    <div className={`space-y-4 ${isUrdu ? "text-right" : "text-left"}`}>
                       <h5 className={`text-2xl font-serif font-bold italic leading-tight ${isUrdu ? "font-urdu text-3xl" : ""}`}>
                         {isUrdu ? "ماہانہ بہترین طالب علم کا امیدوار" : "Student of the Month Candidate"}
                       </h5>
                       <p className={`text-sm text-white/60 font-medium leading-relaxed ${isUrdu ? "text-lg" : ""}`}>
                         {isUrdu 
                           ? "مصطفی احمد نے اس ماہ تجوید میں نمایاں ترقی دکھائی ہے۔ کامیابی قریب ہے!"
                           : "Mustafa Ahmed has shown remarkable progress in Juz 14 Tajweed this month. Excellence is within reach!"}
                       </p>
                    </div>
                    <button className={`flex items-center gap-3 py-4 px-8 bg-accent text-white hover:bg-white hover:text-primary transition-all rounded-2xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-accent/20 ${isUrdu ? "font-urdu tracking-normal text-sm ml-auto mr-0 flex-row-reverse" : ""}`}>
                       {isUrdu ? "کارکردگی کی تفصیلات دیکھیں" : "View Performance Details"}
                       <ArrowRight className={`w-4 h-4 ${isUrdu ? "rotate-180" : ""}`} />
                    </button>
                 </div>
              </div>
           </div>
        </div>

        {/* Floating Action Button */}
        <button className={`fixed bottom-12 ${isUrdu ? "left-12" : "right-12"} w-16 h-16 bg-accent text-white rounded-2xl shadow-2xl shadow-accent/40 flex items-center justify-center hover:scale-110 hover:-rotate-12 transition-all active:scale-95 group z-50`}>
           <Plus className="w-8 h-8 group-hover:scale-110 transition-transform" />
           <div className={`absolute ${isUrdu ? "left-full ml-4" : "right-full mr-4"} px-4 py-2 bg-primary text-white text-[10px] uppercase font-bold tracking-widest rounded-xl opacity-0 group-hover:opacity-100 ${isUrdu ? "-translate-x-4 group-hover:translate-x-0" : "translate-x-4 group-hover:translate-x-0"} transition-all pointer-events-none whitespace-nowrap shadow-xl ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>
             {isUrdu ? "فوری کام" : "Quick Actions"}
           </div>
        </button>

      </div>
    </DashboardLayout>
  );
}


