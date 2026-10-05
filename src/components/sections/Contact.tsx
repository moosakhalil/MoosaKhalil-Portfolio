"use client";
import { useEffect, useState } from "react";
import Section, { RevealGroup, RevealItem } from "@/components/Section";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { contactInfo, navLinks } from "@/lib/data";
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2500);
    return () => clearTimeout(t);
  }, [toast]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      setToast("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setToast("Couldn't copy — please copy it manually");
    }
  };

  const channels = [
    { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}`, external: false },
    { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone}`, external: false },
    { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/moosadev", href: contactInfo.linkedin, external: true },
    { icon: GithubIcon, label: "GitHub", value: "github.com/moosakhalil", href: contactInfo.github, external: true },
  ];

  return (
    <>
      <Section
        id="contact"
        label="Contact"
        title="Let's work together"
        intro="I'm open to full-time Software Engineer roles and interesting projects. The fastest way to reach me is email."
      >
        <RevealGroup className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {channels.map(({ icon: Icon, label, value, href, external }) => (
            <RevealItem key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group h-full flex items-center gap-4 md:gap-5 p-5 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-lg bg-accent-50 dark:bg-accent/15 text-accent dark:text-accent-light group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</span>
                  <span className="block text-base md:text-lg font-medium text-slate-900 dark:text-white break-all">{value}</span>
                </span>
                <ArrowUpRight className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </a>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <button
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-accent text-white text-base font-medium hover:bg-accent-dark transition-colors"
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            {copied ? "Email copied" : "Copy email address"}
          </button>
          <p className="flex items-center gap-2 text-base text-slate-600 dark:text-slate-400">
            <MapPin className="w-5 h-5 text-accent dark:text-accent-light" />
            {contactInfo.location} · Open to remote
          </p>
        </div>
      </Section>

      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-base text-slate-500 dark:text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} Muhammad Moosa Khalil
          </p>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-base text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-accent-light transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>

      {toast && (
        <div role="status" className="toast toast-success">
          {toast}
        </div>
      )}
    </>
  );
}
