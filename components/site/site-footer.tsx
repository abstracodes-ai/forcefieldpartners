import Link from "next/link";

import { BrandLockup } from "@/components/site/brand-lockup";
import { ForceFieldCrest } from "@/components/site/forcefield-crest";

const links = [
  { label: "Field + DevOps", href: "/#divisions" },
  { label: "Services", href: "/#services" },
  { label: "Why ForceField", href: "/#why-forcefield" },
  { label: "Industries", href: "/#sectors" },
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
              Execution-focused operating partner for field deployment, DevOps and MLOps delivery, and business
              workflow automation across operational teams.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">Field Partner</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Deployment teams, retailer activation, and field performance systems.
                </p>
              </div>
              <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">DevOps & Automation</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  DevOps, MLOps, and workflow automation for modern operating environments.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:max-w-md">
            <div className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
              <div className="rounded-[1.2rem] border border-white/16 bg-[#07162f] p-2.5 shadow-[0_12px_28px_rgba(6,16,31,0.32)]">
                <ForceFieldCrest className="h-auto w-14" />
              </div>
              <div className="text-sm leading-6 text-slate-300">
                Built for India-first operations that need stronger field control and more disciplined digital delivery.
              </div>
            </div>

            <div className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2 lg:text-right">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="font-medium hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} ForceField Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 lg:justify-end">
            <a href="mailto:sales@forcefieldpartners.in" className="hover:text-white">
              sales@forcefieldpartners.in
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
