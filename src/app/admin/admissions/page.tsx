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
  MoreVertical, 
  Eye, 
  CheckCircle2, 
  XCircle, 
  ChevronRight,
  TrendingUp,
  Clock,
  Plus,
  FileText,
  AlertCircle
} from "lucide-react";

export default function AdmissionsPage() {
  const [activeStatus, setActiveStatus] = useState("all");

  const admissionStats = [
    { label: "TOTAL APPLICATIONS", value: "128", count: "Session 26", up: true, icon: FileText, color: "bg-white" },
    { label: "PENDING REVIEW", value: "14", count: "Action Needs", up: false, icon: Clock, color: "bg-primary text-white" },
    { label: "APPROVED", value: "86", count: "Admitted", up: true, icon: CheckCircle2, color: "bg-white" },
    { label: "REJECTED", value: "08", count: "Withdrawn", up: false, icon: XCircle, color: "bg-accent text-primary" },
  ];

  const applications = [
    { id: 1, name: "Ali Abbas", parent: "Abbas Ali", contact: "+91 99988 77766", class: "Hifz-ul-Quran", date: "Mar 24, 2024", status: "Pending" },
    { id: 2, name: "Sara Noor", parent: "Umar Farooq", contact: "+91 98765 12345", class: "Nazra Quran", date: "Mar 22, 2024", status: "Approved" },
    { id: 3, name: "Hassan Raza", parent: "Khalid Raza", contact: "+91 88877 66655", class: "Class 03-B", date: "Mar 20, 2024", status: "Processing" },
    { id: 4, name: "Zainab Bi", parent: "Mohd Ashraf", contact: "+91 77766 55544", class: "Islamic Studies", date: "Mar 18, 2024", status: "Under Review" },
    { id: 5, name: "Omar Khalid", parent: "Khalid Aziz", contact: "+91 66655 44433", class: "Hifz Quran", date: "Mar 15, 2024", status: "Rejected" },
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
              <h1 className="text-6xl font-serif font-bold text-primary leading-tight tracking-tight">Admissions</h1>
              <p className="text-sage font-black text-[11px] tracking-[0.2em] uppercase opacity-60 italic">Manage new student applications and admission requests</p>
           </div>
           
           <div className="flex gap-5 pb-2">
              <button className="flex items-center gap-3 bg-white border border-border/40 text-primary px-10 py-5 rounded-full font-bold shadow-soft hover:shadow-premium transition-all active:scale-95 group">
                 <AlertCircle className="w-5 h-5 text-accent" />
                 <span className="text-[11px] font-black uppercase tracking-widest leading-none">Review Requests</span>
              </button>
              <button className="flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold shadow-premium hover:shadow-pill transition-all active:scale-95 group">
                 <Plus className="w-5 h-5 text-accent" />
                 <span className="text-[11px] font-black uppercase tracking-widest leading-none">Add Admission</span>
              </button>
           </div>
        </div>

        {/* Admissions Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 pt-4">
           {[
             { label: "TOTAL APPLICATIONS", value: "128", count: "+12%", up: true, icon: FileText, color: "bg-white", text: "text-primary" },
             { label: "PENDING REVIEW", value: "14", count: "Action Needs", up: false, icon: Clock, color: "bg-primary text-white", text: "text-white" },
             { label: "APPROVED", value: "86", count: "Admitted", up: true, icon: CheckCircle2, color: "bg-white", text: "text-primary" },
             { label: "REJECTED", value: "08", count: "Withdrawn", up: false, icon: XCircle, color: "bg-accent text-primary", text: "text-primary" },
           ].map((stat, i) => (
             <div key={i} className={`p-10 rounded-5xl min-h-[320px] flex flex-col justify-between group cursor-default transition-all hover:shadow-premium ${stat.color} shadow-soft border border-border/50 h-64`}>
                <div className="flex justify-between items-start">
                   <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-soft transition-transform group-hover:scale-110 border border-border/20`}>
                      <stat.icon className="w-7 h-7 text-primary" />
                   </div>
                   <div className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest bg-background/5 border border-white/10 ${stat.text === 'text-white' ? "text-white" : "text-primary"}`}>
                      {stat.count}
                   </div>
                </div>
                <div className="space-y-1">
                  <p className={`text-6xl font-serif font-bold tracking-tight leading-none ${stat.text}`}>{stat.value}</p>
                  <p className={`text-[10px] font-black uppercase tracking-[0.3em] leading-none opacity-40 mt-4 ${stat.text}`}>{stat.label}</p>
                </div>
                <div className="pt-6 border-t border-black/5 flex items-center justify-between group-hover:px-2 transition-all">
                   <span className={`text-[10px] font-bold italic opacity-40 uppercase tracking-widest ${stat.text}`}>View Full List</span>
                   <ChevronRight className={`w-4 h-4 opacity-20 group-hover:translate-x-2 ${stat.text}`} />
                </div>
             </div>
           ))}
        </div>

        {/* Filters & Table Section */}
        <div className="bg-white p-12 rounded-5xl shadow-premium border border-border/50 space-y-12">
           
           {/* Controls Bar */}
           <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
              <div className="flex items-center bg-background border border-border/40 px-8 h-16 rounded-full w-full xl:w-[450px] shadow-inner">
                 <Search className="w-5 h-5 text-sage/40" />
                 <input 
                   type="text" 
                   placeholder="Search applications by name or parent..." 
                   className="flex-1 bg-transparent border-none outline-none pl-4 text-sm font-medium text-primary placeholder:text-sage/40" 
                 />
              </div>

              <div className="flex flex-wrap items-center gap-6">
                 <div className="flex items-center gap-3 px-6 py-4 bg-background border border-border/40 rounded-full h-16">
                    <Filter className="w-4 h-4 text-accent" />
                    <select className="bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-widest text-primary cursor-pointer pr-4">
                       <option>Status: All</option>
                       <option>Pending</option>
                       <option>Review</option>
                       <option>Approved</option>
                    </select>
                 </div>
                 <div className="flex items-center gap-3 px-6 py-4 bg-background border border-border/40 rounded-full h-16">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    <select className="bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-widest text-primary cursor-pointer pr-4">
                       <option>Class Filter</option>
                       <option>Hifz Quran</option>
                       <option>Nazra Quran</option>
                       <option>Primary Class</option>
                    </select>
                 </div>
              </div>
           </div>

           {/* Applications Table */}
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="border-b border-background">
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6">Applicant Name</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6">Parent Info</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6">Applied Class</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6">App Date</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6">Status</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6 text-right">Action</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-background">
                    {applications.map((app) => (
                      <tr key={app.id} className="group hover:bg-background/20 transition-all duration-300">
                        <td className="py-8 px-6">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center font-serif font-bold text-primary text-lg border border-primary/10 shadow-sm">{app.name.charAt(0)}</div>
                              <p className="text-base font-bold text-primary leading-none group-hover:text-accent transition-colors underline decoration-transparent group-hover:decoration-accent decoration-2 underline-offset-4">{app.name}</p>
                           </div>
                        </td>
                        <td className="py-8 px-6">
                           <p className="text-sm font-bold text-primary leading-none mb-2">{app.parent}</p>
                           <p className="text-[10px] font-black text-sage tracking-widest opacity-60">{app.contact}</p>
                        </td>
                        <td className="py-8 px-6 text-sm font-black text-primary tracking-wider opacity-60 leading-none">{app.class}</td>
                        <td className="py-8 px-6 text-[10px] font-black text-primary/40 uppercase tracking-widest italic">{app.date}</td>
                        <td className="py-8 px-6">
                           <span className={`inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full border ${
                             app.status === "Approved" ? "bg-green-50 text-green-600 border-green-100" :
                             app.status === "Rejected" ? "bg-red-50 text-red-600 border-red-100" :
                             "bg-orange-50 text-orange-600 border-orange-100"
                           }`}>
                              {app.status}
                           </span>
                        </td>
                        <td className="py-8 px-6">
                           <div className="flex items-center justify-end gap-3 transition-opacity">
                              <button className="w-10 h-10 flex items-center justify-center bg-white border border-border/40 rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm group/btn" title="Review Application">
                                 <Eye className="w-4 h-4 active:scale-95" />
                              </button>
                              <button className="w-10 h-10 flex items-center justify-center bg-white border border-border/40 rounded-xl hover:bg-green-600 hover:text-white transition-all shadow-sm group/btn" title="Approve Admission">
                                 <CheckCircle2 className="w-4 h-4 active:scale-95" />
                              </button>
                              <button className="w-10 h-10 flex items-center justify-center bg-white border border-border/40 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm group/btn" title="Reject Admission">
                                 <XCircle className="w-4 h-4 active:scale-95" />
                              </button>
                           </div>
                        </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>

           {/* Pagination Mockup */}
           <div className="pt-10 border-t border-background flex justify-between items-center">
              <p className="text-[10px] font-black text-sage uppercase tracking-widest opacity-60">Showing 1 to 5 of 128 admission requests</p>
              <div className="flex gap-2">
                 <button className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-xl shadow-lg text-[10px] font-black">1</button>
                 <button className="w-10 h-10 flex items-center justify-center bg-background text-primary rounded-xl border border-border shadow-sm text-[10px] font-black hover:bg-primary hover:text-white transition-all px-2">Next Page <ChevronRight className="w-3 h-3 ml-2" /></button>
              </div>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}


