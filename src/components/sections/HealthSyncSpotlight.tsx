"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageSlider from "@/components/ImageSlider";
import { healthSyncImages } from "@/lib/data";
import { ExternalLink, Heart, Watch, Trophy, CheckCircle2 } from "lucide-react";

export default function HealthSyncSpotlight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Heart, label: "Vitals", value: "Real-time" },
    { icon: Watch, label: "Fitbit", value: "Sync" },
    { icon: Trophy, label: "NUST", value: "Awarded" },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -ml-40 -mb-40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-all" />
              <div className="relative bg-[#0a0f1d] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  </div>
                  <div className="mx-auto bg-white/5 px-3 py-1 rounded-md text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    health-sync.live
                  </div>
                </div>
                
                <ImageSlider 
                  images={healthSyncImages} 
                  alt="Health Sync Mockup" 
                  aspectRatio="aspect-video"
                  rounded="rounded-none"
                  objectFit="contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent-light text-xs font-bold uppercase tracking-wider">
                Final Year Project
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <div className="text-slate-500 text-xs font-medium">Spotlight</div>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Intelligent Telehealth & <span className="text-accent-light underline decoration-accent/40 decoration-4 underline-offset-8">Remote Patient Monitoring</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Health Sync is a complete clinical ecosystem integrating <span className="text-slate-200">real-time IoT monitoring</span> with 
              advanced provider-patient workflows. Built to scale and save lives.
            </p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Video Consultations",
                "EHR Management",
                "Wearable Integration",
                "Automated Reporting",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  {item}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 p-3 md:p-4 rounded-2xl text-center hover:bg-white/10 transition-colors">
                  <stat.icon className="w-5 h-5 text-accent-light mx-auto mb-2" />
                  <p className="text-white text-[10px] sm:text-sm font-bold uppercase tracking-tight">{stat.value}</p>
                  <p className="text-slate-500 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <motion.a
                href="https://www.health-sync.live/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-accent text-white font-bold text-sm shadow-xl shadow-accent/20 hover:bg-accent-dark transition-all"
              >
                Launch Platform <ExternalLink className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://github.com/moosakhalil/HealthSync-FYP-"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center p-2 transition-all"
              >
                <Image 
                  src="/images/logos/github.png" 
                  alt="GitHub" 
                  width={32} 
                  height={32} 
                  className="transition-opacity"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
