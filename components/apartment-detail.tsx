"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { type ApartmentData, APARTMENTS } from "@/lib/data";

function ImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="w-full">
      {/* Main Image - sauber ohne Balken */}
      <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/9] rounded-2xl overflow-hidden bg-warm-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[current]}
              alt={`${name} - Bild ${current + 1}`}
              className="h-full w-full object-cover"
              loading={current === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next Buttons */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-warm-900 shadow-lg transition-colors hover:bg-white"
          aria-label="Vorheriges Bild"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-warm-900 shadow-lg transition-colors hover:bg-white"
          aria-label="Nächstes Bild"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Bildzähler statt Dots */}
        <div className="absolute bottom-4 right-4 z-10 rounded-lg bg-black/50 px-3 py-1.5 font-serif text-sm text-white backdrop-blur-sm">
          {current + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="mt-3 flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-thin">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg transition-all md:h-20 md:w-28 ${
              i === current
                ? "ring-3 ring-forest-600 ring-offset-2"
                : "opacity-50 hover:opacity-80"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Thumbnail ${i + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function DetailSection({
  title,
  items,
  icon,
  delay = 0,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl shadow-sm border border-warm-100 p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 bg-forest-50 rounded-xl flex items-center justify-center text-forest-700">
          {icon}
        </div>
        <h3 className="font-serif text-2xl font-bold text-warm-900">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 font-serif text-lg text-warm-800">
            <svg className="w-5 h-5 text-forest-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ApartmentDetail({ slug }: { slug: string }) {
  const apartment = APARTMENTS.find((a) => a.slug === slug);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  const priceRef = useRef<HTMLDivElement>(null);
  const priceInView = useInView(priceRef, { once: true, margin: "-60px" });

  if (!apartment) {
    return (
      <main className="min-h-screen bg-warm-50 pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl text-warm-900">Wohnung nicht gefunden</h1>
          <Link href="/wohnen" className="mt-4 inline-block font-serif text-lg text-forest-700 underline">
            Zurück zur Übersicht
          </Link>
        </div>
      </main>
    );
  }

  const otherApartments = APARTMENTS.filter((a) => a.slug !== slug);

  return (
    <main className="min-h-screen bg-warm-50 pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <Link
          href="/wohnen"
          className="inline-flex items-center gap-2 font-serif text-lg text-forest-700 hover:text-forest-800 mb-6 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zur Übersicht
        </Link>

        {/* Image Carousel */}
        <ImageCarousel images={apartment.images} name={apartment.name} />

        {/* Header Info */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-warm-900">{apartment.name}</h1>

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="inline-flex items-center gap-2 bg-warm-100 text-warm-900 font-serif text-lg px-4 py-2 rounded-xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              {apartment.floor}
            </span>
            <span className="inline-flex items-center gap-2 bg-warm-100 text-warm-900 font-serif text-lg px-4 py-2 rounded-xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
              {apartment.size}
            </span>
            <span className="inline-flex items-center gap-2 bg-warm-100 text-warm-900 font-serif text-lg px-4 py-2 rounded-xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {apartment.persons}
            </span>
          </div>

          <p className="mt-6 font-serif text-xl text-warm-800 leading-relaxed max-w-3xl">
            {apartment.longDescription}
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-wrap gap-3">
            {apartment.highlights.map((h) => (
              <span key={h} className="inline-flex items-center gap-2 bg-forest-50 text-forest-800 font-serif text-base px-4 py-2 rounded-xl border border-forest-100">
                <svg className="w-4 h-4 text-forest-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {h}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Detail Sections */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <DetailSection
            title="Schlafbereich"
            items={apartment.bedroom}
            delay={0}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
          />
          <DetailSection
            title="Küche"
            items={apartment.kitchen}
            delay={0.1}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            }
          />
          <DetailSection
            title="Badezimmer"
            items={apartment.bathroom}
            delay={0.2}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            }
          />
          <DetailSection
            title="Extras"
            items={apartment.extras}
            delay={0.3}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            }
          />
        </div>

        {/* Price Table */}
        <motion.div
          ref={priceRef}
          initial={{ opacity: 0, y: 30 }}
          animate={priceInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-forest-50 rounded-2xl border-2 border-forest-100 p-6 md:p-10"
        >
          <h2 className="font-serif text-3xl font-bold text-warm-900 mb-6">
            Preise & Konditionen
          </h2>
          <div className="space-y-0 divide-y divide-forest-100">
            <div className="flex flex-wrap justify-between items-center gap-1 py-4">
              <span className="font-serif text-base text-warm-800 sm:text-lg">1. Nacht</span>
              <span className="font-serif text-lg font-bold text-warm-900 sm:text-xl">{apartment.priceFirst}</span>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-1 py-4 bg-forest-100/50 -mx-6 md:-mx-10 px-6 md:px-10 rounded-xl">
              <span className="font-serif text-base font-semibold text-forest-800 sm:text-lg">Ab 2. Nacht</span>
              <span className="font-serif text-xl font-bold text-forest-800 sm:text-2xl">{apartment.priceFollowing}</span>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-1 py-4">
              <span className="font-serif text-base text-warm-800 sm:text-lg">Mindestaufenthalt</span>
              <span className="font-serif text-lg font-bold text-warm-900 sm:text-xl">{apartment.minNights}</span>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-1 py-4">
              <span className="font-serif text-base text-warm-800 sm:text-lg">Zusatzperson</span>
              <span className="font-serif text-lg font-bold text-warm-900 sm:text-xl">{apartment.additionalPerson}</span>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-1 py-4">
              <span className="font-serif text-base text-warm-800 sm:text-lg">Kurbeitrag</span>
              <span className="font-serif text-base font-semibold text-warm-900 text-right max-w-full sm:max-w-[60%] sm:text-lg">{apartment.kurbeitrag}</span>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-1 py-4">
              <span className="font-serif text-base text-warm-800 sm:text-lg">Haustier</span>
              <span className="font-serif text-base font-semibold text-warm-900 sm:text-lg">7 € / Nacht (auf Anfrage)</span>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-1 py-4">
              <span className="font-serif text-base text-warm-800 sm:text-lg">WLAN</span>
              <span className="font-serif text-base font-semibold text-forest-700 sm:text-lg">kostenlos (6–24 Uhr)</span>
            </div>
          </div>
          <p className="mt-4 font-serif text-base text-warm-800 italic">
            {apartment.priceNote}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://www.xn--landhaus-cker-4ob.de/77/anfrage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-forest-700 px-10 py-4 font-serif text-xl font-bold text-white shadow-lg transition-all hover:bg-forest-800 hover:shadow-xl sm:w-auto"
            >
              Jetzt buchen
            </a>
            <Link
              href="/kontakt"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-forest-700 px-10 py-4 font-serif text-xl font-bold text-forest-700 transition-all hover:bg-forest-50 sm:w-auto"
            >
              Anfrage senden
            </Link>
          </div>
        </motion.div>

        {/* Other Apartments */}
        <div className="mt-16">
          <h2 className="font-serif text-3xl font-bold text-warm-900 mb-6">
            Weitere Ferienwohnungen
          </h2>
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 sm:grid-cols-3 gap-4">
            {otherApartments.map((apt) => (
              <Link
                key={apt.slug}
                href={`/wohnen/${apt.slug}`}
                className="group bg-white rounded-xl shadow-sm border border-warm-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={apt.images[0]}
                    alt={apt.name}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-bold text-warm-900 group-hover:text-forest-700 transition-colors">
                    {apt.name}
                  </h3>
                  <p className="font-serif text-base text-warm-800 mt-1">
                    {apt.size} &middot; {apt.persons}
                  </p>
                  <p className="font-serif text-base font-semibold text-forest-700 mt-1">
                    ab {apt.priceFollowing} / Nacht
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Back to overview */}
        <div className="mt-12 text-center">
          <Link
            href="/wohnen"
            className="inline-flex items-center gap-2 font-serif text-lg text-forest-700 hover:text-forest-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zur Übersicht
          </Link>
        </div>
      </div>
    </main>
  );
}
