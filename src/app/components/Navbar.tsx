"use client";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { MdHome } from "react-icons/md";
import { MdEmojiPeople } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Home", icon: MdHome },
    { href: "/about", label: "About", icon: MdEmojiPeople },
    { href: "/projects", label: "Projects", icon: MdWork },
    // { href: '/blogs', label: 'Blogs', icon: MdHome },
    { href: "/contact", label: "Contact", icon: MdLocalPhone },
  ];

  return (
    <nav className="dark:bg-dark/80 fixed z-50 w-full bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-full px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-primary text-xl font-bold">
            {/* tukiman&trade; */}
            <Image
              src="/logo/tgma-logo-clean.png"
              alt="logo"
              width={150}
              height={0}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            <div className="hidden space-x-12 md:flex md:space-x-8 lg:flex">
              {menuItems.map((item) => (
                <motion.button
                  key={item.href}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    key={item.href}
                    href={item.href}
                    className="hover:text-primary flex items-center gap-1 transition-colors"
                  >
                    {item.icon && <item.icon />}
                    {item.label}
                  </Link>
                </motion.button>
              ))}
            </div>
            <motion.button
              onClick={toggleTheme}
              className="rounded-lg bg-black p-2 text-sm font-bold text-yellow-600 transition-colors dark:bg-white dark:text-black"
              whileHover={{ scale: 1.0666 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? (
                <div className="flex gap-1.5">
                  <SunIcon className="h-5 w-5" />
                  Let There Be Light
                </div>
              ) : (
                <div className="flex gap-1.5">
                  <MoonIcon className="h-5 w-5" />
                  <p>Join the Darkside</p>
                </div>
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="rounded-lg p-2 transition-colors hover:bg-gray-100 md:hidden dark:hover:bg-gray-800"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="space-y-4 py-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="hover:text-primary flex items-center gap-1 py-2 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon && <item.icon />}
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                >
                  <button
                    onClick={() => {
                      toggleTheme();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center rounded-lg bg-black p-2 text-sm font-bold text-yellow-600 transition-colors dark:bg-white dark:text-black"
                  >
                    {theme === "dark" ? (
                      <>
                        <SunIcon className="mr-2 h-5 w-5" />
                        Let There Be Light
                      </>
                    ) : (
                      <>
                        <MoonIcon className="mr-2 h-5 w-5" />
                        Join The Darkside
                      </>
                    )}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
