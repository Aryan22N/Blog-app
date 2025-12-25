"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import { getFirstName } from "../../utils/getFirstName";

const TRENDING_NEWS = [
  {
    id: 1,
    title: "ISRO prepares for its next major space launch mission",
    description:
      "India’s space agency announces a new launch window for its upcoming satellite deployment.",
    image: "/p1.jpeg",
    category: "Space",
    publishedAt: "25 mins ago",
    insight: "India’s space ambitions gain momentum with this upcoming launch.",
    pulse: ["High global interest", "Rising discussion", "Fresh updates"],
  },
  {
    id: 2,
    title: "OpenAI releases a new AI model focused on advanced reasoning",
    description:
      "The model aims to improve multi-step problem solving and developer productivity.",
    image: "/travel.png",
    category: "AI",
    publishedAt: "15 mins ago",
    insight: "AI systems move closer to human-like reasoning capabilities.",
    pulse: ["High interest", "Rising dominance", "Less updates"],
  },
  {
    id: 3,
    title: "Global markets respond to fresh inflation data",
    description:
      "Investors react as new economic indicators influence market sentiment worldwide.",
    image: "/culture.png",
    category: "Markets",
    publishedAt: "40 mins ago",
    insight:
      "Economic signals reshape global investor confidence and strategy.",
    pulse: ["Low global jhs", "shining racE", "live updates"],
  },
];

const Featured = () => {
  const { data: session, status } = useSession();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TRENDING_NEWS.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  if (status === "loading") return null;

  const current = TRENDING_NEWS[index];

  return (
    <section className="w-full mt-10 md:mt-14">
      {/* Greeting */}
      <h1 className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
        <span className="block">Hey, {getFirstName(session?.user?.name)}!</span>
        Discover <span className="text-blue-600">what’s trending</span> right
        now.
      </h1>

      {/* Hero */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* IMAGE */}
          <div className="w-full md:flex-1 order-1 md:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.image}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1.02 }}
                exit={{ opacity: 0, scale: 1.06 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-[240px] sm:h-[280px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* TEXT */}
          <div className="w-full md:flex-1 max-w-xl order-2 md:order-1 space-y-4">
            {/* LIVE + TAG */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-2 px-3 py-1 text-xs font-semibold text-red-600 bg-red-50 rounded-full">
                <span className="h-2 w-2 bg-red-600 rounded-full animate-pulse" />
                LIVE
              </span>

              <span className="text-xs font-semibold text-blue-600 uppercase">
                {current.category} • {current.publishedAt}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug mt-2">
                  {current.title}
                </h2>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-3">
                  {current.description}
                </p>

                {/* CTA + Progress */}
                <div className="mt-6">
                  <button className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition">
                    Read More
                  </button>

                  <div className="mt-4 h-1 w-full bg-gray-200 rounded overflow-hidden">
                    <motion.div
                      key={index}
                      className="h-full bg-blue-600"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 20, ease: "linear" }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/*  CONTEXT STRIP (SYNCED) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.pulse.join("")}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-6"
              >
                <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                  Live pulse
                </p>
                <div className="flex flex-wrap gap-3 text-sm font-medium text-gray-700">
                  {current.pulse.map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </section>
  );
};

export default Featured;
