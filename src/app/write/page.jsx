"use client";

import Image from "next/image";
import React, { useState } from "react";
import Tiptap from "@/components/editor/editor";

const Page = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <input
        type="text"
        placeholder="Title"
        className="w-full text-5xl  p-2 outline-none"
      />

      <div className="mt-4 flex items-center gap-3">
        {/* Plus Button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-gray-100 transition"
        >
          <Image src="/plus.png" alt="Add" width={16} height={16} />
        </button>

        {open && (
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 flex items-center justify-center border rounded-full hover:bg-gray-100 transition">
              <Image src="/image.png" alt="Image" width={16} height={16} />
            </button>

            <button className="w-9 h-9 flex items-center justify-center border rounded-full hover:bg-gray-100 transition">
              <Image src="/external.png" alt="Link" width={16} height={16} />
            </button>

            <button className="w-9 h-9 flex items-center justify-center border rounded-full hover:bg-gray-100 transition">
              <Image src="/video.png" alt="Video" width={16} height={16} />
            </button>
          </div>
        )}
      </div>
      <div className="mt-5 rounded-xl p-4 border bg-white shadow-sm">
        <Tiptap />
      </div>
    </div>
  );
};

export default Page;
