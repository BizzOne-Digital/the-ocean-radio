"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "unconfigured" | "error">(
    "idle",
  );
  const [serverMessage, setServerMessage] = useState("");

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) next.subject = "Please enter a subject.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    else if (form.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { ok?: boolean; message?: string; configured?: boolean };

      if (res.status === 503 || data.configured === false) {
        setStatus("unconfigured");
        setServerMessage(
          data.message ??
            "Message delivery is not configured yet. Your details were validated locally — please email us directly.",
        );
        return;
      }

      if (!res.ok) {
        setStatus("error");
        setServerMessage(data.message ?? "Something went wrong. Please try again or email us directly.");
        return;
      }

      setStatus("success");
      setServerMessage(data.message ?? "Thank you — we received your message.");
      setForm(initial);
    } catch {
      setStatus("error");
      setServerMessage("Unable to reach the server. Please email us directly.");
    }
  }

  function field(id: keyof FormState, label: string, multiline?: boolean) {
    const error = errors[id];
    const base =
      "w-full rounded-xl border bg-dark-ocean/50 px-4 py-3 text-foam placeholder:text-foam/40 transition-colors focus:border-aqua/50 focus:outline-none focus:ring-2 focus:ring-aqua/20";
    return (
      <div>
        <label htmlFor={id} className="mb-2 block text-sm font-medium text-foam/90">
          {label}
        </label>
        {multiline ? (
          <textarea
            id={id}
            name={id}
            rows={5}
            value={form[id]}
            onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
            className={cn(base, error ? "border-red-400/50" : "border-aqua/15")}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={id === "email" ? "email" : "text"}
            value={form[id]}
            onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
            className={cn(base, error ? "border-red-400/50" : "border-aqua/15")}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
            autoComplete={id === "email" ? "email" : id === "name" ? "name" : undefined}
          />
        )}
        {error && (
          <p id={`${id}-error`} className="mt-1 text-sm text-red-200" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {field("name", "Name")}
      {field("email", "Email")}
      {field("subject", "Subject")}
      {field("message", "Message", true)}

      <Button
        type="submit"
        className="w-full justify-center uppercase tracking-widest sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>

      {serverMessage && (
        <p
          className={cn(
            "text-sm",
            status === "success" ? "text-aqua" : "text-foam/75",
          )}
          role="status"
        >
          {serverMessage}
        </p>
      )}
    </form>
  );
}
