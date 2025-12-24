"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page")) || 1;

  return (
    <div className="sm:flex hidden items-center justify-between mt-12">
      <button
        className="px-5 py-2 text-sm font-semibold rounded-full border border-gray-300 hover:bg-gray-100 transition"
        disabled={page === 1}
        onClick={() => router.push(`/?page=${page - 1}`, { scroll: false })}
      >
        ← Previous
      </button>

      <button
        className="px-5 py-2 text-sm font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
        disabled={page === 3}
        onClick={() => router.push(`/?page=${page + 1}`, { scroll: false })}
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;
