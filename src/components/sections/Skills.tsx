"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 min-h-[60vh] flex items-center">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-secondary/30 border border-white/5 p-8 md:p-12 rounded-3xl"
        >
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Core <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-lg">
              Here are some of the technologies and concepts I work with regularly in my journey as a Data Analyst.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {portfolioData.skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 glass hover:bg-white/10 rounded-full transition-colors font-medium text-sm md:text-base text-gray-200"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
