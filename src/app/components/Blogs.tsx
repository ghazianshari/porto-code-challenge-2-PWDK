"use client";

import { blogs } from "@/contents/blogs";
import { cardHoverSmall, fadeInUp, staggerContainer } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

export default function Blogs() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold"
          {...fadeInUp}
        >
          Latest Blog Posts
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.slug}
              className="dark:bg-dark/50 rounded-lg bg-white p-6 shadow-md"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <Link href={`/blogs/${blog.slug}`}>
                <motion.h3
                  className="hover:text-primary mb-2 text-xl font-semibold transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {blog.title}
                </motion.h3>
              </Link>
              <motion.p
                className="mb-4 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {blog.excerpt}
              </motion.p>
              <motion.div
                className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.span
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCalendarAlt className="mr-2" />
                  {new Date(blog.date).toLocaleDateString()}
                </motion.span>
                <motion.span
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaClock className="mr-2" />
                  {blog.readTime}
                </motion.span>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/blogs"
              className="bg-primary hover:bg-primary/90 inline-block rounded-lg px-8 py-3 text-white transition-colors"
            >
              View All Posts
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
