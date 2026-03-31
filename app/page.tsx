"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, ArrowRight, Mountain, Home, Maximize, Users, ChevronDown } from "lucide-react"

const heroImages = [
  {
    src: "https://www.xn--landhaus-cker-4ob.de/images/3900/img-20200714-154038.jpg",
    alt: "Landhaus Ücker Sommeransicht",
  },
  {
    src: "https://www.xn--landhaus-cker-4ob.de/images/2743/p1370466.jpg",
    alt: "Panoramablick auf die Allgäuer Alpen",
  },
  {
    src: "https://www.xn--landhaus-cker-4ob.de/images/3461/20190204-115037.jpg",
    alt: "Landhaus Ücker im Winter",
  },
  {
    src: "https://www.xn--landhaus-cker-4ob.de/images/2699/headline-start.jpg",
    alt: "Landhaus Ücker Bergpanorama",
  },
]

const apartments = [
  {
    name: "Rose",
    href: "/wohnen/rose",
    size: "54m²",
    persons: "1–4 Personen",
    price: "ab 78€/Nacht",
    image: "https://www.xn--landhaus-cker-4ob.de/images/3978/20260116-153115.jpg",
    alt: "Ferienwohnung Rose",
  },
  {
    name: "Veilchen",
    href: "/wohnen/veilchen",
    size: "54m²",
    persons: "1–3 Personen",
    price: "ab 78€/Nacht",
    image: "https://www.xn--landhaus-cker-4ob.de/images/3966/20250815-123530.jpg",
    alt: "Ferienwohnung Veilchen",
  },
  {
    name: "Flieder",
    href: "/wohnen/flieder",
    size: "80m²",
    persons: "2–5 Personen",
    price: "ab 104€/Nacht",
    image: "https://www.xn--landhaus-cker-4ob.de/images/3907/gesamtraum-2.jpg",
    alt: "Ferienwohnung Flieder",
  },
  {
    name: "Löwenzahn",
    href: "/wohnen/loewenzahn",
    size: "20m²",
    persons: "1–2 Personen",
    price: "ab 45€/Nacht",
    image: "https://www.xn--landhaus-cker-4ob.de/images/3958/20250809-115046.jpg",
    alt: "Ferienwohnung Löwenzahn",
  },
]

const stats = [
  { icon: Mountain, value: "900m", label: "Höhe" },
  { icon: Home, value: "4", label: "Wohnungen" },
  { icon: Maximize, value: "20–80m²", label: "Wohnfläche" },
]

function FadeInSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(el)
        }
      },
      { rootMargin: "-50px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay * 1000}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative h-[100svh] min-h-[500px] w-full overflow-hidden sm:h-[90vh] sm:min-h-[600px]">
        {/* Background images with opacity transition */}
        {heroImages.map((img, index) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity duration-[2500ms] ease-in-out"
            style={{ opacity: index === currentImage ? 1 : 0 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Dark overlay - stärker für besseren Kontrast */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Hero content — CSS-only Animationen für Performance */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-24 text-center text-white">
          <p
            className="mb-4 font-serif text-base tracking-[0.2em] uppercase text-white sm:text-lg animate-fade-in-up"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)", animationDelay: "0.2s" }}
          >
            Ferienwohnungen auf 900m Höhe
          </p>

          <h1
            className="mb-6 max-w-4xl font-serif text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in-up"
            style={{ textShadow: "0 3px 12px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)", animationDelay: "0.5s" }}
          >
            Ein herzliches{" "}
            <span className="accent-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Grüß Gott
            </span>
            <br />
            im Landhaus Ücker
          </h1>

          <p
            className="mb-10 max-w-2xl font-serif text-lg leading-relaxed text-white sm:text-xl animate-fade-in-up"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)", animationDelay: "0.8s" }}
          >
            Sie suchen Ruhe, um sich in Ihrem wohlverdienten Urlaub so richtig
            erholen zu können? Bei uns werden Sie fündig.
          </p>

          <div
            className="flex flex-col gap-4 sm:flex-row animate-fade-in-up"
            style={{ animationDelay: "1.1s" }}
          >
            <Link
              href="/wohnen"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 font-serif text-base font-semibold text-forest-800 shadow-md sm:px-10 sm:py-4 sm:text-lg"
            >
              Unsere Wohnungen
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="https://www.xn--landhaus-cker-4ob.de/77/anfrage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-700 px-6 py-3.5 font-serif text-base font-semibold text-white shadow-md sm:px-10 sm:py-4 sm:text-lg"
            >
              Jetzt buchen
            </a>
          </div>
        </div>

      </section>

      {/* Scroll-Pfeil unter dem Hero */}
      <div className="relative z-10 -mt-6 flex justify-center">
        <a
          href="#ueber-uns"
          className="flex flex-col items-center gap-1 rounded-full bg-white px-6 py-3 shadow-lg animate-fade-in-up"
          style={{ animationDelay: "1.5s" }}
        >
          <span className="font-serif text-sm font-semibold tracking-wider text-forest-700">
            Mehr entdecken
          </span>
          <ChevronDown className="h-5 w-5 text-forest-700 animate-pulse-arrow" />
        </a>
      </div>

      {/* ── Über uns Section ── */}
      <section id="ueber-uns" className="bg-warm-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image side */}
            <FadeInSection>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://www.xn--landhaus-cker-4ob.de/images/3946/img-0136-1.jpg"
                  alt="Landhaus Ücker im Allgäu"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeInSection>

            {/* Text side */}
            <div>
              <FadeInSection delay={0.15}>
                <p className="accent-script mb-2 text-2xl text-forest-700 sm:text-3xl">
                  Willkommen bei uns
                </p>
                <h2 className="mb-6 font-serif text-3xl font-semibold text-warm-900 sm:text-4xl lg:text-5xl">
                  Ihr Zuhause in den Bergen
                </h2>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <p className="mb-4 font-serif text-lg leading-relaxed text-warm-800 sm:text-xl">
                  Unser Landhaus liegt auf 900 Metern Höhe in Obermaiselstein im
                  Allgäu und bietet einen einmaligen Panoramablick auf die
                  umliegende Bergwelt. In ruhiger Lage, umgeben von
                  saftig-grünen Wiesen, finden Sie bei uns die Erholung, die Sie
                  verdienen.
                </p>
                <p className="mb-8 font-serif text-lg leading-relaxed text-warm-800 sm:text-xl">
                  Vier liebevoll eingerichtete Ferienwohnungen im gemütlichen
                  Landhausstil erwarten Sie – von der kompakten Wohnung für
                  Alleinreisende bis zur geräumigen Familienwohnung. Jede
                  Wohnung ist ein Rückzugsort zum Wohlfühlen.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.45}>
                <p className="accent-script mb-8 text-2xl text-forest-700 sm:text-3xl">
                  Walter und Andrea Ücker
                </p>
              </FadeInSection>

              {/* Stats */}
              <FadeInSection delay={0.55}>
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-white p-4 text-center shadow-sm sm:p-6"
                    >
                      <stat.icon className="mx-auto mb-2 h-6 w-6 text-forest-700 sm:h-7 sm:w-7" />
                      <p className="font-serif text-xl font-bold text-warm-900 sm:text-2xl">
                        {stat.value}
                      </p>
                      <p className="font-serif text-sm text-warm-800 sm:text-base">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── Apartments Preview Section ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection className="mb-14 text-center">
            <p className="accent-script mb-2 text-2xl text-forest-700 sm:text-3xl">
              Unsere Ferienwohnungen
            </p>
            <h2 className="mb-4 font-serif text-3xl font-semibold text-warm-900 sm:text-4xl lg:text-5xl">
              Vier Wohnungen, ein{" "}
              <span className="accent-script text-4xl text-forest-700 sm:text-5xl">Zuhause</span>
            </h2>
            <p className="mx-auto max-w-2xl font-serif text-lg text-warm-800 sm:text-xl">
              Jede unserer Wohnungen hat ihren eigenen Charme – finden Sie die
              passende für Ihren Traumurlaub.
            </p>
          </FadeInSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {apartments.map((apt, index) => (
              <FadeInSection key={apt.name} delay={index * 0.1}>
                <Link
                  href={apt.href}
                  className="group block overflow-hidden rounded-2xl bg-warm-50 shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={apt.image}
                      alt={apt.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="mb-2 font-serif text-2xl font-semibold text-warm-900 sm:text-3xl">
                      {apt.name}
                    </h3>
                    <div className="mb-3 flex flex-wrap gap-3 font-serif text-base text-warm-800">
                      <span className="flex items-center gap-1.5">
                        <Maximize className="h-4 w-4 text-forest-700" />
                        {apt.size}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="h-4 w-4 text-forest-700" />
                        {apt.persons}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-serif text-lg font-semibold text-forest-700">
                        {apt.price}
                      </p>
                      <span className="inline-flex items-center gap-1 font-serif text-base font-medium text-forest-700 transition-transform group-hover:translate-x-1">
                        Details
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.4} className="mt-12 text-center">
            <Link
              href="/wohnen"
              className="inline-flex items-center gap-2 rounded-lg bg-forest-700 px-8 py-3.5 font-serif text-lg font-semibold text-white shadow-md transition-all hover:bg-forest-800 hover:shadow-lg"
            >
              Alle Wohnungen ansehen
              <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="bg-warm-100 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center">
            <p className="accent-script mb-2 text-2xl text-forest-700 sm:text-3xl">
              Kontakt
            </p>
            <h2 className="mb-4 font-serif text-3xl font-semibold text-warm-900 sm:text-4xl lg:text-5xl">
              Wir freuen uns{" "}
              <span className="accent-script text-4xl text-forest-700 sm:text-5xl">auf Sie</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl font-serif text-lg text-warm-800 sm:text-xl">
              Haben Sie Fragen oder möchten Sie eine Ferienwohnung buchen?
              Kontaktieren Sie uns gerne – wir helfen Ihnen weiter.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
              <a
                href="tel:+4983267711"
                className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md sm:p-8"
              >
                <Phone className="mb-3 h-7 w-7 text-forest-700" />
                <p className="mb-1 font-serif text-lg font-semibold text-warm-900">
                  Telefon
                </p>
                <p className="font-serif text-base text-warm-800">
                  08326 / 7711
                </p>
              </a>

              <a
                href="mailto:landhaus-uecker@gmx.de"
                className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md sm:p-8"
              >
                <Mail className="mb-3 h-7 w-7 text-forest-700" />
                <p className="mb-1 font-serif text-lg font-semibold text-warm-900">
                  E-Mail
                </p>
                <p className="font-serif text-base text-warm-800 break-all">
                  landhaus-uecker@gmx.de
                </p>
              </a>

              <div className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm sm:p-8">
                <MapPin className="mb-3 h-7 w-7 text-forest-700" />
                <p className="mb-1 font-serif text-lg font-semibold text-warm-900">
                  Adresse
                </p>
                <p className="font-serif text-base text-warm-800">
                  Oberdorf 18
                  <br />
                  87538 Obermaiselstein
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.35} className="mt-12 text-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-lg bg-forest-700 px-8 py-3.5 font-serif text-lg font-semibold text-white shadow-md transition-all hover:bg-forest-800 hover:shadow-lg"
            >
              Anfrage senden
              <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
