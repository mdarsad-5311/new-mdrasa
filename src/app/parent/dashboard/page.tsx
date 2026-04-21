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

export default function ParentDashboard() {
  return (
    <DashboardLayout 
      role="parent" 
      sidebarItems={PARENT_SIDEBAR_ITEMS}
      userProfile={{ name: "Mustafa's Parent", roleName: "Parent", avatar: "" }}
    >
      <div className="space-y-12 max-w-7xl animate-in fade-in duration-1000">
        
        {/* 1) MAIN HERO SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 border-b border-border pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 hover:rotate-0 transition-transform">
                  <LayoutDashboard className="w-6 h-6 text-accent" />
               </div>
               <span className="text-[10px] font-bold tracking-[0.4em] text-sage uppercase font-sans">CENTRAL COMMAND CENTER</span>
            </div>
            <h1 className="text-6xl font-serif font-bold text-primary leading-tight tracking-tight">Parent Portal</h1>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sage text-[10px] font-bold tracking-widest uppercase">STUDENT: <span className="text-primary font-black underline decoration-accent decoration-2 underline-offset-4">MUSTAFA AHMED</span></span>
              <div className="w-1 h-1 bg-border rounded-full"></div>
              <span className="text-sage text-[10px] font-bold tracking-widest uppercase">ROLL: <span className="text-primary font-black">#084</span></span>
              <div className="w-1 h-1 bg-border rounded-full"></div>
              <span className="text-sage text-[10px] font-bold tracking-widest uppercase">CLASS: <span className="text-primary font-black">HIFZ-A</span></span>
            </div>
          </div>

          <div className="flex items-center gap-4">
             <button className="flex items-center gap-5 bg-primary text-white pl-2 pr-10 py-2.5 rounded-full shadow-premium hover:shadow-pill transition-all group scale-110 active:scale-95 origin-right">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform">
                   <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col items-start pr-4">
                   <span className="text-[9px] font-bold tracking-widest text-sage leading-none mb-1">CONNECT DIRECTLY</span>
                   <span className="font-bold text-lg whitespace-nowrap">WhatsApp Support</span>
                </div>
             </button>
          </div>
        </div>

        {/* 2) QUICK ACTIONS GRID */}
        <div className="space-y-6">
           <h3 className="text-xs font-black text-sage tracking-[0.4em] uppercase border-l-4 border-accent pl-6 leading-none">Instant Workflows</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { label: "Pay Fees", icon: CreditCard, color: "bg-primary", href: "/parent/fees" },
                { label: "Attendance", icon: Calendar, color: "bg-white", href: "/parent/attendance" },
                { label: "Homework", icon: BookOpen, color: "bg-white", href: "/parent/homework" },
                { label: "Reports", icon: FileText, color: "bg-white", href: "/parent/results" },
                { label: "Leave", icon: CalendarDays, color: "bg-white", href: "/parent/leave" },
                { label: "Support", icon: HelpCircle, color: "bg-accent", href: "/parent/complaints" },
              ].map((action, i) => (
                <Link key={i} href={action.href}>
                  <div className={`${action.color} p-6 rounded-4xl border border-border shadow-soft flex flex-col items-center justify-center gap-4 group hover:shadow-premium hover:-translate-y-1 transition-all cursor-pointer`}>
                     <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${action.color === 'bg-primary' ? 'bg-white/10 border-white/10' : 'bg-background border-border group-hover:scale-110 transition-transform'}`}>
                        <action.icon className={`w-5 h-5 ${action.color === 'bg-primary' || action.color === 'bg-accent' ? 'text-white group-hover:text-white' : 'text-primary group-hover:text-accent'}`} />
                     </div>
                     <span className={`text-[10px] font-black uppercase tracking-widest text-center ${action.color === 'bg-primary' ? 'text-white' : 'text-primary opacity-60'}`}>{action.label}</span>
                  </div>
                </Link>
              ))}
           </div>
        </div>

        {/* 3) STATS CARDS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            { label: "PRESENCE", value: "94.5%", icon: Calendar, status: "EXCELLENT", color: "bg-white", detail: "Monthly Growth" },
            { label: "FEES DUE", value: "$45.00", icon: CreditCard, status: "OVERDUE", color: "bg-primary", detail: "Due: Mar 10" },
            { label: "CURRENT RANK", value: "04 / 45", icon: CheckCircle2, status: "STABLE", color: "bg-white", detail: "Mid-Term Result" },
            { label: "ACTIVE NOTES", value: "02 New", icon: MessageSquare, status: "UNREAD", color: "bg-accent", detail: "Teacher Feedback" }
          ].map((stat, i) => (
            <div key={i} className={`${stat.color} p-8 rounded-4xl shadow-soft border border-border group hover:shadow-premium transition-all flex flex-col justify-between h-56 relative overflow-hidden`}>
               <div className="flex justify-between items-start">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${stat.color === 'bg-primary' || stat.color === 'bg-accent' ? 'bg-white/10 border-white/10' : 'bg-background border-border group-hover:scale-110'}`}>
                     <stat.icon className={`w-6 h-6 ${stat.color === 'bg-primary' || stat.color === 'bg-accent' ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <span className={`text-[9px] font-bold tracking-widest border px-3 py-1 rounded-full uppercase ${stat.color === 'bg-primary' || stat.color === 'bg-accent' ? 'text-sage border-white/20' : 'text-sage border-border'}`}>{stat.status}</span>
               </div>
               <div>
                  <p className={`text-4xl font-serif font-bold leading-none ${stat.color === 'bg-primary' || stat.color === 'bg-accent' ? 'text-white' : 'text-primary'}`}>{stat.value}</p>
                  <p className={`text-[10px] font-bold tracking-widest uppercase mt-2 ${stat.color === 'bg-primary' || stat.color === 'bg-accent' ? 'text-sage' : 'text-sage'}`}>{stat.label}</p>
               </div>
               <div className={`flex justify-between items-center pt-4 border-t ${stat.color === 'bg-primary' || stat.color === 'bg-accent' ? 'border-white/10' : 'border-border'}`}>
                  <span className={`text-[11px] font-medium italic ${stat.color === 'bg-primary' || stat.color === 'bg-accent' ? 'text-sage' : 'text-sage'}`}>{stat.detail}</span>
                  <ArrowUpRight className={`w-4 h-4 ${stat.color === 'bg-primary' || stat.color === 'bg-accent' ? 'text-accent' : 'text-accent/40'}`} />
               </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {/* 4) PENDING HOMEWORK & EXAMS */}
          <div className="xl:col-span-2 space-y-12">
            
            {/* Homework Pending */}
            <div className="bg-white p-12 rounded-5xl shadow-soft border border-border space-y-10">
               <div className="flex justify-between items-center pb-6 border-b border-border">
                  <div className="flex items-center gap-4">
                     <BookOpen className="w-8 h-8 text-accent" />
                     <h2 className="text-3xl font-serif font-bold text-primary">Pending Tasks</h2>
                  </div>
                  <button className="text-[10px] font-bold text-accent tracking-[0.2rem] uppercase border-b-2 border-accent/20 hover:border-accent transition-all pb-1 group flex items-center gap-2">
                     ALL ASSIGNMENTS <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
               </div>

               <div className="space-y-6">
                  {[
                    { title: "Surah Mulk Recitation", subject: "Quranic Hifz", teacher: "Maulana Ahmed", due: "In 2 Days", pts: "100 Pts" },
                    { title: "Math Table Revision", subject: "Mathematics", teacher: "Mr. Sameer", due: "Today", pts: "50 Pts" }
                  ].map((work, idx) => (
                    <div key={idx} className="flex items-center justify-between p-6 bg-background rounded-3xl group border border-border hover:border-accent hover:bg-white transition-all cursor-pointer">
                       <div className="flex items-center gap-6">
                          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-border group-hover:rotate-6 transition-transform">
                             <Clock className="w-6 h-6 text-sage group-hover:text-accent" />
                          </div>
                          <div>
                             <h4 className="text-xl font-serif font-bold text-primary transition-colors group-hover:text-accent">{work.title}</h4>
                             <p className="text-[10px] font-black text-sage tracking-widest uppercase">{work.subject} | {work.teacher}</p>
                          </div>
                       </div>
                       <div className="text-right hidden sm:block">
                          <p className="text-sm font-bold text-primary italic leading-none">{work.due}</p>
                          <p className="text-[9px] font-bold text-accent uppercase tracking-widest mt-1">{work.pts} AVAILABLE</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Performance Snapshot */}
            <div className="bg-primary p-12 rounded-5xl shadow-premium text-white flex flex-col md:flex-row justify-between items-center gap-12 relative overflow-hidden group">
               <TrendingUp className="absolute top-0 right-0 p-8 w-64 h-64 text-white opacity-5 -translate-y-12 translate-x-12 rotate-12 transition-transform duration-1000 group-hover:scale-110" />
               <div className="space-y-4 text-center md:text-left relative z-10">
                  <span className="text-[10px] font-bold tracking-[0.4rem] text-accent uppercase font-sans">PERFORMANCE SNAPSHOT</span>
                  <h3 className="text-4xl font-serif font-bold leading-tight">Mustafa is among the Top 5% <br /> in Quran Recitation.</h3>
                  <button className="bg-accent text-primary px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 shadow-lg shadow-accent/20 transition-all flex items-center gap-4 mx-auto md:mx-0">
                     VIEW ANALYTICS <ArrowUpRight className="w-4 h-4" />
                  </button>
               </div>
               <div className="relative z-10 shrink-0">
                  <div className="w-32 h-32 border-8 border-accent/20 border-t-accent rounded-full flex items-center justify-center">
                     <span className="text-3xl font-serif font-bold italic">87%</span>
                  </div>
                  <p className="text-[9px] font-bold text-sage uppercase tracking-widest text-center mt-4">OVERALL AVERAGE</p>
               </div>
            </div>

          </div>

          {/* 5) SIDEBAR WIDGETS */}
          <div className="space-y-12">
            
            {/* Recent Activity Monitor */}
            <div className="bg-white p-10 rounded-4xl shadow-soft border border-border space-y-10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 transition-transform duration-700 group-hover:scale-125">
                  <MessageSquare className="w-48 h-48" />
               </div>
               <h3 className="text-2xl font-serif font-bold text-primary flex items-center gap-4">
                  <Bell className="w-5 h-5 text-accent" /> Recent Alerts
               </h3>
               
               <div className="space-y-8 relative z-10">
                  {[
                    { title: "Quarterly PTM Scheduled", date: "Mar 24, 2026", cat: "EVENT" },
                    { title: "Revision Plan Uploaded", date: "Mar 12, 2026", cat: "ACADEMIC" },
                    { title: "Transport Fees Update", date: "Mar 08, 2026", cat: "FEES" }
                  ].map((alert, i) => (
                    <div key={i} className="flex gap-6 group/item cursor-pointer">
                       <div className="h-10 w-px bg-border group-hover/item:bg-accent transition-colors"></div>
                       <div className="space-y-1">
                          <span className="text-[9px] font-black text-accent tracking-[0.2rem] uppercase leading-none">{alert.cat}</span>
                          <h6 className="text-sm font-bold text-primary leading-tight group-hover/item:text-accent transition-colors">{alert.title}</h6>
                          <p className="text-[10px] font-bold text-sage uppercase tracking-widest">{alert.date}</p>
                       </div>
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

      </div>
    </DashboardLayout>
  );
}


