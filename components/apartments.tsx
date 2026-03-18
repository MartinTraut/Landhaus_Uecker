"use client"

import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import {
  BedDouble,
  ChefHat,
  Bath,
  Sun,
  Mountain,
  Euro,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Users,
  Maximize,
  Send,
} from "lucide-react"

const BASE = "https://www.xn--landhaus-cker-4ob.de"

interface Apartment {
  name: string
  slug: string
  persons: string
  size: string
  floor: string
  description: string
  priceFirst: string
  priceFollowing: string
  priceNote: string
  additionalPerson: string
  kurbeitrag: string
  images: string[]
  highlights: { icon: React.ElementType; text: string }[]
  features: string[]
}

const APARTMENTS: Apartment[] = [
  {
    name: "Ferienwohnung Rose",
    slug: "rose",
    persons: "1–4 Personen",
    size: "54 m²",
    floor: "Dachgeschoss mit offenem Dachstuhl",
    description:
      "Im Landhausstil eingerichtet mit offenem Dachstuhl. Polstergarnitur mit Schlafcouch, vollausgestattete Küche, Südbalkon mit Sitzgarnitur und Bergpanoramablick.",
    priceFirst: "128 €",
    priceFollowing: "78 €",
    priceNote: "ab 2. Nacht (mind. 7 Nächte), 2 Pers.",
    additionalPerson: "15 € / Nacht",
    kurbeitrag: "1,50 € (ab 6 J.) / 3 € (ab 14 J.)",
    images: [
      `${BASE}/images/3978/20260116-153115.jpg`,
      `${BASE}/images/3949/rose-neu-k-che.jpg`,
      `${BASE}/images/3944/20220503-113912.jpg`,
      `${BASE}/images/3977/20260116-153132.jpg`,
      `${BASE}/images/3950/rose-bad.jpg`,
      `${BASE}/images/3935/20220502-143823.jpg`,
    ],
    highlights: [
      { icon: BedDouble, text: "Doppelbett 180×200 + Einzelbett" },
      { icon: Sun, text: "Südbalkon mit Panoramablick" },
      { icon: ChefHat, text: "Ceran, Backofen, Spülmaschine" },
      { icon: Bath, text: "Dusche, WC, Tageslicht" },
    ],
    features: [
      "Schlafcouch 140×200",
      "SAT-TV, DAB-Radio",
      "Kaffeemaschine, Wasserkocher, Toaster",
      "Verstellbare Lattenroste",
      "Verdunklung",
      "Babybett möglich",
    ],
  },
  {
    name: "Ferienwohnung Veilchen",
    slug: "veilchen",
    persons: "1–3 Personen",
    size: "54 m²",
    floor: "Dachgeschoss mit offenem Dachstuhl",
    description:
      "Im Landhausstil eingerichtet, eignet sich diese Wohnung auch hervorragend für eine Familie mit Kind. Eckbankgruppe mit Bergblick, Südbalkon mit Panoramablick in die Allgäuer Berge.",
    priceFirst: "128 €",
    priceFollowing: "78 €",
    priceNote: "ab 2. Nacht (mind. 7 Nächte), 2 Pers.",
    additionalPerson: "15 € / Nacht",
    kurbeitrag: "1,50 € (ab 6 J.) / 3 € (ab 14 J.)",
    images: [
      `${BASE}/images/3966/20250815-123530.jpg`,
      `${BASE}/images/3963/20250629-105038.jpg`,
      `${BASE}/images/3968/20250815-124039.jpg`,
      `${BASE}/images/3967/20250815-123929.jpg`,
      `${BASE}/images/3965/20250815-123013.jpg`,
      `${BASE}/images/3969/20250815-125118.jpg`,
    ],
    highlights: [
      { icon: BedDouble, text: "Doppelbett 180×200" },
      { icon: Sun, text: "Südbalkon mit Sitzgruppe" },
      { icon: ChefHat, text: "Ceran, Mikrowelle, Spülmaschine" },
      { icon: Bath, text: "Dusche mit Handtuchheizkörper" },
    ],
    features: [
      "Schlafsofa 140×200",
      "Longchair",
      "SAT-TV, DAB-Radio",
      "Zusatzbett / Babybett möglich",
      "Verdunklung",
      "Kleiderschrank",
    ],
  },
  {
    name: "Ferienwohnung Flieder",
    slug: "flieder",
    persons: "2–5 Personen",
    size: "80 m²",
    floor: "Erdgeschoss",
    description:
      "Unsere größte Wohnung im Erdgeschoss – ideal für zwei Paare oder Familien. Moderner Wohnraum mit offener Einbauküche, große Südterrasse mit Sitzgarnitur und Sonnenschirm.",
    priceFirst: "174 €",
    priceFollowing: "104 €",
    priceNote: "ab 2. Nacht (mind. 7 Nächte), 2 Pers.",
    additionalPerson: "15 € / Nacht",
    kurbeitrag: "1,50 € (ab 6 J.) / 3 € (ab 14 J.)",
    images: [
      `${BASE}/images/3907/gesamtraum-2.jpg`,
      `${BASE}/images/3909/couch.jpg`,
      `${BASE}/images/3929/20210307-112905.jpg`,
      `${BASE}/images/3921/signal-2021-08-08-192328.jpg`,
      `${BASE}/images/3906/fewo-neu.jpg`,
      `${BASE}/images/3791/20190626-084032.jpg`,
    ],
    highlights: [
      { icon: BedDouble, text: "2× Doppelbett 180×200" },
      { icon: Sun, text: "Große Südterrasse" },
      { icon: ChefHat, text: "Ceran, Mikrowelle, Spülmaschine" },
      { icon: Bath, text: "Dusche + separates WC" },
    ],
    features: [
      "2 Schlafzimmer (Süd & Ost)",
      "Schlafsofa 140×200",
      "Doppelwaschbecken",
      "Babybett kostenlos",
      "SAT-TV, DAB-Radio",
      "Sonnenschirm auf Terrasse",
    ],
  },
  {
    name: "Ferienwohnung Löwenzahn",
    slug: "loewenzahn",
    persons: "1–2 Personen",
    size: "20 m²",
    floor: "1. Obergeschoss",
    description:
      "Gemütliche Einraumwohnung, besonders geeignet für eine Person oder Kurzaufenthalte. Mit originaler Wandtäfelung aus dem 19. Jahrhundert und Loggia mit Bergblick nach Westen.",
    priceFirst: "80 €",
    priceFollowing: "45 €",
    priceNote: "ab 2. Nacht (mind. 5 Nächte), 1 Pers.",
    additionalPerson: "9 € / Nacht",
    kurbeitrag: "1,50 € (ab 6 J.) / 3 € (ab 14 J.)",
    images: [
      `${BASE}/images/3958/20250809-115046.jpg`,
      `${BASE}/images/3959/20250414-134157.jpg`,
      `${BASE}/images/3957/20250809-114832.jpg`,
      `${BASE}/images/3954/bad-l-wenzah.jpg`,
      `${BASE}/images/3936/20220502-114112.jpg`,
      `${BASE}/images/3942/20220502-113813.jpg`,
    ],
    highlights: [
      { icon: BedDouble, text: "Doppelbett 180×200" },
      { icon: Mountain, text: "Loggia mit Bergblick" },
      { icon: ChefHat, text: "Ceran, Mikrowelle, Kühlschrank" },
      { icon: Bath, text: "Dusche, WC" },
    ],
    features: [
      "Historische Wandtäfelung (19. Jh.)",
      "Gepolsterte Eckbankgruppe",
      "Sessel mit Leselampe",
      "SAT-TV",
      "Verstellbare Lattenroste",
      "Eierkocher, Toaster, Kaffeemaschine",
    ],
  },
]

function ImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0)

  return (
    <div className="relative h-full w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative h-full w-full"
        >
          <Image
            src={images[current]}
            alt={`${name} - Bild ${current + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={80}
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((current - 1 + images.length) % images.length)}
            className="absolute top-1/2 left-3 z-10 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setCurrent((current + 1) % images.length)}
            className="absolute top-1/2 right-3 z-10 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === current
                    ? "w-5 bg-white"
                    : "w-1.5 bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Bild ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function ApartmentCard({ apt, index }: { apt: Apartment; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const [expanded, setExpanded] = useState(false)
  const isReversed = index % 2 === 1

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-warm-900/6"
    >
      <div className="grid lg:grid-cols-2">
        {/* Bilder-Karussell */}
        <div className={`relative ${isReversed ? "lg:order-2" : ""}`}>
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[520px]">
            <ImageCarousel images={apt.images} name={apt.name} />
          </div>
          <div className="absolute top-4 left-4 z-10 flex gap-2">
            <span className="flex items-center gap-1 rounded-lg bg-white/92 px-3 py-1.5 text-xs font-semibold text-forest-800 shadow-sm backdrop-blur-sm">
              <Maximize className="h-3 w-3" />
              {apt.size}
            </span>
            <span className="flex items-center gap-1 rounded-lg bg-forest-700/90 px-3 py-1.5 text-xs font-semibold text-white shadow-sm backdrop-blur-sm">
              <Users className="h-3 w-3" />
              {apt.persons}
            </span>
          </div>
        </div>

        {/* Infos + Preise + Buchung */}
        <div
          className={`flex flex-col p-6 sm:p-8 lg:p-10 ${isReversed ? "lg:order-1" : ""}`}
        >
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-forest-600/70">
            {apt.floor}
          </p>
          <h3 className="mt-2 font-serif text-[1.7rem] leading-tight text-warm-900">
            {apt.name}
          </h3>
          <p className="mt-3 font-serif text-[15px] leading-[1.75] text-warm-800/65">
            {apt.description}
          </p>

          {/* Highlights */}
          <div className="mt-5 grid grid-cols-2 gap-2.5">
            {apt.highlights.map((h) => (
              <div
                key={h.text}
                className="flex items-start gap-2 text-[13px] text-warm-800/70"
              >
                <h.icon className="mt-0.5 h-4 w-4 shrink-0 text-forest-600" />
                <span>{h.text}</span>
              </div>
            ))}
          </div>

          {/* Mehr Details */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="mt-4 grid grid-cols-2 gap-1.5 text-[13px] text-warm-800/60">
                  {apt.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-forest-600/50" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 flex items-center gap-1 self-start text-[13px] font-medium text-forest-700 transition-colors hover:text-forest-900"
          >
            {expanded ? "Weniger" : "Weitere Ausstattung"}
            {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
          </button>

          {/* Preistabelle */}
          <div className="mt-5 rounded-xl bg-warm-50/80 p-4">
            <div className="grid grid-cols-2 gap-3 text-[13px]">
              <div>
                <p className="text-warm-800/45">1. Nacht (inkl. Endreinigung)</p>
                <p className="mt-0.5 font-serif text-lg font-semibold text-warm-900">
                  {apt.priceFirst}
                </p>
              </div>
              <div>
                <p className="text-warm-800/45">Ab 2. Nacht</p>
                <p className="mt-0.5 font-serif text-lg font-semibold text-forest-700">
                  {apt.priceFollowing}
                </p>
              </div>
            </div>
            <div className="mt-3 space-y-1 border-t border-warm-200/60 pt-3 text-[12px] text-warm-800/50">
              <p>{apt.priceNote}, inkl. Endreinigung &amp; Nebenkosten</p>
              <p>Zusatzperson: {apt.additionalPerson}</p>
              <p>Kurbeitrag: {apt.kurbeitrag}</p>
              <p>WLAN kostenlos (6–24 Uhr) &middot; Haustier: 7 €/Nacht (auf Anfrage)</p>
            </div>
          </div>

          {/* Buchungs-CTA */}
          <a
            href="https://www.xn--landhaus-cker-4ob.de/77/anfrage"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-forest-700 px-6 py-3.5 font-serif text-[15px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-forest-800 hover:shadow-md"
          >
            <Send className="h-4 w-4" />
            Jetzt buchen
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export function Apartments() {
  return (
    <section id="wohnungen" className="bg-warm-50 py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <h2 className="font-serif text-[2rem] text-warm-900 sm:text-[2.4rem]">
            Unsere Ferienwohnungen
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-serif text-[15px] leading-relaxed text-warm-800/60">
            Vom gemütlichen Appartement bis zur geräumigen Familienwohnung &ndash;
            alle liebevoll im Landhausstil eingerichtet mit Blick auf die Alpen.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {APARTMENTS.map((apt, i) => (
            <ApartmentCard key={apt.slug} apt={apt} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
