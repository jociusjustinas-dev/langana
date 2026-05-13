import { NextResponse } from "next/server";
import { Resend } from "resend";

import {
  CONTACT_OFFER_FILE_NAME_REGEX,
  CONTACT_OFFER_MAX_FILE_BYTES,
  isContactOfferSolution,
  sanitizeMessage,
  sanitizeShortField,
} from "@/lib/contact-offer-shared";

export const runtime = "nodejs";

const ERR = {
  validation: "Patikrinkite užpildytus laukus ir bandykite dar kartą.",
  config: "Užklausos siuntimas šiuo metu nepasiekiamas. Susisiekite telefonu.",
  send: "Nepavyko išsiųsti užklausos. Bandykite vėliau arba skambinkite mums.",
} as const;

function getRecipients(): string[] {
  const raw = process.env.CONTACT_OFFER_TO ?? process.env.RESEND_INBOUND_TO;
  if (!raw?.trim()) return [];
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function buildEmailText(fields: {
  name: string;
  phone: string;
  email: string;
  solutions: string[];
  objectType: string;
  city: string;
  message: string;
  fileName: string | null;
  interestProduct?: string;
}): string {
  const lines: string[] = [
    "Užklausa dėl pasiūlymo (svetainė)",
    "—".repeat(32),
    `Vardas: ${fields.name}`,
    `El. paštas: ${fields.email}`,
  ];
  if (fields.phone) lines.push(`Telefono numeris: ${fields.phone}`);
  lines.push(`Kokio sprendimo ieškote: ${fields.solutions.join(", ")}`);
  if (fields.interestProduct) lines.push(`Domina produktas: ${fields.interestProduct}`);
  if (fields.objectType) lines.push(`Objekto tipas: ${fields.objectType}`);
  if (fields.city) lines.push(`Miestas / objekto vieta: ${fields.city}`);
  if (fields.message) lines.push("", "Trumpai apie poreikį:", fields.message);
  if (fields.fileName) lines.push("", `Prisegtas failas: ${fields.fileName}`);
  lines.push("", "Sutikimas: duomenys naudojami atsakymui į užklausą (privatumo politika).");
  return lines.join("\n");
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM?.trim() || "Langana <onboarding@resend.dev>";
  const to = getRecipients();

  if (!apiKey) {
    return NextResponse.json({ error: ERR.config }, { status: 503 });
  }
  if (!to.length) {
    return NextResponse.json({ error: ERR.config }, { status: 503 });
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: ERR.validation }, { status: 400 });
  }

  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot) {
    return NextResponse.json({ ok: true as const });
  }

  const name = sanitizeShortField(String(formData.get("name") ?? ""));
  const phone = sanitizeShortField(String(formData.get("phone") ?? ""));
  const email = sanitizeShortField(String(formData.get("email") ?? ""));
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: ERR.validation }, { status: 400 });
  }
  const objectType = sanitizeShortField(String(formData.get("objectType") ?? ""));
  const city = sanitizeShortField(String(formData.get("city") ?? ""));
  const interestLabel = sanitizeShortField(String(formData.get("interestProduct") ?? ""));
  const message = sanitizeMessage(String(formData.get("message") ?? ""));
  const privacy = String(formData.get("privacy") ?? "");

  const rawSolutions = formData.getAll("solutions");
  const solutions = rawSolutions
    .map((v) => (typeof v === "string" ? v.trim() : ""))
    .filter((s): s is string => isContactOfferSolution(s));

  if (!name || !email || !solutions.length || privacy !== "1") {
    return NextResponse.json({ error: ERR.validation }, { status: 400 });
  }

  const fileEntry = formData.get("file");
  let attachment:
    | {
        filename: string;
        content: Buffer;
        contentType?: string;
      }
    | undefined;
  let fileNameForBody: string | null = null;

  if (fileEntry instanceof File && fileEntry.size > 0) {
    if (fileEntry.size > CONTACT_OFFER_MAX_FILE_BYTES) {
      return NextResponse.json({ error: ERR.validation }, { status: 400 });
    }
    const safeName = fileEntry.name.replace(/[^\w.\- ()\u0100-\uFFFF]+/g, "_").slice(0, 180);
    if (!CONTACT_OFFER_FILE_NAME_REGEX.test(safeName)) {
      return NextResponse.json({ error: ERR.validation }, { status: 400 });
    }
    const buf = Buffer.from(await fileEntry.arrayBuffer());
    attachment = {
      filename: safeName || "prisegtas-failas",
      content: buf,
      contentType: fileEntry.type || undefined,
    };
    fileNameForBody = `${safeName} (${Math.round(fileEntry.size / 1024)} KB)`;
  }

  const text = buildEmailText({
    name,
    phone,
    email,
    solutions,
    objectType,
    city,
    message,
    fileName: fileNameForBody,
    interestProduct: interestLabel || undefined,
  });

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    subject: `Užklausa dėl pasiūlymo — ${name}`,
    text,
    replyTo: email,
    attachments: attachment ? [attachment] : undefined,
  });

  if (error) {
    console.error("[contact-offer]", error);
    return NextResponse.json({ error: ERR.send }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
