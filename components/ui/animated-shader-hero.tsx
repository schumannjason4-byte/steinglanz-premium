"use client"

interface ButtonConfig {
  text: string
  onClick?: () => void
  href?: string
}

interface HeroProps {
  trustBadge?: { text: string; icons?: string[] }
  eyebrow?: string
  headline: { line1: string; line2: string; line3?: string }
  subtitle: string
  buttons?: { primary?: ButtonConfig; secondary?: ButtonConfig }
  className?: string
}

function Btn({ config, variant }: { config: ButtonConfig; variant: 'primary' | 'secondary' }) {
  const cls = variant === 'primary'
    ? 'inline-flex items-center gap-2 bg-gold text-brand font-body font-bold text-[0.8125rem] tracking-[0.14em] uppercase px-9 py-4 rounded-full hover:bg-gold-light hover:shadow-[0_0_32px_rgba(201,162,39,0.45)] hover:-translate-y-0.5 transition-all duration-250'
    : 'inline-flex items-center gap-2 font-body font-semibold text-[0.8125rem] tracking-[0.14em] uppercase px-9 py-4 rounded-full border border-white/20 text-brand-text hover:border-gold/60 hover:text-gold backdrop-blur-sm transition-all duration-250'
  if (config.href) return <a href={config.href} className={cls}>{config.text}</a>
  return <button onClick={config.onClick} className={cls}>{config.text}</button>
}

export function AnimatedShaderHero({ trustBadge, eyebrow, headline, subtitle, buttons, className = '' }: HeroProps) {
  return (
    <div className={`relative w-full min-h-dvh overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/hero-bg.jpg")', filter: 'brightness(1.05)' }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(4,4,4,0.62) 0%, rgba(4,4,4,0.28) 30%, rgba(4,4,4,0.32) 60%, rgba(4,4,4,0.88) 82%, rgba(4,4,4,0.97) 100%)'
        }}
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201,162,39,0.28), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-dvh text-center px-5 pt-[72px] pb-16 mt-10">
        {trustBadge && (
          <div className="mb-8 animate-fade-in-down">
            <div className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.06] backdrop-blur-md border border-white/[0.10] rounded-full">
              {trustBadge.icons?.map((icon, i) => <span key={i} className="text-gold text-sm">{icon}</span>)}
              <span className="font-body text-[0.8125rem] text-brand-muted tracking-wide">{trustBadge.text}</span>
            </div>
          </div>
        )}

        {eyebrow && (
          <p className="font-body text-[0.6875rem] font-medium tracking-[0.30em] uppercase text-brand-muted mb-10 animate-fade-in-down">
            {eyebrow}
          </p>
        )}

        <h1
          className="flex flex-col items-center mb-7"
          aria-label={[headline.line1, headline.line2, headline.line3].filter(Boolean).join(' ')}
        >
          <span
            className="block font-display font-black leading-[0.96] tracking-[-0.02em] text-brand-text animate-fade-in-up animation-delay-200"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)' }}
          >{headline.line1}</span>
          <span
            className="block font-display font-black leading-[0.96] tracking-[-0.02em] text-brand-text animate-fade-in-up animation-delay-400"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)' }}
          >{headline.line2}</span>
          {headline.line3 && (
            <span className="relative inline-block animate-fade-in-up animation-delay-600">
              <span
                className="block font-display font-black leading-[0.96] tracking-[-0.02em] text-gold hero-perfektion"
                style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)' }}
              >{headline.line3}</span>
              {/* Sparkles */}
              <svg className="hero-sparkle hero-sparkle-1" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5Z" fill="#C9A227"/>
              </svg>
              <svg className="hero-sparkle hero-sparkle-2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5Z" fill="#C9A227"/>
              </svg>
              <svg className="hero-sparkle hero-sparkle-3" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5Z" fill="#C9A227"/>
              </svg>
            </span>
          )}
        </h1>

        <p className="font-body font-medium text-[1rem] text-brand-muted leading-relaxed mb-11 max-w-md animate-fade-in-up animation-delay-600">
          {subtitle}
        </p>

        {buttons && (
          <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up animation-delay-800">
            {buttons.primary   && <Btn config={buttons.primary}   variant="primary" />}
            {buttons.secondary && <Btn config={buttons.secondary} variant="secondary" />}
          </div>
        )}
      </div>
    </div>
  )
}
