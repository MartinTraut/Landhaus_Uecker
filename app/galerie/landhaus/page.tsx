"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { GALLERY_IMAGES } from "@/lib/data"
import { CardStack, type CardStackItem } from "@/components/ui/card-stack"
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useResponsiveCardSize } from "@/hooks/use-responsive-card-size"

const images = GALLERY_IMAGES.landhaus

const cardItems: CardStackItem[] = images.slice(0, 10).map((img, i) => ({
  id: i,
  title: img.alt,
  imageSrc: img.src,
}))

function GalleryImage({
  image,
  index,
  onClick,
}: {
  image: { src: string; alt: string }
  index: number
  onClick: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <div
      ref={ref}
      className={`cursor-pointer overflow-hidden rounded-2xl bg-warm-900 shadow-md transition-all duration-500 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${(index % 6) * 60}ms` }}
      onClick={onClick}
    >
      <div className="relative aspect-[4/3]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default function LandhausGaleriePage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true })
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const { cardWidth, cardHeight } = useResponsiveCardSize()

  const closeLightbox = () => setLightboxIndex(null)
  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    )
  }, [])
  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    )
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [lightboxIndex, goNext, goPrev])

  return (
    <div className="min-h-screen bg-warm-50 pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/galerie"
          className="mb-6 inline-flex items-center gap-2 font-serif text-lg text-forest-700 hover:text-forest-800"
        >
          <ArrowLeft className="h-5 w-5" />
          Zurück zur Galerie
        </Link>
      </div>

      <div
        ref={headerRef}
        className={`mx-auto mb-10 max-w-6xl px-4 text-center sm:px-6 transition-all duration-700 ease-out ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <p className="accent-script mb-2 text-2xl text-forest-700 sm:text-3xl">
          Bildergalerie
        </p>
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl">
          Landhaus Ücker
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-serif text-xl leading-relaxed text-warm-800">
          Unser Landhaus in Obermaiselstein – zu jeder Jahreszeit.
        </p>
        <p className="mt-2 font-serif text-base text-warm-800/50">
          {images.length} Bilder
        </p>
      </div>

      {/* CardStack Hero */}
      <div className="mx-auto mb-14 max-w-5xl px-4 sm:px-6">
        <CardStack
          items={cardItems}
          autoAdvance
          intervalMs={3500}
          pauseOnHover
          showDots={false}
          cardWidth={cardWidth}
          cardHeight={cardHeight}
          maxVisible={5}
          overlap={0.5}
          spreadDeg={42}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <GalleryImage
              key={image.src}
              image={image}
              index={index}
              onClick={() => setLightboxIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/15 p-2.5 text-white hover:bg-white/25"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="absolute left-4 z-10 rounded-full bg-white/15 p-2.5 text-white hover:bg-white/25"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="absolute right-4 z-10 rounded-full bg-white/15 p-2.5 text-white hover:bg-white/25"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
            <div
              className="flex max-h-[85vh] max-w-5xl items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                className="max-h-[85vh] max-w-full rounded-lg object-contain"
              />
            </div>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-serif text-base text-white/60">
              {lightboxIndex + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
