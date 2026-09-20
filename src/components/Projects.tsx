import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'ShieldPay Financials',
    category: 'Fintech · Full-Stack · PostgreSQL',
    year: '2024',
    status: 'Live',
    description:
      'A live fintech web application handling user-facing financial flows end to end, built and deployed to production at shieldpayfinance.com.',
    problem:
      'Users need a reliable, secure way to manage financial flows online, which means the backend, auth, and data layer all have to hold up under real usage, not just demo conditions.',
    architecture:
      'Django REST backend exposing the API, authentication system, and PostgreSQL data layer, connected to a frontend interface built for real users. Built with reliability and security in mind since the application is in production and publicly accessible.',
    metrics: [
      { label: 'Backend', value: 'Django' },
      { label: 'Database', value: 'PostgreSQL' },
      { label: 'Status', value: 'Live' },
      { label: 'API', value: 'REST' },
    ],
    stack: ['Python', 'Django', 'PostgreSQL', 'JavaScript', 'HTML/CSS', 'REST APIs'],
    color: '#0F5A47',
    accent: 'rgba(15,90,71,0.06)',
    gradient: 'linear-gradient(135deg, rgba(15,90,71,0.08) 0%, rgba(46,139,87,0.04) 100%)',
    aiExplanation: 'The backend separates concerns cleanly: models define the financial schema, serializers validate and shape data, and the authentication layer gates access before any financial flow executes. Because the app is publicly accessible, error handling and validation are treated as first-class concerns rather than an afterthought, and the PostgreSQL layer is designed for data integrity under concurrent use.',
  },
  {
    id: 2,
    title: 'ETL Pipeline Analytics',
    category: 'Data Engineering · Python · PostgreSQL',
    year: '2024',
    status: 'Completed',
    description:
      'Data pipelines and validation scripts built in Python that process 10,000+ records daily, owning data quality end to end from ingestion through to output.',
    problem:
      'Raw data from multiple sources arrives inconsistent and unvalidated, and downstream dashboards and decisions are only as reliable as the pipeline feeding them.',
    architecture:
      'Python scripts ingest raw records, validate and clean them, and load them into PostgreSQL with checks at each stage. Query and schema optimisation improved downstream dashboard performance by 30%, and the pipeline is built to surface errors rather than silently pass bad data through.',
    metrics: [
      { label: 'Volume', value: '10K+/day' },
      { label: 'Language', value: 'Python' },
      { label: 'Storage', value: 'PostgreSQL' },
      { label: 'Perf gain', value: '30%' },
    ],
    stack: ['Python', 'Pandas', 'PostgreSQL', 'SQL'],
    color: '#B86A4A',
    accent: 'rgba(184,106,74,0.06)',
    gradient: 'linear-gradient(135deg, rgba(184,106,74,0.08) 0%, rgba(197,154,90,0.04) 100%)',
    aiExplanation: 'The pipeline standardizes messy inputs before any analysis happens, since garbage data produces garbage dashboards. Validation runs at ingestion so failures are caught early, and query and schema optimisation on PostgreSQL removed bottlenecks that were previously slowing dashboard load times.',
  },
]

export default function Projects() {
  const [expandedAI, setExpandedAI] = useState<number | null>(null)

  return (
    <section
      id="projects"
      style={{ padding: '120px 0', background: 'var(--color-surface)', position: 'relative' }}
    >
      <div className="bg-diagonal" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.5 }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <div style={{ marginBottom: '72px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <p className="section-eyebrow" style={{ marginBottom: '16px' }}>Featured Work</p>
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
              Projects built for
              <br />
              <em style={{ fontStyle: 'italic', color: '#0F5A47' }}>real-world impact.</em>
            </h2>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', maxWidth: '280px', lineHeight: 1.65 }}>
            Each project solves a genuine problem, from live financial systems to reliable data pipelines.
          </p>
        </div>

        {/* Project cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="card-hover"
              style={{
                borderRadius: '24px',
                background: 'var(--color-surface)',
                border: '1px solid rgba(15,90,71,0.08)',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(15,90,71,0.05)',
              }}
            >
              {/* Header bar */}
              <div
                style={{
                  padding: '40px 48px 36px',
                  background: project.gradient,
                  borderBottom: '1px solid rgba(15,90,71,0.06)',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '40px',
                  alignItems: 'start',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 500,
                        color: project.color,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {project.category}
                    </span>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: project.color, opacity: 0.4 }} />
                    <span
                      style={{
                        padding: '2px 10px',
                        borderRadius: '100px',
                        background: 'rgba(46,139,87,0.12)',
                        color: '#2E8B57',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.6rem',
                      fontWeight: 600,
                      lineHeight: 1.2,
                      color: 'var(--color-text-primary)',
                      marginBottom: '16px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {project.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', lineHeight: 1.75, color: 'var(--color-text-secondary)', maxWidth: '560px' }}>
                    {project.description}
                  </p>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '4rem',
                    fontWeight: 700,
                    color: project.color,
                    opacity: 0.12,
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '36px 48px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '48px' }}>
                <div>
                  <h4 style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--color-text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Problem
                  </h4>
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>{project.problem}</p>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--color-text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
                    How It Works
                  </h4>
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>{project.architecture}</p>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--color-text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Key Details
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        style={{
                          padding: '10px 12px',
                          borderRadius: '10px',
                          background: project.accent,
                          border: `1px solid ${project.color}18`,
                        }}
                      >
                        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: project.color, fontFamily: 'var(--font-mono)', lineHeight: 1.2, marginBottom: '2px' }}>
                          {m.value}
                        </div>
                        <div style={{ fontSize: '0.62rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stack + AI button */}
              <div
                style={{
                  padding: '20px 48px 24px',
                  borderTop: '1px solid rgba(15,90,71,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="tech-badge"
                      style={{
                        padding: '4px 12px',
                        borderRadius: '6px',
                        background: 'rgba(15,90,71,0.05)',
                        border: '1px solid rgba(15,90,71,0.1)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: 'var(--color-text-secondary)',
                        fontFamily: 'var(--font-mono)',
                        cursor: 'default',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setExpandedAI(expandedAI === project.id ? null : project.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 18px',
                    borderRadius: '100px',
                    background: expandedAI === project.id ? '#0F5A47' : 'transparent',
                    color: expandedAI === project.id ? '#fff' : '#0F5A47',
                    border: '1.5px solid rgba(15,90,71,0.25)',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    letterSpacing: '0.02em',
                  }}
                >
                  <span>✦</span>
                  {expandedAI === project.id ? 'Hide AI Explanation' : 'AI Explanation'}
                </button>
              </div>

              {/* AI Explanation panel */}
              {expandedAI === project.id && (
                <div
                  style={{
                    padding: '24px 48px 32px',
                    background: 'rgba(15,90,71,0.03)',
                    borderTop: '1px solid rgba(15,90,71,0.06)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '10px',
                        background: '#0F5A47',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontSize: '0.9rem',
                        color: '#fff',
                      }}
                    >
                      ✦
                    </div>
                    <div>
                      <p style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#0F5A47', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                        Technical Deep Dive
                      </p>
                      <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
                        {project.aiExplanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #projects > div > div:nth-child(2) > div { grid-template-columns: 1fr !important; }
        }
        
        @media (max-width: 768px) {
          #projects > div > div:nth-child(2) { gap: 24px !important; }
          #projects > div > div:nth-child(2) > div {
            border-radius: 16px !important;
          }
          #projects > div > div:nth-child(2) > div > div:nth-child(1) {
            padding: 32px 28px 28px !important;
          }
          #projects > div > div:nth-child(2) > div > div:nth-child(2) {
            padding: 24px 28px 32px !important;
          }
        }
        
        @media (max-width: 640px) {
          #projects > div > div:nth-child(2) > div > div:nth-child(1) {
            padding: 24px 20px 20px !important;
            gap: 24px !important;
          }
          #projects > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) {
            display: none;
          }
          #projects > div > div:nth-child(2) > div > div:nth-child(2) {
            padding: 20px 20px 24px !important;
            gap: 12px !important;
          }
          #projects > div > div:nth-child(2) > div > div:nth-child(2) h3 {
            font-size: 1.25rem !important;
          }
          #projects > div > div:nth-child(2) > div > div:nth-child(3) {
            padding: 12px 20px 16px !important;
            gap: 6px !important;
            flex-wrap: wrap !important;
          }
        }
      `}</style>
    </section>
  )
}
