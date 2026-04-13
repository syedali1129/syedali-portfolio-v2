"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          
          <div className="relative w-full h-48 md:h-72 rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl mb-12 group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
            <img 
              src="/images/tech-setup.jpg" 
              alt="Data Analysis Dashboard Setup" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between min-h-[250px]"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>
                
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors"
                  >
                    View Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
