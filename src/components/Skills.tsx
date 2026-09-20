const skillGroups = [
  {
    category: 'Backend Development',
    icon: '◎',
    color: '#0F5A47',
    bg: 'rgba(15,90,71,0.05)',
    skills: [
      { name: 'Django', level: 90, note: 'Advanced — REST APIs, ORM, auth' },
      { name: 'Python', level: 70, note: 'Intermediate — scripting, backend logic' },
      { name: 'Next.js', level: 50, note: 'Basic — SSR fundamentals' },
      { name: 'MongoDB', level: 70, note: 'Intermediate — schema design, queries' },
      { name: 'PostgreSQL', level: 70, note: 'Intermediate — relational data modeling' },
      { name: 'MySQL', level: 70, note: 'Intermediate — queries, joins, indexing' },
    ],
  },
  {
    category: 'Frontend Development',
    icon: '△',
    color: '#B86A4A',
    bg: 'rgba(184,106,74,0.05)',
    skills: [
      { name: 'CSS3', level: 90, note: 'Advanced — layouts, responsive design' },
      { name: 'React JS', level: 70, note: 'Intermediate — components, hooks' },
      { name: 'JavaScript', level: 70, note: 'Intermediate — DOM, async, ES6+' },
      { name: 'Bootstrap', level: 70, note: 'Intermediate — rapid UI scaffolding' },
      { name: 'Git', level: 70, note: 'Intermediate — version control workflows' },
      { name: 'HTML5', level: 50, note: 'Basic — semantic markup' },
    ],
  },
  {
    category: 'Data Analysis',
    icon: '◇',
    color: '#C59A5A',
    bg: 'rgba(197,154,90,0.05)',
    skills: [
      { name: 'Python (Pandas/NumPy)', level: 90, note: 'Advanced — cleaning, transforming data' },
      { name: 'SQL', level: 70, note: 'Intermediate — queries, aggregation' },
      { name: 'Excel', level: 70, note: 'Intermediate — reporting, pivot tables' },
      { name: 'Power BI', level: 50, note: 'Basic — dashboards & visualization' },
      { name: 'Pandas', level: 70, note: 'Intermediate — data wrangling' },
      { name: 'NumPy', level: 70, note: 'Intermediate — numerical computing' },
    ],
  },
]

const highlights = [
  { icon: '◉', label: '3+ Years Experience', desc: 'Working across data analysis and full-stack software development.' },
  { icon: '◎', label: '15+ Projects Completed', desc: 'Delivered client and personal projects spanning web, data, and design.' },
  { icon: '△', label: 'Django Specialist', desc: 'Building secure, scalable backends with Django REST Framework.' },
  { icon: '◇', label: 'Full-Stack Builder', desc: 'End-to-end ownership from database schema to polished React UI.' },
  { icon: '⬡', label: 'Data-Driven Thinking', desc: 'Turning raw datasets into dashboards and actionable insight.' },
  { icon: '✦', label: 'Online 24/7', desc: 'Responsive support and communication for clients and collaborators.' },
]

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: '120px 0', background: '#FFFFFF', position: 'relative' }}
    >
      <div className="bg-diagonal" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.4 }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: '72px' }}>
          <p className="section-eyebrow" style={{ marginBottom: '16px' }}>Capabilities</p>
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
            Skills built through
            <br />
            <em style={{ fontStyle: 'italic', color: '#0F5A47' }}>shipping real projects.</em>
          </h2>
        </div>

        {/* Skill groups */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '80px',
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="card-hover"
              style={{
                padding: '36px 32px',
                borderRadius: '24px',
                background: '#FFFFFF',
                border: '1px solid rgba(15,90,71,0.08)',
                boxShadow: '0 4px 24px rgba(15,90,71,0.05)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: group.bg,
                    border: `1px solid ${group.color}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    color: group.color,
                  }}
                >
                  {group.icon}
                </div>
                <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#15231E', lineHeight: 1.3 }}>
                  {group.category}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                      <div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#15231E' }}>{skill.name}</div>
                        <div style={{ fontSize: '0.65rem', color: '#8A948F', fontFamily: 'var(--font-mono)', marginTop: '1px' }}>{skill.note}</div>
                      </div>
                      <span style={{ fontSize: '0.68rem', fontWeight: 700, color: group.color, fontFamily: 'var(--font-mono)' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div style={{ height: '3px', borderRadius: '2px', background: 'rgba(15,90,71,0.08)', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          borderRadius: '2px',
                          background: `linear-gradient(90deg, ${group.color}, ${group.color}88)`,
                          width: `${skill.level}%`,
                          transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements / highlights */}
        <div>
          <p className="section-eyebrow" style={{ marginBottom: '32px' }}>Achievements</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {highlights.map((h) => (
              <div
                key={h.label}
                className="card-hover"
                style={{
                  padding: '24px 28px',
                  borderRadius: '16px',
                  background: '#F8F8F4',
                  border: '1px solid rgba(15,90,71,0.08)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(15,90,71,0.07)',
                    border: '1.5px solid rgba(15,90,71,0.12)',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0F5A47',
                    fontSize: '0.85rem',
                  }}
                >
                  {h.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#15231E', lineHeight: 1.3, marginBottom: '4px' }}>
                    {h.label}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#8A948F', lineHeight: 1.55 }}>
                    {h.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #skills > div > div:nth-child(2) { 
            grid-template-columns: repeat(2, 1fr) !important; 
          }
        }
        
        @media (max-width: 900px) {
          #skills > div > div:nth-child(2) { 
            grid-template-columns: 1fr !important; 
          }
          #skills > div > div:nth-child(4) { 
            grid-template-columns: 1fr 1fr !important; 
          }
        }
        
        @media (max-width: 768px) {
          #skills > div > div:nth-child(2) {
            gap: 20px !important;
          }
          #skills > div > div:nth-child(2) > div {
            padding: 28px 24px !important;
          }
          #skills > div > div:nth-child(4) {
            gap: 12px !important;
            grid-template-columns: 1fr !important;
          }
          #skills > div > div:nth-child(4) > div {
            padding: 20px 24px !important;
            gap: 12px !important;
          }
        }
        
        @media (max-width: 640px) {
          #skills > div > div:nth-child(2) > div {
            padding: 24px 20px !important;
          }
          #skills > div > div:nth-child(2) > div > div:nth-child(1) {
            margin-bottom: 20px !important;
          }
          #skills > div > div:nth-child(2) > div > div:nth-child(2) {
            gap: 16px !important;
          }
          #skills > div > div:nth-child(4) > div {
            padding: 16px 20px !important;
          }
          #skills > div > div:nth-child(4) > div > div:nth-child(1) {
            width: 30px !important;
            height: 30px !important;
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  )
}
