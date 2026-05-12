import { useEffect, useMemo, useRef, useState } from "react";
import { DemoMarkdown } from "@/components/demo/DemoMarkdown";
import { cn } from "@/lib/cn";
import { demoQuestions, demoUiCopy } from "@/lib/demo-script";
import type { DemoMessage } from "@/lib/demo-script";

function ChatMessage({ message }: { message: DemoMessage }) {
  if (message.type === "event") {
    return (
      <div className="text-xs leading-5 text-zinc-500">{message.content}</div>
    );
  }

  if (message.type === "user") {
    return (
      <div className="flex justify-end">
        <div className="rounded-xl bg-indigo-950 px-3 py-2 text-sm leading-6 text-white sm:max-w-[85%]">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start">
      <div className="rounded-xl bg-stone-100 px-3 py-2 text-sm leading-6 text-zinc-900 sm:max-w-[85%]">
        <DemoMarkdown markdown={message.content} />
      </div>
    </div>
  );
}

export default function PluginPanel({
  messages,
  onPickQuestion,
}: {
  messages: DemoMessage[];
  onPickQuestion: (questionId: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRootRef = useRef<HTMLDivElement | null>(null);

  const questions = useMemo(() => demoQuestions, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      const root = dropdownRootRef.current;

      if (!root) {
        return;
      }

      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (!root.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown, {
      capture: true,
    });

    return () => {
      document.removeEventListener("pointerdown", onPointerDown, {
        capture: true,
      });
    };
  }, [isOpen]);

  return (
    <div className="w-90 overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-sm">
      <div className="border-b border-neutral-200 px-5 py-3">
        <div className="text-sm font-semibold text-zinc-900">Lumina</div>
      </div>

      <div className="h-100 space-y-3 overflow-auto bg-white p-3">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>

      <div className="border-t border-neutral-200 p-3">
        {!isOpen && (
          <button
            type="button"
            className={cn(
              "w-full cursor-pointer rounded-lg border border-neutral-300 bg-white p-4 text-left",
              "hover:bg-neutral-50",
              "focus-visible:outline-none",
            )}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <div className="flex items-center gap-2 text-sm">
              <span className="text-indigo-500">✦</span>
              <span className="text-zinc-900">{demoUiCopy.askTitle}</span>
            </div>
          </button>
        )}
        {isOpen && (
          <div
            ref={dropdownRootRef}
            className="rounded-md border border-neutral-300 p-2"
          >
            <div className="px-2 text-xs font-semibold text-zinc-500">
              {demoUiCopy.menuTitle}
            </div>
            <div className="mt-2 space-y-1">
              {questions.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  className={cn(
                    "w-full cursor-pointer rounded-md px-3 py-2 text-left text-sm text-zinc-800",
                    "hover:bg-neutral-100",
                    "focus-visible:outline-none",
                  )}
                  onClick={() => {
                    setIsOpen(false);
                    onPickQuestion(id);
                  }}
                >
                  {label}
                </button>
              ))}
              <button
                type="button"
                className={cn(
                  "w-full cursor-pointer rounded-md px-3 py-2 text-left text-xs text-zinc-500",
                  "hover:bg-neutral-50",
                  "focus-visible:outline-none",
                )}
                onClick={() => setIsOpen(false)}
              >
                {demoUiCopy.cancelLabel}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
