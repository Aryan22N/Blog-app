export function calculateTrendingScore({ category, publishedAt }) {
  let score = 0;

  //  TIME SCORE (most important)
  const minutesAgo = (Date.now() - new Date(publishedAt).getTime()) / 60000;

  if (minutesAgo < 30) score += 60;
  else if (minutesAgo < 60) score += 45;
  else if (minutesAgo < 180) score += 30;
  else if (minutesAgo < 720) score += 15;
  else score += 5;

  //  CATEGORY WEIGHT
  const CATEGORY_WEIGHT = {
    AI: 30,
    Crypto: 28,
    Markets: 25,
    Space: 22,
    Gaming: 20,
    Tech: 18,
    World: 15,
    India: 15,
    Sports: 14,
    Entertainment: 12,
    Health: 10,
    Business: 8,
    Science: 8,
    General: 5,
  };

  score += CATEGORY_WEIGHT[category] || 5;

  return score;
}
