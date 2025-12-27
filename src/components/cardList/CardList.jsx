"use client";
import { useEffect, useState, useRef } from "react";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

const CardList = ({ page }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // reference to the heading
  const headingRef = useRef(null);

  const isFirstRender = useRef(true);

  useEffect(() => {
    fetch(`/api/news/recent?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("ARTICLES FROM API:", data.articles);
        setNews(Array.isArray(data.articles) ? data.articles : []);
        setLoading(false);
      })
      .catch(() => {
        setNews([]);
        setLoading(false);
      });
  }, [page]);

  //  scroll when page changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (headingRef.current) {
      headingRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [page]);

  return (
    <section className="flex-1 w-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold" ref={headingRef}>
          Recent Posts
        </h1>
      </div>

      <div className="flex flex-col gap-10">
        {/* loading check krni padigi  */}
        {loading && <p>Loading latest news...</p>}

        {!loading &&
          news.map((item, index) => (
            <Card
              key={item._id ?? `${item.sourceUrl}-${item.publishedAt}-${index}`}
              news={item}
            />
          ))}
      </div>

      <Pagination />
    </section>
  );
};

export default CardList;
