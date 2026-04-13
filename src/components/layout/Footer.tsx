import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/10 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Syed Ali. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </footer>
  );
}
