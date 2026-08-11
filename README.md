# Madrasa Al-Umaima Management ERP & Web Platform

A modern, full-featured Islamic Educational Institution ERP and web platform with bilingual support (English & Urdu), role-based portals (Admin, Student, Parent, Teacher), admission workflows, attendance tracking, financial accounting, gradebook, and announcements.

---

## 🏗️ System Architecture

```
new-mdrasa/
├── frontend/                   # Next.js 16 (React 19, TypeScript, Tailwind CSS 4)
│   ├── src/
│   │   ├── app/                # App Router Pages (Public + Portals)
│   │   │   ├── (public)        # Home, About, Admission, Courses, Donation, Contact, Notices, Login
│   │   │   ├── admin/          # Admin ERP Portal (Students, Teachers, Admissions, Accounts, Results, Notices, Messages)
│   │   │   ├── student/        # Student Portal (Dashboard, Results, Fees, Attendance, Timetable)
│   │   │   └── parent/         # Parent Portal (Child Progress, Attendance, Fees, Results)
│   │   ├── components/         # Shared UI (Navbar, Footer, DashboardLayout, LanguageToggle)
│   │   ├── context/            # AuthContext, LanguageContext (English & Urdu RTL)
│   │   └── lib/                # API client & state management
│   └── package.json
│
└── backend/                    # Django 5 / Django REST Framework
    ├── apps/                   # Modular domain apps (accounts, academics, admissions, attendance, etc.)
    ├── config/                 # Settings, WhiteNoise, URLs, JWT, CORS
    ├── manage.py               # Django CLI entrypoint
    ├── Procfile                # Production WSGI (Gunicorn)
    ├── Dockerfile              # Container deployment
    ├── build.sh                # PaaS build & migration script
    ├── requirements.txt        # Python dependencies
    └── db.sqlite3              # Pre-seeded database
```

---

## 🚀 Quick Start Guide

### 1. Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev      # Runs on http://localhost:3000
```

### 2. Backend (Django REST API)
```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000   # Runs on http://localhost:8000
```

---

## 🔑 Demo Login Accounts

| Role | Email | Password | Access Portal |
| :--- | :--- | :--- | :--- |
| **Administrator** | `admin@mdrasa.edu` | `admin123` | `/admin/dashboard` & Django Admin |
| **Student** | `student@mdrasa.edu` | `student123` | `/student/dashboard` |
| **Parent / Guardian** | `parent@mdrasa.edu` | `parent123` | `/parent/dashboard` |
| **Teacher / Faculty** | `ahmad@mdrasa.edu` | `teacher123` | Faculty Portal |

---

## 🌐 Deployment Instructions

- **Frontend**: Deploy on **Vercel** or **Netlify** with zero configuration (Root Directory: `frontend`).
- **Backend**: Deploy on **Render**, **Railway**, **Fly.io**, or **Docker** using the provided `Procfile` / `Dockerfile` / `build.sh`.
