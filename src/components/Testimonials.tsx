import { useEffect, useState } from 'react'

const testimonials = [
  {
    initials: 'SH',
    name: 'Engineering Lead',
    org: 'Swahilipot Hub Foundation',
    quote:
      'Zablon is a dependable collaborator who explains technical ideas clearly. His Django contributions and teaching sessions consistently raised the quality bar for the whole team.',
  },
  {
    initials: 'BF',
    name: 'Product Manager',
    org: 'ByteForge Devs',
    quote:
      'He turns messy, raw data into clear, actionable dashboards fast, and still takes the time to get the pipeline and query performance right. A genuinely reliable data analyst.',
  },
  {
    initials: 'CL',
    name: 'Freelance Client',
    org: 'Data Analytics Project',
    quote:
      'The dashboard he built turned our raw spreadsheets into something the whole team actually uses daily. Clear communication and delivered on time.',
  },
]

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= breakpoint : false
  )

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [breakpoint])

  return isMobile
}

export default function Testimonials() {
  const isMobile = useIsMobile()
  const perPage = isMobile ? 1 : 2
  const pageCount = Math.ceil(testimonials.length / perPage)
  const [page, setPage] = useState(0)

  useEffect(() => {
    if (page > pageCount - 1) setPage(0)
  }, [pageCount, page])

  const visible = testimonials.slice(page * perPage, page * perPage + perPage)

  return (
    <section
      id="testimonials"
      style={{
        padding: '120px 0',
        background: 'var(--color-muted-surface)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p className="section-eyebrow" style={{ marginBottom: '16px' }}>Testimonials</p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 3vw, 2.8rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
            }}
          >
            What people <em style={{ fontStyle: 'italic', color: '#0F5A47' }}>say about my work.</em>
          </h2>
        </div>

        <div
          className="testimonials-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: perPage === 2 ? '1fr 1fr' : '1fr',
            gap: '24px',
            maxWidth: '900px',
            margin: '0 auto 32px',
          }}
        >
          {visible.map((t) => (
            <div
              key={t.name + t.org}
              className="card-hover"
              style={{
                background: 'var(--color-surface)',
                borderRadius: '20px',
                border: '1px solid rgba(15,90,71,0.08)',
                padding: '32px',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'rgba(15,90,71,0.1)',
                  color: '#0F5A47',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  marginBottom: '20px',
                }}
              >
                {t.initials}
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
                {t.quote}
              </p>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>{t.name}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>{t.org}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to testimonial page ${i + 1}`}
              style={{
                width: i === page ? '22px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                background: i === page ? '#0F5A47' : 'rgba(15,90,71,0.25)',
                transition: 'all 0.25s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
