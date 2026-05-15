"use client"

import { useEffect } from "react"
import { X } from "lucide-react"

const inputCls = "w-full bg-[#0C0907] border border-white/[0.10] text-brand-text placeholder:text-brand-subtle px-5 py-4 rounded-xl font-body text-[0.9375rem] transition-all duration-200 focus:outline-none focus:border-gold/60 focus:ring-4 focus:ring-gold/[0.10]"

const packageOptions = [
  "Basisreinigung – ab 4 €/m²",
  "Premiumreinigung – ab 8 €/m²",
  "Exklusivpaket – ab 12 €/m²",
  "Premium Plus – ab 18 €/m²",
]

interface Props {
  isOpen: boolean
  onClose: () => void
  selectedPackage?: string
}

export function ContactModal({ isOpen, onClose, selectedPackage }: Props) {
  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = "hidden"
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handler)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handler)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-[580px] max-h-[90vh] overflow-y-auto bg-[#120F09] border border-white/[0.10] rounded-[20px] p-8 md:p-12 shadow-[0_40px_120px_rgba(0,0,0,0.7)]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-brand-subtle hover:text-brand-text transition-colors duration-150"
          aria-label="Schließen"
        >
          <X size={20} />
        </button>

        <span className="inline-block font-body text-[0.6875rem] font-bold tracking-[0.2em] uppercase text-gold border border-gold/40 px-4 py-1.5 rounded-full mb-5">
          Kostenlose Anfrage
        </span>
        <h3 className="font-display font-bold text-brand-text text-[1.625rem] leading-[1.2] mb-3">
          Stellen Sie jetzt Ihre Anfrage
        </h3>
        <p className="font-medium text-brand-muted text-[0.9375rem] leading-relaxed mb-8">
          Wir melden uns innerhalb von 24 Stunden mit einem unverbindlichen Angebot.
        </p>

        <form key={selectedPackage} action="mailto:schumannjason6@gmail.com" method="POST" encType="text/plain" className="flex flex-col gap-3.5">
          <div className="grid grid-cols-2 gap-3.5">
            <input name="vorname" placeholder="Vorname" required className={inputCls} />
            <input name="nachname" placeholder="Nachname" required className={inputCls} />
          </div>
          <input name="kontakt" placeholder="Telefon oder E-Mail" required className={inputCls} />
          <select
            name="paket"
            required
            defaultValue={selectedPackage ?? ""}
            className={`${inputCls} appearance-none`}
            style={{
              backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8'><path d='M1 1l6 6 6-6' stroke='%23909090' stroke-width='1.5' fill='none' stroke-linecap='round'/></svg>\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 18px center",
              paddingRight: "46px",
            }}
          >
            <option value="" disabled>Paket auswählen…</option>
            {packageOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <input name="flaeche" type="number" min="1" placeholder="Fläche in m² (ca.)" className={inputCls} />
          <textarea name="nachricht" placeholder="Kurze Beschreibung des Auftrags…" rows={4} className={`${inputCls} resize-y`} />
          <button
            type="submit"
            className="mt-2 w-full bg-gold text-brand font-body font-bold text-[0.875rem] tracking-[0.10em] uppercase py-4 rounded-full hover:bg-gold-light hover:shadow-[0_8px_28px_rgba(201,162,39,0.30)] hover:-translate-y-0.5 transition-all duration-250"
          >
            Jetzt unverbindlich anfragen →
          </button>
          <p className="text-center text-brand-subtle text-[0.75rem]">
            Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
          </p>
        </form>
      </div>
    </div>
  )
}
