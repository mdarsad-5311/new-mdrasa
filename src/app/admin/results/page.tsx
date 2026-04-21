"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { ADMIN_SIDEBAR_ITEMS } from "@/lib/constants";
import { 
  Users, 
  TrendingUp, 
  Search, 
  Filter, 
  Download, 
  CheckCircle2, 
  XCircle, 
  Star, 
  Award, 
  FileText, 
  Plus, 
  ChevronRight,
  Eye,
  Edit3,
  BarChart4
} from "lucide-react";

export default function ResultsAdminPage() {
  const resultStats = [
    { label: "EXAMINATION PASS", value: "94%", count: "Yearly Avg", up: true, icon: CheckCircle2, color: "bg-white", text: "text-primary" },
    { label: "TOP PERFORMERS", value: "48", count: "A+ Grade", up: true, icon: Award, color: "bg-primary text-white", text: "text-white" },
    { label: "PENDING GRADING", value: "05", count: "Finalizing", up: false, icon: FileText, color: "bg-white", text: "text-primary" },
    { label: "ACADEMIC RANK", value: "01", count: "Institutional", up: true, icon: Star, color: "bg-accent text-primary", text: "text-primary" },
  ];

  const results = [
    { id: 1, student: "Mustafa Ahmed", roll: "2024-001", class: "Hifz Quran", gpa: "3.95", status: "Pass", grade: "A+" },
    { id: 2, student: "Sara Noor", roll: "2024-042", class: "Nazra Quran", gpa: "3.84", status: "Pass", grade: "A" },
    { id: 3, student: "Ali Abbas", roll: "2024-085", class: "Hifz Quran", gpa: "4.00", status: "Pass", grade: "A+" },
    { id: 4, student: "Hassan Raza", roll: "2024-112", class: "Islamic History", gpa: "2.80", status: "Pass", grade: "B" },
    { id: 5, student: "Zainab Bi", roll: "2024-156", class: "Class 05-A", gpa: "3.50", status: "Pass", grade: "B+" },
  ];

  return (
    <DashboardLayout 
      role="admin" 
      sidebarItems={ADMIN_SIDEBAR_ITEMS}
      userProfile={{ name: "Admin Office", roleName: "Head Admin", avatar: "" }}
    >
      <div className="space-y-12 animate-in fade-in duration-700">
        
        {/* Header Summary */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
           <div className="space-y-4">
              <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">MANAGEMENT ERP HUB</span>
              <h1 className="text-6xl font-serif font-bold text-primary leading-tight tracking-tight">Academic Results</h1>
              <p className="text-sage font-black text-[11px] tracking-[0.2em] uppercase opacity-60 italic">Publish marks, manage gradebooks, and generate report cards</p>
           </div>
           
           <div className="flex gap-5 pb-2">
              <button className="flex items-center gap-3 bg-white border border-border/50 text-primary px-10 py-5 rounded-full font-bold shadow-soft hover:shadow-premium transition-all active:scale-95 group">
                 <BarChart4 className="w-5 h-5 text-accent" />
                 <span className="text-[11px] font-black uppercase tracking-widest leading-none">Class Performance</span>
              </button>
              <button className="flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold shadow-premium hover:shadow-pill transition-all active:scale-95 group">
                 <Plus className="w-5 h-5 text-accent" />
                 <span className="text-[11px] font-black uppercase tracking-widest leading-none">Declare Result</span>
              </button>
           </div>
        </div>

        {/* Results Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 pt-4">
           {resultStats.map((stat, i) => (
             <div key={i} className={`p-10 rounded-5xl min-h-[320px] flex flex-col justify-between group cursor-default transition-all hover:shadow-premium ${stat.color} shadow-soft border border-border/50 h-64`}>
                <div className="flex justify-between items-start">
                   <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-soft transition-transform group-hover:scale-110 border border-border/20`}>
                      <stat.icon className="w-7 h-7 text-primary" />
                   </div>
                   <div className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest bg-background/5 border border-white/10 ${stat.text === 'text-white' ? "text-white opacity-40" : "text-primary opacity-40"}`}>
                      {stat.count}
                   </div>
                </div>
                <div className="space-y-1">
                  <p className={`text-6xl font-serif font-bold tracking-tight leading-none ${stat.text}`}>{stat.value}</p>
                  <p className={`text-[10px] font-black uppercase tracking-[0.3em] leading-none opacity-40 mt-4 ${stat.text}`}>{stat.label}</p>
                </div>
                <div className="pt-6 border-t border-black/5 flex items-center justify-between transition-all">
                   <span className={`text-[10px] font-bold italic opacity-40 uppercase tracking-widest ${stat.text}`}>Performance Reports</span>
                   <ChevronRight className={`w-4 h-4 opacity-20 group-hover:translate-x-2 ${stat.text}`} />
                </div>
             </div>
           ))}
        </div>

        {/* Gradebook Section */}
        <div className="bg-white p-12 rounded-5xl shadow-premium border border-border/50 space-y-12">
           
           {/* Controls Bar */}
           <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
              <div className="flex items-center bg-background border border-border/40 px-8 h-18 rounded-full w-full xl:w-[500px] shadow-inner">
                 <Search className="w-5 h-5 text-sage/40" />
                 <input 
                   type="text" 
                   placeholder="Search gradebook by roll number..." 
                   className="flex-1 bg-transparent border-none outline-none pl-4 text-sm font-medium text-primary placeholder:text-sage/40" 
                 />
              </div>

              <div className="flex flex-wrap items-center gap-6">
                 <div className="flex items-center gap-3 px-8 py-5 bg-background border border-border/40 rounded-full h-18 shadow-soft">
                    <Filter className="w-4 h-4 text-accent" />
                    <select className="bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-widest text-primary cursor-pointer pr-4">
                       <option>Examination Cycle</option>
                       <option>Annual 2024</option>
                       <option>Mid-Term 2024</option>
                       <option>Monthly Test</option>
                    </select>
                 </div>
                 <div className="flex items-center gap-3 px-8 py-5 bg-background border border-border/40 rounded-full h-18 shadow-soft">
                    <TrendingUp className="w-4 h-4 text-sage" />
                    <select className="bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-widest text-primary cursor-pointer pr-4">
                       <option>Class Wise</option>
                       <option>Hifz Quran</option>
                       <option>Advanced Arabic</option>
                    </select>
                 </div>
              </div>
           </div>

           {/* Grade Table */}
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="border-b border-background">
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8">Student Detail</th>
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8">Academic Rank</th>
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8">Score / Marks</th>
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8">Outcome</th>
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8 text-right">Certificate Hub</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-background">
                    {results.map((res) => (
                      <tr key={res.id} className="group hover:bg-background/20 transition-all duration-300">
                        <td className="py-10 px-8">
                           <div className="flex items-center gap-6">
                              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center font-serif font-bold text-primary text-xl border border-primary/10 shadow-sm relative shrink-0">
                                 <Users className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                 <p className="text-lg font-serif font-bold text-primary group-hover:text-accent transition-colors leading-tight">{res.student}</p>
                                 <p className="text-[10px] font-black text-sage tracking-widest mt-1 uppercase opacity-60">Roll No: {res.roll} | {res.class}</p>
                              </div>
                           </div>
                        </td>
                        <td className="py-10 px-8">
                           <div className="flex items-center gap-3">
                              <span className={`text-4xl font-serif font-black ${res.grade === 'A+' ? "text-accent" : "text-primary"}`}>{res.grade}</span>
                           </div>
                        </td>
                        <td className="py-10 px-8">
                           <div className="flex flex-col">
                              <span className="text-xl font-serif font-black text-primary tracking-tight">{res.gpa} / 4.00</span>
                              <div className="w-24 h-1.5 bg-background rounded-full mt-2 relative overflow-hidden">
                                 <div className="absolute inset-y-0 left-0 bg-accent rounded-full" style={{ width: `${(parseFloat(res.gpa)/4)*100}%` }}></div>
                              </div>
                           </div>
                        </td>
                        <td className="py-10 px-8">
                           <span className={`inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full border shadow-soft bg-green-50 text-green-600 border-green-100`}>
                              Passed Exam
                           </span>
                        </td>
                        <td className="py-10 px-8">
                           <div className="flex items-center justify-end gap-4 shadow-soft">
                              <button className="w-12 h-12 flex items-center justify-center bg-white border border-border/40 rounded-2xl hover:bg-primary hover:text-white transition-all shadow-sm group/btn" title="View Gradecard">
                                 <Eye className="w-4 h-4" />
                              </button>
                              <button className="w-12 h-12 flex items-center justify-center bg-white border border-border/40 rounded-2xl hover:bg-accent hover:text-primary transition-all shadow-sm group/btn" title="Download Report Card">
                                 <Download className="w-4 h-4" />
                              </button>
                           </div>
                        </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>

           {/* Institutional footer disclaimer */}
           <div className="pt-12 border-t border-background flex justify-between items-center text-sage">
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest opacity-50">
                 <Award className="w-4 h-4" />
                 All academic outcomes are verified by the examination committee
              </div>
              <div className="flex items-center gap-4">
                 <button className="text-primary font-black text-[10px] uppercase tracking-widest border-b-2 border-primary/20 hover:border-primary transition-all pb-1">Full Academic Rankings</button>
                 <ChevronRight className="w-4 h-4 opacity-20" />
              </div>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}


