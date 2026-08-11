"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Camera, 
  Image as ImageIcon, 
  Play, 
  Maximize2, 
  ChevronRight, 
  Sparkles,
  Calendar,
  MapPin,
  Filter
} from "lucide-react";

const categories = ["All", "Graduation", "Classes", "Masjid", "Events"];

const galleryItems = [
  { id: 1, category: "Graduation", title: "Jalsa 2024 Graduation Ceremony", date: "Jan 12, 2024", location: "Main Hall", type: "image", imageUrl: "https://images.unsplash.com/photo-1523050874724-85710f28b13b?auto=format&fit=crop&w=800&q=80" },
  { id: 2, category: "Classes", title: "Tajweed Mastery Program", date: "Feb 05, 2024", location: "Class 03-B", type: "image", imageUrl: "https://images.unsplash.com/photo-1576444399905-6caa36ebdc0f?auto=format&fit=crop&w=800&q=80" },
  { id: 3, category: "Events", title: "Annual Quran Competition", date: "Dec 15, 2023", location: "Masjid Al-Umaima", type: "video", imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80" },
  { id: 4, category: "Masjid", title: "Classical Architecture & Design", date: "Aug 10, 2023", location: "External View", type: "image", imageUrl: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80" },
  { id: 5, category: "Graduation", title: "Hifz Student Convocation", date: "Jan 14, 2024", location: "Main Hall", type: "image", imageUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80" },
  { id: 6, category: "Classes", title: "Arabic Language Workshop", date: "Feb 20, 2024", location: "Library", type: "image", imageUrl: "https://images.unsplash.com/photo-1513258496099-48168024cbd0?auto=format&fit=crop&w=800&q=80" },
  { id: 7, category: "Events", title: "Ramadan Iftar Gathering", date: "Apr 02, 2024", location: "Courtyard", type: "image", imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" },
  { id: 8, category: "Masjid", title: "Evening Dhikr Circle", date: "Oct 22, 2023", location: "Prayer Area", type: "image", imageUrl: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?auto=format&fit=crop&w=800&q=80" },
  { id: 9, category: "Classes", title: "Early Childhood Nazra", date: "Mar 05, 2024", location: "Primary Wing", type: "image", imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-in fade-in duration-1000">
           <div className="inline-flex items-center gap-3 bg-primary/5 px-6 py-2.5 rounded-full border border-primary/10">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px]">Visual Journey</span>
           </div>
           
           <h1 className="text-6xl md:text-8xl font-serif font-black text-primary leading-none tracking-tight">
              Our <span className="text-accent italic">Gallery</span>
           </h1>
           
           <p className="max-w-2xl mx-auto text-primary/50 font-medium text-lg leading-relaxed italic underline decoration-primary/5 decoration-8 underline-offset-8">
              "Witness every spiritual milestone and educational achievement through our lenses."
           </p>
        </div>

        {/* Filter Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 flex flex-wrap justify-center gap-4">
           {categories.map((cat) => (
             <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all transform active:scale-95 border-2 ${
                 activeCategory === cat 
                   ? "bg-primary text-white border-primary shadow-xl shadow-primary/20 -translate-y-1" 
                   : "bg-white text-primary/40 border-primary/5 hover:border-accent hover:text-primary hover:shadow-soft"
               }`}
             >
               {cat}
             </button>
           ))}
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {filteredItems.map((item) => (
             <div 
               key={item.id} 
               className="group relative bg-white rounded-4xl overflow-hidden shadow-soft border border-primary/5 transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-4 animate-in slide-in-from-bottom-10"
             >
                {/* Media Placeholder */}
                <div className="aspect-4/3 bg-primary/5 relative overflow-hidden">
                   <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 flex items-center justify-center backdrop-blur-sm">
                      <div className="bg-white/90 p-5 rounded-full transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 shadow-2xl">
                         {item.type === 'video' ? <Play className="w-8 h-8 text-primary fill-primary" /> : <Maximize2 className="w-8 h-8 text-primary" />}
                      </div>
                   </div>
                   
                   {/* Actual Image */}
                   <img 
                      src={item.imageUrl} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />

                   <div className="absolute top-6 left-6 z-20">
                      <span className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-primary shadow-lg border border-primary/5">
                         {item.category}
                      </span>
                   </div>
                </div>

                {/* Content */}
                <div className="p-10 space-y-6">
                   <div className="space-y-4">
                      <h3 className="text-2xl font-serif font-bold text-primary leading-tight group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-6 opacity-40">
                         <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.date}
                         </div>
                         <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                            <MapPin className="w-3.5 h-3.5" />
                            {item.location}
                         </div>
                      </div>
                   </div>
                   
                   <div className="pt-6 border-t border-primary/5 flex items-center justify-between group/link cursor-pointer">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary/30 group-hover/link:text-primary transition-colors">Expand Record</span>
                      <ChevronRight className="w-4 h-4 text-accent group-hover/link:translate-x-2 transition-transform" />
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* Call to Action */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 text-center">
           <div className="p-16 bg-cream rounded-5xl border-2 border-primary/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-12 -translate-y-12">
                 <Camera className="w-48 h-48 text-primary" />
              </div>
              
              <div className="relative z-10 space-y-6">
                 <h2 className="text-4xl font-serif font-bold text-primary italic">Capture Your Experience</h2>
                 <p className="max-w-xl mx-auto text-primary/40 font-medium leading-relaxed">Have photos from your time at Madrasa Al-Umaima? We would love to feature them in our historical archives.</p>
                 <button className="bg-primary text-white px-12 py-5 rounded-3xl font-serif font-bold text-lg hover:bg-primary-dark transition-all shadow-xl hover:-translate-y-1 active:scale-95">
                    Submit Your Memories
                 </button>
              </div>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


