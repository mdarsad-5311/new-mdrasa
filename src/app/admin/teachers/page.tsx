"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { ADMIN_SIDEBAR_ITEMS } from "@/lib/constants";
import { 
  Users, 
  UserPlus, 
  GraduationCap, 
  Search, 
  Filter, 
  Download, 
  MoreVertical, 
  Eye, 
  Edit3, 
  Trash2, 
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  Clock,
  Plus,
  BookOpen,
  Briefcase
} from "lucide-react";

export default function ManageTeachersPage() {
  const teacherStats = [
    { label: "TOTAL TEACHERS", value: "42", count: "Academic", up: true, icon: GraduationCap, color: "bg-white" },
    { label: "ACTIVE STAFF", value: "38", count: "+2", up: true, icon: CheckCircle2, color: "bg-primary text-white" },
    { label: "NEW APPOINTMENTS", value: "05", count: "This Year", up: true, icon: UserPlus, color: "bg-white" },
    { label: "DEPARTMENTS", value: "08", count: "Categories", up: false, icon: BookOpen, color: "bg-accent text-primary" },
  ];

  const teachers = [
    { id: 1, name: "Maulana Hafiz Ahmed", subject: "Hifz-ul-Quran", phone: "+91 98765 43210", joining: "Jan 2022", status: "Active", classes: "Hifz-A, Hifz-B" },
    { id: 2, name: "Sheikh Ibrahim", subject: "Arabic Language", phone: "+91 98765 12345", joining: "Aug 2021", status: "Active", classes: "Class 03-B, 04-A" },
    { id: 3, name: "Ustadh Umar Khalid", subject: "Islamic History", phone: "+91 99988 77766", joining: "Mar 2023", status: "On Leave", classes: "Class 05-C" },
    { id: 4, name: "Mualimah Sara Bi", subject: "Nazra Quran", phone: "+91 88877 66655", joining: "Jun 2022", status: "Active", classes: "Nazra-A" },
    { id: 5, name: "Maulana Zaid Khan", subject: "Fiqh & Hadith", phone: "+91 77766 55544", joining: "Feb 2024", status: "Probation", classes: "Senior-A" },
  ];

  return (
    <DashboardLayout 
      role="admin" 
      sidebarItems={ADMIN_SIDEBAR_ITEMS}
      userProfile={{ name: "Admin Office", roleName: "Head Admin", avatar: "" }}
    >
      <div className="space-y-12 animate-in fade-in duration-700">
        
        {/* Header Summary */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
           <div className="space-y-4">
              <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">MANAGEMENT ERP HUB</span>
              <h1 className="text-6xl font-serif font-bold text-primary leading-tight tracking-tight">Manage Teachers</h1>
              <p className="text-sage font-black text-[11px] tracking-[0.2em] uppercase opacity-60 italic">Teacher profiles, assignments, and staff records</p>
           </div>
           
           <div className="flex gap-5 pb-2">
              <button className="flex items-center gap-3 bg-white border border-border/40 text-primary px-10 py-5 rounded-full font-bold shadow-soft hover:shadow-premium transition-all active:scale-95 group">
                 <Download className="w-5 h-5 text-sage" />
                 <span className="text-[11px] font-black uppercase tracking-widest leading-none">Export Staff List</span>
              </button>
              <button className="flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold shadow-premium hover:shadow-pill transition-all active:scale-95 group">
                 <Plus className="w-5 h-5 text-accent" />
                 <span className="text-[11px] font-black uppercase tracking-widest leading-none">Add Teacher</span>
              </button>
           </div>
        </div>

        {/* Teacher Stats Summary Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
           {teacherStats.map((stat, i) => (
             <div key={i} className={`p-10 rounded-5xl flex flex-col justify-between group cursor-default transition-all hover:shadow-premium ${stat.color} shadow-soft border border-border/50 h-64`}>
                <div className="flex justify-between items-start">
                   <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-background/10 backdrop-blur-sm shadow-soft transition-transform group-hover:scale-110 border border-border/20`}>
                      <stat.icon className={`w-6 h-6 ${stat.color === 'bg-white' ? "text-primary" : "text-white"}`} />
                   </div>
                   <div className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest bg-background/5 border border-white/10`}>
                      {stat.count}
                   </div>
                </div>
                <div className="space-y-1">
                  <p className="text-5xl font-serif font-bold tracking-tight leading-none">{stat.value}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] leading-none opacity-40 mt-3">{stat.label}</p>
                </div>
             </div>
           ))}
        </div>

        {/* Filters & Table Section */}
        <div className="bg-white p-12 rounded-5xl shadow-premium border border-border/40 space-y-10">
           
           {/* Controls Bar */}
           <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
              <div className="flex items-center bg-background border border-border/40 px-8 h-16 rounded-full w-full xl:w-[450px] shadow-inner">
                 <Search className="w-5 h-5 text-sage/40" />
                 <input 
                   type="text" 
                   placeholder="Search teachers by name or department..." 
                   className="flex-1 bg-transparent border-none outline-none pl-4 text-sm font-medium text-primary placeholder:text-sage/40" 
                 />
              </div>

              <div className="flex flex-wrap items-center gap-6">
                 <div className="flex items-center gap-3 px-6 py-4 bg-background border border-border/40 rounded-full h-16">
                    <Briefcase className="w-4 h-4 text-accent" />
                    <select className="bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-widest text-primary cursor-pointer pr-4">
                       <option>All Departments</option>
                       <option>Hifz Section</option>
                       <option>Language Dept</option>
                       <option>Islamic Studies</option>
                    </select>
                 </div>
                 <div className="flex items-center gap-3 px-6 py-4 bg-background border border-border/40 rounded-full h-16">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    <select className="bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-widest text-primary cursor-pointer pr-4">
                       <option>Status: All</option>
                       <option>Active</option>
                       <option>Leave</option>
                       <option>Probation</option>
                    </select>
                 </div>
              </div>
           </div>

           {/* Teachers Table */}
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="border-b border-background">
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6">Teacher Name</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6">Subject / Dept</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6">Contact info</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6">Joining Date</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6">Status</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6">Classes</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6 text-right">Action</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-background">
                    {teachers.map((teacher) => (
                      <tr key={teacher.id} className="group hover:bg-background/20 transition-all duration-300">
                        <td className="py-8 px-6">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center font-serif font-bold text-primary text-lg border border-primary/10 shadow-sm">{teacher.name.charAt(0)}</div>
                              <p className="text-base font-bold text-primary leading-none group-hover:text-accent transition-colors underline decoration-transparent group-hover:decoration-accent decoration-2 underline-offset-4">{teacher.name}</p>
                           </div>
                        </td>
                        <td className="py-8 px-6">
                           <span className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-primary/5 text-primary border border-primary/10 rounded-full">{teacher.subject}</span>
                        </td>
                        <td className="py-8 px-6 text-[11px] font-black text-sage tracking-widest opacity-60 leading-none">{teacher.phone}</td>
                        <td className="py-8 px-6 text-sm font-bold text-primary/60 italic">{teacher.joining}</td>
                        <td className="py-8 px-6">
                           <span className={`inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full border ${
                             teacher.status === "Active" ? "bg-green-50 text-green-600 border-green-100" :
                             teacher.status === "On Leave" ? "bg-orange-50 text-orange-600 border-orange-100" :
                             "bg-blue-50 text-blue-600 border-blue-100"
                           }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${
                                teacher.status === "Active" ? "bg-green-600" :
                                teacher.status === "On Leave" ? "bg-orange-600" :
                                "bg-blue-600"
                              }`}></span>
                              {teacher.status}
                           </span>
                        </td>
                        <td className="py-8 px-6 text-[10px] font-bold text-primary opacity-50 uppercase tracking-tighter">
                           {teacher.classes}
                        </td>
                        <td className="py-8 px-6">
                           <div className="flex items-center justify-end gap-3 opacity-20 group-hover:opacity-100 transition-opacity">
                              <button className="w-10 h-10 flex items-center justify-center bg-white border border-border/40 rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm"><Eye className="w-4 h-4" /></button>
                              <button className="w-10 h-10 flex items-center justify-center bg-white border border-border/40 rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm"><Edit3 className="w-4 h-4" /></button>
                              <button className="w-10 h-10 flex items-center justify-center bg-white border border-border/40 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"><Trash2 className="w-4 h-4" /></button>
                           </div>
                        </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>

           {/* Pagination Mockup */}
           <div className="pt-10 border-t border-background flex justify-between items-center">
              <p className="text-[10px] font-black text-sage uppercase tracking-widest opacity-60">Showing 1 to 5 of 42 teachers</p>
              <div className="flex gap-2">
                 <button className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-xl shadow-lg text-[10px] font-black">1</button>
                 <button className="w-10 h-10 flex items-center justify-center bg-background text-primary rounded-xl border border-border shadow-sm text-[10px] font-black hover:bg-primary hover:text-white transition-all">2</button>
                 <div className="w-10 h-10 flex items-center justify-center text-sage">...</div>
                 <button className="h-10 flex items-center justify-center bg-background text-primary rounded-xl border border-border shadow-sm text-[10px] font-black hover:bg-primary hover:text-white transition-all gap-2 px-6">
                    NEXT <ChevronRight className="w-3 h-3" />
                 </button>
              </div>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}


