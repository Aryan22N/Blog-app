//This function is used to fetched the news on the basis of category
export async function fetchGNews(category) {
  const res = await fetch(
    `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&apikey=${process.env.GNEWS_API_KEY}`
  );

  const data = await res.json();
  return data.articles || [];
}
