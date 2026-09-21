const experiences = [
  {
    period: 'May 2025 – May 2026',
    title: 'Software Engineer & Programming Educator',
    company: 'Swahilipot Hub Foundation',
    location: 'Mombasa, Kenya',
    type: 'On-site',
    highlights: [
      'Designed and delivered structured curricula in Python, JavaScript, and Data Structures & Algorithms to 30+ learners.',
      'Ran one-to-one debugging sessions and code reviews, building a habit of reading unfamiliar code and making sense of it before suggesting changes.',
      'Contributed to collaborative backend projects with Django and Python, maintaining version control discipline with Git and GitHub across a team.',
    ],
    technologies: ['Python', 'JavaScript', 'Data Structures & Algorithms', 'Django', 'Git'],
    current: false,
  },
  {
    period: 'Jan 2024 – Present',
    title: 'Backend Developer & Data Engineer',
    company: 'ByteForge Devs',
    location: 'Nakuru, Kenya',
    type: 'Hybrid',
    highlights: [
      'Built and maintained backend systems for production web applications using Django and RESTful APIs, taking features from brief through build, review, and deployment.',
      'Designed and consumed REST APIs and third-party service integrations in production, handling authentication flows, pagination, and incremental syncs with real error handling.',
      'Built data pipelines and validation scripts in Python processing 10,000+ records daily, owning quality checks end to end from ingestion through to output.',
      'Investigated and resolved live application and integration errors by tracing issues through the stack to the actual cause.',
      'Worked in Git-based team workflows with CI/CD pipelines, code review, and internal standards across multiple concurrent projects.',
      'Optimised PostgreSQL queries and schema design, improving dashboard performance by 30%.',
    ],
    technologies: ['Python', 'Django', 'REST APIs', 'PostgreSQL', 'CI/CD', 'Git'],
    current: true,
  },
  {
    period: '2022 – Present',
    title: 'Product Designer',
    company: 'AFGT',
    location: 'Mombasa, Kenya',
    type: 'Part-time',
    highlights: [
      'Designed product experiences and interfaces for internal and client-facing tools.',
      'Collaborated closely with engineering to translate research and wireframes into shipped features.',
      'Ran usability reviews and iterated on flows based on user feedback and analytics.',
      'Maintained a consistent design system across web and mobile touchpoints.',
    ],
    technologies: ['Figma', 'UI/UX', 'Design Systems', 'Prototyping', 'User Research'],
    current: false,
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: '120px 0', background: 'var(--color-bg)', position: 'relative' }}
    >
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: '72px' }}>
          <p className="section-eyebrow" style={{ marginBottom: '16px' }}>Experience</p>
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
            Designing, building, and
            <br />
            <em style={{ fontStyle: 'italic', color: '#0F5A47' }}>shipping products.</em>
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Central timeline line */}
          <div
            className="timeline-line-vertical"
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '1.5px',
              background: 'linear-gradient(to bottom, #0F5A47, rgba(15,90,71,0.05))',
              transform: 'translateX(-50%)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {experiences.map((exp, i) => {
              const infoFirst = i % 2 === 0
              return (
                <div
                  key={i}
                  className="timeline-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 40px 1fr',
                    gap: '0',
                    alignItems: 'start',
                  }}
                >
                  <div
                    className="timeline-info"
                    style={{
                      order: infoFirst ? 0 : 2,
                      textAlign: infoFirst ? 'right' : 'left',
                      paddingRight: infoFirst ? '40px' : 0,
                      paddingLeft: infoFirst ? 0 : '40px',
                      paddingTop: '4px',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#0F5A47', letterSpacing: '0.08em', fontWeight: 500, marginBottom: '6px' }}>
                      {exp.period}
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '2px' }}>{exp.title}</div>
                    <div style={{ fontSize: '0.82rem', color: '#0F5A47', fontWeight: 600 }}>{exp.company}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>{exp.location}</div>
                    <div
                      style={{
                        display: 'inline-block',
                        marginTop: '6px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: 'rgba(15,90,71,0.07)',
                        fontSize: '0.62rem',
                        color: '#0F5A47',
                        fontWeight: 600,
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {exp.type}
                    </div>
                  </div>

                  <div className="timeline-dot-wrap" style={{ order: 1, display: 'flex', justifyContent: 'center', paddingTop: '6px' }}>
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: exp.current ? '#0F5A47' : 'var(--color-surface)',
                        border: `2px solid ${exp.current ? '#0F5A47' : 'rgba(15,90,71,0.25)'}`,
                        boxShadow: exp.current ? '0 0 0 4px rgba(15,90,71,0.15)' : 'none',
                        position: 'relative',
                        zIndex: 1,
                        flexShrink: 0,
                      }}
                    />
                  </div>

                  <div
                    className="timeline-card-wrap"
                    style={{
                      order: infoFirst ? 2 : 0,
                      paddingLeft: infoFirst ? '40px' : 0,
                      paddingRight: infoFirst ? 0 : '40px',
                    }}
                  >
                    <div
                      className="card-hover"
                      style={{
                        padding: '28px 32px',
                        borderRadius: '20px',
                        background: 'var(--color-surface)',
                        border: '1px solid rgba(15,90,71,0.08)',
                        boxShadow: '0 4px 20px rgba(15,90,71,0.05)',
                      }}
                    >
                      {exp.current && (
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 10px', borderRadius: '100px', background: 'rgba(46,139,87,0.1)', marginBottom: '16px' }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#2E8B57', display: 'inline-block' }} />
                          <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#2E8B57', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Current</span>
                        </div>
                      )}
                      <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                        {exp.highlights.map((h, j) => (
                          <li key={j} style={{ display: 'flex', gap: '10px', fontSize: '0.84rem', lineHeight: 1.65, color: 'var(--color-text-secondary)' }}>
                            <span style={{ color: '#0F5A47', flexShrink: 0, marginTop: '1px' }}>•</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '16px', borderTop: '1px solid rgba(15,90,71,0.06)' }}>
                        {exp.technologies.map((t) => (
                          <span key={t} style={{ padding: '3px 10px', borderRadius: '5px', background: 'rgba(15,90,71,0.05)', border: '1px solid rgba(15,90,71,0.1)', fontSize: '0.68rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .timeline-line-vertical {
            display: none !important;
          }
          .timeline-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .timeline-dot-wrap {
            display: none !important;
          }
          .timeline-info {
            order: 0 !important;
            text-align: left !important;
            padding: 0 !important;
          }
          .timeline-card-wrap {
            order: 1 !important;
            padding: 0 !important;
          }
        }

        @media (max-width: 640px) {
          .timeline-row {
            gap: 12px !important;
          }
          .timeline-card-wrap .card-hover {
            padding: 20px 24px !important;
          }
          .timeline-card-wrap .card-hover ul {
            gap: 8px !important;
          }
          .timeline-card-wrap .card-hover li {
            font-size: 0.78rem !important;
          }
          .timeline-card-wrap .card-hover > div:last-child {
            gap: 4px !important;
          }
          .timeline-card-wrap .card-hover > div:last-child span {
            padding: 2px 8px !important;
            font-size: 0.65rem !important;
          }
        }
      `}</style>
    </section>
  )
}
