"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { ADMIN_SIDEBAR_ITEMS } from "@/lib/constants";
import { 
  Users, 
  TrendingUp, 
  Search, 
  Filter, 
  Download, 
  CheckCircle2, 
  XCircle, 
  Star, 
  Award, 
  FileText, 
  Plus, 
  ChevronRight,
  Eye,
  Trash2,
  BarChart4,
  X
} from "lucide-react";

export default function ResultsAdminPage() {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal setup
  const [showAddModal, setShowAddModal] = useState(false);
  const [newResult, setNewResult] = useState({ studentName: "", rollNo: "", className: "Hifz Quran", gpa: "", grade: "A+", status: "Pass" });
  const [modalLoading, setModalLoading] = useState(false);

  const fetchResults = async () => {
    try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/results", {
           headers: {
             "Authorization": `Bearer ${token}`
           }
        });
        const data = await res.json();
        if (res.ok) {
           setResults(data);
        }
    } catch (err) {
        console.error("Failed to fetch results", err);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
     fetchResults();
  }, []);

  const handleCreateResult = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/results", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${token}`
         },
         body: JSON.stringify(newResult)
      });
      const data = await res.json();
      if (res.ok) {
         setResults([data, ...results]);
         setShowAddModal(false);
         setNewResult({ studentName: "", rollNo: "", className: "Hifz Quran", gpa: "", grade: "A+", status: "Pass" });
      } else {
         alert(data.message || "Failed to submit result");
      }
    } catch (err) {
      alert("Network error");
    } finally {
      setModalLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if(!confirm("Are you sure you want to permanently delete this student's result?")) return;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/results/${id}`, {
         method: "DELETE",
         headers: {
           "Authorization": `Bearer ${token}`
         }
      });
      if (res.ok) {
         setResults(prev => prev.filter(r => r._id !== id));
      } else {
         alert("Failed to delete result.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error.");
    }
  };

  const totalResults = results.length;
  const passedStudents = results.filter(r => r.status === "Pass").length;
  const passedPercentage = totalResults > 0 ? Math.round((passedStudents / totalResults) * 100) : 0;
  const topPerformers = results.filter(r => r.grade === "A+" || r.grade === "A").length;
  const pendingGrading = results.filter(r => r.status === "Pending Grading").length;

  const resultStats = [
    { label: "EXAMINATION PASS", value: `${passedPercentage}%`, count: "Yearly Avg", up: true, icon: CheckCircle2, color: "bg-white", text: "text-primary" },
    { label: "TOP PERFORMERS", value: topPerformers.toString(), count: "A/A+ Grade", up: true, icon: Award, color: "bg-primary text-white", text: "text-white" },
    { label: "PENDING GRADING", value: pendingGrading.toString(), count: "Finalizing", up: false, icon: FileText, color: "bg-white", text: "text-primary" },
    { label: "ACADEMIC RANK", value: "01", count: "Institutional", up: true, icon: Star, color: "bg-accent text-primary", text: "text-primary" },
  ];

  return (
    <DashboardLayout 
      role="admin" 
      sidebarItems={ADMIN_SIDEBAR_ITEMS}
      userProfile={{ name: "Admin Office", roleName: "Head Admin", avatar: "" }}
    >
      <div className="space-y-12 animate-in fade-in duration-700 relative">
        
        {/* ADD RESULT MODAL */}
        {showAddModal && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-primary/20 backdrop-blur-sm">
             <div className="bg-white rounded-4xl shadow-premium w-full max-w-lg p-10 relative overflow-hidden h-[90vh] overflow-y-auto">
                <button onClick={() => setShowAddModal(false)} className="absolute top-6 right-6 p-2 bg-background rounded-full hover:bg-black/5 transition-colors">
                  <X className="w-5 h-5 text-primary" />
                </button>
                <div className="mb-8">
                  <h3 className="text-3xl font-serif font-bold text-primary">Declare Result</h3>
                  <p className="text-sage text-sm font-bold uppercase tracking-widest mt-2">Publish Student Grades</p>
                </div>
                <form onSubmit={handleCreateResult} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-4">Student Full Name</label>
                    <input type="text" required value={newResult.studentName} onChange={e => setNewResult({...newResult, studentName: e.target.value})} className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" placeholder="e.g. Mustafa Ahmed" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-4">Roll System Number</label>
                       <input type="text" required value={newResult.rollNo} onChange={e => setNewResult({...newResult, rollNo: e.target.value})} className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" placeholder="RL-1234" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-4">Class Section</label>
                       <select value={newResult.className} onChange={e => setNewResult({...newResult, className: e.target.value})} className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors cursor-pointer appearance-none">
                          <option value="Hifz Quran">Hifz Quran</option>
                          <option value="Nazra Quran">Nazra Quran</option>
                          <option value="Aalim Course">Aalim Course</option>
                          <option value="Islamic History">Islamic History</option>
                       </select>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-4">GPA / Score (Out of 4.0)</label>
                       <input type="text" required value={newResult.gpa} onChange={e => setNewResult({...newResult, gpa: e.target.value})} className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" placeholder="3.95" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-4">Final Grade Letter</label>
                       <select value={newResult.grade} onChange={e => setNewResult({...newResult, grade: e.target.value})} className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors cursor-pointer appearance-none">
                          <option value="A+">A+</option>
                          <option value="A">A</option>
                          <option value="B+">B+</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                          <option value="F">F</option>
                       </select>
                     </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-4">Final Outcomes / Pass Status</label>
                    <select value={newResult.status} onChange={e => setNewResult({...newResult, status: e.target.value})} className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors cursor-pointer appearance-none">
                        <option value="Pass">Pass Exam</option>
                        <option value="Pending Grading">Pending Verification</option>
                        <option value="Fail">Failed Requirement</option>
                    </select>
                  </div>

                  <button type="submit" disabled={modalLoading} className="w-full h-14 bg-primary text-white rounded-2xl font-bold shadow-soft hover:shadow-premium transition-all mt-4">
                    {modalLoading ? "Publishing Records..." : "Submit Result Entry"}
                  </button>
                </form>
             </div>
          </div>
        )}

        {/* Header Summary */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
           <div className="space-y-4">
              <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">MANAGEMENT ERP HUB</span>
              <h1 className="text-6xl font-serif font-bold text-primary leading-tight tracking-tight">Academic Results</h1>
              <p className="text-sage font-black text-[11px] tracking-[0.2em] uppercase opacity-60 italic">Publish marks, manage gradebooks, and generate report cards</p>
           </div>
           
           <div className="flex gap-5 pb-2">
              <button onClick={() => setShowAddModal(true)} className="flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold shadow-premium hover:shadow-pill transition-all active:scale-95 group">
                 <Plus className="w-5 h-5 text-accent" />
                 <span className="text-[11px] font-black uppercase tracking-widest leading-none">Declare Result</span>
              </button>
           </div>
        </div>

        {/* Results Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 pt-4">
           {resultStats.map((stat, i) => (
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
             </div>
           ))}
        </div>

        {/* Gradebook Section */}
        <div className="bg-white p-12 rounded-5xl shadow-premium border border-border/50 space-y-12">
           
           {/* Controls Bar */}
           <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
              <div className="flex items-center bg-background border border-border/40 px-8 h-18 rounded-full w-full xl:w-[500px] shadow-inner">
                 <Search className="w-5 h-5 text-sage/40" />
                 <input 
                   type="text" 
                   placeholder="Search gradebook by student roll number..." 
                   className="flex-1 bg-transparent border-none outline-none pl-4 text-sm font-medium text-primary placeholder:text-sage/40" 
                 />
              </div>

              <div className="flex flex-wrap items-center gap-6">
                 <div className="flex items-center gap-3 px-8 py-5 bg-background border border-border/40 rounded-full h-18 shadow-soft">
                    <Filter className="w-4 h-4 text-accent" />
                    <select className="bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-widest text-primary cursor-pointer pr-4">
                       <option>Examination Cycle</option>
                       <option>Annual 2024</option>
                       <option>Mid-Term 2024</option>
                    </select>
                 </div>
              </div>
           </div>

           {/* Grade Table */}
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="border-b border-background">
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8">Student Detail</th>
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8">Academic Rank</th>
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8">Score / Marks</th>
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8">Outcome</th>
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8 text-right">Certificate Hub</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-background">
                    {loading ? (
                      <tr><td colSpan={5} className="text-center py-10 opacity-50 font-bold">Loading Academic Results...</td></tr>
                    ) : results.length === 0 ? (
                      <tr><td colSpan={5} className="text-center py-10 opacity-50 font-bold">No results declared yet.</td></tr>
                    ) : results.map((res) => (
                      <tr key={res._id} className="group hover:bg-background/20 transition-all duration-300">
                        <td className="py-10 px-8">
                           <div className="flex items-center gap-6">
                              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center font-serif font-bold text-primary text-xl border border-primary/10 shadow-sm relative shrink-0">
                                 <Users className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                 <p className="text-lg font-serif font-bold text-primary group-hover:text-accent transition-colors leading-tight">{res.studentName}</p>
                                 <p className="text-[10px] font-black text-sage tracking-widest mt-1 uppercase opacity-60">Roll No: {res.rollNo} | {res.className}</p>
                              </div>
                           </div>
                        </td>
                        <td className="py-10 px-8">
                           <div className="flex items-center gap-3">
                              <span className={`text-4xl font-serif font-black ${res.grade === 'A+' ? "text-accent" : "text-primary"}`}>{res.grade}</span>
                           </div>
                        </td>
                        <td className="py-10 px-8">
                           <div className="flex flex-col">
                              <span className="text-xl font-serif font-black text-primary tracking-tight">{res.gpa} / 4.00</span>
                              <div className="w-24 h-1.5 bg-background rounded-full mt-2 relative overflow-hidden">
                                 <div className="absolute inset-y-0 left-0 bg-accent rounded-full" style={{ width: `${(parseFloat(res.gpa)/4)*100}%` }}></div>
                              </div>
                           </div>
                        </td>
                        <td className="py-10 px-8">
                           <span className={`inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full border shadow-soft ${
                             res.status === "Pass" ? 'bg-green-50 text-green-600 border-green-100' :
                             res.status === "Fail" ? 'bg-red-50 text-red-600 border-red-100' :
                             'bg-orange-50 text-orange-600 border-orange-100'
                           }`}>
                              {res.status}
                           </span>
                        </td>
                        <td className="py-10 px-8">
                           <div className="flex items-center justify-end gap-4 shadow-soft">
                              <button className="w-12 h-12 flex items-center justify-center bg-white border border-border/40 rounded-2xl hover:bg-primary hover:text-white transition-all shadow-sm group/btn" title="View Gradecard">
                                 <Eye className="w-4 h-4" />
                              </button>
                              <button onClick={() => handleDelete(res._id)} className="w-12 h-12 flex items-center justify-center bg-white border border-border/40 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-sm group/btn" title="Delete Form">
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
                 <Award className="w-4 h-4" />
                 All academic outcomes are verified by the examination committee
              </div>
              <div className="flex items-center gap-4">
                 <button className="text-primary font-black text-[10px] uppercase tracking-widest border-b-2 border-primary/20 hover:border-primary transition-all pb-1">Full Academic Rankings</button>
                 <ChevronRight className="w-4 h-4 opacity-20" />
              </div>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
