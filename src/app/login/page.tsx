"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Landmark, ArrowLeft, ArrowRight, ShieldCheck, Mail, Lock, User, Users, GraduationCap } from "lucide-react";

export default function LoginPage() {
  const [role, setRole] = useState<"student" | "parent" | "admin">("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ email, password })
      });
      
      const data = await res.json();
      
      if (res.ok) {
         localStorage.setItem("token", data.token);
         localStorage.setItem("user", JSON.stringify(data));
         router.push(`/${role}/dashboard`);
      } else {
         setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Network error. Could not reach the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-background font-sans overflow-hidden">
      
      {/* Left Visual Pane */}
      <div className="hidden lg:flex flex-col justify-between p-16 bg-primary-dark text-white relative overflow-hidden group">
        {/* Animated Ornaments */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl transform rotate-45 group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl transform -rotate-45 group-hover:translate-x-10 transition-transform duration-1000"></div>
        </div>

        <div className="relative z-10 space-y-8">
           <Link href="/" className="flex items-center gap-3 self-start hover:scale-105 transition-transform">
             <div className="bg-white/10 p-3 rounded-2xl">
               <Landmark className="w-8 h-8 text-accent" />
             </div>
             <span className="text-3xl font-serif font-bold text-white tracking-tighter">
                Madrasa Al-Umaima
             </span>
           </Link>
           
           <div className="space-y-6 pt-12">
             <h2 className="text-5xl font-serif font-bold leading-tight">
               Continue Your <span className="text-accent italic">Spiritual Journey</span>
             </h2>
             <p className="text-lg text-white/50 max-w-md leading-relaxed">
               Securely access your profile, grades, and reports 
               through our advanced management portal.
             </p>
           </div>
        </div>

        <div className="relative z-10 space-y-4">
           <div className="p-6 bg-white/5 rounded-4xl border border-white/10 flex items-center gap-4">
             <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
               <ShieldCheck className="w-6 h-6 text-accent" />
             </div>
             <div>
               <p className="font-bold text-sm">Protected & Secure</p>
               <p className="text-xs text-white/40 italic">256-bit SSL encrypted for your data safety.</p>
             </div>
           </div>
           
           <p className="text-xs text-white/20 select-none">
             Copyright 2026 Madrasa Al-Umaima Education Trust. All Rights Reserved.
           </p>
        </div>
      </div>

      {/* Right Login Pane */}
      <div className="flex items-center justify-center p-8 sm:p-16 lg:p-24 bg-white relative overflow-y-auto">
        
        <div className="w-full max-w-md space-y-12">
          {/* Mobile Header */}
          <div className="lg:hidden flex flex-col items-center text-center space-y-4 mb-4">
             <div className="bg-primary p-3 rounded-2xl shadow-xl">
               <Landmark className="w-10 h-10 text-white" />
             </div>
             <h3 className="text-3xl font-serif font-bold text-primary">Madrasa Al-Umaima</h3>
          </div>

          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-4xl font-serif font-black text-primary leading-none underline decoration-accent decoration-4 underline-offset-8">Welcome Back</h2>
            <p className="text-primary/40 font-bold text-sm tracking-widest uppercase">Select your account type to login</p>
          </div>

          {/* Role Tabs */}
          <div className="grid grid-cols-3 gap-2 bg-cream p-1.5 rounded-2xl shadow-sm border border-primary/5">
             {[
               { id: "student", label: "Student", icon: User },
               { id: "parent", label: "Parent", icon: Users },
               { id: "admin", label: "Admin", icon: GraduationCap }
             ].map((tab) => (
               <button
                key={tab.id}
                type="button"
                onClick={() => setRole(tab.id as any)}
                className={`flex flex-col items-center justify-center py-3 rounded-xl transition-all gap-1.5 ${
                  role === tab.id 
                    ? "bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]" 
                    : "text-primary/40 hover:bg-white hover:text-primary"
                }`}
               >
                 <tab.icon className={`w-4 h-4 ${role === tab.id ? "text-accent" : ""}`} />
                 <span className="text-[10px] font-bold uppercase tracking-widest leading-none">{tab.label}</span>
               </button>
             ))}
          </div>

          {/* Form */}
          <form className="space-y-8" onSubmit={handleLogin}>
            {error && <div className="p-4 bg-red-100/50 border border-red-200 text-red-600 rounded-2xl text-sm font-bold text-center">{error}</div>}
            <div className="space-y-6">
              <div className="space-y-2 group">
                 <label className="text-xs font-black text-primary/40 uppercase tracking-[0.2em] ml-2">
                   {role === "admin" ? "Staff/Admin Email" : role === "parent" ? "Parent's Email" : "Student Email"}
                 </label>
                 <div className="relative">
                   <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within:text-primary transition-colors" />
                   <input 
                     type="email" 
                     required
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder={`Enter ${role === "admin" ? "Admin Email" : role === "parent" ? "Parent Email" : "Student Email"}`}
                     className="w-full h-14 pl-12 pr-4 bg-cream border border-primary/5 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-bold text-primary placeholder:font-medium placeholder:text-primary/20"
                   />
                 </div>
              </div>
              
              <div className="space-y-2 group">
                 <label className="text-xs font-black text-primary/40 uppercase tracking-[0.2em] ml-2">Password</label>
                 <div className="relative">
                   <Lock className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within:text-primary transition-colors" />
                   <input 
                     type="password" 
                     required
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="••••••••"
                     className="w-full h-14 pl-12 pr-4 bg-cream border border-primary/5 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-bold text-primary placeholder:font-medium placeholder:text-primary/20"
                   />
                 </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                 <div className="w-5 h-5 bg-cream border-2 border-primary/10 rounded flex items-center justify-center group-hover:border-primary group-active:scale-95 transition-all overflow-hidden">
                    <input type="checkbox" className="absolute opacity-0 cursor-pointer" />
                    <div className="w-2 h-2 bg-primary rounded-full hidden"></div>
                 </div>
                 <span className="text-xs font-bold text-primary/60">Remember Session</span>
              </label>
              <Link href="#" className="text-xs font-black text-accent uppercase tracking-widest hover:underline underline-offset-4">Forgot Security Key?</Link>
            </div>

            <button 
              disabled={loading}
              type="submit"
              className={`w-full h-16 bg-primary text-white text-xl font-serif font-bold rounded-2xl shadow-xl hover:bg-primary-dark transition-all transform hover:-translate-y-1 flex items-center justify-center gap-4 group ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? "Authenticating..." : "Wait, Sign In To System"}
              <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </form>

          <p className="text-center text-sm font-medium text-primary/40">
            Forgot your user credentials? <br />
            <span className="text-primary font-bold decoration-dotted underline underline-offset-4 cursor-pointer">Contact Administration Helpdesk</span>
          </p>

          <Link 
            href="/" 
            className="flex items-center justify-center gap-2 text-primary font-bold hover:gap-4 transition-all pt-8 border-t border-black/5"
          >
            <ArrowLeft className="w-5 h-5 text-accent" /> Back To Website
          </Link>
        </div>

      </div>

    </div>
  );
}
