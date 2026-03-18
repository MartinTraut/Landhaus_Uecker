"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Wifi,
  Car,
  Zap,
  Bike,
  UtensilsCrossed,
  Baby,
  Snowflake,
  Bus,
  BookOpen,
  ShowerHead,
  Dog,
  Cigarette,
} from "lucide-react"

const AMENITIES = [
  { icon: Wifi, title: "Gratis WLAN", desc: "Kostenlos von 6–24 Uhr" },
  { icon: Car, title: "Kostenloser Parkplatz", desc: "Direkt vor dem Haus" },
  { icon: Zap, title: "E-Auto Wallbox", desc: "Ladestation für Elektroautos" },
  { icon: Bike, title: "E-Bike Ladestation", desc: "Fahrradunterstellplatz vorhanden" },
  { icon: UtensilsCrossed, title: "Brötchenservice", desc: "Brötchen- und Getränkeservice" },
  { icon: Baby, title: "Familienfreundlich", desc: "Reisebett & Hochstuhl verfügbar" },
  { icon: ShowerHead, title: "Bezogene Betten", desc: "Bettwäsche & Handtücher inklusive" },
  { icon: Snowflake, title: "Beheizter Schuhraum", desc: "Schuhe & Skistiefel trocknen" },
  { icon: Bus, title: "Kostenloser Bus", desc: "Ski- & Wanderbus in der Nähe" },
  { icon: BookOpen, title: "Spiele & Bücher", desc: "Regal mit Spielen und Büchern" },
  { icon: Dog, title: "Haustiere", desc: "Nach Absprache, 7 €/Nacht" },
  { icon: Cigarette, title: "Rauchen", desc: "Nur auf Balkonen und Terrassen" },
]

export function Amenities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="ausstattung" className="bg-warm-50 py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <h2 className="font-serif text-[2rem] text-warm-900 sm:text-[2.4rem]">
            Service &amp; Ausstattung
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-serif text-[15px] leading-relaxed text-warm-800/60">
            Alles für Ihren perfekten Aufenthalt &ndash; wir kümmern uns um die Details.
          </p>
        </div>

        <div ref={ref} className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4">
          {AMENITIES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="group rounded-xl bg-white p-5 text-center shadow-sm transition-all hover:shadow-md"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-forest-50 text-forest-700 transition-colors group-hover:bg-forest-700 group-hover:text-white">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-serif text-[14px] font-semibold text-warm-900">
                {item.title}
              </h3>
              <p className="mt-1 text-[12px] leading-relaxed text-warm-800/50">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Wissenswertes */}
        <div className="mx-auto mt-14 max-w-3xl rounded-2xl bg-forest-50/80 p-6 sm:p-8">
          <h3 className="text-center font-serif text-lg text-forest-800">
            Wissenswertes für Ihren Aufenthalt
          </h3>
          <div className="mt-5 grid gap-5 text-[14px] sm:grid-cols-2">
            <div>
              <p className="font-serif font-semibold text-forest-800">Anreise</p>
              <p className="mt-0.5 text-forest-800/65">Zwischen 16–19 Uhr oder nach Absprache</p>
            </div>
            <div>
              <p className="font-serif font-semibold text-forest-800">Abreise</p>
              <p className="mt-0.5 text-forest-800/65">Bis 9:30 Uhr</p>
            </div>
            <div>
              <p className="font-serif font-semibold text-forest-800">Bezahlung</p>
              <p className="mt-0.5 text-forest-800/65">Bar (1 Tag vor Abreise) oder Überweisung (1 Woche vor Anreise)</p>
            </div>
            <div>
              <p className="font-serif font-semibold text-forest-800">Stornierung</p>
              <p className="mt-0.5 text-forest-800/65">Kostenlos bis 42 Tage vor Anreise, danach 90 %</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
