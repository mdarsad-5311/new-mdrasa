"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { 
  BarChart3, 
  Calendar, 
  Clock, 
  BookOpen, 
  CreditCard, 
  Bell, 
  User, 
  CheckCircle2, 
  FileText,
  Award,
  ChevronRight,
  TrendingUp,
  Download,
  Plus,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Receipt,
  HelpCircle,
  Wallet
} from "lucide-react";
import Link from "next/link";

const sidebarItems = [
  { name: "Overview", href: "/student/dashboard", icon: BarChart3 },
  { name: "My Profile", href: "/student/profile", icon: User },
  { name: "Attendance", href: "/student/attendance", icon: Calendar },
  { name: "Fee Status", href: "/student/fees", icon: CreditCard },
  { name: "Results", href: "/student/results", icon: CheckCircle2 },
  { name: "Notices", href: "/student/notices", icon: Bell },
  { name: "Timetable", href: "/student/timetable", icon: Clock },
  { name: "Homework", href: "/student/homework", icon: BookOpen },
];

export default function FeesPage() {
  const feeHistory = [
    { month: "March 2026", type: "Tuition Fee", amount: "$45.00", dueDate: "March 05, 2026", payDate: "March 02, 2026", status: "Paid" },
    { month: "February 2026", type: "Tuition Fee", amount: "$45.00", dueDate: "Feb 05, 2026", payDate: "Feb 04, 2026", status: "Paid" },
    { month: "January 2026", type: "Admission Fee", amount: "$150.00", dueDate: "Jan 05, 2026", payDate: "Jan 05, 2026", status: "Paid" },
    { month: "April 2026", type: "Tuition Fee", amount: "$45.00", dueDate: "April 05, 2026", payDate: "-", status: "Pending" },
  ];

  return (
    <DashboardLayout 
      role="student" 
      sidebarItems={sidebarItems}
      userProfile={{ name: "Mustafa Ahmed", roleName: "Student", avatar: "" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 space-y-12 pb-20 relative">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b-2 border-primary/5">
           <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-px bg-accent"></span>
                <span className="text-accent font-sans font-bold tracking-[0.3em] uppercase text-[10px]">Financial Records</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary leading-tight">Fee Status</h2>
              <p className="text-primary/40 font-sans font-semibold text-sm tracking-widest uppercase">Student Account #MN-2026-FEE</p>
           </div>
           <div className="flex gap-4">
              <button className="flex items-center gap-3 bg-white border-2 border-primary/5 text-primary px-8 py-4 rounded-2xl font-bold shadow-sm hover:bg-cream hover:border-accent/20 transition-all group">
                <FileText className="w-4 h-4 text-accent" />
                Ledger Statement
              </button>
           </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { label: "Total Annual Fee", value: "$540.00", icon: Wallet, color: "bg-white", sub: "Session 2026", trend: "Fixed" },
             { label: "Paid Amount", value: "$240.00", icon: CheckCircle2, color: "bg-primary text-white", sub: "Cleared So Far", trend: "45%" },
             { label: "Pending Amount", value: "$45.00", icon: TrendingUp, color: "bg-white", sub: "Due This Month", trend: "Urgent" },
             { label: "Next Due Date", value: "April 05", icon: Calendar, color: "bg-white", sub: "Tuition Fee", trend: "Next" },
           ].map((stat, i) => (
             <div key={i} className={`p-8 rounded-4xl shadow-soft border border-beige/10 space-y-6 flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-2 transition-all ${stat.color} cursor-default`}>
                <div className="flex justify-between items-center">
                   <div className={`w-14 h-14 ${i === 1 ? 'bg-white/10' : 'bg-primary/5'} rounded-2xl flex items-center justify-center transition-all group-hover:scale-110`}>
                      <stat.icon className={`w-6 h-6 ${i === 1 ? 'text-accent' : 'text-primary'}`} />
                   </div>
                   <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${i === 1 ? 'bg-white/20 text-white' : 'bg-accent/10 text-accent'}`}>{stat.trend}</span>
                </div>
                <div className="space-y-1">
                   <p className="text-4xl md:text-5xl font-serif font-black tracking-tight leading-none group-hover:text-accent transition-colors">{stat.value}</p>
                   <p className={`text-[10px] font-sans font-black uppercase tracking-[0.2em] ${i === 1 ? 'text-white/60' : 'text-primary/30'}`}>{stat.label}</p>
                </div>
                <div className={`pt-4 border-t ${i === 1 ? 'border-white/10' : 'border-primary/5'} flex items-center justify-between`}>
                   <span className={`text-[10px] font-bold italic ${i === 1 ? 'text-white/40' : 'text-primary/30'}`}>{stat.sub}</span>
                </div>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 pt-4">
           {/* Payment History Table */}
           <div className="xl:col-span-8 space-y-8">
              <div className="flex justify-between items-center pb-4 border-b border-primary/5">
                 <h4 className="text-3xl font-serif font-bold text-primary">Payment History</h4>
                 <Link href="#" className="text-[10px] font-black text-accent uppercase tracking-widest border-b border-accent hover:text-primary transition-colors">Download All Receipts</Link>
              </div>
              
              <div className="bg-white rounded-3xl shadow-soft border border-beige/10 overflow-hidden">
                 <table className="w-full text-left border-collapse">
                    <thead className="bg-primary/5 text-[10px] font-black uppercase tracking-widest text-primary/40 border-b border-primary/5">
                       <tr>
                          <th className="px-8 py-5">Month / Type</th>
                          <th className="px-8 py-5">Amount</th>
                          <th className="px-8 py-5">Due Date</th>
                          <th className="px-8 py-5">Status</th>
                          <th className="px-8 py-5 text-center">Receipt</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/5">
                       {feeHistory.map((row, idx) => (
                          <tr key={idx} className="group hover:bg-cream/30 transition-colors">
                             <td className="px-8 py-7">
                                <div className="space-y-1">
                                   <p className="text-sm font-sans font-bold text-primary">{row.month}</p>
                                   <p className="text-[10px] font-sans font-bold text-primary/40 uppercase tracking-widest">{row.type}</p>
                                </div>
                             </td>
                             <td className="px-8 py-7">
                                <p className="text-lg font-serif font-black text-primary">{row.amount}</p>
                             </td>
                             <td className="px-8 py-7">
                                <p className="text-[10px] font-sans font-black text-primary/30 uppercase tracking-widest">{row.dueDate}</p>
                                {row.payDate !== "-" && <p className="text-[9px] text-primary/20 font-bold italic mt-1">Paid on {row.payDate}</p>}
                             </td>
                             <td className="px-8 py-7">
                                <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border shadow-sm ${
                                   row.status === "Paid" 
                                   ? "bg-primary/5 border-primary/10 text-primary" 
                                   : "bg-accent/10 border-accent/20 text-accent animate-pulse"
                                }`}>
                                   {row.status}
                                </span>
                             </td>
                             <td className="px-8 py-7 text-center">
                                {row.status === "Paid" ? (
                                   <button className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary/40 hover:bg-primary hover:text-white transition-all mx-auto">
                                      <Receipt className="w-4 h-4" />
                                   </button>
                                ) : (
                                   <span className="text-[9px] font-black text-primary/10 uppercase tracking-widest">N/A</span>
                                )}
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>

           {/* Sidebar: Pending Reminder & Receipts */}
           <div className="xl:col-span-4 space-y-12">
              
              {/* Highlighted Pending Card */}
              <div className="bg-primary p-10 rounded-4xl text-white relative overflow-hidden group shadow-2xl shadow-primary/20">
                 <div className="absolute top-0 right-0 p-8 transform translate-x-8 -translate-y-8 opacity-20 pointer-events-none group-hover:scale-110 transition-all duration-700">
                    <CreditCard className="w-48 h-48" />
                 </div>
                 
                 <div className="relative z-10 space-y-8">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                          <Clock className="w-5 h-5 text-accent" />
                       </div>
                       <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em]">Payment Reminder</span>
                    </div>
                    
                    <div className="space-y-3">
                       <p className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-none">Pending Fees</p>
                       <p className="text-5xl font-serif font-black leading-none">$45.00</p>
                       <p className="text-xs font-medium text-white/60">Payable by April 05, 2026</p>
                    </div>

                    <div className="space-y-4 pt-4">
                       <button className="w-full py-5 bg-accent hover:bg-white text-white hover:text-primary transition-all rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-accent/20">
                          Pay Now $45.00
                       </button>
                       <button className="flex items-center justify-center gap-2 w-full py-2 text-white/40 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">
                          <HelpCircle className="w-3.5 h-3.5" />
                          Support & Help
                       </button>
                    </div>
                 </div>
              </div>

              {/* Receipt Previews */}
              <div className="space-y-6">
                 <h4 className="text-xl font-serif font-black text-primary italic px-4">Latest Receipts</h4>
                 <div className="space-y-4">
                    {[
                      { id: "#REC-9821", date: "March 02, 2026", amount: "$45.00" },
                      { id: "#REC-9704", date: "Feb 04, 2026", amount: "$45.00" },
                    ].map((rec, r) => (
                       <div key={r} className="p-6 bg-white border border-beige/10 rounded-3xl shadow-sm hover:shadow-soft transition-all group flex items-center justify-between cursor-pointer">
                          <div className="flex items-center gap-4">
                             <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary/30 group-hover:bg-primary group-hover:text-white transition-all">
                                <Receipt className="w-5 h-5" />
                             </div>
                             <div className="space-y-1">
                                <p className="text-sm font-bold text-primary">{rec.id}</p>
                                <p className="text-[10px] text-primary/30 font-black uppercase tracking-widest">{rec.date}</p>
                             </div>
                          </div>
                          <p className="text-lg font-serif font-black text-accent">{rec.amount}</p>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Payment Timeline */}
              <div className="p-8 bg-cream border border-primary/5 rounded-4xl space-y-6">
                 <h5 className="text-lg font-serif font-black text-primary">Instructions</h5>
                 <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                       <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5"></div>
                       <p className="text-xs text-primary/60 font-medium">Please pay monthly fees before the 5th.</p>
                    </li>
                    <li className="flex items-start gap-3">
                       <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5"></div>
                       <p className="text-xs text-primary/60 font-medium">Late payment will incur a $5 charge.</p>
                    </li>
                    <li className="flex items-start gap-3">
                       <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5"></div>
                       <p className="text-xs text-primary/60 font-medium">Bank transfer takes 24h for verification.</p>
                    </li>
                 </ul>
              </div>

           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}


