import React from "react";
import Image from "next/image";
import Link from "next/link";
import { error } from "console";

const bgColors = [
  "bg-[#57c4ff31]",
  "bg-[#da85c731]",
  "bg-[#7fb88133]",
  "bg-[#ff795736]",
  "bg-[#ffb04f45]",
  "bg-[#5e4fff31]",
];

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);

  if (!res.ok) {
    throw new Error("failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

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
        {data?.map((cat, index) => (
          <Link
            key={cat._id}
            href="/"
            className={`
              ${bgColors[index % bgColors.length]}
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
                alt={cat.slug}
                fill
                className="object-cover "
              />
            </div>
            <span className="text-sm font-semibold">{cat.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
