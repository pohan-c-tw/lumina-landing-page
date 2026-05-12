import type { ComponentType } from "react";

type SvgComponent = ComponentType<React.SVGProps<SVGSVGElement>>;

export function Card({
  title,
  description,
  illustration,
}: {
  title: string;
  description: string;
  illustration?: SvgComponent;
}) {
  const Illustration = illustration;

  return (
    <div>
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-neutral-100">
        {Illustration && (
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <Illustration className="h-full w-full" />
          </div>
        )}
      </div>
      <div className="mt-4 px-2">
        <div className="text-lg leading-7 font-semibold text-neutral-950">
          {title}
        </div>
        <div className="mt-2 leading-7 text-neutral-700">{description}</div>
      </div>
    </div>
  );
}
