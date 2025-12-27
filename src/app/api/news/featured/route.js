import connectMongoose from "@/lib/mongoose";
import News from "@/models/news.model";

const PRIORITY_CATEGORIES = {
  AI: 1.3,
  Elections: 1.25,
  Markets: 1.2,
  World: 1.15,
};

//ye news lega database se and fetch route hai vo news lega gnews api se
export async function GET() {
  try {
    await connectMongoose();

    //  Get all news sorted by trending score
    const allNews = await News.find().sort({ trendingScore: -1 }).lean();

    const categoryMap = new Map();

    // ek hi news select krna hai per category
    for (const news of allNews) {
      if (!categoryMap.has(news.category)) {
        categoryMap.set(news.category, news);
      }
    }

    //  Convert to array
    const featured = Array.from(categoryMap.values());

    //  Sort using boosted priority score
    featured.sort((a, b) => {
      const boostA = PRIORITY_CATEGORIES[a.category] || 1;
      const boostB = PRIORITY_CATEGORIES[b.category] || 1;

      return b.trendingScore * boostB - a.trendingScore * boostA;
    });

    //  Limit for homepage
    return Response.json(featured.slice(0, 6));
  } catch (error) {
    console.error("Featured API error:", error);
    return Response.json(
      { error: "Failed to load featured news" },
      { status: 500 }
    );
  }
}
