"use client";

import { motion } from "framer-motion";
import { Coffee, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100">
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute inset-0 bg-[url('/coffee-bg.jpg')] bg-cover bg-center opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      ></motion.div>

      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-12 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center mb-6 space-x-3">
            <Coffee className="w-10 h-10 text-amber-700" />
            <Cpu className="w-10 h-10 text-gray-700" />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Brewing Innovation with Every Cup
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            At <span className="font-semibold text-amber-700">Vidapal Coffee Tech</span>, 
            we blend premium roasted coffee with cutting-edge technology — 
            fueling creativity, connection, and progress.
          </p>

          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-xl text-lg transition duration-200">
              Shop Coffee
            </button>
            <button className="border border-amber-700 text-amber-700 hover:bg-amber-50 font-semibold px-6 py-3 rounded-xl text-lg transition duration-200">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
