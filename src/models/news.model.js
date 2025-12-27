import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
    category: String,
    publishedAt: Date,
    insight: String,
    pulse: [String],
    trendingScore: Number,
    sourceUrl: { type: String, unique: true },
  },
  { timestamps: true }
);

export default mongoose.models.News || mongoose.model("News", NewsSchema);
