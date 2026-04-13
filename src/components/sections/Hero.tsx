"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[20%] w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="max-w-5xl mx-auto px-6 z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex glass px-4 py-2 rounded-full mb-8"
        >
          <span className="text-sm font-medium tracking-wide">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
        >
          {portfolioData.about.greeting}
          <br />
          <span className="text-gradient leading-tight">
            {portfolioData.about.title}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
        >
          I specialize in statistical analysis, predictive modeling, and transforming data into actionable insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass hover:bg-white/10 text-white rounded-full font-medium transition-all"
          >
            Contact Me
          </a>
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass hover:bg-white/10 text-white rounded-full font-medium transition-all flex items-center gap-2 justify-center"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
