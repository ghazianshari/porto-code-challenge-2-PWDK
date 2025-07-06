"use client";

import { fadeIn, fadeInUp, scaleIn } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            className="mb-4 flex items-center justify-center"
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/ghazi/ghazi-hero-profile-img.jpg"
              alt="profile"
              width={100}
              height={100}
              className="ring-primary mb-4 h-25 w-25 rounded-full object-cover ring-2"
            />
          </motion.div>
          <motion.h1
            className="mb-6 text-4xl font-bold md:text-6xl"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m{" "}
            <motion.span
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              ghazi anshari
            </motion.span>
          </motion.h1>
          <motion.p
            className="mb-8 text-xl text-gray-600 md:text-2xl dark:text-gray-300"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <span className="text-red-400">Human</span> |{" "}
            <span className="text-green-400">Earth</span> |{" "}
            <span className="text-yellow-400">Full-stack Developer</span>
          </motion.p>
          <motion.div
            className="mb-8 flex justify-center space-x-4"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary dark:hover:text-primary text-2xl text-gray-600 transition-colors dark:text-gray-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary dark:hover:text-primary text-2xl text-gray-600 transition-colors dark:text-gray-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary dark:hover:text-primary text-2xl text-gray-600 transition-colors dark:text-gray-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center gap-4 md:flex-row"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="bg-primary hover:bg-primary/90 inline-block w-full rounded-lg px-8 py-3 font-bold text-white transition-colors md:w-auto dark:text-black"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block w-full rounded-lg bg-gray-500 px-8 py-3 font-bold text-white transition-colors hover:bg-gray-300 md:w-auto dark:text-black dark:hover:bg-gray-600"
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
