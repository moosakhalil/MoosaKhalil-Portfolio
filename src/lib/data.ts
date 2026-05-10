// ── Portfolio Data ──

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const roles = [
  "Full-Stack Developer",
  "Software Engineer",
  "React, Nextjs",
  "Problem Solver",
];

export const skills = {
  Languages: ["JavaScript", "TypeScript"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "MongoDB"],
  Databases: ["PostgreSQL", "Prisma ORM", "Supabase"],
  Tools: ["Git", "GitHub", "Firebase", "Webpack", "REST APIs"],
};

export const experiences = [
  {
    title: "Software Development Intern",
    company: "Jazba Innovations",
    date: "July 2025 – August 2025",
    side: "left" as const,
    bullets: [
      "Integrated Webpack and Tailwind CSS into the dev pipeline",
      "Participated in Git/GitHub code reviews, enforcing quality standards",
      "Collaborated in agile cross-functional teams",
    ],
  },
  {
    title: "Software Developer",
    company: "Client-Based Project",
    date: "November 2025 – Present",
    side: "right" as const,
    bullets: [
      "Developed full-stack features for a client-facing application",
      "Implemented RESTful APIs and integrated third-party services",
    ],
  },
];

// Experience section images (auto-slider)
export const experienceImages = [
  "/images/experience-1.jpg",
  "/images/experience-2.jpg",
];

export const projects = [
  {
    name: "IndoorAce",
    url: "https://www.indoorace.com/",
    github: "https://github.com/zohaibShafqat2003/IndoorAce",
    stack: ["Next.js", "Node.js", "Prisma", "Supabase", "Tailwind CSS", "Firebase"],
    description:
      "Real-time indoor sports slot booking platform supporting high concurrent users with Firebase Auth.",
    images: [
      "/images/indoorace-1.jpg",
      "/images/indoorace-2.jpg",
      "/images/indoorace-3.jpg",
    ],
  },
  {
    name: "Footy Insights",
    url: "https://footy-insights-football.vercel.app/",
    github: "https://github.com/moosakhalil/Footy-Insights-Football",
    stack: ["React.js", "REST APIs"],
    description:
      "Real-time football scores & statistics with client-side caching for fast response times.",
    images: [
      "/images/footy-insights-1.jpg",
      "/images/footy-insights-2.jpg",
      "/images/footy-insights-3.jpg",
    ],
  },
  {
    name: "Health Sync",
    url: "https://www.health-sync.live/",
    github: "https://github.com/moosakhalil/HealthSync-FYP-",
    stack: ["Next.js", "Supabase", "Prisma", "PostgreSQL"],
    description:
      "Intelligent telehealth platform with Fitbit wearable integration. Award winner at NUST COMPPEC.",
    images: [
      "/images/logo.jpg",
      "/images/homeb.png",
      "/images/slide1.jpg",
    ],
  },
];

// Health Sync FYP spotlight images
export const healthSyncImages = [
  "/images/logo.jpg",
      "/images/homeb.png",
      "/images/slide1.jpg",
];

// NUST COMPPEC award images
export const nustAwardImages = [
  "/images/image.png",
  "/images/nust-award-2.jpeg",
  "/images/win2.png",
];

export const certifications = [
  {
    issuer: "Google",
    name: "Foundations of User Experience (UX) Design",
    link: "#",
    image: "/images/cert3.jpg",
    color: "#4285F4",
  },
  {
    issuer: "Google",
    name: "Foundations of Cybersecurity",
    link: "#",
    image: "/images/cert2.jpg",
    color: "#4285F4",
  },
  {
    issuer: "Google",
    name: "Generative AI: Beyond the Chatbot",
    link: "#",
    image: "/images/cert1.jpg",
    color: "#4285F4",
  },
  {
    issuer: "Meta",
    name: "HTML and CSS in Depth",
    link: "#",
    image: "/images/cert4.jpg",
    color: "#1877F2",
  },
];

export const contactInfo = {
  email: "moosamughal21@gmail.com",
  phone: "+92-331-2674909",
  linkedin: "https://linkedin.com/in/moosadev",
  github: "https://github.com/moosakhalil",
};
