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
  MapPin,
  Coffee,
  Bookmark
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

export default function TimetablePage() {
  const weeklyTimetable = [
    { time: "08:00 - 09:30", mon: "Hifz Quran", tue: "Tajweed-ul-Quran", wed: "Hifz Quran", thu: "Urdu Literature", fri: "Friday Seminar", sat: "Revision" },
    { time: "09:30 - 10:00", mon: "Break", tue: "Break", wed: "Break", thu: "Break", fri: "Break", sat: "Break" },
    { time: "10:00 - 11:30", mon: "Arabic Lang", tue: "Hifz Quran", wed: "Arabic Lang", thu: "Hifz Quran", fri: "Hifz Quran", sat: "Hifz Quran" },
    { time: "11:30 - 12:30", mon: "Islamic Studies", tue: "Urdu Grammar", wed: "Islamic Studies", thu: "Arabic Lang", fri: "Revision", sat: "Weekly Test" },
  ];

  const todaySchedule = [
    { time: "08:00 AM", subject: "Tajweed & Recitation", teacher: "Maulana Ahmed", status: "Completed" },
    { time: "10:30 AM", subject: "Urdu Literature", teacher: "Ustad Saleem", status: "Ongoing" },
    { time: "02:00 PM", subject: "Islamic History", teacher: "Hafiz Bilal", status: "Next" },
  ];

  return (
    <DashboardLayout 
      role="student" 
      sidebarItems={sidebarItems}
      userProfile={{ name: "Mustafa Ahmed", roleName: "Student", avatar: "" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 space-y-12 pb-20 relative">
        
        {/* Header Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b-2 border-primary/5">
           <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-px bg-accent"></span>
                <span className="text-accent font-sans font-bold tracking-[0.3em] uppercase text-[10px]">Academic Scheduling</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">Class Timetable</h2>
              <p className="text-primary/40 font-sans font-semibold text-sm tracking-widest uppercase">Weekly Session Schedule / March - April</p>
           </div>
           <div className="flex gap-4">
              <button className="flex items-center gap-3 bg-white border-2 border-primary/5 text-primary px-8 py-4 rounded-2xl font-bold shadow-sm hover:bg-cream hover:border-accent/20 transition-all group">
                <Download className="w-4 h-4 text-accent" />
                Download PDF
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 pt-4">
           {/* Weekly Timetable Table */}
           <div className="xl:col-span-12 space-y-8">
              <div className="flex justify-between items-center pb-4 border-b border-primary/5 px-2">
                 <h4 className="text-3xl font-serif font-black text-primary italic">Weekly Outlook</h4>
                 <div className="hidden md:flex gap-4">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                       <button key={day} className="text-[10px] font-black uppercase tracking-widest border border-primary/5 px-6 py-2 rounded-xl text-primary/40 hover:bg-primary hover:text-white transition-all">{day}</button>
                    ))}
                 </div>
              </div>
              
              <div className="bg-white rounded-4xl shadow-soft border border-beige/10 overflow-hidden overflow-x-auto">
                 <table className="w-full text-center border-collapse min-w-[1000px]">
                    <thead className="bg-primary/5 text-[10px] font-black uppercase tracking-widest text-primary/40 border-b border-primary/5">
                       <tr>
                          <th className="px-6 py-8">Time Slot</th>
                          <th className="px-6 py-8">Monday</th>
                          <th className="px-8 py-8 border-x border-primary/5 bg-primary/2 shadow-inner">Tuesday (Today)</th>
                          <th className="px-6 py-8">Wednesday</th>
                          <th className="px-6 py-8">Thursday</th>
                          <th className="px-6 py-8">Friday</th>
                          <th className="px-6 py-8">Saturday</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/5">
                       {weeklyTimetable.map((slot, s) => (
                          <tr key={s} className="group hover:bg-cream/20 transition-all">
                             <td className="px-6 py-10 bg-primary/2 rounded-l-4xl">
                                <p className="text-sm font-sans font-black text-primary/40 uppercase tracking-widest">{slot.time}</p>
                             </td>
                             <td className="px-6 py-10">
                                <p className={`text-md font-serif font-bold ${slot.mon === 'Break' ? 'text-accent opacity-40 italic' : 'text-primary'}`}>{slot.mon}</p>
                             </td>
                             <td className="px-8 py-10 border-x border-primary/5 bg-primary/2">
                                <p className={`text-md font-serif font-bold ${slot.tue === 'Break' ? 'text-accent opacity-40 italic' : 'text-primary animate-pulse'}`}>{slot.tue}</p>
                             </td>
                             <td className="px-6 py-10">
                                <p className={`text-md font-serif font-bold ${slot.wed === 'Break' ? 'text-accent opacity-40 italic' : 'text-primary'}`}>{slot.wed}</p>
                             </td>
                             <td className="px-6 py-10">
                                <p className={`text-md font-serif font-bold ${slot.thu === 'Break' ? 'text-accent opacity-40 italic' : 'text-primary'}`}>{slot.thu}</p>
                             </td>
                             <td className="px-6 py-10">
                                <p className={`text-md font-serif font-bold ${slot.fri === 'Break' ? 'text-accent opacity-40 italic' : 'text-primary'}`}>{slot.fri}</p>
                             </td>
                             <td className="px-6 py-10">
                                <p className={`text-md font-serif font-bold ${slot.sat === 'Break' ? 'text-accent opacity-40 italic' : 'text-primary'}`}>{slot.sat}</p>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>

           {/* Today's Classes Card */}
           <div className="xl:col-span-5 space-y-8 h-full">
              <div className="bg-white border border-beige/10 shadow-soft p-12 rounded-4xl space-y-10 group h-full">
                 <div className="flex justify-between items-center pb-6 border-b border-primary/5">
                    <h5 className="text-3xl font-serif font-black text-primary">Today’s Schedule</h5>
                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-accent"><Calendar className="w-6 h-6" /></div>
                 </div>
                 
                 <div className="space-y-10">
                    {todaySchedule.map((cls, c) => (
                       <div key={c} className="flex items-start gap-8 group cursor-default relative pl-6 border-l-2 border-primary/5 hover:border-accent transition-all duration-500">
                          <div className={`absolute -left-1 top-1 w-2 h-2 rounded-full ${cls.status === 'Ongoing' ? 'bg-accent shadow-lg shadow-accent/40 animate-ping' : 'bg-primary'}`}></div>
                          <div className="space-y-1">
                             <p className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em]">{cls.time}</p>
                             <h6 className="text-xl font-serif font-black text-primary group-hover:text-accent transition-colors">{cls.subject}</h6>
                             <p className="text-xs font-bold text-primary/40 uppercase tracking-widest flex items-center gap-2">
                                <User className="w-3.5 h-3.5 text-accent/50" /> {cls.teacher}
                             </p>
                          </div>
                          <div className="ml-auto flex flex-col items-end gap-2">
                             <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full ${
                                cls.status === 'Ongoing' ? 'bg-accent/10 border border-accent/20 text-accent animate-pulse' : 'bg-primary/5 text-primary/40'
                             }`}>
                                {cls.status}
                             </span>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Quick Stats Sidebar (Next class, break time, etc.) */}
           <div className="xl:col-span-7 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* Next Class Highlight */}
                 <div className="bg-primary p-10 rounded-4xl text-white relative overflow-hidden group shadow-2xl shadow-primary/20">
                    <div className="absolute top-0 right-0 p-8 transform translate-x-8 -translate-y-8 opacity-20 transition-transform group-hover:scale-110">
                       <Clock className="w-32 h-32" />
                    </div>
                    <div className="relative z-10 space-y-8">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                             <Bookmark className="w-5 h-5 text-accent" />
                          </div>
                          <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em] font-serif">Quick Highight</span>
                       </div>
                       <div className="space-y-2">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 opacity-40">Next Class Starting at 02:00 PM</p>
                          <h5 className="text-3xl font-serif font-bold italic text-white/90">Islamic History</h5>
                       </div>
                       <p className="text-sm font-medium text-white/40 leading-relaxed italic">Prep: "Early Muslim Civilization - Ch. 4"</p>
                    </div>
                 </div>

                 {/* Break Time Highlight */}
                 <div className="bg-cream border border-primary/5 p-10 rounded-4xl flex items-center gap-8 group hover:shadow-soft transition-all">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-accent/10">
                       <Coffee className="w-8 h-8 text-accent" />
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em]">Break Time</p>
                       <h5 className="text-2xl font-serif font-black text-primary">09:30 AM - 10:00 AM</h5>
                       <p className="text-xs text-primary/60 font-medium">Relax & Rejuvenate / Assembly Hall</p>
                    </div>
                 </div>
              </div>

              {/* Class Timeline Tracker */}
              <div className="bg-white border border-beige/10 shadow-soft p-10 rounded-4xl space-y-10">
                 <h5 className="text-xl font-serif font-black text-primary flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-accent" />
                    Daily Class Progress
                 </h5>
                 <div className="flex items-center gap-6">
                    <div className="flex-1 h-3 bg-primary/5 rounded-full overflow-hidden">
                       <div className="w-[65%] h-full bg-accent rounded-full shadow-lg shadow-accent/20"></div>
                    </div>
                    <span className="text-[10px] font-black text-primary/40 uppercase tracking-[0.3em]">65% COMPLETE</span>
                 </div>
                 <div className="grid grid-cols-3 gap-8">
                    <div className="space-y-1 border-l-2 border-primary/5 pl-4 hover:border-primary transition-all">
                       <p className="text-[9px] font-black text-primary/30 uppercase tracking-[0.2em]">Upcoming</p>
                       <p className="text-lg font-serif font-black text-primary">02</p>
                    </div>
                    <div className="space-y-1 border-l-2 border-primary/5 pl-4 hover:border-accent transition-all">
                       <p className="text-[9px] font-black text-primary/30 uppercase tracking-[0.2em]">Completed</p>
                       <p className="text-lg font-serif font-black text-primary">03</p>
                    </div>
                    <div className="space-y-1 border-l-2 border-primary/5 pl-4 hover:border-primary transition-all">
                       <p className="text-[9px] font-black text-primary/30 uppercase tracking-[0.2em]">Remaining</p>
                       <p className="text-lg font-serif font-black text-primary">01</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}


