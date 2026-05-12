"use client"

import { useState } from "react"
import { CheckCircle2, ChevronDown } from "lucide-react"

const packages = [
  {
    num: "01",
    name: "Basisreinigung",
    badge: "SAUBER & FRISCH",
    price: "4",
    priceUnit: "/m²",
    features: [
      "Schonende Tiefenreinigung der Oberfläche",
      "Entfernung von Schmutz & Algen",
      "Verfärbungen beseitigt",
    ],
    featured: false,
  },
  {
    num: "02",
    name: "Premiumreinigung inkl. Fugenpflege",
    badge: "GRÜNDLICH & NACHHALTIG",
    price: "8",
    priceUnit: "/m²",
    features: [
      "Gründliche Reinigung von Fläche & Fugen",
      "Entfernung von Unkraut & Ablagerungen",
      "Nachhaltige Behandlung der Fugen",
    ],
    featured: false,
  },
  {
    num: "03",
    name: "Exklusivpaket inkl. Imprägnierung",
    badge: "SCHUTZ & WERTERHALT",
    price: "12",
    priceUnit: "/m²",
    features: [
      "Kompletteinigung mit hochwertigem Schutz",
      "Schützt vor Feuchtigkeit & Witterung",
      "Hochwertige Imprägnierung inklusive",
    ],
    featured: false,
  },
  {
    num: "04",
    name: "Premium Plus Fugenmörtel",
    badge: "DAUERHAFT & PERFEKT",
    price: "18–25",
    priceUnit: "/m²",
    features: [
      "Tiefenreinigung + vollst. Fugenentfernung",
      "Hochwertiger, langlebiger Fugenmörtel",
      "Dauerhaft unkrautfrei",
      "Feste & stabile Fugen",
      "Hochwertige Optik garantiert",
    ],
    featured: true,
  },
]

const CARD_CLASS = "reveal relative flex flex-col backdrop-blur-xl rounded-[18px] p-4 transition-all duration-250 hover:-translate-y-1 min-h-[300px]"

export function PricingSection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="pakete" className="relative py-14 lg:py-20 bg-brand-alt">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 5%, rgba(231,255,0,0.03) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 100%, rgba(231,255,0,0.03) 0%, transparent 60%)",
        }}
      />
      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <header className="text-center mb-10 reveal">
          <span className="inline-block font-body text-sm font-bold tracking-[0.25em] uppercase text-gold mb-4">
            Unsere Pakete
          </span>
          <h2
            className="font-display font-bold text-brand-text leading-[1.15] mb-4"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Transparent<br />Fair<br />Professionell
          </h2>
          <p className="font-medium text-brand-muted text-[1.0625rem] leading-relaxed max-w-xl mx-auto">
            Wählen Sie das Paket, das zu Ihrer Oberfläche passt – ab 4 € pro m².
          </p>
        </header>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4 items-start">
          {packages.map((pkg, i) => {
            const isFeatured = pkg.featured
            const visibleFeatures = isFeatured && !expanded
              ? pkg.features.slice(0, 3)
              : pkg.features

            return (
              <article
                key={pkg.num}
                className={`${CARD_CLASS} reveal-d${i + 1} ${
                  isFeatured
                    ? "bg-gradient-to-br from-gold/[0.06] via-brand to-brand border border-white/[0.08]"
                    : i === 1
                    ? "bg-white/[0.04] border border-gold shadow-[0_0_0_1px_#e7ff00] hover:shadow-[0_0_0_1px_#f0ff4d,0_16px_40px_rgba(231,255,0,0.12)]"
                    : "bg-white/[0.04] border border-white/[0.08] hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
                }`}
              >
                {(isFeatured || i === 1) && (
                  <div className="absolute -top-px right-4 bg-gold text-brand font-body text-[0.6rem] font-bold tracking-[0.15em] px-2.5 py-[3px] rounded-b-[5px]">
                    {i === 1 ? "BESTSELLER" : "EMPFOHLEN"}
                  </div>
                )}

                <h3 className="font-display text-[1.125rem] font-bold text-brand-text leading-[1.3] mb-1">
                  {pkg.name}
                </h3>
                <p className="font-body text-[0.6rem] font-bold tracking-[0.18em] uppercase text-gold mb-3">
                  {pkg.badge}
                </p>

                <div className="flex items-baseline gap-1 pb-3 mb-3 border-b border-white/[0.08]">
                  <span className="text-brand-subtle text-[0.7rem] mr-0.5">ab</span>
                  <span className={`font-display font-bold text-[2rem] leading-none ${i === 1 ? "text-gold" : "text-brand-text"}`}
                    style={{ fontVariantNumeric: "tabular-nums" }}>
                    {pkg.price}
                  </span>
                  <span className="font-display font-bold text-lg text-brand-muted">€</span>
                  <span className="font-body text-[0.75rem] text-brand-subtle">{pkg.priceUnit}</span>
                </div>

                <ul className="flex flex-col gap-1.5 mb-4 flex-1" role="list">
                  {visibleFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[0.8125rem] leading-[1.5]">
                      <CheckCircle2 size={13} strokeWidth={2.5} className="text-gold shrink-0 mt-[0.2rem]" />
                      <span className={`font-medium ${isFeatured ? "text-brand-text" : "text-brand-muted"}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                {isFeatured && (
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="flex items-center justify-center gap-1 w-full text-gold text-[0.7rem] font-semibold tracking-wide mb-3 hover:text-gold-light transition-colors duration-150"
                    aria-expanded={expanded}
                  >
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                    />
                    {expanded ? "Weniger anzeigen" : "Alle Details anzeigen"}
                  </button>
                )}

                <a
                  href="tel:017684034915"
                  className={`w-full flex justify-center font-body font-semibold text-[0.7rem] tracking-[0.08em] uppercase py-2 rounded-full border transition-all duration-250 ${
                    i === 1
                      ? "bg-gold text-brand border-gold hover:bg-gold-light hover:shadow-[0_8px_28px_rgba(231,255,0,0.25)] hover:-translate-y-0.5"
                      : "bg-transparent text-brand-muted border-white/[0.08] hover:text-gold hover:border-gold/40"
                  }`}
                >
                  {i === 1 ? "Jetzt anfragen" : "Anfragen"}
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
