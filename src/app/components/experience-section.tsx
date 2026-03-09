"use client";
import { motion } from 'motion/react';
import { Card } from './ui/card';

const experiences = [
  {
    title: 'Tea Plantation Walks',
    description: 'Wander through emerald tea estates and learn the art of tea-making from local experts.',
    image: 'https://images.unsplash.com/photo-1696027363451-868315885f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBwbGFudGF0aW9uJTIwa2VyYWxhJTIwZ3JlZW58ZW58MXx8fHwxNzczMDM3NTkzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Mountain Sunrise Views',
    description: 'Wake up to breathtaking sunrises painting the Western Ghats in golden hues.',
    image: 'https://images.unsplash.com/photo-1702318192103-80b5f7884fc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHN1bnJpc2UlMjB2aWV3JTIwbmF0dXJlfGVufDF8fHx8MTc3MzAzNzU5NHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Cycling Trails',
    description: 'Explore scenic mountain paths and discover hidden valleys on our guided cycling tours.',
    image: 'https://images.unsplash.com/photo-1760462167813-25d35e87630f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwdHJhaWwlMjBtb3VudGFpbiUyMHBhdGh8ZW58MXx8fHwxNzczMDM3NTk0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Bonfire Evenings',
    description: 'Gather around crackling flames under starlit skies for stories and warmth.',
    image: 'https://images.unsplash.com/photo-1520918998343-a33f59b7c079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYm9uZmlyZSUyMGV2ZW5pbmclMjBjYW1wZmlyZXxlbnwxfHx8fDE3NzMwMzc1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function ExperienceSection() {
  return (
    <section className="py-24 px-4 bg-[#0f2e25]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl text-[#f5f1e8] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Unforgettable Experiences
          </h2>
          <p
            className="text-lg text-[#e8eceb] max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Immerse yourself in the natural beauty and culture of Munnar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="overflow-hidden rounded-3xl border-none shadow-2xl group cursor-pointer bg-[#f5f1e8]">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2e25]/80 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3
                      className="text-3xl text-[#f5f1e8] mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {experience.title}
                    </h3>
                    <p
                      className="text-[#e8eceb] text-base"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {experience.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
