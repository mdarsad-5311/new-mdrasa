"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { PARENT_SIDEBAR_ITEMS } from "@/lib/constants";
import { User, Users, Mail, Phone, MapPin, Calendar, Droplets, GraduationCap, ShieldCheck, FileText, Download } from "lucide-react";

export default function ChildProfilePage() {
  const profileData = {
    name: "Mustafa Ahmed",
    roll: "#084",
    admissionNo: "ADM-2024-001",
    class: "Hifz-A",
    session: "2025-26",
    dob: "12 May 2012",
    gender: "Male",
    guardian: "Mohammed Ahmed",
    contact: "+91 98765 43210",
    emergency: "+91 98765 00000",
    address: "Block B, Green Valley Apartments, New Delhi, India",
    bloodGroup: "O+",
    status: "Active",
    section: "Hifz",
    joinedDate: "05 Jan 2024",
    teacher: "Maulana Ahmed",
    scholarship: "20% Merit Based",
  };

  return (
    <DashboardLayout 
      role="parent" 
      sidebarItems={PARENT_SIDEBAR_ITEMS}
      userProfile={{ name: "Mustafa's Parent", roleName: "Parent", avatar: "" }}
    >
      <div className="space-y-12 max-w-7xl animate-in fade-in duration-700">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-border pb-12">
          <div className="flex items-center gap-8">
            <div className="w-32 h-32 bg-primary rounded-4xl flex items-center justify-center shadow-premium relative overflow-hidden group">
               <User className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase">OFFICIAL STUDENT PROFILE</span>
              <h1 className="text-5xl font-serif font-bold text-primary leading-tight">{profileData.name}</h1>
              <div className="flex items-center gap-4">
                <span className="bg-primary/5 text-primary px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">ROLL: {profileData.roll}</span>
                <span className="bg-accent/10 text-primary px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">{profileData.status}</span>
              </div>
            </div>
          </div>

          <button className="flex items-center gap-3 bg-white border border-border px-8 py-4 rounded-full shadow-soft hover:shadow-premium transition-all group font-bold text-xs tracking-widest text-primary uppercase">
            <Download className="w-4 h-4 text-accent" /> DOWNLOAD ID CARD
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* 1. Basic Information */}
            <div className="bg-white p-10 rounded-4xl shadow-soft border border-border space-y-8">
              <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
                <User className="w-6 h-6 text-accent" /> Basic Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  { icon: GraduationCap, label: "Admission Number", value: profileData.admissionNo },
                  { icon: Calendar, label: "Date of Birth", value: profileData.dob },
                  { icon: User, label: "Gender", value: profileData.gender },
                  { icon: Droplets, label: "Blood Group", value: profileData.bloodGroup },
                  { icon: Users, label: "Class / Section", value: profileData.class },
                  { icon: ShieldCheck, label: "Academic Session", value: profileData.session },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1 border-b border-background pb-4">
                    <p className="text-[9px] font-bold text-sage tracking-[0.2em] uppercase">{item.label}</p>
                    <div className="flex items-center gap-2">
                      <item.icon className="w-3.5 h-3.5 text-accent" />
                      <p className="text-lg font-medium text-primary">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Contact & Address */}
            <div className="bg-white p-10 rounded-4xl shadow-soft border border-border space-y-8">
              <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
                <MapPin className="w-6 h-6 text-accent" /> Contact Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  { icon: User, label: "Guardian Name", value: profileData.guardian },
                  { icon: Phone, label: "Primary Contact", value: profileData.contact },
                  { icon: Phone, label: "Emergency Contact", value: profileData.emergency },
                  { icon: MapPin, label: "Residential Address", value: profileData.address, fullWidth: true },
                ].map((item, idx) => (
                  <div key={idx} className={`space-y-1 border-b border-background pb-4 ${item.fullWidth ? "md:col-span-2" : ""}`}>
                    <p className="text-[9px] font-bold text-sage tracking-[0.2em] uppercase">{item.label}</p>
                    <div className="flex items-center gap-2">
                       <item.icon className="w-3.5 h-3.5 text-accent shrink-0" />
                       <p className="text-lg font-medium text-primary leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Academic Overview */}
          <div className="space-y-12">
            <div className="bg-primary p-10 rounded-4xl shadow-premium text-white space-y-8 relative overflow-hidden">
               <GraduationCap className="absolute top-0 right-0 p-8 w-64 h-64 text-white opacity-5 -translate-y-12 translate-x-12 rotate-12" />
               <h2 className="text-2xl font-serif font-bold relative z-10">Academic Path</h2>
               
               <div className="space-y-6 relative z-10">
                  <div className="bg-white/10 p-6 rounded-3xl border border-white/10">
                    <p className="text-[9px] font-bold text-sage tracking-[0.2em] uppercase mb-2">ASSIGNED TEACHER</p>
                    <p className="text-xl font-bold">{profileData.teacher}</p>
                    <p className="text-xs text-sage mt-1 italic">Dept: Quranic Sciences</p>
                  </div>

                  <div className="bg-white/10 p-6 rounded-3xl border border-white/10">
                    <p className="text-[9px] font-bold text-sage tracking-[0.2em] uppercase mb-2">JOINING DATE</p>
                    <p className="text-xl font-bold">{profileData.joinedDate}</p>
                  </div>

                  <div className="bg-white/10 p-6 rounded-3xl border border-white/10">
                    <p className="text-[9px] font-bold text-sage tracking-[0.2em] uppercase mb-2">SCHOLARSHIP STATUS</p>
                    <p className="text-xl font-bold text-accent">{profileData.scholarship}</p>
                  </div>
               </div>
            </div>

            {/* Documents */}
            <div className="bg-white p-10 rounded-4xl shadow-soft border border-border space-y-8 text-primary">
               <h2 className="text-2xl font-serif font-bold">Uploaded Items</h2>
               <div className="space-y-4">
                  {[
                    "Birth Certificate.pdf",
                    "Aadhaar Card.pdf",
                    "Previous School TC.pdf",
                    "Medical Fitness Report.pdf"
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-background rounded-2xl group cursor-pointer hover:bg-primary hover:text-white transition-all">
                       <div className="flex items-center gap-3">
                         <FileText className="w-5 h-5 text-accent group-hover:text-white" />
                         <span className="text-sm font-bold truncate max-w-[150px]">{doc}</span>
                       </div>
                       <Download className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                    </div>
                  ))}
               </div>
            </div>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}


