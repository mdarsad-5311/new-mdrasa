"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { api } from "@/lib/api";

interface AuthContextType {
  user: any;
  loading: boolean;
  login: (credentials: any) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  dbOffline: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [dbOffline, setDbOffline] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const userData = await api.getMe();
          setUser(userData);
          setDbOffline(false);
        } catch (error: any) {
          console.error("❌ Auth initialization failed:", error.message);
          if (error.message.includes("Database") || error.message.includes("maintenance")) {
            setDbOffline(true);
          } else if (error.message.includes("fetch")) {
            console.warn("⚠️ This looks like a network error. Check if the backend is running at http://127.0.0.1:5000");
          } else {
            // Only clear token if it's a real auth error, not a DB error
            localStorage.removeItem("token");
            localStorage.removeItem("user");
          }
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  // Protect routes
  useEffect(() => {
    if (!loading) {
      const isPublicPath = [
        "/",
        "/login",
        "/admission",
        "/about",
        "/contact",
        "/courses",
        "/donation",
        "/gallery",
        "/notices",
        "/privacy",
        "/terms"
      ].includes(pathname);
      const isAdminPath = pathname.startsWith("/admin");
      const isStudentPath = pathname.startsWith("/student");
      const isParentPath = pathname.startsWith("/parent");

      if (!user && (isAdminPath || isStudentPath || isParentPath)) {
        router.push("/login");
      } else if (user) {
        // Precise role-based redirection to correct portal
        if (isAdminPath && user.role !== "admin") {
          router.push(user.role === "parent" ? "/parent/dashboard" : "/student/dashboard");
        } else if (isStudentPath && user.role !== "student") {
          router.push(user.role === "admin" ? "/admin/dashboard" : "/parent/dashboard");
        } else if (isParentPath && user.role !== "parent") {
          router.push(user.role === "admin" ? "/admin/dashboard" : "/student/dashboard");
        }
      }
    }
  }, [user, loading, pathname, router]);

  const login = async (credentials: any) => {
    setLoading(true);
    try {
      const data = await api.login(credentials);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);

      // Redirect based on role
      if (data.role === "admin") router.push("/admin/dashboard");
      else if (data.role === "parent") router.push("/parent/dashboard");
      else router.push("/student/dashboard");

    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAuthenticated: !!user, dbOffline }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
