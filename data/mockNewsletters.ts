export type Newsletter = {
  id: string;
  date: string;              // ISO string
  dateLabel: string;         // "Montag, 8. Dezember 2025"
  itemCount: number;
  url: string;
  title: string;
};

export const newsletters: Newsletter[] = [
  {
    id: 'newsletter-2025-12-09',
    date: '2025-12-09T06:14:00Z',
    dateLabel: 'Dienstag, 9. Dezember 2025',
    itemCount: 13,
    url: 'https://etailment.de/news/morning_briefing/morning-briefing-online-shopping-kurs-insolvenzwelle-china-shein-frankreich-cyber-monday-uk-walmart-salesforce-ki-hybris-ki-browser-25323',
    title: 'Payment, Online-Shopping-Kurs, Insolvenzwelle, China, Shein Frankreich, Cyber Monday UK, Walmart, Salesforce, KI-Hybris, KI-Browser'
  },
  {
    id: 'newsletter-2025-12-08',
    date: '2025-12-08T06:14:00Z',
    dateLabel: 'Montag, 8. Dezember 2025',
    itemCount: 12,
    url: 'https://etailment.de/news/morning_briefing/morning-briefing-konsumflaute-manipulative-bewertungen-ebay-tiktok-amazon-italia-ebit-new-york-times-vs.-perplexity-google-gemini-revolut-25322',
    title: 'Konsumflaute, manipulative Bewertungen, Ebay, Tiktok, Amazon Italia, Ebit, New York Times vs. Perplexity, Google Gemini, Revolut'
  },
  {
    id: 'newsletter-2025-12-05',
    date: '2025-12-05T06:14:00Z',
    dateLabel: 'Freitag, 5. Dezember 2025',
    itemCount: 12,
    url: 'https://etailment.de/news/morning_briefing/morning-briefing-ebay-trade-republic-amazon-tiktok-microsofts-ki-metas-metaverse-openais-chats-whatsapp-coupang-pferde-essen-gurken-25321',
    title: 'Ebay, Trade Republic, Amazon, Tiktok, Microsofts KI, Metas Metaverse, OpenAIs Chats, WhatsApp, Coupang, Pferde essen Gurken'
  }
];

