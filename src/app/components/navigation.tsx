"use client";
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  onBookNow: () => void;
}

export function Navigation({ onBookNow }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0f2e25]/95 backdrop-blur-md border-b border-[#c8a96a]/20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <h1
              className="text-2xl text-[#c8a96a]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Monte Sereno Resort & Spa
            </h1>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#f5f1e8] hover:text-[#c8a96a] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={onBookNow}
              className="bg-[#c8a96a] hover:bg-[#b8995a] text-[#0f2e25] px-6 py-2 rounded-lg transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Enquire
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#f5f1e8] p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#f5f1e8] hover:text-[#c8a96a] transition-colors py-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  onBookNow();
                  setIsMenuOpen(false);
                }}
                className="bg-[#c8a96a] hover:bg-[#b8995a] text-[#0f2e25] px-6 py-2 rounded-lg transition-all duration-300 w-full"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Enquire
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
