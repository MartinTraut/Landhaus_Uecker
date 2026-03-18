const BASE = "https://www.xn--landhaus-cker-4ob.de"

export interface ApartmentData {
  name: string
  slug: string
  shortName: string
  persons: string
  size: string
  floor: string
  description: string
  longDescription: string
  priceFirst: string
  priceFollowing: string
  priceNote: string
  additionalPerson: string
  minNights: string
  kurbeitrag: string
  images: string[]
  highlights: string[]
  kitchen: string[]
  bedroom: string[]
  bathroom: string[]
  extras: string[]
}

export const APARTMENTS: ApartmentData[] = [
  {
    name: "Ferienwohnung Rose",
    slug: "rose",
    shortName: "Fewo Rose",
    persons: "1–4 Personen",
    size: "54 m²",
    floor: "Dachgeschoss mit offenem Dachstuhl",
    description:
      "Im Landhausstil eingerichtet mit offenem Dachstuhl. Polstergarnitur mit Schlafcouch, vollausgestattete Küche, Südbalkon mit Sitzgarnitur und Bergpanoramablick.",
    longDescription:
      "Die Ferienwohnung Rose befindet sich im Dachgeschoss mit offenem Dachstuhl und ist liebevoll im Landhausstil eingerichtet. Sie bietet einen herrlichen Südbalkon mit Sitzgarnitur und traumhaftem Bergpanoramablick. Die Wohnung eignet sich ideal für Paare oder kleine Familien.",
    priceFirst: "128 €",
    priceFollowing: "78 €",
    priceNote: "2 Personen, inkl. Endreinigung & Nebenkosten",
    additionalPerson: "15 € / Nacht",
    minNights: "7 Nächte",
    kurbeitrag: "1,50 € (ab 6 J.) / 3,00 € (ab 14 J.) pro Person/Nacht",
    images: [
      `${BASE}/images/3978/20260116-153115.jpg`,
      `${BASE}/images/3949/rose-neu-k-che.jpg`,
      `${BASE}/images/3944/20220503-113912.jpg`,
      `${BASE}/images/3977/20260116-153132.jpg`,
      `${BASE}/images/2782/img-0217.jpg`,
      `${BASE}/images/3950/rose-bad.jpg`,
      `${BASE}/images/3935/20220502-143823.jpg`,
      `${BASE}/images/2797/img-0369.jpg`,
      `${BASE}/images/3821/20190129-112708.jpg`,
      `${BASE}/images/2758/2007-balkon-fewo1-1.jpg`,
    ],
    highlights: [
      "Südbalkon mit Panoramablick",
      "Offener Dachstuhl",
      "Schlafcouch 140×200 cm",
      "SAT-TV, DAB-Radio",
    ],
    kitchen: [
      "Vollausgestattete Küchenzeile",
      "Cerankochfeld und Backofen",
      "Spülmaschine",
      "Kühlschrank mit Gefrierfach",
      "Kaffeemaschine, Wasserkocher, Toaster, Eierkocher",
      "Komplettes Speise- und Kochgeschirr",
    ],
    bedroom: [
      "Doppelbett 180×200 cm (verstellbare Lattenroste)",
      "Einzelbett",
      "Nachtkonsole mit Leselampe",
      "Kleiderschrank",
      "Verdunklung",
      "Babybett auf Anfrage",
    ],
    bathroom: [
      "Dusche, WC, Waschbecken",
      "Föhn, Kosmetikspiegel",
      "Tageslichtfenster",
      "Wäscheständer",
    ],
    extras: [
      "Polstergarnitur mit Longchair",
      "Bezogene Betten & Handtücher",
      "WLAN kostenlos (6–24 Uhr)",
    ],
  },
  {
    name: "Ferienwohnung Veilchen",
    slug: "veilchen",
    shortName: "Fewo Veilchen",
    persons: "1–3 Personen",
    size: "54 m²",
    floor: "Dachgeschoss mit offenem Dachstuhl",
    description:
      "Im Landhausstil eingerichtet, eignet sich diese Wohnung auch hervorragend für eine Familie mit Kind. Eckbankgruppe mit Bergblick, Südbalkon mit Panoramablick.",
    longDescription:
      "Die Ferienwohnung Veilchen liegt im Dachgeschoss mit offenem Dachstuhl und ist im Landhausstil eingerichtet. Sie eignet sich hervorragend für Familien mit Kind. Genießen Sie den Bergblick von der Eckbankgruppe oder entspannen Sie auf dem Südbalkon mit Panoramablick in die Allgäuer Berge.",
    priceFirst: "128 €",
    priceFollowing: "78 €",
    priceNote: "2 Personen, inkl. Endreinigung & Nebenkosten",
    additionalPerson: "15 € / Nacht",
    minNights: "7 Nächte",
    kurbeitrag: "1,50 € (ab 6 J.) / 3,00 € (ab 14 J.) pro Person/Nacht",
    images: [
      `${BASE}/images/3966/20250815-123530.jpg`,
      `${BASE}/images/3963/20250629-105038.jpg`,
      `${BASE}/images/3968/20250815-124039.jpg`,
      `${BASE}/images/3967/20250815-123929.jpg`,
      `${BASE}/images/3965/20250815-123013.jpg`,
      `${BASE}/images/3969/20250815-125118.jpg`,
      `${BASE}/images/3962/20250815-125434.jpg`,
      `${BASE}/images/3947/20221005-124851.jpg`,
      `${BASE}/images/3300/talblick-vom-balkon-veilchen.jpg`,
      `${BASE}/images/3290/blick-vom-balkon-veilchen.jpg`,
    ],
    highlights: [
      "Südbalkon mit Panoramablick",
      "Eckbankgruppe mit Bergblick",
      "Ideal für Familien",
      "SAT-TV, DAB-Radio",
    ],
    kitchen: [
      "Cerankochfeld, Mikrowelle",
      "Spülmaschine",
      "Kühlschrank mit Gefrierfach",
      "Kaffeemaschine, Wasserkocher, Toaster",
      "Vollständiges Geschirr und Kochzubehör",
    ],
    bedroom: [
      "Doppelbett 180×200 cm",
      "Verdunkelung",
      "Kleiderschrank",
      "Nachtkonsole mit Leselampe",
      "Zusatzbett / Babybett möglich",
    ],
    bathroom: [
      "Dusche, WC, Waschbecken",
      "Föhn, Kosmetikspiegel",
      "Handtuchheizkörper",
      "Tageslichtfenster",
    ],
    extras: [
      "Schlafsofa 140×200 cm",
      "Longchair",
      "Bezogene Betten & Handtücher",
      "WLAN kostenlos (6–24 Uhr)",
    ],
  },
  {
    name: "Ferienwohnung Flieder",
    slug: "flieder",
    shortName: "Fewo Flieder",
    persons: "2–5 Personen",
    size: "80 m²",
    floor: "Erdgeschoss",
    description:
      "Unsere größte Wohnung im Erdgeschoss – ideal für zwei Paare oder Familien. Moderner Wohnraum mit offener Einbauküche, große Südterrasse.",
    longDescription:
      "Die Ferienwohnung Flieder ist mit 80 m² unsere größte Wohnung und befindet sich im Erdgeschoss. Sie ist ideal für zwei Paare oder Familien geeignet. Der moderne Wohnraum mit offener Einbauküche bietet viel Platz. Die große Südterrasse mit Sitzgarnitur und Sonnenschirm lädt zum Verweilen ein.",
    priceFirst: "174 €",
    priceFollowing: "104 €",
    priceNote: "2 Personen, inkl. Endreinigung & Nebenkosten",
    additionalPerson: "15 € / Nacht",
    minNights: "7 Nächte",
    kurbeitrag: "1,50 € (ab 6 J.) / 3,00 € (ab 14 J.) pro Person/Nacht",
    images: [
      `${BASE}/images/3907/gesamtraum-2.jpg`,
      `${BASE}/images/3909/couch.jpg`,
      `${BASE}/images/3929/20210307-112905.jpg`,
      `${BASE}/images/3921/signal-2021-08-08-192328.jpg`,
      `${BASE}/images/3920/signal-2021-08-08-181259.jpg`,
      `${BASE}/images/3917/signal-2021-08-08-164144.jpg`,
      `${BASE}/images/3919/signal-2021-08-08-180831.jpg`,
      `${BASE}/images/3908/gesamtraum.jpg`,
      `${BASE}/images/3906/fewo-neu.jpg`,
      `${BASE}/images/3791/20190626-084032.jpg`,
    ],
    highlights: [
      "Große Südterrasse mit Sonnenschirm",
      "2 Schlafzimmer",
      "80 m² Wohnfläche",
      "SAT-TV, DAB-Radio",
    ],
    kitchen: [
      "Offene Einbauküche",
      "Cerankochfeld, Mikrowelle",
      "Spülmaschine",
      "Kühlschrank mit Gefrierfach",
      "Wasserkocher, Toaster, Kaffeemaschine, Eierkocher",
    ],
    bedroom: [
      "Schlafzimmer Süd: Doppelbett 180×200 cm, Komforthöhe",
      "Schlafzimmer Ost: Doppelbett 180×200 cm, Komforthöhe",
      "Verdunklungsvorhänge",
      "Kleiderschränke",
      "Babybett kostenlos",
    ],
    bathroom: [
      "Dusche, WC, Doppelwaschbecken",
      "Föhn, Kosmetikspiegel",
      "Elektrische Lüftung",
      "Separates WC mit Handwaschbecken",
    ],
    extras: [
      "Schlafsofa 140×200 cm",
      "Polstergarnitur mit Longchair",
      "Eckbankgruppe mit Essbereich",
      "Bezogene Betten & Handtücher",
      "WLAN kostenlos (6–24 Uhr)",
    ],
  },
  {
    name: "Ferienwohnung Löwenzahn",
    slug: "loewenzahn",
    shortName: "Fewo Löwenzahn",
    persons: "1–2 Personen",
    size: "20 m²",
    floor: "1. Obergeschoss",
    description:
      "Gemütliche Einraumwohnung, besonders geeignet für eine Person oder Kurzaufenthalte. Originale Wandtäfelung aus dem 19. Jahrhundert.",
    longDescription:
      "Die Ferienwohnung Löwenzahn ist eine gemütliche Einraumwohnung im 1. Obergeschoss, besonders geeignet für eine Person oder Kurzaufenthalte. Ein besonderes Highlight ist die originale Wandtäfelung aus dem 19. Jahrhundert. Die Loggia bietet einen wunderschönen Bergblick nach Westen.",
    priceFirst: "80 €",
    priceFollowing: "45 €",
    priceNote: "1 Person, inkl. Endreinigung & Nebenkosten",
    additionalPerson: "9 € / Nacht",
    minNights: "5 Nächte",
    kurbeitrag: "1,50 € (ab 6 J.) / 3,00 € (ab 14 J.) pro Person/Nacht",
    images: [
      `${BASE}/images/3958/20250809-115046.jpg`,
      `${BASE}/images/3959/20250414-134157.jpg`,
      `${BASE}/images/3957/20250809-114832.jpg`,
      `${BASE}/images/3954/bad-l-wenzah.jpg`,
      `${BASE}/images/3936/20220502-114112.jpg`,
      `${BASE}/images/3956/20250712-101921.jpg`,
      `${BASE}/images/3942/20220502-113813.jpg`,
      `${BASE}/images/3941/20220502-113741.jpg`,
      `${BASE}/images/3973/20200920-133120.jpg`,
    ],
    highlights: [
      "Loggia mit Bergblick nach Westen",
      "Historische Wandtäfelung (19. Jh.)",
      "Ideal für Kurzaufenthalte",
      "SAT-TV",
    ],
    kitchen: [
      "Cerankochfeld, Mikrowelle",
      "Kühlschrank mit Gefrierfach",
      "Kaffeemaschine, Toaster, Wasserkocher, Eierkocher",
      "Komplettes Speise- und Kochgeschirr",
    ],
    bedroom: [
      "Doppelbett 180×200 cm (verstellbare Lattenroste)",
      "Nachtkonsole mit Leselampe",
      "Kleiderschrank",
    ],
    bathroom: [
      "Dusche, WC, Waschbecken",
      "Föhn, Kosmetikspiegel",
      "Elektrische Lüftung",
    ],
    extras: [
      "Gepolsterte Eckbankgruppe",
      "Sessel mit Leselampe",
      "Bezogene Betten & Handtücher",
      "WLAN kostenlos (6–24 Uhr)",
    ],
  },
]

export const GALLERY_IMAGES = {
  landhaus: [
    { src: `${BASE}/images/3961/20250712-101921.jpg`, alt: "Landhaus Ücker Außenansicht Sommer" },
    { src: `${BASE}/images/3451/2019-02-13-22-44-31.jpg`, alt: "Landhaus Ücker im Winter" },
    { src: `${BASE}/images/3973/20200920-133120.jpg`, alt: "Landhaus Ücker Südseite" },
    { src: `${BASE}/images/3951/prospekt-haus.jpg`, alt: "Landhaus Ücker Prospekt" },
    { src: `${BASE}/images/3821/20190129-112708.jpg`, alt: "Landhaus Ücker Winteransicht" },
  ],
  umgebung: [
    { src: `${BASE}/images/2743/p1370466.jpg`, alt: "Allgäuer Alpen Panorama" },
    { src: `${BASE}/images/3946/img-0136-1.jpg`, alt: "Winterlandschaft Obermaiselstein" },
    { src: `${BASE}/images/3899/img-20200714-155814.jpg`, alt: "Sommerwiese mit Bergblick" },
    { src: `${BASE}/images/2707/img-6310.jpg`, alt: "Bergblick vom Landhaus" },
    { src: `${BASE}/images/3900/img-20200714-154038.jpg`, alt: "Wanderwege bei Obermaiselstein" },
    { src: `${BASE}/images/3811/20190204-120025.jpg`, alt: "Winterpanorama Allgäu" },
    { src: `${BASE}/images/3461/20190204-115037.jpg`, alt: "Verschneite Berge" },
  ],
  ausflugsziele: [
    { src: `${BASE}/images/3926/20210116-135744.jpg`, alt: "Loipe um Oberdorf" },
    { src: `${BASE}/images/3927/20210119-074124.jpg`, alt: "Morgensonne im Allgäu" },
    { src: `${BASE}/images/3924/2019-02-13-22-44-31.jpg`, alt: "Winterabend" },
    { src: `${BASE}/images/3935/20220502-143823.jpg`, alt: "Frühling in den Alpen" },
    { src: `${BASE}/images/3791/20190626-084032.jpg`, alt: "Sommermorgen Obermaiselstein" },
  ],
}

export const ACTIVITY_LINKS = [
  { category: "Natur & Erlebnis", items: [
    { name: "Alpenwildpark", url: "https://www.alpenwildpark.de/" },
    { name: "Breitachklamm", url: "https://www.breitachklamm.com/" },
    { name: "Sturmannshöhle Obermaiselstein", url: "https://www.hoernerdoerfer.de/a-sturmannshoehle-obermaiselstein-allgaeu" },
    { name: "Erlebnis-Erzgruben Burgberg", url: "https://www.erzgruben.de/" },
    { name: "Bergbauernmuseum Diepolz", url: "https://www.bergbauernmuseum.de/willkommen.html" },
    { name: "Allgäuer Bergkäserei", url: "https://www.allgaeuer-bergkaese.de/" },
  ]},
  { category: "Sport & Abenteuer", items: [
    { name: "Grasgehrenlifte", url: "https://grasgehren.de/" },
    { name: "Söllereckbahn Oberstdorf", url: "https://www.ok-bergbahnen.com/bergbahnen/soellereckbahn/" },
    { name: "Hörnerbahn Bolsterlang", url: "https://www.hoernerbahn.de/" },
    { name: "Sommerrodelbahn Alpsee Bergwelt", url: "https://www.alpsee-bergwelt.de/" },
    { name: "Kletterwald Bärenfalle", url: "https://www.kletterwald-baerenfalle.de/" },
    { name: "OASE Gleitschirmflugschule", url: "https://www.oase-paragliding.com/" },
    { name: "Allgäu Bikers Immenstadt", url: "https://www.allgaeu-bikers.de/" },
  ]},
  { category: "Freizeit & Region", items: [
    { name: "Wonnemar Sonthofen", url: "https://www.wonnemar.de/sonthofen/" },
    { name: "Hörnerdörfer", url: "https://www.hoernerdoerfer.de/" },
    { name: "Obermaiselstein Tourismus", url: "https://www.hoernerdoerfer.de/obermaiselstein" },
    { name: "Allgäu Walser Card", url: "https://www.allgaeu-walser-card.com/" },
  ]},
]

export const WEBCAM_URL = "https://www.foto-webcam.eu/webcam/obermaiselstein/"
