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
  ChevronLeft,
  Info
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

export default function AttendancePage() {
  const attendanceData = [
    { date: "March 28, 2026", day: "Monday", status: "Present", class: "Tajweed & Recitation", remarks: "Punctual" },
    { date: "March 29, 2026", day: "Tuesday", status: "Present", class: "Urdu Grammar", remarks: "On time" },
    { date: "March 30, 2026", day: "Wednesday", status: "Leave", class: "Islamic History", remarks: "Family Event" },
    { date: "March 31, 2026", day: "Thursday", status: "Present", class: "Tajweed & Recitation", remarks: "Active Participation" },
    { date: "April 01, 2026", day: "Friday", status: "Present", class: "Friday Seminar", remarks: "Early Arrival" },
    { date: "April 02, 2026", day: "Saturday", status: "Absent", class: "Revision Class", remarks: "Unofficial" },
  ];

  const calendarDays = Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    status: i % 7 === 0 ? "Absent" : i % 15 === 0 ? "Leave" : "Present"
  }));

  return (
    <DashboardLayout 
      role="student" 
      sidebarItems={sidebarItems}
      userProfile={{ name: "Mustafa Ahmed", roleName: "Student", avatar: "" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 space-y-10 pb-20 relative">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b-2 border-primary/5">
           <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-px bg-accent"></span>
                <span className="text-accent font-sans font-bold tracking-[0.3em] uppercase text-[10px]">Academic Logs</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary leading-tight">Attendance Record</h2>
              <p className="text-primary/40 font-sans font-semibold text-sm tracking-widest uppercase">March - April 2026 Session / Level 2</p>
           </div>
           <div className="flex gap-4">
              <button className="flex items-center gap-3 bg-white border-2 border-primary/5 text-primary px-8 py-4 rounded-2xl font-bold shadow-sm hover:bg-cream hover:border-accent/20 transition-all group">
                <Download className="w-4 h-4 text-accent transition-transform group-hover:-translate-y-1" />
                Export CSV
              </button>
           </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { label: "Overall Attendance", value: "94.5%", icon: TrendingUp, color: "bg-primary text-white", sub: "Month Average", trend: "+2.5%" },
             { label: "Present Days", value: "24", icon: CheckCircle2, color: "bg-white", sub: "Out of 26", trend: "Normal" },
             { label: "Absent Days", value: "01", icon: Calendar, color: "bg-white", sub: "Total this month", trend: "Decreased" },
             { label: "Leave Days", value: "01", icon: Info, color: "bg-white", sub: "Approved", trend: "Medical" },
           ].map((stat, i) => (
             <div key={i} className={`p-8 rounded-4xl shadow-soft border border-beige/10 space-y-6 flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-2 transition-all ${stat.color} cursor-default`}>
                <div className="flex justify-between items-center">
                   <div className={`w-14 h-14 ${i === 0 ? 'bg-white/10' : 'bg-primary/5'} rounded-2xl flex items-center justify-center transition-all group-hover:scale-110`}>
                      <stat.icon className={`w-6 h-6 ${i === 0 ? 'text-accent' : 'text-primary'}`} />
                   </div>
                   <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${i === 0 ? 'bg-white/20 text-white' : 'bg-accent/10 text-accent'}`}>{stat.trend}</span>
                </div>
                <div className="space-y-1">
                   <p className="text-4xl md:text-5xl font-serif font-black tracking-tight leading-none">{stat.value}</p>
                   <p className={`text-[10px] font-sans font-black uppercase tracking-[0.2em] ${i === 0 ? 'text-white/60' : 'text-primary/30'}`}>{stat.label}</p>
                </div>
                <div className={`pt-4 border-t ${i === 0 ? 'border-white/10' : 'border-primary/5'} flex items-center justify-between`}>
                   <span className={`text-[10px] font-bold italic ${i === 0 ? 'text-white/40' : 'text-primary/30'}`}>{stat.sub}</span>
                </div>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 pt-4">
           {/* Attendance Table */}
           <div className="xl:col-span-8 space-y-8">
              <div className="flex justify-between items-center pb-4 border-b border-primary/5">
                 <h4 className="text-3xl font-serif font-bold text-primary">Attendance History</h4>
                 <div className="flex gap-2">
                    {["Present", "Absent", "Leave"].map((f) => (
                       <button key={f} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-primary/5 hover:bg-primary hover:text-white transition-all">{f}</button>
                    ))}
                 </div>
              </div>
              
              <div className="bg-white rounded-3xl shadow-soft border border-beige/10 overflow-hidden">
                 <table className="w-full text-left border-collapse">
                    <thead className="bg-primary/5 text-[10px] font-black uppercase tracking-widest text-primary/40 border-b border-primary/5">
                       <tr>
                          <th className="px-8 py-5">Date / Day</th>
                          <th className="px-8 py-5">Subject/Class</th>
                          <th className="px-8 py-5">Status</th>
                          <th className="px-8 py-5">Remarks</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/5">
                       {attendanceData.map((row, idx) => (
                          <tr key={idx} className="group hover:bg-cream/30 transition-colors">
                             <td className="px-8 py-6">
                                <div className="space-y-1">
                                   <p className="text-sm font-sans font-bold text-primary">{row.date}</p>
                                   <p className="text-[10px] font-sans font-bold text-primary/40 uppercase tracking-widest">{row.day}</p>
                                </div>
                             </td>
                             <td className="px-8 py-6">
                                <p className="text-sm font-serif font-bold text-primary">{row.class}</p>
                             </td>
                             <td className="px-8 py-6">
                                <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border shadow-sm ${
                                   row.status === "Present" 
                                   ? "bg-primary text-white border-primary shadow-primary/20" 
                                   : row.status === "Leave" 
                                   ? "bg-accent/10 border-accent/20 text-accent" 
                                   : "bg-red-500/5 border-red-500/20 text-red-500"
                                }`}>
                                   {row.status}
                                </span>
                             </td>
                             <td className="px-8 py-6 italic text-xs text-primary/40 font-medium">
                                "{row.remarks}"
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>

           {/* Calendar Widget & Trends */}
           <div className="xl:col-span-4 space-y-12">
              
              {/* Monthly Visualizer */}
              <div className="bg-white p-10 rounded-4xl shadow-soft border border-beige/10 space-y-8">
                 <div className="flex justify-between items-center">
                    <button className="p-2 bg-primary/5 rounded-xl text-primary/40 hover:text-primary transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                    <h5 className="font-serif font-black text-xl text-primary leading-tight">March 2026</h5>
                    <button className="p-2 bg-primary/5 rounded-xl text-primary/40 hover:text-primary transition-colors rotate-180"><ChevronLeft className="w-5 h-5" /></button>
                 </div>
                 
                 <div className="grid grid-cols-7 gap-3">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                       <div key={d} className="text-[9px] font-black text-primary/20 text-center uppercase tracking-widest pb-3">{d}</div>
                    ))}
                    {calendarDays.map((date) => (
                       <div 
                          key={date.day} 
                          className={`aspect-square rounded-xl flex items-center justify-center text-xs font-bold transition-all cursor-pointer relative group/day ${
                             date.status === "Present" 
                             ? "bg-primary/5 text-primary hover:bg-primary hover:text-white" 
                             : date.status === "Leave" 
                             ? "bg-accent/5 text-accent border border-accent/10" 
                             : "bg-red-500/5 text-red-500"
                          }`}
                       >
                          {date.day}
                          {date.status === "Present" && <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-primary rounded-full group-hover/day:bg-white transition-colors"></span>}
                       </div>
                    ))}
                 </div>

                 <div className="pt-6 border-t border-primary/5 flex justify-between">
                    <div className="flex items-center gap-2">
                       <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                       <span className="text-[9px] font-black text-primary/30 uppercase tracking-widest">Present</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-2.5 h-2.5 bg-accent rounded-full"></div>
                       <span className="text-[9px] font-black text-primary/30 uppercase tracking-widest">Leave</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                       <span className="text-[9px] font-black text-primary/30 uppercase tracking-widest">Absent</span>
                    </div>
                 </div>
              </div>

              {/* Weekly Analytics Box */}
              <div className="bg-primary-dark p-10 rounded-4xl text-white space-y-8 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 transform translate-x-8 -translate-y-8 opacity-10 pointer-events-none transition-transform group-hover:scale-110">
                    <Award className="w-40 h-40" />
                 </div>
                 
                 <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-accent" />
                       </div>
                       <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em]">Consistency Report</span>
                    </div>
                    
                    <div className="space-y-4">
                       <p className="text-sm font-medium text-white/60 font-serif leading-relaxed italic">"Your attendance is excellent, Mustafa. Consistent kehadiran like this is the foundation of hifz mastery."</p>
                       <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="w-[94%] h-full bg-accent rounded-full animate-pulse transition-all"></div>
                       </div>
                    </div>
                    
                    <button className="w-full py-4 bg-white/10 hover:bg-white text-white hover:text-primary transition-all rounded-2xl font-bold text-[10px] uppercase tracking-widest border border-white/20">
                       Improve consistency this week
                    </button>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}


