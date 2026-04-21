"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  User, 
  Users, 
  MapPin, 
  Phone, 
  Calendar, 
  BookOpen, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Upload,
  Info,
  ChevronRight,
  Landmark,
  GraduationCap
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function AdmissionPage() {
  const [success, setSuccess] = useState(false);
  const { t, isUrdu } = useLanguage();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    dob: "",
    phone: "",
    address: "",
    courseAppliedFor: "",
    previousEducation: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          email: `${formData.phone}@placeholder.com`, // schema requires email
          gender: "Not Specified", // schema requires gender
        }),
      });

      if (res.ok) {
         setSuccess(true);
         setFormData({
            studentName: "", parentName: "", dob: "", phone: "", address: "", courseAppliedFor: "", previousEducation: ""
         });
      } else {
         const data = await res.json();
         setError(data.message || "Failed to submit application");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className={`min-h-screen bg-transparent flex flex-col items-center justify-center p-8 text-center space-y-12 ${isUrdu ? "font-urdu" : "font-sans"}`}>
         <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-primary/20 animate-bounce">
            <CheckCircle2 className="w-12 h-12 text-accent" />
         </div>
         <div className="space-y-6">
            <h1 className={`text-4xl md:text-6xl font-serif font-black text-primary leading-tight underline decoration-accent decoration-8 underline-offset-8 ${isUrdu ? "text-5xl md:text-7xl" : ""}`}>
              {t("adm_p.success_title")}
            </h1>
            <p className={`text-xl md:text-2xl text-primary/40 font-bold max-w-xl italic mx-auto ${isUrdu ? "text-2xl" : ""}`}>
               {t("adm_p.success_msg")}
            </p>
         </div>
         <div className="bg-white p-8 rounded-4xl border border-black/5 shadow-premium space-y-4 max-w-md w-full">
            <div className={`flex justify-between text-xs font-black uppercase tracking-widest text-primary/40 leading-none ${isUrdu ? "flex-row-reverse" : ""}`}>
               <span>{t("adm_p.ref_id")}</span>
               <span className="text-primary italic">#REG-2026-9482</span>
            </div>
            <div className="pt-4 flex flex-col gap-3">
               <button onClick={() => window.location.href = "/"} className={`w-full h-14 bg-primary text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl hover:-translate-y-1 transition-all ${isUrdu ? "text-base" : ""}`}>
                 {t("adm_p.back_home")}
               </button>
               <button onClick={() => setSuccess(false)} className={`w-full h-14 bg-cream text-primary font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-white transition-all ${isUrdu ? "text-base" : ""}`}>
                 {t("adm_p.new_admission")}
               </button>
            </div>
         </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col min-h-screen bg-background overflow-hidden ${isUrdu ? "font-urdu" : "font-sans"}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-44 pb-24 bg-transparent border-b border-primary/5 overflow-hidden group">
         <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_100%)] blur-[150px] transform translate-x-1/2 -translate-y-1/2 scale-150"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
            <div className={`inline-flex items-center gap-2 bg-primary/5 border border-primary/10 px-6 py-2.5 rounded-full shadow-2xl ${isUrdu ? "flex-row-reverse" : ""}`}>
               <span className={`text-primary text-[10px] font-black uppercase tracking-[0.4em] leading-none underline decoration-accent/40 decoration-2 underline-offset-4 ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>
                 {t("adm_p.hero_label")}
               </span>
               <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-glow"></div>
            </div>
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-serif font-black text-primary leading-tight ${isUrdu ? "font-urdu text-6xl md:text-8xl" : ""}`}>
              {t("adm_p.hero_title")} <span className="text-accent italic">{t("adm_p.hero_accent")}</span>
            </h1>
            <p className={`text-xl md:text-2xl text-primary/40 max-w-2xl mx-auto font-medium italic underline decoration-primary/10 decoration-8 underline-offset-8 ${isUrdu ? "font-urdu text-2xl" : ""}`}>
               {t("adm_p.hero_subtitle")}
            </p>
         </div>
      </section>

      {/* Instructions & Process */}
      <section className="py-24 bg-transparent relative z-10 px-4 sm:px-6 lg:px-8">
         <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 ${isUrdu ? "direction-rtl" : ""}`}>
            
            {/* Left Sidebar Info */}
            <div className={`lg:col-span-2 space-y-12 ${isUrdu ? "order-2" : "order-1"}`}>
               <div className={`p-10 bg-cream rounded-4xl border border-primary/5 space-y-8 shadow-sm relative overflow-hidden group hover:scale-[1.02] transition-all ${isUrdu ? "text-right" : "text-left"}`}>
                  <Info className={`w-20 h-20 text-primary/5 absolute -top-4 ${isUrdu ? "-left-4" : "-right-4"} transition-transform group-hover:rotate-12 duration-1000`} />
                  <h3 className={`text-3xl font-serif font-black text-primary leading-tight ${isUrdu ? "font-urdu text-4xl" : ""}`}>
                    {t("adm_p.process_title")}
                  </h3>
                  <div className="space-y-8 relative z-10">
                     {[
                       { step: "01", title: t("adm_p.step1_title"), desc: t("adm_p.step1_desc") },
                       { step: "02", title: t("adm_p.step2_title"), desc: t("adm_p.step2_desc") },
                       { step: "03", title: t("adm_p.step3_title"), desc: t("adm_p.step3_desc") },
                       { step: "04", title: t("adm_p.step4_title"), desc: t("adm_p.step4_desc") }
                     ].map((item, i) => (
                       <div key={i} className={`flex gap-6 group/step hover:translate-x-1 transition-transform ${isUrdu ? "flex-row-reverse" : "flex-row"}`}>
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-primary shadow-xl border border-black/5 group-hover/step:bg-primary group-hover/step:text-white transition-all">{item.step}</div>
                          <div className={`flex-1 space-y-1 ${isUrdu ? "text-right" : "text-left"}`}>
                             <p className={`font-bold text-primary group-hover/step:text-accent transition-colors ${isUrdu ? "font-urdu text-xl" : ""}`}>{item.title}</p>
                             <p className={`text-xs text-primary/40 font-medium leading-relaxed italic line-clamp-2 ${isUrdu ? "font-urdu text-sm" : ""}`}>"{item.desc}"</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               <div className={`p-10 bg-primary-dark text-white rounded-4xl shadow-2xl relative overflow-hidden group cursor-default ${isUrdu ? "text-right" : "text-left"}`}>
                  <ShieldCheck className={`w-32 h-32 text-accent/10 absolute -bottom-8 ${isUrdu ? "-right-8" : "-left-8"} transition-transform group-hover:scale-110 duration-1000`} />
                  <div className="relative z-10 space-y-6">
                    <h4 className={`text-2xl font-serif font-black italic text-accent underline decoration-white/10 decoration-4 underline-offset-8 ${isUrdu ? "font-urdu text-3xl" : ""}`}>
                      {t("adm_p.docs_title")}
                    </h4>
                    <ul className="space-y-4">
                       {[
                         t("adm_p.doc1"),
                         t("adm_p.doc2"),
                         t("adm_p.doc3"),
                         t("adm_p.doc4")
                       ].map((doc, d) => (
                         <li key={d} className={`flex items-center gap-3 text-sm font-bold text-white/50 hover:text-white transition-colors ${isUrdu ? "flex-row-reverse" : "flex-row"}`}>
                            <CheckCircle2 className="w-4 h-4 text-accent" /> {doc}
                         </li>
                       ))}
                    </ul>
                  </div>
               </div>
            </div>

            {/* Right Admission Form */}
            <div className={`lg:col-span-3 space-y-12 ${isUrdu ? "order-1" : "order-2"}`}>
               <div className={`p-12 lg:p-16 bg-white/70 backdrop-blur-md border border-black/5 rounded-5xl shadow-premium relative overflow-hidden group ${isUrdu ? "text-right" : "text-left"}`}>
                  
                  <div className={`flex justify-between items-end pb-12 border-b border-black/5 relative z-10 ${isUrdu ? "flex-row-reverse" : ""}`}>
                     <div className="space-y-2">
                        <h4 className={`text-3xl font-serif font-black text-primary leading-tight ${isUrdu ? "font-urdu text-4xl" : ""}`}>
                          {t("adm_p.form_title")}
                        </h4>
                        <p className={`text-[10px] font-black uppercase tracking-[0.2em] text-primary/30 ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>
                           {t("adm_p.form_subtitle")}
                        </p>
                     </div>
                     <Landmark className={`w-12 h-12 text-primary/5 transition-transform group-hover:rotate-12 duration-1000 ${isUrdu ? "-scale-x-100" : ""}`} />
                  </div>

                  <form className="space-y-10 pt-12 relative z-10" onSubmit={handleSubmit}>
                     {error && <div className="p-4 bg-red-100 text-red-600 rounded-xl font-medium">{error}</div>}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-3">
                           <label className={`text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 ml-2 ${isUrdu ? "font-urdu tracking-normal text-xs mr-2 ml-0" : ""}`}>
                              {t("adm_p.full_name")}
                           </label>
                           <div className="relative group/input">
                              <User className={`w-5 h-5 absolute ${isUrdu ? "right-5" : "left-5"} top-1/2 -translate-y-1/2 text-primary/20 group-focus-within/input:text-primary transition-colors`} />
                              <input required type="text" placeholder={t("adm_p.full_name_ph")} 
                                 value={formData.studentName} onChange={e => setFormData({...formData, studentName: e.target.value})}
                                 className={`w-full h-16 ${isUrdu ? "pr-14 pl-6 text-right" : "pl-14 pr-6"} bg-cream border border-primary/5 rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 font-bold text-primary placeholder:font-medium transition-all ${isUrdu ? "font-urdu text-lg" : ""}`} />
                           </div>
                        </div>
                        <div className="space-y-3">
                           <label className={`text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 ml-2 ${isUrdu ? "font-urdu tracking-normal text-xs mr-2 ml-0" : ""}`}>
                              {t("adm_p.parent_name")}
                           </label>
                           <div className="relative group/input">
                              <Users className={`w-5 h-5 absolute ${isUrdu ? "right-5" : "left-5"} top-1/2 -translate-y-1/2 text-primary/20 group-focus-within/input:text-primary transition-colors`} />
                              <input required type="text" placeholder={t("adm_p.parent_name_ph")} 
                                 value={formData.parentName} onChange={e => setFormData({...formData, parentName: e.target.value})}
                                 className={`w-full h-16 ${isUrdu ? "pr-14 pl-6 text-right" : "pl-14 pr-6"} bg-cream border border-primary/5 rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 font-bold text-primary placeholder:font-medium transition-all ${isUrdu ? "font-urdu text-lg" : ""}`} />
                           </div>
                        </div>
                        <div className="space-y-3">
                           <label className={`text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 ml-2 ${isUrdu ? "font-urdu tracking-normal text-xs mr-2 ml-0" : ""}`}>
                              {t("adm_p.dob")}
                           </label>
                           <div className="relative group/input">
                              <Calendar className={`w-5 h-5 absolute ${isUrdu ? "right-5" : "left-5"} top-1/2 -translate-y-1/2 text-primary/20 group-focus-within/input:text-primary transition-colors`} />
                              <input required type="date" 
                                 value={formData.dob} onChange={e => setFormData({...formData, dob: e.target.value})}
                                 className={`w-full h-16 ${isUrdu ? "pr-14 pl-6 text-right" : "pl-14 pr-6"} bg-cream border border-primary/5 rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 font-bold text-primary transition-all ${isUrdu ? "font-urdu text-lg" : ""}`} />
                           </div>
                        </div>
                        <div className="space-y-3">
                           <label className={`text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 ml-2 ${isUrdu ? "font-urdu tracking-normal text-xs mr-2 ml-0" : ""}`}>
                              {t("adm_p.mobile")}
                           </label>
                           <div className="relative group/input">
                              <Phone className={`w-5 h-5 absolute ${isUrdu ? "right-5" : "left-5"} top-1/2 -translate-y-1/2 text-primary/20 group-focus-within/input:text-primary transition-colors`} />
                              <input required type="tel" placeholder="9527635311" 
                                 value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                                 className={`w-full h-16 ${isUrdu ? "pr-14 pl-6 text-right" : "pl-14 pr-6"} bg-cream border border-primary/5 rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 font-bold text-primary placeholder:font-medium transition-all ${isUrdu ? "font-urdu text-lg" : ""}`} />
                           </div>
                        </div>
                     </div>

                     <div className="space-y-3">
                        <label className={`text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 ml-2 ${isUrdu ? "font-urdu tracking-normal text-xs mr-2 ml-0" : ""}`}>
                           {t("adm_p.address")}
                        </label>
                        <div className="relative group/input">
                           <MapPin className={`w-5 h-5 absolute ${isUrdu ? "right-5" : "left-5"} top-8 -translate-y-1/2 text-primary/20 group-focus-within/input:text-primary transition-colors`} />
                           <textarea required rows={4} placeholder={t("adm_p.address_ph")} 
                              value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})}
                              className={`w-full ${isUrdu ? "pr-14 pl-6 text-right" : "pl-14 pr-6"} py-6 bg-cream border border-primary/5 rounded-3xl outline-none focus:ring-4 focus:ring-primary/5 font-bold text-primary placeholder:font-medium transition-all resize-none italic ${isUrdu ? "font-urdu text-lg" : ""}`}></textarea>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-3">
                           <label className={`text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 ml-2 ${isUrdu ? "font-urdu tracking-normal text-xs mr-2 ml-0" : ""}`}>
                              {t("adm_p.course_interest")}
                           </label>
                           <div className="relative group/input">
                              <BookOpen className={`w-5 h-5 absolute ${isUrdu ? "right-5" : "left-5"} top-1/2 -translate-y-1/2 text-primary/20 group-focus-within/input:text-primary transition-colors`} />
                              <select required 
                                 value={formData.courseAppliedFor} onChange={e => setFormData({...formData, courseAppliedFor: e.target.value})}
                                 className={`w-full h-16 ${isUrdu ? "pr-14 pl-6 text-right" : "pl-14 pr-6"} bg-cream border border-primary/5 rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 font-bold text-primary appearance-none transition-all ${isUrdu ? "font-urdu text-lg" : ""}`}>
                                 <option value="">{t("adm_p.course_select")}</option>
                                 <option>{t("course.c1_title")}</option>
                                 <option>{t("course.c2_title")}</option>
                                 <option>{t("course.c3_title")}</option>
                                 <option>{t("course.c4_title")}</option>
                              </select>
                           </div>
                        </div>
                        <div className="space-y-3">
                           <label className={`text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 ml-2 ${isUrdu ? "font-urdu tracking-normal text-xs mr-2 ml-0" : ""}`}>
                              {t("adm_p.prev_edu")}
                           </label>
                           <div className="relative group/input">
                              <GraduationCap className={`w-5 h-5 absolute ${isUrdu ? "right-5" : "left-5"} top-1/2 -translate-y-1/2 text-primary/20 group-focus-within/input:text-primary transition-colors`} />
                              <input type="text" placeholder={t("adm_p.prev_edu_ph")} 
                                 value={formData.previousEducation} onChange={e => setFormData({...formData, previousEducation: e.target.value})}
                                 className={`w-full h-16 ${isUrdu ? "pr-14 pl-6 text-right" : "pl-14 pr-6"} bg-cream border border-primary/5 rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 font-bold text-primary placeholder:font-medium transition-all ${isUrdu ? "font-urdu text-lg" : ""}`} />
                           </div>
                        </div>
                     </div>

                     <div className="space-y-3">
                        <label className={`text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 ml-2 ${isUrdu ? "font-urdu tracking-normal text-xs mr-2 ml-0" : ""}`}>
                           {t("adm_p.upload_photo")}
                        </label>
                        <div className="w-full h-32 border-2 border-dashed border-primary/10 rounded-4xl bg-cream/40 flex flex-col items-center justify-center space-y-2 hover:border-primary transition-all cursor-pointer group/upload shadow-inner">
                           <Upload className="w-8 h-8 text-primary/20 group-hover/upload:text-primary transition-colors" />
                           <p className={`text-[10px] font-black uppercase tracking-widest text-primary/40 ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>
                              {t("adm_p.upload_ph")}
                           </p>
                        </div>
                     </div>

                     <button disabled={loading} type="submit" className={`w-full h-20 bg-primary text-white text-xl font-serif font-black rounded-3xl shadow-2xl hover:bg-primary-dark transition-all transform hover:-translate-y-1 flex items-center justify-center gap-4 group ${isUrdu ? "font-urdu text-2xl flex-row-reverse" : ""} ${loading ? "opacity-70 cursor-not-allowed" : ""}`}>
                        {loading ? "Sending..." : t("adm_p.submit_btn")}
                        <ArrowRight className={`w-6 h-6 transform ${isUrdu ? "group-hover:-translate-x-3 rotate-180" : "group-hover:translate-x-3"} transition-transform duration-500`} />
                     </button>

                     <p className={`text-center text-xs font-black text-primary/20 uppercase tracking-[0.2em] pt-4 ${isUrdu ? "font-urdu tracking-normal text-sm" : ""}`}>
                        {t("adm_p.policy_msg")} <span className="underline decoration-accent decoration-2 underline-offset-4 cursor-pointer">{t("adm_p.policy_link")}</span> {isUrdu ? t("adm_p.policy_agree") : ""}
                     </p>
                  </form>
               </div>
            </div>

         </div>
      </section>

      <Footer />
    </div>
  );
}
