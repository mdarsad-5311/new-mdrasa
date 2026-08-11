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
  Target,
  Trophy,
  History,
  Star
} from "lucide-react";
import Link from "next/link";

import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";
import { api } from "@/lib/api";

export default function ResultsPage() {
  const { user } = useAuth();
  const [results, setResults] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await api.get("/results/my-results");
        setResults(data.scores || []);
        setStats(data.summary || {
          latest: "92%",
          grade: "A+",
          rank: "3rd",
          progress: "Juz 14"
        });
      } catch (err) {
        console.error("Results fetch error", err);
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchResults();
  }, [user]);

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

  return (
    <DashboardLayout 
      role="student" 
      sidebarItems={sidebarItems}
      userProfile={{ name: user?.name || "Student", roleName: "Student", avatar: "" }}
    >
      <div className="max-w-360 mx-auto px-4 md:px-10 space-y-12 pb-20 relative">
      {loading ? (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
        {/* Page Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b-2 border-primary/5">
           <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-px bg-accent"></span>
                <span className="text-accent font-sans font-bold tracking-[0.3em] uppercase text-[10px]">Academic Progress</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary leading-tight">Academic Results</h2>
              <p className="text-primary/40 font-sans font-semibold text-sm tracking-widest uppercase">Monthly Assessment / March 2026</p>
           </div>
           <div className="flex gap-4">
              <button className="flex items-center gap-3 bg-white border-2 border-primary/5 text-primary px-8 py-4 rounded-2xl font-bold shadow-sm hover:bg-cream hover:border-accent/20 transition-all group">
                <Download className="w-4 h-4 text-accent" />
                Report Card PDF
              </button>
           </div>
        </div>

        {/* Top Result Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { label: "Latest Exam Score", value: stats?.latest || "0%", icon: Target, color: "bg-primary text-white", sub: "Month: March", trend: "+2.4%" },
             { label: "Overall Performance", value: stats?.grade || "N/A", icon: Award, color: "bg-white", sub: "Excellent Rank", trend: "Grade" },
             { label: "Rank In Batch", value: stats?.rank || "N/A", icon: Trophy, color: "bg-white", sub: "Institutional", trend: "High" },
             { label: "Hifz Progress", value: stats?.progress || "N/A", icon: BookOpen, color: "bg-white", sub: "Memorization", trend: "47%" },
           ].map((stat, i) => (
             <div key={i} className={`p-8 rounded-4xl shadow-soft border border-beige/10 space-y-6 flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-2 transition-all ${stat.color} cursor-default`}>
                <div className="flex justify-between items-center">
                   <div className={`w-14 h-14 ${i === 0 ? 'bg-white/10' : 'bg-primary/5'} rounded-2xl flex items-center justify-center transition-all group-hover:scale-110`}>
                      <stat.icon className={`w-6 h-6 ${i === 0 ? 'text-accent' : 'text-primary'}`} />
                   </div>
                   <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${i === 0 ? 'bg-white/20 text-white' : 'bg-accent/10 text-accent'}`}>{stat.trend}</span>
                </div>
                <div className="space-y-1">
                   <p className="text-4xl md:text-5xl font-serif font-black tracking-tight leading-none group-hover:text-accent transition-colors">{stat.value}</p>
                   <p className={`text-[10px] font-sans font-black uppercase tracking-[0.2em] leading-none ${i === 0 ? 'text-white/60' : 'text-primary/30'}`}>{stat.label}</p>
                </div>
                <div className={`pt-4 border-t ${i === 0 ? 'border-white/10' : 'border-primary/5'} flex items-center justify-between`}>
                   <span className={`text-[10px] font-bold italic ${i === 0 ? 'text-white/40' : 'text-primary/30'}`}>{stat.sub}</span>
                </div>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 pt-4">
           {/* Subject Marks Table */}
           <div className="xl:col-span-8 space-y-8">
              <div className="flex justify-between items-center pb-4 border-b border-primary/5">
                 <h4 className="text-3xl font-serif font-bold text-primary">Marks Distribution</h4>
                 <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-[10px] font-black text-accent uppercase tracking-widest border border-accent/20 px-4 py-2 rounded-xl group hover:bg-accent hover:text-white transition-all">
                       <History className="w-4 h-4" />
                       View Previous Exams
                    </button>
                 </div>
              </div>
              
              <div className="bg-white rounded-3xl shadow-soft border border-beige/10 overflow-hidden">
                 <table className="w-full text-left border-collapse">
                    <thead className="bg-primary/5 text-[10px] font-black uppercase tracking-widest text-primary/40 border-b border-primary/5">
                       <tr>
                          <th className="px-8 py-5">Subject Name</th>
                          <th className="px-8 py-5 text-center">Marks</th>
                          <th className="px-8 py-5 text-center">Total</th>
                          <th className="px-8 py-5 text-center">Grade</th>
                          <th className="px-8 py-5 text-left">Remarks</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/5">
                       {results.length === 0 ? (
                          <tr><td colSpan={5} className="text-center py-20 opacity-30 italic">No academic results found for this period.</td></tr>
                       ) : results.map((row, idx) => (
                          <tr key={idx} className="group hover:bg-cream/30 transition-colors">
                             <td className="px-8 py-7">
                                <p className="text-sm font-sans font-bold text-primary">{row.subject}</p>
                             </td>
                             <td className="px-8 py-7 text-center">
                                <p className="text-lg font-serif font-black text-primary">{row.obtained}</p>
                             </td>
                             <td className="px-8 py-7 text-center">
                                <p className="text-sm font-sans font-bold text-primary/30">{row.total}</p>
                             </td>
                             <td className="px-8 py-7 text-center">
                                <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xl border-2 shadow-sm ${
                                   row.grade === "A+" 
                                   ? "bg-primary text-white border-primary shadow-primary/20" 
                                   : "bg-white border-primary/10 text-primary"
                                }`}>
                                   {row.grade}
                                </span>
                             </td>
                             <td className="px-8 py-7 text-left">
                                <p className="text-xs text-primary/50 font-medium leading-relaxed italic line-clamp-2">"{row.remarks || "N/A"}"</p>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>

           {/* Results Sidebar: Insights & Report Card Preview */}
           <div className="xl:col-span-4 space-y-12">
              
              {/* Report Card Preview Card */}
              <div className="bg-primary p-10 rounded-4xl text-white relative overflow-hidden group shadow-2xl shadow-primary/20 cursor-pointer">
                 <div className="absolute top-0 right-0 p-8 transform translate-x-8 -translate-y-8 opacity-20 pointer-events-none group-hover:scale-110 transition-all duration-700">
                    <Award className="w-48 h-48" />
                 </div>
                 
                 <div className="relative z-10 space-y-10">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-accent" />
                       </div>
                       <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em]">Report Card Review</span>
                    </div>
                    
                    <div className="space-y-4">
                       <h5 className="text-2xl font-serif font-bold italic Leading-tight">Monthly Academic Evaluation Summary</h5>
                       <p className="text-xs font-medium text-white/40 font-sans tracking-widest uppercase">Mustafa Ahmed / Roll #84</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pb-4">
                       <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white/10 transition-colors">
                          <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Percentage</p>
                          <p className="text-xl font-serif font-black text-accent">92.4%</p>
                       </div>
                       <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white/10 transition-colors">
                          <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Total Marks</p>
                          <p className="text-xl font-serif font-black text-accent">462/500</p>
                       </div>
                    </div>

                    <button className="w-full py-5 bg-white hover:bg-accent text-primary hover:text-white transition-all rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-black/10">
                       Download Report Card
                    </button>
                 </div>
              </div>

              {/* Performance Insights */}
              <div className="bg-white border border-beige/10 shadow-soft p-10 rounded-4xl space-y-10">
                 <h5 className="text-xl font-serif font-black text-primary flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-accent" />
                    Performance Insights
                 </h5>
                 
                 <div className="space-y-8">
                    {[
                      { label: "Strongest Subject", value: "Hifz Quran", icon: Star, color: "text-accent" },
                      { label: "Needs Improvement", value: "None Identified", icon: Clock, color: "text-primary/30" },
                      { label: "Teacher Feedback", value: "Exceptionally Consistent.", icon: MessageSquareIcon, color: "text-primary italic text-xs" },
                    ].map((ins, i) => (
                       <div key={i} className="flex items-start gap-5 group cursor-default">
                          <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500">
                             <ins.icon className={`w-5 h-5 ${ins.color} group-hover:text-white transition-all`} />
                          </div>
                          <div className="space-y-1">
                             <p className="text-[10px] font-black text-primary/30 uppercase tracking-widest leading-none">{ins.label}</p>
                             <p className={`text-sm font-bold text-primary leading-tight ${ins.label === 'Teacher Feedback' ? 'italic text-primary/60' : ''}`}>{ins.value}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

           </div>
        </div>
        </>
      )}
      </div>
    </DashboardLayout>
  );
}

function MessageSquareIcon(props: any) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
