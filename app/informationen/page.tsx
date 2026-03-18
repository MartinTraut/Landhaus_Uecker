"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Clock,
  CreditCard,
  XCircle,
  Wifi,
  Car,
  Zap,
  Dog,
  CigaretteOff,
  BedDouble,
  Shirt,
  UtensilsCrossed,
  BookOpen,
  Bus,
  ChevronRight,
} from "lucide-react";

function Section({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

const services = [
  { icon: Zap, text: "Wallbox für E-Autos" },
  { icon: Car, text: "Kostenloser Parkplatz" },
  { icon: Zap, text: "E-Bike Ladestation" },
  { icon: UtensilsCrossed, text: "Brötchenservice" },
  { icon: Wifi, text: "WLAN kostenlos (6\u201324 Uhr)" },
  { icon: BedDouble, text: "Bettwäsche & Handtücher inklusive" },
  { icon: BedDouble, text: "Kinderreisebett & Hochstuhl auf Anfrage" },
  { icon: BookOpen, text: "Spiele & Bücher" },
  { icon: Shirt, text: "Beheizter Schuhraum" },
  { icon: Bus, text: "Ski- & Wanderbus (Haltestelle in der Nähe)" },
];

export default function InformationenPage() {
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
        className="mx-auto mb-14 max-w-5xl px-4 text-center sm:px-6"
      >
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl lg:text-6xl">
          Wissenswertes
        </h1>
        <p className="mx-auto mt-5 max-w-3xl font-serif text-xl leading-relaxed text-warm-800 md:text-2xl">
          Alle wichtigen Informationen rund um Ihren Aufenthalt im Landhaus
          Ücker.
        </p>
      </motion.div>

      <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6">
        {/* Check-in / Check-out */}
        <Section>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                  <Clock className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-warm-900 md:text-3xl">
                  Check-in
                </h2>
              </div>
              <p className="font-serif text-lg leading-relaxed text-warm-800">
                <span className="font-semibold text-forest-700">
                  16:00 – 19:00 Uhr
                </span>{" "}
                oder nach Absprache
              </p>
            </div>

            <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                  <Clock className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-warm-900 md:text-3xl">
                  Check-out
                </h2>
              </div>
              <p className="font-serif text-lg leading-relaxed text-warm-800">
                bis{" "}
                <span className="font-semibold text-forest-700">
                  9:30 Uhr
                </span>
              </p>
            </div>
          </div>
        </Section>

        {/* Payment */}
        <Section delay={0.1}>
          <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                <CreditCard className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-warm-900 md:text-3xl">
                Bezahlung
              </h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 font-serif text-lg text-warm-800">
                <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-forest-600" />
                <span>
                  <span className="font-semibold">Barzahlung</span> – 1 Tag vor
                  Abreise
                </span>
              </li>
              <li className="flex items-start gap-3 font-serif text-lg text-warm-800">
                <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-forest-600" />
                <span>
                  <span className="font-semibold">Überweisung</span> – 1 Woche
                  vor Anreise
                </span>
              </li>
            </ul>
          </div>
        </Section>

        {/* Cancellation */}
        <Section delay={0.15}>
          <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                <XCircle className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-warm-900 md:text-3xl">
                Stornierung
              </h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 font-serif text-lg text-warm-800">
                <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-forest-600" />
                <span>
                  <span className="font-semibold">Kostenlos</span> bis 42 Tage
                  vor Anreise
                </span>
              </li>
              <li className="flex items-start gap-3 font-serif text-lg text-warm-800">
                <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-forest-600" />
                <span>
                  Danach werden{" "}
                  <span className="font-semibold">90% des Mietpreises</span>{" "}
                  berechnet
                </span>
              </li>
            </ul>
          </div>
        </Section>

        {/* Services */}
        <Section delay={0.2}>
          <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md md:p-8">
            <h2 className="mb-6 font-serif text-2xl font-bold text-warm-900 md:text-3xl">
              Unsere Leistungen
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.text}
                  className="flex items-center gap-3 rounded-xl bg-warm-50 p-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-forest-100 text-forest-700">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <span className="font-serif text-lg text-warm-900">
                    {service.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Pets & Smoking */}
        <Section delay={0.25}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                  <Dog className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-warm-900 md:text-3xl">
                  Haustiere
                </h2>
              </div>
              <p className="font-serif text-lg leading-relaxed text-warm-800">
                Haustiere sind{" "}
                <span className="font-semibold">nur nach vorheriger Anfrage</span>{" "}
                gestattet.
              </p>
              <p className="mt-2 font-serif text-lg font-semibold text-forest-700">
                7 € / Nacht
              </p>
            </div>

            <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                  <CigaretteOff className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-warm-900 md:text-3xl">
                  Rauchen
                </h2>
              </div>
              <p className="font-serif text-lg leading-relaxed text-warm-800">
                Rauchen ist nur auf den{" "}
                <span className="font-semibold">
                  Balkonen und Terrassen
                </span>{" "}
                gestattet.
              </p>
            </div>
          </div>
        </Section>

        {/* Navigation Links */}
        <Section delay={0.3}>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/informationen/aktivitaeten"
              className="group rounded-2xl border border-warm-100 bg-white p-6 shadow-md transition-shadow hover:shadow-lg md:p-8"
            >
              <h3 className="font-serif text-xl font-bold text-warm-900 group-hover:text-forest-700 md:text-2xl">
                Aktivitäten & Ausflüge
              </h3>
              <p className="mt-2 font-serif text-lg text-warm-800">
                Entdecken Sie die vielfältigen Freizeitmöglichkeiten rund um
                Obermaiselstein.
              </p>
            </Link>
            <Link
              href="/informationen/anfahrt"
              className="group rounded-2xl border border-warm-100 bg-white p-6 shadow-md transition-shadow hover:shadow-lg md:p-8"
            >
              <h3 className="font-serif text-xl font-bold text-warm-900 group-hover:text-forest-700 md:text-2xl">
                Anfahrt & Kontakt
              </h3>
              <p className="mt-2 font-serif text-lg text-warm-800">
                So finden Sie uns – mit Karte und Wegbeschreibung.
              </p>
            </Link>
          </div>
        </Section>
      </div>
    </main>
  );
}
