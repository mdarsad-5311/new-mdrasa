"use client";

import { useAuth } from "@/context/AuthContext";
import { Database, AlertTriangle } from "lucide-react";

export default function SystemStatus() {
  const { dbOffline } = useAuth();

  if (!dbOffline) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] animate-in slide-in-from-top duration-500">
      <div className="bg-amber-500 text-white px-4 py-2 flex items-center justify-center gap-3 shadow-lg">
        <Database className="w-4 h-4 animate-pulse" />
        <span className="text-xs font-black uppercase tracking-widest">
          System Maintenance: Database is currently offline. Some features may be limited.
        </span>
        <AlertTriangle className="w-4 h-4" />
      </div>
    </div>
  );
}
