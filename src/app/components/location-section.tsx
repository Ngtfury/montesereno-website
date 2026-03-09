"use client";
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Card } from './ui/card';

const attractions = [
  { name: 'Munnar Tea Museum', distance: '2.5 km' },
  { name: 'Mattupetty Dam', distance: '8 km' },
  { name: 'Echo Point', distance: '12 km' },
  { name: 'Top Station', distance: '32 km' },
  { name: 'Eravikulam National Park', distance: '15 km' },
  { name: 'Kundala Lake', distance: '18 km' }
];

export function LocationSection() {
  return (
    <section className="py-24 px-4 bg-[#e8eceb]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl text-[#0f2e25] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Location & Nearby
          </h2>
          <p
            className="text-lg text-[#0f2e25]/70 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Perfectly positioned to explore Munnar's treasures
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Attractions & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Nearby Attractions */}
            <Card className="p-8 rounded-3xl border-none shadow-lg bg-white">
              <h3
                className="text-2xl text-[#0f2e25] mb-6 flex items-center gap-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <MapPin className="w-6 h-6 text-[#c8a96a]" />
                Nearby Attractions
              </h3>
              <div className="space-y-3">
                {attractions.map((attraction) => (
                  <div
                    key={attraction.name}
                    className="flex justify-between items-center py-3 border-b border-[#0f2e25]/10 last:border-0"
                  >
                    <span
                      className="text-[#0f2e25]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {attraction.name}
                    </span>
                    <span
                      className="text-[#c8a96a] text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {attraction.distance}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 rounded-3xl border-none shadow-lg bg-white">
              <h3
                className="text-2xl text-[#0f2e25] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#c8a96a] mt-1 flex-shrink-0" />
                  <div>
                    <div
                      className="text-[#0f2e25] mb-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Monte Sereno Resort Road,<br />
                      Chithirapuram, Munnar,<br />
                      Kerala 685612, India
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#c8a96a] flex-shrink-0" />
                  <span
                    className="text-[#0f2e25]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    +91 85908 29378
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#c8a96a] flex-shrink-0" />
                  <span
                    className="text-[#0f2e25]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    info@monteserenomunnar.com
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#c8a96a] mt-1 flex-shrink-0" />
                  <div
                    className="text-[#0f2e25]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Check-in: 2:00 PM<br />
                    Check-out: 12:00 PM
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-0 rounded-3xl border-none shadow-lg overflow-hidden h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=Monte+Sereno+Munnar,+near+marryland+church,+eetycity,+Anachal,+Kerala+685565&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Monte Sereno Munnar Location"
              />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
