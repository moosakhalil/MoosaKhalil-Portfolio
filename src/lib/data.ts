// ── Portfolio Data ──

export const siteUrl = "https://moosa-khalil-portfolio.vercel.app";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

// Hero proof strip
export const heroStats = [
  { value: 4, label: "Deployed apps" },
  { value: 2, label: "Client apps in progress" },
  { value: 2, label: "Awards" },
];

export type Skill = { name: string; logo?: string };

// Grouped to match the CV. `logo` is a file in /public/images/logos.
export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: "javascript" },
      { name: "TypeScript", logo: "typescript" },
      { name: "SQL" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", logo: "react" },
      { name: "Next.js", logo: "next" },
      { name: "Tailwind CSS", logo: "tailwind-css" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: "node" },
      { name: "Express.js", logo: "express" },
      { name: "REST APIs", logo: "rest-apis" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", logo: "mongo" },
      { name: "PostgreSQL", logo: "postgresql" },
      { name: "Prisma ORM", logo: "prisma-orm" },
      { name: "Supabase", logo: "supabase" },
      { name: "Firebase", logo: "firebase" },
    ],
  },
  {
    title: "Auth & Security",
    skills: [
      { name: "JWT" },
      { name: "RBAC" },
      { name: "AES-256-GCM" },
      { name: "Rate Limiting" },
      { name: "Audit Logging" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Vercel" },
      { name: "Render" },
      { name: "Git", logo: "git" },
      { name: "GitHub", logo: "github" },
      { name: "Webpack", logo: "webpack" },
    ],
  },
];

export const experiences = [
  {
    title: "Full-Stack Software Developer",
    company: "Confidential Client",
    subtitle: "ERP / E-Commerce and Laundry Services Applications",
    location: "Remote",
    date: "Nov 2025 - Present",
    nda: true,
    current: true,
    bullets: [
      "Own end-to-end delivery of full-stack features across two production applications: an ERP and e-commerce system, and a separate laundry services application, from database schema design and REST APIs to production React.js UI.",
      "Develop e-commerce storefront and back-office ERP modules (orders, inventory, operations, reporting) against client requirements.",
      "Design and implement secure RESTful APIs with authentication and server-side access control, and integrate third-party services to extend platform functionality.",
      "Ship features through iterative client feedback cycles, clean and reviewable code, and production deployments.",
    ],
    domains: ["ERP", "E-Commerce", "Laundry Services"],
    modules: ["Orders", "Inventory", "Operations", "Reporting"],
    architecture: ["Storefront", "REST API", "ERP Modules", "Database"],
    stack: ["React.js", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Software Development Intern",
    company: "Jazba Innovations",
    subtitle: "",
    location: "Islamabad",
    date: "Jul 2025 - Aug 2025",
    nda: false,
    current: false,
    bullets: [
      "Integrated Webpack and Tailwind CSS into the frontend build pipeline, improving build efficiency and developer workflow.",
      "Participated in Git/GitHub pull-request code reviews, enforcing coding standards and codebase consistency.",
      "Collaborated with cross-functional teams in an Agile/Scrum environment to deliver sprint features on schedule.",
    ],
    domains: [] as string[],
    modules: [] as string[],
    architecture: [] as string[],
    stack: ["Webpack", "Tailwind CSS", "Git", "GitHub"],
  },
];

// Jazba Innovations internship certificate and recognition post
export const experienceImages = [
  "/images/experience-1.jpg",
  "/images/experience-2.jpg",
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  label: string;
  url?: string;
  github?: string;
  privateNote?: string;
  spotlight?: string;
  stack: string[];
  // Extra skills used only by the skill filter (not shown as chips)
  tags?: string[];
  description: string;
  role: string;
  highlights: string[];
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "rental",
    name: "Rental Management System",
    tagline: "Full-stack car rental agency platform",
    label: "Built for a client · Private",
    privateNote: "Private client project. Source and live system are not public.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Mongoose", "Vite", "jsPDF"],
    tags: ["RBAC", "AES-256-GCM", "Rate Limiting", "Audit Logging", "Vercel", "Render", "REST APIs"],
    description:
      "Independently built and deployed a MERN platform that runs a car rental agency's fleet, rentals, invoicing, payouts and P&L.",
    role: "Sole developer: architecture, MongoDB schema, Express.js APIs, React.js UI and deployment.",
    highlights: [
      "Business modules for fleet management, rental agreements, invoicing, owner/vendor payouts, expense tracking, staff salaries and profit & loss reporting.",
      "8-step rental agreement wizard producing printable bilingual (English/Urdu) agreements, invoices and payment vouchers exported to PDF.",
      "Server-enforced role-based access control (Admin / Representative) with JWT authentication, login attempt limiting and AES-256-GCM encrypted PINs.",
      "Automated reminders for due returns, overdue owner payments and pending salaries, with a complete activity log for auditing.",
      "Express.js API on Render, React.js client on Vercel with MongoDB Atlas; mobile-responsive down to 390px with light and dark themes.",
    ],
    images: [
      "/images/01-dashboard.png",
      "/images/05-new-rental-wizard.png",
      "/images/16-mobile-dashboard.png",
    ],
  },
  {
    slug: "health-sync",
    name: "Health Sync",
    tagline: "Telehealth & remote patient monitoring",
    label: "Final Year Project · Award-winning",
    url: "https://www.health-sync.live/",
    spotlight: "#health-sync",
    stack: ["Next.js", "Supabase", "Prisma ORM", "PostgreSQL"],
    tags: ["SQL", "REST APIs"],
    description:
      "Telehealth platform with real-time heart-rate tracking via Fitbit. NUST COMPPEC award and 3rd place at Bahria Open House.",
    role: "Full-stack developer: database design, Fitbit API integration and the Next.js interface.",
    highlights: [
      "End-to-end telehealth and remote patient monitoring with real-time heart-rate tracking via Fitbit wearable API integration.",
      "PostgreSQL schema designed with Prisma ORM on Supabase.",
      "Responsive Next.js interface for both patients and clinicians.",
      "Appreciation Award at NUST COMPPEC and 3rd position at the Bahria University FYP Open House.",
    ],
    images: [
      "/images/health-sync-home.jpg",
      "/images/logo.jpg",
    ],
  },
  {
    slug: "indoorace",
    name: "IndoorAce",
    tagline: "Indoor sports slot booking platform",
    label: "Team project · Live",
    url: "https://indoor-ace-nine.vercel.app",
    github: "https://github.com/zohaibShafqat2003/IndoorAce",
    stack: ["Next.js", "Node.js", "Prisma ORM", "Supabase", "Firebase", "Tailwind CSS"],
    tags: ["PostgreSQL", "Vercel"],
    description:
      "Real-time slot booking system handling multiple concurrent bookings, with separate secure dashboards for players and venue owners.",
    role: "Architected the booking system and integrated the auth and data layers.",
    highlights: [
      "Real-time slot booking system in Next.js and Node.js that reliably supports high volumes of concurrent users.",
      "Handles multiple bookings across venues and time slots without double-booking conflicts.",
      "Separate secure, role-based dashboards for players and venue owners behind Firebase Authentication.",
      "Firebase Authentication and Prisma ORM over Supabase (PostgreSQL), reducing API latency through optimized data access.",
      "Optimized UI rendering and data-fetching strategies for faster page-load times.",
    ],
    images: [
      "/images/indoorace-1.jpg",
      "/images/indoorace-2.jpg",
      "/images/indoorace-3.jpg",
    ],
  },
  {
    slug: "hisaab-kitab",
    name: "Hisaab Kitab",
    tagline: "Free personal-finance app for Pakistan, in English and Urdu",
    label: "Personal project · Live",
    privateNote: "Private project. Source code is not public.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL (Supabase)", "Drizzle ORM", "Better Auth"],
    tags: [
      "PWA", "Serwist", "Service Workers", "Web Push", "Offline-first", "i18n", "RTL", "Urdu", "Zod", "pdf-lib",
      "Vercel Cron", "Vitest", "Playwright", "Lighthouse", "Accessibility", "WebAuthn", "REST APIs",
    ],
    description:
      "A mobile-first personal-finance app built for Pakistani users. It tracks accounts, budgets, loans, savings and bills, and also includes a Zakat calculator and a Committee (BC) tracker. It installs on a phone as a PWA, works offline, and runs in English and Urdu (RTL). Used by 50+ people.",
    role: "Sole designer and developer. I planned the product, designed the UI, and built the full stack, including the database schema, authentication, background jobs and test suites. I also wrote the user handbook and ran a real-device test round on Android and iPhone.",
    highlights: [
      "In active use by 50+ real users.",
      "Full money tracking: accounts, ledger, budgets, loans, savings, bills, repeating entries, and a \"safe to spend\" figure.",
      "Pakistan-specific tools: Committee/BC tracker and a Zakat calculator.",
      "Installable PWA with offline entry. Entries added offline sync later, and a client-generated ID prevents duplicates.",
      "Bilingual UI (English and Urdu, right-to-left) with a CI test that fails if any screen text is missing its Urdu translation. Urdu text is also supported in PDF reports.",
      "Privacy and security: PIN and fingerprint/Face ID app lock, a hide-amounts toggle on Home (amounts start hidden), and security headers. A 94-check security test found no cross-user data leaks.",
      "13 report types exported to PDF/CSV, plus full data export, JSON backup/restore and account deletion. Reminders and weekly/monthly summaries run through push notifications and a daily cron job.",
      "Quality: 400+ unit tests plus API and browser test scripts, Lighthouse Accessibility 100, and 0 axe violations. Tested on real Android and iPhone devices.",
    ],
    images: [
      "/images/home.png",
      "/images/budgets.png",
      "/images/committee.png",
      "/images/insights.png",
    ],
  },
  {
    slug: "mustaqbil-prep",
    name: "Mustaqbil Prep",
    tagline: "Mobile practice app for degree courses and military initial tests, with guard-railed AI help",
    label: "Personal project · Live",
    // url: add your Vercel link once the phone check is done
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Drizzle ORM"],
    tags: [
      "Progressive Web App", "Service Workers", "Better Auth", "Google OAuth", "Neon", "Vercel",
      "AI integration", "Zod", "Vitest", "REST APIs", "PDF generation", "Accessibility",
    ],
    description:
      "A free, installable practice app for software-engineering students and for candidates preparing for ICTO, LCC, Navy IT and PAF IT initial tests. It offers practice and timed-exam quizzes, military mock tests with a per-part pass rule, and AI explanations and study plans that never decide an answer.",
    role: "Product owner and developer. I defined the product and the military test flow, chose and organised the question banks, designed the screens, and built and shipped the app end to end using AI-assisted development. I also ran a screen-by-screen UI review of 23 screens and fixed what it found.",
    highlights: [
      "25 degree-course banks (6,600+ questions) plus military Verbal, Non-verbal, Academic and past-paper sections, with a full mock test that applies a 50%-in-each-part pass rule.",
      "Practice and timed-exam modes, wrong-answer notebook, per-topic progress, and PDF results that can be viewed or downloaded.",
      "AI with guardrails: it explains answers but never decides them, gives study plans from a user's own scores, and is limited to 10 requests per user per day with saved explanations and no personal data sent.",
      "Installable and works offline, using a service worker and cached question banks; quizzes taken offline sync when the phone is back online.",
      "Google sign-in, server-only database access, input validation and security headers on every API route, plus 65 automated tests.",
      "Accessibility and mobile polish: 44px tap targets, visible keyboard focus, dark mode, loading placeholders and a screen-by-screen current-vs-proposed UI review.",
    ],
    images: [
      "/images/1-hero-signin-install-dark.png",
      "/images/2-signin.png",
      "/images/3-install-on-iphone.png",
      "/images/4-works-offline.png",
    ],
  },
  {
    slug: "footy-insights",
    name: "Footy Insights",
    tagline: "Real-time football statistics",
    label: "Personal project · Live",
    url: "https://footy-insights-football.vercel.app/",
    github: "https://github.com/moosakhalil/Footy-Insights-Football",
    stack: ["React.js", "REST APIs"],
    tags: ["JavaScript", "Vercel"],
    description:
      "Live football scores and statistics from a third-party REST API, with client-side caching for fast responses.",
    role: "Solo developer: UI, API integration and caching.",
    highlights: [
      "Live football scores and statistics in React.js via third-party REST API integration.",
      "Client-side caching for faster response times and fewer API calls.",
    ],
    images: [
      "/images/footy-insights-1.jpg",
      "/images/footy-insights-2.jpg",
      "/images/footy-insights-3.jpg",
    ],
  },
];

// All skills a project can be filtered by
export const projectSkills = (p: Project) => [...p.stack, ...(p.tags ?? [])];

// Health Sync FYP spotlight images
export const healthSyncImages = [
  "/images/health-sync-home.jpg",
  "/images/logo.jpg",
];

// NUST COMPPEC award images
export const nustAwardImages = [
  "/images/image.jpg",
  "/images/nust-award-2.jpeg",
  "/images/win2.jpg",
];

// Bahria University Open House award images
export const openHouseImages: string[] = [
  "/images/fyp-1.jpeg",
  "/images/fyp-2.jpeg",
];

// Paste each credential's verification URL into `link` to show a "Verify" button.
export const certifications = [
  {
    issuer: "Google",
    name: "Foundations of User Experience (UX) Design",
    link: "",
    image: "/images/cert3.jpg",
    color: "#4285F4",
  },
  {
    issuer: "Google",
    name: "Foundations of Cybersecurity",
    link: "",
    image: "/images/cert2.jpg",
    color: "#4285F4",
  },
  {
    issuer: "Google",
    name: "Generative AI: Beyond the Chatbot",
    link: "",
    image: "/images/cert1.jpg",
    color: "#4285F4",
  },
  {
    issuer: "Meta",
    name: "HTML and CSS in Depth",
    link: "",
    image: "/images/cert4.jpg",
    color: "#1877F2",
  },
];

export const contactInfo = {
  email: "moosamughal21@gmail.com",
  phone: "+92-331-2674909",
  location: "Islamabad, Pakistan",
  linkedin: "https://linkedin.com/in/moosadev",
  github: "https://github.com/moosakhalil",
};
