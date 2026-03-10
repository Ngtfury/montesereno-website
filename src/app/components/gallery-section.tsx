"use client";
import { motion } from 'motion/react';
import Masonry from 'react-responsive-masonry';

const galleryImages = [
  {
    url: '/images/main1.jpeg',
    alt: 'Monte Sereno Munnar View'
  },
  {
    url: '/images/outside_view1.jpeg',
    alt: 'Resort Exterior'
  },
  {
    url: '/images/outside_view2.jpeg',
    alt: 'Mountain View'
  },
  {
    url: '/images/outside_view3.jpeg',
    alt: 'Property View'
  },
  {
    url: '/images/outside_view4.jpeg',
    alt: 'Scenic Environment'
  },
  {
    url: '/images/room1.jpeg',
    alt: 'Resort Room'
  }
];

export function GallerySection() {
  return (
    <section className="py-24 px-4 bg-[#f5f1e8]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#0f2e25] mb-6 drop-shadow-sm"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}
          >
            Gallery
          </h2>
          <p
            className="text-lg text-[#0f2e25]/70 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A visual journey through Monte Sereno Munnar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Masonry columnsCount={3} gutter="20px">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </Masonry>
        </motion.div>
      </div>
    </section>
  );
}
