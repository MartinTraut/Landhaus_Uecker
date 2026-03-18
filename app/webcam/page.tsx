"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WEBCAM_URL } from "@/lib/data";
import { Camera, ExternalLink } from "lucide-react";

export default function WebcamPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  const contentRef = useRef<HTMLDivElement>(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-60px" });

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
          Webcam
        </h1>
        <p className="mx-auto mt-5 max-w-3xl font-serif text-xl leading-relaxed text-warm-800 md:text-2xl">
          Live-Blick auf Obermaiselstein und die Allgäuer Berge.
        </p>
      </motion.div>

      {/* Webcam Section */}
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 30 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-4 sm:px-6"
      >
        <div className="overflow-hidden rounded-2xl border border-warm-100 bg-forest-800 shadow-xl">
          {/* Webcam Header */}
          <div className="flex items-center gap-3 px-6 py-4">
            <Camera className="h-6 w-6 text-forest-100" />
            <h2 className="font-serif text-xl font-bold text-white md:text-2xl">
              Obermaiselstein Live
            </h2>
            <div className="ml-auto flex items-center gap-2">
              <span className="h-3 w-3 animate-pulse rounded-full bg-green-400" />
              <span className="font-serif text-sm text-forest-100">Live</span>
            </div>
          </div>

          {/* Webcam iframe */}
          <div className="relative aspect-video w-full">
            <iframe
              src={WEBCAM_URL}
              className="absolute inset-0 h-full w-full"
              title="Webcam Obermaiselstein"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Footer */}
          <div className="flex flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:justify-between">
            <p className="font-serif text-base text-forest-100">
              Quelle: foto-webcam.eu
            </p>
            <a
              href={WEBCAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-serif text-lg font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <ExternalLink className="h-5 w-5" />
              Im neuen Tab öffnen
            </a>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
