"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ACTIVITY_LINKS } from "@/lib/data";
import {
  Trees,
  Mountain,
  Waves,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  "Natur & Erlebnis": Trees,
  "Sport & Abenteuer": Mountain,
  "Freizeit & Region": Waves,
};

function CategorySection({
  category,
  items,
  index,
}: {
  category: string;
  items: { name: string; url: string }[];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = categoryIcons[category] || Trees;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md md:p-8"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
          <Icon className="h-6 w-6" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-warm-900 md:text-3xl">
          {category}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl bg-warm-50 p-4 transition-colors hover:bg-forest-50"
          >
            <span className="font-serif text-lg text-warm-900 group-hover:text-forest-700">
              {item.name}
            </span>
            <ExternalLink className="h-4 w-4 flex-shrink-0 text-warm-800 opacity-50 group-hover:text-forest-600 group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default function AktivitaetenPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <main className="min-h-screen bg-warm-50 pt-28 pb-20">
      {/* Back Link */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Link
          href="/informationen"
          className="mb-6 inline-flex items-center gap-2 font-serif text-lg text-forest-700 hover:text-forest-800"
        >
          <ArrowLeft className="h-5 w-5" />
          Zurück zu Wissenswertes
        </Link>
      </div>

      {/* Page Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-14 max-w-5xl px-4 text-center sm:px-6"
      >
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl lg:text-6xl">
          Aktivitäten & Ausflüge
        </h1>
        <p className="mx-auto mt-5 max-w-3xl font-serif text-xl leading-relaxed text-warm-800 md:text-2xl">
          Entdecken Sie die vielfältigen Freizeitmöglichkeiten rund um
          Obermaiselstein und das Allgäu.
        </p>
      </motion.div>

      {/* Activity Categories */}
      <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6">
        {ACTIVITY_LINKS.map((cat, index) => (
          <CategorySection
            key={cat.category}
            category={cat.category}
            items={cat.items}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}
