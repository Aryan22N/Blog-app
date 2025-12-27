"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="w-full mt-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Left: Social Icons (Desktop only) */}
        <div className="hidden sm:flex items-center gap-3">
          <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
          <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
          <Image src="/youtube.png" alt="YouTube" width={24} height={24} />
          <Image src="/twitter.png" alt="Twitter" width={24} height={24} />
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide uppercase transition-all hover:scale-[1.02]"
        >
          Readify
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>

          <AuthLinks />
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-4 border-t pt-4">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            <AuthLinks />
          </div>
        </div>
      )}
    </motion.nav>
  );
}
