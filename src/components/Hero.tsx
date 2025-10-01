'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Play } from 'lucide-react';
import { Header } from './Header';

export function Hero() {
  return (
    <>
      <Header />
      <section className="relative min-h-screen gradient-hero flex items-center justify-center px-6 overflow-hidden pt-20">
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle absolute top-20 left-20 w-2 h-2 bg-violet-400 rounded-full opacity-60"></div>
        <div className="particle absolute top-40 right-32 w-1 h-1 bg-pink-400 rounded-full opacity-40"></div>
        <div className="particle absolute bottom-32 left-40 w-3 h-3 bg-blue-400 rounded-full opacity-50"></div>
        <div className="particle absolute bottom-20 right-20 w-2 h-2 bg-violet-300 rounded-full opacity-60"></div>
        <div className="particle absolute top-60 left-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo with glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 backdrop-blur-sm border border-violet-400/30 glow-sm">
            <h1 className="text-3xl font-bold text-white">Markit.one</h1>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-headline mb-6 max-w-4xl mx-auto"
        >
          Simplify forms, QR codes, and hiring — all in one place.
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-subline mb-12 max-w-lg mx-auto"
        >
          One hub, many SaaS tools.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="gradient-button hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 px-8 py-4 text-lg font-semibold rounded-xl"
          >
            Get Started
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-violet-400/50 text-violet-200 hover:bg-violet-500/10 hover:border-violet-400 hover:glow-sm transition-all duration-300 px-8 py-4 text-lg rounded-xl backdrop-blur-sm"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
        </motion.div>
      </div>
    </section>
    </>
  );
}