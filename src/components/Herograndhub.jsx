"use client";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Herograndhub() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-amber-900 via-stone-800 to-black text-white overflow-hidden" id="home">
      {/* Background */}
      <div className="absolute inset-0 -z-1">
        <Image
        src="/images/cafe-interior.png"  // Note: starts with /
        alt="Coffee Background"
        fill
        className="object-cover opacity-40"
        priority // optional: for above-the-fold images
      />
            </div>


      {/* Floating Coffee Icons */}
      {/* <motion.div className="absolute top-20 left-10 text-amber-300" animate={{ y: [0, 20, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <Coffee size={48} />
      </motion.div>
      <motion.div className="absolute bottom-20 right-14 text-amber-400" animate={{ y: [0, -20, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>
        <Coffee size={56} />
      </motion.div> */}

      {/* Hero Content */}
      <motion.h1
        className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Brew & <span className="text-amber-400">Bean</span>
      </motion.h1>

      <motion.p
        className="max-w-2xl text-xl md:text-2xl text-amber-100 mb-10 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.9 }}
      >
        Handcrafted espresso, perfectly steamed milk, and fresh pastries made daily.
        Your neighborhood café where every cup is brewed with love.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <Link href="#menu" className="bg-amber-500 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-amber-400 transition shadow-lg">
          See Menu
        </Link>
        <Link href="#contact" className="border-2 border-amber-400 px-8 py-4 rounded-full text-lg font-bold hover:bg-amber-400 hover:text-black transition">
          Visit Us
        </Link>
      </motion.div>
    </section>
  );
}