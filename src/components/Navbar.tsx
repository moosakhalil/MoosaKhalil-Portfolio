"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useTheme } from "next-themes";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { navLinks } from "@/lib/data";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2.5 rounded-lg text-stone-600 dark:text-stone-300 hover:text-accent dark:hover:text-accent-light hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {mounted ? (isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />) : <span className="block w-5 h-5" />}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape or when the viewport grows to desktop size
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileOpen]);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || mobileOpen ? "glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px] gap-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 shrink-0"
            aria-label="Back to top"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent text-white text-sm font-bold">MK</span>
            <span className="text-lg font-semibold tracking-tight text-stone-900 dark:text-white">Moosa Khalil</span>
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-accent dark:text-accent-light"
                      : "text-stone-600 dark:text-stone-300 hover:text-accent dark:hover:text-accent-light"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 rounded-full bg-accent dark:bg-accent-light"
                    />
                  )}
                </button>
              );
            })}
            <ThemeToggle />
            <a
              href="/Moosa_CV.pdf"
              download
              className="ml-2 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-white text-[15px] font-medium hover:bg-accent-dark transition-colors"
            >
              Resume
              <Download className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile / tablet / zoomed-in desktop */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-lg text-stone-900 dark:text-white hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll progress */}
      <motion.div style={{ scaleX: progress }} className="absolute left-0 right-0 bottom-0 h-0.5 origin-left bg-accent" />

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 top-16 md:top-[72px] bg-stone-900/30 z-[90]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-x-0 top-16 md:top-[72px] max-h-[calc(100dvh-4rem)] overflow-y-auto bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 shadow-xl z-[100]"
            >
              <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className={`block w-full text-left py-3.5 text-lg font-medium border-b border-stone-100 dark:border-stone-800 transition-colors ${
                      active === link.href ? "text-accent dark:text-accent-light" : "text-stone-900 dark:text-white hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href="/Moosa_CV.pdf"
                  download
                  className="mt-5 mb-2 flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-accent text-white text-base font-medium"
                >
                  Download resume
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
