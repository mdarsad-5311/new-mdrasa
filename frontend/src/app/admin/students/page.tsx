"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";
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
   X
} from "lucide-react";

export default function ManageStudentsPage() {
   const [students, setStudents] = useState<any[]>([]);
   const [loading, setLoading] = useState(true);
   const [searchQuery, setSearchQuery] = useState("");
   const [selectedClass, setSelectedClass] = useState("All Classes");

   // Add Student Modal State
   const [showAddModal, setShowAddModal] = useState(false);
   const [modalLoading, setModalLoading] = useState(false);
   const [newStudent, setNewStudent] = useState({
      studentName: "",
      parentName: "",
      phone: "",
      email: "",
      courseAppliedFor: "Hifz Quran",
      gender: "Male",
      status: "approved"
   });

   const fetchStudents = async () => {
      try {
         const data = await api.get("/admission");
         if (data) {
            // Filter only approved admissions to act as "Active Students"
            setStudents(data.filter((app: any) => app.status === "approved"));
         }
      } catch (err) {
         console.error("Failed to fetch students", err);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchStudents();
   }, []);

   const handleAddStudent = async (e: React.FormEvent) => {
      e.preventDefault();
      setModalLoading(true);
      try {
         const created = await api.submitAdmission({
            ...newStudent,
            status: "approved"
         });
         setStudents(prev => [created, ...prev]);
         setShowAddModal(false);
         setNewStudent({
            studentName: "",
            parentName: "",
            phone: "",
            email: "",
            courseAppliedFor: "Hifz Quran",
            gender: "Male",
            status: "approved"
         });
      } catch (err: any) {
         alert(err.message || "Failed to add student.");
      } finally {
         setModalLoading(false);
      }
   };

   const handleDelete = async (id: string) => {
      if (!confirm("Are you sure you want to permanently delete this student record?")) return;
      try {
         await api.delete(`/admission/${id}`);
         setStudents(prev => prev.filter(std => std._id !== id));
      } catch (err) {
         console.error(err);
         alert("Failed to delete student.");
      }
   };

   const handleExport = () => {
      const headers = ["Student Name,Roll No,Class,Guardian,Phone,Status\n"];
      const rows = filteredStudents.map(s => `"${s.studentName}","RL-${s._id.slice(-4).toUpperCase()}","${s.courseAppliedFor}","${s.parentName}","${s.phone}","Active"\n`);
      const blob = new Blob([...headers, ...rows], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `students_list_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   };

   const filteredStudents = students.filter(s => {
      const matchesSearch = s.studentName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            s.parentName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            s.phone?.includes(searchQuery);
      const matchesClass = selectedClass === "All Classes" || s.courseAppliedFor?.toLowerCase().includes(selectedClass.toLowerCase());
      return matchesSearch && matchesClass;
   });

   const studentStats = [
      { label: "TOTAL STUDENTS", value: students.length.toString(), count: "+12%", up: true, icon: Users, color: "bg-white" },
      { label: "ACTIVE STUDENTS", value: students.length.toString(), count: "+5%", up: true, icon: CheckCircle2, color: "bg-primary text-white" },
      { label: "NEW THIS MONTH", value: "4", count: "+4", up: true, icon: UserPlus, color: "bg-white" },
      { label: "GRADUATED", value: "18", count: "Total", up: false, icon: GraduationCap, color: "bg-accent text-primary" },
   ];

   return (
      <DashboardLayout
         role="admin"
         sidebarItems={ADMIN_SIDEBAR_ITEMS}
         userProfile={{ name: "Admin Office", roleName: "Head Admin", avatar: "" }}
      >
         <div className="space-y-12 animate-in fade-in duration-700 relative">

            {/* ADD STUDENT MODAL */}
            {showAddModal && (
               <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-primary/20 backdrop-blur-sm">
                  <div className="bg-white rounded-4xl shadow-premium w-full max-w-lg p-10 relative overflow-hidden animate-in fade-in zoom-in-95">
                     <button onClick={() => setShowAddModal(false)} className="absolute top-6 right-6 p-2 bg-background rounded-full hover:bg-black/5 transition-colors">
                        <X className="w-5 h-5 text-primary" />
                     </button>
                     <div className="mb-8">
                        <h3 className="text-3xl font-serif font-bold text-primary">Add New Student</h3>
                        <p className="text-sage text-sm font-bold uppercase tracking-widest mt-1">Enrollment & Profile Record</p>
                     </div>
                     <form onSubmit={handleAddStudent} className="space-y-5">
                        <div className="space-y-1.5">
                           <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-3">Student Full Name</label>
                           <input 
                              type="text" 
                              required 
                              value={newStudent.studentName} 
                              onChange={e => setNewStudent({...newStudent, studentName: e.target.value})} 
                              className="w-full h-13 px-5 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors text-sm" 
                              placeholder="e.g. Zaid Ali" 
                           />
                        </div>

                        <div className="space-y-1.5">
                           <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-3">Parent / Guardian Name</label>
                           <input 
                              type="text" 
                              required 
                              value={newStudent.parentName} 
                              onChange={e => setNewStudent({...newStudent, parentName: e.target.value})} 
                              className="w-full h-13 px-5 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors text-sm" 
                              placeholder="e.g. Ali Raza" 
                           />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-1.5">
                              <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-3">Phone Number</label>
                              <input 
                                 type="text" 
                                 required 
                                 value={newStudent.phone} 
                                 onChange={e => setNewStudent({...newStudent, phone: e.target.value})} 
                                 className="w-full h-13 px-5 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors text-sm" 
                                 placeholder="+91 98765 00000" 
                              />
                           </div>
                           <div className="space-y-1.5">
                              <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-3">Course / Class</label>
                              <select 
                                 value={newStudent.courseAppliedFor} 
                                 onChange={e => setNewStudent({...newStudent, courseAppliedFor: e.target.value})} 
                                 className="w-full h-13 px-4 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors text-sm"
                              >
                                 <option>Hifz Quran</option>
                                 <option>Nazra Quran</option>
                                 <option>Aalim Course</option>
                                 <option>Islamic Studies</option>
                                 <option>Tajweed Specialization</option>
                              </select>
                           </div>
                        </div>

                        <button 
                           type="submit" 
                           disabled={modalLoading} 
                           className="w-full h-14 bg-primary text-white rounded-2xl font-bold shadow-soft hover:shadow-premium transition-all text-xs uppercase tracking-widest mt-4 cursor-pointer"
                        >
                           {modalLoading ? "Saving Student..." : "Enroll Student"}
                        </button>
                     </form>
                  </div>
               </div>
            )}

            {/* Header Summary */}
            <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
               <div className="space-y-4">
                  <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">MANAGEMENT ERP HUB</span>
                  <h1 className="text-6xl font-serif font-bold text-primary leading-tight tracking-tight">Manage Students</h1>
                  <p className="text-sage font-black text-[11px] tracking-[0.2em] uppercase opacity-60 italic">Student records, profiles, and enrollment management</p>
               </div>

               <div className="flex gap-5 pb-2">
                  <button 
                     onClick={handleExport} 
                     className="flex items-center gap-3 bg-white border border-border/40 text-primary px-10 py-5 rounded-full font-bold shadow-soft hover:shadow-premium transition-all active:scale-95 group cursor-pointer"
                  >
                     <Download className="w-5 h-5 text-sage" />
                     <span className="text-[11px] font-black uppercase tracking-widest leading-none">Export List</span>
                  </button>
                  <button 
                     onClick={() => setShowAddModal(true)} 
                     className="flex items-center gap-3 bg-accent text-primary px-10 py-5 rounded-full font-bold shadow-premium hover:shadow-pill transition-all active:scale-95 group cursor-pointer"
                  >
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
                  <div className="flex items-center bg-background border border-border/40 px-8 h-16 rounded-full w-full xl:w-112.5 shadow-inner">
                     <Search className="w-5 h-5 text-sage/40" />
                     <input
                        type="text"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Search students by name, guardian, phone..."
                        className="flex-1 bg-transparent border-none outline-none pl-4 text-sm font-medium text-primary placeholder:text-sage/40"
                     />
                  </div>

                  <div className="flex flex-wrap items-center gap-6">
                     <div className="flex items-center gap-3 px-6 py-4 bg-background border border-border/40 rounded-full h-16">
                        <Filter className="w-4 h-4 text-accent" />
                        <select 
                           value={selectedClass} 
                           onChange={e => setSelectedClass(e.target.value)}
                           className="bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-widest text-primary cursor-pointer pr-4"
                        >
                           <option>All Classes</option>
                           <option>Hifz</option>
                           <option>Nazra</option>
                           <option>Aalim</option>
                           <option>Islamic Studies</option>
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
                        {loading ? (
                           <tr key="loading"><td colSpan={6} className="text-center py-8 font-bold opacity-50">Loading Students...</td></tr>
                        ) : filteredStudents.length === 0 ? (
                           <tr key="empty"><td colSpan={6} className="text-center py-8 font-bold opacity-50">No students found matching your criteria.</td></tr>
                        ) : filteredStudents.map((std: any) => (
                           <tr key={std._id} className="group hover:bg-background/20 transition-all duration-300">
                              <td className="py-8 px-6">
                                 <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center font-serif font-bold text-primary text-lg border border-primary/10 shadow-sm">{std.studentName.charAt(0)}</div>
                                    <p className="text-base font-bold text-primary leading-none group-hover:text-accent transition-colors underline decoration-transparent group-hover:decoration-accent decoration-2 underline-offset-4">{std.studentName}</p>
                                 </div>
                              </td>
                              <td className="py-8 px-6 text-sm font-black text-primary tracking-wider opacity-60 leading-none">RL-{std._id.substring(std._id.length - 4).toUpperCase()}</td>
                              <td className="py-8 px-6">
                                 <span className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-accent/10 text-primary border border-accent/20 rounded-full">{std.courseAppliedFor}</span>
                              </td>
                              <td className="py-8 px-6">
                                 <p className="text-sm font-bold text-primary leading-none mb-2">{std.parentName}</p>
                                 <p className="text-[10px] font-black text-sage tracking-widest opacity-60">{std.phone}</p>
                              </td>
                              <td className="py-8 px-6">
                                 <span className={`inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full border bg-green-50 text-green-600 border-green-100`}>
                                    <span className={`w-1.5 h-1.5 rounded-full bg-green-600`}></span>
                                    Active
                                 </span>
                              </td>
                              <td className="py-8 px-6">
                                 <div className="flex items-center justify-end gap-3 opacity-20 group-hover:opacity-100 transition-opacity">
                                    <button onClick={() => handleDelete(std._id)} title="Delete Record" className="w-10 h-10 flex items-center justify-center bg-white border border-border/40 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm cursor-pointer"><Trash2 className="w-4 h-4" /></button>
                                 </div>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>

               {/* Table Footer Summary */}
               <div className="pt-10 border-t border-background flex justify-between items-center">
                  <p className="text-[10px] font-black text-sage uppercase tracking-widest opacity-60">Showing {filteredStudents.length} of {students.length} students</p>
                  <div className="flex gap-2">
                     <button className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-xl shadow-lg text-[10px] font-black">1</button>
                  </div>
               </div>
            </div>

         </div>
      </DashboardLayout>
   );
}
