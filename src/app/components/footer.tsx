"use client";
import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0f2e25] text-[#f5f1e8] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className="text-3xl text-[#c8a96a] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Monte Sereno Munnar
              </h3>
              <p
                className="text-[#e8eceb] mb-6 max-w-md leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                A luxury boutique resort nestled in the heart of Munnar's tea estates, offering an unparalleled mountain escape.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#c8a96a]/20 hover:bg-[#c8a96a] flex items-center justify-center transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#c8a96a]/20 hover:bg-[#c8a96a] flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#c8a96a]/20 hover:bg-[#c8a96a] flex items-center justify-center transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4
              className="text-xl text-[#c8a96a] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
              <li><a href="#about" className="text-[#e8eceb] hover:text-[#c8a96a] transition-colors">About Us</a></li>
              <li><a href="#rooms" className="text-[#e8eceb] hover:text-[#c8a96a] transition-colors">Rooms & Suites</a></li>
              <li><a href="#amenities" className="text-[#e8eceb] hover:text-[#c8a96a] transition-colors">Amenities</a></li>
              <li><a href="#experiences" className="text-[#e8eceb] hover:text-[#c8a96a] transition-colors">Experiences</a></li>
              <li><a href="#gallery" className="text-[#e8eceb] hover:text-[#c8a96a] transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-[#e8eceb] hover:text-[#c8a96a] transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4
              className="text-xl text-[#c8a96a] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact
            </h4>
            <ul className="space-y-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c8a96a] mt-1 flex-shrink-0" />
                <span className="text-[#e8eceb]">Chithirapuram, Munnar,<br />Kerala 685612, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#c8a96a] flex-shrink-0" />
                <span className="text-[#e8eceb]">+91 85908 29378</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#c8a96a] flex-shrink-0" />
                <span className="text-[#e8eceb]">info@monteserenomunnar.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-[#c8a96a]/20 pt-8 text-center"
        >
          <p
            className="text-[#e8eceb]/70 text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2026 Monte Sereno Munnar. All rights reserved. | Privacy Policy | Terms & Conditions
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
