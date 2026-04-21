import { 
  LayoutDashboard, 
  User, 
  Calendar, 
  CreditCard, 
  CheckCircle2, 
  Bell, 
  MessageSquare, 
  BookOpen, 
  Clock, 
  FileText, 
  Settings, 
  HelpCircle,
  History,
  FileDown,
  LineChart,
  Mail,
  ClipboardList,
  CalendarDays,
  UserPlus,
  AlertTriangle,
  GraduationCap
} from "lucide-react";

export const PARENT_SIDEBAR_ITEMS = [
  { name: "Dashboard", href: "/parent/dashboard", icon: LayoutDashboard },
  { name: "Child Profile", href: "/parent/profile", icon: User },
  { name: "Attendance", href: "/parent/attendance", icon: Calendar },
  { name: "Fees & Dues", href: "/parent/fees", icon: CreditCard },
  { name: "Results", href: "/parent/results", icon: CheckCircle2 },
  { name: "Homework", href: "/parent/homework", icon: BookOpen },
  { name: "Timetable", href: "/parent/timetable", icon: Clock },
  { name: "Notices", href: "/parent/notices", icon: Bell },
  { name: "Teacher Notes", href: "/parent/notes", icon: MessageSquare },
  { name: "Leave Request", href: "/parent/leave", icon: CalendarDays },
  { name: "Complaints", href: "/parent/complaints", icon: AlertTriangle },
  { name: "Settings", href: "/parent/settings", icon: Settings },
];

export const ADMIN_SIDEBAR_ITEMS = [
  { name: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Manage Students", href: "/admin/students", icon: User },
  { name: "Manage Teachers", href: "/admin/teachers", icon: GraduationCap },
  { name: "Admissions", href: "/admin/admissions", icon: UserPlus },
  { name: "Fees & Accounts", href: "/admin/accounts", icon: CreditCard },
  { name: "Messages", href: "/admin/messages", icon: MessageSquare },
  { name: "Notice Board", href: "/admin/notices", icon: Bell },
  { name: "Results", href: "/admin/results", icon: CheckCircle2 },
];
