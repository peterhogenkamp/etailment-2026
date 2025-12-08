export type Insight = {
  id: string;
  title: string;
  value: string;
  description: string;
  icon?: string;
  trend?: number;            // -1..+1 for small arrow indicator
  chart?: "fees" | "trust" | "returns" | null;
  companies?: string[];      // Related companies for icons
  isTrend?: boolean;         // Whether this is a trend (less prominent)
};

export const insights: Insight[] = [
  {
    id: "seller-fees",
    title: "Seller Fee Trend",
    value: "-7.8%",
    description: "Average seller fee change across major marketplaces (last 90 days).",
    trend: -0.078,
    chart: "fees",
    companies: ["Amazon", "eBay", "Zalando"]
  },
  {
    id: "return-rates",
    title: "Return Rate Pressure",
    value: "80%",
    description: "Share of retailers expecting return rates to stay high.",
    trend: 0.12,
    companies: ["Zalando", "Shopify"]
  },
  {
    id: "delivery-trust",
    title: "Low Delivery Trust",
    value: "66%",
    description: "Consumers doubting that promised delivery times will be met.",
    chart: "trust",
    companies: ["Amazon", "DHL"]
  },
  {
    id: "china-gifts",
    title: "Cross-Border Gifts",
    value: "14.3%",
    description: "Germans buying Christmas gifts from China (Temu, Shein, AliExpress).",
    companies: ["Temu", "Shein"],
    isTrend: true
  },
  {
    id: "online-gifting",
    title: "Online Christmas Shopping",
    value: "75%",
    description: "Share of Germans buying holiday gifts online.",
    isTrend: true
  },
  {
    id: "age-30-49",
    title: "Age Group Shift",
    value: "82%",
    description: "Share of 30–49 year olds shopping online for holidays.",
    isTrend: true
  },
  {
    id: "funding-largest",
    title: "Major Settlement",
    value: "€180M",
    description: "Largest financial settlement or funding event reported in Q4."
  },
  {
    id: "manipulative-reviews",
    title: "Manipulative Reviews",
    value: "95%",
    description: "Retailers reporting manipulative or unfair customer reviews."
  },
  {
    id: "delivery-window",
    title: "Expected Delivery Window",
    value: "2–4 Tage",
    description: "Consumer expectation for delivery time windows."
  },
  {
    id: "temu-loyalty",
    title: "Temu/SHEIN Loyalty",
    value: "30%",
    description: "Share of buyers showing repeat purchase intention.",
    companies: ["Temu", "Shein"],
    isTrend: true
  }
];

