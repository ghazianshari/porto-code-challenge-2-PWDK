"use client";

import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-20">
      <div data-aos="fade-up" className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <motion.h2
            className="mb-12 inline-block border-b-4 border-yellow-400 pb-2 text-center text-3xl font-bold"
            {...fadeInUp}
          >
            About Me
          </motion.h2>
        </div>

        <motion.p className="text-secondary mx-auto mb-16 max-w-5xl text-justify text-lg">
          I’m a 25-year-old tech enthusiast who’s currently diving deep into
          full-stack web development through a bootcamp at Purwadhika. My
          journey started with self-teaching while working full-time as a
          General Affairs staff, where I dabbled in HTML, CSS, and a lot of
          JavaScript — which eventually led me to explore React and Next.js more
          seriously.
        </motion.p>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/about"
              className="bg-primary hover:bg-primary/90 inline-block rounded-lg px-8 py-3 font-bold text-white transition-colors dark:text-black"
            >
              Know me More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
