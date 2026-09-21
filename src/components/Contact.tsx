import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1400)
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    border: '1.5px solid rgba(15,90,71,0.12)',
    background: 'var(--color-bg)',
    fontSize: '0.88rem',
    color: 'var(--color-text-primary)',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box' as const,
  }

  return (
    <section
      id="contact"
      style={{ padding: '120px 0', background: 'var(--color-bg)', position: 'relative' }}
    >
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 32px' }}>
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
        >
          {/* Left */}
          <div>
            <p className="section-eyebrow" style={{ marginBottom: '16px' }}>Get in touch</p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: 'var(--color-text-primary)',
                marginBottom: '24px',
              }}
            >
              Ready to build
              <br />
              <em style={{ fontStyle: 'italic', color: '#0F5A47' }}>something remarkable?</em>
            </h2>

            <p style={{ fontSize: '0.92rem', lineHeight: 1.8, color: 'var(--color-text-secondary)', marginBottom: '44px' }}>
              I'm open to freelance projects, junior developer roles, data analysis
              contracts, and collaborations. If you're looking for someone who can build
              practical, well-crafted software, let's connect.
            </p>

            <div className="contact-methods-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                {
                  icon: '✉',
                  label: 'Email',
                  value: 'zablonombiri001@gmail.com',
                  href: 'mailto:zablonombiri001@gmail.com',
                },
                {
                  icon: '◈',
                  label: 'WhatsApp',
                  value: '+254 705 959 986',
                  href: 'https://api.whatsapp.com/send?phone=254705959986',
                },
                {
                  icon: '◉',
                  label: 'LinkedIn',
                  value: 'Connect on LinkedIn',
                  href: 'https://www.linkedin.com/in/zambagarrah/',
                },
                {
                  icon: '◎',
                  label: 'GitHub',
                  value: 'View my repositories',
                  href: 'https://github.com/Zambagarrah',
                },
                {
                  icon: '△',
                  label: 'Location',
                  value: 'Mombasa, Kenya · Remote friendly',
                  href: undefined,
                },
              ].map((contact) => (
                <div
                  key={contact.label}
                  className="contact-method-item"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    background: 'var(--color-surface)',
                    border: '1px solid rgba(15,90,71,0.08)',
                    textDecoration: 'none',
                    cursor: contact.href ? 'pointer' : 'default',
                    transition: 'all 0.2s ease',
                  }}
                  onClick={() => contact.href && window.open(contact.href, contact.href.startsWith('mailto') || contact.href.startsWith('tel') ? '_self' : '_blank')}
                  onMouseEnter={(e) => {
                    if (contact.href) {
                      e.currentTarget.style.borderColor = '#0F5A47'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(15,90,71,0.1)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (contact.href) {
                      e.currentTarget.style.borderColor = 'rgba(15,90,71,0.08)'
                      e.currentTarget.style.boxShadow = 'none'
                    }
                  }}
                >
                  <div
                    className="contact-method-icon"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(15,90,71,0.07)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0F5A47',
                      fontSize: '0.9rem',
                      flexShrink: 0,
                    }}
                  >
                    {contact.icon}
                  </div>
                  <div>
                    <div className="contact-method-label" style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '2px' }}>
                      {contact.label}
                    </div>
                    <div style={{ fontSize: '0.84rem', color: 'var(--color-text-primary)', fontWeight: 500 }} className="contact-method-value">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {sent ? (
              <div
                style={{
                  padding: '60px 40px',
                  borderRadius: '24px',
                  background: 'var(--color-surface)',
                  border: '1px solid rgba(15,90,71,0.08)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(46,139,87,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    fontSize: '1.5rem',
                    color: '#2E8B57',
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '12px' }}>
                  Message received.
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                  Thank you for reaching out. Zablon will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="contact-form"
                style={{
                  padding: '40px',
                  borderRadius: '24px',
                  background: 'var(--color-surface)',
                  border: '1px solid rgba(15,90,71,0.08)',
                  boxShadow: '0 8px 40px rgba(15,90,71,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '4px' }}>
                  Send a message
                </h3>

                <div className="contact-name-email-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '6px', letterSpacing: '0.04em' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#0F5A47' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(15,90,71,0.12)' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '6px', letterSpacing: '0.04em' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#0F5A47' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(15,90,71,0.12)' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '6px', letterSpacing: '0.04em' }}>
                    Organization (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Company or institution"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = '#0F5A47' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(15,90,71,0.12)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '6px', letterSpacing: '0.04em' }}>
                    Message
                  </label>
                  <textarea
                    required
                    placeholder="Tell me about your project, opportunity, or collaboration idea..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    onFocus={(e) => { e.target.style.borderColor = '#0F5A47' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(15,90,71,0.12)' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: '14px 28px',
                    borderRadius: '12px',
                    background: loading ? 'rgba(15,90,71,0.5)' : '#0F5A47',
                    color: '#fff',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    border: 'none',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.25s ease',
                    letterSpacing: '0.02em',
                  }}
                  onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.background = '#123F35' }}
                  onMouseLeave={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.background = '#0F5A47' }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .contact-grid { 
            grid-template-columns: 1fr !important; 
            gap: 48px !important; 
          }
        }
        
        @media (max-width: 768px) {
          .contact-methods-list {
            gap: 12px !important;
          }
          .contact-method-item {
            padding: 12px 16px !important;
          }
          .contact-form {
            padding: 32px 24px !important;
          }
        }
        
        @media (max-width: 640px) {
          #contact { padding: 80px 0 !important; }
          .contact-methods-list {
            margin-top: 24px !important;
          }
          .contact-method-item {
            gap: 12px !important;
            padding: 12px 12px !important;
          }
          .contact-method-icon {
            min-width: 32px !important;
          }
          .contact-method-label {
            font-size: 0.65rem !important;
          }
          .contact-method-value {
            font-size: 0.78rem !important;
          }
          .contact-form h3 {
            font-size: 1.1rem !important;
          }
          .contact-form {
            padding: 24px 20px !important;
            gap: 16px !important;
          }
          .contact-name-email-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .contact-form textarea {
            min-height: 100px !important;
          }
        }
      `}</style>
    </section>
  )
}
