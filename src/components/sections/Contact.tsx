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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/10 shadow-xl shrink-0 bg-primary/20">
                <img 
                  src="/images/me.jpg" 
                  alt="Syed Ali Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center sm:text-left">
                Contact <span className="text-gradient">Syed Ali</span>
              </h2>
            </div>
            
            <p className="text-gray-400 text-lg mb-10">
              {portfolioData.about.tagline}
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-8">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email
              </a>
              
              <a
                href={`tel:${portfolioData.contact.phone.replace(/-/g, "")}`}
                className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call
              </a>

              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 glass hover:bg-blue-500/20 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </a>

              <a
                href={portfolioData.contact.resume}
                download="Syed_Ali_Resume.pdf"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-200 text-black rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
