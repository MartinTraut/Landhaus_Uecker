"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Footprints,
  Snowflake,
  Bike,
  Mountain,
  TreePine,
  Fish,
  Gem,
  Baby,
  ExternalLink,
} from "lucide-react"

const ACTIVITIES = [
  {
    icon: Footprints,
    title: "Wandern",
    desc: "Unzählige Wander- und Bergtouren direkt vor der Haustür. Kostenloses Wanderbusticket inklusive.",
  },
  {
    icon: Snowflake,
    title: "Skifahren & Langlauf",
    desc: "Skigebiete in der Nähe, Loipe nur 200m entfernt. Kostenloses Skibusticket.",
  },
  {
    icon: Bike,
    title: "Radfahren & E-Bike",
    desc: "Traumhafte Radtouren durchs Oberallgäu. E-Bike Ladestation direkt am Haus.",
  },
  {
    icon: Mountain,
    title: "Bergbahnen",
    desc: "Söllereckbahn, Hörnerbahn und Grasgehrenlifte in unmittelbarer Nähe.",
  },
  {
    icon: TreePine,
    title: "Natur & Tiere",
    desc: "Alpenwildpark, Pferdehof (200m) und herrliche Naturlandschaften.",
  },
  {
    icon: Baby,
    title: "Familienspaß",
    desc: "Sommerrodelbahn, Kletterwald Bärenfalle und Wonnemar Erlebnisbad.",
  },
  {
    icon: Gem,
    title: "Kultur & Geschichte",
    desc: "Sturmannshöhle, Erlebnis-Erzgruben und Bergbauernmuseum Diepolz.",
  },
  {
    icon: Fish,
    title: "Naturwunder",
    desc: "Breitachklamm, Allgäuer Käsereien und regionale Genüsse.",
  },
]

const LINKS = [
  {
    category: "Natur & Erlebnis",
    items: [
      { name: "Alpenwildpark", url: "https://www.alpenwildpark.de/" },
      { name: "Breitachklamm", url: "https://www.breitachklamm.com/" },
      {
        name: "Sturmannshöhle",
        url: "https://www.hoernerdoerfer.de/a-sturmannshoehle-obermaiselstein-allgaeu",
      },
      { name: "Erlebnis-Erzgruben Burgberg", url: "https://www.erzgruben.de/" },
      {
        name: "Bergbauernmuseum Diepolz",
        url: "https://www.bergbauernmuseum.de/willkommen.html",
      },
      { name: "Allgäuer Bergkäserei", url: "https://www.allgaeuer-bergkaese.de/" },
    ],
  },
  {
    category: "Sport & Abenteuer",
    items: [
      { name: "Grasgehrenlifte", url: "https://grasgehren.de/" },
      {
        name: "Söllereckbahn Oberstdorf",
        url: "https://www.ok-bergbahnen.com/bergbahnen/soellereckbahn/",
      },
      { name: "Hörnerbahn Bolsterlang", url: "https://www.hoernerbahn.de/" },
      { name: "Sommerrodelbahn Alpsee Bergwelt", url: "https://www.alpsee-bergwelt.de/" },
      { name: "Kletterwald Bärenfalle", url: "https://www.kletterwald-baerenfalle.de/" },
      { name: "OASE Gleitschirmflugschule", url: "https://www.oase-paragliding.com/" },
      { name: "Allgäu Bikers Immenstadt", url: "https://www.allgaeu-bikers.de/" },
    ],
  },
  {
    category: "Freizeit & Region",
    items: [
      { name: "Wonnemar Sonthofen", url: "https://www.wonnemar.de/sonthofen/" },
      { name: "Hörnerdörfer", url: "https://www.hoernerdoerfer.de/" },
      {
        name: "Obermaiselstein Tourismus",
        url: "https://www.hoernerdoerfer.de/obermaiselstein",
      },
      { name: "Allgäu Walser Card", url: "https://www.allgaeu-walser-card.com/" },
    ],
  },
]

export function Activities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="ausfluege" className="bg-white py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <h2 className="font-serif text-[2rem] text-warm-900 sm:text-[2.4rem]">
            Ausflüge &amp; Aktivitäten
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-serif text-[15px] leading-relaxed text-warm-800/60">
            Die Ferienregion Oberallgäu bietet zu jeder Jahreszeit unendlich
            viele Möglichkeiten. Hier einige unserer Empfehlungen.
          </p>
        </div>

        {/* Aktivitäten-Grid */}
        <div ref={ref} className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {ACTIVITIES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl bg-forest-50/50 p-5 text-center transition-all hover:bg-forest-50"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-forest-100 text-forest-700 transition-colors group-hover:bg-forest-700 group-hover:text-white">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-serif text-[15px] font-semibold text-warm-900">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[12px] leading-relaxed text-warm-800/55">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Links nach Kategorie */}
        <div className="mt-16">
          <h3 className="text-center font-serif text-xl text-warm-900">
            Nützliche Links für Ihren Aufenthalt
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LINKS.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-warm-200/60 bg-warm-50/50 p-5"
              >
                <h4 className="font-serif text-[15px] font-semibold text-forest-700">
                  {group.category}
                </h4>
                <ul className="mt-3 space-y-2">
                  {group.items.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 text-[13px] text-warm-800/65 transition-colors hover:text-forest-700"
                      >
                        <ExternalLink className="h-3 w-3 shrink-0 text-warm-800/30 transition-colors group-hover/link:text-forest-600" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
