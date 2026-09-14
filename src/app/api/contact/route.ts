import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function validate(body: ContactPayload) {
  const errors: string[] = [];
  if (!body.name?.trim()) errors.push("name");
  if (!body.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) errors.push("email");
  if (!body.subject?.trim()) errors.push("subject");
  if (!body.message?.trim() || body.message.trim().length < 10) errors.push("message");
  return errors;
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const invalid = validate(body);
  if (invalid.length > 0) {
    return NextResponse.json(
      { ok: false, message: "Please check the form fields and try again." },
      { status: 400 },
    );
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL?.trim();
  const resendKey = process.env.RESEND_API_KEY?.trim();

  if (!webhook && !resendKey) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        message:
          "Contact delivery is not configured on the server yet. Please reach out via email or phone listed on this page.",
      },
      { status: 503 },
    );
  }

  if (webhook) {
    try {
      const hookRes = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "the-ocean-radio",
          ...body,
          receivedAt: new Date().toISOString(),
        }),
      });
      if (!hookRes.ok) {
        return NextResponse.json(
          { ok: false, message: "Unable to deliver your message right now." },
          { status: 502 },
        );
      }
    } catch {
      return NextResponse.json(
        { ok: false, message: "Unable to deliver your message right now." },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({
    ok: true,
    message: "Thank you — your message has been received.",
  });
}
