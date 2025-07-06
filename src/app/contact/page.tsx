"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
} from "@/utils/animations";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

// DOING THESE GROUP OF CONST IS TO AVOID SCRAPPER/SPAMMER
const user = "ghazi.anshari";
const domain = "gmail.com";
const email = `${user}@${domain}`;
const whatsApp = "+62 (813) 8042-4606".split("").join("");
const phone = "+62 (851) 7523-5686".split("").join("");

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container mx-auto max-w-7xl py-12">
      <div className="text-center">
        <motion.h1
          className="mb-8 inline-block border-b-4 border-yellow-400 pb-2 text-center text-4xl font-bold"
          {...fadeInUp}
        >
          Contact Me
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Contact Information */}
        <motion.div className="space-y-8" {...slideInLeft}>
          <motion.div {...fadeInUp}>
            <h2 className="mb-4 text-2xl font-semibold">Get in Touch</h2>
            <p className="text-secondary">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your visions.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            {/* email */}
            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href={`mailto:${email}`}
                  className="text-secondary hover:text-primary"
                >
                  {email}
                </a>
              </div>
            </motion.div>

            {/* whatsapp */}
            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaWhatsapp className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold">Whatsapp</h3>
                <a
                  href="https://wa.me/6281380424606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary"
                >
                  {whatsApp}
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhone className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a
                  href="tel:+6285175235686"
                  className="text-secondary hover:text-primary"
                >
                  {phone}
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkerAlt className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-secondary">Knowhere</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="dark:bg-dark/50 rounded-lg bg-white p-6 shadow-md"
          {...slideInRight}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Awaludin"
                required
                className="dark:bg-dark focus:ring-primary w-full rounded-md border border-gray-300 bg-white px-4 py-2 focus:border-transparent focus:ring-2 dark:border-gray-700"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="udinyangpertama@gmail.com"
                required
                className="dark:bg-dark focus:ring-primary w-full rounded-md border border-gray-300 bg-white px-4 py-2 focus:border-transparent focus:ring-2 dark:border-gray-700"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Halo ghazi anda sangat keren"
                required
                rows={4}
                className="dark:bg-dark focus:ring-primary w-full rounded-md border border-gray-300 bg-white px-4 py-2 focus:border-transparent focus:ring-2 dark:border-gray-700"
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              className="btn btn-primary w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <motion.p
                className="text-center text-green-500"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully!
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                className="text-center text-red-500"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
