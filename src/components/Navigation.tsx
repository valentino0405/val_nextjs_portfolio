"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const navItems = [
    { label: "#home", href: "/home" },
    { label: "#projects", href: "/projects" },
    { label: "#about-me", href: "/about" },
    { label: "#contacts", href: "/contacts" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-8 py-4 shadow-2xl">
        <div className="flex items-center justify-between">
          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-300 text-base font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors duration-300 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10"
            >
              <span className="text-base font-medium">EN</span>
              <ChevronDownIcon 
                className={`w-4 h-4 transition-transform duration-300 ${
                  isLanguageOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>

            {/* Dropdown Menu */}
            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl overflow-hidden">
                <div className="py-1">
                  <button
                    onClick={() => setIsLanguageOpen(false)}
                    className="block w-full px-4 py-3 text-left text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setIsLanguageOpen(false)}
                    className="block w-full px-4 py-3 text-left text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    ES
                  </button>
                  <button
                    onClick={() => setIsLanguageOpen(false)}
                    className="block w-full px-4 py-3 text-left text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    FR
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}