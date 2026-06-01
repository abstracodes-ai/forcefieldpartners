export const PRIMARY_DOMAIN = "https://www.forcefieldpartners.in";

export const BRAND_NAME = "ForceField Technologies Pvt Ltd";
export const SITE_TITLE = `ForceField Technologies | AI, DevOps, Design & Development`;
export const SITE_DESCRIPTION =
  "ForceField Technologies delivers AI automation, MLOps, DevOps, brand & logo design, creative graphics, and web development for businesses worldwide.";

export const SITE_KEYWORDS = [
  "ForceField Technologies",
  "AI automation services",
  "MLOps services",
  "DevOps services",
  "DevSecOps",
  "AI workflow automation",
  "logo design services",
  "brand identity design",
  "flyer design",
  "flex banner design",
  "social media design",
  "video graphics",
  "gig artwork design",
  "web development",
  "custom software development",
  "AI development company",
  "DevOps company",
  "design agency",
  "technology company",
  "remote technology services",
];

export const COMPANY = {
  email: "sales@forcefieldpartners.in",
  phone: "+91-9474905990",
  office: "Sector V, Salt Lake City, Kolkata 700091",
  linkedin: "https://www.linkedin.com/company/forcefieldpartners",
};

export type TrackId = "tech" | "creative";
export type ServiceIconKey =
  | "cloudCog"
  | "brainCircuit"
  | "workflow"
  | "palette"
  | "penTool"
  | "code";

export type ServiceDefinition = {
  slug: string;
  title: string;
  tag: string;
  track: TrackId;
  trackLabel: string;
  entityName: string;
  iconKey: ServiceIconKey;
  summary: string;
  description: string;
  seoDescription: string;
  heroEyebrow: string;
  deliverables: string[];
  useCases: string[];
  sectors: string[];
  keywords: string[];
};

export const SERVICE_TRACKS = [
  {
    id: "tech" as const,
    label: "AI, DevOps & Automation",
    entity: "ForceField Technology",
    summary: "AI automation, MLOps, and DevOps for teams that need faster delivery, smarter systems, and reliable cloud operations.",
    description:
      "Built for engineering teams, product companies, and businesses that need AI-powered workflows, production-grade ML operations, and secure cloud delivery pipelines.",
    bullets: [
      "AI workflow automation and agentic AI systems",
      "MLOps — model deployment, monitoring, and lifecycle control",
      "DevOps & DevSecOps — CI/CD, infrastructure automation, release governance",
    ],
    capabilities: ["AI Automation", "MLOps", "DevOps & DevSecOps"],
  },
  {
    id: "creative" as const,
    label: "Design & Development",
    entity: "ForceField Creative & Build",
    summary: "Brand design, creative graphics, and web development for businesses that need to look sharp and build fast.",
    description:
      "Built for startups, agencies, and businesses that need strong brand identity, creative production (logo, flyer, flex, video, gig artwork), and custom web or product development.",
    bullets: [
      "Logo, brand identity, and visual design systems",
      "Creative production — flyers, flex banners, social media, video, gig artwork",
      "Web and product development",
    ],
    capabilities: ["Logo & Brand Design", "Creative Graphics", "Web Development"],
  },
];

export const SERVICES: ServiceDefinition[] = [
  {
    slug: "ai-automation",
    title: "AI Workflow Automation",
    tag: "Intelligent automation",
    track: "tech",
    trackLabel: "AI & Automation",
    entityName: "ForceField Technology",
    iconKey: "brainCircuit",
    summary: "AI agents and automation systems that eliminate manual workflows, approval bottlenecks, and coordination overhead across any business function.",
    description:
      "Agentic AI systems built around your business processes — automating approvals, document review, CRM handoffs, support workflows, finance ops, HR operations, and reporting across teams.",
    seoDescription:
      "ForceField Technologies builds AI workflow automation for approvals, document review, CRM handoffs, support, finance, HR, and reporting — reducing manual work and improving throughput.",
    heroEyebrow: "AI Automation Service",
    deliverables: [
      "Business process mapping and automation opportunity identification",
      "AI agent design for document review, routing, and decision workflows",
      "Human-in-the-loop approval flows with full audit trail",
    ],
    useCases: [
      "Invoice validation and payment processing automation",
      "Lead routing and CRM update workflows",
      "HR document review and onboarding automation",
    ],
    sectors: ["Finance & Fintech", "SaaS & Technology", "Healthcare", "E-commerce", "Legal"],
    keywords: ["AI workflow automation", "business process automation", "agentic AI", "AI automation services"],
  },
  {
    slug: "mlops-services",
    title: "MLOps Services",
    tag: "Model operations",
    track: "tech",
    trackLabel: "AI & Automation",
    entityName: "ForceField Technology",
    iconKey: "brainCircuit",
    summary: "Production-grade ML deployment, monitoring, and lifecycle management for teams that need models in production — not stuck in notebooks.",
    description:
      "Model packaging, deployment, serving pipelines, drift monitoring, retraining readiness, and lifecycle control so ML moves from experimentation to dependable production operations.",
    seoDescription:
      "ForceField Technologies provides MLOps services for model deployment, monitoring, drift detection, and production ML lifecycle management.",
    heroEyebrow: "Machine Learning Operations",
    deliverables: [
      "Model packaging, release pipeline, and serving infrastructure",
      "Monitoring, drift detection, and retraining readiness setup",
      "Operational handoff from experimentation to production",
    ],
    useCases: [
      "Taking ML pilots into reliable production systems",
      "Stabilising existing model-serving infrastructure",
      "Building repeatable ML release and monitoring lifecycle",
    ],
    sectors: ["SaaS", "AI Products", "Analytics Platforms", "HealthTech", "Fintech"],
    keywords: ["MLOps services", "model deployment", "production machine learning", "ML operations"],
  },
  {
    slug: "devops-services",
    title: "DevOps & DevSecOps",
    tag: "Cloud delivery",
    track: "tech",
    trackLabel: "DevOps & Cloud",
    entityName: "ForceField Technology",
    iconKey: "cloudCog",
    summary: "Secure CI/CD pipelines, infrastructure automation, and release governance for engineering teams that need to ship faster without breaking things.",
    description:
      "Secure delivery pipelines, policy controls, infrastructure automation, and release governance that reduce deployment friction while maintaining trust and compliance.",
    seoDescription:
      "ForceField Technologies delivers DevOps and DevSecOps services — CI/CD pipelines, infrastructure automation, release governance, and cloud delivery confidence.",
    heroEyebrow: "Cloud Delivery Service",
    deliverables: [
      "CI/CD pipeline design with embedded security controls",
      "Infrastructure automation and environment standardisation",
      "Release governance, policy enforcement, and observability setup",
    ],
    useCases: [
      "Cloud platform modernisation and migration",
      "Secure release automation for regulated products",
      "Reducing environment drift and deployment friction",
    ],
    sectors: ["Technology & SaaS", "Fintech", "Healthcare Tech", "E-commerce", "Agencies"],
    keywords: ["DevOps services", "DevSecOps", "CI/CD pipeline", "cloud infrastructure automation"],
  },
  {
    slug: "logo-brand-design",
    title: "Logo & Brand Design",
    tag: "Brand identity",
    track: "creative",
    trackLabel: "Design",
    entityName: "ForceField Creative & Build",
    iconKey: "penTool",
    summary: "Logo design, brand identity systems, and visual guidelines that make businesses look credible, consistent, and memorable.",
    description:
      "From initial logo concept to full brand identity — including colour systems, typography, usage guidelines, and brand assets built for both print and digital use.",
    seoDescription:
      "ForceField Technologies provides logo design and brand identity services — professional logos, colour systems, typography, and visual brand guidelines for businesses worldwide.",
    heroEyebrow: "Brand Identity Service",
    deliverables: [
      "Logo concept exploration, refinement, and final delivery",
      "Brand colour palette, typography system, and usage guidelines",
      "Brand asset pack for digital, print, and social use",
    ],
    useCases: [
      "New business launch requiring full brand identity",
      "Rebrand for growing company or pivot",
      "Startup needing investor-ready brand materials",
    ],
    sectors: ["Startups", "SMBs", "E-commerce", "Agencies", "Creators & Freelancers"],
    keywords: ["logo design", "brand identity design", "professional logo design", "brand design services"],
  },
  {
    slug: "creative-design",
    title: "Creative Design",
    tag: "Visual production",
    track: "creative",
    trackLabel: "Design",
    entityName: "ForceField Creative & Build",
    iconKey: "palette",
    summary: "Flyers, flex banners, social media creatives, video graphics, and gig artwork — designed fast and built to perform.",
    description:
      "High-quality creative production for marketing, advertising, and content needs — flyers, flex banners, social media posts, YouTube thumbnails, gig platform artwork, and motion graphics.",
    seoDescription:
      "ForceField Technologies designs flyers, flex banners, social media creatives, video graphics, YouTube thumbnails, and gig artwork for businesses and creators worldwide.",
    heroEyebrow: "Creative Production Service",
    deliverables: [
      "Print-ready flyers, posters, and flex banner designs",
      "Social media post templates and content creatives",
      "Video thumbnails, gig artwork, and motion graphics assets",
    ],
    useCases: [
      "Marketing campaign visual assets",
      "Event promotion and outdoor advertising materials",
      "Freelancer or creator platform profile and gig artwork",
    ],
    sectors: ["Marketing & Agencies", "E-commerce", "Events", "Creators", "Retail & F&B"],
    keywords: ["flyer design", "flex banner design", "social media design", "gig artwork", "video graphics design"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    tag: "Digital build",
    track: "creative",
    trackLabel: "Development",
    entityName: "ForceField Creative & Build",
    iconKey: "code",
    summary: "Fast, modern websites and web applications built for performance, SEO, and real business outcomes.",
    description:
      "Custom web development using modern frameworks — landing pages, business websites, web apps, and product interfaces built to load fast, rank well, and convert visitors.",
    seoDescription:
      "ForceField Technologies builds fast, modern websites and web applications — landing pages, business sites, and web apps using React, Next.js, and modern stacks.",
    heroEyebrow: "Web Development Service",
    deliverables: [
      "Business website or landing page design and development",
      "Web application development with modern frontend frameworks",
      "SEO optimisation, performance tuning, and deployment",
    ],
    useCases: [
      "Startup launching a product or company website",
      "Business needing a redesigned or modernised web presence",
      "Agency or creator needing a custom portfolio or tools",
    ],
    sectors: ["Startups", "SaaS & Technology", "Agencies", "E-commerce", "Professional Services"],
    keywords: ["web development", "website design and development", "Next.js development", "custom web development"],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
