"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/data";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

const images = GALLERY_IMAGES.landhaus;

function GalleryImage({
  image,
  index,
  onClick,
}: {
  image: { src: string; alt: string };
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="cursor-pointer overflow-hidden rounded-2xl border border-warm-100 bg-white shadow-md"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <p className="p-3 text-center font-serif text-base text-warm-800">
        {image.alt}
      </p>
    </motion.div>
  );
}

export default function LandhausGaleriePage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  }, []);

  return (
    <main className="min-h-screen bg-warm-50 pt-28 pb-20">
      {/* Back Link */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/galerie"
          className="mb-6 inline-flex items-center gap-2 font-serif text-lg text-forest-700 hover:text-forest-800"
        >
          <ArrowLeft className="h-5 w-5" />
          Zurück zur Galerie
        </Link>
      </div>

      {/* Page Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-14 max-w-6xl px-4 text-center sm:px-6"
      >
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl lg:text-6xl">
          Das Landhaus
        </h1>
        <p className="mx-auto mt-5 max-w-3xl font-serif text-xl leading-relaxed text-warm-800 md:text-2xl">
          Unser Landhaus Ücker in verschiedenen Jahreszeiten und Perspektiven.
        </p>
      </motion.div>

      {/* Image Grid */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 z-10 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 z-10 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            <div
              className="relative h-[80vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                fill
                unoptimized
                className="object-contain"
              />
              <p className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-center font-serif text-lg text-white">
                {images[lightboxIndex].alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
