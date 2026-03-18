"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/data";
import { ArrowRight } from "lucide-react";

const galleries = [
  {
    title: "Das Landhaus",
    slug: "landhaus",
    description:
      "Unser Landhaus Ücker in verschiedenen Jahreszeiten und Perspektiven.",
    image: GALLERY_IMAGES.landhaus[0],
  },
  {
    title: "Umgebung",
    slug: "umgebung",
    description:
      "Die traumhafte Allgäuer Landschaft rund um Obermaiselstein.",
    image: GALLERY_IMAGES.umgebung[0],
  },
  {
    title: "Ausflugsziele",
    slug: "ausflugsziele",
    description:
      "Impressionen von beliebten Ausflugszielen in der Region.",
    image: GALLERY_IMAGES.ausflugsziele[0],
  },
];

function GalleryCard({
  gallery,
  index,
}: {
  gallery: (typeof galleries)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link
        href={`/galerie/${gallery.slug}`}
        className="group block overflow-hidden rounded-2xl border border-warm-100 bg-white shadow-lg transition-shadow hover:shadow-xl"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={gallery.image.src}
            alt={gallery.image.alt}
            fill
            unoptimized
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
              {gallery.title}
            </h2>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <p className="font-serif text-lg leading-relaxed text-warm-800">
            {gallery.description}
          </p>
          <div className="mt-4 flex items-center gap-2 font-serif text-lg font-semibold text-forest-700 group-hover:text-forest-800">
            Galerie ansehen
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function GaleriePage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <main className="min-h-screen bg-warm-50 pt-28 pb-20">
      {/* Page Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-14 max-w-6xl px-4 text-center sm:px-6"
      >
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl lg:text-6xl">
          Galerie
        </h1>
        <p className="mx-auto mt-5 max-w-3xl font-serif text-xl leading-relaxed text-warm-800 md:text-2xl">
          Entdecken Sie das Landhaus Ücker, die wunderschöne Umgebung und
          beliebte Ausflugsziele in Bildern.
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleries.map((gallery, index) => (
            <GalleryCard key={gallery.slug} gallery={gallery} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
