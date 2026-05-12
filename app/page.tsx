import { Nav } from "@/components/Nav"
import { Hero } from "@/components/Hero"
import { BeforeAfterSlider } from "@/components/BeforeAfter"
import { PricingSection } from "@/components/PricingSection"
import {
  Grid3x3,
  Home,
  Waves,
  ShieldCheck,
  Star,
  Leaf,
  Zap,
  CheckCircle2,
  Phone,
  MapPin,
  MessageCircle,
  ChevronRight,
} from "lucide-react"

export default function Page() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Zum Inhalt springen
      </a>

      <Nav />

      <main id="main-content">
        <Hero />
        <Services />
        <PricingSection />
        <Trust />
        <References />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

/* ── SERVICES ────────────────────────────────────────────── */
function Services() {
  const services = [
    {
      icon: <Grid3x3 size={28} strokeWidth={1.5} />,
      title: "Einfahrten",
      desc: "Pflasterstein, Beton, Asphalt – Tiefenreinigung mit dauerhaftem Schutz gegen Algen und Verfärbungen.",
      offset: false,
    },
    {
      icon: <Home size={28} strokeWidth={1.5} />,
      title: "Terrassen",
      desc: "Naturstein, Holz, Feinsteinzeug – schonende Reinigung mit Schutzversiegelung für langfristigen Werterhalt.",
      offset: true,
    },
    {
      icon: <Waves size={28} strokeWidth={1.5} />,
      title: "Balkone",
      desc: "Belag, Geländer, Fugen – vollständige Balkonreinigung und -pflege für eine makellose Optik.",
      offset: false,
    },
  ]

  return (
    <section id="leistungen" className="relative py-20 lg:py-28 bg-brand">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 70% 55% at 85% 95%, rgba(231,255,0,0.04) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 15% 10%, rgba(231,255,0,0.02) 0%, transparent 60%)" }} />
      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <header className="text-center mb-14 reveal">
          <span className="inline-block font-body text-sm font-bold tracking-[0.25em] uppercase text-gold mb-4">
            Unsere Leistungen
          </span>
          <h2 className="font-display font-bold text-brand-text leading-[1.15] mb-4"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}>
            Die richtige Reinigung<br />für jede Oberfläche
          </h2>
          <p className="font-medium text-brand-muted text-[1.0625rem] leading-relaxed max-w-xl mx-auto">
            Wir reinigen alle gängigen Außenflächen – schonend, gründlich und mit dauerhaftem Ergebnis.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`reveal reveal-d${i + 1} group relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-[28px] p-10 overflow-hidden transition-all duration-250 hover:-translate-y-1.5 hover:border-gold/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] ${s.offset ? "lg:mt-10" : ""}`}
            >
              {/* Neon shimmer on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-250" />

              <div className="w-14 h-14 rounded-full bg-gold/[0.08] border border-gold/[0.15] flex items-center justify-center text-gold mb-6 group-hover:bg-gold/[0.14] transition-colors duration-250">
                {s.icon}
              </div>
              <h3 className="font-display text-[1.875rem] font-bold text-brand-text mb-3">{s.title}</h3>
              <p className="font-medium text-brand-muted text-[0.9375rem] leading-[1.65] mb-7">{s.desc}</p>
              <a
                href="#pakete"
                className="inline-flex items-center gap-1.5 font-body text-[0.8125rem] font-semibold tracking-[0.08em] uppercase text-gold hover:gap-3 transition-all duration-150"
                aria-label={`Paket für ${s.title} wählen`}
              >
                Paket wählen
                <ChevronRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


/* ── TRUST ───────────────────────────────────────────────── */
function Trust() {
  const features = [
    {
      icon: <Star size={24} strokeWidth={1.5} />,
      title: "Professionelle Ausführung",
      desc: "Erfahren, zuverlässig und detailverliebt – wir liefern Ergebnisse, die überzeugen.",
    },
    {
      icon: <Zap size={24} strokeWidth={1.5} />,
      title: "Moderne Technik",
      desc: "Effiziente und schonende Reinigungsmethoden mit hochwertigen Profi-Geräten.",
    },
    {
      icon: <Leaf size={24} strokeWidth={1.5} />,
      title: "Umweltfreundlich",
      desc: "Schonende Reinigungsmittel – gut für Ihre Oberfläche und gut für Mensch & Natur.",
    },
    {
      icon: <ShieldCheck size={24} strokeWidth={1.5} />,
      title: "Zufriedenheit garantiert",
      desc: "Top Ergebnisse oder wir kommen nochmals – Ihre Zufriedenheit ist unser Maßstab.",
    },
  ]

  return (
    <section className="relative py-20 lg:py-28 bg-brand">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(231,255,0,0.03) 0%, transparent 70%)" }} />
      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <header className="text-center mb-14 reveal">
          <span className="inline-block font-body text-sm font-bold tracking-[0.25em] uppercase text-gold mb-4">
            Warum Steinglanz Premium
          </span>
          <h2 className="font-display font-bold text-brand-text leading-[1.15]"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}>
            Ihre Außenflächen<br />in besten Händen
          </h2>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={f.title} className={`reveal reveal-d${i + 1} group flex flex-col gap-4`}>
              <div className="w-14 h-14 rounded-full bg-gold/[0.08] border border-gold/[0.15] flex items-center justify-center text-gold group-hover:bg-gold/[0.14] group-hover:shadow-[0_0_20px_rgba(231,255,0,0.12)] transition-all duration-250 shrink-0">
                {f.icon}
              </div>
              <h3 className="font-display text-[1.25rem] font-semibold text-brand-text leading-[1.3]">
                {f.title}
              </h3>
              <p className="font-medium text-brand-muted text-[0.9375rem] leading-[1.65]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── REFERENCES (Before/After) ───────────────────────────── */
function References() {
  return (
    <section id="referenzen" className="relative py-20 lg:py-28 bg-brand-alt">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 65% 50% at 75% 100%, rgba(231,255,0,0.03) 0%, transparent 65%), radial-gradient(ellipse 45% 35% at 25% 0%, rgba(231,255,0,0.02) 0%, transparent 55%)" }} />
      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <header className="text-center mb-14 reveal">
          <span className="inline-block font-body text-sm font-bold tracking-[0.25em] uppercase text-gold mb-4">
            Unsere Referenzen
          </span>
          <h2 className="font-display font-bold text-brand-text leading-[1.15] mb-4"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}>
            Ergebnisse, die<br />für sich sprechen
          </h2>
          <p className="font-medium text-brand-muted text-[1.0625rem] leading-relaxed max-w-xl mx-auto">
            Ziehen Sie den Regler und überzeugen Sie sich selbst vom Unterschied.
          </p>
        </header>

        <div className="flex flex-col gap-10 max-w-[900px] mx-auto">
          <div className="reveal reveal-d1">
            <BeforeAfterSlider
              title="Einfahrt – Pflasterstein"
              beforeSrc="/images/einfahrt-before.jpg"
              afterSrc="/images/einfahrt-after.jpg"
            />
          </div>
          <div className="reveal reveal-d2">
            <BeforeAfterSlider
              title="Terrasse – Naturstein"
              beforeSrc="/images/terrasse-before.jpg"
              afterSrc="/images/terrasse-after.jpg"
            />
          </div>
          <div className="reveal reveal-d3">
            <BeforeAfterSlider
              title="Balkon – Feinsteinzeug"
              beforeSrc="/images/balkon-before.jpg"
              afterSrc="/images/balkon-after.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── CONTACT ─────────────────────────────────────────────── */
function Contact() {
  return (
    <section
      id="kontakt"
      className="relative py-24 lg:py-32 bg-brand text-center"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 80% 65% at 50% 50%, rgba(231,255,0,0.06) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 15% 80%, rgba(231,255,0,0.03) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 85% 20%, rgba(231,255,0,0.03) 0%, transparent 55%)" }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 reveal flex flex-col items-center">
        <p className="font-body text-xs font-bold tracking-[0.25em] uppercase text-gold mb-5">
          Kostenlose Beratung
        </p>
        <h2 className="font-display font-bold text-brand-text leading-[1.15] mb-8"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}>
          Bereit für ein sauberes Ergebnis?
        </h2>
        <a
          href="tel:017684034915"
          aria-label="Anrufen: 0176 84034915"
          className="font-display font-bold text-gold mb-5 hover:[text-shadow:0_0_50px_rgba(231,255,0,0.45)] transition-all duration-250 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-6 focus-visible:rounded"
          style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", letterSpacing: "-0.02em" }}
        >
          0176 84034915
        </a>
        <p className="font-medium text-brand-subtle text-[0.9375rem] mb-10">
          Mo – Sa &nbsp;|&nbsp; 7:00 – 19:00 Uhr &nbsp;|&nbsp; Baden-Württemberg &amp; Umgebung
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <a
            href="tel:017684034915"
            className="inline-flex items-center gap-2 bg-gold text-brand font-body font-bold text-[0.8125rem] tracking-[0.14em] uppercase px-8 py-4 rounded-full hover:bg-gold-light hover:shadow-[0_8px_28px_rgba(231,255,0,0.28)] hover:-translate-y-0.5 transition-all duration-250"
          >
            <Phone size={18} />
            Jetzt anrufen
          </a>
          <a
            href="https://wa.me/4917684034915"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="WhatsApp öffnen (neues Fenster)"
            className="inline-flex items-center gap-2 font-body font-semibold text-[0.8125rem] tracking-[0.08em] uppercase px-8 py-4 rounded-full border border-white/10 text-brand-text hover:border-gold/50 hover:text-gold transition-all duration-250"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
        <p className="flex items-center gap-1.5 text-brand-subtle text-sm">
          <MapPin size={14} />
          Einsatzgebiet: Baden-Württemberg &amp; Umgebung
        </p>
      </div>
    </section>
  )
}

/* ── FOOTER ──────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-gold/[0.12]" role="contentinfo">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(231,255,0,0.03) 0%, transparent 60%)" }} />
      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-14 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <a
            href="#hero"
            className="inline-flex flex-col leading-none mb-2.5"
          >
            <span className="font-display font-semibold tracking-[0.12em] text-brand-text" style={{ fontSize: "1.5rem" }}>
              STEINGLANZ
            </span>
            <span className="font-display font-medium tracking-[0.22em] text-gold" style={{ fontSize: "0.875rem" }}>
              PREMIUM
            </span>
          </a>
          <p className="font-body text-xs font-bold tracking-[0.2em] uppercase text-gold mb-1.5">
            WERTERHALT. ÄSTHETIK. PERFEKTION.
          </p>
          <p className="font-display italic text-[0.9375rem] text-brand-subtle">
            Sauberkeit, die man sieht – Qualität, die bleibt.
          </p>
        </div>

        <div>
          <p className="font-body text-[0.6875rem] font-bold tracking-[0.2em] uppercase text-brand-subtle mb-4">
            Kontakt
          </p>
          <a
            href="tel:017684034915"
            className="block font-display font-bold text-xl text-gold mb-1.5 hover:[text-shadow:0_0_20px_rgba(231,255,0,0.4)] transition-all duration-150"
          >
            0176 84034915
          </a>
          <p className="text-brand-subtle text-[0.875rem]">Baden-Württemberg &amp; Umgebung</p>
        </div>

        <div>
          <p className="font-body text-[0.6875rem] font-bold tracking-[0.2em] uppercase text-brand-subtle mb-4">
            Leistungen
          </p>
          <nav aria-label="Footer Leistungen" className="flex flex-col gap-2">
            {["Einfahrten", "Terrassen", "Balkone"].map((l) => (
              <a
                key={l}
                href="#leistungen"
                className="text-brand-muted text-[0.9375rem] hover:text-gold transition-colors duration-150"
              >
                {l}
              </a>
            ))}
            <a href="#pakete" className="text-brand-muted text-[0.9375rem] hover:text-gold transition-colors duration-150">
              Pakete &amp; Preise
            </a>
          </nav>
        </div>
      </div>

      <div className="relative border-t border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-[0.8125rem] text-brand-subtle">
          <p>&copy; 2026 STEINGLANZ PREMIUM. Alle Rechte vorbehalten.</p>
          <nav aria-label="Rechtliches" className="flex gap-6">
            <a href="#impressum" className="hover:text-gold transition-colors duration-150">Impressum</a>
            <a href="#datenschutz" className="hover:text-gold transition-colors duration-150">Datenschutz</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
