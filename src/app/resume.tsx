/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "@material-tailwind/react";

const educationData = [
  {
    title: "B.Tech in Computer Science and Engineering",
    institution: "Bharath Institute of Higher Education and Research",
    date: "2021 - 2025",
  },
  {
    title: "HSC",
    institution: "Ramakrishna Mission Vidyalaya Matric Higher Secondary School",
    date: "2019 - 2021",
  },
  {
    title: "SSLC",
    institution: "Ramakrishna Mission Vidyalaya Matric Higher Secondary School",
    date: "2017 - 2019",
  },
];

const experienceData = [
  {
    title: "Backend Developer",
    institution: "Contract",
    date: "Jan 2025 - Feb 2025",
  },
];

export default function Qualifications() {
  const [tab, setTab] = useState<"experience" | "education">("experience");
  const data = tab === "experience" ? experienceData : educationData;

  return (
    <section id="qualification" className="bg-gray-100 py-28 px-6">
      <div className="font-sora max-w-6xl mx-auto">
        <Typography
          variant="h2"
          className="text-center text-4xl md:text-5xl font-sora mb-14"
        >
          Qualification
        </Typography>

        {/* Tabs */}
        <div className="flex justify-center gap-10 mb-20">
          {["experience", "education"].map((key) => (
            <button
              key={key}
              onClick={() => setTab(key as "experience" | "education")}
              className={`text-xl font-semibold border-b-2 pb-1 transition-all ${
                tab === key
                  ? "text-black border-black"
                  : "text-gray-600 border-transparent"
              }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>

        {/* Timeline - Mobile (single column) */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            {data.map((item, idx) => (
              <motion.div
                key={`${tab}-${idx}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="mb-16 relative w-full pl-8"
              >
                <div className="absolute left-0 top-2 w-5 h-5 bg-black rounded-full border-4 border-white shadow-md z-10" />
                <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                <p className="text-gray-800 font-medium text-lg">{item.institution}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Timeline - Desktop (split columns) */}
        <div className="hidden md:relative md:flex md:grid md:grid-cols-2 gap-12">
          {/* Vertical Line */}
          <motion.div
            key={tab}
            className="hidden md:block absolute left-1/2 top-0 w-1 bg-black transform -translate-x-1/2 rounded"
            initial={{ height: 0 }}
            animate={{ height: `${data.length * 160}px` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Left Side: Experience */}
          <div className="flex flex-col items-start md:items-end pr-4 md:pr-10">
            <AnimatePresence mode="wait">
              {tab === "experience" &&
                experienceData.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="mb-16 relative w-full max-w-lg text-right"
                  >
                    <div className="absolute right-[-30px] top-2 w-5 h-5 bg-black rounded-full border-4 border-white shadow-md z-10" />
                    <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                    <p className="text-gray-800 font-medium text-lg">{item.institution}</p>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          {/* Right Side: Education */}
          <div className="flex flex-col items-start pl-4 md:pl-10">
            <AnimatePresence mode="wait">
              {tab === "education" &&
                educationData.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="mb-16 relative w-full max-w-lg"
                  >
                    <div className="absolute left-[-30px] top-2 w-5 h-5 bg-black rounded-full border-4 border-white shadow-md z-10" />
                    <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                    <p className="text-gray-800 font-medium text-lg">{item.institution}</p>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}