"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft, FaGlobe, FaAward, FaCoffee } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sun Day",
    role: "Head Barista, Troos Hotel.",
    text: "Uganda Gold Beans' Arabica keeps our customers coming back. The consistent quality and rich flavor profile are unmatched in the industry.",
    rating: 5,
    location: "New York, USA",
    logo: "/images/troos-previous.jpg",
  },
  {
    id: 2,
    name: "Sarah Kim",
    role: "Owner, Urban Brew Café",
    text: "The Bugisu AA has become our signature blend. Our customers love the wine-like acidity and chocolate notes.",
    rating: 5,
    location: "Seoul, South Korea",
    logo: "/brands/urbanbrew.png",
  },
  {
    id: 3,
    name: "Mike Torres",
    role: "Importer, Global Beans Ltd.",
    text: "Working with Uganda Gold Beans for years now. Ethical sourcing and premium quality make them our top African supplier.",
    rating: 5,
    location: "London, UK",
    logo: "/brands/globalbeans.png",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Executive Chef, Palma Resort",
    text: "The Kibale Forest Robusta adds incredible depth to our espresso blends. Guests always ask what coffee we use!",
    rating: 5,
    location: "Barcelona, Spain",
    logo: "/brands/palmaresort.png",
  },
  {
    id: 5,
    name: "Samuel Okello",
    role: "Manager, Kampala Grand Hotel",
    text: "Our guests appreciate the smoothness and aroma of Uganda Gold Beans. It’s the only coffee we trust for breakfast service.",
    rating: 5,
    location: "Kampala, Uganda",
    logo: "/brands/kampalagrand.png",
  },
  {
    id: 6,
    name: "Marie Dupont",
    role: "Procurement Lead, Café de Paris",
    text: "Elegant, balanced, and vibrant. Uganda Gold Beans have elevated our blends to fine-dining standards.",
    rating: 5,
    location: "Paris, France",
    logo: "/brands/cafedeparis.png",
  },
  {
    id: 7,
    name: "David Li",
    role: "CEO, BeanSquare Supermarket Chain",
    text: "Customers love our in-house Uganda Gold coffee corner. Sales doubled after switching to their beans.",
    rating: 5,
    location: "Beijing, China",
    logo: "/brands/beansquare.png",
  },
  {
    id: 8,
    name: "Lucy Ndlovu",
    role: "Founder, AfroBeans Café",
    text: "Authentically African and world-class quality. Uganda Gold Beans are our pride. Customers instantly notice the difference.",
    rating: 5,
    location: "Johannesburg, South Africa",
    logo: "/brands/afrobeans.png",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => setActive((prev) => (prev + 1) % testimonials.length), 6000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gradient-to-br from-amber-50 via-white to-yellow-50 overflow-hidden"
    >
      {/* Floating Coffee Beans */}
      {/* <div className="absolute top-10 left-10 text-amber-300 opacity-40 text-6xl animate-pulse">
        <FaCoffee />
      </div>
      <div className="absolute bottom-10 right-20 text-amber-200 opacity-40 text-7xl animate-pulse">
        <FaCoffee />
      </div> */}

      <div className="container mx-auto px-6 max-w-6xl text-center relative z-10">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow">
            <FaAward /> Trusted Brand
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-6 text-gray-900">
            Loved by <span className="text-amber-600">Hotels, Cafés & Supermarkets</span> Worldwide
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Partners choose <b>Vidapal Coffee</b> for premium quality, flavor, and ethical sourcing.
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.7 }}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="bg-white rounded-2xl shadow-xl p-10 border border-amber-100 mb-12"
          >
            <div className="flex flex-col items-center space-y-6">
              <FaQuoteLeft className="text-4xl text-amber-400 opacity-70" />
              <p className="text-xl text-gray-800 italic max-w-3xl">
                "{testimonials[active].text}"
              </p>
              <div className="flex flex-col items-center space-y-2">
                <Image
                  src={testimonials[active].logo}
                  alt={testimonials[active].name}
                  width={70}
                  height={70}
                  className="rounded-full shadow"
                />
                <h4 className="text-lg font-bold text-gray-900">
                  {testimonials[active].name}
                </h4>
                <p className="text-gray-600 text-sm">{testimonials[active].role}</p>
                <p className="flex items-center gap-2 text-amber-600 font-medium text-sm">
                  <FaGlobe /> {testimonials[active].location}
                </p>
                <div className="flex gap-1 mt-1">
                  {[...Array(testimonials[active].rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Small Partner Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center opacity-70">
          {testimonials.map((t) => (
            <div key={t.id} className="flex justify-center items-center hover:scale-110 transition">
              <Image
                src={t.logo}
                alt={t.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === active ? "bg-amber-600 scale-125" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
