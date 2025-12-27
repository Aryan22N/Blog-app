// import CardList from "../../components/cardList/CardList";
// import Menu from "../../components/menu/Menu";
// import React from "react";
// import { Suspense } from "react";

// const page = () => {
//   return (
//     <div className="w-full">
//       {/* Page Header */}
//       <div className="bg-[#FF7F50]">
//         <h1
//           className="
//           max-w-7xl mx-auto
//           px-4 sm:px-6 lg:px-8
//           py-4
//           text-2xl sm:text-3xl
//           font-bold
//           text-white justify-center flex items-center
//         "
//         >
//           Style Blogs
//         </h1>
//       </div>

//       {/* Content */}
//       <div
//         className="
//           max-w-7xl mx-auto
//           px-4 sm:px-6 lg:px-8
//           py-10
//           flex flex-col lg:flex-row
//           gap-10
//         "
//       >
//         {/* Main Content */}
//         <div className="flex-1">
//           <Suspense fallback={<div>Loading blog content...</div>}>
//             <CardList />
//           </Suspense>
//         </div>

//         {/* Sidebar */}
//         <div className="hidden lg:block">
//           <Menu />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;
import CardList from "../../components/cardList/CardList";
import Menu from "../../components/menu/Menu";
import React, { Suspense } from "react"; // Added Suspense import

const Page = () => {
  // Capitalized component name (best practice)
  return (
    <div className="w-full">
      <div className="bg-[#FF7F50]">
        <h1 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-2xl sm:text-3xl font-bold text-white justify-center flex items-center">
          Style Blogs
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          {/* Use Suspense here to handle useSearchParams inside CardList/Pagination */}
          <Suspense fallback={<p>Loading articles...</p>}>
            <CardList />
          </Suspense>
        </div>

        <div className="hidden lg:block">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Page;
