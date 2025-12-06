"use client";

import { motion } from "framer-motion";
import { Coffee, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Herograndhub() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden"  id="home">
      {/* Background Image */}
      <div className="absolute inset-0 -z-1">
        <Image
        src="/images/coffee.png"  // Note: starts with /
        alt="Coffee Background"
        fill
        className="object-cover opacity-40"
        priority // optional: for above-the-fold images
      />
        {/* <Image
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          alt="Coffee Background"
          fill
          className="object-cover opacity-40"
        /> */}
        {/* <img
  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  alt="Coffee Background"
  className="absolute inset-0 w-full h-full object-cover opacity-40"
/> */}
      </div>

      {/* Floating Decorative Icons */}
      <motion.div
        className="absolute top-10 left-10 text-yellow-400"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Coffee size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-blue-400"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Rocket size={40} />
      </motion.div>

      {/* Hero Content */}
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Discover <span className="text-yellow-400">Premium</span> Taste <br />
        In Grand Hub
      </motion.h1>

      <motion.p
        className="max-w-2xl text-lg text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Savor the aroma, experience the excellence. Crafted for true coffee
        lovers who value quality and passion in every sip.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Link
          href="/shop"
          className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Shop Now
        </Link>
        <Link
          href="/about"
          className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
        >
          Learn More
        </Link>
      </motion.div>
    </section>
  );
}
