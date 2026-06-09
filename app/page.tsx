import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  CloudCog,
  Code,
  Globe,
  Landmark,
  Mail,
  MapPin,
  Palette,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Target,
  Waypoints,
  Workflow,
  Zap,
} from "lucide-react";

import { ForceFieldCrest } from "@/components/site/forcefield-crest";
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
    title: "AI & Automation",
    description: "Agentic AI systems that eliminate manual workflows, document review, and approval bottlenecks.",
    icon: BrainCircuit,
  },
  {
    title: "DevOps & MLOps",
    description: "Secure delivery pipelines, production ML operations, and cloud infrastructure discipline.",
    icon: CloudCog,
  },
  {
    title: "Design & Creative",
    description: "Logo, brand identity, flyers, flex, video graphics, and gig artwork — built to perform.",
    icon: Palette,
  },
  {
    title: "Web Development",
    description: "Fast, modern websites and web apps built for SEO, performance, and real outcomes.",
    icon: Code,
  },
];

const readinessCards = [
  {
    title: "Global Delivery",
    description: "Remote-first team delivering technology, AI, and design to clients worldwide.",
    icon: Globe,
  },
  {
    title: "AI-First Thinking",
    description: "Every workflow, system, and process evaluated through an automation-first lens.",
    icon: BrainCircuit,
  },
  {
    title: "Speed & Quality",
    description: "Fast turnaround without cutting corners — delivery discipline built into every engagement.",
    icon: Zap,
  },
  {
    title: "Secure by Default",
    description: "DevOps and AI delivery with security, audit, and compliance at the core.",
    icon: ShieldCheck,
  },
];

const challengeRows = [
  {
    problem: "Engineering teams slow down because CI/CD, infrastructure, and releases are fragmented and manual.",
    solution: "ForceField sets up secure delivery pipelines, infrastructure automation, and release governance that reduces friction.",
  },
  {
    problem: "ML projects stay in proof-of-concept and never reach dependable production operations.",
    solution: "ForceField builds MLOps infrastructure — model serving, monitoring, drift detection, and lifecycle control.",
  },
  {
    problem: "Business teams lose hours to approvals, handoffs, and repetitive tasks across disconnected tools.",
    solution: "ForceField deploys AI automation agents that handle routing, review, reporting, and coordination workflows.",
  },
  {
    problem: "Businesses lack visual identity or creative assets that look professional and convert attention.",
    solution: "ForceField designs logos, brand systems, marketing materials, and web experiences built to grow businesses.",
  },
];

const sectors = [
  {
    title: "Technology & SaaS",
    description: "DevOps, MLOps, AI automation, and web development for product teams and cloud-native businesses.",
    icon: CloudCog,
  },
  {
    title: "Finance & Fintech",
    description: "Secure delivery, compliance automation, invoice workflows, and AI-powered financial process management.",
    icon: Landmark,
  },
  {
    title: "E-commerce & Retail",
    description: "Brand design, creative assets, web development, and workflow automation for online businesses.",
    icon: ShieldCheck,
  },
  {
    title: "Healthcare & Biotech",
    description: "MLOps for medical AI, document automation, compliance workflows, and secure cloud delivery.",
    icon: BrainCircuit,
  },
  {
    title: "Agencies & Creators",
    description: "Logo design, creative production, web development, and AI tools for agencies and solo creators.",
    icon: Palette,
  },
  {
    title: "Startups & Scale-ups",
    description: "Full-stack technology partner — AI, DevOps, design, and dev to launch and scale fast.",
    icon: Zap,
  },
];

const workSteps = [
  {
    title: "Understand",
    description: "Map the business problem, technical context, and desired outcome before proposing any solution.",
  },
  {
    title: "Design",
    description: "Choose the right approach — AI automation, DevOps setup, creative design, or web build — based on the mandate.",
  },
  {
    title: "Deliver",
    description: "Execute with clear ownership, measurable milestones, and consistent communication throughout.",
  },
  {
    title: "Improve",
    description: "Iterate on delivery quality, tighten systems, and keep outputs improving as the engagement grows.",
  },
];

const aboutPoints = [
  "AI automation and agentic AI systems for any business workflow",
  "MLOps and DevOps for teams that need production-grade delivery",
  "Logo, brand identity, and creative design for businesses that want to stand out",
  "Web development for businesses that need a fast, modern online presence",
];

const contactCards = [
  {
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}?subject=Enquiry%20—%20ForceField%20Technologies`,
    icon: Mail,
  },
  {
    label: "Phone / WhatsApp",
    value: COMPANY.phone,
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
  tech: SITE_ASSETS.crest,
  creative: SITE_ASSETS.crest,
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <LeadCapture />

      <main id="home" className="overflow-hidden pb-20">
        <section className="relative overflow-hidden pb-16 pt-36 sm:pt-40">
          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-teal-500/14 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="mx-3 sm:mx-4">
            <div className="field-line surface-shell overflow-hidden rounded-[2.35rem] border border-navy-900/10 shadow-forcefield">
              <div className="grid grid-cols-1 lg:grid-cols-[46%_54%]">
                <div className="relative px-6 pb-10 pt-8 sm:px-8 lg:px-10 lg:pb-12 lg:pt-10">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <div className="rounded-[1.1rem] border border-slate-200 bg-white p-2.5 shadow-[0_4px_12px_rgba(6,16,31,0.10)]">
                      <ForceFieldCrest className="h-auto w-12" />
                    </div>
                    <Badge>Intelligent Technology. Creative Design. Global Delivery.</Badge>
                  </div>

                  <div className="max-w-lg space-y-4">
                    <h1 className="font-display text-balance text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl lg:text-[3.2rem] lg:leading-[1.06]">
                      AI, DevOps, Design &amp; Development — Built for Businesses Everywhere
                    </h1>
                    <p className="text-balance text-sm leading-7 text-navy-800 sm:text-base sm:leading-8">
                      ForceField Technologies delivers AI automation, MLOps, DevOps pipelines, brand design, creative production, and web development to businesses and teams worldwide.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="lg">
                      <Link href="#contact">
                        Start a Project
                        <ArrowRight />
                      </Link>
                    </Button>
                    <Button asChild variant="secondary" size="lg">
                      <Link href="#services">Explore Services</Link>
                    </Button>
                  </div>

                  <div className="mt-6 hidden gap-3 sm:grid sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-navy-900/10 bg-white px-4 py-4 shadow-lg shadow-slate-950/5">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700">
                          <CloudCog className="size-5" />
                        </div>
                        <p className="text-sm font-semibold text-navy-950">AI &amp; Technology</p>
                      </div>
                      <p className="text-sm leading-6 text-muted-foreground">
                        AI automation, MLOps, DevOps, and DevSecOps for modern teams.
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-navy-900/10 bg-white px-4 py-4 shadow-lg shadow-slate-950/5">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-700">
                          <Palette className="size-5" />
                        </div>
                        <p className="text-sm font-semibold text-navy-950">Design &amp; Development</p>
                      </div>
                      <p className="text-sm leading-6 text-muted-foreground">
                        Logo design, creative graphics, and web development.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative h-[320px] bg-linear-to-br from-slate-100 via-[#d9e9f2] to-[#b9d3e5] sm:h-[400px] lg:h-auto lg:min-h-full">
                  <Image
                    src={SITE_ASSETS.heroScene}
                    alt="ForceField Technologies — AI, DevOps, Design and Development"
                    fill
                    priority
                    className="object-cover object-[60%_center] xl:object-[58%_center]"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-white/55 via-white/10 to-transparent lg:from-white/8 lg:via-transparent lg:to-transparent" />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-950/10 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 hidden max-w-[13rem] rounded-[1.2rem] border border-white/55 bg-white/88 p-3 text-navy-950 shadow-xl shadow-slate-950/10 backdrop-blur-sm sm:block sm:left-5 sm:top-5 sm:max-w-[14rem]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-600">
                      AI-First Delivery
                    </p>
                    <p className="mt-1.5 text-xs leading-5 text-navy-800">
                      Every workflow, system, and process evaluated through an automation-first lens.
                    </p>
                  </div>

                  <div className="absolute bottom-4 left-4 hidden max-w-[13rem] rounded-[1.2rem] border border-white/15 bg-navy-950/90 p-3 text-white shadow-xl shadow-slate-950/20 backdrop-blur-sm sm:block sm:bottom-5 sm:left-5 sm:max-w-[15rem]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-300">
                      Global Delivery
                    </p>
                    <p className="mt-1.5 text-xs leading-5 text-slate-300">
                      Remote-first team serving clients in India, UK, US, Middle East, and beyond.
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
                eyebrow="Two Service Lines"
                title="Technology & AI — plus Design & Development"
                description="ForceField Technology handles AI automation, MLOps, and DevOps for teams that need smarter systems and faster delivery. ForceField Creative & Build handles brand design, creative production, and web development for businesses that need to look sharp and build fast."
                align="center"
              />
            </Reveal>

            <div className="grid gap-6 xl:grid-cols-2">
              {SERVICE_TRACKS.map((track, index) => {
                const isTech = track.id === "tech";

                return (
                  <Reveal key={track.id} delay={index * 0.08}>
                    <div
                      className={`field-line overflow-hidden rounded-[2rem] border p-6 shadow-forcefield sm:p-7 ${
                        isTech
                          ? "border-white/12 bg-linear-to-br from-navy-950 via-navy-900 to-[#0d566d] text-white"
                          : "border-white/75 bg-white text-navy-950"
                      }`}
                    >
                      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div className="space-y-4">
                          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-600">
                            <Sparkles className="size-3.5" />
                            {track.label}
                          </div>
                          <div className="space-y-3">
                            <h2 className={`font-display text-3xl font-semibold tracking-tight ${isTech ? "text-white" : "text-navy-950"}`}>
                              {track.entity}
                            </h2>
                            <p className={isTech ? "text-base leading-7 text-slate-300" : "text-base leading-7 text-muted-foreground"}>
                              {track.description}
                            </p>
                          </div>
                        </div>

                        <div className="w-fit rounded-[1.5rem] border border-slate-200/20 bg-white/10 p-3 shadow-[0_12px_28px_rgba(6,16,31,0.32)]">
                          <ForceFieldCrest className="h-auto w-20 sm:w-24" />
                        </div>
                      </div>

                      <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {track.bullets.map((bullet) => (
                          <div
                            key={bullet}
                            className={`rounded-[1.4rem] border px-4 py-4 text-sm leading-6 ${
                              isTech
                                ? "border-white/10 bg-white/6 text-slate-200"
                                : "border-navy-900/10 bg-slate-50 text-navy-900"
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
                              isTech
                                ? "border-white/10 bg-white/8 text-teal-200"
                                : "border-navy-900/10 bg-sky-500/8 text-sky-700"
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
                        <Button asChild variant={isTech ? "outline" : "secondary"} size="lg">
                          <Link href="#contact">Start a Project</Link>
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
          <div className="container grid grid-cols-1 gap-10 lg:grid-cols-[45%_55%] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Why ForceField"
                title="Technology and design that move businesses forward — anywhere in the world"
                description="The gap isn't ambition. It's execution quality. ForceField closes the gap between what businesses want to build or launch and what actually gets delivered — with the right mix of AI, DevOps, design, and development."
              />

              <div className="mt-8 space-y-4">
                {[
                  "AI automation and MLOps that turn manual processes into reliable, scalable systems",
                  "DevOps and DevSecOps that give engineering teams speed without sacrificing stability",
                  "Design and development that build visual credibility and digital presence globally",
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
                <div className="hidden gap-4 border-b border-white/10 bg-white/4 px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 md:grid md:grid-cols-[39%_61%]">
                  <div>Common problem</div>
                  <div>ForceField response</div>
                </div>
                <div className="space-y-4 p-4 sm:p-6">
                  {challengeRows.map((row) => (
                    <div
                      key={row.problem}
                      className="grid grid-cols-1 gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 md:grid-cols-[39%_61%]"
                    >
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 md:hidden">
                          Common problem
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
                title="Built for sectors where technology, design, and automation change outcomes"
                description="ForceField serves businesses that need AI-powered operations, reliable cloud delivery, strong brand identity, and fast web development — globally."
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
                title="Understand, design, deliver, improve"
                description="ForceField starts with the real problem, designs the right solution, delivers with clear ownership, and keeps improving until outcomes are measurable."
                align="center"
              />
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

          <div className="container relative grid grid-cols-1 gap-10 lg:grid-cols-[46%_54%] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="About ForceField"
                title="Technology-first by design"
                description="ForceField Technologies Pvt Ltd is a remote-first technology company delivering AI automation, DevOps, MLOps, brand design, creative production, and web development to businesses globally."
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
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-[39%_61%] sm:items-center">
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 shadow-[0_12px_28px_rgba(6,16,31,0.32)]">
                      <ForceFieldCrest className="mx-auto h-auto w-full max-w-[180px]" />
                    </div>
                    <div className="space-y-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                        ForceField principle
                      </p>
                      <p className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        Intelligent technology. Purposeful design. Delivered without compromise.
                      </p>
                      <div className="space-y-3 text-sm leading-7 text-slate-300">
                        <div className="flex items-start gap-3">
                          <Target className="mt-1 size-5 shrink-0 text-teal-300" />
                          <span>AI automation and DevOps connected to measurable business outcomes.</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Palette className="mt-1 size-5 shrink-0 text-teal-300" />
                          <span>Design and development built for real audiences — not just to look good.</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Waypoints className="mt-1 size-5 shrink-0 text-teal-300" />
                          <span>Technology and creative services routed to the right specialist from day one.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    "AI agents and MLOps built for production — not just demos or prototypes",
                    "DevOps and DevSecOps delivery built around speed, reliability, and security",
                    "Design and web development that builds credibility and drives business growth",
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
                <div className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-[46%_54%] lg:p-10">
                  <div className="space-y-6">
                    <Badge>Contact</Badge>
                    <div className="space-y-4">
                      <h2 className="font-display text-balance text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
                        Start a project with ForceField
                      </h2>
                      <p className="max-w-2xl text-balance text-base leading-8 text-muted-foreground sm:text-lg">
                        Tell us what you need — AI automation, DevOps, MLOps, design, or development. We'll respond with a practical next step.
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
                        Project enquiry
                      </p>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-navy-950">
                        Tell us what you want to build
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        AI automation, DevOps, MLOps, design, or web development — we'll take it from here.
                      </p>
                    </div>

                    <LeadForm source="inline-contact" />
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
