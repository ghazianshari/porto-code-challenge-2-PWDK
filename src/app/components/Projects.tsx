"use client";

import { fadeInUp, staggerContainer } from "@/utils/animations";
import { motion } from "framer-motion";
import ProjectCardMap from "./ProjectCardMap";

export default function Projects() {
  return (
    <section className="py-20">
      <div data-aos="fade-up" className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <motion.h2
            className="mb-12 inline-block border-b-4 border-yellow-400 pb-2 text-center text-3xl font-bold"
            {...fadeInUp}
          >
            Featured Projects
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* PROJECT CARD MAPPING */}
          <ProjectCardMap start={0} end={3} />
        </motion.div>
      </div>
    </section>
  );
}
