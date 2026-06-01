import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BRAND_NAME, PRIMARY_DOMAIN, SERVICE_TRACKS, SERVICES, SITE_KEYWORDS } from "@/lib/site-content";

export const metadata: Metadata = {
  title: `Services | ${BRAND_NAME}`,
  description:
    "Explore ForceField Technologies Pvt Ltd services for field force outsourcing, distributor and retailer activation, DevOps, MLOps, and business workflow automation in India.",
  keywords: SITE_KEYWORDS,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Services | ${BRAND_NAME}`,
    description:
      "Explore ForceField Technologies Pvt Ltd services for field force outsourcing, distributor and retailer activation, DevOps, MLOps, and business workflow automation in India.",
    url: `${PRIMARY_DOMAIN}/services`,
  },
  twitter: {
    title: `Services | ${BRAND_NAME}`,
    description:
      "Explore ForceField Technologies Pvt Ltd services for field force outsourcing, distributor and retailer activation, DevOps, MLOps, and business workflow automation in India.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />

      <main className="overflow-hidden">
        <section className="relative isolate overflow-hidden bg-navy-950 pb-20 pt-30 text-white sm:pb-24 sm:pt-34 lg:pb-28 lg:pt-40">
          <div className="bg-grid-dark absolute inset-0 opacity-28" />
          <div className="absolute left-0 top-10 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-500/16 blur-3xl" />

          <div className="container relative space-y-8">
            <Badge variant="dark">ForceField Services</Badge>
            <div className="max-w-4xl space-y-5">
              <h1 className="font-display text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Field Partner, DevOps, MLOps, and workflow automation services
              </h1>
              <p className="max-w-3xl text-balance text-base leading-8 text-slate-300 sm:text-lg">
                Choose ForceField Field Partner for market execution and channel activation. Choose ForceField DevOps
                & Automation for secure delivery, production ML operations, and business process automation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-18 sm:py-22 lg:py-24">
          <div className="container space-y-12">
            <SectionHeading
              eyebrow="Execution Lines"
              title="Two specialist operating lines"
              description="ForceField Field Partner handles field force outsourcing, retailer activation, distributor movement, and sales performance systems. ForceField DevOps & Automation handles secure delivery, MLOps, and workflow automation across business teams."
            />

            <div className="grid gap-6 xl:grid-cols-2">
              {SERVICE_TRACKS.map((track) => (
                <div
                  key={track.id}
                  className="field-line glass-panel rounded-[2rem] border border-white/70 p-6 shadow-forcefield sm:p-7"
                >
                  <div className="rounded-full border border-teal-500/16 bg-teal-500/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-500 inline-flex">
                    {track.label}
                  </div>
                  <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-navy-900">
                    {track.entity}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">{track.description}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {track.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="rounded-[1.35rem] border border-navy-900/8 bg-white/72 px-4 py-4 text-sm leading-6 text-navy-800"
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {SERVICES.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="block h-full">
                  <Card className="field-line group h-full overflow-hidden border-white/70">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between gap-4">
                        <span className="rounded-full border border-teal-500/14 bg-teal-500/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-500">
                          {service.tag}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-800/70">
                          {service.trackLabel}
                        </span>
                      </div>
                      <CardTitle className="text-navy-900">{service.title}</CardTitle>
                      <CardDescription>{service.summary}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm font-semibold text-navy-800 group-hover:text-teal-500">
                        View details
                        <ArrowRight className="size-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="field-line glass-panel rounded-[2rem] border border-white/70 p-7 shadow-forcefield">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[52%_48%] lg:items-center">
                <div className="space-y-4">
                  <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                    Need both ForceField operating lines on one mandate?
                  </h2>
                  <p className="text-base leading-7 text-muted-foreground">
                    ForceField can combine Field Partner execution with DevOps & Automation delivery when a rollout
                    needs market coverage, reliable systems, and automated internal workflows at the same time.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <Button asChild size="lg">
                    <Link href="/#contact">Book a Discovery Call</Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/">Back to Homepage</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
