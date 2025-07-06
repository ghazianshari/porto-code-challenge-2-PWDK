'use client'

import { fadeInUp, staggerContainer } from '@/utils/animations'
import { motion } from 'framer-motion'
import ProjectCardMap from './ProjectCardMap'

export default function Projects() {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className='text-center'>
          <motion.h2
            className="inline-block text-3xl font-bold mb-12 text-center border-b-4 border-yellow-400 pb-2"
            {...fadeInUp}
          >
            Featured Projects
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* PROJECT CARD MAPPING */}
          <ProjectCardMap start={0} end={3} />
        </motion.div>
      </div>
    </section>
  )
} 