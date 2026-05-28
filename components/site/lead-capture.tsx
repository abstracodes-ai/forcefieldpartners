"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { useEffect, useEffectEvent, useRef, useState } from "react";

import { LeadForm } from "@/components/site/lead-form";
import { Button } from "@/components/ui/button";

const COMPLETED_KEY = "forcefield-lead-capture-completed";
const TEASER_KEY = "forcefield-lead-capture-teaser";
const SNOOZE_KEY = "forcefield-lead-capture-snooze-until";
const SNOOZE_MS = 3 * 60 * 1000;

export function LeadCapture() {
  const [open, setOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [triggerLabel, setTriggerLabel] = useState("Discovery Request");
  const [snoozedUntil, setSnoozedUntil] = useState(0);
  const teaserTimeoutRef = useRef<number | null>(null);

  const scheduleTeaserReturn = useEffectEvent((resumeAt: number) => {
    if (teaserTimeoutRef.current) {
      window.clearTimeout(teaserTimeoutRef.current);
    }

    const remaining = resumeAt - Date.now();

    if (submitted || remaining <= 0) {
      if (!submitted && window.sessionStorage.getItem(TEASER_KEY) === "1") {
        setShowTeaser(true);
      }
      return;
    }

    teaserTimeoutRef.current = window.setTimeout(() => {
      if (!submitted && window.sessionStorage.getItem(COMPLETED_KEY) !== "1") {
        window.sessionStorage.setItem(TEASER_KEY, "1");
        setShowTeaser(true);
      }
    }, remaining);
  });

  const openCapture = useEffectEvent((label: string, intent: "auto" | "manual" = "auto") => {
    if (submitted || open || Date.now() < snoozedUntil) {
      return;
    }

    if (intent === "auto" && window.innerWidth < 640) {
      return;
    }

    setTriggerLabel(label);
    setShowTeaser(false);
    setOpen(true);
  });

  const minimizeCapture = useEffectEvent(() => {
    const nextSnooze = Date.now() + SNOOZE_MS;

    setOpen(false);
    setShowTeaser(false);
    setSnoozedUntil(nextSnooze);
    window.sessionStorage.setItem(TEASER_KEY, "1");
    window.sessionStorage.setItem(SNOOZE_KEY, String(nextSnooze));
    scheduleTeaserReturn(nextSnooze);
  });

  const handleSuccess = useEffectEvent(() => {
    setSubmitted(true);
    setOpen(false);
    setShowTeaser(false);
    window.sessionStorage.setItem(COMPLETED_KEY, "1");
  });

  useEffect(() => {
    if (window.sessionStorage.getItem(COMPLETED_KEY) === "1") {
      setSubmitted(true);
      return;
    }

    const persistedSnooze = Number(window.sessionStorage.getItem(SNOOZE_KEY) ?? "0");
    const teaserVisible = window.sessionStorage.getItem(TEASER_KEY) === "1";

    setSnoozedUntil(persistedSnooze);

    if (teaserVisible && persistedSnooze <= Date.now()) {
      setShowTeaser(true);
    } else if (teaserVisible && persistedSnooze > Date.now()) {
      scheduleTeaserReturn(persistedSnooze);
    }

    const openOnTimer = window.setTimeout(() => openCapture("Discovery Request"), 9000);
    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight <= 0) {
        return;
      }

      const progress = window.scrollY / scrollHeight;

      if (progress > 0.33) {
        openCapture("Operations Intake");
      }
    };
    const onMouseOut = (event: MouseEvent) => {
      if (window.innerWidth < 1024) {
        return;
      }

      if (event.clientY <= 10) {
        openCapture("Before You Go");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.clearTimeout(openOnTimer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
      if (teaserTimeoutRef.current) {
        window.clearTimeout(teaserTimeoutRef.current);
      }
    };
  }, [openCapture, scheduleTeaserReturn]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-end bg-navy-950/55 p-2 backdrop-blur-sm sm:items-center sm:justify-center sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => minimizeCapture()}
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="field-line relative w-full max-w-xl max-h-[92vh] overflow-hidden rounded-[2rem] border border-white/75 bg-white p-5 shadow-forcefield sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => minimizeCapture()}
                className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full border border-navy-900/10 bg-white text-navy-900"
                aria-label="Close lead capture"
              >
                <X className="size-5" />
              </button>

              <div className="max-h-[calc(92vh-2.5rem)] space-y-5 overflow-y-auto overscroll-contain pr-2 sm:pr-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/16 bg-teal-500/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-600">
                  <Sparkles className="size-3.5" />
                  {triggerLabel}
                </div>
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-navy-950 sm:text-3xl">
                    Tell ForceField what needs to move
                  </h3>
                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    Share a few details and the right team will follow up on field execution, DevOps, MLOps, or
                    workflow automation.
                  </p>
                </div>

                <LeadForm source="lead-capture" variant="compact" onSuccess={handleSuccess} />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showTeaser && !submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            className="fixed bottom-4 right-4 z-[60] w-[min(100%-2rem,22rem)]"
          >
            <div className="field-line rounded-[1.6rem] border border-white/12 bg-navy-950/96 p-4 text-white shadow-forcefield backdrop-blur-md">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">Discovery request</p>
                  <h4 className="font-display text-lg font-semibold tracking-tight">
                    Need field execution, DevOps, or workflow automation support?
                  </h4>
                  <p className="text-sm leading-6 text-slate-300">
                    Share the requirement and the right ForceField team will follow up.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => minimizeCapture()}
                  className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-300"
                  aria-label="Hide teaser"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <Button className="sm:flex-1" onClick={() => openCapture("Discovery Request", "manual")}>
                  Open Form
                </Button>
                <Button variant="outline" className="sm:flex-1" onClick={() => minimizeCapture()}>
                  Keep Browsing
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
