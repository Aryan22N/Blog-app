import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <section className="w-full mt-8">
      {/* Heading */}
      <h1
        className="
        mx-auto max-w-7xl
        px-4 sm:px-6 lg:px-8
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        font-extrabold
        leading-tight
      "
      >
        <span className="block">Hey, Aryan !</span>
        Discover <span className="text-blue-600">some stories</span> and
        creative ideas.
      </h1>

      {/* Content */}
      <div
        className="
        mx-auto max-w-7xl
        flex flex-col-reverse md:flex-row
        gap-8 md:gap-12
        items-center
        px-4 sm:px-6 lg:px-8
        py-8
      "
      >
        {/* Text Content */}
        <div className="flex-1 space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>

          <button
            className="
            inline-block
            mt-4
            px-6 py-3
            text-sm sm:text-base
            font-semibold
            text-white
            bg-blue-600
            rounded-full
            hover:bg-blue-700
            transition
          "
          >
            Read More
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 w-full">
          <Image
            src="/p1.jpeg"
            alt="Featured Image"
            width={500}
            height={500}
            className="rounded-2xl object-cover w-full h-auto shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Featured;
