"use client";

import {
  // cardHover,
  // cardHoverSmall,
  fadeIn,
  fadeInDown,
  fadeInUp,
  staggerContainer,
} from "@/utils/animations";
import { motion } from "framer-motion";
import { DiPostgresql } from "react-icons/di";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { FaGitAlt, FaGithub } from "react-icons/fa6";
import { GiDirectionSigns, GiJourney } from "react-icons/gi";
import {
  SiBackendless,
  SiCss3,
  SiHtml5,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BigFiveResults } from "../components/TheBigFive";
import { BigFiveDetails } from "../components/BigFiveDetails";

export default function About() {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="text-center">
        <motion.h1
          className="mb-12 inline-block border-b-4 border-yellow-400 pb-2 text-center text-3xl font-bold"
          {...fadeInDown}
        >
          About Me
        </motion.h1>
      </div>

      {/* Bio Section */}
      <motion.section
        className="text-md text-secondary mx-auto mb-16 grid max-w-4xl grid-cols-1 items-start gap-8 text-justify md:grid-cols-2"
        {...fadeInUp}
      >
        <div className="space-y-6">
          <h3 className="text-primary flex items-center gap-3 text-xl font-semibold">
            <GiJourney className="text-black dark:text-yellow-600" /> My Journey
          </h3>
          <p className="text-secondary leading-relaxed">
            I’m a 25-year-old tech enthusiast who’s currently diving deep into
            full-stack web development through a bootcamp at Purwadhika. My
            journey started with self-teaching while working full-time as a
            General Affairs staff, where I dabbled in HTML, CSS, and a lot of
            JavaScript — which eventually led me to explore React and Next.js
            more seriously.
          </p>
          <p className="text-secondary leading-relaxed">
            I love the feeling of solving real-world problems with code.
            There&apos;s something deeply satisfying about getting direct,
            logical feedback from a machine — it’s honest, it’s clear, and it
            reflects exactly what I’ve built. One of my proudest moments was
            building a small internal tool (with raw JavaScript and NGROK, no
            less) that helped our legal team automate part of their BI reporting
            workflow. It wasn’t clean or perfect — but it worked and saved them
            hours of manual labor. That’s the magic of code, even in its
            roughest form.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-primary flex items-center gap-3 text-xl font-semibold">
            <GiDirectionSigns className="text-black dark:text-yellow-600" />{" "}
            Where I&apos;m Headed
          </h3>
          <p className="text-secondary leading-relaxed">
            Right now, I’m still finding my footing between frontend and
            backend, but I’m starting to see how the backend might be where I
            truly shine. I’m looking for opportunities as a junior developer
            where I can contribute to real projects, learn from senior devs, and
            finally feel that “I can do this” moment for real.
          </p>
          <p className="text-secondary leading-relaxed">
            Outside of coding, I’m a coffee nerd, a proud gamer, anime lover
            (WIBU), and a lover of rap, indie, classic, and rock music. Not a
            cat person, but hey — I do have a cat.
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <div className="text-center">
          <motion.h2
            className="mb-12 inline-block border-b-4 border-yellow-400 pb-2 text-center text-3xl font-bold"
            {...fadeInUp}
          >
            Skills
          </motion.h2>
        </div>
        <motion.div
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="dark:bg-dark/50 h-full rounded-lg bg-white p-6 shadow-md"
            variants={fadeInUp}
            // {...cardHover}
          >
            <div className="flex gap-2">
              <FaCode className="text-primary mb-4 h-8 w-8 dark:text-yellow-100" />
              <h3 className="text-primary mb-2 pt-0.5 text-xl font-semibold">
                Frontend
              </h3>
            </div>
            <ul className="text-secondary space-y-3 leading-relaxed">
              <li className="flex items-center gap-2">
                <SiReact className="dark:text-yellow-600" />
                <SiNextdotjs className="dark:text-yellow-600" />
                React / Next.js
              </li>
              <li className="flex items-center gap-2">
                <SiTypescript className="dark:text-yellow-600" />
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <SiTailwindcss className="dark:text-yellow-600" />
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <SiHtml5 className="dark:text-yellow-600" />
                <SiCss3 className="dark:text-yellow-600" />
                HTML5 / CSS3
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="dark:bg-dark/50 h-full rounded-lg bg-white p-6 shadow-md"
            variants={fadeInUp}
            // {...cardHover}
          >
            <div className="flex gap-2">
              <FaLaptopCode className="text-primary mb-4 h-8 w-8 dark:text-yellow-100" />
              <h3 className="text-primary mb-2 pt-0.5 text-xl font-semibold">
                Backend
              </h3>
            </div>
            <ul className="text-secondary space-y-3 leading-relaxed">
              <li className="flex items-center gap-2">
                <SiNodedotjs className="dark:text-yellow-600" />
                Node.js
              </li>
              <li className="flex items-center gap-2">
                <DiPostgresql className="dark:text-yellow-600" />
                PostgreSQL
              </li>
              <li className="flex items-center gap-2">
                <SiBackendless className="dark:text-yellow-600" />
                Backendless
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="dark:bg-dark/50 h-full rounded-lg bg-white p-6 shadow-md"
            variants={fadeInUp}
            // {...cardHover}
          >
            <div className="flex gap-2">
              <FaGraduationCap className="text-primary mb-4 h-8 w-8 dark:text-yellow-100" />
              <h3 className="text-primary mb-2 pt-0.5 text-xl font-semibold">
                Tools & Others
              </h3>
            </div>
            <ul className="text-secondary space-y-3 leading-relaxed">
              <li className="flex items-center gap-2">
                <FaGitAlt className="dark:text-yellow-600" />
                <FaGithub className="dark:text-yellow-600" />
                Git / GitHub
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <div className="text-center">
          <motion.h2
            className="mb-12 inline-block border-b-4 border-yellow-400 pb-2 text-center text-3xl font-bold"
            {...fadeInUp}
          >
            Work Experience
          </motion.h2>
        </div>
        <motion.div
          className="mx-auto max-w-3xl space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* NUSAPAY 2 */}
          <motion.div
            className="dark:bg-dark/60 rounded-lg border-2 border-yellow-300 bg-white p-6 shadow-lg transition-shadow duration-200 hover:shadow-2xl"
            variants={fadeInUp}
            // {...cardHoverSmall}
          >
            <h3 className="mb-2 text-2xl font-extrabold text-yellow-700 dark:text-yellow-300">
              Nusapay Solusi Indonesia
            </h3>
            <p className="text-primary mb-2">
              HRGA Division - General Affairs • Staff Employee • 2023
            </p>
            <ul className="text-secondary marker:text-primary list-inside list-disc space-y-3 leading-relaxed">
              <li>
                Manage and process procurement or purchase requests for goods
                and services needed for office operations.
              </li>
              <li>
                Prepare documentation and submission reports to ensure
                compliance with company procedures.
              </li>
              <li>
                Ensure the physical security of the office environment through
                coordination with internal and external security personnel.
              </li>
              <li>
                Conduct routine inspections of the office environment and
                infrastructure to prevent potential operational disruptions.
              </li>
              <li>
                Manage office inventory and assets, including maintenance,
                repairs, and optimal usage of facilities.
              </li>
              <li>
                Prepare regular asset inventory reports for evaluation and
                maintenance planning.
              </li>
              <li>
                Maintain communication and coordination with service vendors
                (e.g., for facility maintenance, IT support, and cleaning
                services).
              </li>
              <li>
                Evaluate vendor performance and ensure services meet established
                standards and contractual agreements.
              </li>
              <li>
                Manage building and office access systems, including access
                permissions for employees, guests, and third parties.
              </li>
              <li>
                Ensure access control procedures align with company policies and
                security standards.
              </li>
            </ul>
          </motion.div>

          {/* NUSAPAY 1 */}
          <motion.div
            className="dark:bg-dark/60 rounded-lg border-2 border-yellow-300 bg-white p-6 shadow-lg transition-shadow duration-200 hover:shadow-2xl"
            variants={fadeInUp}
            // {...cardHoverSmall}
          >
            <h3 className="mb-2 text-2xl font-extrabold text-yellow-700 dark:text-yellow-300">
              Nusapay Solusi Indonesia
            </h3>
            <p className="text-primary mb-2">
              HRGA Division - HR Assistant • Staff Employee • 2022
            </p>
            <ul className="text-secondary marker:text-primary list-inside list-disc space-y-3 leading-relaxed">
              <li>Manage and document employee-related-information</li>
              <li>Research and understand employee-related regulations</li>
            </ul>
          </motion.div>

          {/* DAMN COFFEE */}
          <motion.div
            className="dark:bg-dark/60 rounded-lg border-2 border-yellow-300 bg-white p-6 text-justify shadow-lg transition-shadow duration-200 hover:shadow-2xl"
            variants={fadeInUp}
            // {...cardHoverSmall}
          >
            <h3 className="mb-2 text-2xl font-extrabold text-yellow-700 dark:text-yellow-300">
              Damn Coffee
            </h3>
            <p className="text-primary mb-2">
              Pretty Much Almost Everything • Employee • 2021
            </p>
            <ul className="text-secondary marker:text-primary list-inside list-disc space-y-3 leading-relaxed">
              <li>Documenting and creating SOP for food and beverages</li>
              <li>Communicate and handle suppliers</li>
              <li>Innovate new products</li>
              <li>
                Surveying Coffee Machine and base materials used for food and
                beverages
              </li>
              <li>Back-up Barista</li>
              <li>Handle digital payment and POS tools used</li>
              <li>Documenting and creating COGS of every products</li>
            </ul>
          </motion.div>

          {/* MULYANA ABRAR ADVOCATE */}
          <motion.div
            className="dark:bg-dark/60 rounded-lg border-2 border-yellow-300 bg-white p-6 text-justify shadow-lg transition-shadow duration-200 hover:shadow-2xl"
            variants={fadeInUp}
            // {...cardHoverSmall}
          >
            <h3 className="mb-2 text-2xl font-extrabold text-yellow-700 dark:text-yellow-300">
              Mulyana Abrar Advocate
            </h3>
            <p className="text-primary mb-2">Paralegal • Internship • 2021</p>
            <ul className="text-secondary marker:text-primary list-inside list-disc space-y-3 leading-relaxed">
              <li>
                Researching and compiling relevant regulations for a particular
                compliances case
              </li>
              <li>Drafting and editing General Shareholder Meeting</li>
              <li>
                Help manage techonological tools used by the lawfirm (e.g.
                Google Workspace, Microsoft Outlook Accounts)
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <div className="text-center">
          <motion.h2
            className="mb-12 inline-block border-b-4 border-yellow-400 pb-2 text-center text-3xl font-bold"
            {...fadeInUp}
          >
            Education
          </motion.h2>
        </div>
        <motion.div
          className="mx-auto max-w-3xl space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="dark:bg-dark/50 rounded-lg bg-white p-6 shadow-md"
            variants={fadeInUp}
            // {...cardHoverSmall}
          >
            <h3 className="mb-2 text-xl font-semibold">Purwadhika</h3>
            <p className="text-primary mb-2">
              Bootcamp • Fullstack Developer • 2025
            </p>
            {/* <p className="text-secondary">lorem ipsum dolor sit amet</p> */}
          </motion.div>
          <motion.div
            className="dark:bg-dark/50 rounded-lg bg-white p-6 shadow-md"
            variants={fadeInUp}
            // {...cardHoverSmall}
          >
            <h3 className="mb-2 text-xl font-semibold">
              Universitas Terbuka (On Progress)
            </h3>
            <p className="text-primary mb-2">
              College • Information System Undergraduate • 2023
            </p>
            {/* <p className="text-secondary">lorem ipsum dolor sit amet</p> */}
          </motion.div>
          <motion.div
            className="dark:bg-dark/50 rounded-lg bg-white p-6 shadow-md"
            variants={fadeInUp}
            // {...cardHoverSmall}
          >
            <h3 className="mb-2 text-xl font-semibold">
              University of Indonesia
            </h3>
            <p className="text-primary mb-2">
              College • Law Undergraduate • 2017
            </p>
            {/* <p className="text-secondary">lorem ipsum dolor sit amet</p> */}
          </motion.div>
          <motion.div
            className="dark:bg-dark/50 rounded-lg bg-white p-6 shadow-md"
            variants={fadeInUp}
            // {...cardHoverSmall}
          >
            <h3 className="mb-2 text-xl font-semibold">John Robert Powers</h3>
            <p className="text-primary mb-2">
              Personal Development • Public Speaking Programs • 2016
            </p>
            {/* <p className="text-secondary">lorem ipsum dolor sit amet</p> */}
          </motion.div>
          <motion.div
            className="dark:bg-dark/50 rounded-lg bg-white p-6 shadow-md"
            variants={fadeInUp}
            // {...cardHoverSmall}
          >
            <h3 className="mb-2 text-xl font-semibold">
              Insan Cendekia Madani
            </h3>
            <p className="text-primary mb-2">
              High School • Science Class • 2013
            </p>
            {/* <p className="text-secondary">lorem ipsum dolor sit amet</p> */}
          </motion.div>
          <motion.div
            className="dark:bg-dark/50 rounded-lg bg-white p-6 shadow-md"
            variants={fadeInUp}
            // {...cardHoverSmall}
          >
            <h3 className="mb-2 text-xl font-semibold">Bina Nusantara</h3>
            <p className="text-primary mb-2">
              Middle School • ICT Class • 2010
            </p>
            {/* <p className="text-secondary">lorem ipsum dolor sit amet</p> */}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Big Five Results */}
      <BigFiveResults />
      <BigFiveDetails />
    </div>
  );
}
