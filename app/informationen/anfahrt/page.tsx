"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  ArrowLeft,
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

export default function AnfahrtPage() {
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
          Anfahrt
        </h1>
        <p className="mx-auto mt-5 max-w-3xl font-serif text-xl leading-relaxed text-warm-800 md:text-2xl">
          So finden Sie das Landhaus Ücker in Obermaiselstein.
        </p>
      </motion.div>

      <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6">
        {/* Contact Info Cards */}
        <Section>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                <MapPin className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-warm-900">
                Adresse
              </h3>
              <p className="mt-2 font-serif text-lg text-warm-800">
                Oberdorf 18
                <br />
                87538 Obermaiselstein
              </p>
            </div>

            <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                <Phone className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-warm-900">
                Telefon
              </h3>
              <a
                href="tel:+4983267711"
                className="mt-2 block font-serif text-lg text-forest-700 hover:text-forest-800"
              >
                08326 / 7711
              </a>
            </div>

            <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                <Mail className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-warm-900">
                E-Mail
              </h3>
              <a
                href="mailto:landhaus-uecker@gmx.de"
                className="mt-2 block font-serif text-lg text-forest-700 hover:text-forest-800 break-all"
              >
                landhaus-uecker@gmx.de
              </a>
            </div>
          </div>
        </Section>

        {/* Map */}
        <Section delay={0.15}>
          <div className="overflow-hidden rounded-2xl border border-warm-100 bg-white shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700!2d10.2509747!3d47.447691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479c7e5c60c3b4e7%3A0x0!2zNDfCsDI2JzUxLjciTiAxMMKwMTUnMDMuNSJF!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Landhaus Ücker auf Google Maps"
            />
            <div className="p-6 text-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=47.447691,10.2509747"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-forest-700 px-8 py-3 font-serif text-lg font-semibold text-white shadow-md transition-colors hover:bg-forest-800"
              >
                <Navigation className="h-5 w-5" />
                Route planen
              </a>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
