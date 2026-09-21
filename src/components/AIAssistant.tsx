import { useState, useRef, useEffect } from 'react'
import zablonPhoto from '@/imports/zablon_photo.jpg'

type Message = { role: 'assistant' | 'user'; text: string }

const SUGGESTED = [
  'Tell me about Zablon',
  'Explain a project',
  'What are his skills?',
  'How to contact him?',
  'Open to opportunities?',
]

const KNOWLEDGE: Record<string, string> = {
  default: "I'm Zablon Zambagarrah's AI assistant. Ask me anything about his projects, work experience, skills, or how to get in touch.",

  about: "Zablon Zambagarrah is a Data Analyst and Software Developer based in Mombasa, Kenya. He specializes in Python, Django, React, and SQL-based data analysis, turning raw data into actionable insight and building secure, scalable, user-friendly applications.",

  projects: "Zablon has built several real-world projects: ShieldPay Financials, a live fintech web application; a Full-Stack E-Commerce Platform with product listings, cart, and an admin dashboard; an ETL Pipeline Analytics project processing 10,000+ records daily; and a Healthcare Analytics Platform generating predictive insights for hospital administrators.",

  shieldpay: "ShieldPay Financials is a live fintech web application handling user-facing financial flows end to end, built and deployed to production. It features a Django REST backend, an authentication system, and a PostgreSQL data layer connected to a real frontend.",

  ecommerce: "The Full-Stack E-Commerce Platform is a complete online store built from scratch, covering product listings, cart management, user authentication, order processing, and an admin dashboard, with a Django backend and PostgreSQL database.",

  etl: "The ETL Pipeline Analytics project processes 10,000+ records daily with Python data pipelines and validation scripts, owning data quality end to end from ingestion through to output, and improving downstream dashboard performance by 30% through PostgreSQL query and schema optimisation.",

  healthcare: "The Healthcare Analytics Platform is a Python-based data engineering workflow that cleans and validates patient records, uses Scikit-learn to generate predictive insights, and feeds real-time dashboards so hospital administrators can track KPIs.",

  skills: "Zablon's technical stack: Python (strong), JavaScript (strong), TypeScript, SQL and PostgreSQL (advanced), Django, Flask, Node.js, React and Next.js, MySQL, Git/GitHub/GitLab, CI/CD, Docker, Kubernetes, AWS, and Azure Data Factory. He also integrates AI tools like GitHub Copilot and Claude into his daily engineering workflow.",

  experience: "Zablon is a Backend Developer & Data Engineer at ByteForge Devs (Jan 2024–Present), a Software Engineer & Programming Educator at Swahilipot Hub Foundation (May 2025–May 2026), and a Product Designer at AFGT (2022–Present).",

  contact: "You can reach Zablon at: Email, zablonombiri001@gmail.com. WhatsApp, +254 705 959 986. Location, Mombasa, Kenya (remote friendly). He's open to freelance projects, junior developer roles, and data analysis contracts.",

  education: "Zablon is pursuing a BSc. in Mathematics & Computer Science at the Technical University of Mombasa (TUM), with final exams completed and graduation pending. He also holds an Associate's Degree in Data Analysis from DataCamp.",

  opportunities: "Yes! Zablon is actively open to freelance projects, junior software/data roles, and collaborations. He's based in Mombasa but works remotely with clients worldwide. Contact him at zablonombiri001@gmail.com.",
}

function getResponse(input: string): string {
  const lower = input.toLowerCase()
  if (lower.includes('shieldpay') || lower.includes('fintech') || lower.includes('financial')) return KNOWLEDGE.shieldpay
  if (lower.includes('ecommerce') || lower.includes('e-commerce') || lower.includes('store') || lower.includes('cart')) return KNOWLEDGE.ecommerce
  if (lower.includes('etl') || lower.includes('pipeline') || lower.includes('data engineer')) return KNOWLEDGE.etl
  if (lower.includes('healthcare') || lower.includes('hospital') || lower.includes('patient') || lower.includes('scikit')) return KNOWLEDGE.healthcare
  if (lower.includes('project') || lower.includes('build') || lower.includes('work') || lower.includes('portfolio')) return KNOWLEDGE.projects
  if (lower.includes('skill') || lower.includes('tech') || lower.includes('python') || lower.includes('django') || lower.includes('stack')) return KNOWLEDGE.skills
  if (lower.includes('experience') || lower.includes('designer') || lower.includes('byteforge') || lower.includes('swahilipot') || lower.includes('afgt')) return KNOWLEDGE.experience
  if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('whatsapp') || lower.includes('reach')) return KNOWLEDGE.contact
  if (lower.includes('education') || lower.includes('university') || lower.includes('degree') || lower.includes('study') || lower.includes('course')) return KNOWLEDGE.education
  if (lower.includes('hire') || lower.includes('job') || lower.includes('role') || lower.includes('open') || lower.includes('opportunity') || lower.includes('available') || lower.includes('freelance')) return KNOWLEDGE.opportunities
  if (lower.includes('who') || lower.includes('about') || lower.includes('zablon') || lower.includes('background') || lower.includes('tell me')) return KNOWLEDGE.about
  return "That's a good question! For the most accurate answer, you can reach Zablon directly at zablonombiri001@gmail.com or +254 705 959 986. He's always happy to discuss projects, data, or potential collaborations."
}

export default function AIAssistant({
  open,
  onClose,
  onVoiceMode,
  pendingMessage,
  onPendingMessageConsumed,
}: {
  open: boolean
  onClose: () => void
  onVoiceMode: () => void
  pendingMessage?: { question: string; context: string } | null
  onPendingMessageConsumed?: () => void
}) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: "Hello. I'm Zablon's AI Assistant. I can answer questions about his projects, work experience, technical skills, and how to get in touch with him.",
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)
  const consumedRef = useRef(false)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  // Inject pending message from selection toolbar when chat opens
  useEffect(() => {
    if (!open || !pendingMessage || consumedRef.current) return
    consumedRef.current = true
    const { question, context } = pendingMessage
    const preview = context.length > 80 ? context.slice(0, 80) + '…' : context
    const userText = `"${preview}": ${question}`
    const userMsg: Message = { role: 'user', text: userText }
    setMessages((m) => [...m, userMsg])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      const fullPrompt = `${question} (about: "${context}")`
      setMessages((m) => [...m, { role: 'assistant', text: getResponse(fullPrompt) }])
      onPendingMessageConsumed?.()
    }, 900)
  }, [open, pendingMessage, onPendingMessageConsumed])

  // Reset consumed flag when a new pending message arrives
  useEffect(() => {
    if (pendingMessage) consumedRef.current = false
  }, [pendingMessage])

  const send = (text: string) => {
    if (!text.trim()) return
    const userMsg: Message = { role: 'user', text }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { role: 'assistant', text: getResponse(text) }])
    }, 900 + Math.random() * 500)
  }

  if (!open) return null

  return (
    <div
      className="ai-chat-panel"
      style={{
        position: 'fixed',
        bottom: '88px',
        right: '24px',
        width: '380px',
        maxHeight: '580px',
        borderRadius: '24px',
        background: 'var(--color-surface)',
        border: '1px solid rgba(15,90,71,0.1)',
        boxShadow: '0 24px 80px rgba(15,90,71,0.18), 0 8px 24px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        zIndex: 200,
        animation: 'fade-up 0.3s ease both',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '20px 20px 16px',
          borderBottom: '1px solid rgba(15,90,71,0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: 'rgba(var(--color-bg-rgb),0.8)',
        }}
      >
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <img
            src={zablonPhoto}
            alt="Zablon Zambagarrah"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center top',
              border: '2px solid rgba(15,90,71,0.15)',
            }}
          />
          <span
            style={{
              position: 'absolute',
              bottom: '1px',
              right: '1px',
              width: '9px',
              height: '9px',
              borderRadius: '50%',
              background: '#2E8B57',
              border: '1.5px solid #fff',
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>Zablon's AI</div>
          <div style={{ fontSize: '0.7rem', color: '#2E8B57', fontWeight: 500 }}>● Online · Typically instant</div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={onVoiceMode}
            title="Voice Mode"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              border: '1px solid rgba(15,90,71,0.12)',
              background: 'rgba(15,90,71,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#0F5A47',
              fontSize: '0.9rem',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(15,90,71,0.1)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(15,90,71,0.05)' }}
          >
            🎙
          </button>
          <button
            onClick={onClose}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              border: '1px solid rgba(15,90,71,0.12)',
              background: 'rgba(15,90,71,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--color-text-secondary)',
              fontSize: '1rem',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(15,90,71,0.1)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(15,90,71,0.05)' }}
          >
            ×
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        className="chat-scroll"
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              alignItems: 'flex-end',
              gap: '8px',
            }}
          >
            {msg.role === 'assistant' && (
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: '#0F5A47',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.65rem',
                  color: '#fff',
                  fontWeight: 700,
                }}
              >
                ✦
              </div>
            )}
            <div
              style={{
                maxWidth: '80%',
                padding: '12px 16px',
                borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '4px 16px 16px 16px',
                background: msg.role === 'user' ? '#0F5A47' : 'var(--color-bg)',
                color: msg.role === 'user' ? '#fff' : 'var(--color-text-primary)',
                fontSize: '0.84rem',
                lineHeight: 1.65,
                border: msg.role === 'assistant' ? '1px solid rgba(15,90,71,0.08)' : 'none',
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {typing && (
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: '#0F5A47',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.65rem',
                color: '#fff',
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              ✦
            </div>
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '4px 16px 16px 16px',
                background: 'var(--color-bg)',
                border: '1px solid rgba(15,90,71,0.08)',
                display: 'flex',
                gap: '4px',
                alignItems: 'center',
              }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--color-text-muted)',
                    animation: 'speak-wave 0.9s ease-in-out infinite',
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Suggested prompts */}
      {messages.length <= 1 && (
        <div style={{ padding: '0 12px 12px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {SUGGESTED.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              style={{
                padding: '5px 12px',
                borderRadius: '100px',
                background: 'rgba(15,90,71,0.06)',
                border: '1px solid rgba(15,90,71,0.12)',
                color: '#0F5A47',
                fontSize: '0.72rem',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(15,90,71,0.12)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(15,90,71,0.06)' }}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div
        style={{
          padding: '12px 16px 16px',
          borderTop: '1px solid rgba(15,90,71,0.06)',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          placeholder="Ask anything about Zablon..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') send(input) }}
          style={{
            flex: 1,
            padding: '10px 14px',
            borderRadius: '10px',
            border: '1.5px solid rgba(15,90,71,0.12)',
            background: 'var(--color-bg)',
            fontSize: '0.84rem',
            color: 'var(--color-text-primary)',
            fontFamily: 'var(--font-sans)',
            outline: 'none',
          }}
          onFocus={(e) => { e.target.style.borderColor = '#0F5A47' }}
          onBlur={(e) => { e.target.style.borderColor = 'rgba(15,90,71,0.12)' }}
        />
        <button
          onClick={() => send(input)}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: input.trim() ? '#0F5A47' : 'rgba(15,90,71,0.1)',
            border: 'none',
            cursor: input.trim() ? 'pointer' : 'default',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            color: input.trim() ? '#fff' : 'var(--color-text-muted)',
            fontSize: '0.9rem',
            flexShrink: 0,
          }}
        >
          ↑
        </button>
      </div>
    </div>
  )
}
