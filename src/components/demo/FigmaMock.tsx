import { cn } from "@/lib/cn";

export default function FigmaMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-300 bg-zinc-100 shadow-sm select-none">
      <div className="flex items-center gap-2 border-b border-neutral-300 px-5 py-4">
        <div className="size-3 rounded-full border border-red-500 bg-red-400" />
        <div className="size-3 rounded-full border border-amber-500 bg-amber-400" />
        <div className="size-3 rounded-full border border-green-600 bg-green-500" />
      </div>

      <div className="flex">
        <div className="w-60 border-r border-neutral-300 bg-white">
          <div className="px-4 py-4">
            <div className="text-xs font-semibold text-zinc-900">Pages</div>
          </div>
          <div className="flex flex-col gap-6 px-4 pb-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-2 rounded-full bg-neutral-100",
                  index === 0 && "w-26",
                  index === 1 && "w-24",
                  index === 2 && "w-24",
                  index === 3 && "w-18",
                  index === 4 && "w-26",
                )}
              />
            ))}
          </div>
          <div className="h-px bg-neutral-300" />
          <div className="px-4 py-4">
            <div className="text-xs font-semibold text-zinc-900">Layers</div>
          </div>
          <div className="flex flex-col gap-4 px-4 pb-4">
            {[
              { icon: "⌗", w: "w-30" },
              { icon: "⬚", w: "w-24" },
              { icon: "⬚", w: "w-32" },
              { icon: "⬚", w: "w-28" },
              { icon: "◇", w: "w-20" },
              { icon: "T", w: "w-26" },
              { icon: "T", w: "w-20" },
              { icon: "T", w: "w-30" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-4 text-center text-sm text-zinc-900/50">
                  {item.icon}
                </span>
                <div
                  className={cn("h-2 rounded-full bg-neutral-100", item.w)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0 flex-1 bg-neutral-100 p-6">
          <div className="mb-2 text-xs font-semibold text-neutral-400">
            Frame
          </div>
          <div className="grid gap-3 border border-sky-500 bg-white px-6 py-8">
            <div className="h-6 w-4/6 rounded-xl bg-slate-100" />
            <div className="h-3 w-5/6 rounded-full bg-slate-100" />
            <div className="h-3 w-4/6 rounded-full bg-slate-100" />
            <div className="mt-3 grid grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 p-4"
                >
                  <div className="h-4 w-3/6 rounded-xl bg-slate-100" />
                  <div className="mt-4 h-2 w-5/6 rounded-full bg-slate-100" />
                  <div className="mt-2 h-2 w-4/6 rounded-full bg-slate-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
