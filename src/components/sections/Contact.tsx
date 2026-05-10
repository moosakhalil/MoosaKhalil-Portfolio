"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { contactInfo, navLinks } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const infoItems = [
    { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
    { icon: MapPin, label: "Location", value: "Islamabad, Pakistan", href: "#" },
  ];

  const socialLinks = [
    { 
      label: "LinkedIn", 
      href: contactInfo.linkedin,
      icon: <Image src="/images/logos/linkedin.png" alt="LinkedIn" width={20} height={20} className="opacity-70 group-hover:opacity-100 transition-opacity" />
    },
    { 
      label: "GitHub", 
      href: contactInfo.github,
      icon: <Image src="/images/logos/github.png" alt="GitHub" width={20} height={20} className="opacity-70 group-hover:opacity-100 transition-opacity" />
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Let&apos;s build something <span className="gradient-text">exceptional</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-12">
              I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision. 
              Feel free to reach out through any of the channels below.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {infoItems.map((item, idx) => {
                const isLink = item.href !== "#";
                const Component = isLink ? motion.a : motion.div;
                
                return (
                  <Component
                    key={item.label}
                    {...(isLink ? { href: item.href } : {})}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 * idx }}
                    className={`flex flex-col items-center gap-4 p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 group ${isLink ? "hover:bg-white hover:shadow-xl hover:border-accent/20 cursor-pointer" : ""}`}
                  >
                    <div className={`p-4 rounded-2xl bg-white shadow-sm transition-all duration-300 ${isLink ? "text-accent group-hover:bg-accent group-hover:text-white" : "text-slate-400"}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                      <p className="text-slate-900 font-bold text-sm">{item.value}</p>
                    </div>
                  </Component>
                );
              })}
            </div>

            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold text-sm uppercase tracking-widest hover:bg-accent transition-all group"
                >
                  {social.icon}
                  <span className="brightness-0 invert">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} Muhammad Moosa Khalil. Built with Next.js & Framer Motion.
          </p>
          <div className="flex gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-slate-400 hover:text-accent text-sm font-bold uppercase tracking-wider transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
