"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Phone, Mail, Navigation } from "lucide-react"

export function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="anfahrt" className="bg-warm-50 py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <h2 className="font-serif text-[2rem] text-warm-900 sm:text-[2.4rem]">
            So finden Sie uns
          </h2>
          <p className="mx-auto mt-3 max-w-md font-serif text-[15px] leading-relaxed text-warm-800/60">
            Wir freuen uns auf Ihren Besuch in Obermaiselstein im Allgäu.
          </p>
        </div>

        <div ref={ref} className="mt-12 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:col-span-2"
          >
            {[
              {
                icon: MapPin,
                title: "Adresse",
                content: (
                  <>
                    Landhaus Ücker<br />
                    Oberdorf 18<br />
                    87538 Obermaiselstein
                  </>
                ),
              },
              {
                icon: Phone,
                title: "Telefon",
                content: (
                  <a href="tel:+4983267711" className="text-forest-700 hover:text-forest-900 transition-colors">
                    08326 / 7711
                  </a>
                ),
              },
              {
                icon: Mail,
                title: "E-Mail",
                content: (
                  <a href="mailto:landhaus-uecker@gmx.de" className="text-forest-700 hover:text-forest-900 transition-colors">
                    landhaus-uecker@gmx.de
                  </a>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-warm-900">{item.title}</h3>
                  <div className="mt-1 text-[14px] text-warm-800/65">{item.content}</div>
                </div>
              </div>
            ))}

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=47.447691,10.2509747"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-forest-700 px-6 py-3.5 font-serif text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-forest-800"
            >
              <Navigation className="h-4 w-4" />
              Route planen
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700!2d10.2509747!3d47.447691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479c75e8f98b0e3d%3A0x0!2zNDfCsDI2JzUxLjciTiAxMMKwMTUnMDMuNSJF!5e0!3m2!1sde!2sde!4v1700000000000"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Landhaus Ücker auf Google Maps"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
