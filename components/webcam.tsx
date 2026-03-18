"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Camera, ExternalLink } from "lucide-react"

export function Webcam() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="webcam" className="bg-forest-800 py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
            <Camera className="h-6 w-6 text-white/80" />
          </div>
          <h2 className="font-serif text-[2rem] text-white sm:text-[2.4rem]">
            Live-Webcam Obermaiselstein
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-serif text-[15px] leading-relaxed text-white/55">
            Schauen Sie sich das aktuelle Wetter und die Aussicht in
            Obermaiselstein an &ndash; live und in Echtzeit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10"
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/30">
            <iframe
              src="https://www.foto-webcam.eu/webcam/obermaiselstein/"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              title="Webcam Obermaiselstein - Aktueller Blick"
              className="w-full bg-black"
            />
          </div>

          <div className="mt-5 text-center">
            <a
              href="https://www.foto-webcam.eu/webcam/obermaiselstein/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-serif text-[14px] text-white/50 transition-colors hover:text-white/80"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Webcam in neuem Fenster öffnen
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
