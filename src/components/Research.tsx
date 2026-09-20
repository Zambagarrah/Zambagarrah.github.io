const techInterests = [
  {
    title: 'Research details coming soon',
    area: 'Placeholder · To Be Updated',
    description:
      'This section is reserved for Zablon\'s research interests and deep-dive write-ups. Details will be added once provided.',
    tags: ['Coming Soon'],
    icon: '◎',
    color: '#0F5A47',
    bg: 'rgba(15,90,71,0.05)',
    status: 'Draft',
  },
]

const hackathons: { name: string; org: string; year: string; outcome: string }[] = []

export default function Research() {
  return (
    <section
      id="research"
      style={{ padding: '120px 0', background: 'var(--color-bg)', position: 'relative' }}
    >
      <div className="bg-diagonal" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: '72px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <p className="section-eyebrow" style={{ marginBottom: '16px' }}>Focus Areas</p>
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
              What I'm exploring
              <br />
              <em style={{ fontStyle: 'italic', color: '#0F5A47' }}>and building next.</em>
            </h2>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', maxWidth: '280px', lineHeight: 1.65 }}>
            Areas of deep interest, where curiosity meets hands-on building.
          </p>
        </div>

        {/* Interest cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginBottom: '64px' }}>
          {techInterests.map((item, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                padding: '36px 40px',
                borderRadius: '20px',
                background: 'var(--color-surface)',
                border: '1px solid rgba(15,90,71,0.08)',
                boxShadow: '0 4px 20px rgba(15,90,71,0.04)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: item.bg,
                    border: `1px solid ${item.color}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>
                <span
                  style={{
                    padding: '3px 10px',
                    borderRadius: '100px',
                    background: 'rgba(46,139,87,0.1)',
                    color: '#2E8B57',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {item.status}
                </span>
              </div>

              <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: item.color, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
                {item.area}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.3,
                  marginBottom: '14px',
                  letterSpacing: '-0.01em',
                }}
              >
                {item.title}
              </h3>

              <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
                {item.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '3px 10px',
                      borderRadius: '5px',
                      background: item.bg,
                      border: `1px solid ${item.color}18`,
                      fontSize: '0.68rem',
                      color: item.color,
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hackathons / competitions: populate once details are provided */}
        {hackathons.length > 0 && (
        <div>
          <p className="section-eyebrow" style={{ marginBottom: '24px' }}>Hackathons & Competitions</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {hackathons.map((h, i) => (
              <div
                key={i}
                style={{
                  padding: '20px 28px',
                  borderRadius: '14px',
                  background: 'var(--color-surface)',
                  border: '1px solid rgba(15,90,71,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0F5A47', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>{h.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>{h.org} · {h.year}</div>
                  </div>
                </div>
                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: '100px',
                    background: h.outcome === 'Finalist' ? 'rgba(197,154,90,0.1)' : 'rgba(15,90,71,0.07)',
                    color: h.outcome === 'Finalist' ? '#C59A5A' : '#0F5A47',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {h.outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          #research > div > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
