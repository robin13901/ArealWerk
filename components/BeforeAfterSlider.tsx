"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Interactive Before/After comparison slider.
 *
 * Render: photo-realistic paving-stone scene built from SVG patterns
 * (no external assets, looks branded, loads instantly).
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
        <PavingScene variant="after" />

        {/* BEFORE (dirty) – clipped by slider */}
        <div
          className="absolute inset-0 overflow-hidden will-change-[clip-path]"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <PavingScene variant="before" />
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

        {/* Divider line + handle */}
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
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-gradient-to-t from-ink-900/45 via-ink-900/20 to-transparent p-4 text-xs font-medium uppercase tracking-wider text-white/95">
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
        <span>Beispielhafte Darstellung – Pflasterstein-Reinigung</span>
        <span className="hidden sm:inline">
          Tipp: ← / → Tasten oder Slider ziehen
        </span>
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/*  Photo-realistic SVG paving scene                                  */
/* ------------------------------------------------------------------ */

type SceneProps = { variant: "before" | "after" };

/**
 * Renders a 4:3 paving-stone surface in either dirty or clean state.
 * Uses SVG filters (turbulence + lighting) for a photo-real look.
 */
function PavingScene({ variant }: SceneProps) {
  const dirty = variant === "before";
  const idSuffix = variant;

  // Color palette per state
  const c = dirty
    ? {
        stoneA: "#5a5347",
        stoneB: "#4a4338",
        stoneC: "#3d3830",
        grout: "#1f1c17",
        moss: "#3d4a2c",
        stain: "#1a1612",
      }
    : {
        stoneA: "#c8b89d",
        stoneB: "#b8a88d",
        stoneC: "#a89878",
        grout: "#7a6f5a",
        moss: "transparent",
        stain: "transparent",
      };

  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        {/* Stone surface noise */}
        <filter id={`noise-${idSuffix}`} x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={dirty ? "0.85" : "0.65"}
            numOctaves="3"
            seed={dirty ? 7 : 2}
          />
          <feColorMatrix
            type="matrix"
            values={
              dirty
                ? "0 0 0 0 0.12  0 0 0 0 0.10  0 0 0 0 0.08  0 0 0 0.55 0"
                : "0 0 0 0 0.78  0 0 0 0 0.72  0 0 0 0 0.60  0 0 0 0.35 0"
            }
          />
          <feComposite in2="SourceGraphic" operator="in" />
          <feBlend in="SourceGraphic" mode="multiply" />
        </filter>

        {/* Soft vignette */}
        <radialGradient id={`vignette-${idSuffix}`} cx="50%" cy="55%" r="75%">
          <stop offset="60%" stopColor="rgba(0,0,0,0)" />
          <stop
            offset="100%"
            stopColor={dirty ? "rgba(0,0,0,0.55)" : "rgba(20,15,5,0.3)"}
          />
        </radialGradient>

        {/* Top-down lighting gradient (sun) */}
        <linearGradient id={`light-${idSuffix}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            offset="0%"
            stopColor={
              dirty ? "rgba(255,250,230,0.10)" : "rgba(255,250,230,0.32)"
            }
          />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </linearGradient>

        {/* Moss/algae splotches – only in dirty variant */}
        <filter id={`moss-${idSuffix}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="11" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.24  0 0 0 0 0.30  0 0 0 0 0.16  0 0 0 1.6 -0.8"
          />
        </filter>

        {/* Oil/grime stains – only in dirty variant */}
        <filter id={`stain-${idSuffix}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.006" numOctaves="2" seed="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.10  0 0 0 0 0.08  0 0 0 0 0.06  0 0 0 1.4 -0.7"
          />
        </filter>

        {/* Pattern: rectangular paving stones with offset rows */}
        <pattern
          id={`pavers-${idSuffix}`}
          x="0"
          y="0"
          width="200"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          {/* grout */}
          <rect width="200" height="100" fill={c.grout} />
          {/* row 1 */}
          <rect x="2" y="2" width="96" height="46" rx="1" fill={c.stoneA} />
          <rect x="102" y="2" width="96" height="46" rx="1" fill={c.stoneB} />
          {/* row 2 (offset) */}
          <rect x="-48" y="52" width="96" height="46" rx="1" fill={c.stoneC} />
          <rect x="52" y="52" width="96" height="46" rx="1" fill={c.stoneA} />
          <rect x="152" y="52" width="96" height="46" rx="1" fill={c.stoneB} />
        </pattern>

        {/* Subtle bevel on each stone via overlay pattern */}
        <pattern
          id={`bevel-${idSuffix}`}
          x="0"
          y="0"
          width="200"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="2"
            y="2"
            width="96"
            height="46"
            rx="1"
            fill="none"
            stroke={dirty ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.18)"}
            strokeWidth="1"
          />
          <rect
            x="2"
            y="2"
            width="96"
            height="2"
            fill={dirty ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.22)"}
          />
          <rect
            x="102"
            y="2"
            width="96"
            height="46"
            rx="1"
            fill="none"
            stroke={dirty ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.18)"}
            strokeWidth="1"
          />
          <rect
            x="102"
            y="2"
            width="96"
            height="2"
            fill={dirty ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.22)"}
          />
          <rect
            x="-48"
            y="52"
            width="96"
            height="46"
            rx="1"
            fill="none"
            stroke={dirty ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.18)"}
            strokeWidth="1"
          />
          <rect
            x="-48"
            y="52"
            width="96"
            height="2"
            fill={dirty ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.22)"}
          />
          <rect
            x="52"
            y="52"
            width="96"
            height="46"
            rx="1"
            fill="none"
            stroke={dirty ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.18)"}
            strokeWidth="1"
          />
          <rect
            x="52"
            y="52"
            width="96"
            height="2"
            fill={dirty ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.22)"}
          />
          <rect
            x="152"
            y="52"
            width="96"
            height="46"
            rx="1"
            fill="none"
            stroke={dirty ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.18)"}
            strokeWidth="1"
          />
          <rect
            x="152"
            y="52"
            width="96"
            height="2"
            fill={dirty ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.22)"}
          />
        </pattern>
      </defs>

      {/* Perspective: tilt the paving plane backwards */}
      <g transform="matrix(1, 0, -0.18, 0.74, 144, 80)">
        {/* Base stone pattern */}
        <rect
          x="-200"
          y="0"
          width="1200"
          height="900"
          fill={`url(#pavers-${idSuffix})`}
        />
        {/* Surface texture noise overlay */}
        <rect
          x="-200"
          y="0"
          width="1200"
          height="900"
          fill="white"
          filter={`url(#noise-${idSuffix})`}
          opacity={dirty ? 0.85 : 0.55}
          style={{ mixBlendMode: dirty ? "multiply" : "soft-light" }}
        />
        {/* Bevel/grout shadow */}
        <rect
          x="-200"
          y="0"
          width="1200"
          height="900"
          fill={`url(#bevel-${idSuffix})`}
        />

        {dirty && (
          <>
            {/* Moss patches */}
            <rect
              x="-200"
              y="0"
              width="1200"
              height="900"
              filter={`url(#moss-${idSuffix})`}
              opacity="0.55"
            />
            {/* Oil/grime stains */}
            <rect
              x="-200"
              y="0"
              width="1200"
              height="900"
              filter={`url(#stain-${idSuffix})`}
              opacity="0.45"
            />
            {/* Tire mark */}
            <ellipse
              cx="420"
              cy="320"
              rx="180"
              ry="22"
              fill="rgba(10,8,6,0.55)"
              transform="rotate(-6 420 320)"
            />
            <ellipse
              cx="440"
              cy="360"
              rx="170"
              ry="20"
              fill="rgba(10,8,6,0.4)"
              transform="rotate(-6 440 360)"
            />
          </>
        )}

        {!dirty && (
          <>
            {/* Wet sheen highlight (just-cleaned look) */}
            <ellipse
              cx="500"
              cy="220"
              rx="280"
              ry="60"
              fill="rgba(255,255,255,0.18)"
            />
            <ellipse
              cx="380"
              cy="420"
              rx="220"
              ry="40"
              fill="rgba(255,255,255,0.12)"
            />
          </>
        )}
      </g>

      {/* Sky / horizon ambience above the paving */}
      <rect
        x="0"
        y="0"
        width="800"
        height="120"
        fill={
          dirty
            ? "url(#skyDirty)"
            : "url(#skyClean)"
        }
      />
      <defs>
        <linearGradient id="skyDirty" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9aa0a8" />
          <stop offset="100%" stopColor="#6b6e74" />
        </linearGradient>
        <linearGradient id="skyClean" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cfe6f1" />
          <stop offset="100%" stopColor="#a8cfe0" />
        </linearGradient>
      </defs>

      {/* Lighting + vignette overlays */}
      <rect width="800" height="600" fill={`url(#light-${idSuffix})`} />
      <rect width="800" height="600" fill={`url(#vignette-${idSuffix})`} />

      {/* Hint of pressure-water spray on the AFTER side */}
      {!dirty && (
        <g opacity="0.7">
          <defs>
            <linearGradient id="spray-jet" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.0" />
              <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#ECFEFF" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M620 150 L760 90 L760 210 L620 170 Z"
            fill="url(#spray-jet)"
            opacity="0.6"
          />
        </g>
      )}
    </svg>
  );
}
