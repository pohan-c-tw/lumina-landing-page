import Image from "next/image";

import { DemoSection } from "@/components/demo/DemoSection";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { ChatWithAiIllustration } from "@/components/illustrations/ChatWithAiIllustration";
import { DesignComponentsIllustration } from "@/components/illustrations/DesignComponentsIllustration";
import { VisualExplanationIllustration } from "@/components/illustrations/VisualExplanationIllustration";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";

export default function Home() {
  return (
    <>
      <header className="pt-8">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-4xl font-semibold text-neutral-950">
              <Image
                src="/lumina-logo.png"
                alt=""
                width={44}
                height={44}
                unoptimized
                className="size-11 rounded-xl"
              />
              Lumina
            </div>
          </div>
        </Container>
      </header>

      <section className="pt-32">
        <Container className="max-w-2xl text-center">
          <h1 className="text-6xl leading-16 font-semibold tracking-tight text-balance text-neutral-950">
            Understand your Figma files—clearly.
          </h1>
          <p className="mt-6 text-lg leading-7 text-pretty text-neutral-700">
            Search and analyze flows, components, and styles by simply asking—so
            teams can move faster with confidence.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="#waitlist">Join the waitlist</Button>
          </div>
        </Container>
      </section>

      <DemoSection />

      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl leading-10 font-semibold tracking-tight text-balance text-neutral-950">
              What you can do with Lumina
            </h2>
            <p className="mt-6 text-lg leading-7 text-pretty text-neutral-700">
              Lumina helps you explore, inspect, and explain Figma files.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3">
            <Card
              title="Explain complex Figma files"
              description="Get clear explanations of flows, structure, and key components—so you understand how the design works, not just where things are."
              illustration={VisualExplanationIllustration}
            />
            <Card
              title="Inspect components and styles usage"
              description="See which components, text styles, and colors are used across the file—and spot patterns or inconsistencies at a glance."
              illustration={DesignComponentsIllustration}
            />
            <Card
              title="Generate clear specs for handoff"
              description="Quickly extract spacing, typography, states, and component details to support smoother design-to-dev handoff."
              illustration={ChatWithAiIllustration}
            />
          </div>
        </Container>
      </section>

      <section className="bg-linear-to-b from-neutral-950 via-neutral-950 to-neutral-900 py-18">
        <Container className="max-w-2xl text-center">
          <h2 className="text-4xl leading-10 font-semibold tracking-tight text-balance text-white">
            Be the first to try Lumina
          </h2>
          <p className="mt-6 text-lg leading-7 text-pretty text-neutral-200">
            Join the waitlist to get early access updates and help shape how
            Lumina understands design files.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="#waitlist" variant="inverse">
              Join the waitlist
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-18">
        <Container>
          <h2 className="text-center text-4xl leading-10 font-semibold tracking-tight text-balance text-neutral-950">
            Frequently asked questions
          </h2>
          <div className="mx-auto mt-16 max-w-3xl">
            <FAQAccordion />
          </div>
        </Container>
      </section>

      <section id="waitlist" className="scroll-mt-16 px-3">
        <div className="rounded-t-2xl bg-linear-to-b from-white via-rose-100/20 to-purple-100/80 px-6 py-24">
          <Container className="max-w-2xl text-center">
            <h2 className="text-4xl leading-10 font-semibold tracking-tight text-balance text-neutral-950">
              Get early access updates
            </h2>
            <p className="mt-6 text-lg leading-7 text-pretty text-neutral-700">
              Get notified as Lumina prepares for early access.
            </p>
            <WaitlistForm />
          </Container>
        </div>
      </section>

      <footer className="bg-neutral-950 py-12 text-center text-neutral-200">
        <Container>Lumina — AI agent for understanding Figma files.</Container>
      </footer>
    </>
  );
}
