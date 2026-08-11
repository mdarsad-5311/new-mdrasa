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
  Briefcase,
  X
} from "lucide-react";
import { api } from "@/lib/api";

export default function ManageTeachersPage() {
  const [teachers, setTeachers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTeacher, setNewTeacher] = useState({ name: "", email: "", phone: "", subject: "" });
  const [modalLoading, setModalLoading] = useState(false);

  const fetchTeachers = async () => {
    try {
      const data = await api.getTeachers();
      setTeachers(data);
    } catch (err) {
      console.error("Failed to fetch teachers", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleAddTeacher = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalLoading(true);
    try {
      const data = await api.createTeacher(newTeacher);
      setTeachers([data, ...teachers]);
      setShowAddModal(false);
      setNewTeacher({ name: "", email: "", phone: "", subject: "" });
    } catch (err: any) {
      alert(err.message || "Failed to add teacher");
    } finally {
      setModalLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if(!confirm("Are you sure you want to permanently delete this teacher record?")) return;
    try {
      await api.deleteTeacher(id);
      setTeachers(prev => prev.filter(t => t._id !== id));
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Failed to delete teacher.");
    }
  };

  const activeStaff = teachers.filter(t => t.status === 'active').length;

  const teacherStats = [
    { label: "TOTAL TEACHERS", value: teachers.length.toString(), count: "Academic", up: true, icon: GraduationCap, color: "bg-white" },
    { label: "ACTIVE STAFF", value: activeStaff.toString(), count: "+2", up: true, icon: CheckCircle2, color: "bg-primary text-white" },
    { label: "NEW APPOINTMENTS", value: "0", count: "This Year", up: true, icon: UserPlus, color: "bg-white" },
    { label: "DEPARTMENTS", value: "08", count: "Categories", up: false, icon: BookOpen, color: "bg-accent text-primary" },
  ];

  return (
    <DashboardLayout 
      role="admin" 
      sidebarItems={ADMIN_SIDEBAR_ITEMS}
      userProfile={{ name: "Admin Office", roleName: "Head Admin", avatar: "" }}
    >
      <div className="space-y-12 animate-in fade-in duration-700 relative">
        
        {/* ADD TEACHER MODAL */}
        {showAddModal && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-primary/20 backdrop-blur-sm">
             <div className="bg-white rounded-4xl shadow-premium w-full max-w-lg p-10 relative overflow-hidden">
                <button onClick={() => setShowAddModal(false)} className="absolute top-6 right-6 p-2 bg-background rounded-full hover:bg-black/5 transition-colors">
                  <X className="w-5 h-5 text-primary" />
                </button>
                <div className="mb-8">
                  <h3 className="text-3xl font-serif font-bold text-primary">Add Teacher</h3>
                  <p className="text-sage text-sm font-bold uppercase tracking-widest mt-2">New Staff Registration</p>
                </div>
                <form onSubmit={handleAddTeacher} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-4">Full Name</label>
                    <input type="text" required value={newTeacher.name} onChange={e => setNewTeacher({...newTeacher, name: e.target.value})} className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" placeholder="e.g. Maulana Hafiz" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-4">Email Address</label>
                    <input type="email" required value={newTeacher.email} onChange={e => setNewTeacher({...newTeacher, email: e.target.value})} className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" placeholder="teacher@mdrasa.edu" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-4">Phone Number</label>
                    <input type="text" required value={newTeacher.phone} onChange={e => setNewTeacher({...newTeacher, phone: e.target.value})} className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" placeholder="+91 90000 00000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-4">Primary Subject / Dept</label>
                    <input type="text" required value={newTeacher.subject} onChange={e => setNewTeacher({...newTeacher, subject: e.target.value})} className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" placeholder="e.g. Hifz-ul-Quran" />
                  </div>
                  <button type="submit" disabled={modalLoading} className="w-full h-14 bg-primary text-white rounded-2xl font-bold shadow-soft hover:shadow-premium transition-all">
                    {modalLoading ? "Saving..." : "Register Teacher"}
                  </button>
                </form>
             </div>
          </div>
        )}

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
              <button onClick={() => setShowAddModal(true)} className="flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold shadow-premium hover:shadow-pill transition-all active:scale-95 group">
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
              <div className="flex items-center bg-background border border-border/40 px-8 h-16 rounded-full w-full xl:w-112.5 shadow-inner">
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
                       <th className="pb-8 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-6 text-right">Action</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-background">
                    {loading ? (
                      <tr key="loading"><td colSpan={6} className="text-center py-8 font-bold opacity-50">Loading Teachers...</td></tr>
                    ) : teachers.length === 0 ? (
                      <tr key="empty"><td colSpan={6} className="text-center py-8 font-bold opacity-50">No teachers found. Click Add Teacher.</td></tr>
                    ) : teachers.map((teacher) => (
                      <tr key={teacher._id} className="group hover:bg-background/20 transition-all duration-300">
                        <td className="py-8 px-6">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center font-serif font-bold text-primary text-lg border border-primary/10 shadow-sm">{teacher.name.charAt(0)}</div>
                              <p className="text-base font-bold text-primary leading-none group-hover:text-accent transition-colors underline decoration-transparent group-hover:decoration-accent decoration-2 underline-offset-4">{teacher.name}</p>
                           </div>
                        </td>
                        <td className="py-8 px-6">
                           <span className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-primary/5 text-primary border border-primary/10 rounded-full">{teacher.subject}</span>
                        </td>
                        <td className="py-8 px-6 text-[11px] font-black text-sage tracking-widest opacity-60 leading-none">
                           {teacher.phone}<br/>
                           <span className="text-[9px] lowercase opacity-50">{teacher.email}</span>
                        </td>
                        <td className="py-8 px-6 text-sm font-bold text-primary/60 italic">{new Date(teacher.createdAt).toLocaleDateString()}</td>
                        <td className="py-8 px-6">
                           <span className={`inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full border ${
                             teacher.status === "active" ? "bg-green-50 text-green-600 border-green-100" :
                             "bg-orange-50 text-orange-600 border-orange-100"
                           }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${
                                teacher.status === "active" ? "bg-green-600" :
                                "bg-orange-600"
                              }`}></span>
                              {teacher.status}
                           </span>
                        </td>
                        <td className="py-8 px-6">
                           <div className="flex items-center justify-end gap-3 opacity-20 group-hover:opacity-100 transition-opacity">
                              <button onClick={() => handleDelete(teacher._id)} className="w-10 h-10 flex items-center justify-center bg-white border border-border/40 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"><Trash2 className="w-4 h-4" /></button>
                           </div>
                        </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>

           {/* Pagination Mockup */}
           <div className="pt-10 border-t border-background flex justify-between items-center">
              <p className="text-[10px] font-black text-sage uppercase tracking-widest opacity-60">Showing {teachers.length} teachers</p>
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
