"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Loader2, Send } from "lucide-react";
import { EMAILJS, SITE } from "@/constants/site";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-2xl border border-line bg-card px-5 py-3.5 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent/50";

export function ContactCta() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill it, humans never see it.
    if (data.get("company")) return;

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    try {
      setStatus("sending");

      if (EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey) {
        // Preferred path when EmailJS is configured.
        await emailjs.send(
          EMAILJS.serviceId,
          EMAILJS.templateId,
          { from_name: name, reply_to: email, message },
          { publicKey: EMAILJS.publicKey }
        );
      } else {
        // Zero-config delivery straight to the inbox via FormSubmit.
        const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: `Portfolio inquiry — ${name}`,
            _template: "box",
            _captcha: "false",
          }),
        });
        if (!res.ok) throw new Error(`FormSubmit responded ${res.status}`);
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-card px-6 py-16 text-center shadow-card md:px-12 md:py-24">
          {/* Ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[640px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
          />

          <Reveal>
            <p className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              <span className="tabular-nums text-muted/50">05 —</span>
              Work With Me
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-display mx-auto mt-5 max-w-3xl font-semibold text-balance">
              Let&apos;s Build Intelligent Systems Together.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
              Whether it&apos;s a RAG pipeline, an autonomous agent, or a
              research collaboration — I&apos;d love to hear about it.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-12 max-w-xl text-left"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label>
                  <span className="sr-only">Your name</span>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </label>
                <label>
                  <span className="sr-only">Your email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Your email"
                    className={inputClass}
                  />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="sr-only">Your message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project…"
                  className={`${inputClass} resize-none`}
                />
              </label>
              {/* Honeypot */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="mt-7 flex flex-col items-center gap-4">
                <Magnetic>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Send size={16} />
                    )}
                    {status === "sending" ? "Sending…" : "Get in Touch"}
                  </Button>
                </Magnetic>
                <p aria-live="polite" className="text-sm text-muted">
                  {status === "sent" &&
                    "Message sent — it's on its way to my inbox. I'll get back to you soon."}
                  {status === "error" && (
                    <>
                      Something went wrong. Email me directly at{" "}
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-ink underline underline-offset-4"
                      >
                        {SITE.email}
                      </a>
                      .
                    </>
                  )}
                </p>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
            >
              Or write to {SITE.email}
              <ArrowUpRight size={14} aria-hidden />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
