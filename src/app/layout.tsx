import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumina — AI Agent for Understanding Figma Files",
  description:
    "Lumina helps you read, search, and analyze complex Figma files using natural language—so teams can understand designs faster and communicate with confidence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth">
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
