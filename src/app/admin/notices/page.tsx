"use client";

import { useState, useEffect } from "react";
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
  Bell,
  FileText,
  AlertCircle,
  Megaphone,
  Edit3,
  Trash2,
  Globe,
  Zap,
  X
} from "lucide-react";

export default function NoticeBoardPage() {
  const [notices, setNotices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [newNotice, setNewNotice] = useState({ title: "", category: "Academic", audience: "All Students", status: "Published" });
  const [modalLoading, setModalLoading] = useState(false);

  const fetchNotices = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/notices", {
         headers: {
           "Authorization": `Bearer ${token}`
         }
      });
      const data = await res.json();
      if (res.ok) {
         setNotices(data);
      }
    } catch (err) {
      console.error("Failed to fetch notices", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const handleAddNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/notices", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${token}`
         },
         body: JSON.stringify(newNotice)
      });
      const data = await res.json();
      if (res.ok) {
         setNotices([data, ...notices]);
         setShowAddModal(false);
         setNewNotice({ title: "", category: "Academic", audience: "All Students", status: "Published" });
      } else {
         alert(data.message || "Failed to add notice");
      }
    } catch (err) {
      alert("Network error");
    } finally {
      setModalLoading(false);
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/notices/${id}`, {
         method: "PUT",
         headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${token}`
         },
         body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
         setNotices(prev => prev.map(n => n._id === id ? { ...n, status: newStatus } : n));
      } else {
         alert("Failed to update status.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error.");
    }
  };

  const handleDelete = async (id: string) => {
    if(!confirm("Are you sure you want to permanently delete this notice?")) return;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/notices/${id}`, {
         method: "DELETE",
         headers: {
           "Authorization": `Bearer ${token}`
         }
      });
      if (res.ok) {
         setNotices(prev => prev.filter(n => n._id !== id));
      } else {
         alert("Failed to delete notice.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error.");
    }
  };

  const totalNotices = notices.length;
  const publishedNotices = notices.filter(n => n.status === "Published").length;
  const draftNotices = notices.filter(n => n.status === "Draft").length;
  const urgentNotices = notices.filter(n => n.status === "Urgent").length;

  const noticeStats = [
    { label: "TOTAL NOTICES", value: totalNotices.toString(), count: "Yearly", up: true, icon: FileText, color: "bg-white", text: "text-primary" },
    { label: "ACTIVE NOTICES", value: publishedNotices.toString(), count: "Published", up: true, icon: Megaphone, color: "bg-primary text-white", text: "text-white" },
    { label: "DRAFT NOTICES", value: draftNotices.toString(), count: "In Review", up: false, icon: Clock, color: "bg-white", text: "text-primary" },
    { label: "URGENT NOTICES", value: urgentNotices.toString(), count: "Priority", up: true, icon: Zap, color: "bg-accent text-primary", text: "text-primary" },
  ];

  return (
    <DashboardLayout 
      role="admin" 
      sidebarItems={ADMIN_SIDEBAR_ITEMS}
      userProfile={{ name: "Admin Office", roleName: "Head Admin", avatar: "" }}
    >
      <div className="space-y-12 animate-in fade-in duration-700 relative">
        
        {/* ADD NOTICE MODAL */}
        {showAddModal && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-primary/20 backdrop-blur-sm">
             <div className="bg-white rounded-4xl shadow-premium w-full max-w-lg p-10 relative overflow-hidden">
                <button onClick={() => setShowAddModal(false)} className="absolute top-6 right-6 p-2 bg-background rounded-full hover:bg-black/5 transition-colors">
                  <X className="w-5 h-5 text-primary" />
                </button>
                <div className="mb-8">
                  <h3 className="text-3xl font-serif font-bold text-primary">Create Notice</h3>
                  <p className="text-sage text-sm font-bold uppercase tracking-widest mt-2">Broadcast an Announcement</p>
                </div>
                <form onSubmit={handleAddNotice} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-4">Notice Headline</label>
                    <input type="text" required value={newNotice.title} onChange={e => setNewNotice({...newNotice, title: e.target.value})} className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" placeholder="e.g. Campus Holiday..." />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-4">Category</label>
                       <select value={newNotice.category} onChange={e => setNewNotice({...newNotice, category: e.target.value})} className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors cursor-pointer appearance-none">
                          <option value="Academic">Academic</option>
                          <option value="Events">Events</option>
                          <option value="Policy">Policy</option>
                          <option value="Staff">Staff</option>
                          <option value="General">General</option>
                       </select>
                     </div>
                     <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-4">Audience</label>
                       <select value={newNotice.audience} onChange={e => setNewNotice({...newNotice, audience: e.target.value})} className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors cursor-pointer appearance-none">
                          <option value="All Students">All Students</option>
                          <option value="Parents">Parents</option>
                          <option value="Teachers">Teachers</option>
                          <option value="Public">Public</option>
                       </select>
                     </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-4">Publishing Status</label>
                    <select value={newNotice.status} onChange={e => setNewNotice({...newNotice, status: e.target.value})} className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors cursor-pointer appearance-none">
                        <option value="Published">Published Now</option>
                        <option value="Draft">Save as Draft</option>
                        <option value="Urgent">Urgent Priority</option>
                    </select>
                  </div>

                  <button type="submit" disabled={modalLoading} className="w-full h-14 bg-primary text-white rounded-2xl font-bold shadow-soft hover:shadow-premium transition-all mt-4">
                    {modalLoading ? "Processing..." : "Create Notice"}
                  </button>
                </form>
             </div>
          </div>
        )}

        {/* Header Summary */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
           <div className="space-y-4">
              <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">MANAGEMENT ERP HUB</span>
              <h1 className="text-6xl font-serif font-bold text-primary leading-tight tracking-tight">Notice Board</h1>
              <p className="text-sage font-black text-[11px] tracking-[0.2em] uppercase opacity-60 italic">Manage institutional announcements and public notices</p>
           </div>
           
           <div className="flex gap-5 pb-2">
              <button onClick={() => setShowAddModal(true)} className="flex items-center gap-3 bg-white border border-border/50 text-primary px-10 py-5 rounded-full font-bold shadow-soft hover:shadow-premium transition-all active:scale-95 group">
                 <Edit3 className="w-5 h-5 text-sage" />
                 <span className="text-[11px] font-black uppercase tracking-widest leading-none">Create Notice</span>
              </button>
              <button className="flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold shadow-premium hover:shadow-pill transition-all active:scale-95 group">
                 <Globe className="w-5 h-5 text-accent" />
                 <span className="text-[11px] font-black uppercase tracking-widest leading-none">Publish Announcement</span>
              </button>
           </div>
        </div>

        {/* Notice Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 pt-4">
           {noticeStats.map((stat, i) => (
             <div key={i} className={`p-10 rounded-5xl min-h-[320px] flex flex-col justify-between group cursor-default transition-all hover:shadow-premium ${stat.color} shadow-soft border border-border/50 h-64`}>
                <div className="flex justify-between items-start">
                   <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-soft transition-transform group-hover:scale-110 border border-border/20`}>
                      <stat.icon className="w-7 h-7 text-primary" />
                   </div>
                   <div className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest bg-background/5 border border-white/10 ${stat.text === 'text-white' ? "text-white opacity-40" : "text-primary opacity-40"}`}>
                      {stat.count}
                   </div>
                </div>
                <div className="space-y-1">
                  <p className={`text-6xl font-serif font-bold tracking-tight leading-none ${stat.text}`}>{stat.value}</p>
                  <p className={`text-[10px] font-black uppercase tracking-[0.3em] leading-none opacity-40 mt-4 ${stat.text}`}>{stat.label}</p>
                </div>
                <div className="pt-6 border-t border-black/5 flex items-center justify-between transition-all">
                   <span className={`text-[10px] font-bold italic opacity-40 uppercase tracking-widest ${stat.text}`}>View Active Logs</span>
                   <ChevronRight className={`w-4 h-4 opacity-20 group-hover:translate-x-2 ${stat.text}`} />
                </div>
             </div>
           ))}
        </div>

        {/* Filters & Content Section */}
        <div className="bg-white p-12 rounded-5xl shadow-premium border border-border/50 space-y-12">
           
           {/* Controls Bar */}
           <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
              <div className="flex items-center bg-background border border-border/40 px-8 h-18 rounded-full w-full xl:w-[500px] shadow-inner">
                 <Search className="w-5 h-5 text-sage/40" />
                 <input 
                   type="text" 
                   placeholder="Search notices by title or keywords..." 
                   className="flex-1 bg-transparent border-none outline-none pl-4 text-sm font-medium text-primary placeholder:text-sage/40" 
                 />
              </div>

              <div className="flex flex-wrap items-center gap-6">
                 <div className="flex items-center gap-3 px-8 py-5 bg-background border border-border/40 rounded-full h-18 shadow-soft">
                    <Filter className="w-4 h-4 text-accent" />
                    <select className="bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-widest text-primary cursor-pointer pr-4">
                       <option>All Categories</option>
                       <option>Academic</option>
                       <option>Events</option>
                       <option>Policy</option>
                    </select>
                 </div>
                 <div className="flex items-center gap-3 px-8 py-5 bg-background border border-border/40 rounded-full h-18 shadow-soft">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    <select className="bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-widest text-primary cursor-pointer pr-4">
                       <option>Status Selector</option>
                       <option>Published</option>
                       <option>Draft</option>
                       <option>Expired</option>
                    </select>
                 </div>
              </div>
           </div>

           {/* Notices Records */}
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="border-b border-background">
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8">Notice Headline</th>
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8">Category Tag</th>
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8">Posting Date</th>
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8">Target Audience</th>
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8">Status</th>
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8 text-right">Action Hub</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-background">
                    {loading ? (
                      <tr><td colSpan={6} className="text-center py-10 opacity-50 font-bold">Loading notices...</td></tr>
                    ) : notices.length === 0 ? (
                      <tr><td colSpan={6} className="text-center py-10 opacity-50 font-bold">No announcements published yet.</td></tr>
                    ) : notices.map((notice) => (
                      <tr key={notice._id} className="group hover:bg-background/20 transition-all duration-300">
                        <td className="py-10 px-8">
                           <div className="flex items-center gap-6">
                              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center font-serif font-bold text-primary text-xl border border-primary/10 shadow-sm relative shrink-0">
                                 <Bell className="w-6 h-6 text-primary" />
                                 {notice.status === 'Urgent' && <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>}
                              </div>
                              <p className="text-lg font-serif font-bold text-primary group-hover:text-accent transition-colors leading-tight">{notice.title}</p>
                           </div>
                        </td>
                        <td className="py-10 px-8">
                           <span className="text-[10px] font-black uppercase tracking-widest px-5 py-2.5 bg-accent/20 text-primary border border-accent/20 rounded-full shadow-soft">{notice.category}</span>
                        </td>
                        <td className="py-10 px-8 text-sm font-medium text-sage italic">{new Date(notice.createdAt).toLocaleDateString()}</td>
                        <td className="py-10 px-8 text-xs font-black text-primary/60 uppercase tracking-widest">{notice.audience}</td>
                        <td className="py-10 px-8">
                           <span className={`inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full border shadow-soft ${
                             notice.status === "Published" ? "bg-green-50 text-green-600 border-green-100" :
                             notice.status === "Urgent" ? "bg-red-50 text-red-600 border-red-100 shadow-sm shadow-red-200" :
                             notice.status === "Draft" ? "bg-blue-50 text-blue-600 border-blue-100" :
                             "bg-gray-100 text-gray-500 border-gray-200"
                           }`}>
                              {notice.status}
                           </span>
                        </td>
                        <td className="py-10 px-8">
                           <div className="flex items-center justify-end gap-4 shadow-soft">
                              {notice.status === "Draft" ? (
                                <button onClick={() => handleUpdateStatus(notice._id, "Published")} className="w-12 h-12 flex items-center justify-center bg-white border border-border/40 rounded-2xl hover:bg-green-600 hover:text-white transition-all shadow-sm group/btn" title="Quick Publish">
                                   <Globe className="w-4 h-4" />
                                </button>
                              ) : (
                                <button onClick={() => handleUpdateStatus(notice._id, "Expired")} className="w-12 h-12 flex items-center justify-center bg-white border border-border/40 rounded-2xl hover:bg-orange-500 hover:text-white transition-all shadow-sm group/btn" title="Mark Expired">
                                   <XCircle className="w-4 h-4" />
                                </button>
                              )}
                              
                              <button onClick={() => handleDelete(notice._id)} className="w-12 h-12 flex items-center justify-center bg-white border border-border/40 rounded-2xl hover:bg-red-600 hover:text-white transition-all shadow-sm group/btn" title="Permanent Delete">
                                 <Trash2 className="w-4 h-4" />
                              </button>
                           </div>
                        </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>

           {/* Institutional footer disclaimer */}
           <div className="pt-12 border-t border-background flex justify-between items-center text-sage">
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest opacity-50">
                 <AlertCircle className="w-4 h-4" />
                 Published notices are visible to selected portals immediately
              </div>
              <div className="flex items-center gap-4">
                 <button className="text-primary font-black text-[10px] uppercase tracking-widest border-b-2 border-primary/20 hover:border-primary transition-all pb-1">Historical Archives</button>
                 <ChevronRight className="w-4 h-4 opacity-20" />
              </div>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
