"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, CheckCircle2, ShieldCheck, Landmark } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsPage() {
  const { isUrdu } = useLanguage();

  return (
    <div className={`flex flex-col min-h-screen bg-background overflow-hidden ${isUrdu ? "font-urdu" : "font-sans"}`}>
      <Navbar />

      <section className="relative pt-44 pb-20 px-4 sm:px-6 lg:px-8 border-b border-primary/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/10 px-6 py-2 rounded-full">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Guidelines & Code of Conduct</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-primary leading-tight">
            Terms & <span className="text-accent italic">Conditions</span>
          </h1>
          <p className="text-lg text-primary/50 max-w-xl mx-auto font-medium">
            Academic guidelines, portal usage standards, and moral code of conduct for Madrasa Al-Umaima.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-12 lg:p-16 rounded-5xl shadow-premium border border-border/40 space-y-12 leading-relaxed text-primary/80">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-accent" /> 1. Academic Enrollment & Attendance
            </h2>
            <p className="text-sm md:text-base leading-8 text-primary/70">
              Students admitted to Nazra, Hifz, Tajweed, or Aalim courses must adhere to the attendance threshold (minimum 85%). Leaves of absence must be formally requested via the Parent Portal prior to the leave period.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-accent" /> 2. Islamic Discipline & Moral Character (Akhlaq)
            </h2>
            <p className="text-sm md:text-base leading-8 text-primary/70">
              All members of the institution — teachers, students, and guardians — are expected to uphold Islamic adab, respect, and punctuality. Respectful interaction with teachers (Asatiza) and fellow students is paramount.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-accent" /> 3. Fee Ledgers & Financial Contributions
            </h2>
            <p className="text-sm md:text-base leading-8 text-primary/70">
              Tuition contributions support Madrasa facilities, scholarships, and faculty remuneration. Fee payments can be tracked directly through the Parent or Student portal. Scholarships (Mustahiq-e-Zakat) are available upon application to the administrative committee.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-accent" /> 4. Portal Security & Access
            </h2>
            <p className="text-sm md:text-base leading-8 text-primary/70">
              Login credentials should not be shared outside immediate family members. Any unauthorized use or suspicious activity should be reported immediately to the system administrators.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
