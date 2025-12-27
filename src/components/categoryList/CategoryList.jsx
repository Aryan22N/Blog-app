import Image from "next/image";
import Link from "next/link";
import connectMongoose from "@/lib/mongoose";
import Category from "@/models/category.model";

const bgColors = [
  "bg-[#57c4ff31]",
  "bg-[#da85c731]",
  "bg-[#7fb88133]",
  "bg-[#ff795736]",
  "bg-[#ffb04f45]",
  "bg-[#5e4fff31]",
];

// SERVER-SIDE DATA FETCH (BEST PRACTICE)
const getData = async () => {
  await connectMongoose();
  const categories = await Category.find().lean();
  return categories;
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-bold mb-6">Popular Categories</h1>

      <div
        className="
          grid grid-cols-2 gap-4
          sm:flex sm:flex-wrap sm:gap-4 sm:justify-start
        "
      >
        {data.map((cat, index) => (
          <Link
            key={cat._id.toString()}
            href={`/category/${cat.slug}`}
            className={`
              ${bgColors[index % bgColors.length]}
              flex items-center gap-3 justify-center
              px-5 h-20 w-full sm:w-[180px]
              rounded-2xl shadow-sm
              hover:shadow-md hover:scale-[1.03]
              transition-all
            `}
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={cat.img}
                alt={cat.title}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-semibold">{cat.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
