import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BRAND_NAME, PRIMARY_DOMAIN, SERVICES, getServiceBySlug } from "@/lib/site-content";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  const title = `${service.title} | ${BRAND_NAME}`;

  return {
    title,
    description: service.seoDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    keywords: service.keywords,
    openGraph: {
      title,
      description: service.seoDescription,
      url: `${PRIMARY_DOMAIN}/services/${service.slug}`,
    },
    twitter: {
      title,
      description: service.seoDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES.filter((item) => item.slug !== service.slug && item.track === service.track).slice(0, 2);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.seoDescription,
    provider: {
      "@type": "ProfessionalService",
      name: BRAND_NAME,
      url: PRIMARY_DOMAIN,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    category: service.track === "field" ? "Field Execution" : "DevOps and Workflow Automation",
    url: `${PRIMARY_DOMAIN}/services/${service.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: PRIMARY_DOMAIN,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${PRIMARY_DOMAIN}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${PRIMARY_DOMAIN}/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <SiteHeader />

      <main className="overflow-hidden">
        <section className="relative isolate overflow-hidden bg-navy-950 pb-18 pt-30 text-white sm:pb-22 sm:pt-34 lg:pb-26 lg:pt-40">
          <div className="bg-grid-dark absolute inset-0 opacity-28" />
          <div className="absolute left-0 top-10 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-500/16 blur-3xl" />

          <div className="container relative space-y-8">
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight className="size-4" />
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <ChevronRight className="size-4" />
              <span className="text-white">{service.title}</span>
            </div>

            <div className="max-w-4xl space-y-6">
              <Badge variant="dark">{service.heroEyebrow}</Badge>
              <div className="space-y-5">
                <h1 className="font-display text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  {service.title}
                </h1>
                <p className="max-w-3xl text-balance text-base leading-8 text-slate-300 sm:text-lg">
                  {service.seoDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-white/14 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
                  {service.entityName}
                </span>
                <span className="rounded-full border border-teal-400/20 bg-teal-400/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                  {service.trackLabel}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-18 sm:py-22 lg:py-24">
          <div className="container grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <Card className="field-line overflow-hidden border-white/70">
              <CardHeader className="space-y-4">
                <CardTitle className="text-navy-900">What this service covers</CardTitle>
                <p className="text-sm leading-7 text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {service.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-7 text-navy-900">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-teal-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="field-line overflow-hidden border-white/70">
              <CardHeader className="space-y-4">
                <CardTitle className="text-navy-900">Typical use cases</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {service.useCases.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-navy-900/8 bg-white/70 px-4 py-4 text-sm leading-6 text-navy-800"
                  >
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-white/70 py-18 sm:py-22 lg:py-24">
          <div className="container grid gap-8 lg:grid-cols-[0.96fr_1.04fr]">
            <div className="space-y-5">
              <div className="rounded-full border border-teal-500/16 bg-teal-500/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-500 inline-flex">
                Where it fits
              </div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Best suited for teams that need disciplined execution, not generic consulting
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                ForceField services are structured for real operating environments where clarity, control, and measurable
                follow-through matter more than presentation-heavy advisory decks.
              </p>
            </div>

            <div className="field-line glass-panel rounded-[2rem] border border-white/70 p-6 shadow-forcefield">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-teal-500">Relevant sectors</p>
              <div className="flex flex-wrap gap-2">
                {service.sectors.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-full border border-navy-900/10 bg-navy-900/5 px-3 py-1.5 text-sm font-medium text-navy-800"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-18 sm:py-22 lg:py-24">
          <div className="container space-y-12">
            {relatedServices.length > 0 ? (
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                  Related services
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {relatedServices.map((related) => (
                    <Link key={related.slug} href={`/services/${related.slug}`} className="block h-full">
                      <Card className="field-line group h-full overflow-hidden border-white/70">
                        <CardHeader className="space-y-4">
                          <div className="flex items-center justify-between gap-4">
                            <span className="rounded-full border border-teal-500/14 bg-teal-500/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-500">
                              {related.tag}
                            </span>
                            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-800/70">
                              {related.trackLabel}
                            </span>
                          </div>
                          <CardTitle className="text-navy-900">{related.title}</CardTitle>
                          <p className="text-sm leading-7 text-muted-foreground">{related.summary}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2 text-sm font-semibold text-navy-800 group-hover:text-teal-500">
                            View service page
                            <ArrowRight className="size-4" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="field-line glass-panel rounded-[2rem] border border-white/70 p-7 shadow-forcefield">
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="space-y-4">
                  <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                    Need this mapped to your operating environment?
                  </h2>
                  <p className="text-base leading-7 text-muted-foreground">
                    ForceField structures discovery conversations around current bottlenecks, ownership gaps, tooling, and
                    execution targets. The goal is to define a delivery model that actually fits the business.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <Button asChild size="lg">
                    <Link href="/#contact">Book a Discovery Call</Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/services">All Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }}
      />
    </>
  );
}
