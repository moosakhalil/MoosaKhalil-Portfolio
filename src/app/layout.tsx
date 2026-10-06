import type { Metadata } from "next";
import { IBM_Plex_Sans, Newsreader } from "next/font/google";
import Providers from "./providers";
import { contactInfo, siteUrl } from "@/lib/data";
import "./globals.css";

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: false,
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${body.variable} ${display.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
