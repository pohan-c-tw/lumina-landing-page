"use client";

import { useEffect, useRef, useState } from "react";
import FigmaMock from "@/components/demo/FigmaMock";
import PluginPanel from "@/components/demo/PluginPanel";
import { Container } from "@/components/layout/Container";
import { demoAutoplay, demoQuestions } from "@/lib/demo-script";
import type { DemoMessage, DemoStep } from "@/lib/demo-script";
import type { Dispatch, SetStateAction } from "react";

function usePlayback() {
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      for (const timer of timersRef.current) {
        window.clearTimeout(timer);
      }
      timersRef.current = [];
    };
  }, []);

  const play = (
    steps: DemoStep[],
    setMessages: Dispatch<SetStateAction<DemoMessage[]>>,
  ) => {
    for (const timer of timersRef.current) {
      window.clearTimeout(timer);
    }
    timersRef.current = [];

    setMessages([]);

    let totalDelay = 0;
    for (const step of steps) {
      totalDelay += step.delayMs;

      const timer = window.setTimeout(() => {
        setMessages((prev) =>
          prev.concat([
            {
              type: step.type,
              content: step.content,
            },
          ]),
        );
      }, totalDelay);

      timersRef.current.push(timer);
    }
  };

  return { play };
}

export function DemoSection() {
  const { play } = usePlayback();
  const [messages, setMessages] = useState<DemoMessage[]>([]);

  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAutoplayed, setHasAutoplayed] = useState<boolean>(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element || hasAutoplayed) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry) {
          return;
        }

        if (entry.intersectionRatio >= 0.4) {
          setHasAutoplayed(true);
          play(demoAutoplay, setMessages);
        }
      },
      { threshold: [0.4] },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasAutoplayed, play]);

  return (
    <section ref={sectionRef} className="px-3">
      <div className="rounded-b-2xl bg-linear-to-b from-white via-purple-100/80 to-sky-100/60 px-6 py-16">
        <Container>
          <div className="relative hidden sm:block">
            <FigmaMock />
            <div className="pointer-events-none absolute top-6 right-6">
              <div className="pointer-events-auto">
                <PluginPanel
                  messages={messages}
                  onPickQuestion={(questionId) => {
                    const question = demoQuestions.find(
                      ({ id }) => id === questionId,
                    );

                    if (!question) {
                      return;
                    }

                    play(question.steps, setMessages);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="sm:hidden">
            <div className="mx-auto w-90 max-w-full">
              <PluginPanel
                messages={messages}
                onPickQuestion={(questionId) => {
                  const question = demoQuestions.find(
                    ({ id }) => id === questionId,
                  );

                  if (!question) {
                    return;
                  }

                  play(question.steps, setMessages);
                }}
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
