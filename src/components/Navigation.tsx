import { useState, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'
import { HomeIcon, ExperienceIcon, ProjectsIcon, ResearchIcon, SkillsIcon, ContactIcon, CloseIcon } from './icons'

const navLinks = [
  { label: 'Home', href: '#home', Icon: HomeIcon },
  { label: 'Experience', href: '#experience', Icon: ExperienceIcon },
  { label: 'Projects', href: '#projects', Icon: ProjectsIcon },
  { label: 'Research', href: '#research', Icon: ResearchIcon },
  { label: 'Skills', href: '#skills', Icon: SkillsIcon },
  { label: 'Contact', href: '#contact', Icon: ContactIcon },
]

export default function Navigation({ onOpenAssistant }: { onOpenAssistant: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <>
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s ease',
        borderBottom: scrolled ? '1px solid rgba(15,90,71,0.08)' : '1px solid transparent',
        background: scrolled ? 'rgba(var(--color-bg-rgb),0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
      }}
    >
      <nav
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.2rem',
            fontWeight: 600,
            color: '#0F5A47',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
          onClick={() => handleNav('#home')}
        >
          Zambagarrah.
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="hidden-mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNav(link.href)}
              style={{
                fontSize: '0.82rem',
                fontWeight: 500,
                letterSpacing: '0.01em',
                color: active === link.href ? '#0F5A47' : 'var(--color-text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => { if (active !== link.href) (e.target as HTMLElement).style.color = '#0F5A47' }}
              onMouseLeave={(e) => { if (active !== link.href) (e.target as HTMLElement).style.color = 'var(--color-text-secondary)' }}
            >
              {link.label}
              {active === link.href && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '1.5px',
                    background: '#0F5A47',
                    borderRadius: '1px',
                  }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'rgba(15,90,71,0.06)',
              border: '1px solid rgba(15,90,71,0.1)',
              cursor: 'pointer',
              color: 'var(--color-text-primary)',
              transition: 'all 0.2s ease',
            }}
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            onClick={onOpenAssistant}
            className="hidden-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 16px',
              borderRadius: '100px',
              background: '#0F5A47',
              color: '#fff',
              fontSize: '0.78rem',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.01em',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#123F35' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0F5A47' }}
          >
            <span style={{ width: '6px', height: '6px', background: '#6EE7B7', borderRadius: '50%', display: 'inline-block' }} />
            AI Assistant
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              padding: '4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '1.5px',
                  background: 'var(--color-text-primary)',
                  borderRadius: '1px',
                  transition: 'all 0.3s ease',
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translate(5px, 5px)' : i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'scaleX(0)'
                    : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </nav>
    </header>

      {/* Backdrop */}
      <div
        className="nav-overlay"
        onClick={() => setMenuOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.35)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
          zIndex: 98,
        }}
      />

      {/* Mobile bottom-sheet menu */}
      <div
        className="nav-sheet"
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: menuOpen ? 0 : '-100%',
          background: 'var(--color-bg)',
          borderRadius: '24px 24px 0 0',
          boxShadow: '0 -4px 32px rgba(0,0,0,0.18)',
          padding: '32px 24px 64px',
          transition: 'bottom 0.35s ease',
          zIndex: 99,
        }}
      >
        <div
          style={{
            width: '40px',
            height: '4px',
            borderRadius: '2px',
            background: 'rgba(15,90,71,0.15)',
            margin: '0 auto 24px',
          }}
        />
        <div
          className="nav-sheet-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px 12px',
          }}
        >
          {navLinks.map(({ label, href, Icon }) => (
            <a
              key={href}
              href={href}
              onClick={() => handleNav(href)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                color: active === href ? '#0F5A47' : 'var(--color-text-primary)',
                fontSize: '0.78rem',
                fontWeight: 500,
              }}
            >
              <Icon size={22} />
              {label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position: 'absolute',
            bottom: '18px',
            right: '22px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-secondary)',
            display: 'flex',
          }}
        >
          <CloseIcon size={20} />
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-overlay, .nav-sheet { display: none !important; }
        }
        @media (max-width: 350px) {
          .nav-sheet-grid { gap: 24px 4px; }
        }
      `}</style>
    </>
  )
}
