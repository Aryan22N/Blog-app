import connectMongoose from "@/lib/mongoose";
import NewsCache from "@/models/newsCache.model";

export async function GET(req) {
  try {
    await connectMongoose();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = 4;
    const skip = (page - 1) * limit; //4,4 post ke baad repeat hoga means pahile 4 post dikhege then skip that 4 post then show next 4 post

    // Check cache
    const cachedNews = await NewsCache.find({})
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    //DB se saari news uthao → latest pehle rakho → page ke hisaab se pehle wali chhod do → sirf required number bhejo → plain JS objects bana do

    //jab cache empty na ho...
    if (cachedNews.length > 0) {
      return Response.json({ articles: cachedNews });
    }

    //  when the cache is empty -----> Fetch from GNews
    const url = `https://gnews.io/api/v4/search?q=technology&lang=en&country=in&sortby=publishedAt&max=10&apikey=${process.env.GNEWS_API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();

    if (!Array.isArray(data.articles)) {
      console.error("GNews error:", data);
      return Response.json({ articles: [] }); //arar data na aaye tohh error message tohh samaj aana chaiye
    }

    // Format news
    const formattedNews = data.articles.map((article) => ({
      title: article.title,
      description: article.description,
      image: article.image,
      sourceName: article.source.name,
      sourceUrl: article.url,
      category: article.source.name,
      publishedAt: article.publishedAt,
    }));

    // Save to DB
    await NewsCache.insertMany(formattedNews);

    return Response.json({ articles: formattedNews });
  } catch (error) {
    console.error("API ERROR:", error);
    return Response.json({ articles: [] }, { status: 500 });
  }
}
