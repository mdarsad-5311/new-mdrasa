"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { PARENT_SIDEBAR_ITEMS } from "@/lib/constants";
import { CheckCircle2, Star, TrendingUp, TrendingDown, Clock, MessageSquare, GraduationCap, LineChart, FileDown, ArrowUpRight } from "lucide-react";

export default function ResultsPage() {
  const resultData = [
    { subject: "Quranic Hifz", marks: "98/100", grade: "A+", weight: "40%", status: "Exceptional" },
    { subject: "Tajweed Rules", marks: "92/100", grade: "A", weight: "15%", status: "Mastered" },
    { subject: "Urdu Language", marks: "81/100", grade: "B+", weight: "10%", status: "Good" },
    { subject: "Islamic History", marks: "85/100", grade: "B+", weight: "10%", status: "Good" },
    { subject: "Mathematics", marks: "78/100", grade: "B", weight: "15%", status: "Developing" },
    { subject: "General Science", marks: "89/100", grade: "A-", weight: "10%", status: "Strong" },
  ];

  return (
    <DashboardLayout 
      role="parent" 
      sidebarItems={PARENT_SIDEBAR_ITEMS}
      userProfile={{ name: "Mustafa's Parent", roleName: "Parent", avatar: "" }}
    >
      <div className="space-y-12 max-w-7xl animate-in fade-in slide-in-from-top-12 duration-700">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-border pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center shadow-lg transform rotate-6 hover:rotate-0 transition-transform">
                  <Star className="w-6 h-6 text-primary" />
               </div>
               <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase font-sans">MID-TERM PERFORMANCE REPORT 2026</span>
            </div>
            <h1 className="text-5xl font-serif font-bold text-primary leading-tight">Academic Results</h1>
            <p className="text-sage text-sm font-medium tracking-widest uppercase">
              RECIPIENT: <span className="text-primary font-bold">MUSTAFA AHMED</span> | RANK: <span className="text-primary font-bold">04 / 45</span>
            </p>
          </div>

          <button className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full shadow-premium hover:shadow-pill transition-all text-[10px] font-bold uppercase tracking-widest active:scale-95 group">
             <FileDown className="w-4 h-4 text-accent" /> DOWNLOAD REPORT CARD
          </button>
        </div>

        {/* Grade Highlights Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { label: "Aggregate Percentage", value: "87.4%", icon: PieChart, status: "Very Good" },
             { label: "Grade Performance", value: "A-", icon: Star, status: "Cumulative" },
             { label: "Class Position", value: "#04 / 45", icon: TrendingUp, status: "Current Rank" },
             { label: "Teacher Feedback", value: "Strong Progress", icon: MessageSquare, status: "Annual Notes" }
           ].map((stat, i) => (
             <div key={i} className={`p-8 rounded-4xl shadow-soft border flex flex-col justify-between h-48 transition-all ${
                stat.label === "Aggregate Percentage" ? "bg-primary text-white border-primary" : "bg-white text-primary border-border"
             }`}>
                <div className="flex justify-between items-start">
                   <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                      stat.label === "Aggregate Percentage" ? "bg-white/10 border-white/10" : "bg-background border-border"
                   }`}>
                      <stat.icon className={`w-3.5 h-3.5 ${stat.label === "Aggregate Percentage" ? "text-accent" : "text-primary"}`} />
                   </div>
                   <span className={`text-[9px] font-bold uppercase tracking-widest ${stat.label === "Aggregate Percentage" ? "text-sage" : "text-sage"}`}>{stat.status}</span>
                </div>
                <div>
                   <p className="text-3xl font-serif font-bold leading-none">{stat.value}</p>
                   <p className={`text-[10px] font-bold uppercase tracking-widest mt-2 ${stat.label === "Aggregate Percentage" ? "text-sage" : "text-sage"}`}>{stat.label}</p>
                </div>
             </div>
           ))}
        </div>

        {/* Detailed Scores */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
           <div className="xl:col-span-2 space-y-8">
              <div className="flex justify-between items-center border-b border-border pb-6">
                 <h2 className="text-3xl font-serif font-bold text-primary">Subject Scores</h2>
                 <p className="text-xs font-medium text-sage italic">Values shown are Raw Marks / Out of 100</p>
              </div>

              <div className="space-y-4">
                 {resultData.map((res, i) => (
                   <div key={i} className="bg-white p-6 rounded-3xl border border-border hover:border-accent hover:shadow-soft transition-all group flex flex-col sm:flex-row justify-between items-center">
                      <div className="flex items-center gap-6 w-full sm:w-auto mb-4 sm:mb-0">
                         <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center border border-border font-serif font-black text-primary text-xl group-hover:scale-110 transition-transform">
                            {res.grade}
                         </div>
                         <div className="space-y-1">
                            <h6 className="text-lg font-serif font-bold text-primary leading-none capitalize">{res.subject}</h6>
                            <p className="text-[10px] font-bold text-sage uppercase tracking-widest">{res.status} | Weight: {res.weight}</p>
                         </div>
                      </div>

                      <div className="flex items-center gap-12 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-border pt-4 sm:pt-0">
                         <div className="text-right">
                            <p className="text-2xl font-serif font-bold text-primary italic leading-none">{res.marks}</p>
                            <p className="text-[9px] font-bold text-sage uppercase tracking-widest">OBTAINED SCORE</p>
                         </div>
                         <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Performance Graph Placeholder & Teacher Comments */}
           <div className="space-y-12">
              <div className="bg-accent p-10 rounded-4xl shadow-premium text-primary flex flex-col justify-between h-80 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                    <LineChart className="w-64 h-64 -rotate-12" />
                 </div>
                 <div className="space-y-2 relative z-10">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-primary/40 uppercase">PROGRESS ANALYTICS</span>
                    <h3 className="text-3xl font-serif font-bold leading-tight">Quarterly Consistency</h3>
                 </div>
                 <p className="text-sm font-medium italic relative z-10 leading-relaxed max-w-xs pr-12">
                   Mustafa's performance has increased by <span className="font-bold underline decoration-primary decoration-2 underline-offset-4">12%</span> in Hifz over the last trimester.
                 </p>
              </div>

              <div className="bg-white p-10 rounded-4xl shadow-soft border border-border space-y-8">
                 <h3 className="text-2xl font-serif font-bold text-primary flex items-center gap-3 underline decoration-accent decoration-2 underline-offset-8 decoration-dotted pb-2">
                   <MessageSquare className="w-5 h-5 text-accent" /> Teacher's Notes
                 </h3>
                 <div className="space-y-6">
                    <div>
                       <p className="text-xs font-bold text-sage uppercase tracking-widest mb-1">RELEVANT TO ALL SUBJECTS</p>
                       <p className="text-sm font-medium text-primary italic leading-relaxed">
                         "Mustafa is a bright student. His focus in Hifz is excellent. He needs to put some extra effort into 
                         Mathematics during the revision weeks."
                       </p>
                    </div>
                    <div className="flex items-center gap-3 pt-6 border-t border-background">
                       <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center border border-primary/10">
                          <GraduationCap className="w-4 h-4 text-primary" />
                       </div>
                       <div>
                          <p className="text-xs font-bold text-primary uppercase tracking-widest leading-none">MAULANA AHMED</p>
                          <p className="text-[9px] font-medium text-sage uppercase mt-1">HEAD TEACHER</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}

function PieChart({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}


