"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { APARTMENTS } from "@/lib/data";

function ApartmentCard({ apartment, index }: { apartment: (typeof APARTMENTS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-warm-100 hover:shadow-xl transition-shadow duration-300">
        {/* Image */}
        <Link href={`/wohnen/${apartment.slug}`} className="block relative aspect-[4/3] overflow-hidden">
          <Image
            src={apartment.images[0]}
            alt={apartment.name}
            fill
            unoptimized
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-forest-700 text-white font-serif text-lg px-4 py-1.5 rounded-full shadow-md">
            ab {apartment.priceFollowing} / Nacht
          </div>
        </Link>

        {/* Content */}
        <div className="p-6 md:p-8">
          <Link href={`/wohnen/${apartment.slug}`}>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-warm-900 hover:text-forest-700 transition-colors">
              {apartment.name}
            </h3>
          </Link>

          {/* Meta info */}
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="inline-flex items-center gap-1.5 bg-warm-50 text-warm-800 font-serif text-base px-3 py-1 rounded-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              {apartment.floor}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-warm-50 text-warm-800 font-serif text-base px-3 py-1 rounded-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
              {apartment.size}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-warm-50 text-warm-800 font-serif text-base px-3 py-1 rounded-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {apartment.persons}
            </span>
          </div>

          {/* Description */}
          <p className="mt-5 font-serif text-lg text-warm-800 leading-relaxed">
            {apartment.description}
          </p>

          {/* Highlights */}
          <div className="mt-5">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {apartment.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 font-serif text-base text-warm-900">
                  <svg className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href={`/wohnen/${apartment.slug}`}
              className="flex-1 text-center font-serif text-lg font-semibold text-forest-700 border-2 border-forest-700 rounded-xl py-3 px-6 hover:bg-forest-50 transition-colors"
            >
              Details ansehen
            </Link>
            <Link
              href="/kontakt"
              className="flex-1 text-center font-serif text-lg font-semibold text-white bg-forest-700 rounded-xl py-3 px-6 hover:bg-forest-800 transition-colors shadow-md"
            >
              Anfragen
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WohnenPage() {
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
        className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-14"
      >
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-warm-900">
          Unsere Ferienwohnungen
        </h1>
        <p className="mt-5 font-serif text-xl md:text-2xl text-warm-800 max-w-3xl mx-auto leading-relaxed">
          Vier liebevoll eingerichtete Ferienwohnungen im Landhausstil erwarten Sie im Herzen des Allgäus.
          Finden Sie Ihre perfekte Unterkunft.
        </p>
      </motion.div>

      {/* Apartment Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {APARTMENTS.map((apartment, index) => (
            <ApartmentCard key={apartment.slug} apartment={apartment} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
