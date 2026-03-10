"use client";
import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section className="py-24 px-4 bg-[#f5f1e8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-5xl md:text-6xl text-[#0f2e25] mb-8 leading-tight drop-shadow-sm"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}
            >
              A Sanctuary in the Mountains
            </h2>

            <div className="space-y-6 text-[#0f2e25]/80 text-lg md:text-xl font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p>
                Nestled in the heart of Munnar's verdant tea estates, Monte Sereno offers an unparalleled escape into nature's embrace. Our boutique resort combines luxury with the tranquility of the Western Ghats, creating an oasis of peace and rejuvenation.
              </p>

              <p>
                Each thoughtfully designed space harmonizes with the surrounding landscape, featuring locally sourced materials and breathtaking mountain vistas. From sunrise to sunset, experience the magic of Munnar in elegant comfort.
              </p>

              <p>
                Whether you seek adventure on our guided tea plantation walks or quiet contemplation on your private terrace, Monte Sereno Munnar provides the perfect setting for unforgettable mountain memories.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="text-4xl text-[#c8a96a] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>12</div>
                <div className="text-sm text-[#0f2e25]/70" style={{ fontFamily: "'Inter', sans-serif" }}>Luxury Rooms</div>
              </div>
              <div>
                <div className="text-4xl text-[#c8a96a] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>5★</div>
                <div className="text-sm text-[#0f2e25]/70" style={{ fontFamily: "'Inter', sans-serif" }}>Guest Rating</div>
              </div>
              <div>
                <div className="text-4xl text-[#c8a96a] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>24/7</div>
                <div className="text-sm text-[#0f2e25]/70" style={{ fontFamily: "'Inter', sans-serif" }}>Concierge</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/main2.jpeg"
                alt="Monte Sereno Resort"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#c8a96a]/20 rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
