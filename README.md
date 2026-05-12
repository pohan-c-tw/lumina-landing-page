# Lumina Landing Page

This repository contains the marketing landing page for **Lumina**, an AI agent for understanding complex Figma files.

Lumina helps product teams ask natural-language questions about Figma files so they can understand flows, states, components, and handoff details without manually searching through pages and frames.

The core Lumina Figma plugin repository is here: https://github.com/pohan-c-tw/lumina

Live demo: TODO

## Project Scope

This is a standalone landing page built to present the product concept, demo the interaction model, and collect early access interest.

It includes:

- A responsive landing page for the Lumina product
- An interactive mock Figma plugin demo
- Demo scripts that show how Lumina explains selected design flows
- FAQ content focused on product positioning
- A waitlist form with client-side validation and submitted states
- Reusable UI components for buttons, inputs, cards, accordions, and layout

This repository does not contain the production Figma plugin, server, or AI agent
runtime. Those belong to the main Lumina repository linked above.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- React Markdown for rendering demo responses
- Prettier with Tailwind class sorting

## Product Context

Lumina is designed as a Figma file guide, not a UI generator. The product focuses on helping PMs, designers, and engineers understand existing design files:

- Explain selected screens and flows
- Distinguish happy paths from error paths
- Summarize implementation and handoff details
- Help new team members onboard into large Figma files faster

## Notable Implementation Details

- The demo section uses scripted playback to simulate a real plugin conversation.
- The mock plugin panel supports question selection and markdown-rendered answers.
- The feature cards and waitlist form are responsive across mobile and desktop.
- The waitlist form is isolated as a client component with readable form state: idle, submitting, and submitted.
- Shared UI primitives keep styling consistent without introducing a heavy design system.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Scripts

```bash
npm run dev
```

Start the local development server.

```bash
npm run lint
```

Run ESLint.

```bash
npm run build
```

Create a production build.

```bash
npm run format
```

Format the repository with Prettier.

## Deployment

This project is a static marketing site, so it can be deployed to Cloudflare
Pages.

Suggested Cloudflare Pages settings:

- Framework preset: Next.js (Static HTML Export)
- Build command: `npm run build`
- Build output directory: `out`

After deployment, replace the `Live demo: TODO` line near the top of this README
with the production URL.

## Repository Relationship

This landing page is intended to support the main Lumina product repo:

- Main product and Figma plugin: https://github.com/pohan-c-tw/lumina
- Landing page: this repository

Keeping the landing page separate makes it easier to iterate on product messaging, demo copy, and presentation without mixing marketing code into the plugin runtime.
