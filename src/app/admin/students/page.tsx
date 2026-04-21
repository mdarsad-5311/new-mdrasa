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
  Plus
} from "lucide-react";

export default function ManageStudentsPage() {
  const [activeStatus, setActiveStatus] = useState("all");

  const studentStats = [
    { label: "TOTAL STUDENTS", value: "842", count: "+12%", up: true, icon: Users, color: "bg-white" },
    { label: "ACTIVE STUDENTS", value: "798", count: "+5%", up: true, icon: CheckCircle2, color: "bg-primary text-white" },
    { label: "NEW THIS MONTH", value: "32", count: "+8", up: true, icon: UserPlus, color: "bg-white" },
    { label: "GRADUATED", value: "124", count: "Total", up: false, icon: GraduationCap, color: "bg-accent text-primary" },
  ];

  const students = [
    { id: 1, name: "Mustafa Ahmed", roll: "2024-001", class: "Hifz-A", guardian: "Mohammed Ahmed", phone: "+91 98765 43210", status: "Active" },
    { id: 2, name: "Sara Noor", roll: "2024-042", class: "Class 03-B", guardian: "Umar Farooq", phone: "+91 98765 12345", status: "Active" },
    { id: 3, name: "Ali Abbas", roll: "2024-085", class: "Hifz-B", guardian: "Abbas Ali", phone: "+91 99988 77766", status: "On Leave" },
    { id: 4, name: "Hassan Raza", roll: "2024-112", class: "Nazra-A", guardian: "Khalid Raza", phone: "+91 88877 66655", status: "Inactive" },
    { id: 5, name: "Zainab Bi", roll: "2024-156", class: "Class 05-C", guardian: "Mohd Ashraf", phone: "+91 77766 55544", status: "Active" },
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
              <h1 className="text-6xl font-serif font-bold text-primary leading-tight tracking-tight">Manage Students</h1>
              <p className="text-sage font-black text-[11px] tracking-[0.2em] uppercase opacity-60 italic">Student records, profiles, and enrollment management</p>
           </div>
           
           <div className="flex gap-5 pb-2">
              <button className="flex items-center gap-3 bg-white border border-border/40 text-primary px-10 py-5 rounded-full font-bold shadow-soft hover:shadow-premium transition-all active:scale-95 group">
                 <Download className="w-5 h-5 text-sage" />
                 <span className="text-[11px] font-black uppercase tracking-widest leading-none">Export List</span>
              </button>
              <button className="flex items-center gap-3 bg-accent text-primary px-10 py-5 rounded-full font-bold shadow-premium hover:shadow-pill transition-all active:scale-95 group">
                 <Plus className="w-5 h-5" />
                 <span className="text-[11px] font-black uppercase tracking-widest leading-none">Add Student</span>
              </button>
           </div>
        </div>

        {/* Student Stats Summary Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
           {studentStats.map((stat, i) => (
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
                   placeholder="Search students by name or roll number..." 
                   className="flex-1 bg-transparent border-none outline-none pl-4 text-sm font-medium text-primary placeholder:text-sage/40" 
                 />
              </div>

              <div className="flex flex-wrap items-center gap-6">
                 <div className="flex items-center gap-3 px-6 py-4 bg-background border border-border/40 rounded-full h-16">
                    <Filter className="w-4 h-4 text-accent" />
                    <select className="bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-widest text-primary cursor-pointer pr-4">
                       <option>All Classes</option>
                       <option>Hifz Section</option>
                       <option>Class 1 - 5</option>
                    </select>
                 </div>
                 <div className="flex items-center gap-3 px-6 py-4 bg-background border border-border/40 rounded-full h-16">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    <select className="bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-widest text-primary cursor-pointer pr-4">
                       <option>Status: All</option>
                       <option>Active Only</option>
                       <option>On Leave</option>
                    </select>
                 </div>
              </div>
           </div>

           {/* Students Table */}
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="border-b border-background">
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6">Student Name</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6">Roll Number</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6">Class</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6">Guardian / Mobile</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6">Status</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6 text-right">Action</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-background">
                    {students.map((std) => (
                      <tr key={std.id} className="group hover:bg-background/20 transition-all duration-300">
                        <td className="py-8 px-6">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center font-serif font-bold text-primary text-lg border border-primary/10 shadow-sm">{std.name.charAt(0)}</div>
                              <p className="text-base font-bold text-primary leading-none group-hover:text-accent transition-colors underline decoration-transparent group-hover:decoration-accent decoration-2 underline-offset-4">{std.name}</p>
                           </div>
                        </td>
                        <td className="py-8 px-6 text-sm font-black text-primary tracking-wider opacity-60 leading-none">{std.roll}</td>
                        <td className="py-8 px-6">
                           <span className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-accent/10 text-primary border border-accent/20 rounded-full">{std.class}</span>
                        </td>
                        <td className="py-8 px-6">
                           <p className="text-sm font-bold text-primary leading-none mb-2">{std.guardian}</p>
                           <p className="text-[10px] font-black text-sage tracking-widest opacity-60">{std.phone}</p>
                        </td>
                        <td className="py-8 px-6">
                           <span className={`inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full border ${
                             std.status === "Active" ? "bg-green-50 text-green-600 border-green-100" :
                             std.status === "On Leave" ? "bg-orange-50 text-orange-600 border-orange-100" :
                             "bg-red-50 text-red-600 border-red-100"
                           }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${
                                std.status === "Active" ? "bg-green-600" :
                                std.status === "On Leave" ? "bg-orange-600" :
                                "bg-red-600"
                              }`}></span>
                              {std.status}
                           </span>
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
              <p className="text-[10px] font-black text-sage uppercase tracking-widest opacity-60">Showing 1 to 5 of 842 students</p>
              <div className="flex gap-2">
                 <button className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-xl shadow-lg text-[10px] font-black">1</button>
                 <button className="w-10 h-10 flex items-center justify-center bg-background text-primary rounded-xl border border-border shadow-sm text-[10px] font-black hover:bg-primary hover:text-white transition-all">2</button>
                 <button className="w-10 h-10 flex items-center justify-center bg-background text-primary rounded-xl border border-border shadow-sm text-[10px] font-black hover:bg-primary hover:text-white transition-all">3</button>
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


