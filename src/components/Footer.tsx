'use client';

import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin } from 'lucide-react';

const footerSections = [
  {
    title: 'Products',
    links: [
      { name: 'FormEase', href: 'https://formease.xyz/' },
      { name: 'QRBee', href: 'https://qrbee.xyz/' },
      { name: 'HackHire', href: 'https://hackhire.dev/' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Support', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Contact', href: '#' }
    ]
  }
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' }
];

export function Footer() {
  return (
    <footer className="gradient-footer py-16 px-6 border-t border-violet-500/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-12"
        >
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-3">Markit.one</h3>
              <p className="text-violet-300 leading-relaxed max-w-sm">
                Simplifying business operations with powerful, intuitive tools for modern teams.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-300 hover:text-white hover:bg-violet-500/20 hover:border-violet-400/40 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      whileHover={{ x: 4 }}
                      className="text-violet-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-violet-500/20 text-center"
        >
          <p className="text-violet-400">
            © 2025 Markit.one. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}