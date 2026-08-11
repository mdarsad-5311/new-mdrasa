// Full client-side Mock API for standalone frontend operation

const isClient = typeof window !== "undefined";

const getStorageItem = (key: string, defaultVal: any) => {
  if (!isClient) return defaultVal;
  const saved = localStorage.getItem(key);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return defaultVal;
    }
  }
  return defaultVal;
};

const setStorageItem = (key: string, val: any) => {
  if (isClient) {
    localStorage.setItem(key, JSON.stringify(val));
  }
};

// Initial Mock Datasets
const DEFAULT_TEACHERS = [
  { _id: "t1", name: "Maulana Ahmad Al-Qasmi", email: "ahmad@mdrasa.edu", phone: "+91 98765 00001", subject: "Quran & Tafseer", qualification: "Fazil Deoband", status: "active", createdAt: "2026-01-10T10:00:00Z" },
  { _id: "t2", name: "Hafiz Bilal Farooqi", email: "bilal@mdrasa.edu", phone: "+91 98765 00002", subject: "Hifz-ul-Quran", qualification: "Hafiz & Qari", status: "active", createdAt: "2026-01-15T10:00:00Z" },
  { _id: "t3", name: "Ustad Saleem Akhtar", email: "saleem@mdrasa.edu", phone: "+91 98765 00003", subject: "Arabic & Urdu Grammar", qualification: "M.A. Arabic", status: "active", createdAt: "2026-02-01T10:00:00Z" },
  { _id: "t4", name: "Qari Tariq Masood", email: "tariq@mdrasa.edu", phone: "+91 98765 00004", subject: "Tajweed & Qira’at", qualification: "Qirat Sab’ah", status: "active", createdAt: "2026-02-15T10:00:00Z" },
];

const DEFAULT_ADMISSIONS = [
  { _id: "a1", studentName: "Mustafa Ahmed", dob: "2012-05-15", gender: "Male", parentName: "Ahmed Khan", email: "mustafa@mdrasa.edu", phone: "+91 95276 35311", address: "14 Al-Madina Colony", courseAppliedFor: "Hifz Quran", previousEducation: "Nazra Quran", status: "approved", createdAt: "2026-02-10T10:00:00Z" },
  { _id: "a2", studentName: "Zainab Fatima", dob: "2014-08-20", gender: "Female", parentName: "Rashid Ali", email: "rashid@example.com", phone: "+91 98989 12345", address: "88 Green Park Enclave", courseAppliedFor: "Nazra Quran", previousEducation: "Noorani Qaida", status: "approved", createdAt: "2026-02-12T10:00:00Z" },
  { _id: "a3", studentName: "Omar Farooq", dob: "2011-03-10", gender: "Male", parentName: "Farooq Abdullah", email: "farooq@example.com", phone: "+91 97777 66554", address: "42 Old Market Road", courseAppliedFor: "Aalim Course", previousEducation: "Class 8th", status: "pending", createdAt: "2026-03-01T10:00:00Z" },
  { _id: "a4", studentName: "Aisha Siddiqua", dob: "2013-11-25", gender: "Female", parentName: "Mohammad Zubair", email: "zubair@example.com", phone: "+91 96666 44332", address: "Sector 5, Jamia Nagar", courseAppliedFor: "Islamic Studies", previousEducation: "Primary School", status: "pending", createdAt: "2026-03-02T10:00:00Z" },
];

const DEFAULT_TRANSACTIONS = [
  { _id: "tx1", payeeName: "Mustafa Ahmed", amount: 65.0, category: "Tuition Fee", method: "Online", status: "Paid", createdAt: "2026-03-01T10:00:00Z" },
  { _id: "tx2", payeeName: "Zainab Fatima", amount: 50.0, category: "Tuition Fee", method: "Cash", status: "Paid", createdAt: "2026-03-03T10:00:00Z" },
  { _id: "tx3", payeeName: "Haji Abdul Rehman", amount: 1500.0, category: "Donation", method: "Bank", status: "Paid", createdAt: "2026-03-05T10:00:00Z" },
  { _id: "tx4", payeeName: "Omar Farooq", amount: 45.0, category: "Registration", method: "Online", status: "Pending", createdAt: "2026-03-06T10:00:00Z" },
  { _id: "tx5", payeeName: "Aisha Siddiqua", amount: 80.0, category: "Tuition Fee", method: "Bank", status: "Due", createdAt: "2026-03-07T10:00:00Z" },
];

const DEFAULT_NOTICES = [
  { _id: "n1", id: "1", title: "New Academic Session 2026-2027 Admissions Open", description: "Admissions for Hifz, Nazra, and Aalim courses are officially open. Applications are accepted online.", category: "Academic", audience: "Public", status: "Published", createdAt: "2026-03-01T10:00:00Z" },
  { _id: "n2", id: "2", title: "Ramadan Special Schedule & Timings", description: "Special morning session timings will be observed during the blessed month of Ramadan.", category: "Events", audience: "All Students", status: "Urgent", createdAt: "2026-03-02T10:00:00Z" },
  { _id: "n3", id: "3", title: "Parent-Teacher Meeting (PTM) Scheduled for Next Sunday", description: "Guardians are invited to review quarterly student progress and memorization charts.", category: "Policy", audience: "Parents", status: "Published", createdAt: "2026-03-04T10:00:00Z" },
];

const DEFAULT_RESULTS = [
  { _id: "r1", studentName: "Mustafa Ahmed", rollNo: "RL-84", className: "Hifz Quran", gpa: "3.95", grade: "A+", status: "Pass", createdAt: "2026-03-01T10:00:00Z" },
  { _id: "r2", studentName: "Zainab Fatima", rollNo: "RL-85", className: "Nazra Quran", gpa: "3.80", grade: "A", status: "Pass", createdAt: "2026-03-02T10:00:00Z" },
  { _id: "r3", studentName: "Bilal Tariq", rollNo: "RL-86", className: "Aalim Course", gpa: "3.65", grade: "B+", status: "Pass", createdAt: "2026-03-03T10:00:00Z" },
];

const DEFAULT_MESSAGES = [
  { _id: "m1", name: "Syed Tariq Anis", email: "syedtariq@gmail.com", phone: "+91 99887 76655", subject: "Inquiry regarding Hifz boarding facility", message: "Assalamu Alaikum. Is hostel accommodation available for outstation students enrolling in Hifz?", createdAt: "2026-03-05T10:00:00Z" },
  { _id: "m2", name: "Fatima Begum", email: "fatima.b@yahoo.com", phone: "+91 98111 22334", subject: "Online Tajweed classes for girls", message: "Do you offer weekend online batches for female students living abroad?", createdAt: "2026-03-06T10:00:00Z" },
];

export const api = {
  // Auth
  login: async (credentials: any) => {
    const role = credentials.role || (credentials.email?.includes("parent") ? "parent" : credentials.email?.includes("student") ? "student" : "admin");
    const name = role === "admin" ? "Admin Office" : role === "parent" ? "Ahmed Khan (Guardian)" : "Mustafa Ahmed";
    const user = {
      _id: "usr_" + role,
      name,
      email: credentials.email || `${role}@mdrasa.edu`,
      role,
      className: "Hifz Quran",
      rollNo: "RL-84",
      attendance: "94.5%",
      pendingFees: "$45.00",
      course: "Hifz Quran",
    };
    if (isClient) {
      localStorage.setItem("token", "mock-jwt-token-" + role);
      localStorage.setItem("mock_role", role);
      localStorage.setItem("user", JSON.stringify(user));
    }
    return { token: "mock-jwt-token-" + role, user, ...user };
  },

  getMe: async () => {
    let user = getStorageItem("user", null);
    if (!user) {
      const role = getStorageItem("mock_role", "admin");
      const name = role === "admin" ? "Admin Office" : role === "parent" ? "Ahmed Khan (Guardian)" : "Mustafa Ahmed";
      user = {
        _id: "usr_" + role,
        name,
        email: `${role}@mdrasa.edu`,
        role,
        className: "Hifz Quran",
        rollNo: "RL-84",
        attendance: "94.5%",
        pendingFees: "$45.00",
        course: "Hifz Quran",
      };
    }
    return user;
  },

  // Stats
  getStats: async () => {
    const admissions = getStorageItem("mock_admissions", DEFAULT_ADMISSIONS);
    const transactions = getStorageItem("mock_transactions", DEFAULT_TRANSACTIONS);
    const messages = getStorageItem("mock_messages", DEFAULT_MESSAGES);
    const approvedStudents = admissions.filter((a: any) => a.status === "approved").length;
    const pendingAdmissions = admissions.filter((a: any) => a.status === "pending").length;
    const pendingFees = transactions
      .filter((t: any) => t.status === "Due" || t.status === "Pending")
      .reduce((sum: number, t: any) => sum + Number(t.amount || 0), 0);

    return {
      totalStudents: approvedStudents || 24,
      pendingFees: pendingFees || 125,
      pendingAdmissions: pendingAdmissions || 2,
      totalInquiries: messages.length || 2,
    };
  },

  // Teachers
  getTeachers: async () => getStorageItem("mock_teachers", DEFAULT_TEACHERS),
  createTeacher: async (data: any) => {
    const teachers = getStorageItem("mock_teachers", DEFAULT_TEACHERS);
    const newTeacher = { ...data, _id: "t_" + Date.now(), createdAt: new Date().toISOString(), status: "active" };
    setStorageItem("mock_teachers", [newTeacher, ...teachers]);
    return newTeacher;
  },
  updateTeacher: async (id: string, data: any) => {
    const teachers = getStorageItem("mock_teachers", DEFAULT_TEACHERS);
    const updated = teachers.map((t: any) => (t._id === id ? { ...t, ...data } : t));
    setStorageItem("mock_teachers", updated);
    return data;
  },
  deleteTeacher: async (id: string) => {
    const teachers = getStorageItem("mock_teachers", DEFAULT_TEACHERS);
    setStorageItem("mock_teachers", teachers.filter((t: any) => t._id !== id));
    return { success: true };
  },

  // Admissions
  getAdmissions: async () => getStorageItem("mock_admissions", DEFAULT_ADMISSIONS),
  submitAdmission: async (data: any) => {
    const admissions = getStorageItem("mock_admissions", DEFAULT_ADMISSIONS);
    const newAdmission = { ...data, _id: "a_" + Date.now(), status: "pending", createdAt: new Date().toISOString() };
    setStorageItem("mock_admissions", [newAdmission, ...admissions]);
    return newAdmission;
  },
  updateAdmission: async (id: string, data: any) => {
    const admissions = getStorageItem("mock_admissions", DEFAULT_ADMISSIONS);
    const updated = admissions.map((a: any) => (a._id === id ? { ...a, ...data } : a));
    setStorageItem("mock_admissions", updated);
    return data;
  },
  deleteAdmission: async (id: string) => {
    const admissions = getStorageItem("mock_admissions", DEFAULT_ADMISSIONS);
    setStorageItem("mock_admissions", admissions.filter((a: any) => a._id !== id));
    return { success: true };
  },

  // Transactions
  getTransactions: async () => getStorageItem("mock_transactions", DEFAULT_TRANSACTIONS),
  createTransaction: async (data: any) => {
    const transactions = getStorageItem("mock_transactions", DEFAULT_TRANSACTIONS);
    const newTx = { ...data, _id: "tx_" + Date.now(), createdAt: new Date().toISOString() };
    setStorageItem("mock_transactions", [newTx, ...transactions]);
    return newTx;
  },
  updateTransaction: async (id: string, data: any) => {
    const transactions = getStorageItem("mock_transactions", DEFAULT_TRANSACTIONS);
    const updated = transactions.map((t: any) => (t._id === id ? { ...t, ...data } : t));
    setStorageItem("mock_transactions", updated);
    return data;
  },
  deleteTransaction: async (id: string) => {
    const transactions = getStorageItem("mock_transactions", DEFAULT_TRANSACTIONS);
    setStorageItem("mock_transactions", transactions.filter((t: any) => t._id !== id));
    return { success: true };
  },

  // Notices
  getNotices: async () => getStorageItem("mock_notices", DEFAULT_NOTICES),
  createNotice: async (data: any) => {
    const notices = getStorageItem("mock_notices", DEFAULT_NOTICES);
    const newNotice = { ...data, _id: "n_" + Date.now(), createdAt: new Date().toISOString() };
    setStorageItem("mock_notices", [newNotice, ...notices]);
    return newNotice;
  },
  updateNotice: async (id: string, data: any) => {
    const notices = getStorageItem("mock_notices", DEFAULT_NOTICES);
    const updated = notices.map((n: any) => (n._id === id ? { ...n, ...data } : n));
    setStorageItem("mock_notices", updated);
    return data;
  },
  deleteNotice: async (id: string) => {
    const notices = getStorageItem("mock_notices", DEFAULT_NOTICES);
    setStorageItem("mock_notices", notices.filter((n: any) => n._id !== id));
    return { success: true };
  },

  // Results
  getResults: async () => getStorageItem("mock_results", DEFAULT_RESULTS),
  getMyResults: async () => {
    return {
      scores: [
        { subject: "Tajweed & Recitation", obtained: 95, total: 100, grade: "A+", remarks: "Exceptional Tajweed pronunciation" },
        { subject: "Hifz Revision (Juz 1-14)", obtained: 92, total: 100, grade: "A+", remarks: "Fluent recall and minimal pauses" },
        { subject: "Islamic History", obtained: 88, total: 100, grade: "A", remarks: "Good grasp over Seerah" },
        { subject: "Arabic Grammar", obtained: 90, total: 100, grade: "A+", remarks: "Excellent sentence analysis" },
        { subject: "Urdu & Akhlaq", obtained: 97, total: 100, grade: "A+", remarks: "Exemplary conduct" },
      ],
      summary: {
        latest: "92.4%",
        grade: "A+",
        rank: "3rd",
        progress: "Juz 14",
      },
    };
  },
  createResult: async (data: any) => {
    const results = getStorageItem("mock_results", DEFAULT_RESULTS);
    const newResult = { ...data, _id: "r_" + Date.now(), createdAt: new Date().toISOString() };
    setStorageItem("mock_results", [newResult, ...results]);
    return newResult;
  },
  updateResult: async (id: string, data: any) => {
    const results = getStorageItem("mock_results", DEFAULT_RESULTS);
    const updated = results.map((r: any) => (r._id === id ? { ...r, ...data } : r));
    setStorageItem("mock_results", updated);
    return data;
  },
  deleteResult: async (id: string) => {
    const results = getStorageItem("mock_results", DEFAULT_RESULTS);
    setStorageItem("mock_results", results.filter((r: any) => r._id !== id));
    return { success: true };
  },

  // Messages
  getMessages: async () => getStorageItem("mock_messages", DEFAULT_MESSAGES),
  deleteMessage: async (id: string) => {
    const messages = getStorageItem("mock_messages", DEFAULT_MESSAGES);
    setStorageItem("mock_messages", messages.filter((m: any) => m._id !== id));
    return { success: true };
  },

  // Generic router endpoints for student and parent pages
  get: async (endpoint: string) => {
    if (endpoint.includes("/admission")) return getStorageItem("mock_admissions", DEFAULT_ADMISSIONS);
    if (endpoint.includes("/results/my-results")) return api.getMyResults();
    if (endpoint.includes("/results")) return getStorageItem("mock_results", DEFAULT_RESULTS);
    if (endpoint.includes("/parent/dashboard")) {
      return {
        stats: { attendance: "94.5%", feeStatus: "PAID", juzProgress: "14/30", nextExam: "MAY 20" },
        activities: [
          { type: "Attendance", title: "Present in Tajweed Class", time: "Today, 08:30 AM", status: "Verified" },
          { type: "Result", title: "Scored 92/100 in Islamic History", time: "Yesterday", status: "High" },
          { type: "Notice", title: "New Exam Schedule Published", time: "2 days ago", status: "Important" },
        ],
      };
    }
    if (endpoint.includes("/student/dashboard")) {
      return {
        stats: { attendance: "94.5%", pendingFees: "$45.00", course: "Hifz Quran", nextExam: "May 20" },
      };
    }
    return [];
  },
  post: async (endpoint: string, data: any) => {
    if (endpoint.includes("/contact")) {
      const messages = getStorageItem("mock_messages", DEFAULT_MESSAGES);
      const newMsg = { ...data, _id: "m_" + Date.now(), createdAt: new Date().toISOString() };
      setStorageItem("mock_messages", [newMsg, ...messages]);
      return newMsg;
    }
    if (endpoint.includes("/admission")) return api.submitAdmission(data);
    return data;
  },
  put: async (endpoint: string, data: any) => data,
  delete: async (endpoint: string) => {
    if (endpoint.startsWith("/admission/")) {
      const id = endpoint.split("/admission/")[1];
      return api.deleteAdmission(id);
    }
    return { success: true };
  },
};
