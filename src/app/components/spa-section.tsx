"use client";
import { motion } from 'motion/react';
import { Sparkles, Leaf, Heart, Waves } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const spaServices = [
    {
        icon: Leaf,
        title: 'Ayurvedic Therapies',
        description: 'Traditional Kerala treatments for holistic healing and balance',
        treatments: ['Abhyanga', 'Shirodhara', 'Pizhichil', 'Njavarakizhi']
    },
    {
        icon: Sparkles,
        title: 'Signature Massages',
        description: 'Luxurious bodywork combining ancient and modern techniques',
        treatments: ['Deep Tissue', 'Hot Stone', 'Aromatherapy', 'Thai Massage']
    },
    {
        icon: Heart,
        title: 'Wellness Rituals',
        description: 'Curated experiences for complete mind-body rejuvenation',
        treatments: ['Detox Programs', 'Stress Relief', 'Anti-Aging', 'Sleep Therapy']
    },
    {
        icon: Waves,
        title: 'Beauty & Care',
        description: 'Natural treatments using organic mountain botanicals',
        treatments: ['Facials', 'Body Scrubs', 'Herbal Wraps', 'Manicure & Pedicure']
    }
];

interface SpaSectionProps {
    onBookSpa: () => void;
}

export function SpaSection({ onBookSpa }: SpaSectionProps) {
    return (
        <section className="py-24 px-4 bg-gradient-to-b from-[#e8eceb] to-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
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
                        Serenity Spa & Wellness
                    </h2>
                    <p
                        className="text-lg text-[#0f2e25]/70 max-w-3xl mx-auto leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Immerse yourself in a sanctuary of tranquility where ancient Ayurvedic wisdom meets modern wellness.
                        Our spa is a haven of peace, offering personalized treatments designed to restore balance and harmony.
                    </p>
                </motion.div>

                {/* Main Spa Feature with Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative order-2 md:order-1">
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1633526543913-d30e3c230d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjBtYXNzYWdlJTIwdHJlYXRtZW50fGVufDF8fHx8MTc3MzEwNDI3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Spa Treatment"
                                    className="w-full h-[450px] object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#c8a96a]/20 rounded-3xl -z-10" />
                        </div>

                        <div className="order-1 md:order-2">
                            <h3
                                className="text-3xl md:text-4xl text-[#0f2e25] mb-6"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Your Journey to Wellness
                            </h3>
                            <div className="space-y-4 text-[#0f2e25]/80 text-lg leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                                <p>
                                    Our expert therapists blend traditional Kerala Ayurvedic practices with contemporary spa techniques to create transformative experiences tailored to your needs.
                                </p>
                                <p>
                                    Every treatment begins with a personal consultation to understand your wellness goals, followed by customized therapies using premium organic oils and mountain herbs.
                                </p>
                            </div>
                            <Button
                                onClick={onBookSpa}
                                className="bg-[#c8a96a] hover:bg-[#b8995a] text-[#0f2e25] px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Book a Spa Treatment
                            </Button>
                        </div>
                    </div>
                </motion.div>

                {/* Spa Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {spaServices.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="p-8 rounded-3xl border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-full bg-[#0f2e25] flex items-center justify-center flex-shrink-0">
                                        <service.icon className="w-7 h-7 text-[#c8a96a]" />
                                    </div>
                                    <div>
                                        <h4
                                            className="text-2xl text-[#0f2e25] mb-2"
                                            style={{ fontFamily: "'Playfair Display', serif" }}
                                        >
                                            {service.title}
                                        </h4>
                                        <p
                                            className="text-[#0f2e25]/70"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-[#0f2e25]/10">
                                    <div className="grid grid-cols-2 gap-3">
                                        {service.treatments.map((treatment) => (
                                            <div
                                                key={treatment}
                                                className="text-sm text-[#0f2e25]/60 flex items-center gap-2"
                                                style={{ fontFamily: "'Inter', sans-serif" }}
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96a]" />
                                                {treatment}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Spa Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3
                        className="text-3xl md:text-4xl text-[#0f2e25] mb-8 text-center"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Spa Facilities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1662543713250-d734701de793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkaWMlMjBzcGElMjB3ZWxsbmVzcyUyMGtlcmFsYXxlbnwxfHx8fDE3NzMxMTc4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Ayurvedic Wellness"
                                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1758599879795-536d5f203de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBtZWRpdGF0aW9uJTIweW9nYSUyMHJvb218ZW58MXx8fHwxNzczMTE3ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Meditation & Yoga"
                                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBob3QlMjBzdG9uZSUyMHRoZXJhcHl8ZW58MXx8fHwxNzczMTE3ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Hot Stone Therapy"
                                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Spa Hours & Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16"
                >
                    <Card className="p-8 rounded-3xl border-none shadow-lg bg-[#0f2e25] text-center">
                        <h4
                            className="text-2xl text-[#c8a96a] mb-4"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Spa Operating Hours
                        </h4>
                        <p
                            className="text-[#e8eceb] text-lg mb-6"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Daily: 9:00 AM - 9:00 PM<br />
                            Last appointment at 7:30 PM
                        </p>
                        <p
                            className="text-[#e8eceb]/70 text-sm"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Advanced booking recommended · Couples treatments available · Private spa suites
                        </p>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
