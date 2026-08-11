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
  Target,
  Trophy,
  History,
  Star
} from "lucide-react";
import Link from "next/link";

import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";
import { api } from "@/lib/api";

export default function FeesPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <DashboardLayout 
      role="student" 
      sidebarItems={sidebarItems}
      userProfile={{ name: user?.name || "Student", roleName: "Student", avatar: "" }}
    >
      <div className="max-w-360 mx-auto px-4 md:px-10 space-y-12 pb-20 relative">
      {loading ? (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
        {/* Page Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b-2 border-primary/5">
           <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-px bg-accent"></span>
                <span className="text-accent font-sans font-bold tracking-[0.3em] uppercase text-[10px]">Financial Status</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary leading-tight">Fee Management</h2>
              <p className="text-primary/40 font-sans font-semibold text-sm tracking-widest uppercase">Subscription & Payments / 2026</p>
           </div>
           <div className="flex gap-4">
              <button className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all">
                <Plus className="w-4 h-4 text-accent" />
                Make Quick Payment
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { label: "Current Balance", value: "$45.00", icon: CreditCard, color: "bg-white", sub: "Due: April 5", accent: "text-accent" },
             { label: "Total Paid (YTD)", value: "$280.00", icon: TrendingUp, color: "bg-white", sub: "4 installments", accent: "text-primary" },
             { label: "Scholarship", value: "20%", icon: Award, color: "bg-primary text-white", sub: "Academic Merit", accent: "text-accent" },
             { label: "Last Payment", value: "$65.00", icon: History, color: "bg-white", sub: "Mar 10, 2026", accent: "text-primary" },
           ].map((stat, i) => (
              <div key={i} className={`p-8 rounded-4xl border border-beige/10 shadow-soft space-y-6 ${stat.color}`}>
                 <div className="flex justify-between items-center">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${i === 2 ? 'bg-white/10' : 'bg-primary/5'}`}>
                       <stat.icon className={`w-6 h-6 ${stat.accent}`} />
                    </div>
                 </div>
                 <div className="space-y-1">
                    <p className="text-4xl font-serif font-black text-inherit">{stat.value}</p>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${i === 2 ? 'text-white/40' : 'text-primary/30'}`}>{stat.label}</p>
                 </div>
              </div>
           ))}
        </div>

        <div className="bg-white p-10 rounded-4xl border border-beige/10 shadow-soft overflow-hidden">
           <h4 className="text-xl font-serif font-black text-primary mb-8 pb-4 border-b border-primary/5">Transaction History</h4>
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="text-[10px] font-black uppercase text-primary/30 tracking-widest border-b border-primary/5">
                       <th className="pb-6">Receipt ID</th>
                       <th className="pb-6">Description</th>
                       <th className="pb-6">Date</th>
                       <th className="pb-6">Amount</th>
                       <th className="pb-6">Status</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-primary/5">
                    {[
                      { id: "#RE-492", desc: "March Tuition Fee", date: "Mar 10, 2026", amt: "$65.00", status: "Paid" },
                      { id: "#RE-381", desc: "Registration Charges", date: "Feb 05, 2026", amt: "$120.00", status: "Paid" },
                    ].map((tx, idx) => (
                      <tr key={idx} className="group hover:bg-cream/30 transition-all">
                         <td className="py-6 font-bold text-sm">{tx.id}</td>
                         <td className="py-6 text-sm font-medium">{tx.desc}</td>
                         <td className="py-6 text-sm text-primary/40 font-bold">{tx.date}</td>
                         <td className="py-6 font-serif font-black text-primary">{tx.amt}</td>
                         <td className="py-6">
                            <span className="px-4 py-2 bg-green-50 text-green-600 text-[10px] font-black uppercase rounded-full border border-green-100">
                               {tx.status}
                            </span>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
        </>
      )}
      </div>
    </DashboardLayout>
  );
}
