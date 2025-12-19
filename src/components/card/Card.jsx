import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <article className="w-full">
      <div
        className="
          flex flex-col md:flex-row
          gap-6 md:gap-8
        "
      >
        {/* Image */}
        <div className="w-full md:w-[350px] h-[350px] relative">
          <Image
            src="/p1.jpeg"
            alt="Featured Image"
            fill
            className="rounded-2xl object-cover shadow-lg"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex">
            <span className="text-sm text-gray-500 items-center justify-center">
              11.02.2023 -
            </span>
            <span className="text-sm text-red-500 pl-2"> CULTURE </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            neque fuga in dolore deserunt aut porro exercitationem, architecto
            suscipit reiciendis, obcaecati nisi molestias sapiente, numquam
            quis? Officia ex consectetur beatae?
          </p>

          <div className="mt-2 w-fit">
            <Link href="/" className="font-semibold">
              Read More
            </Link>
            <span className="block h-[2px] w-full bg-rose-400 transition-all group-hover:w-full "></span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
