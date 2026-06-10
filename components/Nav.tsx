"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export function Nav() {
  const [pastHero, setPastHero] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const handle = () => {
      const y = window.scrollY
      setPastHero(y > window.innerHeight * 0.85)
      if (y > lastY.current + 8 && y > 200) setHidden(true)
      else if (y < lastY.current - 4) setHidden(false)
      lastY.current = y
    }
    window.addEventListener("scroll", handle, { passive: true })
    return () => window.removeEventListener("scroll", handle)
  }, [])

  const close = () => {
    setMenuOpen(false)
    document.body.style.overflow = ""
  }

  const toggle = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? "hidden" : ""
  }

  const links = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#pakete", label: "Pakete" },
    { href: "#referenzen", label: "Referenzen" },
    { href: "#kontakt", label: "Kontakt" },
  ]

  return (
    <nav
      role="navigation"
      aria-label="Hauptnavigation"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        pastHero && "bg-[#F8F3EA]/95 backdrop-blur-xl border-b border-gold/[0.20]",
        hidden && "-translate-y-full"
      )}
    >
      <div className="w-full flex items-center h-[72px] gap-8">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-0 shrink-0 -ml-4"
          aria-label="STEINGLANZ PREMIUM – Startseite"
          onClick={close}
        >
          <Image
            src="/images/sg-logo.png"
            alt="STEINGLANZ PREMIUM Logo"
            width={96}
            height={96}
            className="object-contain"
            priority
          />
          <span className="flex flex-col leading-none -ml-4">
            <span className={cn("font-display font-bold tracking-[0.12em] transition-colors duration-300", pastHero ? "text-brand-text" : "text-white")} style={{ fontSize: "1.5rem" }}>
              STEINGLANZ
            </span>
            <span className="font-display font-semibold tracking-[0.22em] text-gold" style={{ fontSize: "0.875rem" }}>
              PREMIUM
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8 ml-auto" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn("font-body text-sm font-semibold hover:text-gold transition-colors duration-300", pastHero ? "text-brand-muted" : "text-white/85")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="tel:017684034915"
          className="hidden lg:flex items-center gap-2 text-gold border border-gold/30 hover:bg-gold hover:text-brand hover:border-gold px-4 py-2 rounded-full text-[0.8125rem] font-semibold tracking-wide transition-all duration-250 shrink-0"
          aria-label="Jetzt anrufen: 0176 84034915"
        >
          <Phone size={15} />
          0176 84034915
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden ml-auto p-2 rounded cursor-pointer focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={toggle}
        >
          <span className="flex flex-col gap-[5px]">
            <span
              className={cn(
                "block w-6 h-0.5 rounded transition-all duration-300",
                pastHero ? "bg-brand-text" : "bg-white",
                menuOpen && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 rounded transition-all duration-300",
                pastHero ? "bg-brand-text" : "bg-white",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 rounded transition-all duration-300",
                pastHero ? "bg-brand-text" : "bg-white",
                menuOpen && "-translate-y-[7px] -rotate-45"
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={cn(
          "lg:hidden bg-[#F8F3EA]/98 backdrop-blur-xl border-b border-gold/[0.20] overflow-hidden transition-all duration-400 ease-out",
          menuOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <ul className="px-5 pt-4 pb-2 flex flex-col" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block text-[1.0625rem] font-semibold text-brand-text hover:text-gold py-3.5 border-b border-white/8 transition-colors duration-150"
                onClick={close}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="tel:017684034915"
          className="flex items-center justify-center gap-2 mx-5 mb-5 mt-4 bg-gold text-brand font-semibold text-sm tracking-widest uppercase rounded-full py-3.5 hover:bg-gold-light transition-colors duration-250"
          onClick={close}
        >
          <Phone size={16} />
          0176 84034915
        </a>
      </div>
    </nav>
  )
}
