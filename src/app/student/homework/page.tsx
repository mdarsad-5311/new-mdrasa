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
  Paperclip,
  Bookmark,
  Hourglass,
  Layout
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

export default function HomeworkPage() {
  const homeworkList = [
    { subject: "Hifz Quran", title: "Surah Al-Imran | V 1-15", teacher: "Maulana Ahmed", dueDate: "Mar 31, 2026", status: "Pending", priority: "High" },
    { subject: "Tajweed Practice", title: "Rules of Noon Sakinah", teacher: "Ustad Saleem", dueDate: "April 01, 2026", status: "Under Review", priority: "Medium" },
    { subject: "Urdu Writing", title: "Essay on Islamic Solidarity", teacher: "Hafiz Bilal", dueDate: "April 02, 2026", status: "Submitted", priority: "Low" },
    { subject: "Arabic Vocabulary", title: "Basic Verb Conjugation", teacher: "Shaykh Umar", dueDate: "April 03, 2026", status: "Pending", priority: "Medium" },
    { subject: "Islamic Studies", title: "The Seerah of Prophet (SAW)", teacher: "Maulana Ahmed", dueDate: "April 05, 2026", status: "Completed", priority: "Low" },
  ];

  return (
    <DashboardLayout 
      role="student" 
      sidebarItems={sidebarItems}
      userProfile={{ name: "Mustafa Ahmed", roleName: "Student", avatar: "" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 space-y-12 pb-20 relative">
        
        {/* Page Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b-2 border-primary/5">
           <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-px bg-accent"></span>
                <span className="text-accent font-sans font-bold tracking-[0.3em] uppercase text-[10px]">Academic Tasks</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary leading-tight">Homework & Assignments</h2>
              <p className="text-primary/40 font-sans font-semibold text-sm tracking-widest uppercase">Active Learning / Level 2</p>
           </div>
           <div className="flex gap-4">
              <button className="flex items-center gap-3 bg-white border-2 border-primary/5 text-primary px-8 py-4 rounded-2xl font-bold shadow-sm hover:bg-cream hover:border-accent/20 transition-all group">
                 <Hourglass className="w-4 h-4 text-accent" />
                 View Expired Tasks
              </button>
           </div>
        </div>

        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { label: "Total Assignments", value: "24", icon: Layout, color: "bg-white", sub: "Month History", trend: "Normal" },
             { label: "Pending Homework", value: "02", icon: Clock, color: "bg-accent/10 border-accent/20 text-accent", sub: "Due This Week", trend: "Action" },
             { label: "Submitted Work", value: "22", icon: CheckCircle2, color: "bg-primary text-white", sub: "Completed Tasks", trend: "Good" },
             { label: "Upcoming Deadlines", value: "01", icon: Calendar, color: "bg-white", sub: "Due Tomorrow", trend: "Urgent" },
           ].map((stat, i) => (
             <div key={i} className={`p-8 rounded-4xl shadow-soft border border-beige/10 space-y-6 flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-2 transition-all ${stat.color} cursor-default`}>
                <div className="flex justify-between items-center">
                   <div className={`w-14 h-14 ${i === 2 ? 'bg-white/10' : 'bg-primary/5'} rounded-2xl flex items-center justify-center transition-all group-hover:scale-110`}>
                      <stat.icon className={`w-6 h-6 ${i === 2 ? 'text-accent' : 'text-primary'}`} />
                   </div>
                   <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${i === 2 ? 'bg-white/20 text-white' : 'bg-accent/10 text-accent'}`}>{stat.trend}</span>
                </div>
                <div className="space-y-1">
                   <p className="text-4xl md:text-5xl font-serif font-black tracking-tight leading-none group-hover:text-accent transition-colors">{stat.value}</p>
                   <p className={`text-[10px] font-sans font-black uppercase tracking-[0.2em] ${i === 2 ? 'text-white/60' : 'text-primary/30'}`}>{stat.label}</p>
                </div>
                <div className={`pt-4 border-t ${i === 2 ? 'border-white/10' : 'border-primary/5'} flex items-center justify-between`}>
                   <span className={`text-[10px] font-bold italic ${i === 2 ? 'text-white/40' : 'text-primary/30'}`}>{stat.sub}</span>
                </div>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 pt-4">
           {/* Homework Cards List */}
           <div className="xl:col-span-8 space-y-10 group cursor-default">
              <div className="flex justify-between items-center pb-4 border-b border-primary/5">
                 <h4 className="text-3xl font-serif font-bold text-primary italic">Daily Tasks</h4>
                 <p className="text-[10px] font-black text-primary/20 uppercase tracking-widest leading-none">Sorting by Due Date</p>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                 {homeworkList.map((hw, h) => (
                    <div key={h} className="p-10 bg-white border border-beige/10 rounded-4xl shadow-soft hover:shadow-2xl hover:-translate-y-1 transition-all group flex flex-col md:flex-row items-center gap-10 cursor-pointer relative overflow-hidden">
                       <div className={`w-2 h-[40%] absolute left-0 top-1/2 -translate-y-1/2 rounded-r-full group-hover:h-full transition-all duration-700 ${hw.priority === 'High' ? 'bg-red-500' : hw.priority === 'Medium' ? 'bg-accent' : 'bg-primary'}`}></div>
                       
                       <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <BookOpen className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                       </div>
                       
                       <div className="flex-1 space-y-4">
                          <div className="flex items-center justify-center md:justify-start gap-4">
                             <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${h % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>{hw.subject}</span>
                             <span className="text-[10px] font-bold text-primary/30 flex items-center gap-1.5 uppercase tracking-widest">
                                <Calendar className="w-3.5 h-3.5" /> Due: {hw.dueDate}
                             </span>
                          </div>
                          <h5 className="text-2xl font-serif font-bold text-primary leading-tight group-hover:text-accent transition-colors">{hw.title}</h5>
                          <div className="flex items-center justify-center md:justify-start gap-6">
                             <p className="text-xs font-bold text-primary/40 uppercase tracking-widest flex items-center gap-2">
                                <User className="w-4 h-4 text-accent/50" /> {hw.teacher}
                             </p>
                             <div className="flex items-center gap-1.5 px-3 py-1 bg-cream border border-primary/5 rounded-lg">
                                <Paperclip className="w-3.5 h-3.5 text-primary/20" />
                                <span className="text-[9px] font-black text-primary/20 uppercase tracking-widest">Attached: 2 Files</span>
                             </div>
                          </div>
                       </div>

                       <div className="flex flex-col items-end gap-3 min-w-[150px]">
                          <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border shadow-sm ${
                             hw.status === 'Pending' ? 'bg-accent/10 text-accent border-accent/20 animate-pulse' : 
                             hw.status === 'Submitted' ? 'bg-primary/5 text-primary border-primary/10 shadow-inner' : 'bg-primary text-white border-primary'
                          }`}>
                             {hw.status}
                          </span>
                          <button className="flex items-center gap-2 py-3 px-6 bg-cream border border-primary/5 text-primary rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm">
                             Open Details
                          </button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Sidebar: Urgent Tasks & Progress */}
           <div className="xl:col-span-4 space-y-12">
              
              {/* Highlighted Urgent Section */}
              <div className="bg-primary p-12 rounded-4xl text-white relative overflow-hidden group shadow-2xl shadow-primary/20">
                 <div className="absolute top-0 right-0 p-8 transform translate-x-8 -translate-y-8 opacity-20 pointer-events-none group-hover:scale-110 transition-all duration-700">
                    <Hourglass className="w-48 h-48" />
                 </div>
                 
                 <div className="relative z-10 space-y-10">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shadow-inner">
                          <Clock className="w-5 h-5 text-accent" />
                       </div>
                       <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em] font-serif">Urgent Notice</span>
                    </div>
                    
                    <div className="space-y-4">
                       <h5 className="text-2xl font-serif font-bold italic leading-tight">Hifz Revision - Due Tomorrow</h5>
                       <p className="text-xs font-medium text-white/40 leading-relaxed uppercase tracking-widest font-sans">Assignment #84 / Surah Al-Imran</p>
                    </div>

                    <p className="text-xs text-white/60 font-medium leading-[1.8] italic font-serif">"Ensure Juz 14 Tajweed rules are applied in the verse recitation. Late submissions will affect monthly score."</p>

                    <button className="w-full py-5 bg-white hover:bg-accent text-primary hover:text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-black/10">
                       Submit Assignment Now
                    </button>
                 </div>
              </div>

              {/* Progress Tracker Card */}
              <div className="bg-white border border-beige/10 shadow-soft p-10 rounded-4xl space-y-10">
                 <div className="flex justify-between items-center pb-4 border-b border-primary/5">
                    <h5 className="text-xl font-serif font-black text-primary">Homework Tracker</h5>
                    <div className="w-10 h-10 bg-primary/5 rounded-2xl flex items-center justify-center text-accent shadow-sm"><TrendingUp className="w-5 h-5" /></div>
                 </div>
                 
                 <div className="space-y-8 relative z-10">
                    {[
                      { label: "Submitted Tasks", val: "92%", color: "bg-primary" },
                      { label: "Revision Rate", val: "88%", color: "bg-accent" },
                      { label: "Average Grade", val: "A+", color: "bg-primary-dark" },
                    ].map((track, t) => (
                       <div key={t} className="space-y-3 cursor-default group hover:-translate-y-1 transition-all">
                          <div className="flex justify-between items-end">
                             <p className="text-[10px] font-black text-primary/30 uppercase tracking-widest">{track.label}</p>
                             <p className="text-sm font-serif font-black text-primary group-hover:text-accent transition-colors">{track.val}</p>
                          </div>
                          <div className="w-full h-2 bg-primary/5 rounded-full overflow-hidden shadow-inner">
                             <div className={`h-full ${track.color} rounded-full transition-all duration-1000 group-hover:shadow-[0_0_15px_rgba(212,169,90,0.4)]`} style={{ width: t === 0 ? '92%' : t === 1 ? '88%' : '100%' }}></div>
                          </div>
                       </div>
                    ))}
                 </div>
                 
                 <div className="space-y-4 pt-4">
                    <h6 className="text-[10px] font-black text-primary/30 uppercase tracking-[0.3em] font-serif">Teacher’s General Note</h6>
                    <p className="text-xs text-primary/50 font-medium italic leading-relaxed border-l-2 border-accent/20 pl-4 group-hover:border-accent transition-all duration-500">
                       "Mustafa, your written work in Urdu is improving. Focus on Arabic calligraphic strokes this week."
                    </p>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}


