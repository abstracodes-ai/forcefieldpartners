"use client";

import Image from "next/image";
import Link from "next/link";
import { startTransition, useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  CloudCog,
  GraduationCap,
  ShieldCheck,
  Store,
  Users,
  Workflow,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SITE_ASSETS } from "@/lib/site-assets";
import { SERVICE_TRACKS, SERVICES, type ServiceIconKey, type TrackId } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type FilterId = "all" | TrackId;

const iconMap: Record<ServiceIconKey, typeof Users> = {
  users: Users,
  store: Store,
  graduationCap: GraduationCap,
  cloudCog: CloudCog,
  brainCircuit: BrainCircuit,
  workflow: Workflow,
};

const filterOptions: Array<{ id: FilterId; label: string; description: string }> = [
  { id: "all", label: "All Services", description: "Browse the entire ForceField execution stack." },
  { id: "field", label: "Field Partner", description: "Ground-force teams, channel activation, and KRAs." },
  { id: "digital", label: "DevOps & Automation", description: "Cloud delivery, MLOps, and workflow automation." },
];

const automationScopes = [
  "Lead routing",
  "CRM to ERP handoffs",
  "Approvals and escalations",
  "Support operations",
  "Finance coordination",
  "HR workflows",
  "Reporting packs",
  "AI-assisted task execution",
];

export function ServiceExplorer() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filteredServices =
    activeFilter === "all" ? SERVICES : SERVICES.filter((service) => service.track === activeFilter);

  return (
    <section id="services" className="py-18 sm:py-22 lg:py-24">
      <div className="container space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Service Catalogue"
            title="Browse the exact execution scope you need"
            description="The site separates field deployment from digital operations clearly, then lets buyers drill into the service pages that match their real requirement."
          />
        </Reveal>

        <div className="grid gap-5 xl:grid-cols-[1.06fr_0.94fr]">
          <Reveal>
            <div className="field-line rounded-[2rem] border border-white/70 bg-white p-5 shadow-forcefield sm:p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-600">
                    Filter by segment
                  </p>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-navy-950 sm:text-3xl">
                    Clear segmentation without splitting the brand
                  </h3>
                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    Field execution buyers and DevOps buyers do not scan the same way. The filter keeps both paths
                    visible while keeping the shared ForceField identity intact.
                  </p>
                </div>

                <div className="inline-flex flex-wrap gap-2 rounded-full border border-navy-900/10 bg-slate-50 p-2">
                  {filterOptions.map((filter) => {
                    const active = activeFilter === filter.id;

                    return (
                      <button
                        key={filter.id}
                        type="button"
                        onClick={() => startTransition(() => setActiveFilter(filter.id))}
                        className={cn(
                          "rounded-full px-4 py-2 text-sm font-semibold",
                          active ? "bg-navy-950 text-white" : "text-navy-900 hover:bg-navy-900/6",
                        )}
                      >
                        {filter.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {filterOptions.map((filter) => {
                  const active = activeFilter === filter.id;

                  return (
                    <div
                      key={filter.id}
                      className={cn(
                        "rounded-[1.4rem] border px-4 py-4",
                        active
                          ? "border-teal-500/24 bg-teal-500/8"
                          : "border-navy-900/10 bg-slate-50/90",
                      )}
                    >
                      <p className="text-sm font-semibold text-navy-950">{filter.label}</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{filter.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="field-line relative overflow-hidden rounded-[2rem] border border-white/70 bg-linear-to-br from-navy-950 via-navy-900 to-[#0f5d73] p-6 text-white shadow-forcefield">
              <div className="absolute -right-12 top-0 h-36 w-36 rounded-full bg-white/12 blur-3xl" />
              <div className="absolute bottom-0 right-0">
                <Image
                  src={SITE_ASSETS.accentCrest}
                  alt="ForceField shield accent"
                  width={184}
                  height={184}
                  className="h-auto w-28 opacity-70 sm:w-36"
                />
              </div>
              <div className="relative max-w-md space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-200">
                  <ShieldCheck className="size-3.5" />
                  Workflow automation is broader than AI chat
                </div>
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    Any business workflow automation is in scope
                  </h3>
                  <p className="text-sm leading-7 text-slate-300 sm:text-base">
                    ForceField automates business operations wherever coordination slows growth. That includes
                    approvals, routing, reporting, support queues, internal handoffs, and AI-assisted workflows where
                    it genuinely improves throughput.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {automationScopes.map((scope) => (
                    <span
                      key={scope}
                      className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200"
                    >
                      {scope}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          {SERVICE_TRACKS.map((track, index) => (
            <Reveal key={track.id} delay={index * 0.08}>
              <div
                className={cn(
                  "field-line rounded-[1.75rem] border border-white/70 p-5 shadow-forcefield sm:p-6",
                  track.id === "field" ? "bg-white" : "bg-white",
                )}
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-[1.25rem] border border-navy-900/8 bg-slate-50 p-3">
                    <Image
                      src={track.id === "field" ? SITE_ASSETS.fieldCrest : SITE_ASSETS.digitalCrest}
                      alt={`${track.entity} crest`}
                      width={72}
                      height={72}
                      className="h-auto w-14"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-600">{track.label}</p>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-navy-950">{track.entity}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{track.summary}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const Icon = iconMap[service.iconKey];
              const isField = service.track === "field";

              return (
                <motion.div
                  key={service.slug}
                  layout
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={`/services/${service.slug}`} className="block h-full">
                    <Card className="group h-full border-white/75 bg-white">
                      <CardHeader className="space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <div
                            className={cn(
                              "rounded-[1.2rem] p-3 shadow-lg",
                              isField
                                ? "bg-linear-to-br from-cyan-500 to-sky-600 text-white shadow-cyan-950/14"
                                : "bg-linear-to-br from-navy-950 to-teal-500 text-white shadow-cyan-950/18",
                            )}
                          >
                            <Icon className="size-6" />
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <span
                              className={cn(
                                "rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]",
                                isField
                                  ? "bg-sky-500/8 text-sky-700"
                                  : "bg-teal-500/10 text-teal-700",
                              )}
                            >
                              {service.trackLabel}
                            </span>
                            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-800/70">
                              {service.tag}
                            </span>
                          </div>
                        </div>
                        <CardTitle className="text-navy-950">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="rounded-[1.25rem] bg-slate-50 px-4 py-4 text-sm leading-6 text-navy-900">
                          {service.summary}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-navy-950 group-hover:text-teal-600">
                          View service page
                          <ArrowRight className="size-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
