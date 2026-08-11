"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { PARENT_SIDEBAR_ITEMS } from "@/lib/constants";
import { 
  LayoutDashboard, 
  User, 
  Calendar, 
  CreditCard, 
  CheckCircle2, 
  Bell, 
  MessageSquare, 
  Phone,
  Download,
  Clock,
  ArrowUpRight,
  BookOpen,
  History as HistoryIcon,
  FileDown,
  CalendarDays,
  HelpCircle,
  TrendingUp,
  FileText
} from "lucide-react";
import Link from "next/link";

import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";
import { api } from "@/lib/api";

export default function ParentDashboard() {
  const { user } = useAuth();
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParentDashboard = async () => {
      try {
        const data = await api.get("/parent/dashboard");
        setDashboardData(data);
      } catch (err) {
        console.error("Parent dashboard fetch error", err);
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchParentDashboard();
  }, [user]);

  return (
    <DashboardLayout 
      role="parent" 
      sidebarItems={PARENT_SIDEBAR_ITEMS}
      userProfile={{ name: user?.name || "Parent", roleName: "Parent", avatar: "" }}
    >
      <div className="space-y-12 max-w-7xl animate-in fade-in duration-700 pb-20">
      {loading ? (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-border pb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
                  <LayoutDashboard className="w-5 h-5 text-accent" />
               </div>
               <span className="text-[10px] font-bold tracking-[0.4rem] text-accent uppercase font-sans">Institutional Portal</span>
            </div>
            <h1 className="text-5xl font-serif font-bold text-primary leading-tight">Guardian Dashboard</h1>
            <p className="text-sage text-sm font-medium tracking-widest uppercase">
              Welcome Back, <span className="text-primary font-bold">{user?.name || "Parent"}</span>
            </p>
          </div>
          
          <div className="flex items-center gap-6">
             <button className="flex items-center gap-3 bg-white border border-border px-8 py-4 rounded-full text-primary font-bold text-[10px] uppercase tracking-widest hover:shadow-premium transition-all">
                <FileDown className="w-4 h-4 text-accent" /> Download Report
             </button>
             <button className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-all">
                <Bell className="w-6 h-6" />
             </button>
          </div>
        </div>

        {/* Quick Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
           {[
             { label: "ATTENDANCE", value: "94.5%", icon: CalendarDays, color: "bg-white", trend: "Excellent", trendColor: "text-green-500" },
             { label: "FEE STATUS", value: "PAID", icon: CreditCard, color: "bg-primary text-white", trend: "Up to Date", trendColor: "text-accent" },
             { label: "JUZ PROGRESS", value: "14/30", icon: BookOpen, color: "bg-white", trend: "Active", trendColor: "text-accent" },
             { label: "NEXT EXAM", value: "MAY 20", icon: Clock, color: "bg-white", trend: "Coming Soon", trendColor: "text-primary" },
           ].map((stat, i) => (
             <div key={i} className={`p-10 rounded-4xl shadow-soft border border-border space-y-6 flex flex-col justify-between hover:shadow-premium hover:-translate-y-1 transition-all group ${stat.color}`}>
                <div className="flex justify-between items-center">
                   <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.color === 'bg-white' ? 'bg-primary/5 text-primary' : 'bg-white/10 text-white'}`}>
                      <stat.icon className="w-6 h-6" />
                   </div>
                   <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-background/50 border border-border/10 ${stat.trendColor}`}>{stat.trend}</span>
                </div>
                <div className="space-y-1">
                   <p className="text-4xl font-serif font-bold tracking-tight">{stat.value}</p>
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{stat.label}</p>
                </div>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 pt-4">
           {/* Main Activity Column */}
           <div className="xl:col-span-8 space-y-12">
              
              {/* Recent Activity Feed */}
              <div className="space-y-8">
                 <div className="flex justify-between items-center pb-4 border-b border-border">
                    <h2 className="text-3xl font-serif font-bold text-primary italic">Recent Activity</h2>
                    <Link href="#" className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] hover:text-primary transition-colors">View All Timeline</Link>
                 </div>
                 
                 <div className="space-y-4">
                    {[
                      { type: "Attendance", title: "Present in Tajweed Class", time: "Today, 08:30 AM", icon: CheckCircle2, status: "Verified" },
                      { type: "Result", title: "Scored 92/100 in Islamic History", time: "Yesterday", icon: TrendingUp, status: "High" },
                      { type: "Notice", title: "New Exam Schedule Published", time: "2 days ago", icon: Bell, status: "Important" },
                      { type: "Fees", title: "Monthly Subscription Receipt #492", time: "Mar 05, 2026", icon: FileText, status: "Completed" },
                    ].map((act, i) => (
                      <div key={i} className="flex items-center justify-between p-8 bg-white border border-border rounded-4xl hover:shadow-soft transition-all group cursor-pointer">
                         <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                               <act.icon className="w-6 h-6 text-primary group-hover:text-white transition-all" />
                            </div>
                            <div className="space-y-1">
                               <p className="text-sm font-bold text-primary group-hover:text-accent transition-colors">{act.title}</p>
                               <div className="flex items-center gap-3">
                                  <span className="text-[10px] font-black text-sage uppercase tracking-widest opacity-40">{act.type}</span>
                                  <span className="w-1 h-1 bg-border rounded-full"></span>
                                  <span className="text-[10px] font-medium text-sage italic">{act.time}</span>
                               </div>
                            </div>
                         </div>
                         <span className="text-[10px] font-black px-4 py-2 bg-background rounded-full border border-border text-primary/40 uppercase tracking-widest">{act.status}</span>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Progress Chart Placeholder / Summary */}
              <div className="bg-primary/5 p-12 rounded-5xl border border-primary/10 space-y-10 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-12 transform translate-x-12 -translate-y-12 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
                    <TrendingUp className="w-64 h-64 text-primary" />
                 </div>
                 <div className="space-y-4 relative z-10">
                    <h3 className="text-3xl font-serif font-bold text-primary">Memorization Journey</h3>
                    <p className="text-sm font-medium text-sage italic leading-relaxed max-w-lg">
                      Consistent progress in the last 30 days. Mustafa is currently focusing on Juz 14 with a high accuracy rate in Tajweed.
                    </p>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {[
                      { label: "Current Juz", value: "14", sub: "Hifz Section" },
                      { label: "Accuracy", value: "98%", sub: "Tajweed" },
                      { label: "Consistency", value: "High", sub: "Last 4 weeks" }
                    ].map((p, i) => (
                       <div key={i} className="p-6 bg-white/50 backdrop-blur-sm rounded-3xl border border-white">
                          <p className="text-[10px] font-black text-primary/30 uppercase tracking-widest mb-1">{p.label}</p>
                          <p className="text-3xl font-serif font-black text-primary leading-none">{p.value}</p>
                          <p className="text-[10px] font-bold text-accent mt-2">{p.sub}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Right Column: Alerts & Support */}
           <div className="xl:col-span-4 space-y-12">
              
              {/* Urgent Broadcasts */}
              <div className="bg-white border-2 border-primary p-10 rounded-4xl shadow-premium space-y-8">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                       <Bell className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-primary">Announcements</h4>
                 </div>
                 
                 <div className="space-y-8">
                    {[
                      { title: "Ramadan Holidays 2026", date: "Mar 15, 2026", color: "bg-accent" },
                      { title: "PTM Meeting Next Sunday", date: "Mar 12, 2026", color: "bg-primary" },
                    ].map((news, i) => (
                      <div key={i} className="space-y-3 group cursor-pointer">
                         <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${news.color}`}></div>
                            <p className="text-sm font-bold text-primary group-hover:text-accent transition-colors leading-tight">{news.title}</p>
                         </div>
                         <p className="text-[10px] font-black text-sage uppercase tracking-widest ml-5">{news.date}</p>
                      </div>
                    ))}
                 </div>

                 <button className="w-full py-4 border-2 border-primary text-primary rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95">
                    VIEW BROADCAST CENTER
                 </button>
              </div>

              {/* Quick Support */}
              <div className="bg-accent p-10 rounded-4xl shadow-premium text-primary space-y-6 flex flex-col justify-between h-72">
                 <h3 className="text-3xl font-serif font-bold leading-tight">Institutional <br /> Helpdesk</h3>
                 <p className="text-sm font-medium italic opacity-70 leading-relaxed pr-8">
                   Direct access to the Admission Office, Accounts, and Academic Coordination.
                 </p>
                 <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-[10px] tracking-widest uppercase hover:bg-primary-dark shadow-lg transition-all active:scale-95">
                    START LIVE CHAT
                 </button>
              </div>

           </div>
        </div>
        </>
      )}
      </div>
    </DashboardLayout>
  );
}
