"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ACTIVITY_LINKS } from "@/lib/data";
import {
  Trees,
  Mountain,
  Waves,
  ExternalLink,
  ArrowLeft,
  CloudSun,
} from "lucide-react";

interface WeatherDay {
  date: string
  weekday: string
  tempMax: number
  tempMin: number
  precipitation: number
  weatherCode: number
}

const WMO_ICONS: Record<number, { label: string; emoji: string }> = {
  0: { label: "Sonnig", emoji: "☀️" },
  1: { label: "Überwiegend sonnig", emoji: "🌤️" },
  2: { label: "Teilweise bewölkt", emoji: "⛅" },
  3: { label: "Bewölkt", emoji: "☁️" },
  45: { label: "Nebel", emoji: "🌫️" },
  48: { label: "Nebel mit Reif", emoji: "🌫️" },
  51: { label: "Leichter Nieselregen", emoji: "🌦️" },
  53: { label: "Nieselregen", emoji: "🌦️" },
  55: { label: "Starker Nieselregen", emoji: "🌧️" },
  61: { label: "Leichter Regen", emoji: "🌦️" },
  63: { label: "Regen", emoji: "🌧️" },
  65: { label: "Starker Regen", emoji: "🌧️" },
  71: { label: "Leichter Schneefall", emoji: "🌨️" },
  73: { label: "Schneefall", emoji: "❄️" },
  75: { label: "Starker Schneefall", emoji: "❄️" },
  77: { label: "Schneekörner", emoji: "🌨️" },
  80: { label: "Leichte Schauer", emoji: "🌦️" },
  81: { label: "Schauer", emoji: "🌧️" },
  82: { label: "Starke Schauer", emoji: "⛈️" },
  85: { label: "Schneeschauer", emoji: "🌨️" },
  86: { label: "Starke Schneeschauer", emoji: "❄️" },
  95: { label: "Gewitter", emoji: "⛈️" },
  96: { label: "Gewitter mit Hagel", emoji: "⛈️" },
  99: { label: "Starkes Gewitter", emoji: "⛈️" },
}

function getWeatherInfo(code: number) {
  return WMO_ICONS[code] || { label: "Unbekannt", emoji: "🌡️" }
}

const WEEKDAYS = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]

function WeatherWidget() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const [weather, setWeather] = useState<WeatherDay[] | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!isInView || weather) return
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=47.4477&longitude=10.2510&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=Europe%2FBerlin&forecast_days=7"
    )
      .then((res) => res.json())
      .then((data) => {
        const days: WeatherDay[] = data.daily.time.map(
          (date: string, i: number) => ({
            date,
            weekday: WEEKDAYS[new Date(date).getDay()],
            tempMax: Math.round(data.daily.temperature_2m_max[i]),
            tempMin: Math.round(data.daily.temperature_2m_min[i]),
            precipitation:
              Math.round(data.daily.precipitation_sum[i] * 10) / 10,
            weatherCode: data.daily.weathercode[i],
          })
        )
        setWeather(days)
      })
      .catch(() => setError(true))
  }, [isInView, weather])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-5xl px-4 sm:px-6"
    >
      <div className="overflow-hidden rounded-2xl shadow-2xl">
        {/* Header mit Gradient */}
        <div className="relative overflow-hidden bg-gradient-to-br from-forest-800 via-forest-900 to-forest-800 px-6 py-6 sm:px-8 sm:py-8">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-amber-300 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-forest-200 blur-3xl" />
          </div>
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-4xl backdrop-blur-sm">
                {weather ? getWeatherInfo(weather[0].weatherCode).emoji : "🌤️"}
              </div>
              <div>
                <p className="accent-script text-2xl text-amber-300">
                  Obermaiselstein
                </p>
                <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
                  {weather ? `${weather[0].tempMax}°C` : "..."}
                </h2>
                <p className="font-serif text-sm text-white/50">
                  {weather
                    ? getWeatherInfo(weather[0].weatherCode).label
                    : "Wird geladen..."}{" "}
                  &middot; 900m Höhe
                </p>
              </div>
            </div>
            <a
              href="https://14-tage-wettervorhersage.de/wetter/obermaiselstein/vorhersage/177202/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-xl bg-white/15 px-5 py-2.5 font-serif text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/25 sm:self-auto"
            >
              <ExternalLink className="h-4 w-4" />
              14-Tage Details
            </a>
          </div>
        </div>

        {/* 7-Tage Vorhersage als Karten */}
        <div className="bg-white p-5 sm:p-6">
          {error && (
            <p className="py-8 text-center font-serif text-lg text-warm-800/60">
              Wetter konnte nicht geladen werden.{" "}
              <a
                href="https://14-tage-wettervorhersage.de/wetter/obermaiselstein/vorhersage/177202/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-forest-700 underline"
              >
                Direkt ansehen
              </a>
            </p>
          )}

          {!weather && !error && (
            <div className="flex items-center justify-center py-10">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-forest-200 border-t-forest-700" />
              <p className="ml-3 font-serif text-lg text-warm-800/50">
                Wetter wird geladen...
              </p>
            </div>
          )}

          {weather && (
            <div className="flex gap-2 overflow-x-auto pb-2 sm:grid sm:grid-cols-7 sm:gap-3 sm:overflow-x-visible sm:pb-0">
              {weather.map((day, i) => {
                const info = getWeatherInfo(day.weatherCode)
                const isToday = i === 0
                return (
                  <motion.div
                    key={day.date}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className={`min-w-[5rem] shrink-0 rounded-xl p-2.5 text-center sm:min-w-0 sm:shrink sm:p-4 ${
                      isToday
                        ? "bg-forest-700 text-white shadow-lg"
                        : "bg-warm-50"
                    }`}
                  >
                    <p
                      className={`font-serif text-sm font-bold sm:text-base ${
                        isToday ? "text-white" : "text-warm-900"
                      }`}
                    >
                      {isToday ? "Heute" : day.weekday}
                    </p>
                    <p
                      className={`text-[10px] sm:text-xs ${
                        isToday ? "text-white/60" : "text-warm-800/45"
                      }`}
                    >
                      {new Date(day.date).toLocaleDateString("de-DE", {
                        day: "numeric",
                        month: "short",
                      })}
                    </p>
                    <p className="mt-2 text-3xl sm:mt-3 sm:text-4xl">
                      {info.emoji}
                    </p>
                    <p
                      className={`mt-1 text-[10px] leading-tight sm:text-xs ${
                        isToday ? "text-white/70" : "text-warm-800/55"
                      }`}
                    >
                      {info.label}
                    </p>
                    <div className="mt-2 sm:mt-3">
                      <p
                        className={`font-serif text-xl font-bold sm:text-2xl ${
                          isToday ? "text-white" : "text-warm-900"
                        }`}
                      >
                        {day.tempMax}°
                      </p>
                      <p
                        className={`font-serif text-sm sm:text-base ${
                          isToday ? "text-white/60" : "text-warm-800/45"
                        }`}
                      >
                        {day.tempMin}°
                      </p>
                    </div>
                    {day.precipitation > 0 && (
                      <p
                        className={`mt-1 text-[10px] sm:text-xs ${
                          isToday ? "text-blue-200" : "text-blue-600"
                        }`}
                      >
                        💧 {day.precipitation}mm
                      </p>
                    )}
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const categoryIcons: Record<string, React.ElementType> = {
  "Natur & Erlebnis": Trees,
  "Sport & Abenteuer": Mountain,
  "Freizeit & Region": Waves,
};

function CategorySection({
  category,
  items,
  index,
}: {
  category: string;
  items: { name: string; url: string }[];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = categoryIcons[category] || Trees;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="overflow-hidden rounded-2xl border border-warm-200 bg-white shadow-lg"
    >
      {/* Kategorie-Header */}
      <div className="flex items-center gap-4 border-b border-warm-100 bg-warm-50 px-6 py-5 md:px-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-700 text-white shadow-sm">
          <Icon className="h-7 w-7" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-warm-900 md:text-3xl">
          {category}
        </h2>
      </div>

      {/* Links */}
      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
        {items.map((item, i) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b border-warm-100/60 px-6 py-4 transition-colors last:border-b-0 hover:bg-forest-50 md:px-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-100 font-serif text-sm font-bold text-forest-700">
                {i + 1}
              </span>
              <span className="font-serif text-lg font-medium text-warm-900 group-hover:text-forest-700">
                {item.name}
              </span>
            </div>
            <ExternalLink className="h-5 w-5 shrink-0 text-warm-300 transition-colors group-hover:text-forest-600" />
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default function AktivitaetenPage() {
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
        <p className="accent-script mb-2 text-2xl text-forest-700 sm:text-3xl">
          Erleben Sie das Allgäu
        </p>
        <h1 className="font-serif text-4xl font-bold text-warm-900 md:text-5xl">
          Aktivitäten &amp; Ausflüge
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-serif text-xl leading-relaxed text-warm-900/80 md:text-2xl">
          Entdecken Sie die vielfältigen Freizeitmöglichkeiten rund um
          Obermaiselstein und das Allgäu.
        </p>
      </motion.div>

      {/* Aktuelle Wettervorhersage */}
      <WeatherWidget />

      {/* Activity Categories */}
      <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6">
        {ACTIVITY_LINKS.map((cat, index) => (
          <CategorySection
            key={cat.category}
            category={cat.category}
            items={cat.items}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}
