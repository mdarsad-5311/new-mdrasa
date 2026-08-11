"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { ADMIN_SIDEBAR_ITEMS } from "@/lib/constants";
import { 
  Settings, 
  ShieldCheck, 
  User, 
  Bell, 
  Database, 
  Save, 
  Lock, 
  Landmark, 
  Mail, 
  Phone, 
  CheckCircle2, 
  RefreshCw 
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AdminSettingsPage() {
  const { isUrdu } = useLanguage();
  const [activeTab, setActiveTab] = useState<"profile" | "institution" | "security" | "system">("profile");
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form states
  const [profileData, setProfileData] = useState({
    name: "Admin Office",
    email: "admin@mdrasa.edu",
    phone: "+91 98765 00000",
    designation: "Head Administrator",
  });

  const [institutionData, setInstitutionData] = useState({
    madrasaName: "Madrasa Al-Umaima",
    regNumber: "MDR-2026-TRUST-8891",
    academicYear: "2026-2027",
    address: "14 Al-Madina Campus, Knowledge Enclave",
    contactEmail: "info@mdrasa.edu",
    contactPhone: "+91 95276 35311",
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3500);
    }, 600);
  };

  return (
    <DashboardLayout 
      role="admin" 
      sidebarItems={ADMIN_SIDEBAR_ITEMS}
      userProfile={{ name: "Admin Office", roleName: "Head Admin", avatar: "" }}
    >
      <div className="space-y-12 animate-in fade-in duration-700">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
          <div className="space-y-4">
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">MANAGEMENT ERP HUB</span>
            <h1 className="text-6xl font-serif font-bold text-primary leading-tight tracking-tight">Portal Settings</h1>
            <p className="text-sage font-black text-[11px] tracking-[0.2em] uppercase opacity-60 italic">Configure institute profile, admin credentials, and ERP system parameters</p>
          </div>

          {savedSuccess && (
            <div className="flex items-center gap-3 px-6 py-4 bg-green-500/10 border border-green-500/30 text-green-700 rounded-full animate-in fade-in slide-in-from-top-2 shadow-soft">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-xs font-bold uppercase tracking-widest">Settings Updated Successfully</span>
            </div>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-4 border-b border-border/40 pb-4">
          {[
            { id: "profile", label: "Admin Profile", icon: User },
            { id: "institution", label: "Institution Details", icon: Landmark },
            { id: "security", label: "Security & Passwords", icon: ShieldCheck },
            { id: "system", label: "System & Backups", icon: Database },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
                  isActive 
                    ? "bg-primary text-white shadow-soft" 
                    : "bg-white text-primary/60 border border-border/40 hover:bg-background"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-accent" : "text-sage"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="bg-white p-12 rounded-5xl shadow-premium border border-border/40">
          <form onSubmit={handleSave} className="space-y-8 max-w-3xl">

            {activeTab === "profile" && (
              <div className="space-y-8 animate-in fade-in">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-primary">Administrator Profile</h3>
                  <p className="text-sage text-xs font-medium uppercase tracking-widest mt-1">Manage your administrative personal and contact details</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-2">Display Name</label>
                    <input 
                      type="text" 
                      value={profileData.name} 
                      onChange={e => setProfileData({...profileData, name: e.target.value})}
                      className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-2">Official Email</label>
                    <input 
                      type="email" 
                      value={profileData.email} 
                      onChange={e => setProfileData({...profileData, email: e.target.value})}
                      className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-2">Contact Phone</label>
                    <input 
                      type="text" 
                      value={profileData.phone} 
                      onChange={e => setProfileData({...profileData, phone: e.target.value})}
                      className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-2">Administrative Role</label>
                    <input 
                      type="text" 
                      value={profileData.designation} 
                      onChange={e => setProfileData({...profileData, designation: e.target.value})}
                      className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" 
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "institution" && (
              <div className="space-y-8 animate-in fade-in">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-primary">Madrasa & Institute Profile</h3>
                  <p className="text-sage text-xs font-medium uppercase tracking-widest mt-1">General institution identity and public contact information</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-2">Institute Name</label>
                    <input 
                      type="text" 
                      value={institutionData.madrasaName} 
                      onChange={e => setInstitutionData({...institutionData, madrasaName: e.target.value})}
                      className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-2">Trust / Registration Code</label>
                    <input 
                      type="text" 
                      value={institutionData.regNumber} 
                      onChange={e => setInstitutionData({...institutionData, regNumber: e.target.value})}
                      className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-2">Current Academic Session</label>
                    <input 
                      type="text" 
                      value={institutionData.academicYear} 
                      onChange={e => setInstitutionData({...institutionData, academicYear: e.target.value})}
                      className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-2">Public Inquiries Phone</label>
                    <input 
                      type="text" 
                      value={institutionData.contactPhone} 
                      onChange={e => setInstitutionData({...institutionData, contactPhone: e.target.value})}
                      className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" 
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-2">Physical Campus Address</label>
                    <input 
                      type="text" 
                      value={institutionData.address} 
                      onChange={e => setInstitutionData({...institutionData, address: e.target.value})}
                      className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" 
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-8 animate-in fade-in">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-primary">Security & Password</h3>
                  <p className="text-sage text-xs font-medium uppercase tracking-widest mt-1">Update your password to keep the management system secure</p>
                </div>

                <div className="space-y-6 max-w-lg">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-2">Current Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      value={passwords.currentPassword} 
                      onChange={e => setPasswords({...passwords, currentPassword: e.target.value})}
                      className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-2">New Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      value={passwords.newPassword} 
                      onChange={e => setPasswords({...passwords, newPassword: e.target.value})}
                      className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 pl-2">Confirm New Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      value={passwords.confirmPassword} 
                      onChange={e => setPasswords({...passwords, confirmPassword: e.target.value})}
                      className="w-full h-14 px-6 bg-background rounded-2xl outline-none font-bold text-primary border border-border/50 focus:border-primary transition-colors" 
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "system" && (
              <div className="space-y-8 animate-in fade-in">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-primary">System & Database Status</h3>
                  <p className="text-sage text-xs font-medium uppercase tracking-widest mt-1">ERP infrastructure health, data retention, and backup options</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-background rounded-3xl border border-border/40 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-widest text-primary">Database Engine</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">Active / SQLite & PostgreSQL</span>
                    </div>
                    <p className="text-xs text-sage font-medium">Django REST Framework API connected and responsive.</p>
                  </div>

                  <div className="p-6 bg-background rounded-3xl border border-border/40 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-widest text-primary">Automated Backup</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full">Daily 02:00 UTC</span>
                    </div>
                    <p className="text-xs text-sage font-medium">Full database snapshots and media file synchronizations.</p>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-8 border-t border-border/40 flex items-center gap-4">
              <button 
                type="submit" 
                disabled={loading}
                className="flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold shadow-soft hover:shadow-premium transition-all active:scale-95 text-xs uppercase tracking-widest cursor-pointer"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin text-accent" /> : <Save className="w-4 h-4 text-accent" />}
                <span>{loading ? "Saving Changes..." : "Save Preferences"}</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </DashboardLayout>
  );
}
