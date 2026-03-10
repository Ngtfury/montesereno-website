"use client";
import { motion } from 'motion/react';

export function SpaSection() {
    return (
        <section className="py-24 px-4 bg-[#0f2e25]">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Column - Image (Reversed layout from About) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 md:order-1"
                    >
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGF8ZW58MXx8fDE3NzMwNTUwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Ayurvedic Spa & Wellness"
                                className="w-full h-[550px] object-cover"
                            />
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#c8a96a]/20 rounded-3xl -z-10" />
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#c8a96a] rounded-full -z-10" />
                    </motion.div>

                    {/* Right Column - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 md:order-2"
                    >
                        <h2
                            className="text-4xl md:text-6xl text-[#f5f1e8] mb-6 leading-tight"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Holistic Healing & Wellness
                        </h2>

                        <div className="space-y-4 text-[#e8eceb]/90 text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <p>
                                Discover ultimate serenity at our exclusive Spa and Wellness center. Drawing upon ancient Ayurvedic traditions and modern holistic therapies, our sanctuary is designed to restore balance to your body, mind, and spirit.
                            </p>

                            <p>
                                Let our expert therapists guide you through bespoke treatments using organic, locally sourced ingredients. Unwind with deeply nourishing massages, detoxifying therapies, and rejuvenating facials amidst the calming sounds of nature.
                            </p>

                            <p>
                                Whether you're unwinding after a day of mountain exploration or seeking a dedicated wellness retreat, our spa offers a transformative experience that lingers long after you depart.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-8 border-t border-[#c8a96a]/20 pt-8">
                            <div>
                                <div className="text-3xl text-[#c8a96a] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Ayurveda</div>
                                <div className="text-sm text-[#e8eceb]/70" style={{ fontFamily: "'Inter', sans-serif" }}>Traditional Therapies</div>
                            </div>
                            <div>
                                <div className="text-3xl text-[#c8a96a] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Wellness</div>
                                <div className="text-sm text-[#e8eceb]/70" style={{ fontFamily: "'Inter', sans-serif" }}>Yoga & Meditation</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
