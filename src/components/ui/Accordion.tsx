"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";

type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

export function Accordion({
  items,
  defaultOpenIds = [],
}: {
  items: AccordionItem[];
  defaultOpenIds?: string[];
}) {
  const defaultOpen = useMemo(() => new Set(defaultOpenIds), [defaultOpenIds]);
  const [openIds, setOpenIds] = useState<Set<string>>(defaultOpen);

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = openIds.has(item.id);

        return (
          <div
            key={item.id}
            className={cn(index !== 0 && "border-t border-neutral-200")}
          >
            <button
              type="button"
              className="w-full cursor-pointer px-6 py-4 text-left leading-7 font-semibold text-neutral-900 hover:bg-neutral-100 focus-visible:outline-none"
              onClick={() => {
                setOpenIds((prev) => {
                  const next = new Set(prev);

                  if (next.has(item.id)) {
                    next.delete(item.id);
                  } else {
                    next.add(item.id);
                  }

                  return next;
                });
              }}
            >
              {item.title}
            </button>

            {isOpen && (
              <div className="px-5 pt-4 pb-8 leading-7 text-neutral-700">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
