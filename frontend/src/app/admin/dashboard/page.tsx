"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  Users, 
  UserPlus, 
  Wallet, 
  ChevronRight,
  TrendingUp,
  CreditCard,
  Plus
} from "lucide-react";
import Link from "next/link";
import { ADMIN_SIDEBAR_ITEMS } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

export default function AdminDashboard() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [stats, setStats] = useState({
    totalStudents: 0,
    pendingAdmissions: 0,
    totalInquiries: 0,
    pendingFees: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await api.getStats();
        setStats(data);
      } catch (err: any) {
        console.error("Dashboard Auth Error:", err.message);
        // Catch "Not authorized", "Unauthorized", "401", etc.
        const errorMsg = err.message?.toLowerCase() || "";
        if (errorMsg.includes("authorized") || errorMsg.includes("401")) {
          router.push("/login");
        }
      } finally {
        setLoading(false);
      }
    };
    if (!authLoading && user && user.role === "admin") {
      fetchStats();
    } else if (!authLoading && (!user || user.role !== "admin")) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  return (
    <DashboardLayout 
      role="admin" 
      sidebarItems={ADMIN_SIDEBAR_ITEMS}
      userProfile={{ name: "Admin Office", roleName: "Head Admin", avatar: "" }}
    >
      <div className="space-y-12">
        
        {/* Header Summary */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
           <div className="space-y-4">
              <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">MANAGEMENT ERP HUB</span>
              <h1 className="text-6xl font-serif font-bold text-primary leading-tight tracking-tight">Admin Overview</h1>
              <p className="text-sage font-black text-[11px] tracking-[0.2em] uppercase opacity-60">Academic Session: 2026-2027 | Quarter 1</p>
           </div>
           
           <div className="flex gap-5 pb-2">
              <Link href="/admin/admissions" className="flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold shadow-premium hover:shadow-pill transition-all active:scale-95 group">
                 <UserPlus className="w-5 h-5 text-accent" />
                 <span className="text-[11px] font-black uppercase tracking-widest leading-none">Review Requests</span>
              </Link>
              <button className="flex items-center gap-3 bg-accent text-primary px-10 py-5 rounded-full font-bold shadow-premium hover:shadow-pill transition-all active:scale-95 group">
                 <Plus className="w-5 h-5" />
                 <span className="text-[11px] font-black uppercase tracking-widest leading-none">Add Student</span>
              </button>
           </div>
        </div>

        {/* Top Feature Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 pt-4">
            {[
              { label: "TOTAL STUDENTS", value: (loading || !stats) ? "..." : (stats?.totalStudents?.toString() || "0"), trend: "+12%", up: true, icon: Users, color: "bg-white", text: "text-primary", badge: "bg-accent/20 text-accent", link: "/admin/admissions" },
              { label: "PENDING FEES", value: (loading || !stats) ? "..." : `$${stats?.pendingFees?.toLocaleString() || "0"}`, trend: "+$240", up: true, icon: CreditCard, color: "bg-primary text-white", text: "text-white", badge: "bg-white/10 text-white", link: "/admin/accounts" },
              { label: "NEW ADMISSIONS", value: (loading || !stats) ? "..." : (stats?.pendingAdmissions?.toString() || "0"), trend: "Real-time", up: true, icon: UserPlus, color: "bg-[#F9F8F3]", text: "text-primary", badge: "bg-accent/20 text-accent", link: "/admin/admissions" },
              { label: "TOTAL INQUIRIES", value: (loading || !stats) ? "..." : (stats?.totalInquiries?.toString() || "0"), trend: "Real-time", up: true, icon: Wallet, color: "bg-accent text-primary", text: "text-primary", badge: "", link: "/admin/messages" }
            ].map((stat, i) => (
             <Link href={stat.link} key={i} className={`p-10 rounded-5xl min-h-85 flex flex-col justify-between group cursor-pointer transition-all hover:shadow-premium ${stat.color} shadow-soft border border-border/50 relative overflow-hidden`}>
                <div className="flex justify-between items-start">
                   <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-soft transition-transform group-hover:scale-110 border border-border/20`}>
                      <stat.icon className={`w-7 h-7 ${stat.color === 'bg-white' || stat.color === 'bg-[#F9F8F3]' ? "text-primary" : "text-primary placeholder:text-primary"} `} />
                   </div>
                   {stat.trend && (
                     <div className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest ${stat.badge}`}>
                        {stat.trend}
                     </div>
                   )}
                </div>
                
                <div className="space-y-1">
                  <p className={`text-6xl font-serif font-bold tracking-tight leading-none ${stat.text}`}>{stat.value}</p>
                  <p className={`text-[10px] font-black uppercase tracking-[0.3em] leading-none opacity-40 mt-4 ${stat.text}`}>{stat.label}</p>
                </div>
                
                <div className="pt-8 border-t border-black/5 flex items-center justify-between transition-all">
                   <span className={`text-[10px] font-bold italic opacity-40 uppercase tracking-widest ${stat.text}`}>View Full List</span>
                   <ChevronRight className={`w-4 h-4 opacity-20 group-hover:translate-x-2 transition-transform ${stat.text}`} />
                </div>
             </Link>
           ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
