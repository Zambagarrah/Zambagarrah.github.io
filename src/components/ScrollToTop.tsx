import { useEffect, useState } from 'react'
import { ArrowUpIcon } from './icons'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="scroll-to-top"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        width: '46px',
        height: '46px',
        borderRadius: '12px',
        background: '#0F5A47',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        boxShadow: '0 8px 24px rgba(15,90,71,0.35)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'all 0.3s ease',
        zIndex: 149,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = '#123F35' }}
      onMouseLeave={(e) => { e.currentTarget.style.background = '#0F5A47' }}
    >
      <ArrowUpIcon size={18} />
    </button>
  )
}
