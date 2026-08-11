"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { PARENT_SIDEBAR_ITEMS } from "@/lib/constants";
import { 
  User, Mail, Phone, MapPin, Briefcase, Camera, Shield, Bell, LogOut, 
  ChevronRight, CheckCircle2, UserPlus, HelpCircle, Clock, Lock, Globe, 
  Monitor, Eye, Trash2, Save, RotateCcw, Smartphone, Info, MessageSquare, 
  Zap, Check, X, CreditCard, Users, GraduationCap 
} from "lucide-react";

export default function ParentSettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const sections = [
    { id: "profile", name: "Profile", icon: User },
    { id: "account", name: "Account", icon: Info },
    { id: "notifications", name: "Notifications", icon: Bell },
    { id: "security", name: "Security", icon: Shield },
    { id: "children", name: "Linked Children", icon: UserPlus },
    { id: "appearance", name: "Appearance", icon: Monitor },
  ];

  return (
    <DashboardLayout 
      role="parent" 
      sidebarItems={PARENT_SIDEBAR_ITEMS}
      userProfile={{ name: "Mohammed Ahmed", roleName: "Parent", avatar: "" }}
    >
      <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-700">
        
        {/* PAGE HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-border pb-10">
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-[0.4rem] text-accent uppercase font-sans">ACCOUNT PREFERENCES</span>
            <h1 className="text-5xl font-serif font-bold text-primary leading-tight">Settings</h1>
            <p className="text-sage text-sm font-medium italic opacity-70">Manage your parent account, notifications, security, and portal preferences</p>
          </div>
          
          <div className="flex items-center gap-4">
             <button onClick={handleSave} className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full shadow-premium hover:shadow-pill transition-all text-[11px] font-black uppercase tracking-widest active:scale-95 group">
                <Save className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" /> SAVE CHANGES
             </button>
             <button className="flex items-center gap-3 bg-white border border-border px-8 py-4 rounded-full shadow-soft hover:bg-background transition-all text-[11px] font-black text-primary uppercase tracking-widest active:scale-95">
                <RotateCcw className="w-4 h-4 text-sage" /> RESET
             </button>
          </div>
        </div>

        {saveSuccess && (
          <div className="fixed top-8 right-8 z-50 bg-primary text-white px-8 py-4 rounded-2xl shadow-premium border border-accent/20 flex items-center gap-4 animate-in slide-in-from-right-8 fade-in">
             <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-primary" />
             </div>
             <div>
                <p className="font-bold text-sm">Settings Updated</p>
                <p className="text-[10px] text-sage font-medium uppercase tracking-widest">Changes saved successfully</p>
             </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-1">
             <div className="bg-white p-8 rounded-4xl shadow-soft border border-border space-y-2 sticky top-8">
                <p className="text-[9px] font-bold text-sage tracking-[0.3em] uppercase mb-4 ml-1">SYSTEM CONTROLS</p>
                {sections.map((section) => (
                  <button key={section.id} onClick={() => setActiveTab(section.id)} className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all group ${activeTab === section.id ? "bg-primary text-white shadow-lg" : "hover:bg-background text-primary/60"}`}>
                    <section.icon className={`w-4 h-4 ${activeTab === section.id ? "text-accent" : "text-sage group-hover:text-primary"}`} />
                    <span className="text-sm font-bold tracking-tight">{section.name}</span>
                    {activeTab === section.id && <ChevronRight className="w-4 h-4 ml-auto text-accent" />}
                  </button>
                ))}
                <div className="pt-6 mt-6 border-t border-background">
                   <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-red-500 hover:bg-red-50 transition-all font-bold group">
                      <LogOut className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      <span className="text-sm">Sign Out</span>
                   </button>
                </div>
             </div>
          </div>

          <div className="lg:col-span-3 space-y-12 pb-24">
            
            {/* 1) PROFILE */}
            <section id="profile" className="bg-white p-10 rounded-4xl shadow-soft border border-border space-y-10 scroll-mt-24 transition-all">
               <h2 className="text-3xl font-serif font-bold text-primary flex items-center gap-4 border-b border-background pb-6">
                  <User className="w-8 h-8 text-accent" /> Profile Settings
               </h2>

               <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="relative group">
                     <div className="w-32 h-32 bg-accent/10 rounded-4xl flex items-center justify-center border-2 border-dashed border-accent group-hover:border-primary transition-all overflow-hidden relative">
                        <User className="w-16 h-16 text-accent group-hover:text-primary" />
                        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                           <Camera className="w-8 h-8 text-white" />
                        </div>
                     </div>
                     <button className="absolute -bottom-2 -right-2 p-3 bg-white text-primary rounded-2xl shadow-lg border border-border hover:bg-accent transition-all">
                        <Camera className="w-4 h-4" />
                     </button>
                  </div>
                  <div className="space-y-1 text-center md:text-left">
                     <h3 className="text-xl font-serif font-bold text-primary">Mohammed Ahmed</h3>
                     <p className="text-[10px] font-black text-sage tracking-widest uppercase mb-4">FATHER | SENIOR ENGINEER</p>
                     <div className="flex gap-4">
                        <button className="text-[9px] font-black text-primary uppercase border-b-2 border-primary/10 hover:border-primary px-2 py-1">UPDATE PHOTO</button>
                        <button className="text-[9px] font-black text-red-500 uppercase border-b-2 border-red-500/10 hover:border-red-500 px-2 py-1">REMOVE</button>
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { label: "Parent Full Name", value: "Mohammed Ahmed", icon: User },
                    { label: "Relation to Child", value: "Father", icon: Users },
                    { label: "Mobile Number", value: "+91 98765 43210", icon: Phone },
                    { label: "Email Address", value: "mohammed.ahmed@example.com", icon: Mail },
                    { label: "Residential Address", value: "Block B, Green Valley Apartments, New Delhi", icon: MapPin, fullWidth: true },
                  ].map((field, i) => (
                    <div key={i} className={`space-y-2 ${field.fullWidth ? "md:col-span-2" : ""}`}>
                       <label className="text-[9px] font-black text-sage tracking-widest uppercase ml-1">{field.label}</label>
                       <div className="relative">
                          <field.icon className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                          <input type="text" defaultValue={field.value} className="w-full h-14 pl-14 pr-6 bg-background border border-border rounded-2xl outline-none focus:border-accent transition-all font-bold text-primary text-sm shadow-inner" />
                       </div>
                    </div>
                  ))}
               </div>
            </section>

            {/* 2) ACCOUNT */}
            <section id="account" className="bg-white p-10 rounded-4xl shadow-soft border border-border space-y-10">
               <h2 className="text-3xl font-serif font-bold text-primary flex items-center gap-4 border-b border-background pb-6">
                  <Info className="w-8 h-8 text-accent" /> Account Info
               </h2>
               <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { label: "Parent ID", value: "#P-2024-084" },
                    { label: "Account Status", value: "Verified", highlight: true },
                    { label: "Member Since", value: "Jan 05, 2024" },
                    { label: "Linked Accounts", value: "02 Students" },
                    { label: "Subscription", value: "Premium" },
                  ].map((item, i) => (
                    <div key={i} className="space-y-1">
                       <p className="text-[9px] font-bold text-sage tracking-widest uppercase opacity-60">{item.label}</p>
                       <p className={`text-sm font-bold ${item.highlight ? "text-primary px-3 py-1 bg-accent/20 rounded-full inline-block" : "text-primary"}`}>{item.value}</p>
                    </div>
                  ))}
               </div>
            </section>

            {/* 3) NOTIFICATIONS */}
            <section id="notifications" className="bg-white p-10 rounded-4xl shadow-soft border border-border space-y-10">
               <h2 className="text-3xl font-serif font-bold text-primary flex items-center gap-4 border-b border-background pb-6">
                  <Bell className="w-8 h-8 text-accent" /> Notifications
               </h2>
               <div className="space-y-6">
                  {[
                    { title: "Attendance Alerts", desc: "Absence or late arrival notifications.", icon: Clock },
                    { title: "Teacher Notes", desc: "New feedback from faculty members.", icon: MessageSquare },
                    { title: "Fee Reminders", desc: "Automated billing and due date alerts.", icon: CreditCard },
                    { title: "Academic Updates", desc: "New results and report cards.", icon: GraduationCap },
                  ].map((n, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-background rounded-4xl border border-border group">
                       <div className="flex items-center gap-6">
                          <n.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                          <div>
                             <h4 className="text-lg font-serif font-bold text-primary">{n.title}</h4>
                             <p className="text-xs font-medium text-sage italic">{n.desc}</p>
                          </div>
                       </div>
                       <input type="checkbox" defaultChecked className="w-12 h-6 rounded-full appearance-none bg-border checked:bg-primary transition-all relative cursor-pointer before:content-[''] before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 checked:before:translate-x-6 before:transition-transform" />
                    </div>
                  ))}
               </div>
            </section>

            {/* 4) SECURITY */}
            <section id="security" className="bg-white p-10 rounded-4xl shadow-soft border border-border space-y-10">
               <h2 className="text-3xl font-serif font-bold text-primary flex items-center gap-4 border-b border-background pb-6">
                  <Shield className="w-8 h-8 text-accent" /> Security
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                     <div className="p-8 bg-background rounded-4xl border border-border">
                        <h4 className="text-sm font-black text-primary tracking-widest uppercase mb-4">TWO-FACTOR AUTH</h4>
                        <p className="text-xs text-sage italic mb-6">Secure your account with mobile verification.</p>
                        <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-[10px] tracking-widest uppercase">ENABLE 2FA</button>
                     </div>
                  </div>
                  <div className="space-y-6">
                     <div className="space-y-2">
                        <label className="text-[9px] font-black text-sage tracking-widest uppercase ml-1">CHANGE PASSWORD</label>
                        <input type="password" placeholder="New Password" className="w-full h-14 px-6 bg-background border border-border rounded-2xl outline-none font-bold text-primary" />
                        <button className="w-full py-4 border-2 border-primary text-primary rounded-2xl font-bold text-[10px] tracking-widest uppercase mt-4 hover:bg-primary hover:text-white transition-all">UPDATE PASSWORD</button>
                     </div>
                  </div>
               </div>
            </section>

            {/* 5) LINKED CHILDREN */}
            <section id="children" className="bg-white p-10 rounded-4xl shadow-soft border border-border space-y-10">
               <h2 className="text-3xl font-serif font-bold text-primary flex items-center gap-4 border-b border-background pb-6">
                  <UserPlus className="w-8 h-8 text-accent" /> Linked Children
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { name: "Mustafa Ahmed", roll: "#084", class: "Hifz-A" },
                    { name: "Sara Ahmed", roll: "#102", class: "Class 03-B" },
                  ].map((c, i) => (
                    <div key={i} className="p-8 bg-background rounded-4xl border border-border hover:border-accent transition-all flex items-center gap-6">
                       <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-border"><User className="w-6 h-6 text-primary" /></div>
                       <div>
                          <h4 className="text-xl font-serif font-bold text-primary">{c.name}</h4>
                          <p className="text-[10px] font-black text-sage tracking-widest uppercase">{c.class} • {c.roll}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </section>

            {/* 6) APPEARANCE */}
            <section id="appearance" className="bg-white p-10 rounded-4xl shadow-soft border border-border space-y-10 scroll-mt-24">
               <h2 className="text-3xl font-serif font-bold text-primary flex items-center gap-4 border-b border-background pb-6">
                  <Monitor className="w-8 h-8 text-accent" /> Appearance
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {["Light", "Dark", "System"].map((mode) => (
                    <button key={mode} className="p-8 bg-background border border-border rounded-4xl flex flex-col items-center gap-4 hover:border-primary transition-all group">
                       <div className="w-full h-12 bg-white rounded-xl border border-border group-hover:border-accent"></div>
                       <span className="text-[10px] font-black tracking-widest uppercase">{mode}</span>
                    </button>
                  ))}
               </div>
            </section>

            {/* 7) LANGUAGE & REGIONAL */}
            <section className="bg-white p-10 rounded-4xl shadow-soft border border-border space-y-10 scroll-mt-24">
               <h2 className="text-3xl font-serif font-bold text-primary flex items-center gap-4 border-b border-background pb-6">
                  <Globe className="w-8 h-8 text-accent" /> Language & Regional
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                     <label className="text-[9px] font-black text-sage tracking-widest uppercase">Preferred Language</label>
                     <select className="w-full h-14 px-6 bg-background border border-border rounded-2xl outline-none font-bold text-primary">
                        <option>English (UK)</option>
                        <option>Urdu (اردو)</option>
                        <option>Arabic (العربية)</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[9px] font-black text-sage tracking-widest uppercase">Date Format</label>
                     <select className="w-full h-14 px-6 bg-background border border-border rounded-2xl outline-none font-bold text-primary">
                        <option>DD/MM/YYYY</option>
                        <option>MM/DD/YYYY</option>
                     </select>
                  </div>
               </div>
            </section>

            {/* 8) PRIVACY */}
            <section className="bg-white p-10 rounded-4xl shadow-soft border border-border space-y-10 scroll-mt-24">
               <h2 className="text-3xl font-serif font-bold text-primary flex items-center gap-4 border-b border-background pb-6">
                  <Eye className="w-8 h-8 text-accent" /> Privacy Settings
               </h2>
               <div className="space-y-6">
                  {[
                    { label: "Profile Visibility", desc: "Show your profile photo to teachers." },
                    { label: "Activity Tracking", desc: "Log account access for security." },
                  ].map((p, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-background rounded-3xl border border-border">
                       <div className="space-y-1">
                          <p className="text-sm font-bold text-primary">{p.label}</p>
                          <p className="text-[10px] text-sage italic">{p.desc}</p>
                       </div>
                       <input type="checkbox" defaultChecked className="w-12 h-6 rounded-full appearance-none bg-border checked:bg-primary transition-all relative cursor-pointer before:content-[''] before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 checked:before:translate-x-6 before:transition-transform" />
                    </div>
                  ))}
               </div>
            </section>

            {/* 9) SUPPORT */}
            <section className="bg-accent p-12 rounded-5xl shadow-premium text-primary flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden group">
               <HelpCircle className="absolute top-0 right-0 p-8 w-64 h-64 text-primary opacity-5 -translate-y-12 translate-x-12 rotate-12 transition-transform duration-1000 group-hover:scale-110" />
               <div className="space-y-2 relative z-10">
                  <h3 className="text-3xl font-serif font-bold">Institutional Helpdesk</h3>
                  <p className="text-sm font-medium opacity-60">Need help? Connect with our support team.</p>
               </div>
               <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-[10px] tracking-widest uppercase shadow-lg active:scale-95 transition-all relative z-10">START LIVE CHAT</button>
            </section>

            {/* DANGER ZONE */}
            <section className="bg-red-50 p-12 rounded-5xl border-2 border-dashed border-red-200 flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-2xl font-serif font-bold text-red-600">Account Safety</h3>
                  <p className="text-sm font-medium text-red-500/60 transition-colors">Request deactivation or session wipes.</p>
               </div>
               <button className="bg-red-600 text-white px-10 py-5 rounded-2xl font-bold text-[10px] tracking-widest uppercase shadow-lg shadow-red-600/20 active:scale-95 transition-all">DEACTIVATE ACCOUNT</button>
            </section>

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}


