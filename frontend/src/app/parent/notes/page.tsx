"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { PARENT_SIDEBAR_ITEMS } from "@/lib/constants";
import { MessageSquare, Calendar, User, Search, Paperclip, MoreVertical, Star, Reply, CheckCircle2, AlertCircle, History as HistoryIcon } from "lucide-react";
import { useState } from "react";

export default function TeacherNotesPage() {
  const [filter, setFilter] = useState("all");

  const notes = [
    { 
      id: 1, 
      teacher: "Maulana Ahmed", 
      subject: "Quranic Tajweed", 
      date: "Mar 12, 2026", 
      priority: "high", 
      note: "Mustafa is doing exceptionally well in Tajweed. Ensure he practices Surah Mulk every night before sleeping. His pronunciation has improved but requires consistent revision.",
      attachment: "tajweed-feedback-mar.pdf",
      new: true
    },
    { 
      id: 2, 
      teacher: "Hafiz Bilal", 
      subject: "Hifz Section", 
      date: "Mar 10, 2026", 
      priority: "medium", 
      note: "Punctuality for Hifz class is improving. Keep it up. He managed to memorize half a para this week. Mashallah.",
      attachment: null,
      new: false
    },
    { 
      id: 3, 
      teacher: "Mr. Sameer", 
      subject: "Mathematics", 
      date: "Mar 05, 2026", 
      priority: "low", 
      note: "He needs to review multiplications. Please ensure he completes the weekend homework on page 42.",
      attachment: "homework-sheet.pdf",
      new: false
    }
  ];

  return (
    <DashboardLayout 
      role="parent" 
      sidebarItems={PARENT_SIDEBAR_ITEMS}
      userProfile={{ name: "Mustafa's Parent", roleName: "Parent", avatar: "" }}
    >
      <div className="space-y-12 max-w-7xl animate-in fade-in duration-700">
        
        {/* Header section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-border pb-12">
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase">DIRECT FACULTY FEEDBACK</span>
            <h1 className="text-5xl font-serif font-bold text-primary leading-tight">Teacher Notes</h1>
            <p className="text-sage text-sm font-medium tracking-widest uppercase">
              RECIPIENT: <span className="text-primary font-bold">MUSTAFA AHMED</span> | NOTES: <span className="text-primary font-bold">03 INBOX</span>
            </p>
          </div>

          <div className="flex items-center gap-6">
             <div className="hidden md:flex items-center bg-white border border-border px-6 h-12 rounded-full w-75 shadow-sm transform focus-within:scale-[1.02] transition-all">
                <Search className="w-4 h-4 text-sage" />
                <input 
                  type="text" 
                  placeholder="Search notes..." 
                  className="flex-1 bg-transparent border-none outline-none pl-3 text-sm font-medium text-primary placeholder:text-sage/60" 
                />
             </div>
             <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-premium transition-all active:scale-95">
                <Star className="w-5 h-5 text-accent" />
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
           {/* Sidebar Filters */}
           <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-4xl shadow-soft border border-border space-y-4">
                 <h3 className="text-sm font-bold text-sage uppercase tracking-widest mb-6 border-b border-background pb-4">FILTERS</h3>
                 {[
                   { name: "all", count: 3, label: "All Feedback", icon: MessageSquare },
                   { name: "urgent", count: 1, label: "Urgent Notes", icon: AlertCircle },
                   { name: "unread", count: 1, label: "New Records", icon: Star },
                   { name: "archived", count: 0, label: "Archived", icon: HistoryIcon }
                 ].map((nav, i) => (
                   <button 
                     key={i}
                     onClick={() => setFilter(nav.name)}
                     className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${
                        filter === nav.name ? "bg-primary text-white" : "hover:bg-background text-primary/60"
                     }`}
                   >
                     <div className="flex items-center gap-3">
                        <nav.icon className={`w-4 h-4 ${filter === nav.name ? "text-accent" : "text-sage group-hover:text-primary"}`} />
                        <span className="text-sm font-bold tracking-tight">{nav.label}</span>
                     </div>
                     {nav.count > 0 && <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${filter === nav.name ? "bg-white text-primary" : "bg-primary/5 text-primary"}`}>{nav.count}</span>}
                   </button>
                 ))}
              </div>

              <div className="bg-accent p-8 rounded-4xl shadow-premium text-primary flex flex-col justify-between h-48 relative overflow-hidden group border border-primary/5">
                 <MessageSquare className="absolute top-0 right-0 p-4 w-48 h-48 text-primary opacity-5 group-hover:rotate-12 transition-transform duration-1000" />
                 <h4 className="text-xl font-serif font-bold relative z-10 leading-tight">Personalized <br /> Guidance</h4>
                 <p className="text-[10px] font-medium uppercase tracking-[0.2em] relative z-10 opacity-60">Faculty Communication</p>
              </div>
           </div>

           {/* Notes Stream */}
           <div className="lg:col-span-3 space-y-8">
              {notes.map((note, idx) => (
                <div key={idx} className="bg-white p-10 rounded-4xl shadow-soft border border-border space-y-8 hover:shadow-premium transition-all group relative">
                   {note.new && <div className="absolute top-8 right-10 flex items-center gap-2 bg-accent/20 text-primary px-3 py-1 rounded-full"><div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div><span className="text-[9px] font-bold tracking-widest uppercase">NEW MESSAGE</span></div>}
                   <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 pb-8 border-b border-background">
                      <div className="flex items-center gap-4">
                         <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10 overflow-hidden group-hover:rotate-6 transition-transform">
                            <User className="w-6 h-6 text-primary" />
                         </div>
                         <div>
                            <h5 className="text-xl font-serif font-bold text-primary">{note.teacher}</h5>
                            <p className="text-[10px] font-bold text-sage uppercase tracking-widest">{note.subject}</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <p className="text-sm font-bold text-primary italic leading-none">{note.date}</p>
                         <p className="text-[9px] font-medium text-sage uppercase tracking-widest mt-1">SENT VIA PORTAL</p>
                      </div>
                   </div>

                   <p className="text-lg text-primary/80 italic font-medium leading-relaxed max-w-3xl pr-8">
                     "{note.note}"
                   </p>

                   {note.attachment && (
                     <div className="flex items-center gap-4 p-4 bg-background border border-border rounded-2xl w-fit group/file cursor-pointer hover:border-primary transition-all">
                        <Paperclip className="w-4 h-4 text-accent" />
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">{note.attachment}</span>
                        <div className="w-px h-4 bg-border"></div>
                        <span className="text-[9px] font-black text-sage uppercase tracking-widest group-hover/file:text-primary">DOWNLOAD</span>
                     </div>
                   )}

                   <div className="flex items-center justify-between pt-8 border-t border-background mt-4">
                      <div className="flex items-center gap-6">
                         <button className="flex items-center gap-2 text-primary/40 hover:text-accent transition-colors">
                            <Star className="w-4 h-4" /> <span className="text-[10px] font-bold uppercase tracking-widest">FAVORITE</span>
                         </button>
                         <button className="flex items-center gap-2 text-primary/40 hover:text-primary transition-colors">
                            <Reply className="w-4 h-4" /> <span className="text-[10px] font-bold uppercase tracking-widest">REPLY</span>
                         </button>
                      </div>
                      <button className="bg-primary/5 text-primary px-6 py-2 rounded-full font-bold text-[9px] tracking-widest uppercase hover:bg-primary hover:text-white transition-all shadow-sm">
                         MARK AS READ
                      </button>
                   </div>
                </div>
              ))}

              <button className="w-full py-8 border-2 border-dashed border-border rounded-4xl flex items-center justify-center gap-4 text-sage hover:text-primary hover:border-primary transition-all group">
                 <MoreVertical className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                 <span className="text-xs font-bold uppercase tracking-[0.3em]">LOAD PREVIOUS ARCHIVES</span>
              </button>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}


