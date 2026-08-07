# Vanguard Training — Personal Training Platform

Marketing site for a personal training brand, built to present training programs across six disciplines, membership tiers and client testimonials, with a contact form that sends enquiries straight to the trainer's inbox.

**Live site:** https://vanguardtraining.vercel.app

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **CSS Modules** for scoped, per-component styling
- **Framer Motion** for scroll and entrance animations
- **EmailJS** for the contact form, no backend required
- **Lucide / React Icons** for iconography

## Features

- Responsive, mobile-first layout across all sections
- Component-based architecture: navigation, hero, philosophy, programs, membership plans, testimonials, contact and footer are independent components
- Membership pricing tiers and a six-discipline programs grid driven by a shared data structure
- Custom `useReveal` hook that animates sections as they enter the viewport
- Working contact form wired to EmailJS with client-side validation
- Reusable `Card` component driving the programs and plans sections

## Project structure

```
app/
├── components/     # UI components (Navigation, Inicio, About, Programs,
│                   #   Plans, Testimonials, Contact, Card, Footer)
├── hooks/          # useReveal — scroll-triggered animations
├── styles/         # CSS Modules, one per component
├── layout.jsx      # Root layout
└── page.jsx        # Home page composition
```

## Running locally

```bash
npm install
cp .env.example .env.local   # add your own EmailJS credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |

These are public by design (EmailJS exposes them in the browser). Restrict the key to your own domain from the EmailJS dashboard.
