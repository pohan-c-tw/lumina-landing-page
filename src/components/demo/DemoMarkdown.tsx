import ReactMarkdown from "react-markdown";

import { cn } from "@/lib/cn";

export function DemoMarkdown({
  markdown,
  className,
}: {
  markdown: string;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <ReactMarkdown
        components={{
          p: ({ children }) => <p className="m-0">{children}</p>,
          ul: ({ children }) => (
            <ul className="m-0 list-disc space-y-1 pl-5">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="m-0 list-decimal space-y-1 pl-5">{children}</ol>
          ),
          li: ({ children }) => <li className="m-0">{children}</li>,
          strong: ({ children }) => (
            <strong className="font-semibold">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
