import { NextResponse } from "next/server";

import { COMPANY } from "@/lib/site-content";

type LeadRequest = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  segment?: string;
  message?: string;
  source?: string;
};

function clean(value: string | undefined) {
  return value?.trim() ?? "";
}

function buildEmailBody(lead: Required<LeadRequest>) {
  return [
    "New ForceField lead",
    "",
    `Name: ${lead.name}`,
    `Company: ${lead.company}`,
    `Email: ${lead.email || "-"}`,
    `Phone / WhatsApp: ${lead.phone || "-"}`,
    `Interested In: ${lead.segment}`,
    `Source: ${lead.source}`,
    "",
    "Requirement",
    lead.message || "No additional details provided.",
  ].join("\n");
}

async function sendToWebhook(lead: Required<LeadRequest>) {
  const webhookUrl = process.env.FORCEFIELD_LEADS_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...lead,
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error("Webhook delivery failed.");
  }

  return true;
}

async function sendToResend(lead: Required<LeadRequest>) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.FORCEFIELD_LEADS_FROM_EMAIL ?? "ForceField Leads <onboarding@resend.dev>",
      to: [process.env.FORCEFIELD_LEADS_TO_EMAIL ?? COMPANY.email],
      reply_to: lead.email || undefined,
      subject: `ForceField lead: ${lead.company}`,
      text: buildEmailBody(lead),
    }),
  });

  if (!response.ok) {
    throw new Error("Resend delivery failed.");
  }

  return true;
}

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadRequest;

  const lead = {
    name: clean(payload.name),
    company: clean(payload.company),
    email: clean(payload.email),
    phone: clean(payload.phone),
    segment: clean(payload.segment) || "Both Segments",
    message: clean(payload.message),
    source: clean(payload.source) || "website",
  };

  if (!lead.name || !lead.company || (!lead.email && !lead.phone)) {
    return NextResponse.json(
      {
        message: "Name, company, and at least one contact method are required.",
        code: "invalid_request",
      },
      { status: 400 },
    );
  }

  try {
    const sentToWebhook = await sendToWebhook(lead);
    const sentToResend = sentToWebhook ? false : await sendToResend(lead);

    if (!sentToWebhook && !sentToResend) {
      return NextResponse.json(
        {
          message: "Lead delivery is not configured yet.",
          code: "delivery_not_configured",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({
      message: "Request captured. ForceField will reach out shortly.",
    });
  } catch (error) {
    console.error("Lead delivery failed", error);

    return NextResponse.json(
      {
        message: "Lead delivery failed. Try direct contact or configure a delivery route.",
        code: "delivery_failed",
      },
      { status: 502 },
    );
  }
}
