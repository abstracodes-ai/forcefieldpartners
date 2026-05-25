import Link from "next/link";

import { BrandLockup } from "@/components/site/brand-lockup";

const links = [
  { label: "Divisions", href: "/#divisions" },
  { label: "Services", href: "/#services" },
  { label: "Why ForceField", href: "/#why-forcefield" },
  { label: "Sectors", href: "/#sectors" },
  { label: "How We Work", href: "/#how-we-work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="container space-y-10 py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl space-y-5">
            <BrandLockup mode="dark" size="lg" showSubtitle />
            <p className="max-w-lg text-sm leading-7 text-slate-300">
              Execution-focused operating partner for field deployment, secure cloud delivery, MLOps, and business
              workflow automation.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Field Force</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">DevSecOps</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">MLOps</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Workflow Automation</span>
            </div>
          </div>

          <div className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-3 lg:text-right">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="font-medium hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} ForceField Partners LLP. All rights reserved.</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 lg:justify-end">
            <a href="mailto:sandeepmailbox.83@gmail.com" className="hover:text-white">
              sandeepmailbox.83@gmail.com
            </a>
            <a href="tel:+919474905990" className="hover:text-white">
              +91 9474905990
            </a>
            <a
              href="https://www.linkedin.com/company/forcefieldpartners"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
