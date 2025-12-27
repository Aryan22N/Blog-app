"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import { getFirstName } from "../../utils/getFirstName";
import Link from "next/link";

const ROTATION_TIME = 20000; //2 sec

const Featured = () => {
  const { data: session, status } = useSession(); //data ko session se rename kiya haii just for readibility

  const [featuredNews, setFeaturedNews] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  //  Fetch featured news from backend
  useEffect(() => {
    async function fetchFeatured() {
      try {
        const res = await fetch("/api/news/featured");
        const data = await res.json();
        setFeaturedNews(data || []);
      } catch (error) {
        console.error("Failed to fetch featured news", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFeatured();
  }, []);

  //  Rotate featured news
  useEffect(() => {
    if (!featuredNews.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % featuredNews.length);
    }, ROTATION_TIME);

    return () => clearInterval(interval);
  }, [featuredNews]);

  if (status === "loading" || loading) {
    return (
      <section className="w-full mt-10 md:mt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-[420px] rounded-2xl bg-gray-100 animate-pulse" />
        </div>
      </section>
    );
  }
  if (!featuredNews.length) return null;

  const current = featuredNews[index];

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
            {/* LIVE + META */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-2 px-3 py-1 text-xs font-semibold text-red-600 bg-red-50 rounded-full">
                <span className="h-2 w-2 bg-red-600 rounded-full animate-pulse" />
                LIVE
              </span>

              <span className="text-xs font-semibold text-blue-600 uppercase">
                {current.category} •{" "}
                {new Date(current.publishedAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current._id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug mt-2">
                  {current.title}
                </h2>

                {/* INSIGHT */}
                {current.insight && (
                  <p className="mt-4 text-sm sm:text-base text-gray-700 italic border-l-4 border-blue-500 pl-4">
                    {" "}
                    {current.insight}
                  </p>
                )}

                {/* CTA + Progress */}
                <div className="mt-6">
                  <Link
                    href={current.sourceUrl}
                    target="_blank"
                    className="inline-block w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition text-center"
                  >
                    Read More
                  </Link>
                  <div className="mt-4 h-1 w-full bg-gray-200 rounded overflow-hidden">
                    <motion.div
                      key={index}
                      className="h-full bg-blue-600"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: ROTATION_TIME / 1000,
                        ease: "linear",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* PULSE */}
            {current.pulse?.length > 0 && (
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
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </section>
  );
};

export default Featured;
