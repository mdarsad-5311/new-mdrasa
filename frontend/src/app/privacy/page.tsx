"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Lock, Eye, FileText, Landmark } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPage() {
  const { t, isUrdu } = useLanguage();

  return (
    <div className={`flex flex-col min-h-screen bg-background overflow-hidden ${isUrdu ? "font-urdu" : "font-sans"}`}>
      <Navbar />

      <section className="relative pt-44 pb-20 px-4 sm:px-6 lg:px-8 border-b border-primary/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/10 px-6 py-2 rounded-full">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Trust & Data Protection</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-primary leading-tight">
            Privacy <span className="text-accent italic">Policy</span>
          </h1>
          <p className="text-lg text-primary/50 max-w-xl mx-auto font-medium">
            Learn how Madrasa Al-Umaima protects your student data, academic records, and institutional privacy.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-12 lg:p-16 rounded-5xl shadow-premium border border-border/40 space-y-12 leading-relaxed text-primary/80">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
              <Lock className="w-6 h-6 text-accent" /> 1. Information We Collect
            </h2>
            <p className="text-sm md:text-base leading-8 text-primary/70">
              When applying for admission, enrolling in courses, or making donations, Madrasa Al-Umaima collects essential information including student names, parent/guardian contact details, date of birth, addresses, and academic records necessary for institutional management.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
              <Eye className="w-6 h-6 text-accent" /> 2. Use of Information
            </h2>
            <p className="text-sm md:text-base leading-8 text-primary/70">
              Information collected is strictly utilized for educational management, attendance tracking, memorization progress (Hifz evaluation), grade generation, fee ledger management, and institutional communication with parents and guardians.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-accent" /> 3. Data Security & Storage
            </h2>
            <p className="text-sm md:text-base leading-8 text-primary/70">
              All electronic records are safeguarded using industry-standard encrypted storage, secure JWT authentication tokens, and strict role-based access control (Admin, Teacher, Student, Parent). We never sell or share private records with third-party advertising entities.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
              <FileText className="w-6 h-6 text-accent" /> 4. Contact for Privacy Inquiries
            </h2>
            <p className="text-sm md:text-base leading-8 text-primary/70">
              If you have any questions or wish to review or update your student or guardian profile records, please contact our administration office at <strong className="text-primary">info@mdrasa.edu</strong> or call <strong className="text-primary">+91 95276 35311</strong>.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
