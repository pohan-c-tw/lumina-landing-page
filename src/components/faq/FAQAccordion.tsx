import { Accordion } from "@/components/ui/Accordion";

export function FAQAccordion() {
  return (
    <Accordion
      items={[
        {
          id: "faq-1",
          title: "What is Lumina?",
          content:
            "Lumina is an AI agent that helps you understand Figma files by answering questions about flows, structure, components, and design decisions—without changing your designs.",
        },
        {
          id: "faq-2",
          title: "How does Lumina understand my design?",
          content:
            "Lumina analyzes structure, naming, and relationships between pages, frames, components, and styles to generate clear explanations—based only on what exists in your file.",
        },
        {
          id: "faq-3",
          title: "What can I ask Lumina?",
          content:
            "You can ask questions about user flows, screen states, component usage, and handoff-related details—anything that helps you understand how a design works.",
        },
        {
          id: "faq-4",
          title: "Does Lumina edit my Figma files?",
          content:
            "No. Lumina focuses on understanding and analysis. It does not modify your designs.",
        },
        {
          id: "faq-5",
          title: "Will Lumina support design system checks?",
          content:
            "We’re exploring design system insights and consistency signals. If this matters to you, join the waitlist and tell us what you’d like Lumina to help review.",
        },
        {
          id: "faq-6",
          title: "When will Lumina be available?",
          content:
            "We’re preparing early access. Join the waitlist to get updates as we roll it out.",
        },
      ]}
      defaultOpenIds={["faq-1"]}
    />
  );
}
