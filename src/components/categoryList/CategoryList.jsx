import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-6">Popular Categories</h1>

      {/* Categories */}
      <div
        className=" grid grid-cols-2 gap-4
          sm:flex sm:flex-wrap
          sm:gap-4
          sm:justify-start
        "
      >
        {/* Category Card */}
        {[
          { name: "Style", img: "/style.png", bg: "bg-[#57c4ff31]" },
          { name: "Food", img: "/food.png", bg: "bg-[#da85c731]" },
          { name: "Travel", img: "/travel.png", bg: "bg-[#7fb88133]" },
          { name: "Culture", img: "/culture.png", bg: "bg-[#ff795736]" },
          { name: "Coding", img: "/coding.png", bg: "bg-[#ffb04f45]" },
          { name: "Fashion", img: "/fashion.png", bg: "bg-[#5e4fff31]" },
        ].map((cat) => (
          <Link
            key={cat.name}
            href="/"
            className={`
              ${cat.bg}
              flex items-center gap-3 justify-center
              px-5
              h-20
              w-full sm:w-[180px]
              rounded-2xl
              shadow-sm
              hover:shadow-md
              hover:scale-[1.03]
              transition-all
            `}
          >
            <div className="relative w-10 h-10 rounded-full items-center justify-center overflow-hidden">
              <Image
                src={cat.img}
                alt={cat.name}
                fill
                className="object-cover "
              />
            </div>
            <span className="text-sm font-semibold">{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
