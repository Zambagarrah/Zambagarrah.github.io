const timeline = [
  {
    year: '2025–2026',
    role: 'Software Engineer & Educator',
    org: 'Swahilipot Hub Foundation, Kenya',
    desc: 'Teaching Python, JavaScript, and Data Structures & Algorithms while contributing to collaborative Django backend projects.',
  },
  {
    year: '2024–Present',
    role: 'Backend Developer & Data Engineer',
    org: 'ByteForge Devs, Kenya',
    desc: 'Building production Django APIs and Python data pipelines, with a focus on real error handling and PostgreSQL performance.',
  },
  {
    year: '2022–Present',
    role: 'Product Designer',
    org: 'AFGT, Kenya',
    desc: 'Designing product experiences and interfaces, working closely with engineering to ship features that balance usability with business goals.',
  },
  {
    year: '2022–Present',
    role: 'BSc. Mathematics & Computer Science',
    org: 'Technical University of Mombasa',
    desc: 'Studying mathematics and computer science, with coursework spanning frontend fundamentals, databases, and software engineering practices.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '120px 0',
        background: 'var(--color-bg)',
        position: 'relative',
      }}
    >
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.6 }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '100px',
            alignItems: 'start',
          }}
        >
          {/* Left: Bio */}
          <div>
            <p className="section-eyebrow" style={{ marginBottom: '16px' }}>About</p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: 'var(--color-text-primary)',
                marginBottom: '32px',
              }}
            >
              Turning data and code
              <br />
              <em style={{ fontStyle: 'italic', color: '#0F5A47' }}>into real solutions.</em>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontSize: '0.97rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
                I'm Zablon Zambagarrah, a Data Analyst and Software Developer based in Mombasa, Kenya.
                By day, I turn messy numbers into neat stories; by night, I craft Python, Django,
                and React into apps so smooth they could butter your toast.
              </p>
              <p style={{ fontSize: '0.97rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
                I've specialized in Python, Django, React, Next.js, and SQL-based data analysis,
                focused on turning raw data into actionable insight and building secure, scalable,
                user-friendly applications. With a strong foundation in cybersecurity and
                performance optimization, I blend analytical thinking with technical expertise.
              </p>
              <p style={{ fontSize: '0.97rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
                Whether I'm querying and visualizing data, building Django REST APIs, refining
                UI animations, or developing solutions in e-commerce and smart education, I'm
                driven by problem-solving and continuous learning.
              </p>
            </div>

            {/* Philosophy cards */}
            <div style={{ marginTop: '44px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { icon: '⬡', label: 'Data-Driven', desc: 'Decisions backed by clean, well-structured data.' },
                { icon: '◎', label: 'Full-Stack Builder', desc: 'From database schema to polished frontend.' },
                { icon: '△', label: 'Security-Minded', desc: 'Applying cybersecurity best practices throughout.' },
                { icon: '◇', label: 'Open to Learn', desc: 'Curious, self-driven, and always improving.' },
              ].map((p) => (
                <div
                  key={p.label}
                  className="card-hover"
                  style={{
                    padding: '20px',
                    borderRadius: '16px',
                    background: 'var(--color-surface)',
                    border: '1px solid rgba(15,90,71,0.08)',
                    boxShadow: '0 2px 12px rgba(15,90,71,0.04)',
                  }}
                >
                  <div style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#0F5A47' }}>{p.icon}</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '4px' }}>{p.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Timeline */}
          <div>
            <p className="section-eyebrow" style={{ marginBottom: '32px' }}>Journey</p>
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '11px',
                  top: '8px',
                  bottom: '8px',
                  width: '1.5px',
                  background: 'linear-gradient(to bottom, #0F5A47, rgba(15,90,71,0.08))',
                  borderRadius: '1px',
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '24px',
                      paddingBottom: i < timeline.length - 1 ? '36px' : 0,
                    }}
                  >
                    <div style={{ position: 'relative', flexShrink: 0, paddingTop: '4px' }}>
                      <div
                        style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: i === 0 ? '#0F5A47' : 'var(--color-surface)',
                          border: `2px solid ${i === 0 ? '#0F5A47' : 'rgba(15,90,71,0.2)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          zIndex: 1,
                        }}
                      >
                        {i === 0 && (
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />
                        )}
                      </div>
                    </div>

                    <div style={{ flex: 1, padding: '4px 20px 4px 0' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          color: '#0F5A47',
                          fontWeight: 500,
                          letterSpacing: '0.08em',
                          marginBottom: '4px',
                        }}
                      >
                        {item.year}
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '2px' }}>
                        {item.role}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#0F5A47', fontWeight: 600, marginBottom: '8px' }}>
                        {item.org}
                      </div>
                      <p style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div
              style={{
                marginTop: '44px',
                padding: '28px',
                borderRadius: '20px',
                background: 'var(--color-surface)',
                border: '1px solid rgba(15,90,71,0.08)',
              }}
            >
              <p className="section-eyebrow" style={{ marginBottom: '16px' }}>Interests</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {[
                  'Data Visualization',
                  'Backend API Design',
                  'Cybersecurity',
                  'E-commerce Systems',
                  'UI/UX & Animation',
                  'Smart Education Tech',
                ].map((interest) => (
                  <span
                    key={interest}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '100px',
                      background: 'rgba(15,90,71,0.06)',
                      border: '1px solid rgba(15,90,71,0.12)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#0F5A47',
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #about > div > div { 
            grid-template-columns: 1fr !important; 
            gap: 50px !important; 
          }
        }
        
        @media (max-width: 768px) {
          #about > div > div {
            gap: 40px !important;
          }
          #about > div > div > div:nth-child(1) > div:nth-child(3) {
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }
        }
        
        @media (max-width: 640px) {
          #about > div > div > div:nth-child(1) > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
          #about > div > div > div:nth-child(2) > div:nth-child(2) {
            display: flex !important;
            flex-direction: column !important;
            gap: 20px !important;
          }
          #about > div > div > div:nth-child(2) > div:nth-child(2) > div {
            gap: 12px !important;
          }
          #about > div > div > div:nth-child(2) > div:nth-child(4) {
            padding: 20px !important;
          }
        }
      `}</style>
    </section>
  )
}
