import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: {
    default: "Landhaus Ücker | Ferienwohnungen in Obermaiselstein im Allgäu",
    template: "%s | Landhaus Ücker",
  },
  description:
    "Gemütliche Ferienwohnungen mit Panoramablick in die Allgäuer Alpen. 4 liebevoll eingerichtete Wohnungen im Landhausstil in Obermaiselstein auf 900m Höhe.",
  keywords: [
    "Ferienwohnung Obermaiselstein",
    "Ferienwohnung Allgäu",
    "Landhaus Ücker",
    "Urlaub Allgäu",
    "Ferienwohnung mit Bergblick",
    "Wanderurlaub Allgäu",
    "Skiurlaub Allgäu",
  ],
  openGraph: {
    title: "Landhaus Ücker | Ferienwohnungen in Obermaiselstein im Allgäu",
    description:
      "Gemütliche Ferienwohnungen mit Panoramablick in die Allgäuer Alpen.",
    url: "https://www.xn--landhaus-cker-4ob.de",
    siteName: "Landhaus Ücker",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://www.xn--landhaus-cker-4ob.de/images/2699/headline-start.jpg",
        width: 1200,
        height: 630,
        alt: "Landhaus Ücker - Ferienwohnungen in Obermaiselstein",
      },
    ],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Landhaus Ücker",
              description:
                "Gemütliche Ferienwohnungen mit Panoramablick in die Allgäuer Alpen in Obermaiselstein.",
              url: "https://www.xn--landhaus-cker-4ob.de",
              telephone: "+49 8326 7711",
              email: "landhaus-uecker@gmx.de",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Oberdorf 18",
                addressLocality: "Obermaiselstein",
                postalCode: "87538",
                addressCountry: "DE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.447691,
                longitude: 10.2509747,
              },
              image:
                "https://www.xn--landhaus-cker-4ob.de/images/2699/headline-start.jpg",
              priceRange: "45-174 EUR",
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
