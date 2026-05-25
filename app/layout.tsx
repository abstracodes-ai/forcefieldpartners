import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import "./globals.css";

const siteUrl = "https://forcefieldpartners.in";
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const title = "ForceField Partners LLP | Execution Teams for the Field, Cloud & AI Era";
const description =
  "ForceField Partners LLP helps businesses scale execution across field force deployment, secure DevSecOps, production-grade MLOps, and AI-powered workflow automation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "ForceField Partners LLP",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "ForceField Partners LLP",
    "Field Force Management",
    "DevSecOps services",
    "MLOps services",
    "AI workflow automation",
    "Sales deployment",
    "Kolkata business services",
  ],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: ["/favicon.svg"],
  },
  openGraph: {
    title,
    description,
    siteName: "ForceField Partners LLP",
    type: "website",
    locale: "en_IN",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ForceField Partners LLP",
  description,
  email: "sandeepmailbox.83@gmail.com",
  telephone: "+91-9474905990",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sector V, Salt Lake City",
    addressLocality: "Kolkata",
    postalCode: "700091",
    addressCountry: "IN",
  },
  url: siteUrl,
  sameAs: ["https://www.linkedin.com/company/forcefieldpartners"],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
