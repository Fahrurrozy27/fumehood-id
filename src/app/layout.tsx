import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laminar Air Flow HEPA H14 Indonesia — Direct Factory | LaminarAirFlow.id",
  description:
    "Produsen Laminar Air Flow (LAF) berkualitas tinggi standar SEFA langsung dari pabrik PT. Haian Saintika Eltanindo. Garansi Resmi 1 Tahun & kalibrasi on-site.",
  keywords: [
    "laminar air flow",
    "LAF",
    "clean bench",
    "HEPA filter H14",
    "furniture laboratorium",
    "standar SEFA",
    "pabrik LAF Indonesia",
    "PT. Haian Saintika Eltanindo",
  ],
  metadataBase: new URL("https://laminarairflow.id"),
  openGraph: {
    title: "Laminar Air Flow HEPA H14 Indonesia — Direct Factory | LaminarAirFlow.id",
    description:
      "Produsen Laminar Air Flow (LAF) berkualitas tinggi standar SEFA langsung dari pabrik PT. Haian Saintika Eltanindo. Garansi Resmi 1 Tahun & kalibrasi on-site.",
    url: "https://laminarairflow.id",
    siteName: "LaminarAirFlow.id",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laminar Air Flow HEPA H14 Indonesia — Direct Factory",
    description:
      "Produsen Laminar Air Flow (LAF) berkualitas tinggi standar SEFA langsung dari pabrik PT. Haian Saintika Eltanindo.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://laminarairflow.id/#organization",
      "name": "PT. Haian Saintika Eltanindo",
      "url": "https://laminarairflow.id",
      "logo": "https://laminarairflow.id/favicon.ico",
      "image": "https://laminarairflow.id/favicon.ico",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Pangeran Sogiri No.135B, Tanah Baru, Kec. Bogor Utara",
        "addressLocality": "Kota Bogor",
        "addressRegion": "Jawa Barat",
        "postalCode": "16154",
        "addressCountry": "ID"
      },
      "telephone": "+6281290864275",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    },
    {
      "@type": "Product",
      "@id": "https://laminarairflow.id/#product",
      "name": "Laminar Air Flow HEPA H14",
      "image": "https://laminarairflow.id/favicon.ico",
      "description": "Laminar Air Flow lokal kualitas premium mengacu standar SEFA dilengkapi filter HEPA H14 efisiensi 99.997% dan cabinet Stainless Steel 304/316.",
      "brand": {
        "@type": "Brand",
        "name": "LaminarAirFlow.id"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "PT. Haian Saintika Eltanindo",
        "url": "https://www.haianlab.com"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "IDR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "priceType": "https://schema.org/ListPrice",
          "priceCurrency": "IDR"
        }
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FAFBFD] text-[#0F172A] selection:bg-teal-500/20 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}
