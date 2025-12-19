import React from "react";

const Pagination = () => {
  return (
    <div className="sm:flex hidden items-center justify-between mt-12">
      <button
        className="
          px-5 py-2
          text-sm font-semibold
          rounded-full
          border border-gray-300
          hover:bg-gray-100
          transition
        "
      >
        ← Previous
      </button>

      <button
        className="
          px-5 py-2
          text-sm font-semibold
          rounded-full
          bg-blue-600
          text-white
          hover:bg-blue-700
          transition
        "
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;
