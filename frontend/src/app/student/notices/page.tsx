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

export default function NoticesPage() {
  const { user } = useAuth();
  const [notices, setNotices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const data = await api.getNotices();
        setNotices(data || []);
      } catch (err) {
        console.error("Notices fetch error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
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
                <span className="text-accent font-sans font-bold tracking-[0.3em] uppercase text-[10px]">News & Updates</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary leading-tight">Student Notices</h2>
              <p className="text-primary/40 font-sans font-semibold text-sm tracking-widest uppercase">Institutional Announcements</p>
           </div>
        </div>

        <div className="grid grid-cols-1 gap-8 pt-4">
           {notices.length === 0 ? (
              <div className="text-center py-20 bg-white border border-beige/10 rounded-4xl shadow-soft">
                 <Bell className="w-16 h-16 text-primary/10 mx-auto mb-6" />
                 <p className="text-lg font-serif font-bold text-primary/30 italic">No new announcements today.</p>
              </div>
           ) : notices.map((note, idx) => (
              <div key={idx} className="p-10 bg-white border border-beige/10 rounded-4xl shadow-soft hover:shadow-2xl transition-all group flex flex-col md:flex-row items-start gap-10">
                 <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500">
                    <Bell className="w-10 h-10 text-primary group-hover:text-white transition-all" />
                 </div>
                 <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                       <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-accent/10 text-accent">{note.category}</span>
                       <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> {new Date(note.createdAt).toLocaleDateString()}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-black text-primary leading-tight group-hover:text-accent transition-colors">{note.title}</h3>
                    <p className="text-base text-primary/60 font-medium leading-relaxed italic">"{note.description}"</p>
                 </div>
                 <button className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-primary/30 hover:bg-primary hover:text-white transition-all">
                    <ExternalLink className="w-5 h-5" />
                 </button>
              </div>
           ))}
        </div>
        </>
      )}
      </div>
    </DashboardLayout>
  );
}
