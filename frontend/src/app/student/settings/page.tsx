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
  Settings,
  Shield,
  Key,
  Globe,
  Palette,
  HelpCircle,
  LogOut
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

export default function SettingsPage() {
  return (
    <DashboardLayout 
      role="student" 
      sidebarItems={sidebarItems}
      userProfile={{ name: "Mustafa Ahmed", roleName: "Student", avatar: "" }}
    >
      <div className="max-w-360 mx-auto px-4 md:px-10 space-y-12 pb-20 relative">
        
        {/* Header Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b-2 border-primary/5">
           <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-px bg-accent"></span>
                <span className="text-accent font-sans font-bold tracking-[0.3em] uppercase text-[10px]">Portal Configuration</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">Settings</h2>
              <p className="text-primary/40 font-sans font-semibold text-sm tracking-widest uppercase">Student Portal v.2026.04</p>
           </div>
           <div className="flex gap-4">
              <button className="flex items-center gap-3 bg-red-500/5 text-red-500 px-8 py-4 rounded-2xl font-bold border border-red-500/10 hover:bg-red-500 hover:text-white transition-all shadow-xl shadow-red-500/10">
                 <LogOut className="w-4 h-4" />
                 Sign Out
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-4">
           {/* Left Column: Input Forms */}
           <div className="md:col-span-8 space-y-12">
              
              {/* Personal Information Form */}
              <div className="bg-white rounded-3xl shadow-soft border border-beige/10 p-10 space-y-10 group cursor-default">
                 <div className="flex justify-between items-center pb-4 border-b border-primary/5">
                    <h4 className="text-2xl font-serif font-black text-primary flex items-center gap-4">
                       <User className="w-6 h-6 text-accent group-hover:rotate-12 transition-transform" />
                       Personal Information
                    </h4>
                    <span className="text-[9px] font-black uppercase text-primary/20 tracking-widest leading-none">Security Masked</span>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-primary/30 uppercase tracking-widest">Full Name</label>
                       <input type="text" defaultValue="Mustafa Ahmed" className="w-full h-16 px-6 bg-cream/30 border-2 border-primary/5 rounded-2xl font-bold text-sm text-primary focus:outline-none focus:border-accent/40 shadow-sm transition-all" />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-primary/30 uppercase tracking-widest">Email Address</label>
                       <input type="email" defaultValue="mustafa.ahmed@example.com" className="w-full h-16 px-6 bg-cream/30 border-2 border-primary/5 rounded-2xl font-bold text-sm text-primary focus:outline-none focus:border-accent/40 shadow-sm transition-all" />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-primary/30 uppercase tracking-widest">Phone Number</label>
                       <input type="text" defaultValue="+91 98765 43210" className="w-full h-16 px-6 bg-cream/30 border-2 border-primary/5 rounded-2xl font-bold text-sm text-primary focus:outline-none focus:border-accent/40 shadow-sm transition-all" />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-primary/30 uppercase tracking-widest">Home Address</label>
                       <input type="text" defaultValue="45 Green Valley, Lucknow, UP" className="w-full h-16 px-6 bg-cream/30 border-2 border-primary/5 rounded-2xl font-bold text-sm text-primary focus:outline-none focus:border-accent/40 shadow-sm transition-all" />
                    </div>
                 </div>
              </div>

              {/* Account Security / Password Change */}
              <div className="bg-white rounded-3xl shadow-soft border border-beige/10 p-10 space-y-10 group cursor-default">
                 <div className="flex justify-between items-center pb-4 border-b border-primary/5">
                    <h4 className="text-2xl font-serif font-black text-primary flex items-center gap-4">
                       <Shield className="w-6 h-6 text-accent group-hover:rotate-12 transition-transform" />
                       Account Security
                    </h4>
                    <span className="text-[9px] font-black uppercase text-primary/20 tracking-widest leading-none">Last Updated 30d Ago</span>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3 sm:col-span-2">
                       <label className="text-[10px] font-black text-primary/30 uppercase tracking-widest">Current Password</label>
                       <div className="relative group/pass">
                          <input type="password" placeholder="••••••••" className="w-full h-16 px-6 bg-cream/30 border-2 border-primary/5 rounded-2xl font-bold text-sm text-primary focus:outline-none focus:border-accent/40 shadow-sm transition-all" />
                          <Key className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/20 group-hover/pass:text-accent transition-colors" />
                       </div>
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-primary/30 uppercase tracking-widest">New Password</label>
                       <input type="password" placeholder="Enter new password" className="w-full h-16 px-6 bg-cream/30 border-2 border-primary/5 rounded-2xl font-bold text-sm text-primary focus:outline-none focus:border-accent/40 shadow-sm transition-all" />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-primary/30 uppercase tracking-widest">Confirm Password</label>
                       <input type="password" placeholder="Repeat new password" className="w-full h-16 px-6 bg-cream/30 border-2 border-primary/5 rounded-2xl font-bold text-sm text-primary focus:outline-none focus:border-accent/40 shadow-sm transition-all" />
                    </div>
                 </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-6 pt-6">
                 <button className="flex-1 md:flex-none flex items-center justify-center gap-3 py-6 px-12 bg-primary text-white rounded-3xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-primary/20 hover:-translate-y-1 transition-all">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    Save All Changes
                 </button>
                 <button className="flex-1 md:flex-none flex items-center justify-center gap-3 py-6 px-12 bg-white border-2 border-primary/5 text-primary rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-cream transition-all">
                    Discard Transitions
                 </button>
              </div>
           </div>

           {/* Right Column: Preferences & Support */}
           <div className="md:col-span-4 space-y-12">
              
              {/* Notification Preferences */}
              <div className="bg-primary/5 p-10 rounded-4xl border border-primary/10 space-y-10 group">
                 <div className="flex justify-between items-center pb-4 border-b border-primary/5">
                    <h5 className="text-xl font-serif font-black text-primary flex items-center gap-3">
                       <Bell className="w-5 h-5 text-accent" />
                       Notifications
                    </h5>
                    <span className="w-2 h-2 bg-accent rounded-full animate-ping"></span>
                 </div>
                 
                 <div className="space-y-8">
                    {[
                      { label: "SMS Alerts", desc: "For Fee & Admission", active: true },
                      { label: "Email Notices", desc: "For Exam Results", active: true },
                      { label: "App Pushes", desc: "For New Homework", active: false },
                    ].map((pref, p) => (
                       <div key={p} className="flex justify-between items-center group/item hover:px-2 transition-all">
                          <div className="space-y-0.5">
                             <p className="text-sm font-bold text-primary group-hover/item:text-accent transition-colors">{pref.label}</p>
                             <p className="text-[10px] text-primary/30 font-black uppercase tracking-widest leading-none">{pref.desc}</p>
                          </div>
                          <button className={`w-12 h-6 rounded-full relative transition-all ${pref.active ? 'bg-primary' : 'bg-primary/10 border border-primary/5'}`}>
                             <div className={`absolute top-1 w-4 h-4 rounded-full transition-all ${pref.active ? 'right-1 bg-accent shadow-sm' : 'left-1 bg-primary/20'}`}></div>
                          </button>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Language & Theme */}
              <div className="bg-white border border-beige/10 shadow-soft p-10 rounded-4xl space-y-8">
                 <div className="space-y-6">
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] flex items-center gap-2">
                          <Globe className="w-3.5 h-3.5 text-accent" /> Default Language
                       </label>
                       <select className="w-full h-12 px-4 bg-cream/30 border border-primary/5 rounded-xl font-bold text-xs text-primary focus:outline-none hover:border-accent/40 transition-all cursor-pointer">
                          <option>English (US)</option>
                          <option>Urdu (پاکستانی)</option>
                          <option>Arabic (العربية)</option>
                       </select>
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] flex items-center gap-2">
                          <Palette className="w-3.5 h-3.5 text-accent" /> Dashboard Theme
                       </label>
                       <div className="flex gap-4">
                          <div className="w-10 h-10 bg-primary/90 border-2 border-accent rounded-full cursor-pointer shadow-lg shadow-primary/20"></div>
                          <div className="w-10 h-10 bg-gray-500/20 border border-transparent rounded-full cursor-pointer hover:border-accent transition-all"></div>
                          <div className="w-10 h-10 bg-cream border border-transparent rounded-full cursor-pointer hover:border-accent transition-all"></div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Help & Support Card */}
              <div className="bg-primary-dark p-10 rounded-4xl text-white relative overflow-hidden group shadow-2xl shadow-primary/30">
                 <div className="absolute top-0 right-0 p-8 transform translate-x-8 -translate-y-8 opacity-10 transition-transform group-hover:scale-110">
                    <HelpCircle className="w-48 h-48" />
                 </div>
                 
                 <div className="relative z-10 space-y-8">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                          <HelpCircle className="w-5 h-5 text-accent" />
                       </div>
                       <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em] font-serif">Quick Support</span>
                    </div>
                    
                    <div className="space-y-2">
                       <h5 className="text-2xl font-serif font-black italic leading-tight">Need assistance?</h5>
                       <p className="text-xs font-medium text-white/40 leading-relaxed uppercase tracking-widest font-sans">Student Help Desk 24/7</p>
                    </div>

                    <button className="w-full py-5 bg-white hover:bg-accent text-primary hover:text-white transition-all rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-black/10">
                       Contact Administration
                    </button>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}


