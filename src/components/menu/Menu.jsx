import React from "react";
import Link from "next/link";
import Image from "next/image";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <aside className="w-full lg:max-w-sm">
      <div className=" rounded-2xl  p-5 space-y-5">
        {/* Heading */}
        <div>
          <p className="text-sm uppercase text-gray-400 tracking-wide">
            {"what's hot"}
          </p>
          <h1 className="text-xl font-bold">Most Popular</h1>
        </div>

        {/* Popular Post */}
        <Link
          href="/"
          className="
            flex items-start gap-4

            p-2 rounded-xl
            transition
          "
        >
          {/* Content */}
          <div className="flex flex-col gap-1">
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 rounded-full bg-amber-200 text-amber-800 text-xs font-semibold w-fit">
              Travel
            </span>
            <h2 className="text-sm font-semibold leading-snug">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>

            <div className="text-xs text-gray-500">
              <span>John Doe</span>
              <span className="mx-1">•</span>
              <span>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="
            flex items-start gap-4

            p-2 rounded-xl
            transition
          "
        >
          {/* Content */}
          <div className="flex flex-col gap-1">
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 rounded-full bg-red-200 text-amber-800 text-xs font-semibold w-fit">
              Culture
            </span>
            <h2 className="text-sm font-semibold leading-snug">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>

            <div className="text-xs text-gray-500">
              <span>John Doe</span>
              <span className="mx-1">•</span>
              <span>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="
            flex items-start gap-4

            p-2 rounded-xl
            transition
          "
        >
          {/* Content */}
          <div className="flex flex-col gap-1">
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 rounded-full bg-amber-200 text-amber-800 text-xs font-semibold w-fit">
              Food
            </span>
            <h2 className="text-sm font-semibold leading-snug">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>

            <div className="text-xs text-gray-500">
              <span>John Doe</span>
              <span className="mx-1">•</span>
              <span>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="
            flex items-start gap-4

            p-2 rounded-xl
            transition
          "
        >
          {/* Content */}
          <div className="flex flex-col gap-1">
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 rounded-full bg-blue-200 text-blue-800 text-xs font-semibold w-fit">
              Fashion
            </span>
            <h2 className="text-sm font-semibold leading-snug">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>

            <div className="text-xs text-gray-500">
              <span>John Doe</span>
              <span className="mx-1">•</span>
              <span>10.03.2023</span>
            </div>
          </div>
        </Link>
      </div>

      <div>
        <MenuCategories />
      </div>

      <div className=" rounded-2xl  p-5 ">
        <p className="text-sm uppercase text-gray-400 tracking-wide">
          {"Chosen by editors"}
        </p>
        <h1 className="text-xl font-bold">Editors Pick</h1>
      </div>

      {/* Editors Pick Posts */}
      <div className=" space-y-5">
        <Link
          href="/"
          className="
            flex items-start gap-4

            p-2 rounded-xl
            transition
          "
        >
          {/* Image */}
          <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/p1.jpeg"
              alt="Popular Image"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-1">
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 rounded-full bg-amber-200 text-amber-800 text-xs font-semibold w-fit">
              Travel
            </span>
            <h2 className="text-sm font-semibold leading-snug">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>

            <div className="text-xs text-gray-500">
              <span>John Doe</span>
              <span className="mx-1">•</span>
              <span>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="
            flex items-start gap-4

            p-2 rounded-xl
            transition
          "
        >
          {/* Image */}
          <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/p1.jpeg"
              alt="Popular Image"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-1">
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 rounded-full bg-red-200 text-amber-800 text-xs font-semibold w-fit">
              Culture
            </span>
            <h2 className="text-sm font-semibold leading-snug">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>

            <div className="text-xs text-gray-500">
              <span>John Doe</span>
              <span className="mx-1">•</span>
              <span>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="
            flex items-start gap-4

            p-2 rounded-xl
            transition
          "
        >
          {/* Image */}
          <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/p1.jpeg"
              alt="Popular Image"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-1">
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 rounded-full bg-amber-200 text-amber-800 text-xs font-semibold w-fit">
              Food
            </span>
            <h2 className="text-sm font-semibold leading-snug">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>

            <div className="text-xs text-gray-500">
              <span>John Doe</span>
              <span className="mx-1">•</span>
              <span>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="
            flex items-start gap-4

            p-2 rounded-xl
            transition
          "
        >
          {/* Image */}
          <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/p1.jpeg"
              alt="Popular Image"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-1">
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 rounded-full bg-blue-200 text-blue-800 text-xs font-semibold w-fit">
              Fashion
            </span>
            <h2 className="text-sm font-semibold leading-snug">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>

            <div className="text-xs text-gray-500">
              <span>John Doe</span>
              <span className="mx-1">•</span>
              <span>10.03.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Menu;
