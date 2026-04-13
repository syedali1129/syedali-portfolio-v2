"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="w-full py-24 min-h-[60vh] flex items-center">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden h-full flex items-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed relative z-10">
                {portfolioData.about.description}
              </p>
            </div>
            
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl glass hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="/images/coding-night.jpg" 
                alt="Late Night Coding in Toronto" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
