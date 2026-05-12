"use client"

import { useRef, useState, useCallback } from "react"
import Image from "next/image"

interface Props {
  title: string
  beforeSrc?: string
  afterSrc?: string
}

export function BeforeAfterSlider({ title, beforeSrc, afterSrc }: Props) {
  const [position, setPosition] = useState(50)
  const sliderRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const update = useCallback((clientX: number) => {
    if (!sliderRef.current) return
    const rect = sliderRef.current.getBoundingClientRect()
    const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 4), 96)
    setPosition(pct)
  }, [])

  return (
    <div>
      <p className="font-body text-[0.8125rem] font-semibold tracking-[0.12em] uppercase text-brand-subtle mb-3.5">
        {title}
      </p>

      <div
        ref={sliderRef}
        role="img"
        aria-label={`Vorher-Nachher Vergleich: ${title}`}
        className="relative aspect-video overflow-hidden cursor-ew-resize select-none rounded-[20px] border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        onMouseDown={(e) => { dragging.current = true; update(e.clientX) }}
        onMouseMove={(e) => { if (dragging.current) update(e.clientX) }}
        onMouseUp={() => { dragging.current = false }}
        onMouseLeave={() => { dragging.current = false }}
        onTouchStart={(e) => { dragging.current = true; update(e.touches[0].clientX) }}
        onTouchMove={(e) => { if (dragging.current) update(e.touches[0].clientX) }}
        onTouchEnd={() => { dragging.current = false }}
      >
        {/* ── AFTER – full container ── */}
        <div className="absolute inset-0" aria-hidden="true">
          {afterSrc ? (
            <Image
              src={afterSrc}
              alt="Nach der Reinigung"
              fill
              className="object-cover object-center pointer-events-none"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
              quality={95}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e2a1e] via-[#152515] to-[#0a0f0a]" />
          )}
          <span className="absolute bottom-3.5 right-3.5 z-10 font-body text-[0.6875rem] font-bold tracking-[0.2em] bg-gold text-brand px-3 py-1 rounded-[6px]">
            NACHHER
          </span>
        </div>

        {/* ── BEFORE – clip-path reveals left portion ── */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          aria-hidden="true"
        >
          {beforeSrc ? (
            <Image
              src={beforeSrc}
              alt="Vor der Reinigung"
              fill
              className="object-cover object-center pointer-events-none"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
              quality={95}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a2520] via-[#241d15] to-[#120e08] brightness-[0.65] grayscale-[0.6]" />
          )}
          <span className="absolute bottom-3.5 left-3.5 z-10 font-body text-[0.6875rem] font-bold tracking-[0.2em] bg-black/65 text-brand-muted px-3 py-1 rounded-[6px]">
            VORHER
          </span>
        </div>

        {/* ── DRAG HANDLE ── */}
        <div
          className="absolute top-0 bottom-0 z-20 -translate-x-1/2 pointer-events-none"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <div className="w-0.5 h-full bg-gold mx-auto shadow-[0_0_12px_rgba(201,162,39,0.4)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-gold rounded-full flex items-center justify-center gap-0.5 shadow-[0_0_24px_rgba(201,162,39,0.3),0_4px_16px_rgba(0,0,0,0.5)] pointer-events-auto cursor-ew-resize">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="text-brand">
              <path d="M6 1L1 7L6 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="text-brand">
              <path d="M2 1L7 7L2 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
