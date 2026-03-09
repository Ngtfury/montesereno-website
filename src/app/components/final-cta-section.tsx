"use client";
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface FinalCtaSectionProps {
  onBookNow: () => void;
}

export function FinalCtaSection({ onBookNow }: FinalCtaSectionProps) {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1702318192103-80b5f7884fc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHN1bnJpc2UlMjB2aWV3JTIwbmF0dXJlfGVufDF8fHx8MTc3MzAzNzU5NHww&ixlib=rb-4.1.0&q=80&w=1080')`
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0f2e25]/75" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h2
          className="text-5xl md:text-7xl text-[#f5f1e8] mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Plan Your Munnar Escape Today
        </h2>

        <p
          className="text-xl text-[#e8eceb] mb-10 max-w-2xl mx-auto"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Create unforgettable memories in the serene mountains of Munnar. Your perfect mountain retreat awaits.
        </p>

        <Button
          onClick={onBookNow}
          className="bg-[#c8a96a] hover:bg-[#b8995a] text-[#0f2e25] px-10 py-7 text-lg rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl group"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Enquire
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>

        <div className="mt-8 text-[#e8eceb]/80 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
          Limited availability · Best rates guaranteed
        </div>
      </motion.div>
    </section>
  );
}
