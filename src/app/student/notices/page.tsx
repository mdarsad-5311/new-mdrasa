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
  Search,
  Filter,
  Megaphone,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

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

export default function NoticesPage() {
  const notices = [
    { title: "Annual Exam Schedule Published", cat: "Exam", date: "Mar 30, 2026", desc: "The official dates for the annual hifz and tajweed exams have been released. Please collect your schedule from the office.", color: "bg-primary" },
    { title: "Holiday Notice: Eid-ul-Fitr", cat: "Holiday", date: "Mar 25, 2026", desc: "The Madrasa will remain closed from April 1st to April 10th for Eid holidays. Classes will resume formally thereafter.", color: "bg-accent" },
    { title: "Class Timing Update", cat: "Timing", date: "Mar 22, 2026", desc: "Starting next week, morning hifz classes will begin at 07:30 AM instead of 08:00 AM for the summer session.", color: "bg-primary" },
    { title: "Homework Reminder: Arabic V.2", cat: "Homework", date: "Mar 20, 2026", desc: "Please ensure all Arabic vocabulary exercises from Chapter 3 are completed and submitted by Monday morning.", color: "bg-accent" },
    { title: "Parent-Teacher Meeting", cat: "Event", date: "Mar 15, 2026", desc: "A mandatory general body meeting for all parents will be held on Sunday at 10 AM in the assembly hall.", color: "bg-primary" },
  ];

  return (
    <DashboardLayout 
      role="student" 
      sidebarItems={sidebarItems}
      userProfile={{ name: "Mustafa Ahmed", roleName: "Student", avatar: "" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 space-y-12 pb-20 relative">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b-2 border-primary/5">
           <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-px bg-accent"></span>
                <span className="text-accent font-sans font-bold tracking-[0.3em] uppercase text-[10px]">Institutional News</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary leading-tight">Student Notices</h2>
              <p className="text-primary/40 font-sans font-semibold text-sm tracking-widest uppercase">Official Announcements Board</p>
           </div>
        </div>

        {/* Filter / Search Area */}
        <div className="flex flex-col md:flex-row gap-6">
           <div className="flex-1 relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/30 group-focus-within:text-primary transition-colors" />
              <input type="text" placeholder="Search notices..." className="w-full h-16 pl-16 pr-8 bg-white border-2 border-primary/5 rounded-2xl font-bold text-sm text-primary placeholder:text-primary/20 focus:outline-none focus:border-accent/40 shadow-sm transition-all" />
           </div>
           <div className="flex gap-4">
              <button className="flex items-center gap-3 px-8 h-16 bg-white border-2 border-primary/5 rounded-2xl font-black text-[10px] uppercase tracking-widest text-primary/60 hover:text-primary hover:border-accent/20 transition-all">
                 <Filter className="w-4 h-4 text-accent" />
                 Category
              </button>
              <button className="flex items-center gap-3 px-8 h-16 bg-white border-2 border-primary/5 rounded-2xl font-black text-[10px] uppercase tracking-widest text-primary/60 hover:text-primary hover:border-accent/20 transition-all">
                 <Calendar className="w-4 h-4 text-accent" />
                 Sort By Date
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 pt-4">
           {/* Notices List */}
           <div className="xl:col-span-8 space-y-8">
              <div className="flex justify-between items-center pb-4 border-b border-primary/5">
                 <h4 className="text-3xl font-serif font-bold text-primary italic">General Notices</h4>
                 <p className="text-[10px] font-black text-primary/20 uppercase tracking-widest leading-none">Showing 1-5 of 12 Notices</p>
              </div>
              
              <div className="space-y-6">
                 {notices.map((notice, n) => (
                    <div key={n} className="p-10 bg-white border border-beige/10 rounded-4xl shadow-soft hover:shadow-2xl hover:-translate-y-1 transition-all group flex flex-col md:flex-row items-center gap-10 cursor-pointer relative overflow-hidden">
                       <div className={`w-2 h-[40%] absolute left-0 top-1/2 -translate-y-1/2 rounded-r-full group-hover:h-full transition-all duration-700 ${notice.color}`}></div>
                       
                       <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <Megaphone className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                       </div>
                       
                       <div className="flex-1 space-y-4">
                          <div className="flex items-center justify-center md:justify-start gap-4">
                             <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${n % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>{notice.cat} Badge</span>
                             <span className="text-[10px] font-bold text-primary/30 flex items-center gap-1.5 uppercase tracking-widest">
                                <Calendar className="w-3.5 h-3.5" /> {notice.date}
                             </span>
                          </div>
                          <h5 className="text-2xl font-serif font-bold text-primary leading-tight group-hover:text-accent transition-colors">{notice.title}</h5>
                          <p className="text-sm text-primary/50 font-medium leading-relaxed italic line-clamp-2">"{notice.desc}"</p>
                       </div>

                       <button className="flex items-center gap-2 py-4 px-8 bg-cream border border-primary/5 text-primary rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4 text-accent" />
                       </button>
                    </div>
                 ))}
              </div>
           </div>

           {/* Sidebar: Featured Notice & Alerts */}
           <div className="xl:col-span-4 space-y-12">
              
              {/* Featured Notice Panel */}
              <div className="bg-primary p-12 rounded-4xl text-white relative overflow-hidden group shadow-2xl shadow-primary/20">
                 <div className="absolute top-0 right-0 p-8 transform translate-x-8 -translate-y-8 opacity-20 pointer-events-none group-hover:scale-110 transition-all duration-700">
                    <AlertCircle className="w-48 h-48" />
                 </div>
                 
                 <div className="relative z-10 space-y-10">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shadow-inner">
                          <Megaphone className="w-5 h-5 text-accent" />
                       </div>
                       <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em]">Featured Notice</span>
                    </div>
                    
                    <div className="space-y-4">
                       <h5 className="text-2xl font-serif font-bold italic leading-tight">Annual Exam Schedule Published</h5>
                       <p className="text-xs font-medium text-white/40 leading-relaxed uppercase tracking-widest font-sans">Official Release: Mar 30, 2026</p>
                    </div>

                    <p className="text-xs text-white/60 font-medium leading-[1.8] italic font-serif">"All Level 2 students are required to verify their exam slots by at the administration wing by 4 PM today."</p>

                    <button className="w-full py-5 bg-white hover:bg-accent text-primary hover:text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-black/10">
                       Download Official Schedule
                    </button>
                 </div>
              </div>

              {/* Small Alerts Panel */}
              <div className="bg-white border border-beige/10 shadow-soft p-10 rounded-4xl space-y-10">
                 <div className="flex justify-between items-center pb-4 border-b border-primary/5">
                    <h5 className="text-xl font-serif font-black text-primary">Notifications</h5>
                    <span className="w-6 h-6 bg-red-500 text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-lg shadow-red-500/20">3</span>
                 </div>
                 
                 <div className="space-y-8">
                    {[
                      { title: "Unread Notice", time: "2m ago", color: "bg-red-500", priority: "High" },
                      { title: "Fee Reminder", time: "1h ago", color: "bg-accent", priority: "Normal" },
                      { title: "New Assignment", time: "3h ago", color: "bg-primary", priority: "Update" },
                    ].map((alert, a) => (
                       <div key={a} className="flex items-center justify-between group cursor-pointer hover:px-2 transition-all">
                          <div className="flex items-center gap-4">
                             <div className={`w-2.5 h-2.5 rounded-full ${alert.color}`}></div>
                             <div className="space-y-0.5">
                                <p className="text-sm font-bold text-primary group-hover:text-accent transition-colors">{alert.title}</p>
                                <p className="text-[10px] font-black text-primary/20 uppercase tracking-widest">{alert.priority}</p>
                             </div>
                          </div>
                          <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">{alert.time}</span>
                       </div>
                    ))}
                 </div>
                 
                 <button className="w-full py-4 text-[10px] font-black text-accent uppercase tracking-[0.3em] hover:text-primary hover:bg-primary/5 rounded-xl border border-transparent hover:border-primary/5 transition-all">
                    View All Activity
                 </button>
              </div>

           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}


