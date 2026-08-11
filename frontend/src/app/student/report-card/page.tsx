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
  PenTool,
  Verified
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

export default function ReportCardPage() {
  const marks = [
    { subject: "Hifz Quran (Memorization)", obtained: "95", total: "100", grade: "A+", weight: "40%" },
    { subject: "Tajweed-ul-Quran (Phonetics)", obtained: "92", total: "100", grade: "A+", weight: "20%" },
    { subject: "Arabic Language (Grammar/Vocab)", obtained: "88", total: "100", grade: "A", weight: "15%" },
    { subject: "Urdu Literature", obtained: "90", total: "100", grade: "A+", weight: "15%" },
    { subject: "Islamic Studies (Fiqh/Seerah)", obtained: "94", total: "100", grade: "A+", weight: "10%" },
  ];

  return (
    <DashboardLayout 
      role="student" 
      sidebarItems={sidebarItems}
      userProfile={{ name: "Mustafa Ahmed", roleName: "Student", avatar: "" }}
    >
      <div className="max-w-360 mx-auto px-4 md:px-10 space-y-12 pb-20 relative">
        
        {/* Header Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b-2 border-primary/5">
           <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-px bg-accent"></span>
                <span className="text-accent font-sans font-bold tracking-[0.3em] uppercase text-[10px]">Academic Certification</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">Official Report Card</h2>
              <p className="text-primary/40 font-sans font-semibold text-sm tracking-widest uppercase">Academic Session 2025-2026 / Term 1</p>
           </div>
           <div className="flex gap-4">
              <button className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:bg-primary-dark hover:-translate-y-1 transition-all group">
                 <Printer className="w-4 h-4 text-accent transition-transform group-hover:scale-110" />
                 Print Report
              </button>
              <button className="flex items-center gap-3 bg-white border-2 border-primary/5 text-primary px-8 py-4 rounded-2xl font-bold shadow-sm hover:bg-cream hover:border-accent/20 transition-all group">
                 <Download className="w-4 h-4 text-accent transition-transform group-hover:scale-110" />
                 PDF Download
              </button>
           </div>
        </div>

        {/* Report Card Page Display */}
        <div className="bg-white border-4 border-primary/5 rounded-4xl shadow-2xl p-6 md:p-2 relative overflow-hidden group">
           
           {/* Inner Certificate Style Container */}
           <div className="border-2 border-beige/10 rounded-3xl p-10 md:p-16 space-y-16 relative z-10 bg-white shadow-inner">
              
              {/* Report Header Branding */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-10 pb-12 border-b-2 border-primary/5">
                 <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-primary-dark rounded-3xl flex items-center justify-center p-4 shadow-xl shadow-primary/20 transform hover:rotate-6 transition-transform">
                       <BookOpen className="w-full h-full text-accent" />
                    </div>
                    <div className="space-y-1">
                       <h1 className="text-3xl font-serif font-black text-primary-dark leading-none tracking-tight uppercase">Al-Umaima Madrasa</h1>
                       <p className="text-[10px] font-black text-accent uppercase tracking-[0.4em] decoration-accent/20 underline underline-offset-8">Certificate of Excellence</p>
                       <p className="text-[9px] text-primary/40 font-bold uppercase tracking-widest pt-2">Reg ID: NOOR-UP-88-2026</p>
                    </div>
                 </div>
                 <div className="text-center md:text-right space-y-2">
                    <h2 className="text-4xl font-serif font-black text-primary Leading-tight italic">Terminal Examination Report</h2>
                    <p className="text-[10px] font-black text-primary/30 uppercase tracking-[0.3em]">Issue Date: March 30, 2026</p>
                 </div>
              </div>

              {/* Student Identification Section */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 bg-cream/30 p-10 rounded-4xl border border-primary/5 shadow-sm">
                 <div className="md:col-span-8 flex items-center gap-8">
                    <div className="w-32 h-32 rounded-3xl bg-white p-1 shadow-lg border border-primary/5 hidden sm:flex items-center justify-center font-serif text-4xl font-black text-primary">M</div>
                    <div className="space-y-4">
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-primary/20 uppercase tracking-widest leading-none">Student Official Name</p>
                          <h3 className="text-4xl font-serif font-black text-primary group-hover:text-accent transition-colors tracking-tight">Mustafa Ahmed</h3>
                       </div>
                       <div className="flex flex-wrap gap-10">
                          <div className="space-y-1">
                             <p className="text-[9px] text-primary/40 font-black uppercase tracking-widest leading-none">Roll Number</p>
                             <p className="text-sm font-black text-primary">#MN-2026-084</p>
                          </div>
                          <div className="space-y-1">
                             <p className="text-[9px] text-primary/40 font-black uppercase tracking-widest leading-none">Course Level</p>
                             <p className="text-sm font-black text-primary italic">Hifz-ul-Quran (L2)</p>
                          </div>
                          <div className="space-y-1">
                             <p className="text-[9px] text-primary/40 font-black uppercase tracking-widest leading-none">Attendance %</p>
                             <p className="text-sm font-black text-primary">94.5% (High)</p>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="md:col-span-4 flex items-center justify-center md:justify-end">
                    <Verified className="w-24 h-24 text-accent/20" />
                 </div>
              </div>

              {/* Marks Evaluation Table */}
              <div className="space-y-8">
                 <div className="flex justify-between items-end pb-4 border-b border-primary/5 px-2">
                    <h4 className="text-2xl font-serif font-black text-primary italic">Subject-wise Evaluation (Term 1)</h4>
                    <span className="text-[10px] font-bold text-primary/20 uppercase tracking-widest">Weightage Integrated</span>
                 </div>
                 
                 <div className="bg-white rounded-4xl border border-primary/5 shadow-soft overflow-hidden">
                    <table className="w-full text-left border-collapse">
                       <thead className="bg-primary/5 text-[10px] font-black uppercase tracking-widest text-primary/40 border-b border-primary/5">
                          <tr>
                             <th className="px-10 py-6">Course / Subject Description</th>
                             <th className="px-10 py-6 text-center">Marks Obtained</th>
                             <th className="px-10 py-6 text-center">Standard Max</th>
                             <th className="px-10 py-6 text-center">Grade</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-primary/5">
                          {marks.map((row, idx) => (
                             <tr key={idx} className="group hover:bg-cream/20 transition-all">
                                <td className="px-10 py-8">
                                   <div className="space-y-1">
                                      <p className="text-lg font-serif font-black text-primary group-hover:text-accent transition-colors">{row.subject}</p>
                                      <p className="text-[10px] font-black text-primary/20 uppercase tracking-widest">Global Std / Weight: {row.weight}</p>
                                   </div>
                                </td>
                                <td className="px-10 py-8 text-center text-xl font-serif font-black text-primary">{row.obtained}</td>
                                <td className="px-10 py-8 text-center text-md font-sans font-bold text-primary/30">{row.total}</td>
                                <td className="px-10 py-8 text-center">
                                   <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-xl border-2 shadow-sm ${
                                      row.grade === "A+" ? "bg-primary text-white border-primary shadow-primary/20" : "bg-white border-primary/10 text-primary"
                                   }`}>
                                      {row.grade}
                                   </span>
                                </td>
                             </tr>
                          ))}
                       </tbody>
                       <tfoot className="bg-primary-dark text-white border-t-2 border-accent">
                          <tr>
                             <td className="px-10 py-10 font-serif font-black text-2xl group cursor-default">Total Evaluation Summary</td>
                             <td className="px-10 py-10 text-center text-3xl font-serif font-black text-accent">459 / 500</td>
                             <td className="px-10 py-10 text-center text-lg font-black text-white/30 uppercase tracking-widest">Aggregate</td>
                             <td className="px-10 py-10 text-center">
                                <div className="flex flex-col items-center">
                                   <span className="text-3xl font-serif font-black text-white">A+</span>
                                   <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent/60">Excellent</span>
                                </div>
                             </td>
                          </tr>
                       </tfoot>
                    </table>
                 </div>
              </div>

              {/* Remarks & Signatures Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12">
                 <div className="space-y-6">
                    <h5 className="text-xl font-serif font-black text-primary-dark italic border-b border-primary/5 pb-4">Teacher's Confidential Remarks</h5>
                    <p className="text-md text-primary/60 font-medium leading-relaxed italic font-serif">
                       "Mustafa has displayed exceptional focus in Juz 14 memorization. His tajweed accuracy has improved significantly this term. He is a diligent student who sets a fine example for his peers."
                    </p>
                    <div className="pt-8 flex items-end gap-6 group">
                       <div className="flex flex-col items-start space-y-4">
                          <div className="w-48 h-px bg-primary/20 group-hover:bg-accent group-hover:w-64 transition-all duration-700"></div>
                          <p className="text-[10px] font-black text-primary/20 uppercase tracking-[0.3em] font-serif">Class Teacher Signature</p>
                       </div>
                       <PenTool className="w-5 h-5 text-accent/30 group-hover:text-accent transition-colors" />
                    </div>
                 </div>
                 <div className="flex flex-col items-center md:items-end justify-center space-y-12">
                    <div className="w-40 h-40 border-4 border-dotted border-primary/10 rounded-full flex flex-col items-center justify-center p-8 text-center group cursor-default hover:border-accent hover:rotate-6 transition-all duration-700">
                       <p className="text-[8px] font-black text-primary/20 uppercase tracking-[0.5em] pb-2">Institutional</p>
                       <ShieldCheck className="w-8 h-8 text-primary/20 group-hover:text-accent transition-all" />
                       <p className="text-[11px] font-black text-primary-dark pt-2 leading-none">MADRASA SEAL</p>
                    </div>
                    <div className="flex flex-col items-center md:items-end space-y-4 group">
                       <div className="w-64 h-px bg-primary-dark/40 group-hover:bg-accent group-hover:w-80 transition-all duration-700"></div>
                       <p className="text-[11px] font-black text-primary-dark uppercase tracking-[0.4em] font-serif pr-4">Principal's Seal & Sign</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Decorative Background Accents */}
           <div className="absolute bottom-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
              <Award className="w-96 h-96" />
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}


