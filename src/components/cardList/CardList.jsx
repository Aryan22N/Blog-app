// import React from "react";
// import Card from "../card/Card";

// const CardList = () => {
//   return (
//     <div className="flex-5 bg-amber-200 ">
//       <h1 className="text-2xl font-bold mb-6">Recent Posts</h1>
//       <div>
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//       </div>
//     </div>
//   );
// };

// export default CardList;
import React from "react";
import Card from "../card/Card";

const CardList = () => {
  return (
    <section className="flex-1 w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Recent Posts</h1>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-10">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default CardList;
