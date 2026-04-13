"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-24 min-h-[50vh] flex items-center">
      <div className="max-w-3xl mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass p-10 md:p-16 rounded-3xl relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] rounded-full z-0" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-10">
              {portfolioData.about.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email Me
              </a>
              
              <a
                href={`tel:${portfolioData.contact.phone.replace(/-/g, "")}`}
                className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                {portfolioData.contact.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
