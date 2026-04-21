"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { ADMIN_SIDEBAR_ITEMS } from "@/lib/constants";
import { 
  CreditCard, 
  Wallet, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  DollarSign, 
  Download, 
  Search, 
  Filter, 
  MoreVertical, 
  CheckCircle2, 
  Clock, 
  Plus,
  Landmark,
  ShieldCheck,
  ChevronRight,
  Eye,
  Trash2,
  X
} from "lucide-react";

export default function FeesAccountsPage() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal setup
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTransaction, setNewTransaction] = useState({ payeeName: "", amount: "", category: "Tuition Fee", method: "Online", status: "Paid" });
  const [modalLoading, setModalLoading] = useState(false);

  const fetchTransactions = async () => {
    try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/transactions", {
           headers: {
             "Authorization": `Bearer ${token}`
           }
        });
        const data = await res.json();
        if (res.ok) {
           setTransactions(data);
        }
    } catch (err) {
        console.error("Failed to fetch ledger", err);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
     fetchTransactions();
  }, []);

  const handleRecordPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/transactions", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${token}`
         },
         body: JSON.stringify(newTransaction)
      });
      const data = await res.json();
      if (res.ok) {
         setTransactions([data, ...transactions]);
         setShowAddModal(false);
         setNewTransaction({ payeeName: "", amount: "", category: "Tuition Fee", method: "Online", status: "Paid" });
      } else {
         alert(data.message || "Failed to record payment");
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
      const res = await fetch(`http://localhost:5000/api/transactions/${id}`, {
         method: "PUT",
         headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${token}`
         },
         body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
         setTransactions(prev => prev.map(t => t._id === id ? { ...t, status: newStatus } : t));
      } else {
         alert("Failed to update payment status.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error.");
    }
  };

  const handleDelete = async (id: string) => {
    if(!confirm("Are you sure you want to delete this financial record?")) return;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/transactions/${id}`, {
         method: "DELETE",
         headers: {
           "Authorization": `Bearer ${token}`
         }
      });
      if (res.ok) {
         setTransactions(prev => prev.filter(t => t._id !== id));
      } else {
         alert("Failed to delete record.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error.");
    }
  };

  // Compute dynamic stats
  const totalRevenue = transactions.filter(t => t.status === 'Paid').reduce((sum, rx) => sum + Number(rx.amount), 0);
  const pendingFees = transactions.filter(t => t.status === 'Due' || t.status === 'Pending').reduce((sum, rx) => sum + Number(rx.amount), 0);
  const totalScholarships = transactions.filter(t => t.category === 'Scholarship').length;
  const totalDonations = transactions.filter(t => t.category === 'Donation' && t.status === 'Paid').reduce((sum, rx) => sum + Number(rx.amount), 0);

  const accountStats = [
    { label: "TOTAL REVENUE", value: `$${totalRevenue.toLocaleString()}`, count: "Overall Earned", up: true, icon: Landmark, color: "bg-white", text: "text-primary" },
    { label: "PENDING FEES", value: `$${pendingFees.toLocaleString()}`, count: "Awaiting Action", up: false, icon: Clock, color: "bg-primary text-white", text: "text-white" },
    { label: "SCHOLARSHIPS", value: totalScholarships.toString(), count: "Active Grants", up: true, icon: ShieldCheck, color: "bg-white", text: "text-primary" },
    { label: "MONTHLY DONATIONS", value: `$${totalDonations.toLocaleString()}`, count: "External Assets", up: true, icon: Wallet, color: "bg-accent text-primary", text: "text-primary" },
  ];

  return (
    <DashboardLayout 
      role="admin" 
      sidebarItems={ADMIN_SIDEBAR_ITEMS}
      userProfile={{ name: "Admin Office", roleName: "Head Admin", avatar: "" }}
    >
      <div className="space-y-12 animate-in fade-in duration-700 relative">
        
        {/* RECORD PAYMENT MODAL */}
        {showAddModal && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-primary/20 backdrop-blur-sm">
             <div className="bg-white rounded-4xl shadow-premium w-full max-w-lg p-10 relative overflow-hidden h-fit max-h-[95vh] overflow-y-auto">
                <button onClick={() => setShowAddModal(false)} className="absolute top-6 right-6 p-2 bg-background rounded-full hover:bg-black/5 transition-colors">
                  <X className="w-5 h-5 text-primary" />
                </button>
                <div className="mb-6">
                  <h3 className="text-3xl font-serif font-bold text-primary">Record Payment</h3>
                  <p className="text-sage text-sm font-bold uppercase tracking-widest mt-2">Log a new financial transaction</p>
                </div>
                <form onSubmit={handleRecordPayment} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-4">Payee Details / Student Name</label>
                    <input type="text" required value={newTransaction.payeeName} onChange={e => setNewTransaction({...newTransaction, payeeName: e.target.value})} className="w-full h-12 px-6 bg-background rounded-xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" placeholder="e.g. Mustafa Ahmed" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-4">Transaction Amount ($)</label>
                    <input type="number" step="0.01" required value={newTransaction.amount} onChange={e => setNewTransaction({...newTransaction, amount: e.target.value})} className="w-full h-12 px-6 bg-background rounded-xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" placeholder="450.00" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-4">Ledger Category</label>
                       <select value={newTransaction.category} onChange={e => setNewTransaction({...newTransaction, category: e.target.value})} className="w-full h-12 px-6 bg-background rounded-xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors cursor-pointer appearance-none">
                          <option value="Tuition Fee">Tuition Fee</option>
                          <option value="Exam Fee">Exam Fee</option>
                          <option value="Registration">Registration</option>
                          <option value="Donation">Donation</option>
                          <option value="Scholarship">Scholarship</option>
                       </select>
                     </div>
                     <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-4">Payment Method</label>
                       <select value={newTransaction.method} onChange={e => setNewTransaction({...newTransaction, method: e.target.value})} className="w-full h-12 px-6 bg-background rounded-xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors cursor-pointer appearance-none">
                          <option value="Online">Online Transfer</option>
                          <option value="Cash">Cash Ledger</option>
                          <option value="Bank">Bank Deposit</option>
                          <option value="Check">Check / Draft</option>
                       </select>
                     </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-4">Transaction Status</label>
                    <select value={newTransaction.status} onChange={e => setNewTransaction({...newTransaction, status: e.target.value})} className="w-full h-12 px-6 bg-background rounded-xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors cursor-pointer appearance-none">
                        <option value="Paid">Processed (Paid)</option>
                        <option value="Pending">Pending Clearance</option>
                        <option value="Due">Invoice Sent (Due)</option>
                    </select>
                  </div>

                  <button type="submit" disabled={modalLoading} className="w-full h-14 bg-primary text-white rounded-2xl font-bold shadow-soft hover:shadow-premium transition-all mt-4">
                    {modalLoading ? "Processing Ledger..." : "Log Transaction to Ledger"}
                  </button>
                </form>
             </div>
          </div>
        )}

        {/* Header Summary */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
           <div className="space-y-4">
              <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">MANAGEMENT ERP HUB</span>
              <h1 className="text-6xl font-serif font-bold text-primary leading-tight tracking-tight">Fees & Accounts</h1>
              <p className="text-sage font-black text-[11px] tracking-[0.2em] uppercase opacity-60 italic">Manage student billing, school expenses, and donations</p>
           </div>
           
           <div className="flex gap-5 pb-2">
              <button className="flex items-center gap-3 bg-white border border-border/50 text-sage px-10 py-5 rounded-full font-bold shadow-soft hover:shadow-premium transition-all active:scale-95 group">
                 <Download className="w-5 h-5" />
                 <span className="text-[11px] font-black uppercase tracking-widest leading-none">Financial Statements</span>
              </button>
              <button onClick={() => setShowAddModal(true)} className="flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold shadow-premium hover:shadow-pill transition-all active:scale-95 group">
                 <Plus className="w-5 h-5 text-accent" />
                 <span className="text-[11px] font-black uppercase tracking-widest leading-none">Record Payment</span>
              </button>
           </div>
        </div>

        {/* Financial Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 pt-4">
           {accountStats.map((stat, i) => (
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

        {/* Transactions Section */}
        <div className="bg-white p-12 rounded-5xl shadow-premium border border-border/50 space-y-12">
           
           {/* Controls Bar */}
           <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
              <div className="flex items-center bg-background border border-border/40 px-8 h-18 rounded-full w-full xl:w-[500px] shadow-inner">
                 <Search className="w-5 h-5 text-sage/40" />
                 <input 
                   type="text" 
                   placeholder="Search ledger by payee name..." 
                   className="flex-1 bg-transparent border-none outline-none pl-4 text-sm font-medium text-primary placeholder:text-sage/40" 
                 />
              </div>

              <div className="flex flex-wrap items-center gap-6">
                 <div className="flex items-center gap-3 px-8 py-5 bg-background border border-border/40 rounded-full h-18 shadow-soft">
                    <Filter className="w-4 h-4 text-accent" />
                    <select className="bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-widest text-primary cursor-pointer pr-4">
                       <option>All Transactions</option>
                       <option>Tuition Fees</option>
                       <option>Donations</option>
                       <option>Expenses</option>
                    </select>
                 </div>
                 <div className="flex items-center gap-3 px-8 py-5 bg-background border border-border/40 rounded-full h-18 shadow-soft">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    <select className="bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-widest text-primary cursor-pointer pr-4">
                       <option>Status Filter</option>
                       <option>Paid</option>
                       <option>Due / Pending</option>
                    </select>
                 </div>
              </div>
           </div>

           {/* Ledger Table */}
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="border-b border-background">
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8">Payee Detail</th>
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8">Amount</th>
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8">Ledger Head</th>
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8">Reference Date</th>
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8">Status</th>
                       <th className="pb-10 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] px-8 text-right">Action Hub</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-background">
                    {loading ? (
                      <tr><td colSpan={6} className="text-center py-10 opacity-50 font-bold">Loading Ledger History...</td></tr>
                    ) : transactions.length === 0 ? (
                      <tr><td colSpan={6} className="text-center py-10 opacity-50 font-bold">No transactions recorded yet.</td></tr>
                    ) : transactions.map((trx) => (
                      <tr key={trx._id} className="group hover:bg-background/20 transition-all duration-300">
                        <td className="py-10 px-8">
                           <div className="flex items-center gap-6">
                              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center font-serif font-bold text-primary text-xl border border-primary/10 shadow-sm relative shrink-0">
                                 <CreditCard className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                 <p className="text-lg font-serif font-bold text-primary group-hover:text-accent transition-colors leading-tight">{trx.payeeName}</p>
                                 <p className="text-[10px] font-black text-sage tracking-widest mt-1 uppercase opacity-60">Payment via {trx.method}</p>
                              </div>
                           </div>
                        </td>
                        <td className="py-10 px-8">
                           <span className="text-xl font-serif font-black text-primary tracking-tight">${Number(trx.amount).toFixed(2)}</span>
                        </td>
                        <td className="py-10 px-8">
                           <span className="text-[10px] font-black uppercase tracking-widest px-5 py-2.5 bg-accent/20 text-primary border border-accent/20 rounded-full shadow-soft">{trx.category}</span>
                        </td>
                        <td className="py-10 px-8 text-sm font-medium text-sage italic">{new Date(trx.createdAt).toLocaleDateString()}</td>
                        <td className="py-10 px-8">
                           <span className={`inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full border shadow-soft ${
                             trx.status === "Paid" ? "bg-green-50 text-green-600 border-green-100" :
                             trx.status === "Due" ? "bg-red-50 text-red-600 border-red-100" :
                             "bg-orange-50 text-orange-600 border-orange-100"
                           }`}>
                              {trx.status}
                           </span>
                        </td>
                        <td className="py-10 px-8">
                           <div className="flex items-center justify-end gap-4 shadow-soft">
                              {trx.status !== 'Paid' && (
                                <button onClick={() => handleUpdateStatus(trx._id, 'Paid')} className="w-12 h-12 flex items-center justify-center bg-white border border-border/40 rounded-2xl hover:bg-green-500 hover:text-white transition-all shadow-sm group/btn" title="Mark as Paid">
                                   <CheckCircle2 className="w-4 h-4" />
                                </button>
                              )}
                              <button onClick={() => handleDelete(trx._id)} className="w-12 h-12 flex items-center justify-center bg-white border border-border/40 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-sm group/btn" title="Delete Ledger Entry">
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
                 <ShieldCheck className="w-4 h-4" />
                 All transactions are secured and verified by the central treasury
              </div>
              <div className="flex items-center gap-4">
                 <button className="text-primary font-black text-[10px] uppercase tracking-widest border-b-2 border-primary/20 hover:border-primary transition-all pb-1">Download Ledger Archive</button>
                 <ChevronRight className="w-4 h-4 opacity-20" />
              </div>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
