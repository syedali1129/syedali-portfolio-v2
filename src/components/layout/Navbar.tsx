"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 hidden md:flex items-center justify-between">
        <div className="glass px-8 py-3 rounded-full flex items-center gap-8 w-full justify-between shadow-lg">
          <Link href="#" className="font-bold text-xl tracking-tighter">
            SyedAli<span className="text-primary">.</span>
          </Link>
          
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden glass mx-4 mt-4 px-6 py-4 rounded-2xl flex items-center justify-between">
        <Link href="#" className="font-bold text-xl">
            SyedAli<span className="text-primary">.</span>
        </Link>
        <a
          href={portfolioData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded-full"
        >
          GitHub
        </a>
      </div>
    </motion.header>
  );
}
