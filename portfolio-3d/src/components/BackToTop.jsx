import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 999,
        width: '44px',
        height: '44px',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        background: 'rgba(99,102,241,0.15)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderColor: 'rgba(99,102,241,0.3)',
        color: '#818cf8',
        fontSize: '1.1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.25s',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(99,102,241,0.3)'
        e.currentTarget.style.color = '#fff'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(99,102,241,0.15)'
        e.currentTarget.style.color = '#818cf8'
      }}
      aria-label="Back to top"
    >↑</button>
  )
}
