# 💼 Job24 — Job Portal Web App

> **Live Demo:** 🚀 [job24-woad.vercel.app](https://job24-woad.vercel.app)

**Job24** is a modern, full-stack **Job Portal** web application built with **React**, **Firebase**, and **Tailwind CSS**. It allows users to discover job opportunities, view detailed job descriptions, apply with ease, and manage their profile — all with seamless **Google OAuth** authentication.

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page](https://github.com/user-attachments/assets/6b9769e1-7f18-4a68-bad5-8ede6b62e4d5)

### 🔍 Browse Jobs
![Browse Jobs](https://github.com/user-attachments/assets/b53c4c59-2bc2-410a-8fcf-ab8e4e5d68c4)

### 📋 Job Listings
![Job Listings](https://github.com/user-attachments/assets/96666d58-f00a-4ba6-9183-a2637a0d77ca)

### 📄 Job Detail Page
![Job Detail](https://github.com/user-attachments/assets/ec0a3806-3936-445e-914f-5b7b8dc22bd8)

### ✍️ Apply for a Job
![Apply](https://github.com/user-attachments/assets/87ef7bba-fc99-47a1-9543-393472fbe751)

### 📌 Saved / Applied Jobs
![Saved Jobs](https://github.com/user-attachments/assets/2a5ad420-5cb1-4f33-9d4f-8f9b8a267110)

### 🏢 Post a Job
![Post Job](https://github.com/user-attachments/assets/d337a1b7-fec6-4ab4-9960-6e3b56d23570)

### 👤 My Posted Jobs
![My Posted Jobs](https://github.com/user-attachments/assets/f00fe3b6-94dc-4011-a977-99cd3cbce606)

### 📊 Previous Year Questions Asked by Companies
![Applications Dashboard](https://github.com/user-attachments/assets/99d698c2-5a66-4081-aa13-7d58c3c99a28)

---

## ✨ Features

- 🔐 **Google OAuth Authentication** — One-click sign-in with Google via Firebase Auth
- 🏠 **Home Page** — Clean landing page with job highlights and call-to-action
- 🔍 **Browse & Search Jobs** — Filter job listings by category, role, or keyword
- 📄 **Job Detail Page** — Full job description, requirements, and company info
- ✍️ **Apply for Jobs** — Submit applications directly through the portal
- 📌 **Saved & Applied Jobs** — Track jobs you've saved or already applied to
- 🏢 **Post a Job** — Recruiters can post new job openings with full details
- 📋 **My Posted Jobs** — Manage and edit your own job postings
- 📊 **Applications Dashboard** — View all applicants for your posted jobs
- 📱 **Fully Responsive** — Optimized for all screen sizes with Tailwind CSS
- ☁️ **Firebase Backend** — Firestore database + Firebase Auth

---

## 🗂️ Project Structure

```
Job24/
├── public/                  # Static assets
├── src/                     # React source code
│   ├── components/          # Reusable UI components
│   ├── pages/               # Page-level components
│   ├── context/             # React context providers
│   └── main.jsx             # App entry point
├── data.json                # Sample/seed job data
├── dummy.json               # Dummy data for development/testing
├── firebaseConfig.js        # Firebase project configuration
├── index.html               # Root HTML template
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js           # Vite build configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies and scripts
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | ^18.2.0 | UI framework |
| Vite | ^5.2.0 | Build tool & dev server |
| Tailwind CSS | ^3.4.4 | Utility-first styling |
| Firebase | ^10.12.2 | Auth & Firestore database |
| React Router DOM | ^6.23.1 | Client-side routing |
| @react-oauth/google | ^0.12.1 | Google OAuth login |
| Headless UI | ^2.1.2 | Accessible UI components |
| React Icons | ^5.2.1 | Icon library |
| jwt-decode | ^4.0.0 | JWT token decoding |
| dayjs | ^1.11.11 | Date formatting |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- A Firebase project with Firestore & Authentication enabled
- Google OAuth credentials configured in Firebase

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/harshalsakhare2305/Job24.git
   cd Job24
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Firebase — update `firebaseConfig.js` with your own project credentials:
   ```js
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔑 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

---

## 🏷️ Suggested GitHub Topics

```
job-portal  react  firebase  tailwindcss  vite  google-oauth  
react-router  firestore  javascript  web-app  vercel  
full-stack  authentication  job-board  recruitment
```

---

## 👤 Author

**Harshal Sakhare**  
GitHub: [@harshalsakhare2305](https://github.com/harshalsakhare2305)  
Live App: [job24-woad.vercel.app](https://job24-woad.vercel.app)

---

> ⭐ If you find Job24 useful, consider giving it a star!
