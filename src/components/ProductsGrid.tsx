'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FileText, QrCode, Users } from 'lucide-react';

const products = [
  {
    icon: FileText,
    name: 'FormEase',
    tagline: 'Build forms in minutes, no coding.',
    gradient: 'from-cyan-500 to-blue-500',
    url: 'https://formease.xyz/'
  },
  {
    icon: QrCode,
    name: 'QRBee',
    tagline: 'Generate QR codes in seconds.',
    gradient: 'from-violet-500 to-purple-500',
    url: 'https://qrbee.xyz/'
  },
  {
    icon: Users,
    name: 'HackHire',
    tagline: 'Streamline hiring with smart tools.',
    gradient: 'from-pink-500 to-rose-500',
    url: 'https://hackhire.dev/'
  }
];

export function ProductsGrid() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#1A0B2E] to-[#0F0A1C]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-white mb-4">
            Powerful tools for modern teams
          </h2>
          <p className="text-lg text-violet-200 max-w-2xl mx-auto">
            Everything you need to build, create, and scale your business operations.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="group gradient-card rounded-2xl p-8 hover:glow-md transition-all duration-500 cursor-pointer"
              >
                {/* Icon with gradient background */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${product.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Product Info */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-violet-300 mb-6 leading-relaxed">
                  {product.tagline}
                </p>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="text-violet-300 hover:text-white hover:bg-violet-500/20 transition-all duration-300 group-hover:bg-violet-500/30"
                  asChild
                >
                  <a href={product.url} target="_blank" rel="noopener noreferrer">
                    Learn More →
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}