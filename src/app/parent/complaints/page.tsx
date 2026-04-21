"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { PARENT_SIDEBAR_ITEMS } from "@/lib/constants";
import { AlertTriangle, Clock, CheckCircle, MessageSquare, Send, Search, HelpCircle, User, Star, ChevronDown, Paperclip } from "lucide-react";
import { useState } from "react";

export default function ComplaintsPage() {
  const previousTickets = [
    { id: "TKT-304", category: "Technical Issue", subject: "Portal Access Error", date: "Mar 11, 2026", status: "In Progress", priority: "Low" },
    { id: "TKT-301", category: "Results Issue", subject: "Math Marks Discrepancy", date: "Mar 02, 2026", status: "Resolved", priority: "High" }
  ];

  return (
    <DashboardLayout 
      role="parent" 
      sidebarItems={PARENT_SIDEBAR_ITEMS}
      userProfile={{ name: "Mustafa's Parent", roleName: "Parent", avatar: "" }}
    >
      <div className="space-y-12 max-w-7xl animate-in fade-in duration-700">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-border pb-12">
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-[0.4rem] text-accent uppercase font-sans">SUPPORT CENTER</span>
            <h1 className="text-5xl font-serif font-bold text-primary leading-tight">Queries & Tickets</h1>
            <p className="text-sage text-sm font-medium tracking-widest uppercase">
              RECIPIENT: <span className="text-primary font-bold">MUSTAFA AHMED</span> | ACTIVE TICKETS: <span className="text-primary font-bold">01 IN PROGRESS</span>
            </p>
          </div>
          
          <button className="flex items-center gap-3 bg-white border border-border px-8 py-4 rounded-full shadow-soft hover:shadow-premium transition-all text-primary font-bold text-xs uppercase tracking-widest">
             <HelpCircle className="w-4 h-4 text-accent" /> VIEW KNOWLEDGE BASE
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
           {/* Form Section */}
           <div className="xl:col-span-2 space-y-12">
              <div className="bg-white p-12 rounded-5xl shadow-soft border border-border space-y-10">
                 <div className="flex justify-between items-center pb-8 border-b border-background">
                    <h2 className="text-3xl font-serif font-bold text-primary">New Ticket</h2>
                    <Send className="w-6 h-6 text-accent" />
                 </div>

                 <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                       <label className="text-[9px] font-black text-sage tracking-[0.2em] uppercase ml-1">CATEGORY</label>
                       <select className="w-full h-14 px-6 bg-background border border-border rounded-2xl outline-none focus:border-accent transition-all font-bold text-primary text-sm appearance-none">
                          <option>Select Category</option>
                          <option>Technical Issue</option>
                          <option>Fees & Billing</option>
                          <option>Academic Result</option>
                          <option>Student Behaviour</option>
                          <option>Other</option>
                       </select>
                    </div>

                    <div className="space-y-3">
                       <label className="text-[9px] font-black text-sage tracking-[0.2em] uppercase ml-1">PRIORITY</label>
                       <select className="w-full h-14 px-6 bg-background border border-border rounded-2xl outline-none focus:border-accent transition-all font-bold text-primary text-sm appearance-none">
                          <option>Select Priority</option>
                          <option>Low</option>
                          <option>Medium</option>
                          <option>Urgent / High</option>
                       </select>
                    </div>

                    <div className="space-y-3 md:col-span-2">
                       <label className="text-[9px] font-black text-sage tracking-[0.2em] uppercase ml-1">SUBJECT / TITLE</label>
                       <input type="text" className="w-full h-14 px-6 bg-background border border-border rounded-2xl outline-none focus:border-accent transition-all font-bold text-primary text-sm" placeholder="A brief summary of your concern..." />
                    </div>

                    <div className="space-y-3 md:col-span-2">
                       <label className="text-[9px] font-black text-sage tracking-[0.2em] uppercase ml-1">DESCRIPTION</label>
                       <textarea rows={5} className="w-full p-6 bg-background border border-border rounded-4xl outline-none focus:border-accent transition-all font-bold text-primary text-sm placeholder:italic placeholder:font-medium" placeholder="Explain your concern in detail so we can provide a faster resolution..."></textarea>
                    </div>

                    <div className="space-y-3 md:col-span-2">
                       <label className="text-[9px] font-black text-sage tracking-[0.2em] uppercase ml-1">ATTACHMENTS</label>
                       <div className="w-full h-16 bg-background border-2 border-dashed border-border rounded-3xl flex items-center justify-center gap-4 text-sage hover:border-accent hover:text-primary transition-all cursor-pointer">
                          <Paperclip className="w-5 h-5 text-accent" />
                          <span className="text-xs font-bold uppercase tracking-[0.2em]">Click to upload relevant files</span>
                       </div>
                    </div>

                    <div className="md:col-span-2 pt-4">
                       <button type="submit" className="w-full py-7 bg-primary text-white rounded-full font-bold text-[11px] uppercase tracking-[0.3em] shadow-lg hover:shadow-premium hover:translate-y-[-2px] active:scale-95 transition-all outline outline-accent/20 outline-offset-4">
                          OPEN SUPPORT TICKET
                       </button>
                    </div>
                 </form>
              </div>
           </div>

           {/* History / Previous Tickets */}
           <div className="space-y-12">
              <div className="space-y-8">
                 <div className="flex justify-between items-end border-b border-border pb-6">
                    <h2 className="text-2xl font-serif font-bold text-primary">Previous Support</h2>
                    <Clock className="w-5 h-5 text-accent" />
                 </div>

                 <div className="space-y-6">
                    {previousTickets.map((tkt, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-4xl border border-border shadow-soft group hover:border-accent transition-all relative overflow-hidden">
                         <div className={`absolute left-0 top-0 bottom-0 w-1 ${tkt.status === "In Progress" ? "bg-accent" : "bg-primary"}`}></div>
                         <div className="flex justify-between items-start mb-4">
                            <span className="text-[9px] font-black text-accent uppercase tracking-widest">{tkt.category}</span>
                            <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-background text-sage uppercase tracking-widest">ID: {tkt.id}</span>
                         </div>
                         <h6 className="text-lg font-serif font-bold text-primary leading-tight mb-2 italic">"{tkt.subject}"</h6>
                         <p className="text-[10px] font-bold text-sage uppercase tracking-widest mb-6">DATE: {tkt.date}</p>
                         
                         <div className="flex justify-between items-center pt-6 border-t border-background">
                            <div className="flex items-center gap-2">
                               <div className={`w-2 h-2 rounded-full animate-pulse ${tkt.status === "In Progress" ? "bg-accent" : "bg-primary"}`}></div>
                               <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{tkt.status}</span>
                            </div>
                            <button className="text-[9px] font-black text-sage hover:text-accent transition-colors uppercase tracking-widest border-b border-sage/20">VIEW TICKET</button>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-primary p-12 rounded-5xl shadow-premium text-white flex flex-col gap-6 items-center text-center group active:scale-95 transition-all cursor-pointer">
                 <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <User className="w-10 h-10 text-primary" />
                 </div>
                 <h4 className="text-2xl font-serif font-bold leading-tight">Emergency <br /> Support Contacts</h4>
                 <div className="h-px w-24 bg-white/10 mx-auto"></div>
                 <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Available 24/7 For Urgent Issues</p>
                 <button className="w-full bg-white text-primary py-4 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-lg hover:bg-accent transition-all">VIEW DIRECTORY</button>
              </div>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}


