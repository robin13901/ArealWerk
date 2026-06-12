"use client";

import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  className?: string;
  source?: string;
};

export default function BookingButton({
  children = "Jetzt Termin anfragen",
  variant = "primary",
  size = "md",
  className = "",
  source = "unknown",
}: Props) {
  const sizeClasses =
    size === "lg"
      ? "px-7 py-4 text-base sm:text-lg"
      : "px-6 py-3.5 text-base";

  const baseClass =
    variant === "primary" ? "btn-primary" : "btn-secondary";

  // Pageview on /termin-anfragen is what Umami counts as the "booking intent" signal.
  // The ?source= query param shows up in Umami under URL → which surface the click came from.
  const href = `/termin-anfragen?source=${encodeURIComponent(source)}`;

  return (
    <Link
      href={href}
      prefetch={false}
      className={`${baseClass} ${sizeClasses} ${className}`}
    >
      <span>{children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </Link>
  );
}
