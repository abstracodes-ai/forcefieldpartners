"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle, Mail, MessageCircleMore, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type LeadFormProps = {
  source: "inline-contact" | "lead-capture";
  variant?: "full" | "compact";
  defaultSegment?: string;
  className?: string;
  onSuccess?: () => void;
};

type LeadPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  segment: string;
  message: string;
  source: LeadFormProps["source"];
};

type FormStatus = "idle" | "submitting" | "success" | "manual" | "error";

const segmentOptions = [
  "Field Execution Partner",
  "DevOps & Automation",
  "Both Segments",
  "Business Workflow Automation",
];

function buildLeadSummary(form: LeadPayload) {
  return [
    `Name: ${form.name || "-"}`,
    `Company: ${form.company || "-"}`,
    `Email: ${form.email || "-"}`,
    `Phone / WhatsApp: ${form.phone || "-"}`,
    `Interested In: ${form.segment || "-"}`,
    `Source: ${form.source}`,
    "",
    "Requirement:",
    form.message || "No additional details provided.",
  ].join("\n");
}

export function LeadForm({
  source,
  variant = "full",
  defaultSegment = "Both Segments",
  className,
  onSuccess,
}: LeadFormProps) {
  const [form, setForm] = useState<LeadPayload>({
    name: "",
    company: "",
    email: "",
    phone: "",
    segment: defaultSegment,
    message: "",
    source,
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const isCompact = variant === "compact";
  const contactSummary = useMemo(() => buildLeadSummary(form), [form]);
  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Discovery request from ${form.company || form.name || "website visitor"}`);
    const body = encodeURIComponent(contactSummary);

    return `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
  }, [contactSummary, form.company, form.name]);
  const whatsappHref = useMemo(() => {
    const phone = COMPANY.phone.replace(/\D/g, "");
    const text = encodeURIComponent(contactSummary);

    return `https://wa.me/${phone}?text=${text}`;
  }, [contactSummary]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.company.trim()) {
      setStatus("error");
      setFeedback("Add your name and company so the team can qualify the request.");
      return;
    }

    if (!form.email.trim() && !form.phone.trim()) {
      setStatus("error");
      setFeedback("Add either a work email or phone / WhatsApp number.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { message?: string; code?: string };

      if (response.ok) {
        setStatus("success");
        setFeedback(result.message ?? "Request captured. ForceField will reach out shortly.");
        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          segment: defaultSegment,
          message: "",
          source,
        });
        onSuccess?.();
        return;
      }

      if (response.status === 503 || result.code === "delivery_not_configured") {
        setStatus("manual");
        setFeedback("Automatic lead delivery is not configured yet. Use email or WhatsApp below to send this request now.");
        return;
      }

      setStatus("error");
      setFeedback(result.message ?? "Submission failed. Try again or use direct contact options.");
    } catch {
      setStatus("error");
      setFeedback("Submission failed. Try again or use direct contact options.");
    }
  }

  return (
    <div className={cn("space-y-4", className)}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={cn("grid gap-3", isCompact ? "grid-cols-1" : "sm:grid-cols-2")}>
          <label className="space-y-2">
            <span className="text-sm font-semibold text-navy-900">Name</span>
            <input
              className="input-surface"
              type="text"
              name="name"
              value={form.name}
              onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              placeholder="Your full name"
              autoComplete="name"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-navy-900">Company</span>
            <input
              className="input-surface"
              type="text"
              name="company"
              value={form.company}
              onChange={(event) => setForm((current) => ({ ...current, company: event.target.value }))}
              placeholder="Company / brand"
              autoComplete="organization"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-navy-900">Work Email</span>
            <input
              className="input-surface"
              type="email"
              name="email"
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              placeholder="name@company.com"
              autoComplete="email"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-navy-900">Phone / WhatsApp</span>
            <input
              className="input-surface"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
              placeholder="+91"
              autoComplete="tel"
            />
          </label>

          <label className={cn("space-y-2", !isCompact && "sm:col-span-2")}>
            <span className="text-sm font-semibold text-navy-900">Interested In</span>
            <select
              className="input-surface"
              name="segment"
              value={form.segment}
              onChange={(event) => setForm((current) => ({ ...current, segment: event.target.value }))}
            >
              {segmentOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className={cn("space-y-2", !isCompact && "sm:col-span-2")}>
            <span className="text-sm font-semibold text-navy-900">Requirement</span>
            <textarea
              className="input-surface min-h-28 resize-y"
              name="message"
              value={form.message}
              onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
              placeholder="Tell ForceField what you need to deploy, automate, or fix."
            />
          </label>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-muted-foreground">
            Best UX for this type of site is a short qualification form, not a long contact sheet.
          </p>
          <Button type="submit" size={isCompact ? "default" : "lg"} disabled={status === "submitting"}>
            {status === "submitting" ? (
              <>
                <LoaderCircle className="animate-spin" />
                Sending
              </>
            ) : (
              <>
                Send Request
                <ArrowRight />
              </>
            )}
          </Button>
        </div>
      </form>

      {status === "success" ? (
        <div className="rounded-[1.4rem] border border-emerald-500/18 bg-emerald-500/8 px-4 py-3 text-sm text-emerald-700">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0" />
            <div className="space-y-1">
              <p className="font-semibold">Request received</p>
              <p>{feedback}</p>
            </div>
          </div>
        </div>
      ) : null}

      {status === "manual" ? (
        <div className="space-y-3 rounded-[1.4rem] border border-amber-500/18 bg-amber-500/8 p-4 text-sm text-amber-900">
          <p className="font-semibold">Use a direct route for this lead</p>
          <p>{feedback}</p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button asChild variant="secondary">
              <a href={mailtoHref}>
                <Mail />
                Email Lead
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircleMore />
                WhatsApp Lead
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href={`tel:${COMPANY.phone}`}>
                <PhoneCall />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      ) : null}

      {status === "error" ? (
        <div className="rounded-[1.4rem] border border-red-500/16 bg-red-500/7 px-4 py-3 text-sm text-red-700">
          {feedback}
        </div>
      ) : null}
    </div>
  );
}
