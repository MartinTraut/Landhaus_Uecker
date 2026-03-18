"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

const BASE = "https://www.xn--landhaus-cker-4ob.de"

const HERO_IMAGES = [
  {
    src: `${BASE}/images/3900/img-20200714-154038.jpg`,
    alt: "Allgäuer Berglandschaft im Sommer",
  },
  {
    src: `${BASE}/images/2743/p1370466.jpg`,
    alt: "Panoramablick auf die Allgäuer Alpen",
  },
  {
    src: `${BASE}/images/3461/20190204-115037.jpg`,
    alt: "Verschneite Berglandschaft im Winter",
  },
  {
    src: `${BASE}/images/2699/headline-start.jpg`,
    alt: "Landhaus Ücker mit Bergpanorama",
  },
]

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative h-screen min-h-[650px] w-full overflow-hidden">
      {/* Rotierende Hintergrundbilder */}
      {HERO_IMAGES.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          className={`object-cover transition-opacity duration-[2000ms] ease-in-out ${
            i === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
          sizes="100vw"
          quality={90}
          unoptimized
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/55" />

      <div className="relative flex h-full flex-col items-center justify-center px-5 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mb-7 h-px w-12 bg-white/40"
          />
          <p className="mb-4 font-serif text-[14px] font-light tracking-[0.25em] uppercase text-white/60">
            Ferienwohnungen auf 900m Höhe
          </p>
          <h1 className="font-serif text-[2.5rem] leading-[1.15] font-light sm:text-5xl md:text-[3.5rem] lg:text-[4rem]">
            Ein herzliches{" "}
            <em className="font-medium not-italic">Grüß Gott</em>
            <br />
            im Landhaus Ücker
          </h1>
          <p className="mx-auto mt-6 max-w-lg font-serif text-[15px] leading-[1.75] font-light text-white/70">
            Sie suchen Ruhe, um sich in Ihrem wohlverdienten Urlaub
            so richtig erholen zu können? Bei uns werden Sie fündig.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center">
            <a
              href="#wohnungen"
              className="inline-flex w-full items-center justify-center rounded-lg bg-forest-700 px-8 py-3.5 font-serif text-[15px] font-semibold tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-forest-800 hover:shadow-xl sm:w-auto"
            >
              Unsere Wohnungen
            </a>
            <a
              href="#kontakt"
              className="inline-flex w-full items-center justify-center rounded-lg border border-white/25 bg-white/8 px-8 py-3.5 font-serif text-[15px] font-medium tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/15 sm:w-auto"
            >
              Anfrage senden
            </a>
          </div>
        </motion.div>

        {/* Bild-Indikator */}
        <div className="absolute bottom-20 flex gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === currentIndex
                  ? "w-8 bg-white/70"
                  : "w-2 bg-white/25 hover:bg-white/40"
              }`}
              aria-label={`Bild ${i + 1}`}
            />
          ))}
        </div>

        <motion.a
          href="#ueber-uns"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
          }}
          className="absolute bottom-8 text-white/30 transition-colors hover:text-white/60"
          aria-label="Weiter scrollen"
        >
          <ChevronDown className="h-7 w-7" />
        </motion.a>
      </div>
    </section>
  )
}
