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
  Edit3,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Target,
  GraduationCap
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

export default function ProfilePage() {
  const studentInfo = {
    name: "Mustafa Ahmed",
    rollNumber: "#MN-2026-084",
    course: "Hifz-ul-Quran (Level 2)",
    status: "Active Scholar",
    fatherName: "Ahmed Khan",
    dob: "12 July 2012",
    age: "13 Years",
    mobile: "+91 98765 43210",
    email: "mustafa.ahmed@example.com",
    address: "45 Green Valley, Lucknow, UP, India",
    admissionDate: "05 Jan 2024",
    enrolledCourse: "Hifz-ul-Quran",
    currentLevel: "Level 2 / Juz 14",
    batchTiming: "08:00 AM - 12:30 PM (Morning)",
    juzProgress: "14/30",
    attendance: "94.5%",
    lastExam: "92/100 (A+)"
  };

  return (
    <DashboardLayout 
      role="student" 
      sidebarItems={sidebarItems}
      userProfile={{ name: studentInfo.name, roleName: "Student", avatar: "" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 space-y-12 pb-20 relative">
        
        {/* Profile Hero Header */}
        <div className="relative bg-white rounded-4xl shadow-soft border border-beige/10 p-8 md:p-12 overflow-hidden group">
           <div className="absolute top-0 right-0 w-[40%] h-full bg-primary/5 -skew-x-12 translate-x-20 group-hover:bg-primary/10 transition-all duration-1000"></div>
           
           <div className="flex flex-col md:flex-row items-center md:items-end gap-10 relative z-10">
              {/* Photo Placeholder */}
              <div className="relative">
                 <div className="w-48 h-48 rounded-full bg-cream p-1.5 border-2 border-primary/5 shadow-xl">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-serif text-6xl text-primary font-black overflow-hidden relative group-hover:scale-[1.02] transition-transform">
                       {studentInfo.name.charAt(0)}
                       {/* Overlay gradient */}
                       <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent"></div>
                    </div>
                 </div>
                 <button className="absolute bottom-0 right-0 w-14 h-14 bg-accent text-white rounded-2xl shadow-xl shadow-accent/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all group/btn border-4 border-white">
                    <Edit3 className="w-6 h-6 group-hover/btn:rotate-12 transition-transform" />
                 </button>
              </div>

              {/* Name & Basic Info */}
              <div className="flex-1 space-y-6 text-center md:text-left">
                 <div className="space-y-2">
                    <div className="flex items-center justify-center md:justify-start gap-4">
                       <h1 className="text-4xl md:text-6xl font-serif font-black text-primary tracking-tight">{studentInfo.name}</h1>
                       <span className="hidden md:flex items-center gap-1.5 px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary uppercase text-[9px] font-black tracking-widest rounded-full">
                          <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                          Authenticated
                       </span>
                    </div>
                    <p className="text-primary/60 font-sans font-bold text-sm md:text-lg tracking-[0.2em] uppercase flex items-center justify-center md:justify-start gap-3">
                       <span className="text-accent underline underline-offset-8">{studentInfo.rollNumber}</span>
                       <span className="text-accent/30 font-light hidden md:inline">|</span>
                       <span>{studentInfo.course}</span>
                    </p>
                 </div>

                 <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <span className="px-6 py-2.5 bg-accent text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-accent/20">{studentInfo.status}</span>
                    <button className="px-6 py-2.5 bg-white border-2 border-primary/5 text-primary rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-cream transition-all flex items-center gap-2">
                       <Edit3 className="w-4 h-4" />
                       Edit Profile
                    </button>
                    <button className="px-6 py-2.5 bg-primary-dark text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary transition-all flex items-center gap-2 shadow-xl shadow-primary/10">
                       <Download className="w-4 h-4 text-accent" />
                       Download Profile
                    </button>
                 </div>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
           {/* Left Column: Details Cards */}
           <div className="lg:col-span-8 space-y-12">
              
              {/* Personal Information */}
              <div className="space-y-8">
                 <div className="flex justify-between items-center pb-4 border-b-2 border-primary/5">
                    <h2 className="text-4xl font-serif font-black text-primary">Student Identiy</h2>
                    <p className="text-[10px] font-black text-accent uppercase tracking-widest px-4 py-2 bg-accent/5 rounded-full">Official Records</p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: "Full Name", value: studentInfo.name, icon: User },
                      { label: "Father/Guardian Name", value: studentInfo.fatherName, icon: User },
                      { label: "Date of Birth", value: studentInfo.dob, icon: Calendar },
                      { label: "Age", value: studentInfo.age, icon: Clock },
                      { label: "Mobile Number", value: studentInfo.mobile, icon: Phone },
                      { label: "Email Address", value: studentInfo.email, icon: Mail },
                      { label: "Home Address", value: studentInfo.address, icon: MapPin, full: true },
                      { label: "Admission Date", value: studentInfo.admissionDate, icon: CheckCircle2 },
                      { label: "Course Enrolled", value: studentInfo.enrolledCourse, icon: BookOpen },
                      { label: "Current Level", value: studentInfo.currentLevel, icon: Award },
                      { label: "Batch Timing", value: studentInfo.batchTiming, icon: Clock },
                    ].map((item, id) => (
                       <div key={id} className={`p-8 bg-white rounded-3xl shadow-soft border border-beige/10 space-y-4 hover:shadow-xl transition-all group ${item.full ? 'md:col-span-2' : ''}`}>
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                                <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-all" />
                             </div>
                             <span className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em]">{item.label}</span>
                          </div>
                          <p className="text-xl md:text-2xl font-serif font-black text-primary leading-tight group-hover:text-accent transition-colors">{item.value}</p>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-6 pt-6">
                 <button className="flex-1 md:flex-none flex items-center justify-center gap-3 py-6 px-10 bg-primary text-white rounded-3xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-primary/20 hover:-translate-y-1 transition-all">
                    <Edit3 className="w-4 h-4 text-accent" />
                    Update Profile Information
                 </button>
                 <button className="flex-1 md:flex-none flex items-center justify-center gap-3 py-6 px-10 bg-white border-2 border-primary/5 text-primary rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-cream transition-all">
                    <ExternalLink className="w-4 h-4 text-accent" />
                    Request Data Correction
                 </button>
              </div>
           </div>

           {/* Right Column: Academic Summary & ID Card */}
           <div className="lg:col-span-4 space-y-12">
              
              {/* Academic Snapshot */}
              <div className="bg-primary/5 p-10 rounded-4xl border border-primary/10 space-y-10 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 transform translate-x-8 -translate-y-8 opacity-20 pointer-events-none">
                    <GraduationCap className="w-40 h-40 text-primary" />
                 </div>
                 
                 <div className="space-y-1 relative z-10">
                    <h3 className="text-3xl font-serif font-black text-primary">Academic Profile</h3>
                    <p className="text-[10px] font-sans font-bold text-primary/30 uppercase tracking-[0.3em]">Quick Summary</p>
                 </div>

                 <div className="space-y-8 relative z-10">
                    {[
                      { label: "Juz Memorized", value: studentInfo.juzProgress, icon: BookOpen, accent: "text-accent" },
                      { label: "Attendance Rate", value: studentInfo.attendance, icon: Calendar, accent: "text-accent" },
                      { label: "Last Exam Result", value: studentInfo.lastExam, icon: Target, accent: "text-white bg-primary p-1.5 rounded-lg" },
                      { label: "Memorization Level", value: "Advanced", icon: Award, accent: "text-accent underline" },
                    ].map((snap, s) => (
                       <div key={s} className="flex items-center justify-between border-b-2 border-primary/5 pb-4 last:border-0 hover:px-2 transition-all group/item">
                          <div className="flex items-center gap-4">
                             <snap.icon className="w-5 h-5 text-primary/30 group-hover/item:text-accent transition-colors" />
                             <span className="text-sm font-bold text-primary/60">{snap.label}</span>
                          </div>
                          <span className={`text-xl font-serif font-black ${snap.accent}`}>{snap.value}</span>
                       </div>
                    ))}
                 </div>

                 <button className="w-full py-5 bg-white rounded-2xl shadow-xl shadow-black/5 flex items-center justify-center gap-3 font-black text-[10px] uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all group/btn border border-primary/5">
                    View Complete transcript
                    <ArrowRight className="w-4 h-4 text-accent transition-transform group-hover/btn:translate-x-2" />
                 </button>
              </div>

              {/* ID Card Mini Preview */}
              <div className="space-y-6">
                 <div className="flex justify-between items-center px-4">
                    <h4 className="text-xl font-serif font-black text-primary italic">ID Card Preview</h4>
                    <span className="text-[10px] uppercase font-black text-accent tracking-widest border-b border-accent cursor-pointer hover:text-primary transition-colors">Download PDF</span>
                 </div>
                 
                 <div className="bg-primary-dark p-8 rounded-4xl text-white relative shadow-2xl overflow-hidden group">
                    {/* Decorative Arabic Pattern Texture if you had one */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                       {/* Pattern here */}
                    </div>
                    
                    <div className="relative z-10 space-y-8">
                       <div className="flex justify-between items-start">
                          <div className="flex items-center gap-2">
                             <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                                <BookOpen className="w-4 h-4 text-primary-dark" />
                             </div>
                             <span className="text-[10px] font-black uppercase tracking-widest font-serif">Al-Umaima Madrasa</span>
                          </div>
                          <ShieldCheck className="w-6 h-6 text-accent/40" />
                       </div>

                       <div className="flex items-center gap-6">
                          <div className="w-20 h-20 bg-white/20 rounded-2xl border border-white/10 flex items-center justify-center font-serif text-3xl font-black">
                             {studentInfo.name.charAt(0)}
                          </div>
                          <div className="space-y-1">
                             <p className="text-lg font-serif font-black leading-tight">{studentInfo.name}</p>
                             <p className="text-[10px] text-accent font-black uppercase tracking-widest leading-none">{studentInfo.rollNumber}</p>
                             <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest leading-none pt-1">{studentInfo.enrolledCourse}</p>
                          </div>
                       </div>

                       <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                          <div className="space-y-1">
                             <p className="text-[8px] text-white/20 font-black uppercase tracking-widest leading-none">Valid Until</p>
                             <p className="text-[10px] font-black leading-none">March 2027</p>
                          </div>
                          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                             <div className="w-6 h-6 border-2 border-accent/40 rounded-sm"></div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Status Badge Info */}
              <div className="p-8 bg-accent/10 border-2 border-accent/20 rounded-4xl flex items-center gap-6 group hover:translate-x-2 transition-transform">
                 <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20 shrink-0 group-hover:rotate-6 transition-transform">
                    <Award className="w-8 h-8 text-white" />
                 </div>
                 <div className="space-y-1">
                    <h5 className="font-serif font-black text-primary Leading-tight">Distinguished Student</h5>
                    <p className="text-xs text-primary/60 font-medium">Top 5% of your batch this month.</p>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}


