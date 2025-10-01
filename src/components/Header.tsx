'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-md border-b border-violet-400/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/logo.svg"
                alt="Markit Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <span className="text-xl font-bold text-white">markit</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-violet-200 hover:text-white transition-colors">
              Products
            </a>
            <a href="#features" className="text-violet-200 hover:text-white transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-violet-200 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-violet-200 hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300">
              Get Started
            </button>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
