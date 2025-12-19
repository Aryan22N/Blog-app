import React from "react";
import Link from "next/link";

const MenuCategories = () => {
  return (
    <aside className="w-full">
      <div className="rounded-2xl p-5 space-y-5">
        {/* Heading */}
        <div>
          <p className="text-sm uppercase text-gray-400 tracking-wide">
            Discover by Topics
          </p>
          <h1 className="text-xl font-bold">Categories</h1>
        </div>

        {/* Categories Grid */}
        <div
          className="
          grid grid-cols-2
          md:grid-cols-3
          gap-4
        "
        >
          {[
            { name: "Style", bg: "bg-[#57c4ff31]" },
            { name: "Food", bg: "bg-[#da85c731]" },
            { name: "Travel", bg: "bg-[#7fb88133]" },
            { name: "Culture", bg: "bg-[#ff795736]" },
            { name: "Coding", bg: "bg-[#ffb04f45]" },
            { name: "Fashion", bg: "bg-[#5e4fff31]" },
          ].map((cat) => (
            <Link
              key={cat.name}
              href="/"
              className={`
                ${cat.bg}
                flex items-center justify-center
                h-20
                rounded-2xl
                font-semibold text-sm
                shadow-sm
                hover:shadow-md
                hover:scale-[1.03]
                transition-all
              `}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default MenuCategories;
