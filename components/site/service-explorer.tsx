"use client";

import Link from "next/link";
import { startTransition, useState } from "react";
import {
  ArrowRight,
  Bot,
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

const trackIconMap: Record<TrackId, typeof Users> = {
  field: Users,
  digital: ShieldCheck,
};

const filterLabels: Array<{ id: FilterId; label: string }> = [
  { id: "all", label: "All Services" },
  { id: "field", label: "Field Entity" },
  { id: "digital", label: "DevOps Entity" },
];

const automationScopes = [
  "Sales Ops",
  "Finance Ops",
  "HR Workflows",
  "Support Queues",
  "Approvals",
  "Reporting",
  "CRM / ERP Handoffs",
  "Internal Task Routing",
];

export function ServiceExplorer() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filteredServices =
    activeFilter === "all" ? SERVICES : SERVICES.filter((service) => service.track === activeFilter);

  return (
    <section id="divisions" className="py-18 sm:py-22 lg:py-24">
      <div className="container space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Two Clear Execution Entities"
            title="One brand, two distinct operating lines"
            description="ForceField reads most clearly when the field execution side and the digital operations side are separated. The site now presents those two entry points explicitly so buyers can identify the right operating model faster."
          />
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-2">
          {SERVICE_TRACKS.map((track, index) => {
            const Icon = trackIconMap[track.id];
            const isActive = activeFilter === track.id;

            return (
              <Reveal key={track.id} delay={index * 0.08}>
                <motion.button
                  type="button"
                  onClick={() => startTransition(() => setActiveFilter(track.id))}
                  whileHover={{ y: -4 }}
                  className={cn(
                    "field-line glass-panel group relative w-full overflow-hidden rounded-[2rem] border border-white/70 p-6 text-left shadow-forcefield sm:p-7",
                    isActive && "border-teal-400/40",
                  )}
                >
                  <div className="absolute -right-12 top-0 h-36 w-36 rounded-full bg-teal-400/14 blur-3xl" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="flex size-12 items-center justify-center rounded-2xl bg-navy-900 text-teal-400">
                            <Icon className="size-6" />
                          </div>
                          <div className="rounded-full border border-teal-500/16 bg-teal-500/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-500">
                            {track.label}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-display text-2xl font-semibold tracking-tight text-navy-900">
                            {track.entity}
                          </h3>
                          <p className="text-base font-medium text-navy-800">{track.summary}</p>
                        </div>
                      </div>

                      <div
                        className={cn(
                          "rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]",
                          isActive
                            ? "border-navy-900/14 bg-navy-900 text-white"
                            : "border-navy-900/10 bg-navy-900/5 text-navy-900",
                        )}
                      >
                        {isActive ? "Focused" : "View track"}
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-muted-foreground">{track.description}</p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {track.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="rounded-[1.4rem] border border-navy-900/8 bg-white/72 px-4 py-4 text-sm leading-6 text-navy-800"
                        >
                          {bullet}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {track.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className="rounded-full border border-navy-900/10 bg-navy-900/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-800"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div id="services" className="space-y-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-500">Interactive service explorer</p>
                <h3 className="font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                  Explore the exact operating scope
                </h3>
                <p className="text-base leading-7 text-muted-foreground">
                  Workflow automation here means broader business process automation as well as AI-assisted flows where they actually improve throughput. Each service now has its own landing page so it can rank and convert independently.
                </p>
              </div>

              <div className="inline-flex flex-wrap gap-2 rounded-full border border-navy-900/8 bg-white/70 p-2 shadow-lg shadow-slate-950/5">
                {filterLabels.map((filter) => {
                  const active = activeFilter === filter.id;

                  return (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => startTransition(() => setActiveFilter(filter.id))}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-semibold",
                        active ? "bg-navy-900 text-white" : "text-navy-800 hover:bg-navy-900/6",
                      )}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.06fr_0.94fr]">
              <div className="field-line glass-panel rounded-[1.8rem] border border-white/70 p-6 shadow-forcefield">
                <div className="mb-4 flex items-center gap-3 text-navy-900">
                  <Bot className="size-5 text-teal-500" />
                  <h4 className="font-display text-xl font-semibold tracking-tight">
                    Business workflow automation is a full operating capability
                  </h4>
                </div>
                <p className="text-sm leading-7 text-muted-foreground">
                  ForceField can automate repetitive business processes with or without AI where it creates operational leverage. That includes approvals, task routing, reporting, support workflows, CRM updates, finance coordination, and internal operational handoffs.
                </p>
              </div>

              <div className="field-line glass-panel rounded-[1.8rem] border border-white/70 p-6 shadow-forcefield">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-teal-500">
                  Typical automation scope
                </p>
                <div className="flex flex-wrap gap-2">
                  {automationScopes.map((scope) => (
                    <span
                      key={scope}
                      className="rounded-full border border-navy-900/10 bg-navy-900/5 px-3 py-1.5 text-sm font-medium text-navy-800"
                    >
                      {scope}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredServices.map((service) => {
                  const Icon = iconMap[service.iconKey];
                  const isField = service.track === "field";

                  return (
                    <motion.div
                      layout
                      key={service.slug}
                      initial={{ opacity: 0, y: 16, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link href={`/services/${service.slug}`} className="block h-full">
                        <Card className="field-line group h-full overflow-hidden border-white/70">
                          <CardHeader className="space-y-4">
                            <div className="flex items-center justify-between gap-4">
                              <div
                                className={cn(
                                  "rounded-2xl p-3 shadow-lg",
                                  isField
                                    ? "bg-linear-to-br from-navy-900 to-blue-700 text-cyan-200 shadow-cyan-950/12"
                                    : "bg-linear-to-br from-navy-900 to-teal-500 text-white shadow-cyan-950/14",
                                )}
                              >
                                <Icon className="size-6" />
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <span className="rounded-full border border-teal-500/14 bg-teal-500/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-500">
                                  {service.tag}
                                </span>
                                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-800/72">
                                  {service.trackLabel}
                                </span>
                              </div>
                            </div>
                            <CardTitle className="text-navy-900">{service.title}</CardTitle>
                            <CardDescription>{service.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center gap-2 text-sm font-semibold text-navy-800 group-hover:text-teal-500">
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
        </Reveal>
      </div>
    </section>
  );
}
