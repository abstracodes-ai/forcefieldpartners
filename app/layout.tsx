import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import { BRAND_NAME, COMPANY, PRIMARY_DOMAIN, SERVICES, SITE_DESCRIPTION, SITE_KEYWORDS, SITE_TITLE } from "@/lib/site-content";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const rootSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${PRIMARY_DOMAIN}/#localbusiness`,
    name: BRAND_NAME,
    legalName: BRAND_NAME,
    description: SITE_DESCRIPTION,
    url: PRIMARY_DOMAIN,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sector V, Salt Lake City",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      postalCode: "700091",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.5773,
      longitude: 88.4322,
    },
    areaServed: { "@type": "Country", name: "India" },
    sameAs: [COMPANY.linkedin],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does ForceField Partners LLP offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ForceField Partners LLP offers two service lines: ForceField Field Partner (field force outsourcing, distributor and retailer activation, sales training and KRA setup) and ForceField DevOps & Automation (DevOps, MLOps, and business workflow automation).",
        },
      },
      {
        "@type": "Question",
        name: "Where is ForceField Partners LLP located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ForceField Partners LLP is headquartered at Sector V, Salt Lake City, Kolkata 700091, West Bengal, India, and supports pan-India operations.",
        },
      },
      {
        "@type": "Question",
        name: "Does ForceField Partners LLP work pan-India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. ForceField Partners LLP supports field force deployment, distributor activation, and operational delivery across distributed markets throughout India.",
        },
      },
      {
        "@type": "Question",
        name: "What is ForceField Field Partner?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ForceField Field Partner provides territory coverage, retailer and distributor activation, sales training, and KRA-led performance management for brands that need ground-force execution across Indian markets.",
        },
      },
      {
        "@type": "Question",
        name: "What is ForceField DevOps & Automation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ForceField DevOps & Automation delivers DevOps services, MLOps for production-grade machine learning operations, and workflow automation across business functions including sales, finance, HR, reporting, and support.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${PRIMARY_DOMAIN}/#organization`,
    name: BRAND_NAME,
    legalName: BRAND_NAME,
    alternateName: ["ForceField", "ForceField Partners", "Force Field Partners"],
    description: SITE_DESCRIPTION,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    url: PRIMARY_DOMAIN,
    logo: `${PRIMARY_DOMAIN}/icon.svg`,
    foundingLocation: {
      "@type": "Place",
      name: "Kolkata, West Bengal, India",
    },
    sameAs: [COMPANY.linkedin],
    knowsAbout: [
      "Field force outsourcing",
      "Field force management",
      "Distributor activation",
      "Retailer activation",
      "Sales training and KRA setup",
      "DevOps services",
      "DevSecOps services",
      "MLOps services",
      "Business workflow automation",
      "AI workflow automation",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY.phone,
        email: COMPANY.email,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "bn"],
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${PRIMARY_DOMAIN}/#service`,
    name: BRAND_NAME,
    url: PRIMARY_DOMAIN,
    description: SITE_DESCRIPTION,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    image: `${PRIMARY_DOMAIN}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sector V, Salt Lake City",
      addressLocality: "Kolkata",
      postalCode: "700091",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: SERVICES.map((service) => service.title),
    keywords: SITE_KEYWORDS.join(", "),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ForceField Partners LLP services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.seoDescription,
          url: `${PRIMARY_DOMAIN}/services/${service.slug}`,
          areaServed: "India",
        },
      })),
    },
    sameAs: [COMPANY.linkedin],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${PRIMARY_DOMAIN}/#website`,
    name: BRAND_NAME,
    url: PRIMARY_DOMAIN,
    description: SITE_DESCRIPTION,
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(PRIMARY_DOMAIN),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: BRAND_NAME,
  category: "Business services",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  keywords: SITE_KEYWORDS,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: ["/favicon.svg"],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: BRAND_NAME,
    type: "website",
    locale: "en_IN",
    url: PRIMARY_DOMAIN,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: BRAND_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${sora.variable} bg-background text-foreground antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootSchemas) }}
        />
        {children}
      </body>
    </html>
  );
}
