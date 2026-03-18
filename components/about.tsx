"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="ueber-uns" className="bg-white py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div ref={ref} className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl shadow-warm-900/8">
              <Image
                src="https://www.xn--landhaus-cker-4ob.de/images/3272/gastgeber-1000.jpg"
                alt="Walter und Andrea Ücker - Ihre Gastgeber"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h2 className="font-serif text-[2rem] leading-[1.25] text-warm-900 sm:text-[2.4rem]">
              Herzlich willkommen bei uns
            </h2>
            <div className="mt-6 space-y-4 font-serif text-[17px] leading-[1.85] text-warm-800/75">
              <p>
                Unser gepflegtes Haus liegt auf 900 Metern Höhe in
                Obermaiselstein und bietet Ihnen einen traumhaften
                Panoramablick in die Allgäuer Alpen.
              </p>
              <p>
                Vom gemütlichen 1-Raum-Appartement bis zur geräumigen
                80-Quadratmeter-Wohnung mit zwei Schlafzimmern &ndash; alle
                unsere Ferienwohnungen sind liebevoll im Landhausstil
                eingerichtet. In unseren Wohlfühlbetten finden Sie besten
                Schlaf und Erholung.
              </p>
              <p>
                Restaurants sind bequem zu Fuß erreichbar, ein kostenloser
                Parkplatz steht direkt vor dem Haus. Die Loipe und der
                Pferdehof sind nur 200 Meter entfernt. Die Ferienregion
                Oberallgäu bietet zu jeder Jahreszeit unendlich viele
                Möglichkeiten.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { value: "900m", label: "Höhe" },
                { value: "4", label: "Wohnungen" },
                { value: "20–80m²", label: "Größe" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-warm-50 px-4 py-4 text-center"
                >
                  <p className="font-serif text-2xl font-semibold text-forest-700">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] tracking-wider uppercase text-warm-800/45">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 font-serif text-[17px] text-warm-800/60 italic">
              Wir freuen uns auf Sie &ndash; Walter und Andrea Ücker
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
