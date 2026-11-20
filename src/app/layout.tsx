import type { Metadata, Viewport } from "next";
import { contactInfo, siteUrl } from "@/lib/data";
import "./globals.css";

const title = "Muhammad Moosa Khalil | Full-Stack Software Engineer";
const description =
  "Full-Stack Software Engineer shipping production web apps end to end with React.js, Next.js, Node.js, TypeScript, MongoDB and PostgreSQL. NUST COMPPEC award winner.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Muhammad Moosa Khalil",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer",
    "Islamabad",
  ],
  authors: [{ name: "Muhammad Moosa Khalil" }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Muhammad Moosa Khalil",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#E8EFF4",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Moosa Khalil",
  jobTitle: "Full-Stack Software Engineer",
  url: siteUrl,
  email: `mailto:${contactInfo.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Bahria University" },
  sameAs: [contactInfo.github, contactInfo.linkedin],
  knowsAbout: ["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
};

// Fonts: Anybody (display, variable width and weight), Geist (body) and Geist Mono (labels).
const fontsHref =
  "https://fonts.googleapis.com/css2?family=Anybody:wdth,wght@50..150,100..900&family=Geist:wght@300..700&family=Geist+Mono:wght@400..600&display=swap";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={fontsHref} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
