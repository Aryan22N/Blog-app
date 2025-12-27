//Category function

export function mapCategory(gnewsCategory, title, description = "") {
  //title aur description mai koi bhi similar word mil jaye like "Technology" tohh use map kr denge..
  const text = `${title} ${description}`.toLowerCase();

  // TECHNOLOGY
  if (gnewsCategory === "technology") {
    if (/ai|openai|machine learning|chatgpt/.test(text)) return "AI";
    if (/game|gaming|free fire|pubg|ps5|xbox/.test(text)) return "Gaming";
    if (/crypto|bitcoin|ethereum|web3/.test(text)) return "Crypto";
    if (/startup|funding|venture/.test(text)) return "Startups";
    return "Tech";
  }

  //  SCIENCE
  if (gnewsCategory === "science") {
    if (/space|isro|nasa|rocket|satellite/.test(text)) return "Space";
    return "Science";
  }

  //  BUSINESS
  if (gnewsCategory === "business") {
    if (/stock|market|sensex|nifty|inflation/.test(text)) return "Markets";
    return "Business";
  }

  //  WORLD / INDIA
  if (gnewsCategory === "world") {
    if (/india|delhi|mumbai|modi/.test(text)) return "India";
    return "World";
  }

  //  SPORTS
  if (gnewsCategory === "sports") return "Sports";

  //  ENTERTAINMENT
  if (gnewsCategory === "entertainment") return "Entertainment";

  //  HEALTH
  if (gnewsCategory === "health") return "Health";

  return "General";
}
