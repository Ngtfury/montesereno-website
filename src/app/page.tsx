"use client";

import { Navigation } from './components/navigation';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { SpaSection } from './components/spa-section';
import { AmenitiesSection } from './components/amenities-section';
import { ExperienceSection } from './components/experience-section';
import { GallerySection } from './components/gallery-section';
import { ReviewsSection } from './components/reviews-section';
import { LocationSection } from './components/location-section';
import { FinalCtaSection } from './components/final-cta-section';
import { Footer } from './components/footer';

export default function App() {
  const handleBookNow = (details?: { checkIn?: string, checkOut?: string, guests?: string }) => {
    let message = "Hello, I would like to enquire about booking a stay at Monte Sereno Munnar.";

    if (details && (details.checkIn || details.checkOut || details.guests)) {
      message += `\n\nBooking Details:`;
      if (details.checkIn) message += `\nCheck-in: ${details.checkIn}`;
      if (details.checkOut) message += `\nCheck-out: ${details.checkOut}`;
      if (details.guests) message += `\nGuests: ${details.guests}`;
    }

    window.open(`https://wa.me/918590829378?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleExploreRooms = () => {
    document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navigation onBookNow={() => handleBookNow()} />

      <main>
        <HeroSection
          onBookNow={(details) => handleBookNow(details)}
          onExploreRooms={handleExploreRooms}
        />

        <section id="about">
          <AboutSection />
        </section>

        <section id="spa">
          <SpaSection />
        </section>

        <section id="amenities">
          <AmenitiesSection />
        </section>

        <section id="experiences">
          <ExperienceSection />
        </section>

        <section id="gallery">
          <GallerySection />
        </section>

        <section id="reviews">
          <ReviewsSection />
        </section>

        <section id="location">
          <LocationSection />
        </section>

        <FinalCtaSection onBookNow={() => handleBookNow()} />
      </main>

      <Footer />
    </div>
  );
}
