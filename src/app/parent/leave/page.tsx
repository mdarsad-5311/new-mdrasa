"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { PARENT_SIDEBAR_ITEMS } from "@/lib/constants";
import { CalendarDays, Clock, CheckCircle, XCircle, AlertCircle, FilePlus, ChevronRight, History, MessageSquare, Download, GraduationCap } from "lucide-react";
import { useState } from "react";

export default function LeaveRequestPage() {
  const previousRequests = [
    { id: "LR-102", type: "Sick Leave", duration: "Mar 05 - Mar 07", status: "Approved", reason: "Viral fever and doctor-prescribed rest.", date: "Mar 04, 2026" },
    { id: "LR-094", type: "Family Event", duration: "Feb 10 - Feb 12", status: "Approved", reason: "Attending a family wedding in another city.", date: "Feb 08, 2026" }
  ];

  return (
    <DashboardLayout 
      role="parent" 
      sidebarItems={PARENT_SIDEBAR_ITEMS}
      userProfile={{ name: "Mustafa's Parent", roleName: "Parent", avatar: "" }}
    >
      <div className="space-y-12 max-w-7xl animate-in slide-in-from-right-12 duration-700">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-border pb-12">
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-[0.4rem] text-accent uppercase font-sans">ABSENCE MANAGEMENT</span>
            <h1 className="text-5xl font-serif font-bold text-primary leading-tight">Leave Requests</h1>
            <p className="text-sage text-sm font-medium tracking-widest uppercase">
              RECIPIENT: <span className="text-primary font-bold">MUSTAFA AHMED</span> | RECORDS: <span className="text-primary font-bold">02 HISTORY</span>
            </p>
          </div>
          
          <button className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full shadow-premium hover:shadow-pill transition-all text-[10px] font-bold uppercase tracking-widest active:scale-95">
             <FilePlus className="w-4 h-4 text-accent" /> VIEW LEAVE POLICY
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
           {/* Form Section */}
           <div className="xl:col-span-2 bg-white p-10 rounded-4xl shadow-soft border border-border space-y-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
              
              <div className="space-y-4">
                 <h2 className="text-3xl font-serif font-bold text-primary flex items-center gap-4 border-b border-background pb-6">
                   <CalendarDays className="w-8 h-8 text-accent" /> Submit Application
                 </h2>
                 <p className="text-sm font-medium text-sage italic leading-relaxed max-w-2xl">
                    Please provide the reason and duration for your child's leave. Approval is subject to academic requirements and previous attendance records.
                 </p>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                 <div className="space-y-3">
                    <label className="text-[9px] font-black text-sage tracking-[0.2em] uppercase ml-1">LEAVE TYPE</label>
                    <select className="w-full h-14 px-6 bg-background border border-border rounded-2xl outline-none focus:border-accent transition-all font-bold text-primary text-sm appearance-none">
                       <option>Sick Leave</option>
                       <option>Family Emergency</option>
                       <option>Personal Reason</option>
                       <option>Other</option>
                    </select>
                 </div>

                 <div className="space-y-3">
                    <label className="text-[9px] font-black text-sage tracking-[0.2em] uppercase ml-1">ATTACH DOCUMENT (OPTIONAL)</label>
                    <div className="w-full h-14 px-6 bg-background border-2 border-dashed border-border rounded-2xl flex items-center gap-3 text-sage font-bold text-xs uppercase tracking-widest cursor-pointer hover:border-accent transition-colors">
                       <Download className="w-4 h-4 text-accent" /> Click to upload
                    </div>
                 </div>

                 <div className="space-y-3">
                    <label className="text-[9px] font-black text-sage tracking-[0.2em] uppercase ml-1">START DATE</label>
                    <input type="date" className="w-full h-14 px-6 bg-background border border-border rounded-2xl outline-none focus:border-accent transition-all font-bold text-primary text-sm" />
                 </div>

                 <div className="space-y-3">
                    <label className="text-[9px] font-black text-sage tracking-[0.2em] uppercase ml-1">END DATE</label>
                    <input type="date" className="w-full h-14 px-6 bg-background border border-border rounded-2xl outline-none focus:border-accent transition-all font-bold text-primary text-sm" />
                 </div>

                 <div className="space-y-3 md:col-span-2">
                    <label className="text-[9px] font-black text-sage tracking-[0.2em] uppercase ml-1">REASON FOR ABSENCE</label>
                    <textarea rows={4} className="w-full p-6 bg-background border border-border rounded-4xl outline-none focus:border-accent transition-all font-bold text-primary text-sm placeholder:italic placeholder:font-medium" placeholder="Explain briefly why the student will be away..."></textarea>
                 </div>

                 <div className="md:col-span-2 pt-4">
                    <button type="submit" className="w-full py-6 bg-primary text-white rounded-4xl font-bold text-[11px] uppercase tracking-[0.3em] shadow-premium hover:shadow-pill hover:translate-y-[-2px] active:scale-95 transition-all flex items-center justify-center gap-4">
                       <GraduationCap className="w-5 h-5 text-accent" /> SUBMIT APPLICATION FOR REVIEW
                    </button>
                    <p className="text-center text-[9px] font-bold text-sage uppercase tracking-widest mt-6 italic underline decoration-accent decoration-2 underline-offset-4">Processing time: 24-48 Business Hours</p>
                 </div>
              </form>
           </div>

           {/* Previous Requests History */}
           <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-border pb-6">
                 <h2 className="text-2xl font-serif font-bold text-primary">Archives</h2>
                 <History className="w-5 h-5 text-accent" />
              </div>

              <div className="space-y-6">
                 {previousRequests.map((req, idx) => (
                   <div key={idx} className="bg-white p-8 rounded-4xl border border-border shadow-soft group hover:border-accent transition-all">
                      <div className="flex justify-between items-start mb-6">
                         <div className="space-y-1">
                            <span className="text-[9px] font-black text-accent uppercase tracking-widest">{req.type}</span>
                            <h6 className="text-lg font-serif font-bold text-primary leading-none italic">{req.duration}</h6>
                            <p className="text-[10px] font-medium text-sage leading-none mt-1">SENT: {req.date} | ID: {req.id}</p>
                         </div>
                         <div className={`p-2 rounded-xl bg-primary/5 text-primary`}>
                            <CheckCircle className="w-4 h-4" />
                         </div>
                      </div>
                      <p className="text-xs font-medium text-primary/70 leading-relaxed italic border-l-4 border-background pl-4">
                         "{req.reason}"
                      </p>
                      <div className="pt-6 mt-6 border-t border-background flex justify-between items-center">
                         <span className="text-[9px] font-black text-primary px-3 py-1 rounded-full bg-primary/10 tracking-[0.2em]">{req.status}</span>
                         <button className="text-[9px] font-black text-sage hover:text-accent transition-colors uppercase tracking-widest border-b border-sage/20">VIEW DETAILS</button>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="bg-accent p-10 rounded-4xl shadow-soft text-primary space-y-6">
                 <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center border border-primary/10">
                    <MessageSquare className="w-6 h-6 border-primary text-primary" />
                 </div>
                 <h4 className="text-xl font-serif font-bold">Policy Reminder</h4>
                 <p className="text-xs font-medium leading-relaxed opacity-70 italic">Minimum attendance requirement is 75% for mid-term eligibility. Ensure all leaves are documented.</p>
              </div>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}


