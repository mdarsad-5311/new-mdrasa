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

export default function AttendancePage() {
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
                <span className="text-accent font-sans font-bold tracking-[0.3em] uppercase text-[10px]">Presence Record</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary leading-tight">Attendance Tracking</h2>
              <p className="text-primary/40 font-sans font-semibold text-sm tracking-widest uppercase">Monthly Overview / March 2026</p>
           </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 pt-4">
           {/* Attendance Stats Column */}
           <div className="xl:col-span-8 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                   { label: "Total Sessions", value: "84", icon: Clock },
                   { label: "Present Days", value: "79", icon: CheckCircle2 },
                   { label: "Attendance Rate", value: "94.5%", icon: TrendingUp },
                 ].map((stat, i) => (
                    <div key={i} className="p-8 bg-white border border-beige/10 rounded-4xl shadow-soft hover:shadow-2xl transition-all group">
                       <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                          <stat.icon className="w-6 h-6 text-primary" />
                       </div>
                       <p className="text-4xl font-serif font-black text-primary mb-1">{stat.value}</p>
                       <p className="text-[10px] font-black text-primary/30 uppercase tracking-widest">{stat.label}</p>
                    </div>
                 ))}
              </div>

              <div className="bg-white p-10 rounded-4xl border border-beige/10 shadow-soft">
                 <h4 className="text-xl font-serif font-black text-primary mb-8 pb-4 border-b border-primary/5">Attendance Legend</h4>
                 <div className="flex flex-wrap gap-8">
                    <div className="flex items-center gap-3">
                       <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                       <span className="text-xs font-bold text-primary/60">Present</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                       <span className="text-xs font-bold text-primary/60">Absent</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-4 h-4 bg-accent rounded-full"></div>
                       <span className="text-xs font-bold text-primary/60">Holiday</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Sidebar: Recommendations */}
           <div className="xl:col-span-4 space-y-12">
              <div className="bg-primary p-12 rounded-4xl text-white space-y-10 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 transform translate-x-8 -translate-y-8 opacity-20 pointer-events-none group-hover:scale-110 transition-all">
                    <Award className="w-40 h-40" />
                 </div>
                 <h3 className="text-3xl font-serif font-bold italic leading-tight">Insight</h3>
                 <p className="text-sm font-medium italic opacity-60 leading-relaxed">
                   "Your attendance is excellent, Mustafa. Consistent kehadiran like this is the foundation of hifz mastery."
                 </p>
                 <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[94%] h-full bg-accent rounded-full"></div>
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
