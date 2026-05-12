export type DemoMessage =
  | { type: "user"; content: string }
  | { type: "event"; content: string }
  | { type: "agent"; content: string };

export type DemoStep = DemoMessage & { delayMs: number };

export type DemoQuestion = {
  id: string;
  label: string;
  steps: DemoStep[];
};

export const demoUiCopy = {
  askTitle: "Pick a question to see Lumina in action",
  menuTitle: "Questions",
  cancelLabel: "Cancel",
};

export const demoAutoplay: DemoStep[] = [
  {
    type: "user",
    content: "What does this selected flow do?",
    delayMs: 500,
  },
  { type: "event", content: "• Reading the selected frames…", delayMs: 900 },
  {
    type: "event",
    content: "• Mapping screens and transitions…",
    delayMs: 900,
  },
  {
    type: "agent",
    content: `This selection appears to cover a checkout confirmation flow.

**What happens here**
- The customer reviews their order summary
- They confirm payment and delivery details
- The flow ends on a confirmation screen

**Key screens**
- Cart review
- Payment details
- Processing state
- Order confirmed

This is useful for onboarding because the main path is visible without manually opening each frame.`,
    delayMs: 700,
  },
];

export const demoQuestions: DemoQuestion[] = [
  {
    id: "q1",
    label: "What does this selected flow do?",
    steps: [
      {
        type: "user",
        content: "What does this selected flow do?",
        delayMs: 0,
      },
      {
        type: "event",
        content: "• Reading the selected frames…",
        delayMs: 900,
      },
      {
        type: "event",
        content: "• Mapping screens and transitions…",
        delayMs: 900,
      },
      {
        type: "agent",
        content: `This selection appears to cover a checkout confirmation flow.

**What happens here**
- The customer reviews their order summary
- They confirm payment and delivery details
- The flow ends on a confirmation screen

**Key screens**
- Cart review
- Payment details
- Processing state
- Order confirmed

This is useful for onboarding because the main path is visible without manually opening each frame.`,
        delayMs: 700,
      },
    ],
  },
  {
    id: "q2",
    label: "Show me the happy path and error path.",
    steps: [
      {
        type: "user",
        content: "Show me the happy path and error path.",
        delayMs: 0,
      },
      {
        type: "event",
        content: "• Reviewing the flow structure…",
        delayMs: 900,
      },
      {
        type: "event",
        content: "• Separating success and failure states…",
        delayMs: 900,
      },
      {
        type: "agent",
        content: `The selected frames include one main success path and a few recovery paths.

**Happy path**
- Review cart and order total
- Choose a saved payment method
- Submit payment
- Show the order confirmation screen

**Error path**
- Payment is declined
- Billing details are incomplete
- Customer retries payment
- Customer can contact support if retry fails

The important handoff detail is that the payment area needs loading, declined, retry, and success states.`,
        delayMs: 700,
      },
    ],
  },
  {
    id: "q3",
    label: "What should an engineer know before implementation?",
    steps: [
      {
        type: "user",
        content: "What should an engineer know before implementation?",
        delayMs: 0,
      },
      {
        type: "event",
        content: "• Inspecting UI patterns and labels…",
        delayMs: 900,
      },
      { type: "event", content: "• Summarizing handoff notes…", delayMs: 900 },
      {
        type: "agent",
        content: `Before implementation, focus on the states and data behind the checkout flow.

**States to support**
- Empty cart
- Payment processing
- Payment failed
- Order confirmed

**Data needed**
- Order items and quantities
- Total price
- Payment method
- Delivery estimate
- Order ID after confirmation

**Design details**
- Error copy appears next to the payment section
- The primary button changes between idle, loading, and retry states
- Confirmation depends on the generated order ID`,
        delayMs: 700,
      },
    ],
  },
];
