const INSIGHTS = {
  AI: "AI innovation continues to reshape industries worldwide.",
  Space: "India’s space ambitions are gaining global momentum.",
  Markets: "Economic signals are influencing global investor confidence.",
  World: "Global developments are shaping international relations.",
};

export function generateInsight(category) {
  return (
    INSIGHTS[category] ||
    "This development is drawing attention across multiple sectors."
  );
}
