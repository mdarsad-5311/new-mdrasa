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

export default function HomeworkPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
                <span className="text-accent font-sans font-bold tracking-[0.3em] uppercase text-[10px]">Tasks & Assignments</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary leading-tight">Student Homework</h2>
              <p className="text-primary/40 font-sans font-semibold text-sm tracking-widest uppercase">Academic Requirements / Week 12</p>
           </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 pt-4">
           {/* Assignments List */}
           <div className="xl:col-span-8 space-y-8">
              {[
                { title: "Quran Memorization (Juz 14)", subject: "Hifz", due: "Today", status: "Pending", desc: "Memorize the first 5 pages of Juz 14 with Tajweed." },
                { title: "Urdu Grammar Exercise", subject: "Urdu", due: "Tomorrow", status: "Completed", desc: "Complete exercise 4.1 from the textbook." },
              ].map((hw, idx) => (
                <div key={idx} className="p-10 bg-white border border-beige/10 rounded-4xl shadow-soft hover:shadow-2xl transition-all group flex flex-col md:flex-row items-center gap-10">
                   <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-all">
                      <BookOpen className="w-8 h-8 text-primary" />
                   </div>
                   <div className="flex-1 space-y-4 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-4">
                         <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${hw.status === 'Pending' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>{hw.status}</span>
                         <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">{hw.subject}</span>
                      </div>
                      <h3 className="text-2xl font-serif font-black text-primary leading-tight group-hover:text-accent transition-colors">{hw.title}</h3>
                      <p className="text-sm text-primary/50 font-medium italic">"{hw.desc}"</p>
                   </div>
                   <div className="flex flex-col items-center gap-2">
                      <p className="text-[10px] font-black text-primary/20 uppercase tracking-widest">Due Date</p>
                      <p className="text-sm font-bold text-primary">{hw.due}</p>
                   </div>
                </div>
              ))}
           </div>

           {/* Sidebar: Submission Stats */}
           <div className="xl:col-span-4 space-y-12">
              <div className="bg-white p-10 rounded-4xl border border-beige/10 shadow-soft space-y-10">
                 <h4 className="text-xl font-serif font-black text-primary">Summary</h4>
                 <div className="space-y-6">
                    <div className="flex items-center justify-between">
                       <p className="text-sm font-bold text-primary/40">Total Assigned</p>
                       <p className="text-lg font-serif font-black text-primary">12</p>
                    </div>
                    <div className="flex items-center justify-between">
                       <p className="text-sm font-bold text-primary/40">Completed</p>
                       <p className="text-lg font-serif font-black text-green-600">10</p>
                    </div>
                    <div className="flex items-center justify-between">
                       <p className="text-sm font-bold text-primary/40">Pending</p>
                       <p className="text-lg font-serif font-black text-red-500">2</p>
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
