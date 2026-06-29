"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Interactive Before/After comparison slider.
 *
 * Uses real photos from /public (before.png, after.png).
 * Interaction: drag handle, click-to-position, keyboard arrows.
 */
export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(50); // percent
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    draggingRef.current = false;
    (e.target as Element).releasePointerCapture?.(e.pointerId);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - 4));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + 4));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPosition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPosition(100);
    }
  };

  // Auto-demo: gentle sweep on mount so users see it's interactive
  useEffect(() => {
    let cancelled = false;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const seq = [50, 75, 25, 50];
    let i = 0;
    const tick = () => {
      if (cancelled) return;
      setPosition(seq[i % seq.length]);
      i += 1;
      if (i < seq.length) setTimeout(tick, 1100);
    };
    const start = setTimeout(tick, 600);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, []);

  return (
    <figure className="relative">
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-3xl border border-ink-200 bg-ink-100 shadow-soft-lg cursor-ew-resize touch-none"
      >
        {/* AFTER (clean) – full bleed, base layer */}
        <Image
          src="/after.png"
          alt="Nachher – Fläche nach professioneller Hochdruckreinigung"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="pointer-events-none select-none object-cover"
          draggable={false}
        />

        {/* BEFORE (dirty) – clipped by slider */}
        <div
          className="absolute inset-0 overflow-hidden will-change-[clip-path]"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src="/before.png"
            alt="Vorher – verschmutzte Fläche mit Moos und Algen"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="pointer-events-none select-none object-cover"
            draggable={false}
          />
        </div>

        {/* Labels */}
        <div className="pointer-events-none absolute inset-0">
          <span className="absolute left-4 top-4 rounded-full bg-ink-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-soft backdrop-blur-sm">
            Vorher
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-cta-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-soft">
            Nachher
          </span>
        </div>

        {/* Divider line */}
        <div
          className="pointer-events-none absolute inset-y-0"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.15)]" />
        </div>

        {/* Handle button */}
        <button
          type="button"
          role="slider"
          aria-label="Vorher / Nachher Vergleichsregler"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          className="absolute top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-white bg-white/95 text-brand-700 shadow-soft-lg outline-none transition-transform duration-150 ease-out hover:scale-105 focus-visible:ring-4 focus-visible:ring-brand-500/40 active:scale-95"
          style={{ left: `${position}%` }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="m9 6-6 6 6 6" />
            <path d="m15 6 6 6-6 6" />
          </svg>
        </button>

        {/* Caption strip */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-gradient-to-t from-ink-900/55 via-ink-900/25 to-transparent p-4 text-xs font-medium uppercase tracking-wider text-white/95">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5"
            aria-hidden="true"
          >
            <path d="M5 9 2 12l3 3" />
            <path d="m9 5 3-3 3 3" />
            <path d="m15 19-3 3-3-3" />
            <path d="M19 9l3 3-3 3" />
            <path d="M2 12h20" />
            <path d="M12 2v20" />
          </svg>
          Ziehen zum Vergleichen
        </div>
      </div>

      <figcaption className="mt-3 flex items-center justify-between text-xs text-ink-400">
        <span>Echtes Vorher / Nachher aus unseren Aufträgen</span>
        <span className="hidden sm:inline">
          Tipp: ← / → Tasten oder Slider ziehen
        </span>
      </figcaption>
    </figure>
  );
}
