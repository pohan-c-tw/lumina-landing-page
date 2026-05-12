"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import type { ChangeEvent, FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "submitted";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const hasSubmitted = formStatus === "submitted";
  const isSubmitting = formStatus === "submitting";

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);

    if (errorMessage) {
      setErrorMessage("");
    }

    if (hasSubmitted) {
      setFormStatus("idle");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!isValidEmail(trimmedEmail)) {
      setFormStatus("idle");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setEmail(trimmedEmail);
    setErrorMessage("");
    setFormStatus("submitting");

    window.setTimeout(() => {
      setFormStatus("submitted");
    }, 700);
  }

  return (
    <form className="mt-12" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1fr)_auto]">
        <Input
          aria-describedby="waitlist-form-message"
          aria-invalid={Boolean(errorMessage)}
          disabled={isSubmitting}
          inputMode="email"
          name="email"
          onChange={handleEmailChange}
          placeholder="Enter your email"
          type="email"
          value={email}
        />
        <Button className="h-12" disabled={isSubmitting} type="submit">
          {isSubmitting
            ? "Joining..."
            : hasSubmitted
              ? "You're on the list"
              : "Notify me"}
        </Button>
      </div>
      <p
        className="mt-4 text-sm leading-7 text-neutral-700"
        id="waitlist-form-message"
        role={errorMessage ? "alert" : undefined}
      >
        {errorMessage ||
          (hasSubmitted
            ? "Thanks — we'll keep you posted."
            : "We’ll only send early access updates.")}
      </p>
    </form>
  );
}
