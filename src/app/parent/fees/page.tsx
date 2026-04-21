"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { PARENT_SIDEBAR_ITEMS } from "@/lib/constants";
import { CreditCard, Download, Clock, CheckCircle, AlertCircle, TrendingUp, ArrowRight, ShieldCheck, History, Landmark, Receipt } from "lucide-react";

export default function FeesPage() {
  const feeHistory = [
    { id: "INV-2026-03", type: "Tuition Fee", month: "March 2026", amount: "$45.00", dueDate: "Mar 10, 2026", status: "Pending" },
    { id: "INV-2026-02", type: "Tuition Fee", month: "February 2026", amount: "$45.00", dueDate: "Feb 10, 2026", status: "Paid" },
    { id: "INV-2026-01", type: "Tuition Fee", month: "January 2026", amount: "$45.00", dueDate: "Jan 10, 2026", status: "Paid" },
    { id: "INV-2025-06", type: "Uniform Fee", month: "July 2025", amount: "$25.00", dueDate: "Jul 15, 2025", status: "Paid" },
  ];

  return (
    <DashboardLayout 
      role="parent" 
      sidebarItems={PARENT_SIDEBAR_ITEMS}
      userProfile={{ name: "Mustafa's Parent", roleName: "Parent", avatar: "" }}
    >
      <div className="space-y-12 max-w-7xl animate-in fade-in slide-in-from-right-8 duration-700">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase font-sans">FINANCIAL OVERVIEW</span>
            <h1 className="text-5xl font-serif font-bold text-primary leading-tight">Fees & Accounts</h1>
            <p className="text-sage text-sm font-medium tracking-widest uppercase">
              RECIPIENT: <span className="text-primary font-bold">MUSTAFA AHMED</span> | ID: <span className="text-primary font-bold">#084</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
             <button className="flex items-center gap-3 bg-white border border-border px-8 py-4 rounded-full shadow-soft hover:shadow-premium transition-all text-primary font-bold text-xs uppercase tracking-widest">
                <History className="w-4 h-4 text-accent" /> VIEW FULL LEDGER
             </button>
          </div>
        </div>

        {/* Financial Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="md:col-span-2 bg-primary p-12 rounded-5xl shadow-premium text-white flex flex-col justify-between relative overflow-hidden h-64">
              <Landmark className="absolute top-0 right-0 p-8 w-64 h-64 text-white opacity-5 -translate-y-12 translate-x-12 rotate-12" />
              <div className="relative z-10 flex justify-between items-start">
                 <div>
                    <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">TOTAL OUTSTANDING</span>
                    <h2 className="text-6xl font-serif font-bold mt-2">$45.00</h2>
                 </div>
                 <button className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 shadow-lg shadow-accent/20 transition-all flex items-center gap-3">
                    <CreditCard className="w-4 h-4" /> PAY NOW
                 </button>
              </div>
              <div className="relative z-10 flex items-center gap-3 mt-4">
                 <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                 <span className="text-xs font-medium text-sage italic">Next payment due by March 10, 2026</span>
              </div>
           </div>

           <div className="bg-white p-10 rounded-5xl shadow-soft border border-border flex flex-col justify-between h-64">
              <div className="space-y-4">
                 <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center border border-border">
                    <CheckCircle className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="text-2xl font-serif font-bold text-primary leading-tight">Last Paid</h3>
                 <p className="text-3xl font-serif font-bold text-primary leading-none">$45.00</p>
                 <p className="text-[10px] font-bold text-sage uppercase tracking-widest leading-none">Tuition - Feb 2026</p>
              </div>
           </div>
        </div>

        {/* Invoices and Records */}
        <div className="space-y-8">
           <div className="flex justify-between items-end border-b border-border pb-6">
              <h2 className="text-3xl font-serif font-bold text-primary">Billing Records</h2>
              <button className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase border-b-2 border-accent/20 hover:border-accent transition-all pb-1 flex items-center gap-2">
                <Receipt className="w-3.5 h-3.5" /> RECENT INVOICES
              </button>
           </div>

           <div className="space-y-4 pb-12">
              {feeHistory.map((fee, idx) => (
                <div key={idx} className="flex flex-col xl:flex-row justify-between items-center p-8 bg-white border border-border rounded-4xl hover:border-accent hover:shadow-premium transition-all group">
                   <div className="flex items-center gap-8 w-full xl:w-auto mb-6 xl:mb-0">
                      <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center border border-border shadow-sm group-hover:scale-105 transition-transform">
                         <div className={`p-3 rounded-xl ${fee.status === "Pending" ? "bg-red-50 text-red-500" : "bg-primary/5 text-primary"}`}>
                            <AlertCircle className="w-6 h-6" />
                         </div>
                      </div>
                      <div className="space-y-1">
                         <h6 className="text-lg font-serif font-bold text-primary leading-none">{fee.type}</h6>
                         <p className="text-[10px] font-bold text-sage tracking-[0.2em] uppercase">{fee.month} | INV: {fee.id}</p>
                      </div>
                   </div>

                   <div className="flex flex-col sm:flex-row items-center gap-10 w-full xl:w-auto border-t sm:border-t-0 xl:border-l border-border pt-6 sm:pt-0 xl:pl-10">
                      <div className="text-center sm:text-right w-full sm:w-auto">
                         <p className="text-sm font-bold text-sage uppercase tracking-widest mb-1">DUE DATE</p>
                         <p className="text-lg font-serif font-bold text-primary italic leading-none">{fee.dueDate}</p>
                      </div>
                      
                      <div className="text-center sm:text-right w-full sm:w-auto">
                         <p className="text-sm font-bold text-sage uppercase tracking-widest mb-1">AMOUNT</p>
                         <p className="text-2xl font-serif font-bold text-primary leading-none">{fee.amount}</p>
                      </div>

                      <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
                         <div className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] min-w-[100px] text-center border ${
                            fee.status === "Pending" ? "bg-red-50 text-red-500 border-red-100" : "bg-primary text-white border-primary"
                         }`}>
                           {fee.status}
                         </div>
                         <button className="p-3 bg-background rounded-xl border border-border hover:bg-primary hover:text-white transition-all">
                            <Download className="w-4 h-4" />
                         </button>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Support Call-to-action */}
        <div className="bg-background border border-border p-12 rounded-5xl flex flex-col lg:flex-row justify-between items-center gap-8 relative overflow-hidden mb-12">
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]"></div>
           <div className="space-y-4 text-center lg:text-left relative z-10">
              <h3 className="text-4xl font-serif font-bold text-primary tracking-tight">Need Financial Assistance?</h3>
              <p className="text-lg text-sage font-medium max-w-xl italic leading-relaxed">
                 We offer Zakat-based scholarships and merit rewards for outstanding students. 
                 Reach out to the administrative office for more details.
              </p>
           </div>
           <button className="flex items-center gap-4 bg-white border-2 border-primary text-primary px-10 py-6 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-primary hover:text-white shadow-soft transition-all shrink-0 active:scale-95 group relative z-10">
             DOWNLOAD SCHOLARSHIP FORM <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
           </button>
        </div>

      </div>
    </DashboardLayout>
  );
}


