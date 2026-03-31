"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { GALLERY_IMAGES } from "@/lib/data"
import { CardStack, type CardStackItem } from "@/components/ui/card-stack"
import { ArrowRight } from "lucide-react"
import { useResponsiveCardSize } from "@/hooks/use-responsive-card-size"

const BASE = "https://www.xn--landhaus-cker-4ob.de"

function toCardItems(
  images: { src: string; alt: string }[],
  limit = 8
): CardStackItem[] {
  return images.slice(0, limit).map((img, i) => ({
    id: i,
    title: img.alt,
    imageSrc: img.src,
  }))
}

const sections = [
  {
    title: "Landhaus Ücker",
    slug: "landhaus",
    description: "Unser Landhaus in verschiedenen Jahreszeiten und Perspektiven.",
    items: toCardItems(GALLERY_IMAGES.landhaus),
    count: GALLERY_IMAGES.landhaus.length,
  },
  {
    title: "Umgebung",
    slug: "umgebung",
    description: "Die traumhafte Allgäuer Landschaft rund um Obermaiselstein.",
    items: toCardItems(GALLERY_IMAGES.umgebung),
    count: GALLERY_IMAGES.umgebung.length,
  },
  {
    title: "Ausflugsziele",
    slug: "ausflugsziele",
    description: "Impressionen von beliebten Ausflugszielen in der Region.",
    items: toCardItems(GALLERY_IMAGES.ausflugsziele),
    count: GALLERY_IMAGES.ausflugsziele.length,
  },
]

function GallerySection({
  section,
  index,
}: {
  section: (typeof sections)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const { cardWidth, cardHeight, maxVisible } = useResponsiveCardSize()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(el)
        }
      },
      { rootMargin: "-60px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-warm-200 bg-white p-4 shadow-lg sm:p-6 md:p-8 transition-all duration-600 ease-out"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-6 text-center">
        <p className="accent-script mb-1 text-xl text-forest-700 sm:text-2xl">
          {section.count} Bilder
        </p>
        <h2 className="font-serif text-2xl font-bold text-warm-900 sm:text-3xl">
          {section.title}
        </h2>
        <p className="mx-auto mt-2 max-w-md font-serif text-base text-warm-800/70">
          {section.description}
        </p>
      </div>

      <CardStack
        items={section.items}
        autoAdvance
        intervalMs={3000}
        pauseOnHover
        showDots={false}
        cardWidth={cardWidth}
        cardHeight={cardHeight}
        maxVisible={maxVisible}
        overlap={0.5}
        spreadDeg={40}
        depthPx={100}
        tiltXDeg={10}
        activeLiftPx={18}
      />

      <div className="mt-6 text-center">
        <Link
          href={`/galerie/${section.slug}`}
          className="group inline-flex items-center gap-2 rounded-xl bg-forest-700 px-8 py-3 font-serif text-lg font-semibold text-white shadow-md transition-all hover:bg-forest-800"
        >
          Alle Bilder ansehen
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}

export default function GaleriePage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const [headerInView, setHeaderInView] = useState(false)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderInView(true)
          observer.unobserve(el)
        }
      },
      { rootMargin: "0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-warm-50 pt-28 pb-20">
      <div
        ref={headerRef}
        className="mx-auto mb-14 max-w-6xl px-4 text-center sm:px-6 transition-all duration-600 ease-out"
        style={{
          opacity: headerInView ? 1 : 0,
          transform: headerInView ? "translateY(0)" : "translateY(30px)",
        }}
      >
        <p className="accent-script mb-2 text-2xl text-forest-700 sm:text-3xl">
          Impressionen
        </p>
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl">
          Unsere Bildergalerie
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-serif text-xl leading-relaxed text-warm-800">
          Entdecken Sie das Landhaus Ücker, die wunderschöne Umgebung und
          beliebte Ausflugsziele in Bildern.
        </p>
      </div>

      <div className="mx-auto max-w-5xl space-y-12 px-4 sm:px-6">
        {sections.map((section, index) => (
          <GallerySection key={section.slug} section={section} index={index} />
        ))}
      </div>
    </div>
  )
}
