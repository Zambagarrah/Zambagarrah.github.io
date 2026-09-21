import { useState, type MouseEvent } from 'react'
import zablonPhoto from '@/imports/zablon_photo.png'
import { LinkedInIcon, GithubIcon, MailIcon, XIcon, WhatsAppIcon, DiscordIcon, RedditIcon, ChevronDownIcon } from './icons'
import Globe from './Globe'

type SocialLink = {
  label: string
  Icon: typeof LinkedInIcon
  href?: string
  copyValue?: string
}

const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zambagarrah/', Icon: LinkedInIcon },
  { label: 'GitHub', href: 'https://github.com/Zambagarrah', Icon: GithubIcon },
  { label: 'X', href: 'https://x.com/zambagarrah', Icon: XIcon },
  { label: 'WhatsApp', href: 'https://wa.me/254705959986', Icon: WhatsAppIcon },
  { label: 'Discord', href: 'https://discord.com/users/1371024006358241301', Icon: DiscordIcon },
  { label: 'Reddit', href: 'https://www.reddit.com/user/Killshot_360/', Icon: RedditIcon },
  { label: 'Email', href: 'mailto:zablonombiri001@gmail.com', Icon: MailIcon },
]

const techBadges = [
  { label: 'Python', delay: '0s', x: '-160px', y: '60px' },
  { label: 'Django', delay: '0.4s', x: '-155px', y: '200px' },
  { label: 'Next.js', delay: '0.8s', x: '-175px', y: '340px' },
  { label: 'Pandas', delay: '1.2s', x: '118px', y: '80px' },
  { label: 'PostgreSQL', delay: '0.6s', x: '108px', y: '220px' },
  { label: 'Power BI', delay: '1.0s', x: '98px', y: '360px' },
  { label: 'REST APIs', delay: '0.2s', x: '-148px', y: '470px' },
  { label: 'SQL', delay: '1.4s', x: '112px', y: '480px' },
]

export default function Hero() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null)

  const handleCopy = (label: string, value: string) => {
    navigator.clipboard?.writeText(value).catch(() => {})
    setCopiedLabel(label)
    setTimeout(() => setCopiedLabel((current) => (current === label ? null : current)), 1800)
  }

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-bg)',
        paddingTop: '80px',
      }}
    >
      {/* Ambient orbs */}
      <div
        className="animate-orb"
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-80px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(15,90,71,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197,154,90,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'orb-float 16s ease-in-out infinite reverse',
        }}
      />

      <div className="bg-diagonal" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div
        className="hero-columns"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '60px 32px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* Left: Social rail + text content */}
        <div className="hero-left-row" style={{ display: 'flex', gap: '28px', alignItems: 'flex-start' }}>
          <div className="hero-social-rail" style={{ display: 'flex', flexDirection: 'column', gap: '18px', paddingTop: '8px' }}>
            {socialLinks.map(({ label, href, copyValue, Icon }) => {
              const iconStyle = {
                color: 'var(--color-text-secondary)',
                display: 'flex',
                transition: 'color 0.2s ease, transform 0.2s ease',
              } as const
              const handleEnter = (e: MouseEvent<HTMLElement>) => {
                e.currentTarget.style.color = '#0F5A47'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }
              const handleLeave = (e: MouseEvent<HTMLElement>) => {
                e.currentTarget.style.color = 'var(--color-text-secondary)'
                e.currentTarget.style.transform = 'none'
              }

              if (copyValue) {
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => handleCopy(label, copyValue)}
                    aria-label={`${label}: ${copyValue} (click to copy)`}
                    title={copiedLabel === label ? 'Copied!' : `Copy ${label} username`}
                    style={{ ...iconStyle, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                  >
                    <Icon size={19} />
                  </button>
                )
              }

              return (
                <a
                  key={label}
                  href={href}
                  target={href?.startsWith('mailto') ? undefined : '_blank'}
                  rel={href?.startsWith('mailto') ? undefined : 'noreferrer'}
                  aria-label={label}
                  style={iconStyle}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                >
                  <Icon size={19} />
                </a>
              )
            })}
            <span className="hero-social-line" style={{ width: '1px', flex: 1, minHeight: '32px', background: 'rgba(15,90,71,0.15)', margin: '4px auto 0' }} />
          </div>

        <div className="hero-text-col" style={{ maxWidth: '620px' }}>
          {/* Headline */}
          <h1
            className="animate-fade-up delay-100"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
              marginBottom: '24px',
            }}
          >
            Zablon Zambagarrah
            <br />
            <em style={{ fontStyle: 'italic', color: '#0F5A47' }}>Data Analyst</em> & Software
            <br />
            Developer Building Practical Tools.
          </h1>

          {/* Role tags */}
          <div
            className="animate-fade-up delay-200"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '28px',
            }}
          >
            {['Data Analyst', 'Software Developer', 'Django Specialist', 'Frontend Developer'].map((role) => (
              <span
                key={role}
                style={{
                  padding: '4px 12px',
                  borderRadius: '4px',
                  background: 'transparent',
                  border: '1px solid rgba(15,90,71,0.2)',
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {role}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            className="animate-fade-up delay-300"
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: 'var(--color-text-secondary)',
              marginBottom: '44px',
              maxWidth: '520px',
            }}
          >
            Zablon Zambagarrah is a Data Analyst and Software Developer based in Mombasa,
            Kenya, turning messy datasets into clear insight and building secure, scalable
            web applications with Python, Django, and Next.js. He focuses on practical
            technology, from data dashboards to production-ready APIs, that actually
            solves problems for people and businesses.
          </p>

          {/* CTA buttons */}
          <div
            className="animate-fade-up delay-400"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '52px' }}
          >
            <a
              href="#projects"
              style={{
                padding: '13px 28px',
                borderRadius: '100px',
                background: '#0F5A47',
                color: '#fff',
                fontSize: '0.88rem',
                fontWeight: 600,
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'all 0.25s ease',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = '#123F35'
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 8px 24px rgba(15,90,71,0.3)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = '#0F5A47'
                el.style.transform = 'none'
                el.style.boxShadow = 'none'
              }}
            >
              View Projects
            </a>
            <a
              href="mailto:zablonombiri001@gmail.com"
              style={{
                padding: '13px 28px',
                borderRadius: '100px',
                background: 'transparent',
                color: 'var(--color-text-primary)',
                fontSize: '0.88rem',
                fontWeight: 600,
                textDecoration: 'none',
                letterSpacing: '0.01em',
                border: '1.5px solid rgba(15,90,71,0.2)',
                transition: 'all 0.25s ease',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = '#0F5A47'
                el.style.color = '#0F5A47'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(15,90,71,0.2)'
                el.style.color = 'var(--color-text-primary)'
                el.style.transform = 'none'
              }}
            >
              Get in Touch
            </a>
          </div>

          {/* Stats row */}
          <div
            className="animate-fade-up delay-500"
            style={{
              display: 'flex',
              gap: '40px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(15,90,71,0.08)',
            }}
          >
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '15+', label: 'Projects Completed' },
              { value: '24/7', label: 'Online Support' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.8rem',
                    fontWeight: 600,
                    color: '#0F5A47',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 500, letterSpacing: '0.04em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>

        {/* Right: Portrait + floating badges */}
        <div
          className="animate-fade-in delay-200 hero-portrait-col"
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          <div className="hero-globe-wrap" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0, pointerEvents: 'none' }}>
            <Globe />
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* Decorative frame */}
            <div
              style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '28px',
                border: '1px solid rgba(15,90,71,0.12)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '-24px',
                left: '-24px',
                right: '24px',
                bottom: '24px',
                borderRadius: '28px',
                background: 'rgba(15,90,71,0.04)',
                border: '1px solid rgba(15,90,71,0.06)',
              }}
            />

            <img
              src={zablonPhoto}
              alt="Zablon Zambagarrah, Data Analyst & Software Developer"
              className="hero-portrait-blob"
              style={{
                width: '340px',
                height: '440px',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                position: 'relative',
                zIndex: 1,
                border: '1px solid rgba(15,90,71,0.12)',
                boxShadow: 'inset 0 0 0 10px rgba(255,255,255,0.35), 0 32px 80px rgba(15,90,71,0.18), 0 8px 24px rgba(0,0,0,0.08)',
              }}
            />
          </div>

          {/* Floating tech badges */}
          {techBadges.map((badge) => (
            <div
              key={badge.label}
              className="animate-badge-float"
              style={{
                position: 'absolute',
                left: `calc(50% + ${badge.x})`,
                top: badge.y,
                animationDelay: badge.delay,
                animationDuration: `${3 + parseFloat(badge.delay) * 0.5}s`,
                zIndex: 3,
              }}
            >
              <div
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(15,90,71,0.12)',
                  boxShadow: '0 4px 16px rgba(15,90,71,0.08)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: '#0F5A47',
                  whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.02em',
                }}
              >
                {badge.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.14em', color: 'var(--color-text-muted)', fontWeight: 500, textTransform: 'uppercase' }}>
          Scroll Down
        </span>
        <div
          className="animate-badge-float"
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            border: '1px solid rgba(15,90,71,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0F5A47',
          }}
        >
          <ChevronDownIcon size={14} />
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0% { box-shadow: 0 0 0 0 rgba(15,90,71,0.4); }
          70% { box-shadow: 0 0 0 8px rgba(15,90,71,0); }
          100% { box-shadow: 0 0 0 0 rgba(15,90,71,0); }
        }

        @keyframes blob-morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        .hero-portrait-blob {
          animation: blob-morph 8s ease-in-out infinite;
        }

        .hero-globe-wrap {
          width: 1120px;
          height: 1120px;
        }

        @media (max-width: 1024px) {
          .hero-columns { grid-template-columns: 1fr !important; gap: 60px !important; }
          .hero-portrait-col {
            display: flex !important;
            justify-content: center;
            order: -1;
          }
          .hero-portrait-col img {
            width: 280px !important;
            height: 360px !important;
          }
          .hero-portrait-col .animate-badge-float {
            display: none !important;
          }
          .hero-globe-wrap {
            width: 920px;
            height: 920px;
          }
        }
        
        @media (max-width: 768px) {
          .hero-portrait-col img {
            width: 240px !important;
            height: 310px !important;
          }
          #home { padding-top: 60px !important; }
          .hero-globe-wrap {
            width: 760px;
            height: 760px;
          }
        }
        
        @media (max-width: 640px) {
          .hero-portrait-col {
            margin-top: 20px;
          }
          .hero-portrait-col img {
            width: 200px !important;
            height: 260px !important;
          }
          .hero-globe-wrap {
            width: 600px;
            height: 600px;
          }
          .hero-left-row { flex-direction: column-reverse !important; gap: 16px !important; }
          .hero-social-rail {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            padding-top: 0 !important;
          }
          .hero-social-rail .hero-social-line { display: none !important; }
          .hero-text-col { max-width: 100% !important; }
          #home h1 { font-size: clamp(1.8rem, 4vw, 2.8rem) !important; }
          .animate-fade-up { animation-delay: 0s !important; }
        }
      `}</style>
    </section>
  )
}
