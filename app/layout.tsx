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
    geo: { "@type": "GeoCoordinates", latitude: 22.5773, longitude: 88.4322 },
    areaServed: "Worldwide",
    sameAs: [COMPANY.linkedin],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does ForceField Technologies offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ForceField Technologies delivers AI workflow automation, MLOps, DevOps & DevSecOps, logo and brand design, creative graphics (flyers, flex, social media, video, gig artwork), and web development for businesses worldwide.",
        },
      },
      {
        "@type": "Question",
        name: "Does ForceField Technologies work with international clients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. ForceField Technologies is a remote-first company delivering AI, DevOps, design, and development services to clients in India, UK, US, Middle East, Australia, and worldwide.",
        },
      },
      {
        "@type": "Question",
        name: "What is ForceField's AI automation service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ForceField builds agentic AI systems and workflow automation for approvals, document review, CRM handoffs, support queues, finance ops, HR, and reporting — eliminating manual work with human-in-the-loop governance.",
        },
      },
      {
        "@type": "Question",
        name: "What design services does ForceField Technologies provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ForceField provides logo and brand identity design, flyer design, flex banner design, social media creatives, video graphics, YouTube thumbnails, and gig artwork for businesses and creators globally.",
        },
      },
      {
        "@type": "Question",
        name: "What is ForceField's DevOps service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ForceField delivers DevOps and DevSecOps services — CI/CD pipelines, infrastructure automation, release governance, and cloud delivery confidence for engineering teams that need to ship faster without breaking things.",
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
    alternateName: ["ForceField Technologies", "ForceField", "ForceField Tech"],
    description: SITE_DESCRIPTION,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    url: PRIMARY_DOMAIN,
    logo: `${PRIMARY_DOMAIN}/logo.png`,
    foundingLocation: {
      "@type": "Place",
      name: "Kolkata, West Bengal, India",
    },
    sameAs: [COMPANY.linkedin],
    knowsAbout: [
      "AI workflow automation",
      "Agentic AI systems",
      "MLOps services",
      "DevOps services",
      "DevSecOps services",
      "Logo and brand design",
      "Creative design services",
      "Web development",
      "Business process automation",
      "Cloud infrastructure automation",
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
      name: "ForceField Technologies Pvt Ltd services",
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
