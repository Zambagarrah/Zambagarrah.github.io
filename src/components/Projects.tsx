import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Django REST API — Inventory Management System',
    category: 'Backend · REST APIs · PostgreSQL',
    year: '2024',
    status: 'Completed',
    description:
      'A secure backend built with Django REST Framework featuring token authentication, role-based permissions, and a PostgreSQL data layer for tracking stock across an inventory system.',
    problem:
      'Small businesses often manage stock in spreadsheets, leading to stockouts, duplicate entries, and no audit trail of who changed what.',
    architecture:
      'Django REST Framework backend with JWT authentication and role-based permissions (admin, staff). PostgreSQL models for products, categories, and stock movements, with serializers and viewsets exposing a clean REST API consumed by a frontend client.',
    metrics: [
      { label: 'Framework', value: 'DRF' },
      { label: 'Database', value: 'PostgreSQL' },
      { label: 'Auth', value: 'JWT' },
      { label: 'API', value: 'REST' },
    ],
    stack: ['Django', 'DRF', 'PostgreSQL', 'JWT', 'Python'],
    color: '#0F5A47',
    accent: 'rgba(15,90,71,0.06)',
    gradient: 'linear-gradient(135deg, rgba(15,90,71,0.08) 0%, rgba(46,139,87,0.04) 100%)',
    aiExplanation: 'The API separates concerns cleanly: models define the stock schema, serializers validate and shape data, and viewsets expose CRUD endpoints with role checks applied at the permission-class level. JWT tokens keep the API stateless, so it scales horizontally without shared session storage, while granular permissions ensure staff accounts can update stock without touching admin-only settings.',
  },
  {
    id: 2,
    title: 'Sales Data Dashboard',
    category: 'Data Analysis · Visualization · SQL',
    year: '2024',
    status: 'Completed',
    description:
      'An interactive analytics dashboard that cleans raw sales data with Pandas and visualizes trends and KPIs for stakeholders, turning spreadsheets into decision-ready reports.',
    problem:
      'Sales teams collect data across multiple spreadsheets with inconsistent formatting, making it hard to spot trends or answer basic questions about performance quickly.',
    architecture:
      'Raw exports are ingested and cleaned with Pandas — deduplicating records, normalizing date formats, and handling missing values. Cleaned data is queried with SQL and visualized in Power BI dashboards covering revenue trends, top products, and regional performance.',
    metrics: [
      { label: 'Tooling', value: 'Pandas' },
      { label: 'Storage', value: 'SQL' },
      { label: 'Dashboards', value: 'Power BI' },
      { label: 'Output', value: 'KPIs' },
    ],
    stack: ['Python', 'Pandas', 'Power BI', 'SQL'],
    color: '#B86A4A',
    accent: 'rgba(184,106,74,0.06)',
    gradient: 'linear-gradient(135deg, rgba(184,106,74,0.08) 0%, rgba(197,154,90,0.04) 100%)',
    aiExplanation: 'The cleaning pipeline standardizes messy inputs before any analysis happens — this is where most of the value is created, since garbage data produces garbage dashboards. Aggregation queries roll transactions up into daily/monthly summaries, which Power BI then renders as trend lines and KPI cards, letting stakeholders self-serve answers instead of waiting on ad-hoc spreadsheet requests.',
  },
  {
    id: 3,
    title: 'E-commerce Storefront',
    category: 'Full-Stack · React · Django',
    year: '2024',
    status: 'Completed',
    description:
      'A fullstack e-commerce app with a React frontend, Django backend, MongoDB product catalog, and EmailJS-powered order notifications.',
    problem:
      'Small merchants need an online storefront but off-the-shelf platforms are often too rigid or expensive for a lean product catalog and simple checkout flow.',
    architecture:
      'React frontend for browsing, cart, and checkout, talking to a Django backend that exposes REST endpoints. Product data is stored in MongoDB for flexible catalog schemas, and EmailJS sends order confirmation emails directly from the client without a dedicated mail server.',
    metrics: [
      { label: 'Frontend', value: 'React' },
      { label: 'Backend', value: 'Django' },
      { label: 'Catalog', value: 'MongoDB' },
      { label: 'Notify', value: 'EmailJS' },
    ],
    stack: ['React', 'Django', 'MongoDB', 'REST API', 'EmailJS'],
    color: '#C59A5A',
    accent: 'rgba(197,154,90,0.06)',
    gradient: 'linear-gradient(135deg, rgba(197,154,90,0.08) 0%, rgba(184,106,74,0.04) 100%)',
    aiExplanation: 'Using MongoDB for the product catalog allows each product to carry a different set of attributes (size, color, variant) without rigid schema migrations, while the Django backend still enforces business rules like stock checks before checkout. EmailJS offloads transactional email delivery to a managed service, keeping the app lightweight while still confirming orders reliably.',
  },
]

export default function Projects() {
  const [expandedAI, setExpandedAI] = useState<number | null>(null)

  return (
    <section
      id="projects"
      style={{ padding: '120px 0', background: '#FFFFFF', position: 'relative' }}
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
                color: '#15231E',
              }}
            >
              Projects built for
              <br />
              <em style={{ fontStyle: 'italic', color: '#0F5A47' }}>real-world impact.</em>
            </h2>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#8A948F', maxWidth: '280px', lineHeight: 1.65 }}>
            Each project solves a genuine problem — from inventory tracking to sales insight to full storefronts.
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
                background: '#FFFFFF',
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
                      color: '#15231E',
                      marginBottom: '16px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {project.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', lineHeight: 1.75, color: '#55635D', maxWidth: '560px' }}>
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
                  <h4 style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: '#8A948F', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Problem
                  </h4>
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.7, color: '#55635D' }}>{project.problem}</p>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: '#8A948F', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
                    How It Works
                  </h4>
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.7, color: '#55635D' }}>{project.architecture}</p>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: '#8A948F', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
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
                        <div style={{ fontSize: '0.62rem', color: '#8A948F', fontWeight: 500 }}>{m.label}</div>
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
                        color: '#55635D',
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
                      <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: '#55635D' }}>
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
