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
  ExternalLink,
  ShieldCheck,
  Printer,
  QrCode,
  PenTool
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

export default function IdCardPage() {
  const studentInfo = {
    name: "Mustafa Ahmed",
    rollNumber: "#MN-2026-084",
    course: "Hifz-ul-Quran (Level 2)",
    validity: "March 2027",
    contact: "+91 98765 43210",
  };

  return (
    <DashboardLayout 
      role="student" 
      sidebarItems={sidebarItems}
      userProfile={{ name: studentInfo.name, roleName: "Student", avatar: "" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 space-y-12 pb-20 relative">
        
        {/* Header Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b-2 border-primary/5">
           <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-px bg-accent"></span>
                <span className="text-accent font-sans font-bold tracking-[0.3em] uppercase text-[10px]">Institutional Identity</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">Student ID Card</h2>
              <p className="text-primary/40 font-sans font-semibold text-sm tracking-widest uppercase">Official Verification Document</p>
           </div>
           <div className="flex gap-4">
              <button className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:bg-primary-dark hover:-translate-y-1 transition-all group">
                 <Printer className="w-4 h-4 text-accent transition-transform group-hover:scale-110" />
                 Print ID Card
              </button>
              <button className="flex items-center gap-3 bg-white border-2 border-primary/5 text-primary px-8 py-4 rounded-2xl font-bold shadow-sm hover:bg-cream hover:border-accent/20 transition-all group">
                 <Download className="w-4 h-4 text-accent transition-transform group-hover:scale-110" />
                 Download PDF
              </button>
           </div>
        </div>

        {/* ID Card Display Area */}
        <div className="flex justify-center items-center py-12 bg-primary/2 rounded-3xl border border-primary/5 shadow-inner">
           
           {/* The Identity Card */}
           <div className="relative w-full max-w-[420px] aspect-[1.6/1] md:aspect-[0.63/1] bg-primary-dark rounded-4xl shadow-2xl overflow-hidden flex flex-col group hover:shadow-[0_40px_80px_-20px_rgba(6,78,59,0.4)] transition-all duration-700">
              {/* Gold Pattern Overlay (Top Section) */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-5 -mr-32 -mt-32 rounded-full blur-3xl pointer-events-none group-hover:opacity-10 transition-all duration-1000"></div>
              
              {/* Header Branding */}
              <div className="p-10 flex justify-between items-start border-b border-white/5 relative z-10">
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center p-2.5 shadow-lg shadow-accent/20 transition-transform group-hover:rotate-12">
                       <BookOpen className="w-full h-full text-primary-dark" />
                    </div>
                    <div className="space-y-0.5">
                       <p className="text-xl font-serif font-black text-white leading-none tracking-tight">AL-UMAIMA MADRASA</p>
                       <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em] opacity-80 decoration-accent/20 underline underline-offset-4">Identity Card</p>
                    </div>
                 </div>
                 <ShieldCheck className="w-8 h-8 text-accent/30" />
              </div>

              {/* Student Content Grid */}
              <div className="flex-1 p-10 space-y-10 relative z-10 text-white">
                 <div className="flex flex-col items-center gap-8">
                    {/* Student Photo */}
                    <div className="relative group/photo">
                       <div className="w-40 h-40 rounded-4xl bg-white/10 p-1.5 border border-white/10 shadow-2xl relative z-10 overflow-hidden transform group-hover/photo:scale-105 transition-all">
                          <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center font-serif text-6xl text-primary font-black relative group-hover/photo:rotate-1 transition-transform">
                             {studentInfo.name.charAt(0)}
                             <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent"></div>
                          </div>
                       </div>
                       {/* Background aura for photo */}
                       <div className="absolute inset-0 bg-accent/20 rounded-full blur-[4rem] opacity-30 transform group-hover/photo:scale-150 transition-all duration-1000"></div>
                    </div>

                    {/* Student Details */}
                    <div className="text-center space-y-6">
                       <div className="space-y-2">
                          <h3 className="text-4xl font-serif font-black text-white group-hover:text-accent transition-colors tracking-tight">{studentInfo.name}</h3>
                          <p className="text-sm font-black text-accent uppercase tracking-[0.3em] opacity-80 underline underline-offset-8 decoration-accent/30">{studentInfo.rollNumber}</p>
                       </div>
                       
                       <div className="pt-2">
                          <p className="text-xs font-bold text-white/40 uppercase tracking-widest">{studentInfo.course}</p>
                       </div>
                    </div>
                 </div>

                 {/* Information Table */}
                 <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
                    <div className="space-y-1.5 text-center md:text-left">
                       <p className="text-[10px] text-white/20 font-black uppercase tracking-widest leading-none">Valid Until</p>
                       <p className="text-sm font-black text-white italic">{studentInfo.validity}</p>
                    </div>
                    <div className="space-y-1.5 text-center md:text-right">
                       <p className="text-[10px] text-white/20 font-black uppercase tracking-widest leading-none">Emergency Contact</p>
                       <p className="text-sm font-black text-white">{studentInfo.contact}</p>
                    </div>
                 </div>

                 {/* QR & Signature */}
                 <div className="flex justify-between items-end pt-4 pb-2">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all overflow-hidden relative shadow-lg shadow-black/20">
                       <QrCode className="w-10 h-10 text-white/20" />
                       <div className="absolute bottom-1 right-1 w-2 h-2 bg-accent rounded-full border border-primary-dark"></div>
                    </div>
                    <div className="text-right space-y-3">
                       <div className="w-32 h-px bg-white/20 rounded-full group-hover:bg-accent transition-all"></div>
                       <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] flex items-center justify-end gap-2 pr-2">
                          Principal Signature
                          <PenTool className="w-2.5 h-2.5" />
                       </p>
                    </div>
                 </div>
              </div>

              {/* ID Card Footer Bar */}
              <div className="p-4 bg-accent/90 text-primary-dark flex items-center justify-center gap-3 relative z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
                 <ShieldCheck className="w-4 h-4" />
                 <span className="text-[9px] font-black uppercase tracking-[0.5em] font-serif">Verified Student Identity Card</span>
              </div>
           </div>

        </div>

        {/* Small Action Bar Overlay/Utility */}
        <div className="max-w-2xl mx-auto p-10 bg-white border border-beige/10 rounded-4xl shadow-soft flex items-center justify-center gap-12 group">
           <button className="flex flex-col items-center gap-2 group/action scale-95 hover:scale-110 transition-all">
              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary/30 group-hover/action:bg-primary group-hover/action:text-white transition-all">
                 <Download className="w-5 h-5 text-accent" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-primary/30 group-hover/action:text-primary transition-all">Save PDF</span>
           </button>
           <div className="w-px h-10 bg-primary/5"></div>
           <button className="flex flex-col items-center gap-2 group/action scale-95 hover:scale-110 transition-all">
              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary/30 group-hover/action:bg-primary group-hover/action:text-white transition-all">
                 <Printer className="w-5 h-5 text-accent" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-primary/30 group-hover/action:text-primary transition-all">Print Job</span>
           </button>
           <div className="w-px h-10 bg-primary/5"></div>
           <button className="flex flex-col items-center gap-2 group/action scale-95 hover:scale-110 transition-all">
              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary/30 group-hover/action:bg-primary group-hover/action:text-white transition-all">
                 <ExternalLink className="w-5 h-5 text-accent" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-primary/30 group-hover/action:text-primary transition-all">Share Link</span>
           </button>
        </div>

      </div>
    </DashboardLayout>
  );
}


