"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, Mail, Send } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="kontakt" className="bg-white py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <h2 className="font-serif text-[2rem] text-warm-900 sm:text-[2.4rem]">
            Wir freuen uns auf Ihre Anfrage
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-serif text-[15px] leading-relaxed text-warm-800/60">
            Haben Sie Fragen zu unseren Ferienwohnungen oder möchten Sie
            direkt buchen? Wir beraten Sie gerne persönlich.
          </p>
        </div>

        <div ref={ref} className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Links: Kontaktinfos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:col-span-2"
          >
            <a
              href="tel:+4983267711"
              className="flex items-center gap-4 rounded-xl border border-warm-200/60 bg-warm-50 p-5 transition-all hover:shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[13px] text-warm-800/50">Rufen Sie uns an</p>
                <p className="font-serif text-lg font-semibold text-warm-900">08326 / 7711</p>
              </div>
            </a>

            <a
              href="mailto:landhaus-uecker@gmx.de"
              className="flex items-center gap-4 rounded-xl border border-warm-200/60 bg-warm-50 p-5 transition-all hover:shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[13px] text-warm-800/50">Schreiben Sie uns</p>
                <p className="font-serif text-lg font-semibold text-warm-900">landhaus-uecker@gmx.de</p>
              </div>
            </a>

            <div className="rounded-xl bg-forest-50/80 p-5">
              <p className="font-serif text-[15px] font-semibold text-forest-800">
                Ihre Gastgeber
              </p>
              <p className="mt-1.5 font-serif text-[14px] leading-relaxed text-forest-800/60">
                Walter und Andrea Ücker freuen sich auf Ihren Besuch in
                Obermaiselstein im schönen Allgäu.
              </p>
            </div>
          </motion.div>

          {/* Rechts: Kontaktformular */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form
              action="mailto:landhaus-uecker@gmx.de"
              method="POST"
              encType="text/plain"
              className="space-y-4 rounded-2xl border border-warm-200/60 bg-warm-50/50 p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block font-serif text-[13px] font-medium text-warm-900">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-warm-200 bg-white px-4 py-3 text-[14px] text-warm-900 transition-colors focus:border-forest-600 focus:ring-1 focus:ring-forest-600 focus:outline-none"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-serif text-[13px] font-medium text-warm-900">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-warm-200 bg-white px-4 py-3 text-[14px] text-warm-900 transition-colors focus:border-forest-600 focus:ring-1 focus:ring-forest-600 focus:outline-none"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-1.5 block font-serif text-[13px] font-medium text-warm-900">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-xl border border-warm-200 bg-white px-4 py-3 text-[14px] text-warm-900 transition-colors focus:border-forest-600 focus:ring-1 focus:ring-forest-600 focus:outline-none"
                    placeholder="Ihre Telefonnummer"
                  />
                </div>
                <div>
                  <label htmlFor="apartment" className="mb-1.5 block font-serif text-[13px] font-medium text-warm-900">
                    Gewünschte Wohnung
                  </label>
                  <select
                    id="apartment"
                    name="apartment"
                    className="w-full rounded-xl border border-warm-200 bg-white px-4 py-3 text-[14px] text-warm-900 transition-colors focus:border-forest-600 focus:ring-1 focus:ring-forest-600 focus:outline-none"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="rose">Fewo Rose (1–4 Pers., 54 m²)</option>
                    <option value="veilchen">Fewo Veilchen (1–3 Pers., 54 m²)</option>
                    <option value="flieder">Fewo Flieder (2–5 Pers., 80 m²)</option>
                    <option value="loewenzahn">Fewo Löwenzahn (1–2 Pers., 20 m²)</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="checkin" className="mb-1.5 block font-serif text-[13px] font-medium text-warm-900">
                    Anreise
                  </label>
                  <input
                    type="date"
                    id="checkin"
                    name="checkin"
                    className="w-full rounded-xl border border-warm-200 bg-white px-4 py-3 text-[14px] text-warm-900 transition-colors focus:border-forest-600 focus:ring-1 focus:ring-forest-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="checkout" className="mb-1.5 block font-serif text-[13px] font-medium text-warm-900">
                    Abreise
                  </label>
                  <input
                    type="date"
                    id="checkout"
                    name="checkout"
                    className="w-full rounded-xl border border-warm-200 bg-white px-4 py-3 text-[14px] text-warm-900 transition-colors focus:border-forest-600 focus:ring-1 focus:ring-forest-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="mb-1.5 block font-serif text-[13px] font-medium text-warm-900">
                  Anzahl Personen
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  max="10"
                  className="w-full rounded-xl border border-warm-200 bg-white px-4 py-3 text-[14px] text-warm-900 transition-colors focus:border-forest-600 focus:ring-1 focus:ring-forest-600 focus:outline-none"
                  placeholder="Anzahl der Gäste"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block font-serif text-[13px] font-medium text-warm-900">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-xl border border-warm-200 bg-white px-4 py-3 text-[14px] text-warm-900 transition-colors focus:border-forest-600 focus:ring-1 focus:ring-forest-600 focus:outline-none"
                  placeholder="Ihre Nachricht an uns..."
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-forest-700 px-6 py-4 font-serif text-[15px] font-semibold text-white transition-all hover:bg-forest-800 hover:shadow-md"
              >
                <Send className="h-4 w-4" />
                Anfrage senden
              </button>

              <p className="text-center font-serif text-[12px] text-warm-800/40">
                Wir antworten in der Regel innerhalb von 24 Stunden.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
