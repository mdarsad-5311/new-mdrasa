"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { PARENT_SIDEBAR_ITEMS } from "@/lib/constants";
import { Clock, Calendar, CheckSquare, Coffee, LogOut, Search, User, Users, Book, LucideIcon, Bookmark, Bell } from "lucide-react";
import { useState } from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const sessions = [
  { time: "08:15 AM - 09:30 AM", title: "Quran Hifz", teacher: "Maulana Ahmed", color: "bg-primary", textColor: "text-white" },
  { time: "09:30 AM - 10:15 AM", title: "Tajweed Basics", teacher: "Mr. Bilal", color: "bg-accent/10", textColor: "text-primary" },
  { time: "10:15 AM - 10:45 AM", title: "Morning Recess", teacher: "-", color: "bg-background", textColor: "text-sage", icon: Coffee },
  { time: "10:45 AM - 11:30 AM", title: "Mathematics", teacher: "Mr. Sameer", color: "bg-accent/10", textColor: "text-primary" },
  { time: "11:30 AM - 12:15 PM", title: "Islamic History", teacher: "Hafiz Bilal", color: "bg-accent/10", textColor: "text-primary" },
  { time: "12:15 PM - 01:15 PM", title: "Zuhur Prayer / Lunch", teacher: "-", color: "bg-background", textColor: "text-sage" }
];

export default function TimetablePage() {
  const [activeDay, setActiveDay] = useState("Monday");

  return (
    <DashboardLayout 
      role="parent" 
      sidebarItems={PARENT_SIDEBAR_ITEMS}
      userProfile={{ name: "Mustafa's Parent", roleName: "Parent", avatar: "" }}
    >
      <div className="space-y-12 max-w-7xl animate-in zoom-in-95 duration-700">
        
        {/* Header section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-border pb-12">
          <div className="space-y-2 text-primary">
            <span className="text-[10px] font-bold tracking-[0.4rem] text-accent uppercase font-sans">DAILY SCHEDULE</span>
            <h1 className="text-5xl font-serif font-bold leading-tight">Class Routine</h1>
            <p className="text-sage text-sm font-medium tracking-widest uppercase">
              RECIPIENT: <span className="text-primary font-bold">MUSTAFA AHMED</span> | CLASS: <span className="text-primary font-bold">HIFZ-A</span>
            </p>
          </div>

          <button className="flex items-center gap-3 bg-white border border-border px-8 py-4 rounded-full shadow-soft hover:shadow-premium transition-all text-primary font-bold text-xs uppercase tracking-widest">
             <Bell className="w-4 h-4 text-accent" /> VIEW TODAY'S ALERTS
          </button>
        </div>

        {/* Day Selector */}
        <div className="flex items-center gap-4 bg-white border border-border p-2.5 rounded-full shadow-soft overflow-x-auto w-fit max-w-full no-scrollbar">
           {days.map((day) => (
             <button 
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-8 py-3.5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all min-w-[140px] ${
                day === activeDay ? "bg-primary text-white shadow-xl scale-105" : "text-sage hover:text-primary hover:bg-background"
              }`}
             >
               {day}
             </button>
           ))}
        </div>

        {/* Timeline View */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
           <div className="lg:col-span-3 space-y-8 relative">
              {/* Timeline Indicator Line */}
              <div className="absolute left-10 top-0 bottom-0 w-px bg-border group-hover:bg-accent transition-colors duration-500"></div>

              {sessions.map((session, idx) => (
                <div key={idx} className="flex gap-10 group relative z-10 transition-all hover:translate-x-2">
                   <div className="w-20 pt-1 flex flex-col items-center">
                      <div className={`w-2 h-2 rounded-full border-4 border-white shadow-lg outline-2 ${idx === 0 ? "outline-accent bg-accent" : "outline-border bg-white"} group-hover:outline-accent transition-all`}></div>
                   </div>

                   <div className={`flex-1 flex flex-col md:flex-row justify-between items-center p-8 rounded-4xl border border-border shadow-soft transition-all hover:shadow-premium group ${session.color === "bg-primary" ? "bg-primary text-white" : "bg-white hover:border-accent"}`}>
                      <div className="flex items-center gap-8 w-full md:w-auto mb-6 md:mb-0">
                         <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all ${session.color === "bg-primary" ? "bg-white/10 border-white/10" : "bg-background border-border group-hover:scale-105"}`}>
                            <Clock className={`w-6 h-6 ${session.color === "bg-primary" ? "text-accent" : "text-primary group-hover:text-accent"}`} />
                         </div>
                         <div>
                            <h5 className={`text-xl font-serif font-bold ${session.color === "bg-primary" ? "text-white" : "text-primary"}`}>{session.title}</h5>
                            <p className={`text-[10px] font-bold uppercase tracking-widest ${session.color === "bg-primary" ? "text-sage" : "text-sage"}`}>
                               TEACHER: <span className={session.color === "bg-primary" ? "text-accent" : "text-primary"}>{session.teacher}</span>
                            </p>
                         </div>
                      </div>

                      <div className="text-right w-full md:w-auto border-t md:border-t-0 border-border md:border-l pt-6 md:pt-0 md:pl-10">
                         <p className={`text-lg font-serif font-bold italic ${session.color === "bg-primary" ? "text-accent" : "text-primary"}`}>{session.time}</p>
                         <p className={`text-[9px] font-bold uppercase tracking-widest ${session.color === "bg-primary" ? "text-sage" : "text-sage"}`}>SESSION PERIOD</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>

           {/* Sidebar Info */}
           <div className="space-y-12">
              <div className="bg-accent p-10 rounded-4xl shadow-premium text-primary flex flex-col gap-8 h-fit relative overflow-hidden">
                 <Bookmark className="absolute top-0 right-0 p-8 w-64 h-64 opacity-10 -translate-y-12 translate-x-12 rotate-12" />
                 <h3 className="text-2xl font-serif font-bold relative z-10 leading-tight">Exam Prep <br /> Routine</h3>
                 <p className="text-sm font-medium italic relative z-10 leading-relaxed pr-8">Special revisions are scheduled every Friday from 04:00 PM to 06:00 PM starting next week.</p>
                 <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] relative z-10 hover:shadow-lg transition-all active:scale-95">
                    VIEW REVISION PLAN
                 </button>
              </div>

              <div className="bg-white p-10 rounded-4xl shadow-soft border border-border space-y-8 text-primary">
                 <h5 className="text-xl font-serif font-bold underline decoration-accent decoration-2 underline-offset-8 decoration-dotted pb-2">Academic Calendar</h5>
                 <div className="space-y-6">
                    {[
                      { event: "Ramadan Holidays", date: "April 01 - April 15", color: "bg-red-500" },
                      { event: "Mid Term Exams", date: "May 10 - May 22", color: "bg-primary" },
                      { event: "Annual Day", date: "June 05, 2026", color: "bg-accent" }
                    ].map((ev, i) => (
                      <div key={i} className="flex gap-4">
                         <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${ev.color}`}></div>
                         <div>
                            <p className="text-sm font-bold opacity-80 leading-tight">{ev.event}</p>
                            <p className="text-[10px] font-bold text-sage uppercase tracking-widest mt-1">{ev.date}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}


