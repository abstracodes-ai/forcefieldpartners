"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { BrandLockup } from "@/components/site/brand-lockup";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Field + DevOps", href: "/#divisions" },
  { label: "Services", href: "/#services" },
  { label: "Why ForceField", href: "/#why-forcefield" },
  { label: "Industries", href: "/#sectors" },
  { label: "How We Work", href: "/#how-we-work" },
  { label: "About", href: "/#about" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-3 py-4 sm:mx-4">
        <div className="field-line flex items-center justify-between rounded-[2rem] border border-white/80 bg-white/92 px-4 py-3.5 shadow-forcefield backdrop-blur-xl sm:px-6 sm:py-4">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <BrandLockup mode="light" size="sm" className="sm:hidden" />
            <BrandLockup mode="light" size="lg" className="hidden sm:block sm:pr-4" />
          </Link>

          <nav className="hidden items-center gap-5 text-sm text-navy-900 xl:gap-6 lg:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="font-medium hover:text-teal-600">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild size="sm">
              <Link href="/#contact">Book a Discovery Call</Link>
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/10 bg-slate-50 text-navy-950 lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "field-line mt-3 overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/96 px-5 py-4 shadow-forcefield backdrop-blur-xl lg:hidden",
              )}
            >
              <nav className="flex flex-col gap-3 text-sm text-navy-900">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-3 py-2 font-medium hover:bg-navy-900/6 hover:text-teal-600"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 border-t border-navy-900/10 pt-4">
                <Button asChild className="w-full">
                  <Link href="/#contact" onClick={() => setOpen(false)}>
                    Book a Discovery Call
                  </Link>
                </Button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
