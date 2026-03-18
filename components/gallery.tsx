"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useCallback, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const BASE = "https://www.xn--landhaus-cker-4ob.de"

const IMAGES = [
  { src: `${BASE}/images/3961/20250712-101921.jpg`, alt: "Landhaus Ücker Außenansicht Sommer", span: "col-span-2 row-span-2" },
  { src: `${BASE}/images/2743/p1370466.jpg`, alt: "Allgäuer Alpen Panorama", span: "" },
  { src: `${BASE}/images/3946/img-0136-1.jpg`, alt: "Winterlandschaft Obermaiselstein", span: "" },
  { src: `${BASE}/images/3899/img-20200714-155814.jpg`, alt: "Sommerwiese mit Bergblick", span: "" },
  { src: `${BASE}/images/2707/img-6310.jpg`, alt: "Bergblick vom Landhaus", span: "" },
  { src: `${BASE}/images/3900/img-20200714-154038.jpg`, alt: "Wanderwege bei Obermaiselstein", span: "" },
  { src: `${BASE}/images/3451/2019-02-13-22-44-31.jpg`, alt: "Landhaus Ücker im Winter", span: "col-span-2" },
  { src: `${BASE}/images/3811/20190204-120025.jpg`, alt: "Winterpanorama Allgäu", span: "" },
  { src: `${BASE}/images/3461/20190204-115037.jpg`, alt: "Verschneite Berge", span: "" },
]

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === "Escape") setLightboxIndex(null)
      if (e.key === "ArrowLeft") setLightboxIndex((lightboxIndex - 1 + IMAGES.length) % IMAGES.length)
      if (e.key === "ArrowRight") setLightboxIndex((lightboxIndex + 1) % IMAGES.length)
    },
    [lightboxIndex]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  return (
    <>
      <section id="galerie" className="bg-white py-24 sm:py-32 lg:py-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <h2 className="font-serif text-[2rem] text-warm-900 sm:text-[2.4rem]">
              Impressionen
            </h2>
            <p className="mx-auto mt-3 max-w-md font-serif text-[15px] leading-relaxed text-warm-800/60">
              Bilder aus unserem Landhaus und der wunderschönen Umgebung
              im Oberallgäu.
            </p>
          </div>

          <div
            ref={ref}
            className="mt-12 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 sm:gap-3"
          >
            {IMAGES.map((img, i) => (
              <motion.button
                key={img.src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setLightboxIndex(i)}
                className={`group relative overflow-hidden rounded-xl ${img.span} aspect-square`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(null) }}
            className="absolute top-5 right-5 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
            aria-label="Schließen"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightboxIndex((lightboxIndex - 1 + IMAGES.length) % IMAGES.length)
            }}
            className="absolute left-4 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={IMAGES[lightboxIndex].src}
              alt={IMAGES[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              quality={90}
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightboxIndex((lightboxIndex + 1) % IMAGES.length)
            }}
            className="absolute right-4 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <p className="absolute bottom-5 text-[13px] text-white/40">
            {lightboxIndex + 1} / {IMAGES.length}
          </p>
        </div>
      )}
    </>
  )
}
