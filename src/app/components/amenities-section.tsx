"use client";
import { motion } from 'motion/react';
import { Mountain, Wifi, UtensilsCrossed, Plane, Trees, Flame, Map, Bike } from 'lucide-react';
import { Card } from './ui/card';

const amenities = [
  { icon: Mountain, title: 'Mountain View Rooms', description: 'Panoramic vistas from every room' },
  { icon: Wifi, title: 'Free WiFi', description: 'High-speed internet throughout' },
  { icon: UtensilsCrossed, title: 'Restaurant', description: 'Fine dining with local flavors' },
  { icon: Plane, title: 'Airport Transfer', description: 'Complimentary pickup service' },
  { icon: Trees, title: 'Garden & Terrace', description: 'Private outdoor spaces' },
  { icon: Flame, title: 'Outdoor Fireplace', description: 'Evening bonfire experiences' },
  { icon: Map, title: 'Walking Tours', description: 'Guided nature expeditions' },
  { icon: Bike, title: 'Bicycle Rental', description: 'Explore at your own pace' },
];

export function AmenitiesSection() {
  return (
    <section className="py-24 px-4 bg-white">
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
            Resort Amenities
          </h2>
          <p
            className="text-lg text-[#0f2e25]/70 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Every detail crafted for your comfort and enjoyment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 rounded-2xl border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-[#f5f1e8] h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0f2e25] flex items-center justify-center mb-4">
                    <amenity.icon className="w-8 h-8 text-[#c8a96a]" />
                  </div>
                  <h3
                    className="text-xl text-[#0f2e25] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {amenity.title}
                  </h3>
                  <p
                    className="text-sm text-[#0f2e25]/70"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {amenity.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
