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

export default function TimetablePage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock loading for now as backend doesn't have timetable yet
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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
                <span className="text-accent font-sans font-bold tracking-[0.3em] uppercase text-[10px]">Academic Schedule</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary leading-tight">Class Timetable</h2>
              <p className="text-primary/40 font-sans font-semibold text-sm tracking-widest uppercase">Weekly Routine / Academic Session 2026</p>
           </div>
           <div className="flex gap-4">
              <button className="flex items-center gap-3 bg-white border-2 border-primary/5 text-primary px-8 py-4 rounded-2xl font-bold shadow-sm hover:bg-cream hover:border-accent/20 transition-all group">
                <Download className="w-4 h-4 text-accent" />
                Download PDF
              </button>
           </div>
        </div>

        {/* Days Selection */}
        <div className="flex flex-wrap gap-4">
           {days.map((day, i) => (
              <button key={day} className={`px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all ${i === 0 ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'bg-white border-2 border-primary/5 text-primary hover:bg-cream'}`}>
                 {day}
              </button>
           ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 pt-4">
           {/* Timetable Slots */}
           <div className="xl:col-span-8 space-y-6">
              {[
                { time: "08:00 AM - 10:00 AM", subject: "Tajweed & Recitation", teacher: "Maulana Ahmed", room: "Room 101", status: "Upcoming" },
                { time: "10:30 AM - 12:30 PM", subject: "Urdu Grammar", teacher: "Ustad Saleem", room: "Hall A", status: "Ongoing" },
                { time: "02:00 PM - 04:00 PM", subject: "Islamic History", teacher: "Hafiz Bilal", room: "Room 104", status: "Next" },
              ].map((slot, idx) => (
                <div key={idx} className="p-10 bg-white border border-beige/10 rounded-4xl shadow-soft hover:shadow-2xl transition-all group flex flex-col md:flex-row items-center gap-10">
                   <div className="w-32 h-32 bg-primary/5 rounded-3xl flex flex-col items-center justify-center shrink-0">
                      <Clock className="w-8 h-8 text-accent mb-2" />
                      <p className="text-[10px] font-black text-primary/40 uppercase tracking-tighter text-center px-4 leading-tight">{slot.time.split(' - ')[0]}<br/>{slot.time.split(' - ')[1]}</p>
                   </div>
                   <div className="flex-1 space-y-4 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-4">
                         <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-accent/10 text-accent">{slot.status}</span>
                         <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest flex items-center gap-2"><User className="w-3.5 h-3.5" /> {slot.teacher}</span>
                      </div>
                      <h3 className="text-3xl font-serif font-black text-primary leading-tight group-hover:text-accent transition-colors">{slot.subject}</h3>
                      <p className="text-sm font-sans font-bold text-primary/30 uppercase tracking-widest italic">{slot.room}</p>
                   </div>
                   <button className="px-8 py-4 bg-cream border border-primary/5 text-primary rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                      View Details
                   </button>
                </div>
              ))}
           </div>

           {/* Sidebar: Upcoming & Faculty */}
           <div className="xl:col-span-4 space-y-12">
              <div className="bg-primary p-12 rounded-4xl text-white space-y-10 shadow-2xl">
                 <h3 className="text-3xl font-serif font-bold italic leading-tight">Faculty Remarks</h3>
                 <p className="text-sm font-medium italic opacity-60 leading-relaxed">
                   "Attendance for the Tajweed morning session is mandatory for all Level 2 scholars. Please ensure punctuality."
                 </p>
                 <div className="pt-8 border-t border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                       <User className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                       <p className="text-sm font-bold">Maulana Ahmed</p>
                       <p className="text-[10px] font-black uppercase text-accent tracking-widest">Head of Department</p>
                    </div>
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
