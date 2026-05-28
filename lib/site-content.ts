export const PRIMARY_DOMAIN = "https://www.forcefieldpartners.in";

export const BRAND_NAME = "ForceField Partners LLP";
export const SITE_TITLE = `${BRAND_NAME} | Field Force, DevOps & Automation India`;
export const SITE_DESCRIPTION =
  "ForceField Partners LLP delivers field force outsourcing, distributor & retailer activation, DevOps, MLOps, and business workflow automation across India.";

export const SITE_KEYWORDS = [
  "ForceField Partners LLP",
  "ForceField Partners",
  "ForceField",
  "Force Field Partners",
  "field force outsourcing",
  "field force management",
  "field execution partner India",
  "field operations partner India",
  "distributor activation",
  "retailer activation",
  "sales training KRA setup",
  "DevOps services India",
  "DevSecOps services",
  "MLOps services",
  "AI workflow automation",
  "business workflow automation",
  "workflow automation company India",
  "business workflow automation India",
  "business workflow automation company India",
  "Kolkata DevOps services",
  "Kolkata workflow automation company",
  "Kolkata business services",
];

export const COMPANY = {
  email: "sandeepmailbox.83@gmail.com",
  phone: "+91-9474905990",
  office: "Sector V, Salt Lake City, Kolkata 700091",
  linkedin: "https://www.linkedin.com/company/forcefieldpartners",
};

export type TrackId = "field" | "digital";
export type ServiceIconKey =
  | "users"
  | "store"
  | "graduationCap"
  | "cloudCog"
  | "brainCircuit"
  | "workflow";

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
    id: "field" as const,
    label: "Field Execution Partner",
    entity: "ForceField Field Partner",
    summary: "Ground-force deployment, retail activation, and performance-managed field execution.",
    description:
      "Built for brands that need feet-on-ground discipline, channel activation, territory rollout, and last-mile accountability across distributed markets.",
    bullets: [
      "Territory coverage and rollout discipline",
      "Retail and distributor movement with reporting rigor",
      "Sales team training, KRAs, and field performance visibility",
    ],
    capabilities: [
      "Field Force Outsourcing",
      "Distributor & Retailer Activation",
      "Sales Training & KRA Setup",
    ],
  },
  {
    id: "digital" as const,
    label: "DevOps & Automation Partner",
    entity: "ForceField DevOps & Automation",
    summary: "DevOps, MLOps, and business workflow automation for secure scale.",
    description:
      "Built for businesses that need faster software delivery, safer releases, production ML reliability, and automation across practical business workflows.",
    bullets: [
      "Secure cloud delivery and release governance",
      "MLOps for deployment, monitoring, and lifecycle continuity",
      "Business workflow automation across sales ops, HR, finance, support, and reporting",
    ],
    capabilities: ["DevOps Services", "MLOps Services", "Business Workflow Automation"],
  },
];

export const SERVICES: ServiceDefinition[] = [
  {
    slug: "field-force-outsourcing",
    title: "Field Force Outsourcing",
    tag: "Ground execution",
    track: "field",
    trackLabel: "Field Partner",
    entityName: "ForceField Field Partner",
    iconKey: "users",
    summary: "Dedicated field execution teams for territory coverage, market reach, and accountable last-mile performance.",
    description:
      "Dedicated field execution teams built for territory coverage, market reach, reporting discipline, and measurable last-mile accountability.",
    seoDescription:
      "ForceField Partners LLP provides field force outsourcing for territory coverage, channel execution, reporting discipline, and last-mile accountability.",
    heroEyebrow: "Field Execution Service",
    deliverables: [
      "Territory planning, rollout, and manpower deployment",
      "Daily activity reporting and field supervision cadence",
      "Performance tracking aligned to KRAs and sales outcomes",
    ],
    useCases: [
      "New market entry and expansion",
      "Distributor-led route coverage",
      "Retail push campaigns and visibility drives",
    ],
    sectors: ["FMCG", "Consumer Brands", "Industrial Distribution", "Healthcare Field Teams"],
    keywords: ["field force outsourcing", "field sales outsourcing", "sales force deployment"],
  },
  {
    slug: "distributor-retailer-activation",
    title: "Distributor & Retailer Activation",
    tag: "Channel growth",
    track: "field",
    trackLabel: "Field Partner",
    entityName: "ForceField Field Partner",
    iconKey: "store",
    summary: "Channel activation programs that improve distributor movement, retailer engagement, and in-market execution quality.",
    description:
      "Channel activation programs that improve distributor movement, retailer engagement, visibility, and sales momentum across target markets.",
    seoDescription:
      "ForceField Partners LLP helps brands improve distributor and retailer activation through disciplined field execution, reporting, and channel visibility.",
    heroEyebrow: "Channel Activation Service",
    deliverables: [
      "Distributor onboarding and movement activation support",
      "Retail engagement, visibility, and outlet-level execution",
      "Market feedback loops and activation reporting",
    ],
    useCases: [
      "Dealer onboarding and route activation",
      "Retail visibility campaigns",
      "Secondary sales movement acceleration",
    ],
    sectors: ["FMCG", "Retail Distribution", "Consumer Goods", "Channel-led Businesses"],
    keywords: ["distributor activation", "retailer activation", "channel activation services"],
  },
  {
    slug: "sales-training-kra-setup",
    title: "Sales Training & KRA Setup",
    tag: "Performance systems",
    track: "field",
    trackLabel: "Field Partner",
    entityName: "ForceField Field Partner",
    iconKey: "graduationCap",
    summary: "Sales enablement systems with onboarding, KRAs, and performance management for field teams.",
    description:
      "Structured onboarding, role clarity, performance KRAs, and feedback loops that turn field teams into reliable execution engines.",
    seoDescription:
      "ForceField Partners LLP builds sales training and KRA systems for field teams that need role clarity, onboarding rigor, and measurable execution discipline.",
    heroEyebrow: "Performance Enablement Service",
    deliverables: [
      "Role-based onboarding and sales process enablement",
      "KRA and KPI design for field and channel teams",
      "Ongoing coaching loops and reporting discipline",
    ],
    useCases: [
      "Scaling a new sales team",
      "Improving low-visibility field operations",
      "Standardizing distributor and sales rep execution",
    ],
    sectors: ["Consumer Sales", "Industrial Sales", "B2B Distribution", "Pharma Field Teams"],
    keywords: ["sales training", "KRA setup", "field team performance management"],
  },
  {
    slug: "devsecops-services",
    title: "DevOps Services",
    tag: "Secure cloud delivery",
    track: "digital",
    trackLabel: "DevOps & Automation",
    entityName: "ForceField DevOps & Automation",
    iconKey: "cloudCog",
    summary: "Secure cloud delivery pipelines, infrastructure automation, and release governance for modern engineering teams.",
    description:
      "Secure delivery pipelines, policy controls, infrastructure automation, and release governance that reduce friction without compromising trust.",
    seoDescription:
      "ForceField Partners LLP delivers DevOps services and secure delivery automation for infrastructure consistency, release guardrails, and cloud delivery confidence.",
    heroEyebrow: "Digital Delivery Service",
    deliverables: [
      "CI/CD pipeline design with embedded security controls",
      "Infrastructure automation and environment standardization",
      "Release governance, policy enforcement, and observability setup",
    ],
    useCases: [
      "Cloud platform modernization",
      "Secure release automation",
      "Reducing environment drift and deployment friction",
    ],
    sectors: ["Technology", "SaaS", "Fintech", "Regulated Digital Products"],
    keywords: ["DevOps services", "DevSecOps services", "secure CI/CD", "cloud infrastructure automation"],
  },
  {
    slug: "mlops-services",
    title: "MLOps Services",
    tag: "Model operations",
    track: "digital",
    trackLabel: "DevOps & Automation",
    entityName: "ForceField DevOps & Automation",
    iconKey: "brainCircuit",
    summary: "Production-grade deployment, monitoring, and lifecycle management for machine learning systems.",
    description:
      "Production-grade model packaging, deployment, monitoring, and lifecycle management so ML moves from pilots to dependable operations.",
    seoDescription:
      "ForceField Partners LLP provides MLOps services for model deployment, monitoring, lifecycle control, and production ML reliability.",
    heroEyebrow: "Machine Learning Operations",
    deliverables: [
      "Model packaging, release, and serving workflows",
      "Monitoring, drift visibility, and retraining readiness",
      "Operational handoff from experimentation to production",
    ],
    useCases: [
      "Taking ML pilots into production",
      "Stabilizing existing model-serving systems",
      "Creating a repeatable ML release lifecycle",
    ],
    sectors: ["SaaS", "AI Products", "Analytics Platforms", "Data-driven Enterprises"],
    keywords: ["MLOps services", "model deployment", "production machine learning"],
  },
  {
    slug: "business-workflow-automation",
    title: "Business Workflow Automation",
    tag: "Business automation",
    track: "digital",
    trackLabel: "DevOps & Automation",
    entityName: "ForceField DevOps & Automation",
    iconKey: "workflow",
    summary: "Automation for approvals, reporting, CRM handoffs, support workflows, HR operations, finance ops, and AI-assisted business processes.",
    description:
      "Automation for approvals, reporting, CRM handoffs, support workflows, HR operations, finance operations, and AI-assisted business processes.",
    seoDescription:
      "ForceField Partners LLP builds business workflow automation for sales ops, finance ops, HR, reporting, support, and AI-assisted internal processes.",
    heroEyebrow: "Business Operations Automation",
    deliverables: [
      "Workflow mapping across teams, systems, and approval chains",
      "Tool orchestration and rule-based process automation",
      "AI-assisted automation where it improves cycle time and accuracy",
    ],
    useCases: [
      "Lead routing and CRM updates",
      "Internal approvals and reporting workflows",
      "Support, HR, and finance process automation",
    ],
    sectors: ["SaaS", "Services Businesses", "Operations-heavy Teams", "Enterprise Functions"],
    keywords: ["business workflow automation", "process automation", "AI workflow automation", "operations automation India"],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
