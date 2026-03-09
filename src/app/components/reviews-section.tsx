"use client";
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Card } from './ui/card';

const reviews = [
  {
    name: 'Sarah Johnson',
    location: 'London, UK',
    rating: 5,
    review: 'Monte Sereno is pure magic! The views are breathtaking, the rooms are impeccable, and the service is exceptional. Our tea plantation walk was the highlight of our trip.',
    date: 'February 2026'
  },
  {
    name: 'Rajesh Kumar',
    location: 'Bangalore, India',
    rating: 5,
    review: 'The perfect mountain retreat. Every detail is thoughtfully curated. The bonfire evenings and sunrise views made our anniversary truly unforgettable.',
    date: 'January 2026'
  },
  {
    name: 'Emily Chen',
    location: 'Singapore',
    rating: 5,
    review: 'Absolutely stunning resort! The blend of luxury and nature is seamless. The staff went above and beyond to make our stay memorable. Already planning our return visit.',
    date: 'December 2025'
  }
];

export function ReviewsSection() {
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
            Guest Testimonials
          </h2>
          <p
            className="text-lg text-[#0f2e25]/70 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Stories from our cherished guests
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="p-8 rounded-3xl border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-[#f5f1e8] h-full flex flex-col">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#c8a96a] text-[#c8a96a]" />
                  ))}
                </div>

                {/* Review Text */}
                <p
                  className="text-[#0f2e25]/80 mb-6 flex-grow leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  "{review.review}"
                </p>

                {/* Author Info */}
                <div className="border-t border-[#0f2e25]/10 pt-4">
                  <div
                    className="text-[#0f2e25] mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {review.name}
                  </div>
                  <div
                    className="text-sm text-[#0f2e25]/60"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {review.location} · {review.date}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-[#f5f1e8] px-8 py-4 rounded-full shadow-md">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#c8a96a] text-[#c8a96a]" />
              ))}
            </div>
            <span
              className="text-2xl text-[#0f2e25]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              5.0
            </span>
            <span
              className="text-[#0f2e25]/60"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              from 127 reviews
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
