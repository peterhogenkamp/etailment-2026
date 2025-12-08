export type Article = {
  id: string;
  title: string;
  summary: string;
  publishedAt: string;          // ISO string
  companies: string[];         // Companies we report about
  source: string;               // Source publication
  topics: string[];             // Topics/themes
  countries: string[];          // Countries affected: DE, CH, AT, USA, China, UK
  tags: string[];
  metrics?: Record<string, string>;
  content: string;              // long text, not rendered in detail for now
};

export const mockArticles: Article[] = [
  {
    id: '1',
    title: '95 Prozent der Händler kennen manipulative Bewertungen',
    summary: 'Fast alle Online-Händler im DACH-Raum haben bereits Erfahrungen mit unfairen Bewertungen gemacht. Drei Viertel berichten von unwahren Aussagen, zwei Drittel würden für Umstände kritisiert, die außerhalb ihrer Kontrolle lägen.',
    publishedAt: '2025-12-08T06:14:00Z',
    companies: ['Händlerbund'],
    source: 'Händlerbund',
    topics: ['Marketplace', 'Consumer Behavior'],
    countries: ['DE', 'CH', 'AT'],
    tags: ['bewertungen', 'kundenbewertungen', 'marketplace', 'reputation', 'consumer-behavior'],
    metrics: {
      affectedRetailers: '95%',
      falseStatements: '75%',
      extortionAttempts: '45%'
    },
    content: 'Fast alle Online-Händler im DACH-Raum haben bereits Erfahrungen mit unfairen Bewertungen gemacht, so eine Studie des Händlerbundes zeigt. Drei Viertel berichten von unwahren Aussagen, zwei Drittel würden für Umstände kritisiert, die außerhalb ihrer Kontrolle lägen – etwa Probleme mit Paketdiensten. Besonders brisant: 45 Prozent erlebten Bewertungen als Erpressungsversuch, bei dem Kunden Rezensionen als Druckmittel einsetzten, um Preisnachlässe oder andere Vorteile zu erzwingen. Die Folgen reichten von Imageschäden über Sichtbarkeitsverluste bis zu direkten Umsatzeinbußen durch Kulanzregelungen.'
  },
  {
    id: '2',
    title: 'Zwei Freunde auf dem Weg zum weltweiten Erfolg: Wie das Unternehmen Blockhütte zum Rising Star wurde',
    summary: 'Was mit zwei besten Freunden, einer gemeinsamen Vision für nachhaltige Lunchboxen und einer Investition von 3.000 € begann, hat sich zu einem Unternehmen mit einem Umsatz von 6 Millionen € entwickelt.',
    publishedAt: '2025-12-08T06:14:00Z',
    companies: ['Amazon', 'Blockhütte'],
    source: 'etailment.de',
    topics: ['Marketplace', 'AI Tools'],
    countries: ['DE'],
    tags: ['amazon-ads', 'success-story', 'sustainability', 'marketplace', 'growth'],
    metrics: {
      revenue: '€6M',
      initialInvestment: '€3,000'
    },
    content: 'Was mit zwei besten Freunden, einer gemeinsamen Vision für nachhaltige Lunchboxen und einer Investition von 3.000 € begann, hat sich zu einem Unternehmen mit einem Umsatz von 6 Millionen € entwickelt. Ihre Geschichte ist nur eine von vielen faszinierenden Erfolgsgeschichten, die in der innovativen Doku-Serie "Rising Stars by Amazon Ads" vorgestellt werden, die die wahren Geschichten hinter aufstrebenden Marken aus Europa erzählt.'
  },
  {
    id: '3',
    title: 'Tiktok beugt sich DSA-Regeln für Werbeanzeigen',
    summary: 'Tiktok entgeht einer Strafe der EU-Kommission, nachdem das Unternehmen verbindliche Maßnahmen zur Werbetransparenz vorgelegt habe. Die Plattform müsse künftig sämtliche Anzeigen in einer durchsuchbaren Datenbank vorhalten.',
    publishedAt: '2025-12-08T06:14:00Z',
    companies: ['TikTok'],
    source: 'Heise.de',
    topics: ['Marketplace', 'Consumer Behavior'],
    countries: ['DE', 'CH', 'AT'],
    tags: ['dsa', 'regulation', 'advertising', 'transparency', 'compliance'],
    metrics: {
      updateWindow: '24h'
    },
    content: 'Tiktok entgeht einer Strafe der EU-Kommission, nachdem das Unternehmen verbindliche Maßnahmen zur Werbetransparenz vorgelegt habe. Die Plattform müsse künftig sämtliche Anzeigen samt verlinkter Seiten und Ausspielkriterien in einer durchsuchbaren Datenbank vorhalten, Updates sollen innerhalb von 24 Stunden erfolgen. Die Einigung beendet einen Teil des seit Februar 2024 laufenden DSA-Verfahrens – parallel untersuche Brüssel weiterhin Algorithmen, Jugendschutz und mögliche Wahlbeeinflussung.'
  },
  {
    id: '4',
    title: 'Maximale Verfügbarkeit: Wie die GRUBE KG ihren Onlinehandel resilient und sicher macht',
    summary: 'Europas führender Anbieter für Forstbedarf erzielt 80 % seines Umsatzes online und setzt dabei auf hochverfügbare Glasfaser, starke IT-Security und skalierbare Infrastruktur.',
    publishedAt: '2025-12-08T06:14:00Z',
    companies: ['GRUBE KG', 'EWE'],
    source: 'etailment.de',
    topics: ['Logistics', 'AI Tools'],
    countries: ['DE'],
    tags: ['infrastructure', 'security', 'digital-transformation', 'logistics', 'availability'],
    metrics: {
      onlineRevenue: '80%'
    },
    content: 'Die GRUBE KG zeigt, wie digitale Transformation im Mittelstand gelingt: Europas führender Anbieter für Forstbedarf erzielt 80 % seines Umsatzes online und setzt dabei auf hochverfügbare Glasfaser, starke IT-Security und skalierbare Infrastruktur von EWE. So bleiben Shop, Logistik und Mitarbeitende jederzeit erreichbar – und das Wachstum europaweit abgesichert.'
  },
  {
    id: '5',
    title: 'Google lässt Gemini per Telefon in Läden suchen',
    summary: 'Google Shopping lässt Gemini in den USA eigenständig stationäre Händler anrufen, um für Nutzer Produktinfos zu sammeln. Der kostenlose Dienst belaste die Händler mit Daueranrufen.',
    publishedAt: '2025-12-08T06:14:00Z',
    companies: ['Google'],
    source: 'Googlewatchblog.de',
    topics: ['AI Tools', 'Marketplace'],
    countries: ['USA'],
    tags: ['google', 'gemini', 'ai', 'shopping', 'automation'],
    content: 'Google Shopping lässt Gemini in den USA eigenständig stationäre Händler anrufen, um für Nutzer Produktinfos zu sammeln. Der kostenlose Dienst belaste die Händler mit Daueranrufen, während Google im stationären Handel – anders als online – bisher nichts verdiene. Die Vermutung liege nahe, dass Google die Händler mit diesem Druck in sein Ökosystem locken wolle: Es könnte sein, dass den Betroffenen künftig z. B. Gemini-Schnittstellen zu den Warenbeständen angeboten würden.'
  },
  {
    id: '6',
    title: 'Revolut sichert Überweisungen nach Smartphone-Diebstahl',
    summary: 'Revolut bietet eine neue Sicherheitsfunktion namens "Straßen-Modus" an. Nutzer könnten vertrauenswürdige Orte definieren, außerhalb dieser Zonen würden Überweisungen automatisch eine biometrische Prüfung erfordern.',
    publishedAt: '2025-12-08T06:14:00Z',
    companies: ['Revolut'],
    source: 'Giga.de',
    topics: ['Consumer Behavior'],
    countries: ['DE'],
    tags: ['payments', 'security', 'fintech', 'biometric', 'safety'],
    metrics: {
      delayWindow: '1h',
      reportedThefts: '125,000'
    },
    content: 'Revolut bietet eine neue Sicherheitsfunktion namens "Straßen-Modus" an. Nutzer könnten vertrauenswürdige Orte wie "Zuhause" oder "Büro" definieren. Außerhalb dieser Zonen würden Überweisungen über ein selbst festgelegtes Limit automatisch eine biometrische Prüfung erfordern und um eine Stunde verzögert. Die Zeitspanne solle ermöglichen, erzwungene oder betrügerische Transaktionen zu stoppen. Hintergrund seien die jährlich 125.000 gemeldeten Smartphone-Diebstähle in Deutschland.'
  },
  {
    id: '7',
    title: 'Ebay ersetzt Retourenetiketten durch QR-Codes',
    summary: 'Ebay.de stellt sein Rücksendeverfahren um und ersetzt PDF-Versandetiketten durch QR-Codes. Käufer erhielten bei Rückgaben künftig nur noch einen QR-Code, den sie auf dem Smartphone zeigen oder ausdrucken könnten.',
    publishedAt: '2025-12-08T06:14:00Z',
    companies: ['eBay'],
    source: 'eBay',
    topics: ['Logistics', 'Marketplace'],
    countries: ['DE'],
    tags: ['returns', 'logistics', 'qr-codes', 'innovation', 'efficiency'],
    content: 'Ebay.de stellt sein Rücksendeverfahren um und ersetzt PDF-Versandetiketten durch QR-Codes. Käufer erhielten bei Rückgaben künftig nur noch einen QR-Code, den sie auf dem Smartphone zeigen oder ausdrucken könnten. Der Versanddienstleister scanne diesen, drucke vor Ort das Etikett und klebe es auf die Sendung. Dies vermeide Verwechslungen und Mehrfachnutzung der Labels. Für Händler ändere sich nichts: Retouren würden weiterhin an die hinterlegte Adresse geschickt.'
  },
  {
    id: '8',
    title: 'Zwei Drittel der Kunden misstrauen Lieferversprechen',
    summary: 'Eine Umfrage zeigt eine wachsende Vertrauenskrise im Versandgeschäft: Während 53 Prozent der Verbraucher eine Zustellung binnen zwei bis vier Tagen erwarteten, zweifelten 66 Prozent daran, dass diese Frist eingehalten werde.',
    publishedAt: '2025-12-08T06:14:00Z',
    companies: ['Blue Yonder'],
    source: 'Retail-News.de',
    topics: ['Logistics', 'Consumer Behavior'],
    countries: ['DE', 'CH', 'AT'],
    tags: ['logistics', 'delivery', 'trust', 'consumer-behavior', 'expectations'],
    metrics: {
      deliveryExpectation: '53%',
      trustIssues: '66%',
      bundlingWillingness: '56%'
    },
    content: 'Eine Umfrage von Blue Yonder zeigt eine wachsende Vertrauenskrise im Versandgeschäft: Während 53 Prozent der Verbraucher eine Zustellung binnen zwei bis vier Tagen erwarteten, zweifelten 66 Prozent daran, dass diese Frist eingehalten werde. Gleichzeitig zeichne sich ein Trend zur Nachhaltigkeit ab: 56 Prozent seien bereit, Bestellungen zu bündeln, 34 Prozent würden für mehr Nachhaltigkeit auch längere Versandzeiten akzeptieren. Außerdem gewännen auch Click & Collect (53 Prozent) und Paketstationen (42 Prozent) als Alternative zum Expressversand an Bedeutung.'
  },
  {
    id: '9',
    title: 'Wie sich vermeiden lässt, dass KI-Chatbots zum Cyberrisiko werden',
    summary: 'KI-gesteuerte Chatbots können als Einfallstor für Phishing und Datendiebstahl fungieren. Dahinter stehen aber klassische Angriffsmuster, daher helfen auch klassische, stringent umgesetzte Sicherheitsmaßnahmen.',
    publishedAt: '2025-12-08T06:14:00Z',
    companies: [],
    source: 'etailment.de',
    topics: ['AI Tools'],
    countries: ['DE'],
    tags: ['ai', 'chatbots', 'cybersecurity', 'phishing', 'security'],
    content: 'KI-gesteuerte Chatbots können als Einfallstor für Phishing und Datendiebstahl fungieren. Dahinter stehen aber klassische Angriffsmuster, sagt Cybersecurity-Experte Udo Schneider. Daher helfen auch klassische, stringent umgesetzte Sicherheitsmaßnahmen. Welche, erläutert er im Interview mit "Der Handel".'
  },
  {
    id: '10',
    title: 'Amazon reduziert Verkaufsgebühren für europäische Händler um bis zu 15%',
    summary: 'Amazon kündigt umfassende Gebührenreduzierungen für europäische Händler an, mit Reduzierungen von bis zu 15% in verschiedenen Produktkategorien. Diese Maßnahme kommt angesichts des zunehmenden Wettbewerbs.',
    publishedAt: '2025-12-07T10:30:00Z',
    companies: ['Amazon'],
    source: 'etailment.de',
    topics: ['Marketplace'],
    countries: ['DE', 'CH', 'AT'],
    tags: ['fees', 'marketplace', 'policy', 'amazon', 'sellers'],
    metrics: {
      feeReduction: '-15%'
    },
    content: 'Amazon hat ein umfassendes Gebührenreduzierungsprogramm für europäische Händler angekündigt, mit Reduzierungen von bis zu 15% in verschiedenen Produktkategorien. Diese Maßnahme kommt, während der E-Commerce-Riese zunehmendem Wettbewerb von aufstrebenden Plattformen wie Temu und Shein sowie wachsendem regulatorischem Druck von EU-Behörden ausgesetzt ist.'
  },
  {
    id: '11',
    title: '80% der Händler denken, dass Retourenquoten sich 2025 nicht verbessern werden',
    summary: 'Eine neue Umfrage zeigt weit verbreiteten Pessimismus unter Online-Händlern bezüglich der Retourenquoten-Trends, während die Logistikkosten weiter steigen.',
    publishedAt: '2025-12-06T14:20:00Z',
    companies: ['Zalando', 'Shopify'],
    source: 'etailment.de',
    topics: ['Consumer Behavior', 'Logistics'],
    countries: ['DE'],
    tags: ['returns', 'logistics', 'consumer-behavior', 'costs'],
    metrics: {
      pessimisticRetailers: '80%'
    },
    content: 'Eine umfassende Umfrage unter über 500 Online-Händlern in Deutschland und Europa zeigt, dass 80% der Händler erwarten, dass die Retourenquoten 2025 hoch bleiben oder sich verschlechtern werden. Die Hauptbedenken umfassen sich ändernde Verbrauchererwartungen, zunehmender Wettbewerb, der zu großzügigeren Rückgaberichtlinien führt, und die steigenden Kosten im Zusammenhang mit der Rückwärtslogistik.'
  },
  {
    id: '12',
    title: 'Temu erhöht den Logistikdruck auf EU-Händler',
    summary: 'Europäische Händler stehen unter zunehmendem Druck durch Temus aggressives Logistik- und Preismodell, was strategische Neuausrichtungen erzwingt.',
    publishedAt: '2025-12-05T16:45:00Z',
    companies: ['Temu'],
    source: 'etailment.de',
    topics: ['Marketplace', 'Logistics'],
    countries: ['DE', 'CH', 'AT'],
    tags: ['competition', 'logistics', 'marketplace', 'pricing'],
    content: 'Die rasche Expansion von Temu auf europäischen Märkten erzeugt erheblichen Druck auf lokale Händler. Temus ultra-schnelles Logistiknetzwerk und aggressive Preisstrategie haben viele EU-basierte E-Commerce-Unternehmen gezwungen, ihre Lieferketten- und Preismodelle zu überdenken. Branchenanalysten prognostizieren, dass dies die Einführung von Direkt-an-Verbraucher-Modellen beschleunigen wird.'
  },
  {
    id: '13',
    title: 'Frohe Weihnachten trotz Sparmaßnahmen',
    summary: '82 Prozent der Deutschen wollen sich das Weihnachtsfest trotz Krisen nicht verderben lassen – die Durchschnittsausgaben steigen auf 366 Euro pro Kopf.',
    publishedAt: '2025-12-04T06:14:00Z',
    companies: [],
    source: 'Nielseniq.com',
    topics: ['Consumer Behavior'],
    countries: ['DE'],
    tags: ['weihnachten', 'sparen', 'consumer-behavior', 'ausgaben'],
    content: '82 Prozent der Deutschen wollen sich das Weihnachtsfest trotz Krisen nicht verderben lassen – die Durchschnittsausgaben steigen laut einer Umfrage von Nielseniq.com auf 366 Euro pro Kopf. Allerdings wollten die meisten sparen, der Durchschnitt wachse, weil die Ausgabenfreudigeren ihre Budgets noch deutlicher erhöhten. Gespart werde gezielt: 57 Prozent planten weniger Restaurant- oder Kinobesuche, fast die Hälfte wechsle von Markenprodukten zu Handelsmarken, jeder Dritte plane, zu Weihnachten Second-Hand- oder aufbereitete Produkte zu verschenken.'
  },
  {
    id: '14',
    title: 'Returnradar macht Rücksenderegeln im Shop transparent',
    summary: 'Returnradar präsentiert ein kostenloses Trust-Badge, das Retourenfristen, Kosten und Versandoptionen im Shop sichtbar macht.',
    publishedAt: '2025-12-04T06:14:00Z',
    companies: ['Returnradar'],
    source: 'OpenPR.de',
    topics: ['Logistics', 'Consumer Behavior'],
    countries: ['DE'],
    tags: ['returns', 'transparency', 'trust-badge', 'logistics'],
    content: 'Returnradar präsentiert ein kostenloses Trust-Badge, das Retourenfristen, Kosten und Versandoptionen im Shop sichtbar macht. Die Informationen würden redaktionell geprüft und aus öffentlichen Quellen zusammengetragen – ohne Sternebewertungen oder Tracking-Skripte. Händler könnten das statische HTML-Element direkt im Checkout oder auf Produktseiten platzieren. Rücksenderegeln gehörten seit Jahren zu den meistgesuchten Kaufkriterien, während klassische Bewertungssysteme wegen Moderationsaufwand und rechtlichen Unsicherheiten gemieden würden.'
  },
  {
    id: '15',
    title: 'Black Week verdoppelt DHLs Tagesvolumen',
    summary: 'DHL hat am Dienstag nach dem Cyber Monday in Deutschland 12,4 Mio. Pakete sortiert – ein neuer Rekord, beinahe doppelt so viele wie an einem durchschnittlichen Tag.',
    publishedAt: '2025-12-04T06:14:00Z',
    companies: ['DHL'],
    source: 'Retail-News.de',
    topics: ['Logistics'],
    countries: ['DE'],
    tags: ['black-week', 'logistics', 'dhl', 'pakete', 'rekord'],
    content: 'DHL hat am Dienstag nach dem Cyber Monday in Deutschland 12,4 Mio. Pakete sortiert – ein neuer Rekord. Das seien beinahe doppelt so viele wie an einem durchschnittlichen Tag mit 6,7 Mio. Sendungen. Die Black Week habe beim Unternehmen auch weltweit für Spitzenwerte gesorgt: DHL Ecommerce verzeichnete in 19 Ländern bis zu 14 Mio. bearbeitete Pakete täglich, 60 Prozent über dem Normalbetrieb. DHL Express meldete zwischen Thanksgiving und Cyber Monday ein Plus von 20 Prozent.'
  },
  {
    id: '16',
    title: 'DSGVO unter Druck: Mehrheit der Unternehmen fordert Lockerung',
    summary: 'Fast vier von fünf Unternehmen drängen auf eine Reform der Datenschutz-Grundverordnung. 97 Prozent bezeichneten den Aufwand mittlerweile als sehr oder eher hoch.',
    publishedAt: '2025-12-04T06:14:00Z',
    companies: [],
    source: 'Bitkom',
    topics: ['AI Tools'],
    countries: ['DE', 'EU'],
    tags: ['dsgvo', 'datenschutz', 'regulation', 'ki', 'compliance'],
    content: 'Fast vier von fünf Unternehmen drängen auf eine Reform der Datenschutz-Grundverordnung, so eine aktuelle Bitkom-Befragung. Die Belastung wachse stetig: 97 Prozent bezeichneten den Aufwand mittlerweile als sehr oder eher hoch, 69 Prozent berichteten von einer weiteren Zunahme im vergangenen Jahr. Besonders kritisch bewerten die Befragten die Auswirkungen auf Künstliche Intelligenz – 69 Prozent sähen das KI-Training erschwert, 63 Prozent befürchteten eine Abwanderung der KI-Entwicklung aus Europa.'
  },
  {
    id: '17',
    title: 'Walmart bricht an Black Friday seinen Tagesrekord',
    summary: 'Walmarts Online-Marktplatz verzeichnete am Black Friday einen neuen Tagesrekord bei den Konversionen. Der hauseigene Fulfillment-Service habe seinen Jahresumsatz an einem einzigen Tag übertroffen.',
    publishedAt: '2025-12-04T06:14:00Z',
    companies: ['Walmart', 'Apple'],
    source: 'Channelx.world',
    topics: ['Marketplace', 'Logistics'],
    countries: ['USA'],
    tags: ['black-friday', 'walmart', 'marketplace', 'fulfillment', 'rekord'],
    content: 'Walmarts Online-Marktplatz verzeichnete am Black Friday einen neuen Tagesrekord bei den Konversionen. Die gefragtesten Artikel seien Apples Airpods Gen 4 gewesen, gefolgt von Fernsehern, Wrangler-Jeans und Pokémon-Karten. Der hauseigene Fulfillment-Service habe seinen Jahresumsatz an einem einzigen Tag übertroffen. Walmart habe 57 Prozent mehr Pakete als im Vorjahr ausgeliefert, 44 Prozent davon in unter drei Stunden – Rekord sei die Zehn-Minuten-Zustellung eines Dampf-Bodenreinigers in Utah gewesen.'
  },
  {
    id: '18',
    title: 'Indiens Quick Commerce liefert hauptsächlich Junk Food',
    summary: 'Jedes zweite verpackte Lebensmittel auf Indiens führenden Quick-Commerce-Plattformen ist Junk Food. Beim Marktführer lägen sogar 62 Prozent der gelisteten Produkte im hochverarbeiteten Bereich.',
    publishedAt: '2025-12-04T06:14:00Z',
    companies: [],
    source: 'Theweek.in',
    topics: ['Consumer Behavior'],
    countries: ['China'],
    tags: ['quick-commerce', 'junk-food', 'gesundheit', 'consumer-behavior'],
    content: 'Jedes zweite verpackte Lebensmittel auf Indiens führenden Quick-Commerce-Plattformen ist Junk Food. Beim Marktführer lägen sogar 62 Prozent der gelisteten Produkte im hochverarbeiteten Bereich – reich an Fett, Zucker und Salz. Die indische Behörde für Lebensmittelsicherheit könne solche Produkte mangels Definition nicht regulieren – obwohl der Indian Council for Medical Research vor erhöhten Risiken für Herzkrankheiten und Diabetes warne. Neun von zehn Gen-Z-Eltern in Indien würden sich eine rote Kennzeichnung solcher Produkte wünschen.'
  },
  {
    id: '19',
    title: 'Mercado Libre wird zum Fluchtpunkt für Chinas Online-Händler',
    summary: 'Die Zahl chinesischer Verkäufer auf Mercado Libre ist in den vergangenen zwei Jahren dreistellig gewachsen. Brasilien gelte als "blauer Ozean" mit einem für 2025 erwarteten Marktvolumen von 78 Mrd. Dollar.',
    publishedAt: '2025-12-04T06:14:00Z',
    companies: ['Mercado Libre'],
    source: 'Caixinglobal.com',
    topics: ['Marketplace'],
    countries: ['China', 'USA'],
    tags: ['mercado-libre', 'china', 'export', 'marketplace', 'diversifizierung'],
    content: 'Die Zahl chinesischer Verkäufer auf Mercado Libre ist in den vergangenen zwei Jahren dreistellig gewachsen. Ab Mitte 2025 habe sich der Zustrom beschleunigt, da US-Handelskonflikte chinesische Exporteure zur Diversifizierung zwingen würden. Brasilien gelte als "blauer Ozean": Mit 212 Mio. Einwohnern und einem für 2025 erwarteten Marktvolumen von 78 Mrd. Dollar sei es der größte E-Commerce-Markt Lateinamerikas. Die Herausforderungen blieben jedoch beträchtlich – ein Steuersystem mit bis zu zwölf verschiedenen Abgaben schrecke viele ab.'
  },
  {
    id: '20',
    title: 'Marktplätze haften für sensible Daten in Anzeigen',
    summary: 'Online-Marktplätze tragen künftig die volle Verantwortung für personenbezogene Daten in Anzeigen, entschied der Europäische Gerichtshof.',
    publishedAt: '2025-12-04T06:14:00Z',
    companies: [],
    source: 'Heise.de',
    topics: ['Marketplace'],
    countries: ['DE', 'EU'],
    tags: ['dsgvo', 'marktplätze', 'haftung', 'datenschutz', 'regulation'],
    content: 'Online-Marktplätze tragen künftig die volle Verantwortung für personenbezogene Daten in Anzeigen, entschied der Europäische Gerichtshof. Die Betreiber müssten Inserate mit sensiblen Informationen – etwa zum Sexualleben oder politischen Ansichten – bereits vor Publikation identifizieren und prüfen. Dabei gelte es, zu kontrollieren, ob der Inserent tatsächlich die betroffene Person sei oder deren ausdrückliche Einwilligung vorliege. Fehle beides, sei die Veröffentlichung zu verweigern. Auch das Kopieren solcher Daten auf andere Websites müssten Plattformen durch technische Maßnahmen verhindern.'
  },
  {
    id: '21',
    title: 'Youtube akzeptiert Australiens Kinderschutzregeln',
    summary: 'Youtube schränkt den Zugang für unter 16-Jährige in Australien ein. Die Google-Tochter füge sich damit einem Gesetz, das Social-Media-Konten für Minderjährige ab dem 10. Dezember verbiete.',
    publishedAt: '2025-12-04T06:14:00Z',
    companies: ['Google', 'Meta', 'TikTok'],
    source: 'Zeit.de',
    topics: ['Consumer Behavior'],
    countries: ['UK'],
    tags: ['youtube', 'kinderschutz', 'australien', 'regulation', 'social-media'],
    content: 'Youtube schränkt den Zugang für unter 16-Jährige in Australien ein. Die Google-Tochter füge sich damit einem Gesetz, das Social-Media-Konten für Minderjährige ab dem 10. Dezember verbiete – bei Verstößen drohten Strafen bis 32,5 Mio. Dollar. Betroffene würden automatisch abgemeldet, könnten aber weiterhin Videos ansehen, nur nicht mehr kommentieren, liken oder Kanäle abonnieren. Youtube sei zunächst ausgenommen worden, aber nach Beschwerden von Meta, Tiktok und Snapchat weitete die Regierung die Regelung aus.'
  },
  {
    id: '22',
    title: 'Cross-Border-Handel: Lokale Zahlart entscheidet über Konversion',
    summary: 'Zwei Drittel des globalen E-Commerce-Umsatzes werden mittlerweile digital abgewickelt, doch drei Viertel der Händler kämpfen bei grenzüberschreitenden Transaktionen mit höheren Fehlerquoten als im Inland.',
    publishedAt: '2025-12-04T06:14:00Z',
    companies: [],
    source: 'Pymnts.com',
    topics: ['Consumer Behavior'],
    countries: ['USA', 'China'],
    tags: ['payments', 'cross-border', 'conversion', 'digital-wallets'],
    content: 'Zwei Drittel des globalen E-Commerce-Umsatzes werden mittlerweile digital abgewickelt, doch drei Viertel der Händler kämpfen bei grenzüberschreitenden Transaktionen mit höheren Fehlerquoten als im Inland. Fast alle internationalen Käufer wollten mit ihrer bevorzugten lokalen Zahlart bezahlen, 94 Prozent erwarteten Preise in eigener Währung. Händler ohne entsprechende Optionen riskierten den Verlust von mehr als der Hälfte potenzieller Kunden. Digital Wallets hätten ihren Anteil seit 2014 von 34 auf 66 Prozent verdoppelt.'
  },
  {
    id: '23',
    title: 'KI-Accounts fluten Tiktok mit Fake-Inhalten',
    summary: 'Tiktok kämpft mit einer Flut automatisierter KI-Accounts, die beispielsweise einwanderungsfeindliche Hetze oder sexualisierte Inhalte verbreiten.',
    publishedAt: '2025-12-04T06:14:00Z',
    companies: ['TikTok'],
    source: 'Theguardian.com',
    topics: ['AI Tools', 'Consumer Behavior'],
    countries: ['USA', 'UK'],
    tags: ['ki', 'tiktok', 'fake-content', 'moderation', 'ai-generated'],
    content: 'Tiktok kämpft mit einer Flut automatisierter KI-Accounts, die beispielsweise einwanderungsfeindliche Hetze oder sexualisierte Inhalte verbreiten. Eine Untersuchung von AI-Forensics habe 354 Accounts identifiziert, die binnen eines Monats 43.000 Posts mit 4,5 Mrd. Views generiert hätten – darunter gefälschte Nachrichtensendungen etablierter Medienmarken und sexualisierte Darstellungen teils minderjährig wirkender Mädchen. Die Hälfte der Inhalte trage keine KI-Kennzeichnung, weniger als zwei Prozent das offizielle Tiktok-Label.'
  },
  {
    id: '24',
    title: 'Europäer dürfen nicht in Googles virtuelle Umkleidekabine',
    summary: 'Google hat seine virtuelle Anprobe-Funktion für Kleidung nun in Großbritannien und Indien gestartet. Ein Starttermin für Europa sei weiterhin unklar.',
    publishedAt: '2025-12-04T06:14:00Z',
    companies: ['Google'],
    source: 'Retail-News.de',
    topics: ['AI Tools', 'Consumer Behavior'],
    countries: ['UK', 'China'],
    tags: ['google', 'virtuelle-anprobe', 'ki', 'mode', 'ar'],
    content: 'Google hat seine virtuelle Anprobe-Funktion für Kleidung nun in Großbritannien und Indien gestartet. Nutzer könnten Mode mit nur einem hochgeladenen Foto an ihrem eigenen Körper visualisieren. Die in den Staaten bereits verfügbare Technologie basiere auf einem KI-Modell, das analysiere, wie Stoffe fallen, sich dehnen oder falten würden. Laut Google würden digitale Anproben häufiger geteilt als herkömmliche Produktseiten, was Händlern zusätzliche Reichweite verschaffe. Ein Starttermin für Europa sei weiterhin unklar.'
  }
];

// Predefined list of companies we report about
export const REPORTED_COMPANIES = [
  'Amazon',
  'Amazon Italia',
  'Apple',
  'Ceconomy',
  'Coupang',
  'Ebay',
  'Ebit',
  'Google',
  'JD.com',
  'Meta',
  'Microsoft',
  'OpenAI',
  'Otto',
  'Revolut',
  'Schwarz-Gruppe',
  'Shein + Temu',
  'Shopify',
  'Stripe',
  'Telekom',
  'Temu',
  'Tiktok',
  'Trade Republic',
  'Zalando'
];

// Predefined countries
export const COUNTRIES = ['DE', 'CH', 'AT', 'USA', 'China', 'UK'];
