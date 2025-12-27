//function is used to generate pulse
export function generatePulse({ title, category, publishedAt }) {
  const pulse = [];
  const text = title.toLowerCase();

  //  Recency
  const minutesAgo = (Date.now() - new Date(publishedAt)) / 60000;

  if (minutesAgo < 30) pulse.push("Fresh updates");
  else if (minutesAgo < 120) pulse.push("Recent development");

  //  High-interest keywords
  if (/ai|isro|bitcoin|space|market|india|world cup/.test(text)) {
    pulse.push("High interest");
  }

  //  Category-based signal
  if (["AI", "Crypto", "Markets"].includes(category)) {
    pulse.push("Trending topic");
  }

  //  Frequency-based
  if (similarCount >= 3) {
    pulse.push("Rising discussion");
  }

  // Limit to 3
  return [...new Set(pulse)].slice(0, 3);
}
