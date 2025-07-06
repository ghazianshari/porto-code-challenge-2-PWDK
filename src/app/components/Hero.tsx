'use client'

import { fadeIn, fadeInUp, scaleIn } from '@/utils/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="py-28">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className='flex justify-center items-center mb-4'
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image src="/ghazi/ghazi-hero-profile-img.jpg" alt="profile" width={100} height={100} className="rounded-full mb-4 w-25 h-25 object-cover ring-2 ring-primary" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m <motion.span
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              ghazi anshari
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <span className='text-red-400'>Human</span> | <span className='text-green-400'>Earth</span> | <span className='text-yellow-400'>Full-stack Developer</span>
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
          </motion.div>
          <motion.div
            className="flex flex-col md:flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="bg-primary dark:text-black font-bold inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-block font-bold w-full bg-gray-500  md:w-auto text-white dark:text-black px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 