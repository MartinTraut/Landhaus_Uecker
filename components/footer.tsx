import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, CloudSun } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-warm-900 text-white/75">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + Beschreibung */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <Image
                src="https://www.xn--landhaus-cker-4ob.de/images/3187/logo-walter2.png"
                alt="Landhaus Ücker Logo"
                width={200}
                height={200}
                className="logo-sharp h-16 w-auto"
                unoptimized
              />
            </Link>
            <p className="mt-4 font-serif text-[14px] leading-relaxed text-white/50">
              Gemütliche Ferienwohnungen mit Panoramablick in die Allgäuer
              Alpen. Ihr Zuhause auf 900 Metern Höhe.
            </p>
            {/* Wetter-Link */}
            <a
              href="https://14-tage-wettervorhersage.de/wetter/obermaiselstein/vorhersage/177202/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/8 px-3 py-2 font-serif text-[13px] text-white/60 transition-colors hover:bg-white/15 hover:text-white"
            >
              <CloudSun className="h-4 w-4" />
              Wettervorhersage Obermaiselstein
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-[15px] font-semibold text-white">
              Schnellzugriff
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { label: "Startseite", href: "/" },
                { label: "Wohnungen", href: "/wohnen" },
                { label: "Informationen", href: "/informationen" },
                { label: "Aktivitäten", href: "/informationen/aktivitaeten" },
                { label: "Galerie", href: "/galerie" },
                { label: "Webcam", href: "/webcam" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-serif text-[14px] text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Wohnungen */}
          <div>
            <h3 className="font-serif text-[15px] font-semibold text-white">
              Ferienwohnungen
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { name: "Fewo Rose (54 m²)", href: "/wohnen/rose" },
                { name: "Fewo Veilchen (54 m²)", href: "/wohnen/veilchen" },
                { name: "Fewo Flieder (80 m²)", href: "/wohnen/flieder" },
                { name: "Fewo Löwenzahn (20 m²)", href: "/wohnen/loewenzahn" },
              ].map((apt) => (
                <li key={apt.href}>
                  <Link
                    href={apt.href}
                    className="font-serif text-[14px] text-white/50 transition-colors hover:text-white"
                  >
                    {apt.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-serif text-[15px] font-semibold text-white">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 font-serif text-[14px]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/30" />
                <span>
                  Oberdorf 18
                  <br />
                  87538 Obermaiselstein
                </span>
              </li>
              <li>
                <a
                  href="tel:+4983267711"
                  className="flex items-center gap-2.5 font-serif text-[14px] transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-white/30" />
                  08326 / 7711
                </a>
              </li>
              <li>
                <a
                  href="mailto:landhaus-uecker@gmx.de"
                  className="flex items-center gap-2.5 font-serif text-[14px] transition-colors hover:text-white break-all"
                >
                  <Mail className="h-4 w-4 text-white/30" />
                  landhaus-uecker@gmx.de
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-5 text-[12px] text-white/30 sm:flex-row sm:px-8">
          <p>&copy; {new Date().getFullYear()} Landhaus Ücker. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <a
              href="https://www.xn--landhaus-cker-4ob.de/81/impressum"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white/60"
            >
              Impressum
            </a>
            <a
              href="https://www.xn--landhaus-cker-4ob.de/82/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white/60"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
