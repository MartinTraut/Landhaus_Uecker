"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const NAV_ITEMS: NavItem[] = [
  { label: "Grüß Gott", href: "/" },
  {
    label: "Wohnen",
    href: "/wohnen",
    children: [
      { label: "Fewo Rose | 1–4 Pers.", href: "/wohnen/rose" },
      { label: "Fewo Veilchen | 1–3 Pers.", href: "/wohnen/veilchen" },
      { label: "Fewo Flieder | 2–5 Pers.", href: "/wohnen/flieder" },
      { label: "Fewo Löwenzahn | 1–2 Pers.", href: "/wohnen/loewenzahn" },
    ],
  },
  {
    label: "Informationen",
    href: "/informationen",
    children: [
      { label: "Wissenswertes", href: "/informationen" },
      { label: "Ausflüge & Aktivitäten", href: "/informationen/aktivitaeten" },
      { label: "Anfahrt", href: "/informationen/anfahrt" },
    ],
  },
  {
    label: "Bildergalerie",
    href: "/galerie",
    children: [
      { label: "Bilder Landhaus Ücker", href: "/galerie/landhaus" },
      { label: "Bilder Umgebung", href: "/galerie/umgebung" },
      { label: "Bilder Ausflugsziele", href: "/galerie/ausflugsziele" },
    ],
  },
  { label: "Webcam", href: "/webcam" },
  { label: "Kontakt", href: "/kontakt" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  // Nur ein Dropdown gleichzeitig offen
  const handleOpenDropdown = useCallback((label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setOpenDropdown(label)
  }, [])

  const handleCloseDropdown = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }, [])

  const handleDropdownEnter = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }, [])

  // Header-Hintergrund: immer gut lesbar
  const headerBg = isScrolled || !isHome
    ? "bg-white/98 backdrop-blur-md shadow-md"
    : "bg-gradient-to-b from-black/60 via-black/30 to-transparent"

  // Textfarben: immer gut sichtbar
  const navTextColor = isScrolled || !isHome
    ? "text-warm-900 hover:text-forest-700"
    : "text-white hover:text-white/80"

  const navActiveColor = isScrolled || !isHome
    ? "text-forest-700 font-bold"
    : "text-white font-bold"

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Logo + Navigation in einer Zeile */}
          <div className="flex items-center justify-between py-3 lg:py-2">
            {/* Logo links */}
            <Link href="/" className="shrink-0">
              <Image
                src="https://www.xn--landhaus-cker-4ob.de/images/3187/logo-walter2.png"
                alt="Landhaus Ücker"
                width={200}
                height={200}
                className="logo-sharp h-14 w-auto sm:h-16"
                priority
                unoptimized
              />
            </Link>

            {/* Desktop Navigation - zentriert */}
            <nav className="hidden items-center gap-1 lg:flex">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  pathname === item.href ||
                  item.children?.some((c) => pathname === c.href)
                const isOpen = openDropdown === item.label

                if (!item.children) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-lg px-4 py-2.5 font-serif text-[18px] font-semibold transition-all duration-200 ${
                        isActive ? navActiveColor : navTextColor
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                }

                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => handleOpenDropdown(item.label)}
                    onMouseLeave={handleCloseDropdown}
                  >
                    <button
                      onClick={() =>
                        setOpenDropdown(isOpen ? null : item.label)
                      }
                      className={`flex items-center gap-1.5 rounded-lg px-4 py-2.5 font-serif text-[18px] font-semibold transition-all duration-200 ${
                        isActive ? navActiveColor : navTextColor
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                          onMouseEnter={handleDropdownEnter}
                          onMouseLeave={handleCloseDropdown}
                          className="absolute top-full left-0 z-50 mt-1 min-w-[280px] overflow-hidden rounded-xl border border-warm-200 bg-white py-2 shadow-xl"
                        >
                          {/* Übersichtsseite */}
                          <Link
                            href={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`block px-5 py-3 font-serif text-[17px] font-bold transition-colors ${
                              pathname === item.href
                                ? "bg-forest-50 text-forest-700"
                                : "text-warm-900 hover:bg-warm-50"
                            }`}
                          >
                            Alle {item.label}
                          </Link>
                          <div className="mx-4 my-1.5 border-t border-warm-100" />
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className={`block px-5 py-3 font-serif text-[17px] font-medium transition-colors ${
                                pathname === child.href
                                  ? "bg-forest-50 text-forest-700"
                                  : "text-warm-800 hover:bg-warm-50 hover:text-forest-700"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </nav>

            {/* Telefon-Button Desktop */}
            <a
              href="tel:+4983267711"
              className="hidden items-center gap-2 rounded-lg bg-forest-700 px-5 py-2.5 font-serif text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-forest-800 hover:shadow-md lg:inline-flex"
            >
              <Phone className="h-4 w-4" />
              Anrufen
            </a>

            {/* Mobile Buttons */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:+4983267711"
                className="rounded-lg bg-forest-700 p-3 text-white shadow-sm"
                aria-label="Anrufen"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`rounded-lg p-3 transition-colors ${
                  isHome && !isScrolled ? "text-white" : "text-warm-900"
                }`}
                aria-label="Menü"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Fullscreen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 overflow-y-auto bg-white lg:hidden"
          >
            <div className="flex min-h-full flex-col pt-24 pb-8">
              <nav className="flex flex-1 flex-col px-6">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-warm-100"
                  >
                    {item.children ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileExpanded(
                              mobileExpanded === item.label
                                ? null
                                : item.label
                            )
                          }
                          className="flex w-full items-center justify-between py-5 font-serif text-[22px] font-semibold text-warm-900"
                        >
                          {item.label}
                          <ChevronDown
                            className={`h-5 w-5 text-warm-800/50 transition-transform duration-200 ${
                              mobileExpanded === item.label
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <Link
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-3 pl-5 font-serif text-[17px] font-bold text-forest-700"
                              >
                                Übersicht
                              </Link>
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={`block py-3 pl-5 font-serif text-[17px] ${
                                    pathname === child.href
                                      ? "font-semibold text-forest-700"
                                      : "text-warm-800/80"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              ))}
                              <div className="h-3" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-5 font-serif text-[22px] font-semibold ${
                          pathname === item.href
                            ? "text-forest-700"
                            : "text-warm-900"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Telefon CTA */}
              <div className="px-6 pt-6">
                <a
                  href="tel:+4983267711"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 rounded-xl bg-forest-700 py-4 font-serif text-[22px] font-bold text-white shadow-sm"
                >
                  <Phone className="h-6 w-6" />
                  08326 / 7711
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
