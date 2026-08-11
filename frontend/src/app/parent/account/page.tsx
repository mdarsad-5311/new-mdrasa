"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { PARENT_SIDEBAR_ITEMS } from "@/lib/constants";
import { User, Mail, Phone, MapPin, Briefcase, Camera, Shield, Bell, LogOut, ChevronRight, CheckCircle2, UserPlus, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function AccountPage() {
  const [isEditing, setIsEditing] = useState(false);

  const parentProfile = {
    fullName: "Mohammed Ahmed",
    relation: "Father",
    mobile: "+91 98765 43210",
    altMobile: "+91 98765 00000",
    email: "mohammed.ahmed@example.com",
    occupation: "Senior Software Engineer",
    address: "Block B, Green Valley Apartments, New Delhi, India",
    bloodGroup: "O+",
    linkedStudents: [
      { name: "Mustafa Ahmed", roll: "#084", class: "Hifz-A" },
      { name: "Sara Ahmed", roll: "#102", class: "Primary-B" }
    ]
  };

  return (
    <DashboardLayout 
      role="parent" 
      sidebarItems={PARENT_SIDEBAR_ITEMS}
      userProfile={{ name: parentProfile.fullName, roleName: "Parent Account", avatar: "" }}
    >
      <div className="space-y-12 max-w-7xl animate-in fade-in duration-700">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-border pb-12">
          <div className="flex items-center gap-8">
            <div className="relative group">
               <div className="w-32 h-32 bg-accent rounded-5xl flex items-center justify-center shadow-premium relative overflow-hidden group">
                  <User className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-500" />
               </div>
               <button className="absolute bottom-0 right-0 p-3 bg-primary text-white rounded-2xl shadow-lg border-4 border-white hover:bg-primary-dark transition-all scale-95 group-hover:scale-105 active:scale-95">
                  <Camera className="w-4 h-4" />
               </button>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-[0.4rem] text-accent uppercase font-sans">PARENT IDENTITY CARD</span>
              <h1 className="text-5xl font-serif font-bold text-primary leading-tight">{parentProfile.fullName}</h1>
              <div className="flex items-center gap-4">
                <span className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">{parentProfile.relation}</span>
                <span className="bg-accent/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">Verified Account</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
             <button 
               onClick={() => setIsEditing(!isEditing)}
               className="flex items-center gap-3 bg-white border-2 border-primary text-primary px-8 py-4 rounded-full shadow-soft hover:bg-primary hover:text-white transition-all text-[11px] font-black uppercase tracking-widest active:scale-95"
             >
               {isEditing ? "SAVE PROFILE" : "EDIT INFORMATION"}
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {/* Left Info Column */}
           <div className="lg:col-span-2 space-y-12">
              <div className="bg-white p-10 rounded-5xl shadow-soft border border-border space-y-12">
                 <h2 className="text-3xl font-serif font-bold text-primary flex items-center gap-4 border-b border-background pb-8">
                   <Shield className="w-8 h-8 text-accent" /> Security Verified Data
                 </h2>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {[
                      { icon: Mail, label: "Email Identity", value: parentProfile.email },
                      { icon: Phone, label: "Primary Phone", value: parentProfile.mobile },
                      { icon: Phone, label: "Alternate Number", value: parentProfile.altMobile },
                      { icon: Briefcase, label: "Professional Occupation", value: parentProfile.occupation },
                      { icon: MapPin, label: "Official Address", value: parentProfile.address, fullWidth: true },
                    ].map((item, idx) => (
                      <div key={idx} className={`space-y-2 group transition-all ${item.fullWidth ? "md:col-span-2" : ""}`}>
                         <p className="text-[9px] font-bold text-sage tracking-[0.2em] uppercase ml-1 opacity-60 group-hover:opacity-100">{item.label}</p>
                         <div className="flex items-center gap-3 border-b-2 border-background pb-3 group-hover:border-accent transition-all relative">
                            <item.icon className="w-4 h-4 text-accent shrink-0" />
                            <input 
                              type="text" 
                              readOnly={!isEditing}
                              defaultValue={item.value}
                              className={`bg-transparent outline-none text-lg font-bold text-primary w-full ${isEditing ? "text-accent focus:text-primary transition-colors cursor-text" : "cursor-default"}`}
                            />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Linked Students Section */}
              <div className="space-y-8">
                 <div className="flex justify-between items-end border-b border-border pb-6">
                    <h2 className="text-3xl font-serif font-bold text-primary">Linked Children</h2>
                    <button className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase border-b-2 border-accent/20 hover:border-accent transition-all pb-1 flex items-center gap-2">
                      <UserPlus className="w-3.5 h-3.5" /> ADD ANOTHER CHILD
                    </button>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
                    {parentProfile.linkedStudents.map((student, i) => (
                      <div key={i} className="bg-white p-8 rounded-4xl border border-border shadow-soft group hover:border-accent hover:-translate-y-1 transition-all">
                         <div className="flex justify-between items-start mb-6">
                            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                               <User className="w-6 h-6" />
                            </div>
                            <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-accent text-primary uppercase tracking-widest">{student.roll}</span>
                         </div>
                         <h5 className="text-2xl font-serif font-bold text-primary leading-tight mb-1">{student.name}</h5>
                         <p className="text-[11px] font-bold text-sage uppercase tracking-widest border-b border-background pb-6 mb-4">{student.class} | SESSION 2025-26</p>
                         <button className="w-full py-4 rounded-2xl bg-background group-hover:bg-primary group-hover:text-white text-primary/60 font-bold text-[10px] tracking-widest uppercase transition-all flex items-center justify-center gap-3 active:scale-95">
                            VIEW CHILD PORTAL <ChevronRight className="w-4 h-4" />
                         </button>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Quick Settings Sidebar */}
           <div className="space-y-12">
              <div className="bg-primary p-12 rounded-5xl shadow-premium text-white flex flex-col gap-8 h-fit relative overflow-hidden">
                 <h3 className="text-3xl font-serif font-bold relative z-10">Verification Hub</h3>
                 <div className="space-y-6">
                    {[
                      { icon: CheckCircle2, label: "Identity Verified", status: "Success" },
                      { icon: CheckCircle2, label: "Mobile Authentication", status: "Success" },
                      { icon: CheckCircle2, label: "Linked Accounts", status: "Active" }
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-md">
                         <step.icon className="w-4 h-4 text-accent" />
                         <span className="text-xs font-bold uppercase tracking-widest">{step.label}</span>
                      </div>
                    ))}
                 </div>
                 <div className="h-px w-full bg-white/10"></div>
                 <button className="w-full bg-accent text-primary py-4 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg hover:scale-105 transition-all">TRUST SCORE: 100/100</button>
              </div>

              <div className="bg-white p-10 rounded-4xl shadow-soft border border-border space-y-8 text-primary">
                 <h4 className="text-xl font-serif font-bold flex items-center gap-4 border-b border-background pb-4">
                    <Bell className="w-5 h-5 text-accent" /> App Performance
                 </h4>
                 <div className="space-y-6">
                    <div>
                       <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">PORTAL DATA USAGE</span>
                          <span className="text-[10px] font-bold text-accent">14.2 MB</span>
                       </div>
                       <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: '40%' }}></div>
                       </div>
                    </div>
                    <button className="w-full flex items-center justify-center gap-3 text-[10px] font-black text-sage hover:text-accent transition-all uppercase tracking-widest">
                       <HelpCircle className="w-4 h-4" /> RE-CALIBRATE SETTINGS
                    </button>
                 </div>
              </div>

              <button className="w-full p-6 rounded-4xl bg-red-50 border border-red-100 flex items-center justify-between group hover:bg-red-500 transition-all">
                 <div className="flex items-center gap-4">
                    <LogOut className="w-5 h-5 text-red-500 group-hover:text-white" />
                    <span className="text-[11px] font-black text-red-500 group-hover:text-white uppercase tracking-widest">Sign Out Securely</span>
                 </div>
                 <ChevronRight className="w-4 h-4 text-red-100 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}


