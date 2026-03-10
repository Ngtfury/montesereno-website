"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface HeroSectionProps {
  onBookNow: (details?: { checkIn?: string, checkOut?: string, guests?: string }) => void;
  onExploreRooms: () => void;
}

export function HeroSection({ onBookNow, onExploreRooms }: HeroSectionProps) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col pt-32 pb-16">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1742285456576-6a02cd8aa6f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXN0eSUyMG1vdW50YWlucyUyMG11bm5hciUyMGtlcmFsYXxlbnwxfHx8fDE3NzMwMzc1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f2e25]/60 via-[#0f2e25]/40 to-[#0f2e25]/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-7xl text-[#f5f1e8] mb-6 drop-shadow-lg leading-tight md:leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Escape to the Serenity of Munnar Resort & Spa
          </h1>

          <p
            className="text-lg sm:text-xl text-[#e8eceb] mb-10 max-w-2xl mx-auto drop-shadow-md px-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Experience peaceful mountain living and rejuvenating spa wellness at Monte Sereno Munnar
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={onBookNow}
              className="bg-[#c8a96a] hover:bg-[#b8995a] text-[#0f2e25] px-8 py-6 rounded-xl text-lg transition-all duration-300 w-full sm:w-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Enquire
            </Button>

            <Button
              variant="outline"
              onClick={onExploreRooms}
              className="border-2 border-white bg-white text-black hover:bg-white/90 px-8 py-6 rounded-xl text-lg backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Explore Rooms
            </Button>
          </div>
        </motion.div>

        {/* Glassmorphism Booking Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl p-4 sm:p-6 shadow-2xl">
            <div className="flex flex-col md:grid md:grid-cols-4 gap-4">
              <div className="flex flex-col">
                <label className="text-[#e8eceb] text-sm mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Check In
                </label>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 text-[#f5f1e8] focus-within:bg-white/30 transition">
                  <Calendar className="w-5 h-5 flex-shrink-0" />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="bg-transparent border-none outline-none text-[#f5f1e8] w-full cursor-pointer [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[#e8eceb] text-sm mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Check Out
                </label>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 text-[#f5f1e8] focus-within:bg-white/30 transition">
                  <Calendar className="w-5 h-5 flex-shrink-0" />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="bg-transparent border-none outline-none text-[#f5f1e8] w-full cursor-pointer [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[#e8eceb] text-sm mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Guests
                </label>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 text-[#f5f1e8] focus-within:bg-white/30 transition">
                  <Users className="w-5 h-5 flex-shrink-0" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="bg-transparent border-none outline-none text-[#f5f1e8] w-full cursor-pointer appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num} className="text-black">{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              <Button
                onClick={() => onBookNow({ checkIn, checkOut, guests })}
                className="bg-[#c8a96a] hover:bg-[#b8995a] text-[#0f2e25] rounded-lg py-6 mt-auto transition-all duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Book Your Stay
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
