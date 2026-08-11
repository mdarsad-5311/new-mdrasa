"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Landmark, 
  ArrowRight,
  Clock,
  Briefcase
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { api } from "@/lib/api";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const { t, isUrdu } = useLanguage();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await api.post("/contact", formData);
      setSent(true);
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setError(err.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`flex flex-col min-h-screen bg-background overflow-hidden ${isUrdu ? "font-urdu" : "font-sans"}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-44 pb-24 bg-transparent px-4 sm:px-6 lg:px-8 overflow-hidden group border-b border-primary/5">
         <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
         </div>

         <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
            <div className={`inline-flex items-center gap-3 bg-primary/5 border border-primary/10 px-6 py-2.5 rounded-full shadow-2xl animate-fade-in ${isUrdu ? "flex-row-reverse" : ""}`}>
               <MessageCircle className="w-5 h-5 text-accent" />
               <span className={`text-primary text-[10px] font-black uppercase tracking-[0.4em] leading-none underline decoration-accent/40 decoration-2 underline-offset-4 ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>
                 {t("con_p.hero_label")}
               </span>
            </div>
            <h1 className={`text-5xl md:text-7xl lg:text-9xl font-serif font-black text-primary leading-tight ${isUrdu ? "font-urdu text-6xl md:text-8xl" : ""}`}>
               {t("con_p.hero_title")} <span className="text-accent italic">{t("con_p.hero_accent")}</span>
            </h1>
            <p className={`text-xl md:text-2xl text-primary/40 max-w-2xl mx-auto italic leading-relaxed ${isUrdu ? "font-urdu text-2xl" : ""}`}>
               {t("con_p.hero_subtitle")}
            </p>
         </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-transparent relative z-10 px-4 sm:px-6 lg:px-8">
         <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24 ${isUrdu ? "direction-rtl" : ""}`}>
            
            {/* Left Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-12">
               <div className={`p-10 lg:p-16 bg-cream rounded-4xl border border-primary/5 space-y-10 shadow-sm relative overflow-hidden group hover:scale-[1.02] transition-all ${isUrdu ? "text-right" : "text-left"}`}>
                  <div className="space-y-4 relative z-10">
                    <h2 className={`text-5xl font-serif font-black text-primary leading-tight underline decoration-primary/10 decoration-8 underline-offset-8 ${isUrdu ? "font-urdu text-5xl" : ""}`}>
                      {t("con_p.info_title")}
                    </h2>
                    <p className={`text-xl text-primary/40 font-bold italic leading-relaxed ${isUrdu ? "font-urdu text-2xl" : ""}`}>
                      {t("con_p.info_subtitle")}
                    </p>
                  </div>

                  <div className="space-y-10 relative z-10 pt-4">
                     {[
                       { icon: MapPin, label: t("con_p.loc_label"), val: t("footer.address"), color: "bg-primary" },
                       { icon: Phone, label: t("con_p.call_label"), val: t("footer.phone_val"), color: "bg-accent" },
                       { icon: Mail, label: t("con_p.email_label"), val: t("footer.email_val"), color: "bg-primary-dark" }
                     ].map((info, i) => (
                       <div key={i} className={`flex gap-6 group/info hover:translate-x-2 transition-transform ${isUrdu ? "flex-row-reverse" : ""}`}>
                          <div className={`w-14 h-14 ${info.color} rounded-2xl flex items-center justify-center p-4 shadow-xl shadow-black/5 group-hover/info:rotate-12 transition-transform`}>
                             <info.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className={`space-y-1 ${isUrdu ? "text-right" : "text-left"}`}>
                             <p className={`text-[10px] uppercase font-black tracking-widest text-primary/40 leading-none ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>{info.label}</p>
                             <p className={`text-lg font-bold text-primary italic leading-tight ${isUrdu ? "font-urdu text-xl" : ""}`}>{info.val}</p>
                          </div>
                       </div>
                     ))}
                  </div>

                  <div className={`pt-8 border-t border-black/5 flex items-center gap-6 relative z-10 ${isUrdu ? "flex-row-reverse" : ""}`}>
                     <button className={`flex items-center gap-2 text-xs font-black text-primary uppercase tracking-[0.2em] hover:text-accent transition-colors ${isUrdu ? "font-urdu tracking-normal text-sm flex-row-reverse" : ""}`}>
                        <Briefcase className="w-4 h-4 text-accent" /> {t("con_p.careers")}
                     </button>
                     <button className={`flex items-center gap-2 text-xs font-black text-primary uppercase tracking-[0.2em] hover:text-accent transition-colors ${isUrdu ? "font-urdu tracking-normal text-sm flex-row-reverse" : ""}`}>
                        <Clock className="w-4 h-4 text-accent" /> {t("con_p.hours")}
                     </button>
                  </div>
               </div>

               {/* Map Placeholder UI */}
               <div className="aspect-video bg-primary/10 rounded-4xl shadow-xl border-4 border-white overflow-hidden group cursor-pointer relative flex flex-col items-center justify-center space-y-4">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_100%)] opacity-10 group-hover:scale-150 transition-transform duration-1000"></div>
                  <MapPin className="w-16 h-16 text-primary/20 group-hover:text-primary transition-colors animate-bounce" />
                  <p className={`text-[10px] uppercase font-black tracking-[0.3em] text-primary/40 leading-none ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>
                    {t("con_p.map_directions")}
                  </p>
               </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-3 space-y-12 h-fit">
               <div className="p-12 lg:p-20 bg-white/70 backdrop-blur-md border border-black/5 rounded-5xl shadow-premium relative overflow-hidden group">
                  
                  {sent ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center space-y-8 animate-fade-in group">
                       <CheckCircle2 className="w-24 h-24 text-accent animate-bounce" />
                       <div className="space-y-4">
                          <h4 className={`text-4xl font-serif font-black text-primary ${isUrdu ? "font-urdu text-5xl" : ""}`}>
                            {t("con_p.success_title")}
                          </h4>
                          <p className={`text-xl text-primary/40 font-bold max-w-sm italic ${isUrdu ? "font-urdu text-2xl" : ""}`}>
                            {t("con_p.success_msg")}
                          </p>
                       </div>
                       <button onClick={() => setSent(false)} className={`px-12 py-5 bg-primary text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl hover:-translate-y-1 transition-all ${isUrdu ? "font-urdu text-base" : ""}`}>
                         {t("con_p.send_another")}
                       </button>
                    </div>
                  ) : (
                    <>
                      <div className={`flex justify-between items-end pb-12 border-b border-black/5 relative z-10 ${isUrdu ? "flex-row-reverse" : ""}`}>
                        <div className={`space-y-2 ${isUrdu ? "text-right" : "text-left"}`}>
                           <h4 className={`text-3xl font-serif font-black text-primary leading-tight italic underline decoration-accent decoration-4 underline-offset-8 ${isUrdu ? "font-urdu text-4xl" : ""}`}>
                             {t("con_p.form_title")}
                           </h4>
                           <p className={`text-[10px] font-black uppercase tracking-[0.2em] text-primary/30 ${isUrdu ? "font-urdu tracking-normal text-xs" : ""}`}>
                             {t("con_p.form_sub")}
                           </p>
                        </div>
                        <Send className={`w-12 h-12 text-primary/5 transition-transform group-hover:rotate-12 duration-1000 ${isUrdu ? "-scale-x-100" : ""}`} />
                     </div>

                     <form className="space-y-10 pt-12 relative z-10" onSubmit={handleSubmit}>
                        {error && <div className="p-4 bg-red-100 text-red-600 rounded-xl font-medium">{error}</div>}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                           <div className="space-y-3">
                              <label className={`text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 ml-2 ${isUrdu ? "font-urdu tracking-normal text-xs text-right mr-2 ml-0" : ""}`}>
                                {t("con_p.full_name")}
                              </label>
                              <div className="relative group/input">
                                 <input required type="text" placeholder={t("con_p.name_ph")} 
                                    value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                                    className={`w-full h-16 px-8 bg-cream border border-primary/5 rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 font-bold text-primary placeholder:font-medium transition-all ${isUrdu ? "font-urdu text-lg text-right" : ""}`} />
                              </div>
                           </div>
                           <div className="space-y-3">
                              <label className={`text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 ml-2 ${isUrdu ? "font-urdu tracking-normal text-xs text-right mr-2 ml-0" : ""}`}>
                                {t("con_p.phone")}
                              </label>
                              <div className="relative group/input">
                                 <input required type="tel" placeholder="9527635311" 
                                    value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                                    className={`w-full h-16 px-8 bg-cream border border-primary/5 rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 font-bold text-primary placeholder:font-medium transition-all ${isUrdu ? "font-urdu text-lg text-right" : ""}`} />
                              </div>
                           </div>
                           <div className="space-y-3">
                              <label className={`text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 ml-2 ${isUrdu ? "font-urdu tracking-normal text-xs text-right mr-2 ml-0" : ""}`}>
                                {t("con_p.email")}
                              </label>
                              <div className="relative group/input">
                                 <input required type="email" placeholder="example@mail.com" 
                                    value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                                    className={`w-full h-16 px-8 bg-cream border border-primary/5 rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 font-bold text-primary placeholder:font-medium transition-all ${isUrdu ? "font-urdu text-lg text-right" : ""}`} />
                              </div>
                           </div>
                           <div className="space-y-3">
                              <label className={`text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 ml-2 ${isUrdu ? "font-urdu tracking-normal text-xs text-right mr-2 ml-0" : ""}`}>
                                {t("con_p.subject")}
                              </label>
                              <div className="relative group/input">
                                 <input required type="text" placeholder={t("con_p.sub_ph")} 
                                    value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})}
                                    className={`w-full h-16 px-8 bg-cream border border-primary/5 rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 font-bold text-primary placeholder:font-medium transition-all ${isUrdu ? "font-urdu text-lg text-right" : ""}`} />
                              </div>
                           </div>
                        </div>

                        <div className="space-y-3">
                           <label className={`text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 ml-2 ${isUrdu ? "font-urdu tracking-normal text-xs text-right mr-2 ml-0" : ""}`}>
                             {t("con_p.message")}
                           </label>
                           <textarea required rows={6} placeholder={t("con_p.msg_ph")} 
                              value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                              className={`w-full px-8 py-8 bg-cream border border-primary/5 rounded-4xl outline-none focus:ring-4 focus:ring-primary/5 font-bold text-primary placeholder:font-medium transition-all resize-none italic ${isUrdu ? "font-urdu text-lg text-right" : ""}`}></textarea>
                        </div>

                        <button disabled={loading} type="submit" className={`w-full h-20 bg-primary text-white text-xl font-serif font-black rounded-3xl shadow-2xl hover:bg-primary-dark transition-all transform hover:-translate-y-1 flex items-center justify-center gap-4 group ${isUrdu ? "font-urdu text-2xl flex-row-reverse" : ""} ${loading ? "opacity-70 cursor-not-allowed" : ""}`}>
                           {loading ? "Sending..." : t("con_p.submit_btn")}
                           <ArrowRight className={`w-6 h-6 transform ${isUrdu ? "-scale-x-100 group-hover:-translate-x-3" : "group-hover:translate-x-3"} transition-transform duration-500 text-accent`} />
                        </button>

                        <p className={`text-center text-xs font-black text-primary/20 uppercase tracking-[0.2em] pt-4 ${isUrdu ? "font-urdu tracking-normal text-sm" : ""}`}>
                          {t("con_p.support_text")} <span className="underline decoration-accent decoration-2 underline-offset-4 cursor-pointer">{t("footer.email_val")}</span>
                        </p>
                     </form>
                    </>
                  )}
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}


