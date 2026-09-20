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
  default: "I'm Zablon Ombiri's AI assistant. Ask me anything about his projects, work experience, skills, or how to get in touch.",

  about: "Zablon Ombiri is a Data Analyst and Software Developer based in Mombasa, Kenya. He specializes in Python, Django, React, and SQL-based data analysis — turning raw data into actionable insight and building secure, scalable, user-friendly applications.",

  projects: "Zablon has built several real-world projects: a Django REST API for inventory management with JWT authentication, an interactive sales data dashboard using Pandas and Power BI, and a fullstack e-commerce storefront with React, Django, and MongoDB.",

  inventory: "The Inventory Management System is a secure backend built with Django REST Framework — featuring JWT authentication, role-based permissions, and a PostgreSQL data layer for tracking products, categories, and stock movements through a clean REST API.",

  dashboard: "The Sales Data Dashboard cleans raw sales exports with Pandas — deduplicating records, normalizing dates, and handling missing values — then visualizes trends and KPIs in Power BI so stakeholders can self-serve answers instead of digging through spreadsheets.",

  ecommerce: "The E-commerce Storefront pairs a React frontend with a Django backend and a MongoDB product catalog. EmailJS handles order confirmation emails directly from the client, keeping the stack lightweight while still confirming orders reliably.",

  skills: "Zablon's technical stack: Django (advanced), Python, React JS, JavaScript, CSS3, PostgreSQL, MySQL, MongoDB, SQL, Pandas, NumPy, Power BI, Excel, Bootstrap, Git, and Next.js. He works across backend APIs, frontend interfaces, and data analysis.",

  experience: "Zablon is currently a Product Designer at AFGT (2022–Present) and a freelance UX Designer on UpWork (2022–Present). From 2023–2024 he worked as a Web Developer at Designer Hub, building and maintaining client websites with HTML, CSS, JavaScript, and React.",

  contact: "You can reach Zablon at: Email — zablonombiri001@gmail.com | WhatsApp — +254 705 959 986 | Location — Mombasa, Kenya (remote friendly). He's open to freelance projects, junior developer roles, and data analysis contracts.",

  education: "Zablon is studying Web Design and Development at the Technical University of Mombasa (TUM), with coursework spanning frontend fundamentals, databases, and software engineering practices.",

  opportunities: "Yes! Zablon is actively open to freelance projects, junior software/data roles, and collaborations. He's based in Mombasa but works remotely with clients worldwide. Contact him at zablonombiri001@gmail.com.",
}

function getResponse(input: string): string {
  const lower = input.toLowerCase()
  if (lower.includes('inventory') || lower.includes('django rest') || lower.includes('stock')) return KNOWLEDGE.inventory
  if (lower.includes('dashboard') || lower.includes('sales data') || lower.includes('power bi') || lower.includes('pandas')) return KNOWLEDGE.dashboard
  if (lower.includes('e-commerce') || lower.includes('ecommerce') || lower.includes('storefront') || lower.includes('mongodb')) return KNOWLEDGE.ecommerce
  if (lower.includes('project') || lower.includes('build') || lower.includes('work') || lower.includes('portfolio')) return KNOWLEDGE.projects
  if (lower.includes('skill') || lower.includes('tech') || lower.includes('python') || lower.includes('django') || lower.includes('stack')) return KNOWLEDGE.skills
  if (lower.includes('experience') || lower.includes('designer') || lower.includes('upwork') || lower.includes('afgt')) return KNOWLEDGE.experience
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
    const userText = `"${preview}" — ${question}`
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
        background: '#FFFFFF',
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
          background: 'rgba(248,248,244,0.8)',
        }}
      >
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <img
            src={zablonPhoto}
            alt="Zablon Ombiri"
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
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#15231E' }}>Zablon's AI</div>
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
              color: '#55635D',
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
                background: msg.role === 'user' ? '#0F5A47' : '#F8F8F4',
                color: msg.role === 'user' ? '#fff' : '#15231E',
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
                background: '#F8F8F4',
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
                    background: '#8A948F',
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
            background: '#F8F8F4',
            fontSize: '0.84rem',
            color: '#15231E',
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
            color: input.trim() ? '#fff' : '#8A948F',
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
