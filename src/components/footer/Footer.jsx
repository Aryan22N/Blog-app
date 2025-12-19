import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-between">
          {/* Brand */}
          <div className="space-y-3 max-w-sm">
            <h1 className="text-2xl font-extrabold tracking-wide uppercase">
              Readify
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              Discover stories, thoughts, and ideas on technology, lifestyle,
              culture, and creativity.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h2 className="text-sm font-semibold mb-3">Explore</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold mb-3">Categories</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/">Style</Link>
                </li>
                <li>
                  <Link href="/">Food</Link>
                </li>
                <li>
                  <Link href="/">Travel</Link>
                </li>
                <li>
                  <Link href="/">Coding</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold mb-3">Legal</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Readify. All rights reserved.
          </p>

          <div className="flex gap-4 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="/" className="hover:text-gray-700">
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />{" "}
            </Link>
            <Link href="/" className="hover:text-gray-700">
              <Image src="/youtube.png" alt="YouTube" width={24} height={24} />{" "}
            </Link>
            <Link href="/" className="hover:text-gray-700">
              <Image src="/twitter.png" alt="Twitter" width={24} height={24} />{" "}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
