"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { PARENT_SIDEBAR_ITEMS } from "@/lib/constants";
import { BookOpen, Calendar, Clock, CheckCircle, FileText, Download, Upload, ArrowRight, User, GraduationCap, Star, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function HomeworkPage() {
  const assignments = [
    { 
      id: 1, 
      subject: "Quranic Sciences", 
      title: "Recitation of Surah Mulk", 
      assignedBy: "Maulana Ahmed", 
      dueDate: "Mar 15, 2026", 
      status: "Pending", 
      points: "100 Pts",
      instructions: "Recite the first 15 verses with proper Tajweed rules. Record and upload or recite in class.",
      active: true
    },
    { 
      id: 2, 
      subject: "Mathematics", 
      title: "Multiplication Table 1-12", 
      assignedBy: "Mr. Sameer", 
      dueDate: "Mar 12, 2026", 
      status: "Submitted", 
      points: "50 Pts",
      instructions: "Complete the exercises on page 42-45 of the workbook.",
      active: false
    },
    { 
      id: 3, 
      subject: "Urdu Literature", 
      title: "Essay on Islamic History", 
      assignedBy: "Hafiz Bilal", 
      dueDate: "Mar 10, 2026", 
      status: "Completed", 
      points: "80 Pts",
      instructions: "Write a 500-word essay about the first Hijrah.",
      active: false
    }
  ];

  return (
    <DashboardLayout 
      role="parent" 
      sidebarItems={PARENT_SIDEBAR_ITEMS}
      userProfile={{ name: "Mustafa's Parent", roleName: "Parent", avatar: "" }}
    >
      <div className="space-y-12 max-w-7xl animate-in fade-in duration-700">
        
        {/* Header section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-[0.4em] text-sage uppercase">ACADEMIC ASSIGNMENTS</span>
            <h1 className="text-5xl font-serif font-bold text-primary leading-tight">Homework Tracker</h1>
            <p className="text-sage text-sm font-medium tracking-widest uppercase">
              STUDENT: <span className="text-primary font-bold">MUSTAFA AHMED</span> | STATUS: <span className="text-primary font-bold">01 PENDING</span>
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white border border-border p-2 rounded-full shadow-soft transition-all">
             {["All", "Pending", "Submitted"].map((tab) => (
               <button 
                key={tab}
                className={`px-6 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all ${
                  tab === "Pending" ? "bg-primary text-white shadow-lg" : "text-sage hover:text-primary"
                }`}
               >
                 {tab}
               </button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
           <div className="xl:col-span-2 space-y-8 pb-12">
              {assignments.map((work, idx) => (
                <div key={idx} className="bg-white p-10 rounded-4xl border border-border shadow-soft hover:shadow-premium transition-all group flex flex-col gap-10">
                   <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                      <div className="flex items-center gap-6">
                         <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all ${
                            work.status === "Pending" ? "bg-accent/10 border-accent text-primary" : "bg-primary/5 border-primary text-primary"
                         }`}>
                            <BookOpen className="w-6 h-6" />
                         </div>
                         <div>
                            <h5 className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors">{work.title}</h5>
                            <p className="text-[10px] font-bold text-sage uppercase tracking-widest">{work.subject} | {work.assignedBy}</p>
                         </div>
                      </div>
                      <div className={`px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] min-w-[120px] text-center border ${
                        work.status === "Pending" ? "bg-red-50 text-red-500 border-red-100" : "bg-primary text-white border-primary"
                      }`}>
                        {work.status}
                      </div>
                   </div>

                   <div className="p-8 bg-background rounded-3xl border border-border space-y-4">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-4 h-4 text-accent" />
                        <span className="text-[10px] font-black tracking-widest text-primary uppercase">INSTRUCTIONS</span>
                      </div>
                      <p className="text-sm font-medium text-primary/70 leading-relaxed italic">
                        "{work.instructions}"
                      </p>
                   </div>

                   <div className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-8 border-t border-background">
                      <div className="flex items-center gap-12 w-full sm:w-auto">
                         <div className="space-y-1">
                            <span className="text-[9px] font-bold text-sage uppercase tracking-widest leading-none">DUE DATE</span>
                            <div className="flex items-center gap-2 text-primary font-bold">
                               <Calendar className="w-3.5 h-3.5 text-accent" />
                               <span className="text-lg leading-none">{work.dueDate}</span>
                            </div>
                         </div>
                         <div className="space-y-1">
                            <span className="text-[9px] font-bold text-sage uppercase tracking-widest leading-none">POINTS</span>
                            <div className="flex items-center gap-2 text-primary font-bold">
                               <Star className="w-3.5 h-3.5 text-accent" />
                               <span className="text-lg leading-none">{work.points}</span>
                            </div>
                         </div>
                      </div>

                      <div className="flex items-center gap-4 w-full sm:w-auto">
                         <button className="flex-1 sm:flex-none p-4 rounded-2xl bg-white border border-border hover:bg-background transition-all group/btn">
                            <Download className="w-5 h-5 text-accent group-hover/btn:scale-110 transition-transform" />
                         </button>
                         <button className="flex-1 sm:flex-none bg-primary text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary-dark transition-all flex items-center gap-3">
                            <Upload className="w-4 h-4 text-accent" /> SUBMIT RESPONSE
                         </button>
                      </div>
                   </div>
                </div>
              ))}
           </div>

           <div className="space-y-12">
              <div className="bg-primary p-10 rounded-4xl shadow-premium text-white space-y-10 relative overflow-hidden">
                 < GraduationCap className="absolute top-0 right-0 p-8 opacity-5 w-64 h-64 -rotate-12 translate-x-12 -translate-y-12" />
                 <h3 className="text-2xl font-serif font-bold relative z-10">Homework Overview</h3>
                 
                 <div className="space-y-8 relative z-10 text-primary">
                    <div className="bg-white/10 p-6 rounded-3xl border border-white/10 text-white">
                       <p className="text-4xl font-serif font-bold text-accent">01</p>
                       <p className="text-xs font-bold uppercase tracking-widest mt-1 opacity-70">PENDING TASKS</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-3xl border border-white/10 text-white">
                       <p className="text-4xl font-serif font-bold text-sage">14</p>
                       <p className="text-xs font-bold uppercase tracking-widest mt-1 opacity-70">SUBMITTED THIS MONTH</p>
                    </div>
                 </div>
              </div>

              <div className="bg-accent p-10 rounded-4xl shadow-soft text-primary space-y-6">
                 <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center border border-primary/10">
                    <Clock className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-serif font-bold leading-tight">Exam Revision Countdown</h3>
                 <p className="text-xs font-bold uppercase tracking-widest opacity-60">NEXT EXAM: MARCH 24</p>
                 <div className="py-6 border-y border-primary/10 flex justify-between">
                    <div>
                       <p className="text-3xl font-serif font-bold">12</p>
                       <p className="text-[10px] font-black uppercase tracking-widest">DAYS LEFT</p>
                    </div>
                    <ArrowRight className="w-6 h-6 translate-y-2 opacity-40 group-hover:translate-x-2 transition-transform" />
                 </div>
              </div>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}


