"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { APARTMENTS } from "@/lib/data"
import { Phone, Mail, MapPin, Users, Send } from "lucide-react"

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefon: "",
    wohnung: "",
    anreise: "",
    abreise: "",
    personen: "",
    nachricht: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Anfrage ${formData.wohnung ? formData.wohnung : "Landhaus Ücker"}`
    )
    const body = encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.telefon}\n\nGewünschte Wohnung: ${formData.wohnung}\nAnreise: ${formData.anreise}\nAbreise: ${formData.abreise}\nAnzahl Personen: ${formData.personen}\n\nNachricht:\n${formData.nachricht}`
    )
    window.location.href = `mailto:landhaus-uecker@gmx.de?subject=${subject}&body=${body}`
  }

  const inputClasses =
    "w-full rounded-xl border border-warm-200 bg-white px-4 py-3 font-serif text-lg text-warm-900 placeholder:text-warm-800/40 focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-600/20 transition-colors"

  return (
    <div className="min-h-screen bg-warm-50 pt-28 pb-20">
      {/* Header */}
      <FadeIn className="mx-auto mb-14 max-w-6xl px-4 text-center sm:px-6">
        <p className="accent-script mb-2 text-2xl text-forest-700 sm:text-3xl">
          Kontakt
        </p>
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl">
          Wir freuen uns{" "}
          <span className="accent-script text-forest-700">auf Sie</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-serif text-xl leading-relaxed text-warm-800">
          Kontaktieren Sie uns gerne per Telefon, E-Mail oder über das
          Kontaktformular – wir beraten Sie persönlich.
        </p>
      </FadeIn>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Linke Spalte: Kontakt-Infos + Karte */}
          <div className="space-y-6 lg:col-span-2">
            <FadeIn>
              <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-warm-900">
                      Ihre Gastgeber
                    </h2>
                    <p className="accent-script text-xl text-forest-700">
                      Walter und Andrea Ücker
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=47.447691,10.2509747"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-warm-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest-50 text-forest-700">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-serif text-base font-semibold text-warm-900">
                        Adresse
                      </p>
                      <p className="font-serif text-lg text-warm-800">
                        Oberdorf 18
                        <br />
                        87538 Obermaiselstein
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+4983267711"
                    className="flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-warm-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest-50 text-forest-700">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-serif text-base font-semibold text-warm-900">
                        Telefon
                      </p>
                      <p className="font-serif text-lg text-forest-700">
                        08326 / 7711
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:landhaus-uecker@gmx.de"
                    className="flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-warm-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest-50 text-forest-700">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-serif text-base font-semibold text-warm-900">
                        E-Mail
                      </p>
                      <p className="font-serif text-lg text-forest-700 break-all">
                        landhaus-uecker@gmx.de
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Google Maps */}
            <FadeIn delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-warm-100 bg-white shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700!2d10.2509747!3d47.447691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479c7e5c60c3b4e7%3A0x0!2zNDfCsDI2JzUxLjciTiAxMMKwMTUnMDMuNSJF!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Landhaus Ücker auf Google Maps"
                />
              </div>
            </FadeIn>
          </div>

          {/* Rechte Spalte: Formular */}
          <FadeIn delay={0.15} className="lg:col-span-3">
            <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md md:p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold text-warm-900 md:text-3xl">
                Anfrage senden
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block font-serif text-base font-semibold text-warm-900"
                    >
                      Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block font-serif text-base font-semibold text-warm-900"
                    >
                      E-Mail <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="ihre@email.de"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="telefon"
                      className="mb-1.5 block font-serif text-base font-semibold text-warm-900"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="wohnung"
                      className="mb-1.5 block font-serif text-base font-semibold text-warm-900"
                    >
                      Gewünschte Wohnung
                    </label>
                    <select
                      id="wohnung"
                      name="wohnung"
                      value={formData.wohnung}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">Bitte wählen...</option>
                      {APARTMENTS.map((apt) => (
                        <option key={apt.slug} value={apt.name}>
                          {apt.shortName} ({apt.size}, {apt.persons})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-5 grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="anreise"
                      className="mb-1.5 block font-serif text-base font-semibold text-warm-900"
                    >
                      Anreise
                    </label>
                    <input
                      type="date"
                      id="anreise"
                      name="anreise"
                      value={formData.anreise}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="abreise"
                      className="mb-1.5 block font-serif text-base font-semibold text-warm-900"
                    >
                      Abreise
                    </label>
                    <input
                      type="date"
                      id="abreise"
                      name="abreise"
                      value={formData.abreise}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="personen"
                      className="mb-1.5 block font-serif text-base font-semibold text-warm-900"
                    >
                      Personen
                    </label>
                    <input
                      type="number"
                      id="personen"
                      name="personen"
                      min="1"
                      max="10"
                      value={formData.personen}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="z.B. 2"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="nachricht"
                    className="mb-1.5 block font-serif text-base font-semibold text-warm-900"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    rows={5}
                    value={formData.nachricht}
                    onChange={handleChange}
                    className={inputClasses + " resize-y"}
                    placeholder="Ihre Nachricht an uns..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-forest-700 px-8 py-4 font-serif text-lg font-semibold text-white shadow-md transition-all hover:bg-forest-800 hover:shadow-lg sm:w-auto"
                >
                  <Send className="h-5 w-5" />
                  Anfrage senden
                </button>

                <p className="text-center font-serif text-sm text-warm-800/50 sm:text-left">
                  Wir antworten in der Regel innerhalb von 24 Stunden.
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
