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
    date: "Nov 2025 – Present",
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
    date: "Jul 2025 – Aug 2025",
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
    privateNote: "Private client project — source and live system are not public.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Mongoose", "Vite", "jsPDF"],
    tags: ["RBAC", "AES-256-GCM", "Rate Limiting", "Audit Logging", "Vercel", "Render", "REST APIs"],
    description:
      "Independently built and deployed a MERN platform that runs a car rental agency's fleet, rentals, invoicing, payouts and P&L.",
    role: "Sole developer — architecture, MongoDB schema, Express.js APIs, React.js UI and deployment.",
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
    role: "Full-stack developer — database design, Fitbit API integration and the Next.js interface.",
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
    role: "Solo developer — UI, API integration and caching.",
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
