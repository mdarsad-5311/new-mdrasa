"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { PARENT_SIDEBAR_ITEMS } from "@/lib/constants";
import { Bell, Calendar, Search, Star, MessageSquare, AlertCircle, FileText, Download, ChevronRight, Bookmark, LayoutGrid, List } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { api } from "@/lib/api";

export default function NoticesPage() {
  const { user } = useAuth();
  const [viewMode, setViewMode] = useState("grid");
  const [notices, setNotices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const data = await api.getNotices();
        setNotices(data);
      } catch (err) {
        console.error("Failed to fetch notices", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, []);

  return (
    <DashboardLayout 
      role="parent" 
      sidebarItems={PARENT_SIDEBAR_ITEMS}
      userProfile={{ name: user?.name || "Parent", roleName: "Parent", avatar: "" }}
    >
      <div className="space-y-12 max-w-7xl animate-in fade-in duration-700">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-border pb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 hover:rotate-0 transition-transform">
                  <Bell className="w-6 h-6 text-accent" />
               </div>
               <span className="text-[10px] font-bold tracking-[0.4rem] text-accent uppercase font-sans">CENTRAL BROADCAST</span>
            </div>
            <h1 className="text-5xl font-serif font-bold text-primary leading-tight">Announcements</h1>
            <p className="text-sage text-sm font-medium tracking-widest uppercase">
              PORTAL: <span className="text-primary font-bold">AL-UMAIMA ACADEMY</span> | NOTICES: <span className="text-primary font-bold">{notices.length} ACTIVE</span>
            </p>
          </div>
          
          <div className="flex items-center gap-4 bg-white border border-border p-2 rounded-full shadow-soft transition-all">
             <button onClick={() => setViewMode("grid")} className={`p-3 rounded-full transition-all ${viewMode === "grid" ? "bg-primary text-white shadow-lg" : "text-sage hover:text-primary"}`}>
                <LayoutGrid className="w-5 h-5" />
             </button>
             <button onClick={() => setViewMode("list")} className={`p-3 rounded-full transition-all ${viewMode === "list" ? "bg-primary text-white shadow-lg" : "text-sage hover:text-primary"}`}>
                <List className="w-5 h-5" />
             </button>
             <div className="h-4 w-px bg-border mx-2"></div>
             <button className="flex items-center gap-3 bg-white border-2 border-primary/10 px-6 py-2.5 rounded-full text-primary font-bold text-[10px] uppercase tracking-widest hover:border-primary transition-all">
                <Bookmark className="w-4 h-4 text-accent" /> SAVED
             </button>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center min-h-[40vh]">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
           {/* Sidebar Filters */}
           <div className="xl:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-4xl shadow-soft border border-border space-y-4">
                 <h3 className="text-sm font-bold text-sage uppercase tracking-widest mb-6 border-b border-background pb-4">NOTICES CATEGORY</h3>
                 {[
                   { label: "Internal Broadcast", category: "all", count: notices.length },
                   { label: "Academic / Exams", category: "academic", count: notices.filter(n => n.category?.toLowerCase() === 'exam' || n.category?.toLowerCase() === 'academic').length },
                   { label: "School Events", category: "event", count: notices.filter(n => n.category?.toLowerCase() === 'event').length },
                   { label: "Fees & Accounts", category: "fees", count: notices.filter(n => n.category?.toLowerCase() === 'fees').length },
                   { label: "Urgent Alerts", category: "urgent", count: notices.filter(n => n.priority === 'high').length }
                 ].map((cat, i) => (
                   <button 
                    key={i}
                    className="w-full flex items-center justify-between p-4 rounded-2xl transition-all group hover:bg-background"
                   >
                     <span className="text-sm font-bold text-primary opacity-60 group-hover:opacity-100 group-hover:text-primary tracking-tight">{cat.label}</span>
                     <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-primary/5 text-primary">{cat.count}</span>
                   </button>
                 ))}
              </div>

              <div className="bg-primary p-12 rounded-5xl shadow-premium text-white flex flex-col gap-6 items-center text-center group active:scale-95 transition-all cursor-pointer relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 w-64 h-64 bg-accent opacity-5 -translate-y-12 translate-x-12 rotate-12"></div>
                 <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-md">
                    <Calendar className="w-8 h-8 text-accent" />
                 </div>
                 <h4 className="text-2xl font-serif font-bold leading-tight">Sync With Your Calendar</h4>
                 <p className="text-[10px] font-bold text-sage uppercase tracking-widest leading-relaxed">Don't Miss Any <br /> Important Deadlines</p>
                 <button className="w-full bg-white text-primary py-4 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg hover:bg-accent transition-all relative z-10 shrink-0">ENABLE SYNC</button>
              </div>
           </div>

           {/* Announcements List */}
           <div className={`xl:col-span-3 grid gap-8 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
              {notices.length === 0 ? (
                <p className="text-center py-20 col-span-2 opacity-30 italic">No announcements available at this time.</p>
              ) : notices.map((notice, i) => (
                <div key={i} className="bg-white p-10 rounded-4xl shadow-soft border border-border space-y-8 hover:shadow-premium hover:-translate-y-1 transition-all group overflow-hidden relative">
                   {notice.priority === 'high' && <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none transition-transform"><div className="absolute top-[-25px] left-[-25px] w-12 h-12 bg-red-500 rotate-45 flex items-center justify-end pr-2 pb-1 font-bold text-white text-[8px] tracking-tighter uppercase">URGENT</div></div>}
                   
                   <div className="space-y-4">
                      <div className="flex justify-between items-start">
                         <div className="flex items-center gap-3">
                           <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${notice.priority === 'high' ? 'bg-red-50 text-red-500' : 'bg-primary/5 text-primary'}`}>
                              <AlertCircle className="w-5 h-5" />
                           </div>
                           <span className="text-[10px] font-black text-sage uppercase tracking-[0.2em]">{notice.category || "General"}</span>
                         </div>
                         <Star className="w-4 h-4 text-accent/20 group-hover:text-accent group-hover:scale-125 transition-all cursor-pointer" />
                      </div>
                      <h5 className="text-3xl font-serif font-bold text-primary leading-tight tracking-tight mt-4 group-hover:underline underline-offset-4 decoration-accent shadow-sm">{notice.title}</h5>
                      <p className="text-sm font-medium text-sage italic leading-relaxed line-clamp-3">
                        "{notice.description || notice.desc || "No description available."}"
                      </p>
                   </div>

                   <div className="pt-8 mt-4 border-t border-background flex flex-col sm:flex-row justify-between items-center gap-8">
                       <div className="flex items-center gap-3">
                          <Calendar className="w-4 h-4 text-accent" />
                          <p className="text-sm font-bold text-primary uppercase tracking-widest">{new Date(notice.createdAt || notice.date).toLocaleDateString()}</p>
                       </div>
                       
                       <div className="flex items-center gap-4 w-full sm:w-auto">
                          {notice.attachment && <button className="p-3 bg-background rounded-full border border-border hover:bg-primary hover:text-white transition-all"><Download className="w-4 h-4" /></button>}
                          <button className="flex-1 sm:flex-none border-2 border-primary text-primary px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all whitespace-nowrap active:scale-95">READ FULL NOTICE</button>
                       </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
        )}

      </div>
    </DashboardLayout>
  );
}
