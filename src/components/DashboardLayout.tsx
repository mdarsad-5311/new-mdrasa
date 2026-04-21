"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  User, 
  Calendar, 
  CreditCard, 
  Bell, 
  Settings, 
  LogOut, 
  Menu, 
  Search,
  MessageSquare,
  CheckCircle2,
  ChevronRight,
  Landmark,
  ChevronDown,
  Users
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import { Globe } from "lucide-react";

interface SidebarItem {
  name: string;
  icon: any;
  href: string;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: "student" | "parent" | "admin";
  sidebarItems: SidebarItem[];
  userProfile: { name: string; roleName: string; avatar: string };
}

export default function DashboardLayout({ 
  children, 
  sidebarItems,
  userProfile,
  role
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [childSwitcherOpen, setChildSwitcherOpen] = useState(false);
  const pathname = usePathname();
  const { t, isUrdu } = useLanguage();

  const children_list = [
    { name: isUrdu ? "مصطفی احمد" : "Mustafa Ahmed", roll: "#084", active: true },
    { name: isUrdu ? "سارہ احمد" : "Sara Ahmed", roll: "#102", active: false }
  ];

  return (
    <div className={`min-h-screen bg-background flex overflow-hidden ${isUrdu ? "font-urdu" : "font-sans"}`}>
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-primary/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* LEFT SIDEBAR */}
      <aside 
        className={`fixed inset-y-0 ${isUrdu ? "right-0" : "left-0"} z-50 w-80 bg-primary text-white transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : isUrdu ? "translate-x-full" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col pt-10 pb-8 px-6">
          {/* Logo Section */}
          <div className={`flex items-center gap-4 mb-16 ${isUrdu ? "pr-2" : "pl-2"}`}>
            <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white/10 overflow-hidden">
               <Landmark className="w-6 h-6 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-serif font-bold text-white leading-none tracking-tight ${isUrdu ? "font-urdu text-3xl" : ""}`}>
                {t("nav.madrasa_name")}
              </span>
              <span className={`text-[10px] uppercase font-black tracking-[0.2em] text-sage/80 leading-none mt-1 ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>
                {t("side.portal")}
              </span>
            </div>
          </div>

          {/* Sidebar Menu Items */}
          <nav className="flex-1 space-y-3 px-2">
             {sidebarItems.map((item) => {
               const isActive = pathname === item.href;
               return (
                 <Link 
                   key={item.name} 
                   href={item.href}
                   className={`flex items-center gap-5 px-6 py-4 rounded-full transition-all group relative ${
                     isActive ? "bg-white/10 shadow-lg" : "hover:bg-white/5"
                   }`}
                 >
                   <item.icon className={`w-5 h-5 transition-colors ${
                     isActive ? "text-accent" : "text-sage group-hover:text-white"
                   }`} />
                   <span className={`text-sm font-bold tracking-wide transition-colors ${isUrdu ? "font-urdu text-base" : ""} ${
                     isActive ? "text-white" : "text-sage group-hover:text-white"
                   }`}>{item.name}</span>
                   {isActive && (
                      <div className="absolute left-3 w-1.5 h-6 bg-accent rounded-full hidden"></div>
                   )}
                 </Link>
               );
             })}
          </nav>

          {/* Bottom Section */}
          <div className="pt-6 mt-6 border-t border-white/10 space-y-4">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center border border-white/10 overflow-hidden">
                     <span className="text-accent font-bold text-sm">{userProfile.name.charAt(0)}</span>
                  </div>
                  <div className={`flex flex-col ${isUrdu ? "items-end" : "items-start"}`}>
                    <span className="text-xs font-bold text-white leading-none">{userProfile.name}</span>
                    <span className="text-[10px] text-sage font-medium uppercase tracking-widest mt-1">{userProfile.roleName}</span>
                  </div>
               </div>
               <button className={`p-2 text-sage hover:text-white transition-colors group ${isUrdu ? "rotate-180" : ""}`}>
                  <LogOut className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        
        {/* TOP HEADER */}
        <header className="h-28 bg-[#FDFCF9]/80 backdrop-blur-md px-10 flex items-center justify-between relative z-30">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="p-2 lg:hidden text-primary"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Child Switcher Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setChildSwitcherOpen(!childSwitcherOpen)}
                className="flex items-center gap-4 bg-white border border-border/40 px-6 py-3 rounded-full shadow-soft hover:shadow-premium transition-all active:scale-95"
              >
                <div className="w-10 h-10 bg-background/50 rounded-full flex items-center justify-center text-primary border border-border/20">
                  <Users className="w-4 h-4 opacity-40" />
                </div>
                <div className={`flex flex-col ${isUrdu ? "items-end text-right" : "items-start text-left"}`}>
                  <span className={`text-[8px] font-black text-sage/70 tracking-[0.2em] uppercase leading-none mb-1 ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>
                    {isUrdu ? "طالب علم تبدیل کریں" : "SWITCH STUDENT"}
                  </span>
                  <span className="text-sm font-bold text-primary leading-none">Mustafa Ahmed</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-sage/50 transition-transform duration-300 ${isUrdu ? "rotate-180 mr-2" : "ml-2"} ${childSwitcherOpen ? "rotate-180" : ""}`} />
              </button>

              {childSwitcherOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-3xl shadow-premium border border-border p-3 space-y-1 animate-in fade-in slide-in-from-top-2">
                  {children_list.map((child, idx) => (
                    <button 
                      key={idx}
                      className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${
                        child.active ? "bg-primary/5 border border-primary/10" : "hover:bg-background border border-transparent"
                      }`}
                      onClick={() => setChildSwitcherOpen(false)}
                    >
                      <div className="flex flex-col items-start">
                        <span className={`text-sm font-bold ${child.active ? "text-primary" : "text-primary/60"}`}>{child.name}</span>
                        <span className="text-[10px] font-medium text-sage">Roll: {child.roll}</span>
                      </div>
                      {child.active && <div className="w-2 h-2 bg-accent rounded-full"></div>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-6">
             {/* Search Bar */}
             <div className="hidden xl:flex items-center bg-white border border-border/40 px-8 h-14 rounded-full w-[400px] shadow-soft focus-within:shadow-premium transition-all">
                <Search className="w-5 h-5 text-sage/40" />
                <input 
                  type="text" 
                  placeholder={isUrdu ? "تلاش کریں..." : "Search portal..."} 
                  className={`flex-1 bg-transparent border-none outline-none ${isUrdu ? "pr-4" : "pl-4"} text-sm font-medium text-primary placeholder:text-sage/40 ${isUrdu ? "font-urdu" : ""}`} 
                />
             </div>

             <div className="flex items-center gap-4">
               <div className="hidden lg:block">
                  <LanguageToggle />
               </div>
               <button className="w-14 h-14 bg-white rounded-full shadow-soft border border-border/40 flex items-center justify-center hover:shadow-premium transition-all relative group">
                  <Bell className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                  <span className={`absolute top-4 ${isUrdu ? "left-4" : "right-4"} w-2.5 h-2.5 bg-[#FF4D4D] rounded-full border-2 border-white`}></span>
               </button>
               <button className="w-14 h-14 bg-white rounded-full shadow-soft border border-border/40 flex items-center justify-center hover:shadow-premium transition-all group">
                  <MessageSquare className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
               </button>
               
               <div className="h-8 w-px bg-border mx-2"></div>
               
               <Link href={role === 'admin' ? "/admin/settings" : "/parent/settings"} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg transform hover:-rotate-6 transition-transform group">
                     <User className="w-6 h-6 text-white group-hover:text-accent transition-colors" />
                  </div>
               </Link>
             </div>
          </div>
        </header>

        {/* DASHBOARD CONTENT AREA */}
        <div className="flex-1 overflow-y-auto p-8 lg:p-12 space-y-12 scroll-smooth custom-scrollbar">
           {children}
        </div>

      </main>

    </div>
  );
}
