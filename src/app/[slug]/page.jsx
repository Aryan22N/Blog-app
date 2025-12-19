import React from "react";
import Image from "next/image";
import Menu from "../../components/menu/Menu";
import Comments from "../../components/comments/Comments";

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article
          className="
    max-w-7xl mx-auto
    flex flex-col lg:flex-row
    gap-8
    items-start
  "
        >
          {/* Title */}
          <div className="flex-[1.2] space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            {/* profile */}
            <div className="flex items-center md:pt-9 gap-4 text-sm text-gray-600">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/p1.jpeg"
                  alt="Author"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-black">William Randolph</p>
                <p>25 April 2025</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Featured Image */}
          <div className="flex-[0.8] w-full">
            <div className="relative w-full h-55 md:h-73 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/p1.jpeg"
                alt="Featured"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </article>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14">
          {/* Post Content */}
          <div className="lg:col-span-2 max-w-4xl mx-auto lg:mx-0">
            <div className="space-y-6 leading-relaxed text-gray-700 text-base sm:text-lg">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                facere aliquam quasi temporibus asperiores cum sint ea. Minus
                aperiam suscipit qui voluptates corrupti numquam facilis vero
                aliquid laborum labore itaque veniam delectus similique
                praesentium non, dicta soluta omnis voluptate quaerat.
              </p>

              <p>
                Commodi nostrum minus aut iste. Quia adipisci praesentium
                commodi id fugiat voluptatum amet enim excepturi ea doloribus
                omnis vero magni beatae velit ab minima, dolores provident
                tempore.
              </p>

              <p>
                Reprehenderit velit qui recusandae cupiditate, quis ducimus
                voluptatum architecto amet nisi temporibus, modi quia natus.
              </p>
            </div>
            {/* comments */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">Comments</h2>
              <div className="space-y-6">
                <Comments />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <Menu />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default page;
