import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  CloudCog,
  Factory,
  Landmark,
  Mail,
  MapPin,
  PhoneCall,
  Pill,
  Radar,
  Route,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  Truck,
  Users,
  Waypoints,
  Workflow,
} from "lucide-react";

import { LeadCapture } from "@/components/site/lead-capture";
import { LeadForm } from "@/components/site/lead-form";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceExplorer } from "@/components/site/service-explorer";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SITE_ASSETS } from "@/lib/site-assets";
import { COMPANY, SERVICE_TRACKS } from "@/lib/site-content";

const heroMetrics = [
  {
    title: "Smarter Coverage",
    description: "Right people in the right territories with measurable field accountability.",
    icon: Route,
  },
  {
    title: "Route Intelligence",
    description: "Operational planning backed by reporting, cadence, and market feedback loops.",
    icon: Radar,
  },
  {
    title: "Real-time Visibility",
    description: "Clearer operational views across teams on ground, in cloud, and inside workflows.",
    icon: BarChart3,
  },
  {
    title: "Stronger Outcomes",
    description: "Better execution quality, faster releases, and tighter business process throughput.",
    icon: Target,
  },
];

const readinessCards = [
  {
    title: "Pan India Operations",
    description: "Deep local execution support for distributed field programs.",
    icon: MapPin,
  },
  {
    title: "Retail & CPG Specialized",
    description: "Ground-force programs shaped for channel, route, and retailer reality.",
    icon: Store,
  },
  {
    title: "Data-led Execution",
    description: "Operational reporting and delivery visibility that drive action, not noise.",
    icon: BarChart3,
  },
  {
    title: "Enterprise Grade Security",
    description: "Secure delivery practices for DevOps, MLOps, and workflow automation.",
    icon: ShieldCheck,
  },
];

const challengeRows = [
  {
    problem: "Field teams scale unevenly, channel coverage becomes inconsistent, and accountability weakens.",
    solution: "ForceField Field Partner provides deployment structure, reporting discipline, and KRA-backed execution control.",
  },
  {
    problem: "Engineering delivery slows down because security, infrastructure, and release management are fragmented.",
    solution: "ForceField DevOps & Automation sets up secure release workflows, infrastructure discipline, and release guardrails.",
  },
  {
    problem: "ML initiatives reach prototype stage but fail to become dependable production systems.",
    solution: "ForceField builds the operational layer for model deployment, observability, and lifecycle continuity.",
  },
  {
    problem: "Business teams lose time in approvals, reporting, handoffs, and manual follow-up across tools.",
    solution: "ForceField automates any practical business workflow where cycle time and coordination are dragging performance.",
  },
];

const sectors = [
  {
    title: "FMCG & Consumer Brands",
    description: "Field deployment, route execution, channel activation, and visibility-led performance programs.",
    icon: Building2,
  },
  {
    title: "Industrial & Manufacturing",
    description: "Partner networks, sales coverage models, and secure operations support for distributed markets.",
    icon: Factory,
  },
  {
    title: "Technology & SaaS",
    description: "DevOps, MLOps, automation, and operating support for cloud-native product delivery.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Healthcare & Pharma",
    description: "Execution models that balance field coordination, compliance, and structured reporting.",
    icon: Pill,
  },
  {
    title: "BFSI & Fintech",
    description: "High-trust environments that need secure releases, workflow control, and disciplined automation.",
    icon: Landmark,
  },
  {
    title: "Distribution & Logistics",
    description: "Route rollout, partner movement, and workflow visibility across operational networks.",
    icon: Truck,
  },
];

const workSteps = [
  {
    title: "Diagnose",
    description: "Map execution drag across manpower, process, tooling, release flow, and business operations.",
  },
  {
    title: "Design",
    description: "Choose the right operating layer, whether that means field deployment, secure delivery, or workflow automation.",
  },
  {
    title: "Deploy",
    description: "Roll out teams, systems, and workflows with clear ownership and practical reporting loops.",
  },
  {
    title: "Optimize",
    description: "Improve throughput, tighten controls, and keep execution measurable as scale increases.",
  },
];

const aboutPoints = [
  "Two distinct operating segments under one execution-focused brand",
  "Any business workflow automation, not just AI demos or chat interfaces",
  "Secure delivery discipline across cloud, AI, and business operations",
  "Operating structures designed for scale, accountability, and measurable follow-through",
];

const contactCards = [
  {
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}?subject=Discovery%20Call%20with%20ForceField%20Partners%20LLP`,
    icon: Mail,
  },
  {
    label: "Phone / WhatsApp",
    value: "+91 9474905990",
    href: "tel:+919474905990",
    icon: PhoneCall,
  },
  {
    label: "Office",
    value: COMPANY.office,
    href: "https://maps.google.com/?q=Sector+V,+Salt+Lake+City,+Kolkata+700091",
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    value: "/company/forcefieldpartners",
    href: COMPANY.linkedin,
    icon: BriefcaseBusiness,
  },
];

const segmentCrests = {
  field: SITE_ASSETS.fieldCrest,
  digital: SITE_ASSETS.digitalCrest,
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <LeadCapture />

      <main id="home" className="overflow-hidden pb-20">
        <section className="relative overflow-hidden bg-navy-950 pb-16 pt-28 text-white sm:pt-32">
          <div className="bg-grid-dark absolute inset-0 opacity-25" />
          <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-teal-500/18 blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-sky-500/14 blur-3xl" />

          <div className="container relative">
            <div className="field-line surface-shell overflow-hidden rounded-[2.35rem] border border-white/10 shadow-forcefield">
              <div className="grid lg:grid-cols-[0.84fr_1.16fr]">
                <div className="relative px-6 pb-10 pt-8 sm:px-8 lg:px-10 lg:pb-12 lg:pt-10">
                  <div className="mb-6 flex flex-wrap items-center gap-3">
                    <div className="rounded-[1.1rem] border border-navy-900/10 bg-white p-2.5 shadow-lg shadow-slate-950/5">
                      <Image
                        src={SITE_ASSETS.primaryCrest}
                        alt="ForceField crest asset"
                        width={72}
                        height={72}
                        className="h-auto w-14"
                      />
                    </div>
                    <Badge>On ground everywhere. In cloud where it counts.</Badge>
                  </div>

                  <div className="max-w-xl space-y-5">
                    <h1 className="font-display text-balance text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl lg:text-[3.7rem] lg:leading-[1.04]">
                      Execution Teams for the Field, Cloud &amp; AI Era
                    </h1>
                    <p className="text-balance text-base leading-8 text-navy-800 sm:text-lg">
                      ForceField Partners LLP helps businesses scale execution from field sales deployment to secure
                      DevOps, production-grade MLOps, and business workflow automation. The site now makes the two
                      operating segments explicit: field execution and digital operations.
                    </p>
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="lg">
                      <Link href="#contact">
                        Book a Discovery Call
                        <ArrowRight />
                      </Link>
                    </Button>
                    <Button asChild variant="secondary" size="lg">
                      <Link href="#divisions">Explore Solutions</Link>
                    </Button>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-navy-900/10 bg-white px-4 py-4 shadow-lg shadow-slate-950/5">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700">
                          <Users className="size-5" />
                        </div>
                        <p className="text-sm font-semibold text-navy-950">ForceField Field Partner</p>
                      </div>
                      <p className="text-sm leading-6 text-muted-foreground">
                        Field force outsourcing, retailer activation, and field performance systems.
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-navy-900/10 bg-white px-4 py-4 shadow-lg shadow-slate-950/5">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-700">
                          <Workflow className="size-5" />
                        </div>
                        <p className="text-sm font-semibold text-navy-950">DevOps &amp; Automation</p>
                      </div>
                      <p className="text-sm leading-6 text-muted-foreground">
                        DevOps, MLOps, AI-enabled delivery, and any business workflow automation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[360px] lg:min-h-full">
                  <Image
                    src={SITE_ASSETS.heroScene}
                    alt="ForceField field execution and network operations visual"
                    fill
                    priority
                    className="object-cover object-[68%_center]"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-white via-white/32 to-transparent lg:from-white/10 lg:via-white/0 lg:to-transparent" />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-950/18 via-transparent to-white/8" />

                  <div className="absolute left-5 top-5 max-w-[15rem] rounded-[1.4rem] border border-white/55 bg-white/88 p-4 text-navy-950 shadow-xl shadow-slate-950/10 backdrop-blur-sm sm:left-6 sm:top-6 sm:max-w-[16rem]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-600">
                      Pan-India execution visibility
                    </p>
                    <p className="mt-2 text-sm leading-6 text-navy-800">
                      Ground-force deployment, route coverage, and operational telemetry under one execution layer.
                    </p>
                  </div>

                  <div className="absolute bottom-5 left-5 max-w-[15rem] rounded-[1.4rem] border border-white/15 bg-navy-950/90 p-4 text-white shadow-xl shadow-slate-950/20 backdrop-blur-sm sm:bottom-6 sm:left-6 sm:max-w-[17rem]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                      Workflow automation in scope
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      ForceField automates internal approvals, reporting, CRM handoffs, support flows, and AI-assisted
                      operations where they improve throughput.
                    </p>
                  </div>
                </div>
              </div>

              <div className="dark-band grid gap-px bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
                {heroMetrics.map((metric) => {
                  const Icon = metric.icon;

                  return (
                    <div key={metric.title} className="px-6 py-6 sm:px-7">
                      <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-white/8 text-teal-300">
                        <Icon className="size-5" />
                      </div>
                      <h2 className="font-display text-xl font-semibold tracking-tight text-white">{metric.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{metric.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="grid gap-px bg-navy-900/6 sm:grid-cols-2 xl:grid-cols-4">
                {readinessCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div key={card.title} className="bg-white px-6 py-6 sm:px-7">
                      <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-700">
                        <Icon className="size-5" />
                      </div>
                      <h2 className="font-display text-xl font-semibold tracking-tight text-navy-950">{card.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="divisions" className="py-18 sm:py-22 lg:py-24">
          <div className="container space-y-12">
            <Reveal>
              <SectionHeading
                eyebrow="Two Clear Segments"
                title="Separate the field operation from the digital operation"
                description="This is the clearest way to explain ForceField. One side handles on-ground execution and channel discipline. The other handles DevOps, MLOps, and business workflow automation."
                align="center"
              />
            </Reveal>

            <div className="grid gap-6 xl:grid-cols-2">
              {SERVICE_TRACKS.map((track, index) => {
                const isField = track.id === "field";

                return (
                  <Reveal key={track.id} delay={index * 0.08}>
                    <div
                      className={`field-line overflow-hidden rounded-[2rem] border p-6 shadow-forcefield sm:p-7 ${
                        isField
                          ? "border-white/75 bg-white text-navy-950"
                          : "border-white/12 bg-linear-to-br from-navy-950 via-navy-900 to-[#0d566d] text-white"
                      }`}
                    >
                      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div className="space-y-4">
                          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-600">
                            <Sparkles className="size-3.5" />
                            {track.label}
                          </div>
                          <div className="space-y-3">
                            <h2 className={`font-display text-3xl font-semibold tracking-tight ${isField ? "text-navy-950" : "text-white"}`}>
                              {track.entity}
                            </h2>
                            <p className={isField ? "text-base leading-7 text-muted-foreground" : "text-base leading-7 text-slate-300"}>
                              {track.description}
                            </p>
                          </div>
                        </div>

                        <div
                          className={`w-fit rounded-[1.5rem] border p-3 ${
                            isField ? "border-navy-900/10 bg-slate-50" : "border-white/10 bg-white/6"
                          }`}
                        >
                          <Image
                            src={segmentCrests[track.id]}
                            alt={`${track.entity} shield asset`}
                            width={132}
                            height={132}
                            className="h-auto w-20 sm:w-24"
                          />
                        </div>
                      </div>

                      <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {track.bullets.map((bullet) => (
                          <div
                            key={bullet}
                            className={`rounded-[1.4rem] border px-4 py-4 text-sm leading-6 ${
                              isField
                                ? "border-navy-900/10 bg-slate-50 text-navy-900"
                                : "border-white/10 bg-white/6 text-slate-200"
                            }`}
                          >
                            {bullet}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {track.capabilities.map((capability) => (
                          <span
                            key={capability}
                            className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                              isField
                                ? "border-navy-900/10 bg-sky-500/8 text-sky-700"
                                : "border-white/10 bg-white/8 text-teal-200"
                            }`}
                          >
                            {capability}
                          </span>
                        ))}
                      </div>

                      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <Button asChild size="lg">
                          <Link href="#services">
                            View Services
                            <ArrowRight />
                          </Link>
                        </Button>
                        <Button asChild variant={isField ? "secondary" : "outline"} size="lg">
                          <Link href="#contact">Discuss This Segment</Link>
                        </Button>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <ServiceExplorer />

        <section id="why-forcefield" className="py-18 sm:py-22 lg:py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Why ForceField"
                title="An execution layer for businesses that need control without drag"
                description="The recurring problem is rarely ambition. It is operating inconsistency. ForceField closes the gap between strategy and disciplined delivery across people on ground, systems in cloud, and business workflows between teams."
              />

              <div className="mt-8 space-y-4">
                {[
                  "Field partner and DevOps partner are presented as separate buying paths",
                  "Workflow automation is treated as an operating capability, not a gimmick",
                  "Lead capture is short, deliberate, and integrated into the browsing flow",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal-600" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="field-line overflow-hidden rounded-[2rem] border border-white/12 bg-navy-950 text-white shadow-forcefield">
                <div className="hidden gap-4 border-b border-white/10 bg-white/4 px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 md:grid md:grid-cols-[0.78fr_1.22fr]">
                  <div>Common friction</div>
                  <div>ForceField response</div>
                </div>
                <div className="space-y-4 p-4 sm:p-6">
                  {challengeRows.map((row) => (
                    <div
                      key={row.problem}
                      className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 md:grid-cols-[0.78fr_1.22fr]"
                    >
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 md:hidden">
                          Common friction
                        </p>
                        <p className="text-sm leading-7 text-slate-300">{row.problem}</p>
                      </div>
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-300 md:hidden">
                          ForceField response
                        </p>
                        <p className="text-sm leading-7 text-white">{row.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="sectors" className="bg-white/65 py-18 sm:py-22 lg:py-24">
          <div className="container space-y-12">
            <Reveal>
              <SectionHeading
                eyebrow="Industries"
                title="Built for sectors where disciplined execution directly changes outcomes"
                description="ForceField supports businesses that operate across distributed channels, operationally sensitive environments, cloud-native products, and workflow-heavy teams."
                align="center"
              />
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {sectors.map((sector, index) => {
                const Icon = sector.icon;

                return (
                  <Reveal key={sector.title} delay={index * 0.05}>
                    <div className="field-line rounded-[1.75rem] border border-white/70 bg-white p-6 shadow-forcefield">
                      <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-navy-950 to-teal-500 text-white">
                        <Icon className="size-6" />
                      </div>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-navy-950">{sector.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{sector.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="how-we-work" className="py-18 sm:py-22 lg:py-24">
          <div className="container space-y-12">
            <Reveal>
              <SectionHeading
                eyebrow="How We Work"
                title="A four-step operating model from diagnosis to controlled scale"
                description="The process is designed to move from operating reality to measurable execution without collapsing into generic consulting language."
                align="center"
              />
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-4">
              {workSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.06}>
                  <div className="field-line relative h-full rounded-[1.75rem] border border-white/70 bg-white p-6 shadow-forcefield">
                    <div className="mb-5 flex size-12 items-center justify-center rounded-full bg-navy-950 font-display text-lg font-semibold text-white">
                      0{index + 1}
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-navy-950">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="relative overflow-hidden bg-navy-950 py-18 text-white sm:py-22 lg:py-24">
          <div className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-900 to-[#05101f]" />
          <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-teal-500/16 blur-3xl" />

          <div className="container relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="About ForceField"
                title="Execution-focused by design"
                description="ForceField Partners LLP operates where businesses need reliable follow-through, not just advisory language. The company brings structure to field growth, digital delivery, ML systems, and business automation."
                dark
              />

              <div className="mt-8 space-y-4">
                {aboutPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-teal-300" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-6">
                <div className="field-line overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-forcefield sm:p-7">
                  <div className="grid gap-6 sm:grid-cols-[0.78fr_1.22fr] sm:items-center">
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5">
                      <Image
                        src={SITE_ASSETS.accentCrest}
                        alt="ForceField accent crest"
                        width={240}
                        height={240}
                        className="mx-auto h-auto w-full max-w-[180px]"
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                        ForceField execution principle
                      </p>
                      <p className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        The right blend of people, process, systems, and automation to execute at scale.
                      </p>
                      <div className="space-y-3 text-sm leading-7 text-slate-300">
                        <div className="flex items-start gap-3">
                          <Target className="mt-1 size-5 shrink-0 text-teal-300" />
                          <span>Field motion, cloud delivery, and business operations tied into one execution view.</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CloudCog className="mt-1 size-5 shrink-0 text-teal-300" />
                          <span>DevOps and workflow automation treated as operating systems, not disconnected projects.</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Waypoints className="mt-1 size-5 shrink-0 text-teal-300" />
                          <span>Clear separation of the two segments so buyers know exactly where to enter.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    "Responsive by default across mobile decision-makers and desktop buyers",
                    "Theme shifted toward a more premium, reference-led corporate presentation",
                    "Lead capture designed to qualify intent without feeling like a spam trap",
                  ].map((item) => (
                    <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="py-18 sm:py-22 lg:py-24">
          <div className="container">
            <Reveal>
              <div className="field-line overflow-hidden rounded-[2.25rem] border border-white/75 bg-white shadow-forcefield">
                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
                  <div className="space-y-6">
                    <Badge>Contact</Badge>
                    <div className="space-y-4">
                      <h2 className="font-display text-balance text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
                        Bring the requirement in while the intent is still warm
                      </h2>
                      <p className="max-w-2xl text-balance text-base leading-8 text-muted-foreground sm:text-lg">
                        The lead form stays short on purpose. It captures who you are, what segment you need, and what
                        ForceField should solve first. That is the best UX here for serious B2B leads.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {contactCards.map((card) => {
                        const Icon = card.icon;

                        return (
                          <a
                            key={card.label}
                            href={card.href}
                            target={card.href.startsWith("http") ? "_blank" : undefined}
                            rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                            className="rounded-[1.4rem] border border-navy-900/10 bg-slate-50 p-5 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-950/6"
                          >
                            <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-700">
                              <Icon className="size-5" />
                            </div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-600">
                              {card.label}
                            </p>
                            <p className="mt-3 text-sm leading-7 text-navy-950">{card.value}</p>
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-navy-900/10 bg-slate-50 p-5 sm:p-6">
                    <div className="mb-5 space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-600">
                        Discovery form
                      </p>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-navy-950">
                        Tell ForceField what needs to move
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        Use this for field deployment, DevOps, MLOps, or any business workflow automation requirement.
                      </p>
                    </div>

                    <LeadForm source="inline-contact" defaultSegment="Both Segments" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
