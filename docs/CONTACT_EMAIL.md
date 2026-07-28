# Contact Form — Delivery & Email Templates

## How delivery works

The contact form on the site delivers straight to **fia85885@gmail.com** using
[FormSubmit](https://formsubmit.co) — no account, no API keys.

**One-time activation (important):** the very first time anyone submits the
form, FormSubmit sends an activation email to fia85885@gmail.com. Open it and
click **Activate**. Every submission after that lands directly in your inbox.
(Submit the form yourself once after deploying to trigger this.)

If you later prefer EmailJS, set the three `NEXT_PUBLIC_EMAILJS_*` variables
in `.env.local` — the form automatically switches over.

## The email you'll receive (FormSubmit)

Each inquiry arrives with the subject line:

> **Portfolio inquiry — {visitor's name}**

and a boxed layout containing:

| Field   | Content                       |
| ------- | ----------------------------- |
| name    | Visitor's name                |
| email   | Visitor's email (reply to it) |
| message | Their message                 |

## EmailJS template draft (optional path)

If you set up EmailJS, create a template with these exact settings so the
site's variables map correctly:

**Settings**
- To email: `fia85885@gmail.com`
- From name: `{{from_name}}`
- Reply-To: `{{reply_to}}`
- Subject: `New portfolio inquiry — {{from_name}}`

**Body**

```
Hi Furqan,

You have a new inquiry from your portfolio website.

────────────────────────────
From:      {{from_name}}
Email:     {{reply_to}}
────────────────────────────

Message:

{{message}}

────────────────────────────
Reply directly to this email to respond.
Sent automatically from furqan-ahmed-khan.vercel.app
```

## Suggested reply draft

A general response you can adapt when someone reaches out:

```
Subject: Re: Your message via my portfolio

Hi {name},

Thank you for reaching out — I appreciate you taking the time to write.

{One line acknowledging their specific message.}

I'd be glad to discuss this further. I'm available for a call this week —
feel free to suggest a time that works for you, or reply with more details
and I'll get back to you within 24 hours.

Best regards,
Furqan Ahmed Khan
AI / ML Engineer
github.com/fia85885 · linkedin.com/in/furqan-ahmed-khan121
```
