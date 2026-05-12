"use client"

import { ChevronDown } from "lucide-react"
import { AnimatedShaderHero } from "@/components/ui/animated-shader-hero"

export function Hero() {
  return (
    <section id="hero" aria-label="STEINGLANZ PREMIUM – Willkommen" className="relative">
      <AnimatedShaderHero
        headline={{
          line1: "WERTERHALT",
          line2: "ÄSTHETIK",
          line3: "PERFEKTION",
        }}
        subtitle="Professionelle Reinigung von Einfahrten, Terrassen & Balkonen in Baden-Württemberg & Umgebung."
        buttons={{
          primary: { text: "Jetzt anrufen", href: "tel:017684034915" },
          secondary: { text: "Pakete ansehen", href: "#pakete" },
        }}
      />

      <a
        href="#leistungen"
        aria-label="Weiter zu unseren Leistungen"
        className="absolute bottom-10 left-1/2 z-20 text-brand-subtle hover:text-gold transition-colors duration-150 animate-bounce-y focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 focus-visible:rounded"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </a>
    </section>
  )
}
