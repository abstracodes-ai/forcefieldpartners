import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  CloudCog,
  Factory,
  GraduationCap,
  Landmark,
  Mail,
  MapPin,
  PhoneCall,
  Pill,
  ShieldCheck,
  Store,
  Target,
  Truck,
  Users,
  Waypoints,
  Workflow,
} from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceExplorer } from "@/components/site/service-explorer";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const challengeRows = [
  {
    problem: "Execution depends on fragmented teams, patchy visibility, and weak ownership.",
    solution: "ForceField designs accountable field operating layers with deployment discipline, reporting, and KRA alignment.",
  },
  {
    problem: "Software delivery is slowed by security gaps, manual controls, and environment drift.",
    solution: "ForceField implements DevSecOps pipelines that standardize releases, embed guardrails, and improve delivery confidence.",
  },
  {
    problem: "ML initiatives stall between experimentation and production reliability.",
    solution: "ForceField builds MLOps foundations for deployment, monitoring, retraining readiness, and operational continuity.",
  },
  {
    problem: "Teams spend too much time on repetitive coordination and follow-up work.",
    solution:
      "ForceField automates business workflows across tools and functions, with or without AI, wherever process friction is slowing execution.",
  },
];

const sectors = [
  {
    title: "FMCG & Consumer Brands",
    description: "Field deployment, channel activation, and retail execution programs with disciplined coverage.",
    icon: Building2,
  },
  {
    title: "Industrial & Manufacturing",
    description: "Operational support for distributed sales motions, partner enablement, and secure digital delivery.",
    icon: Factory,
  },
  {
    title: "Technology & SaaS",
    description: "DevSecOps, platform reliability, business workflow automation, and production-grade MLOps support.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Healthcare & Pharma",
    description: "Execution models that balance field coordination, compliance sensitivity, and structured reporting.",
    icon: Pill,
  },
  {
    title: "BFSI & Fintech",
    description: "High-trust operational environments that benefit from secure automation and disciplined release processes.",
    icon: Landmark,
  },
  {
    title: "Distribution & Logistics",
    description: "Execution frameworks for partner networks, route activation, service operations, and operational visibility.",
    icon: Truck,
  },
];

const workSteps = [
  {
    title: "Diagnose",
    description: "Audit execution gaps across people, process, data, and tooling to identify where control is breaking down.",
  },
  {
    title: "Design",
    description: "Create the right operating model, whether that means field structures, secure pipelines, model ops, or automation flows.",
  },
  {
    title: "Deploy",
    description: "Stand up the teams, workflows, and systems with clear ownership, milestones, and operating cadence.",
  },
  {
    title: "Optimize",
    description: "Track outcomes, improve throughput, reduce risk, and tighten the execution layer as the business scales.",
  },
];

const aboutPoints = [
  "Execution discipline across both field operations and digital operations",
  "Security-first delivery mindset for modern cloud and AI environments",
  "Workflow automation capability across operational, commercial, and back-office functions",
  "Operating models designed for scale, accountability, and measurable follow-through",
];

const contactCards = [
  {
    label: "Email",
    value: "sandeepmailbox.83@gmail.com",
    href: "mailto:sandeepmailbox.83@gmail.com?subject=Discovery%20Call%20with%20ForceField%20Partners%20LLP",
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
    value: "Sector V, Salt Lake City, Kolkata 700091",
    href: "https://maps.google.com/?q=Sector+V,+Salt+Lake+City,+Kolkata+700091",
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    value: "/company/forcefieldpartners",
    href: "https://www.linkedin.com/company/forcefieldpartners",
    icon: BriefcaseBusiness,
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main id="home" className="overflow-hidden">
        <section className="relative isolate overflow-hidden bg-navy-950 text-white">
          <div className="bg-grid-dark absolute inset-0 opacity-30" />
          <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-teal-500/24 blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500/18 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-400/14 blur-3xl" />

          <div className="container relative grid gap-14 pb-20 pt-28 sm:pb-24 sm:pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-18 lg:pb-28 lg:pt-40">
            <Reveal className="space-y-8">
              <Badge variant="dark">Secure execution layer for growth operations</Badge>

              <div className="space-y-6">
                <h1 className="font-display text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  Execution Teams for the Field, Cloud &amp; AI Era
                </h1>
                <p className="max-w-2xl text-balance text-base leading-8 text-slate-300 sm:text-lg">
                  ForceField Partners LLP helps businesses scale execution from field sales deployment to secure
                  DevSecOps, production-grade MLOps, and business workflow automation powered by disciplined systems
                  and AI where useful.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="#contact">
                    Book a Discovery Call
                    <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  "Field deployment with accountability",
                  "Secure delivery for modern cloud stacks",
                  "Workflow automation across business functions",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-200 backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="field-line dark-panel relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 p-5 shadow-forcefield sm:p-7">
                <div className="bg-grid-dark absolute inset-0 opacity-40" />
                <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-teal-400/18 to-transparent" />
                <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
                  ForceField Operating Layer
                </div>

                <div className="absolute left-1/2 top-1/2 z-10 flex size-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-teal-400/26 bg-white/8 backdrop-blur-md sm:size-52 pulse-glow">
                  <Image
                    src="/brand/forcefield-mark.svg"
                    alt="ForceField shield mark"
                    width={144}
                    height={144}
                    className="h-auto w-28 sm:w-34"
                    priority
                  />
                </div>

                <div className="float-slow absolute left-4 top-28 w-[12rem] rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur-sm sm:left-8 sm:w-[14rem]">
                  <div className="mb-3 flex items-center gap-3 text-teal-400">
                    <Users className="size-5" />
                    <span className="text-sm font-semibold text-white">Field Operations</span>
                  </div>
                  <p className="text-sm leading-6 text-slate-300">
                    Territory deployment, channel execution, reporting cadence, and KRA ownership.
                  </p>
                </div>

                <div className="float-slower absolute right-4 top-20 w-[12rem] rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur-sm sm:right-8 sm:w-[14rem]">
                  <div className="mb-3 flex items-center gap-3 text-teal-400">
                    <ShieldCheck className="size-5" />
                    <span className="text-sm font-semibold text-white">DevSecOps</span>
                  </div>
                  <p className="text-sm leading-6 text-slate-300">
                    Secure release automation, environment consistency, and policy-driven delivery controls.
                  </p>
                </div>

                <div className="float-slow absolute bottom-6 left-6 w-[12rem] rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur-sm sm:left-10 sm:w-[13rem]">
                  <div className="mb-3 flex items-center gap-3 text-teal-400">
                    <BrainCircuit className="size-5" />
                    <span className="text-sm font-semibold text-white">MLOps</span>
                  </div>
                  <p className="text-sm leading-6 text-slate-300">
                    Deployment, monitoring, and lifecycle management for production machine learning systems.
                  </p>
                </div>

                <div className="float-slower absolute bottom-8 right-5 w-[12rem] rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur-sm sm:right-10 sm:w-[14rem]">
                  <div className="mb-3 flex items-center gap-3 text-teal-400">
                    <Bot className="size-5" />
                    <span className="text-sm font-semibold text-white">Business Automation</span>
                  </div>
                  <p className="text-sm leading-6 text-slate-300">
                    Faster operations through workflow design, tool orchestration, and AI-assisted automation where it fits.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <ServiceExplorer />

        <section id="why-forcefield" className="bg-navy-950 py-18 text-white sm:py-22 lg:py-24">
          <div className="container grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Why ForceField"
                title="A control layer for businesses that need execution without drag"
                description="The recurring problem is rarely ambition. It is weak operating structure. ForceField closes the gap between strategy and disciplined delivery across field execution, digital operations, and workflow automation programs."
                dark
              />

              <div className="mt-8 space-y-4">
                {[
                  "Secure-by-design execution models",
                  "Operational clarity from rollout to reporting",
                  "Two clear operating entities under one execution-focused brand",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal-400" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="field-line dark-panel rounded-[2rem] border border-white/10 p-4 sm:p-6">
                <div className="hidden gap-4 rounded-[1.5rem] border border-white/10 bg-white/4 px-5 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300 md:grid md:grid-cols-[0.78fr_1.22fr]">
                  <div>Common friction</div>
                  <div>ForceField response</div>
                </div>

                <div className="mt-4 space-y-4">
                  {challengeRows.map((row) => (
                    <div
                      key={row.problem}
                      className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/4 p-5 md:grid-cols-[0.78fr_1.22fr]"
                    >
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 md:hidden">
                          Common friction
                        </p>
                        <p className="text-sm leading-7 text-slate-300">{row.problem}</p>
                      </div>
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-400 md:hidden">
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

        <section id="sectors" className="py-18 sm:py-22 lg:py-24">
          <div className="container space-y-12">
            <Reveal>
              <SectionHeading
                eyebrow="Sectors We Serve"
                title="Built for industries where disciplined execution directly affects growth"
                description="ForceField supports businesses that operate across distributed channels, regulated environments, cloud-native products, and workflow-heavy execution environments."
                align="center"
              />
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {sectors.map((sector, index) => {
                const Icon = sector.icon;

                return (
                  <Reveal key={sector.title} delay={index * 0.05}>
                    <div className="field-line glass-panel h-full rounded-[1.75rem] border border-white/60 p-6 shadow-forcefield">
                      <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-navy-900 to-teal-500 text-white">
                        <Icon className="size-6" />
                      </div>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-navy-900">{sector.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{sector.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="how-we-work" className="bg-white/70 py-18 sm:py-22 lg:py-24">
          <div className="container space-y-12">
            <Reveal>
              <SectionHeading
                eyebrow="How We Work"
                title="A four-step execution model that keeps momentum measurable"
                description="The process is designed to move from diagnosis to controlled scale with enough rigor for enterprise environments and enough speed for growth-stage teams."
                align="center"
              />
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-4">
              {workSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.06}>
                  <div className="field-line glass-panel relative h-full rounded-[1.75rem] border border-white/70 p-6 shadow-forcefield">
                    <div className="mb-5 flex size-12 items-center justify-center rounded-full bg-navy-900 font-display text-lg font-semibold text-white">
                      0{index + 1}
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-navy-900">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="relative overflow-hidden bg-navy-900 py-18 text-white sm:py-22 lg:py-24">
          <div className="absolute inset-0 bg-linear-to-br from-navy-900 via-navy-950 to-[#03101f]" />
          <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-teal-500/12 blur-3xl" />
          <div className="container relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="About ForceField"
                title="Execution-focused by design"
                description="ForceField Partners LLP operates where businesses need secure follow-through, not just advisory language. The company brings operational discipline to field growth, digital delivery, ML systems, and business workflow automation."
                dark
              />

              <div className="mt-8 space-y-4">
                {aboutPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-teal-400" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-6">
                <div className="field-line dark-panel rounded-[2rem] border border-white/10 p-7 shadow-forcefield">
                  <div className="grid gap-8 sm:grid-cols-[0.8fr_1.2fr] sm:items-center">
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                      <Image
                        src="/brand/forcefield-logo-stacked.svg"
                        alt="ForceField Partners LLP stacked logo"
                        width={320}
                        height={254}
                        className="mx-auto h-auto w-full max-w-[220px]"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Target className="mt-1 size-5 text-teal-400" />
                        <p className="text-sm leading-7 text-slate-300">
                          Clear execution mandates, aligned targets, and operational ownership.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="mt-1 size-5 text-teal-400" />
                        <p className="text-sm leading-7 text-slate-300">
                          Trust-first delivery across secure systems, infrastructure, and workflow automation.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Waypoints className="mt-1 size-5 text-teal-400" />
                        <p className="text-sm leading-7 text-slate-300">
                          Integrated coordination between people on the ground and systems in the cloud.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    "Premium brand system ready for header, pitch, favicon, and profile usage",
                    "Responsive and more interactive layout for mobile decision-makers and desktop buyers",
                    "Clean architecture built on Next.js App Router, Tailwind, and motion",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300"
                    >
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
              <div className="relative overflow-hidden rounded-[2.25rem] bg-navy-950 px-6 py-8 text-white shadow-forcefield sm:px-8 sm:py-10 lg:px-14 lg:py-14">
                <div className="bg-grid-dark absolute inset-0 opacity-28" />
                <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-teal-500/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-blue-500/16 blur-3xl" />

                <div className="relative grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
                  <div className="space-y-6">
                    <Badge variant="dark">Contact</Badge>
                    <div className="space-y-4">
                      <h2 className="font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                        Ready to strengthen your execution layer?
                      </h2>
                      <p className="max-w-2xl text-balance text-base leading-8 text-slate-300 sm:text-lg">
                        Speak with ForceField Partners LLP about field deployment, secure delivery operations, MLOps,
                        or business workflow automation. The first conversation is focused on operating realities, not
                        generic pitch decks.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button asChild size="lg">
                        <a href="mailto:sandeepmailbox.83@gmail.com?subject=Discovery%20Call%20with%20ForceField%20Partners%20LLP">
                          Book a Discovery Call
                        </a>
                      </Button>
                      <Button asChild size="lg" variant="outline">
                        <a
                          href="https://www.linkedin.com/company/forcefieldpartners"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Connect on LinkedIn
                        </a>
                      </Button>
                    </div>
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
                          className="field-line rounded-[1.5rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm hover:-translate-y-1 hover:bg-white/8"
                        >
                          <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-white/8 text-teal-400">
                            <Icon className="size-5" />
                          </div>
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                            {card.label}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-white">{card.value}</p>
                        </a>
                      );
                    })}
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
