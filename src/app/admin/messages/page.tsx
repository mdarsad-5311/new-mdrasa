"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { ADMIN_SIDEBAR_ITEMS } from "@/lib/constants";
import { 
  Search, 
  Filter, 
  MessageSquare, 
  Mail, 
  MailOpen, 
  Trash2, 
  ChevronRight,
  Send,
  User,
  Phone,
  Clock
} from "lucide-react";

export default function MessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/contact", {
         headers: {
           "Authorization": `Bearer ${token}`
         }
      });
      const data = await res.json();
      if (res.ok) {
         setMessages(data);
      }
    } catch (err) {
      console.error("Failed to fetch messages", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id: string) => {
    if(!confirm("Are you sure you want to completely delete this message?")) return;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/contact/${id}`, {
         method: "DELETE",
         headers: {
           "Authorization": `Bearer ${token}`
         }
      });
      if (res.ok) {
         setMessages(prev => prev.filter(msg => msg._id !== id));
      } else {
         alert("Failed to delete message.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error.");
    }
  };

  const totalFiltered = messages.length;

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
              <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">COMMUNICATION HUB</span>
              <h1 className="text-6xl font-serif font-bold text-primary leading-tight tracking-tight">Inquiries & Messages</h1>
              <p className="text-sage font-black text-[11px] tracking-[0.2em] uppercase opacity-60 italic">Read and manage incoming queries from the website contact form</p>
           </div>
           
           <div className="flex gap-5 pb-2">
              <button className="flex items-center gap-3 bg-accent text-primary px-10 py-5 rounded-full font-bold shadow-premium hover:shadow-pill transition-all active:scale-95 group">
                 <Send className="w-5 h-5" />
                 <span className="text-[11px] font-black uppercase tracking-widest leading-none">Broadcast Email</span>
              </button>
           </div>
        </div>

        {/* Filters & Table Section */}
        <div className="bg-white p-12 rounded-5xl shadow-premium border border-border/50 space-y-12">
           
           {/* Controls Bar */}
           <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
              <div className="flex items-center bg-background border border-border/40 px-8 h-16 rounded-full w-full xl:w-[450px] shadow-inner">
                 <Search className="w-5 h-5 text-sage/40" />
                 <input 
                   type="text" 
                   placeholder="Search messages by name or subject..." 
                   className="flex-1 bg-transparent border-none outline-none pl-4 text-sm font-medium text-primary placeholder:text-sage/40" 
                 />
              </div>

              <div className="flex flex-wrap items-center gap-6">
                 <div className="flex items-center gap-3 px-6 py-4 bg-background border border-border/40 rounded-full h-16">
                    <Filter className="w-4 h-4 text-accent" />
                    <select className="bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-widest text-primary cursor-pointer pr-4">
                       <option>Sort By: Newest</option>
                       <option>Sort By: Oldest</option>
                    </select>
                 </div>
              </div>
           </div>

           {/* Messages List / Table */}
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="border-b border-background">
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6">Sender Details</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6">Contact Info</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6 w-1/3">Message Snippet</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6">Date Received</th>
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6 text-right">Actions</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-background">
                    {loading ? (
                      <tr><td colSpan={5} className="text-center py-10 opacity-50 font-bold">Loading records...</td></tr>
                    ) : messages.length === 0 ? (
                      <tr><td colSpan={5} className="text-center py-10 opacity-50 font-bold">No messages found.</td></tr>
                    ) : messages.map((msg: any) => (
                      <tr key={msg._id} className="group hover:bg-background/20 transition-all duration-300">
                        <td className="py-8 px-6">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center font-serif font-bold text-primary text-lg border border-primary/10 shadow-sm">{msg.name.charAt(0)}</div>
                              <div className="flex flex-col">
                                <p className="text-base font-bold text-primary leading-none group-hover:text-accent transition-colors underline decoration-transparent group-hover:decoration-accent decoration-2 underline-offset-4 mb-2">{msg.name}</p>
                                <span className={`inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-primary/10 bg-primary/5 text-primary/60 w-max`}>
                                   <MessageSquare className="w-3 h-3" /> Inquiry
                                </span>
                              </div>
                           </div>
                        </td>
                        <td className="py-8 px-6">
                           <div className="flex items-center gap-2 mb-2">
                             <Mail className="w-3.5 h-3.5 text-sage" />
                             <p className="text-xs font-bold text-primary leading-none">{msg.email}</p>
                           </div>
                           <div className="flex items-center gap-2">
                             <Phone className="w-3.5 h-3.5 text-sage" />
                             <p className="text-[10px] font-black text-sage tracking-widest opacity-80">{msg.phone}</p>
                           </div>
                        </td>
                        <td className="py-8 px-6">
                           <p className="text-sm font-black text-primary leading-none mb-2">{msg.subject}</p>
                           <p className="text-xs font-medium text-sage leading-relaxed line-clamp-2 max-w-sm">{msg.message}</p>
                        </td>
                        <td className="py-8 px-6">
                           <div className="flex items-center gap-2">
                             <Clock className="w-3.5 h-3.5 text-sage/50" />
                             <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest italic">{new Date(msg.createdAt).toLocaleDateString()}</span>
                           </div>
                        </td>
                        <td className="py-8 px-6">
                           <div className="flex items-center justify-end gap-3 transition-opacity">
                              <a href={`mailto:${msg.email}?subject=Re: ${msg.subject}`} className="w-10 h-10 flex items-center justify-center bg-white border border-border/40 rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm group/btn" title="Reply via Email">
                                 <Send className="w-4 h-4 active:scale-95" />
                              </a>
                              <button onClick={() => handleDelete(msg._id)} className="w-10 h-10 flex items-center justify-center bg-white border border-border/40 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm group/btn" title="Delete Message">
                                 <Trash2 className="w-4 h-4 active:scale-95" />
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
              <p className="text-[10px] font-black text-sage uppercase tracking-widest opacity-60">Showing {totalFiltered} messages</p>
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
