import connectMongoose from "@/lib/mongoose";
import News from "@/models/news.model";
import { fetchGNews } from "@/lib/gnews";
import { mapCategory } from "@/utils/categoryMap";
import { generateInsight } from "@/utils/insight";
import { generatePulse } from "@/utils/pulse";
import { calculateTrendingScore } from "@/utils/trendingScore";

export async function GET() {
  try {
    //  Connect DB
    await connectMongoose();
    // console.log(" MongoDB connected");

    //  GNews source categories
    const gnewsCategories = [
      "technology",
      "science",
      "business",
      "world",
      "sports",
      "entertainment",
      "health",
    ];

    let insertedCount = 0; //help me to see if data is inserted or not when goes in route /api/news/fetch

    //  grouping the news on the basis of category
    //fetching according to the gnewsCategories  new concept**
    for (const gCat of gnewsCategories) {
      const articles = await fetchGNews(gCat);

      for (const a of articles) {
        if (!a.title || !a.publishedAt || !a.url) continue;

        //  Map to APP category
        const appCategory = mapCategory(gCat, a.title, a.description || "");

        //  Prevent duplicates
        const sourceUrl = a.url || `${a.title}-${a.publishedAt}`;

        const exists = await News.findOne({ sourceUrl });
        if (exists) continue;

        //  Build final news object
        const newsData = {
          title: a.title,
          description: a.description || "",
          image: a.image || "/p1.jpg",
          category: appCategory,
          publishedAt: new Date(a.publishedAt),

          // Insight & Pulse (context only)
          insight: generateInsight(appCategory),
          pulse: generatePulse({
            title: a.title,
            category: appCategory,
            publishedAt: a.publishedAt,
          }),

          //  Trending score = TIME + CATEGORY only
          trendingScore: calculateTrendingScore({
            category: appCategory,
            publishedAt: a.publishedAt,
          }),

          sourceUrl,
        };

        //  Insert safely
        await News.create(newsData);
        insertedCount++;
      }
    }
    //Message jb data ho jaye tab ka
    return Response.json({
      success: true,
      inserted: insertedCount,
    });
  } catch (error) {
    console.error(" FETCH ERROR:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
