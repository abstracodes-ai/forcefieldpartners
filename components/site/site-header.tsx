"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Why ForceField", href: "#why-forcefield" },
  { label: "Sectors", href: "#sectors" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "About", href: "#about" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container py-4">
        <div className="field-line dark-panel flex items-center justify-between rounded-full border border-white/10 px-4 py-3 shadow-forcefield sm:px-6">
          <Link href="#home" className="flex items-center" onClick={() => setOpen(false)}>
            <Image
              src="/brand/forcefield-logo-horizontal.svg"
              alt="ForceField Partners LLP"
              width={220}
              height={60}
              className="h-auto w-[170px] sm:w-[200px]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild size="sm">
              <Link href="#contact">Book a Discovery Call</Link>
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
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
                "dark-panel field-line mt-3 overflow-hidden rounded-[1.75rem] border border-white/10 px-5 py-4 shadow-forcefield lg:hidden",
              )}
            >
              <nav className="flex flex-col gap-3 text-sm text-slate-200">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-3 py-2 hover:bg-white/6 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 border-t border-white/10 pt-4">
                <Button asChild className="w-full">
                  <Link href="#contact" onClick={() => setOpen(false)}>
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
