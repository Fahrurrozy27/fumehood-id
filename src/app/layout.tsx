import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fume Hood Lemari Asam Indonesia — Direct Factory | FumeHood.id",
  description:
    "Produsen Fume Hood (Lemari Asam) berkualitas tinggi standar SEFA langsung dari pabrik PT. Haian Saintika Eltanindo. Garansi Resmi 1 Tahun & sertifikasi/kalibrasi on-site.",
  keywords: [
    "fume hood",
    "lemari asam",
    "fumehood",
    "chemical fume hood",
    "furniture laboratorium",
    "standar SEFA",
    "pabrik lemari asam Indonesia",
    "PT. Haian Saintika Eltanindo",
  ],
  metadataBase: new URL("https://fumehood.id"),
  openGraph: {
    title: "Fume Hood Lemari Asam Indonesia — Direct Factory | FumeHood.id",
    description:
      "Produsen Fume Hood (Lemari Asam) berkualitas tinggi standar SEFA langsung dari pabrik PT. Haian Saintika Eltanindo. Garansi Resmi 1 Tahun & sertifikasi/kalibrasi on-site.",
    url: "https://fumehood.id",
    siteName: "FumeHood.id",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fume Hood Lemari Asam Indonesia — Direct Factory",
    description:
      "Produsen Fume Hood (Lemari Asam) berkualitas tinggi standar SEFA langsung dari pabrik PT. Haian Saintika Eltanindo.",
  },
  icons: {
    icon: "/favicon.png",
  },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://fumehood.id/#organization",
      "name": "PT. Haian Saintika Eltanindo",
      "url": "https://fumehood.id",
      "logo": "https://fumehood.id/favicon.ico",
      "image": "https://fumehood.id/favicon.ico",
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
      "@id": "https://fumehood.id/#product",
      "name": "Fume Hood Lemari Asam",
      "image": "https://fumehood.id/favicon.ico",
      "description": "Fume Hood (Lemari Asam) lokal kualitas premium mengacu standar SEFA dilengkapi blower centrifugal tahan kimia tinggi dan cabinet Stainless Steel / Phenolic Resin.",
      "brand": {
        "@type": "Brand",
        "name": "FumeHood.id"
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KLPLVLNP');`
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-950 text-slate-100 selection:bg-teal-500/20 selection:text-teal-200">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KLPLVLNP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
