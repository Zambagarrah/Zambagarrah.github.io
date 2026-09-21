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
    liveUrl: 'https://shieldpayfinance.com',
  },
  {
    id: 2,
    title: 'Full-Stack E-Commerce Platform',
    category: 'E-Commerce · Full-Stack · Django',
    year: '2024',
    status: 'Completed',
    description:
      'A complete e-commerce platform built from scratch covering product listings, cart management, user authentication, order processing, and an admin dashboard.',
    problem:
      'An online store needs the catalog, cart, checkout, and admin tools to work together reliably, not just look good individually, otherwise carts get lost and orders break at the worst moment.',
    architecture:
      'Django REST backend and database schema handle products, orders, and auth, wired to a frontend built with real state management and error handling throughout so cart and checkout state stay consistent across the session.',
    metrics: [
      { label: 'Backend', value: 'Django' },
      { label: 'Database', value: 'PostgreSQL' },
      { label: 'Scope', value: 'Full-Stack' },
      { label: 'Source', value: 'GitHub' },
    ],
    stack: ['Python', 'Django', 'PostgreSQL', 'JavaScript', 'HTML/CSS', 'REST APIs', 'Git'],
    color: '#C59A5A',
    accent: 'rgba(197,154,90,0.06)',
    gradient: 'linear-gradient(135deg, rgba(197,154,90,0.08) 0%, rgba(184,106,74,0.04) 100%)',
    aiExplanation: 'The admin dashboard, product catalog, and checkout flow all share the same underlying schema, so state stays consistent from browsing through to order confirmation instead of drifting between the storefront and back office. Cart and order logic handle edge cases like stock changes and failed payments explicitly rather than assuming the happy path.',
    githubUrl: 'https://github.com/Zambagarrah/Full-Stack-E-Commerce-Platform',
  },
  {
    id: 3,
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
    githubUrl: 'https://github.com/Zambagarrah/ETL-Pipeline-Analytics',
    private: true,
  },
  {
    id: 4,
    title: 'Healthcare Analytics Platform',
    category: 'Data Analysis · Python · Scikit-learn',
    year: '2024',
    status: 'Completed',
    description:
      'A Python-based data engineering workflow that processes patient records, applies data validation rules, and generates predictive insights for hospital administrators.',
    problem:
      'Hospital teams need to track KPIs and spot risk patterns in patient data quickly, but raw records are messy and manual review does not scale to real patient volumes.',
    architecture:
      'Python scripts clean and validate incoming patient records, Scikit-learn models generate predictive insights from the cleaned data, and the results feed real-time dashboards so administrators can track KPIs as they change rather than after the fact.',
    metrics: [
      { label: 'Language', value: 'Python' },
      { label: 'ML', value: 'Scikit-learn' },
      { label: 'Storage', value: 'PostgreSQL' },
      { label: 'Output', value: 'Dashboards' },
    ],
    stack: ['Python', 'Pandas', 'Scikit-learn', 'PostgreSQL', 'Matplotlib'],
    color: '#3D6B8C',
    accent: 'rgba(61,107,140,0.06)',
    gradient: 'linear-gradient(135deg, rgba(61,107,140,0.08) 0%, rgba(46,139,87,0.04) 100%)',
    aiExplanation: 'Data validation runs before any model sees the records, since predictions built on unvalidated patient data are worse than no predictions at all. Scikit-learn models turn cleaned records into risk and trend signals, and those signals are surfaced through real-time dashboards so KPI tracking reflects the current state of the data rather than a stale snapshot.',
    githubUrl: 'https://github.com/Zambagarrah/Healthcare-Analytics-Platform',
    private: true,
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
        <div className="projects-cards" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="card-hover project-card"
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
                className="project-header"
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

                  {(project.liveUrl || project.githubUrl) && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '7px 16px',
                            borderRadius: '100px',
                            background: project.color,
                            color: '#fff',
                            fontSize: '0.76rem',
                            fontWeight: 600,
                            textDecoration: 'none',
                            letterSpacing: '0.01em',
                          }}
                        >
                          Live Demo ↗
                        </a>
                      )}
                      {project.githubUrl && !project.private && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '7px 16px',
                            borderRadius: '100px',
                            background: 'transparent',
                            color: project.color,
                            border: `1.5px solid ${project.color}40`,
                            fontSize: '0.76rem',
                            fontWeight: 600,
                            textDecoration: 'none',
                            letterSpacing: '0.01em',
                          }}
                        >
                          View Code ↗
                        </a>
                      )}
                      {project.private && (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '7px 16px',
                            borderRadius: '100px',
                            background: 'rgba(120,120,120,0.08)',
                            color: 'var(--color-text-muted)',
                            border: '1.5px solid rgba(120,120,120,0.15)',
                            fontSize: '0.76rem',
                            fontWeight: 600,
                            letterSpacing: '0.01em',
                          }}
                        >
                          Private repo · in progress
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div
                  className="project-number"
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
              <div className="project-body" style={{ padding: '36px 48px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '48px' }}>
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
                  <div className="project-metrics" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
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
                className="project-footer"
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
          .project-body { grid-template-columns: 1fr !important; }
        }
        
        @media (max-width: 768px) {
          .projects-cards { gap: 24px !important; }
          .project-card {
            border-radius: 16px !important;
          }
          .project-header {
            padding: 32px 28px 28px !important;
          }
          .project-body {
            padding: 24px 28px 32px !important;
          }
        }
        
        @media (max-width: 640px) {
          .project-header {
            padding: 24px 20px 20px !important;
            gap: 24px !important;
          }
          .project-number {
            display: none;
          }
          .project-body {
            padding: 20px 20px 24px !important;
            gap: 12px !important;
          }
          .project-header h3 {
            font-size: 1.25rem !important;
          }
          .project-metrics {
            grid-template-columns: 1fr 1fr !important;
          }
          .project-footer {
            padding: 12px 20px 16px !important;
            gap: 6px !important;
            flex-wrap: wrap !important;
          }
        }

        @media (max-width: 420px) {
          .project-metrics {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
