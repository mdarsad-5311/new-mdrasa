"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { PARENT_SIDEBAR_ITEMS } from "@/lib/constants";
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle, TrendingUp, Download, ChevronLeft, ChevronRight, FileDown } from "lucide-react";
import { useState } from "react";

export default function AttendancePage() {
  const [currentMonth, setCurrentMonth] = useState("March 2026");

  const attendanceDays = [
    { date: "Mar 01", day: "Mon", status: "Present", checkIn: "08:15 AM", remarks: "Punctual" },
    { date: "Mar 02", day: "Tue", status: "Present", checkIn: "08:20 AM", remarks: "On time" },
    { date: "Mar 03", day: "Wed", status: "Late", checkIn: "09:05 AM", remarks: "Traffic delay" },
    { date: "Mar 04", day: "Thu", status: "Present", checkIn: "08:10 AM", remarks: "Early Arrival" },
    { date: "Mar 05", day: "Fri", status: "Absent", checkIn: "-", remarks: "Sick Leave" },
    { date: "Mar 08", day: "Mon", status: "Present", checkIn: "08:25 AM", remarks: "On time" },
    { date: "Mar 09", day: "Tue", status: "Present", checkIn: "08:15 AM", remarks: "On time" },
    { date: "Mar 10", day: "Wed", status: "Leave", checkIn: "-", remarks: "Family Wedding" }
  ];

  return (
    <DashboardLayout 
      role="parent" 
      sidebarItems={PARENT_SIDEBAR_ITEMS}
      userProfile={{ name: "Mustafa's Parent", roleName: "Parent", avatar: "" }}
    >
      <div className="space-y-12 max-w-7xl animate-in slide-in-from-bottom-8 duration-700">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-[0.4em] text-sage uppercase">ATTENDANCE MODULE</span>
            <h1 className="text-5xl font-serif font-bold text-primary leading-tight">Presence Tracking</h1>
            <p className="text-sage text-sm font-medium tracking-widest uppercase">
              STUDENT: <span className="text-primary font-bold">MUSTAFA AHMED</span> | SESSION: <span className="text-primary font-bold">2025-26</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
             <button className="flex items-center gap-3 bg-white border border-border px-8 py-4 rounded-full shadow-soft hover:shadow-premium transition-all text-primary font-bold text-xs uppercase tracking-widest">
                <FileDown className="w-4 h-4 text-accent" /> EXPORT PDF REPORT
             </button>
          </div>
        </div>

        {/* Attendance Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { label: "Overall Presence", value: "94.5%", icon: TrendingUp, status: "Excellent" },
             { label: "Total Present", value: "142 Days", icon: CheckCircle, status: "March 2026" },
             { label: "Total Absent", value: "05 Days", icon: XCircle, status: "Overall" },
             { label: "Late Arrivals", value: "08 Times", icon: AlertCircle, status: "Punctuality" }
           ].map((stat, i) => (
             <div key={i} className="bg-white p-8 rounded-4xl shadow-soft border border-border flex flex-col justify-between h-48 group hover:shadow-premium transition-all">
                <div className="flex justify-between items-start">
                   <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center border border-border">
                      <stat.icon className={`w-5 h-5 ${stat.label === "Total Absent" ? "text-red-500" : "text-primary"}`} />
                   </div>
                   <span className="text-[9px] font-bold text-sage uppercase tracking-widest">{stat.status}</span>
                </div>
                <div>
                   <p className="text-3xl font-serif font-bold text-primary leading-none">{stat.value}</p>
                   <p className="text-[10px] font-bold text-sage uppercase tracking-widest mt-2">{stat.label}</p>
                </div>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
           {/* Detailed Table */}
           <div className="xl:col-span-2 bg-white p-10 rounded-4xl shadow-soft border border-border space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-6 border-b border-border">
                 <h2 className="text-3xl font-serif font-bold text-primary">Daily Logs</h2>
                 
                 <div className="flex items-center gap-4 bg-background px-6 py-2 rounded-full border border-border">
                    <ChevronLeft className="w-4 h-4 text-sage cursor-pointer hover:text-primary" />
                    <span className="text-xs font-bold text-primary uppercase tracking-widest min-w-[120px] text-center">{currentMonth}</span>
                    <ChevronRight className="w-4 h-4 text-sage cursor-pointer hover:text-primary" />
                 </div>
              </div>

              <div className="space-y-4">
                 {attendanceDays.map((log, idx) => (
                   <div key={idx} className="flex flex-col sm:flex-row justify-between items-center p-6 bg-background rounded-3xl border border-border hover:border-accent hover:bg-white transition-all group">
                      <div className="flex items-center gap-6 w-full sm:w-auto">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-border shadow-sm group-hover:scale-105 transition-transform">
                          <Calendar className={`w-5 h-5 ${log.status === "Present" ? "text-primary" : log.status === "Absent" ? "text-red-500" : "text-accent"}`} />
                        </div>
                        <div>
                           <p className="text-lg font-serif font-bold text-primary leading-none">{log.date}</p>
                           <p className="text-[10px] font-bold text-sage uppercase tracking-widest mt-1">{log.day}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-12 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-border mt-4 sm:mt-0 pt-4 sm:pt-0">
                         <div className="text-right">
                            <p className="text-sm font-bold text-primary">{log.checkIn}</p>
                            <p className="text-[10px] font-medium text-sage italic">Check-in Time</p>
                         </div>
                         <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] min-w-[100px] text-center ${
                            log.status === "Present" ? "bg-primary text-white" : 
                            log.status === "Absent" ? "bg-red-500 text-white" : 
                            "bg-accent text-primary"
                         }`}>
                           {log.status}
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Trend Preview */}
           <div className="space-y-12">
              <div className="bg-primary p-10 rounded-4xl shadow-premium text-white space-y-10 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-5">
                    <TrendingUp className="w-64 h-64 rotate-12" />
                 </div>
                 
                 <div className="space-y-2 relative z-10">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">TREND ANALYSIS</span>
                    <h2 className="text-3xl font-serif font-bold">Visibility Trend</h2>
                 </div>

                 <div className="space-y-8 relative z-10">
                    {[
                      { label: "This Month", value: 92, status: "8% Down" },
                      { label: "Last Month", value: 100, status: "Perfect" },
                      { label: "Year-to-Date", value: 96.5, status: "Consistent" }
                    ].map((row, i) => (
                      <div key={i} className="space-y-3">
                         <div className="flex justify-between items-end">
                            <span className="text-xs font-bold text-sage uppercase tracking-widest">{row.label}</span>
                            <span className="text-lg font-bold text-accent">{row.value}%</span>
                         </div>
                         <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-accent rounded-full transition-all duration-1000" style={{ width: `${row.value}%` }}></div>
                         </div>
                         <p className="text-[10px] text-sage italic">{row.status}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-accent p-10 rounded-4xl shadow-premium text-primary space-y-6">
                 <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center border border-primary/10">
                    <AlertCircle className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-serif font-bold">Quick Leave Request</h3>
                 <p className="text-sm font-medium leading-relaxed opacity-70 italic">Need to notify the Madrasa about upcoming absence?</p>
                 <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:scale-[1.02] shadow-lg transition-all active:scale-95">
                    SUBMIT REQUEST
                 </button>
              </div>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}


