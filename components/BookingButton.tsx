"use client";

import { useEffect, useRef, useState } from "react";

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
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Track click + open modal
  const handleClick = () => {
    try {
      // Umami custom event – cookiefrei, kostenlos, DSGVO-konform
      window.umami?.track("booking_intent", { source });
    } catch {
      // Silent: analytics must never break UX
    }
    setOpen(true);
  };

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    // Prevent body scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Focus close button for accessibility
    closeBtnRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const sizeClasses =
    size === "lg"
      ? "px-7 py-4 text-base sm:text-lg"
      : "px-6 py-3.5 text-base";

  const baseClass =
    variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`${baseClass} ${sizeClasses} ${className}`}
        aria-haspopup="dialog"
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
      </button>

      {open && (
        <div
          aria-hidden={false}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
          role="presentation"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setOpen(false)}
          />

          {/* Dialog */}
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-dialog-title"
            aria-describedby="booking-dialog-desc"
            className="relative z-10 mx-4 w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-soft-lg animate-scale-in"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>

              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setOpen(false)}
                className="-m-2 rounded-full p-2 text-ink-500 transition-colors duration-200 hover:bg-ink-100 hover:text-ink-900 cursor-pointer"
                aria-label="Dialog schließen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <h2
              id="booking-dialog-title"
              className="mt-4 text-2xl font-semibold"
            >
              Aktuell keine Termine verfügbar
            </h2>
            <p
              id="booking-dialog-desc"
              className="mt-3 text-base leading-relaxed text-ink-500"
            >
              Vielen Dank für Ihr Interesse. Aktuell sind alle Termine
              ausgebucht und wir nehmen vorübergehend keine neuen Anfragen
              entgegen. Bitte schauen Sie zu einem späteren Zeitpunkt wieder
              vorbei.
            </p>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="btn-secondary"
              >
                Verstanden
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
