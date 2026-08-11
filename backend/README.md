# Madrasa Al-Umaima ERP - Django REST API Backend

A scalable, modular **Django & Django REST Framework (DRF)** backend for the **Madrasa Al-Umaima Management ERP & Web Platform**.

---

## 🏗️ Architecture & Modules

```
backend/
├── manage.py                        # Django execution entrypoint
├── requirements.txt                 # Python dependencies
├── .env.example                     # Environment template
├── .env                             # Local development environment configuration
├── config/                          # Django Project configuration
│   ├── settings.py                  # CORS, JWT, DRF, Media/Static, DB settings
│   ├── urls.py                      # Master API routes & routing table
│   ├── wsgi.py
│   └── asgi.py
├── apps/                            # Modular Domain Applications
│   ├── core/                        # Base models, pagination, test suite, seed_data command
│   ├── accounts/                    # Custom User model, Student/Teacher/Parent Profiles, JWT Auth
│   ├── admissions/                  # Admission application submissions & approval workflow
│   ├── academics/                   # Courses, Classes/Batches, Subjects, Timetables, Homework
│   ├── attendance/                  # Student daily & monthly attendance tracking
│   ├── finance/                     # Ledger, Fees, Transactions, Donations
│   ├── notices/                     # Notice board & institution announcements
│   ├── results/                     # Academic gradebook, examinations, subject scores
│   ├── communication/               # Public contact inquiries, Leave requests, Complaints, Teacher notes
│   └── dashboard/                   # Aggregated statistics APIs for Admin, Student, and Parent
└── db.sqlite3                       # Pre-seeded SQLite database with demo accounts
```

---

## 🚀 Quick Setup Guide

### 1. Prerequisites
- Python 3.10+ (tested on Python 3.13)
- `pip`

### 2. Install Dependencies
```bash
cd backend
pip install -r requirements.txt
```

### 3. Run Database Migrations
```bash
python manage.py migrate
```

### 4. Seed Realistic Initial Data
```bash
python manage.py seed_data
```

### 5. Start the Django Server (When needed)
```bash
python manage.py runserver 8000
```
- API Root: `http://127.0.0.1:8000/api/`
- Django Admin Portal: `http://127.0.0.1:8000/admin/`

---

## 🔑 Pre-Seeded Demo Accounts

| Role | Email / Username | Default Password | Access Portal |
| :--- | :--- | :--- | :--- |
| **Super Admin** | `admin@mdrasa.edu` | `admin123` | `/admin/dashboard` & Django Admin |
| **Student** | `student@mdrasa.edu` | `student123` | `/student/dashboard` |
| **Parent / Guardian** | `parent@mdrasa.edu` | `parent123` | `/parent/dashboard` |
| **Faculty / Teacher** | `ahmad@mdrasa.edu` | `teacher123` | Faculty Portal |

---

## 📡 API Endpoint Reference

### 🔐 Authentication (`/api/auth/`)
- `POST /api/auth/login/` - Authenticate user, returns JWT tokens + user metadata
- `POST /api/auth/token/refresh/` - Refresh JWT access token
- `POST /api/auth/register/` - Register new user
- `GET /api/auth/me/` - Retrieve profile of current authenticated user
- `POST /api/auth/change-password/` - Update user password

### 👨‍🎓 Students & Faculty
- `GET/POST /api/students/` - Manage student profiles & roll numbers
- `GET/POST/PUT/DELETE /api/teachers/` - Manage teachers & faculty records

### 📝 Admissions
- `GET /api/admissions/` (or `GET /api/admission/`) - List admission applications
- `POST /api/admissions/` - Submit new admission application (Status: `pending`)
- `POST /api/admissions/<id>/approve/` - Approve application and auto-create student account

### 📚 Academics & Scheduling
- `GET/POST /api/courses/` - Academic programs (Hifz, Nazra, Aalim, Tajweed, etc.)
- `GET/POST /api/classes/` - Classroom sections and batches
- `GET/POST /api/subjects/` - Subject catalog and pass marks
- `GET/POST /api/timetable/` - Weekly schedule timetable
- `GET/POST /api/homework/` - Homework assignments
- `GET/POST /api/homework-submissions/` - Student homework submissions

### 📅 Attendance
- `GET /api/attendance/` - Attendance records
- `GET /api/attendance/my-attendance/` - Student / parent presence stats & history
- `POST /api/attendance/batch-mark/` - Batch mark class attendance

### 💳 Finance & Accounts
- `GET/POST/PUT/DELETE /api/transactions/` (or `/api/accounts/`) - Financial ledger
- `GET /api/fees/my-fees/` - Student fee status & payment history
- `GET/POST /api/donations/` - Charitable donation records (Zakat, Sadqah, Building fund)

### 📢 Notices & Announcements
- `GET/POST/PUT/DELETE /api/notices/` - Categorized and targeted notice board updates

### 📊 Results & Gradebook
- `GET/POST/PUT/DELETE /api/results/` - Examination records & GPAs
- `GET /api/results/my-results/` - Detailed subject scores & student report card

### 💬 Communication & Parent Portal
- `GET/POST/DELETE /api/messages/` (or `/api/contact/`) - Public inquiries & contact forms
- `GET/POST /api/leave-requests/` - Absence leave applications
- `GET/POST /api/complaints/` - Support tickets and queries
- `GET/POST /api/teacher-notes/` - Teacher feedback diaries

### 📈 Dashboard Analytics
- `GET /api/stats/` (or `/api/stats/admin/`) - Admin ERP overview statistics
- `GET /api/stats/student/` - Student dashboard statistics
- `GET /api/stats/parent/` - Parent dashboard statistics

---

## 🧪 Running Automated Tests

```bash
python manage.py test apps.core.tests
```
All test suites validate endpoints, JWT authentication, admissions submissions, and dashboard aggregations.
