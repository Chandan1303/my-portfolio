import { useState, useEffect } from 'react'

const links = ['Home','About','Skills','Projects','Internships','Education','Certifications','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      links.forEach(link => {
        const el = document.getElementById(link.toLowerCase())
        if (el) {
          const top = el.offsetTop - 120
          if (window.scrollY >= top && window.scrollY < top + el.offsetHeight)
            setActive(link)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(15, 23, 42, 0.85)' : 'rgba(15, 23, 42, 0.4)',
        backdropFilter: 'blur(32px)',
        borderBottom: scrolled ? '1px solid rgba(99,102,241,0.15)' : '1px solid rgba(99,102,241,0.05)',
        padding: '0 2rem',
        height: '70px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.3)' : 'none'
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '38px', height: '38px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Space Grotesk', fontWeight: 800, color: '#fff', fontSize: '1.1rem',
            boxShadow: '0 8px 24px rgba(99,102,241,0.35)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>C</div>
          <span style={{
            fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.15rem',
            color: '#f8fafc', letterSpacing: '-0.5px',
            background: 'linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Chandan</span>
        </div>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: '0rem', alignItems: 'center' }} className="nav-desktop">
          {links.map(link => (
            <button key={link} onClick={() => scrollTo(link)} style={{
              background: active === link ? 'rgba(99,102,241,0.15)' : 'transparent',
              border: active === link ? '1px solid rgba(99,102,241,0.3)' : '1px solid transparent',
              cursor: 'pointer',
              color: active === link ? '#818cf8' : '#94a3b8',
              fontFamily: 'Inter', fontWeight: 500, fontSize: '0.85rem',
              padding: '0.5rem 1rem', borderRadius: '8px',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              letterSpacing: '0.3px',
              position: 'relative'
            }}
              onMouseEnter={e => { 
                if (active !== link) {
                  e.currentTarget.style.background = 'rgba(99,102,241,0.08)';
                  e.currentTarget.style.color = '#f8fafc';
                  e.currentTarget.style.borderColor = 'rgba(99,102,241,0.15)';
                }
              }}
              onMouseLeave={e => { 
                if (active !== link) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#94a3b8';
                  e.currentTarget.style.borderColor = 'transparent';
                }
              }}
            >{link}</button>
          ))}
          <a href="/chandan_shridhar_Resume.pdf" target="_blank" rel="noreferrer" style={{
            background: 'rgba(6, 182, 212, 0.1)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            cursor: 'pointer',
            color: '#22d3ee',
            fontFamily: 'Inter', fontWeight: 600, fontSize: '0.83rem',
            padding: '0.45rem 0.9rem', borderRadius: '8px',
            marginLeft: '0.6rem',
            transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            letterSpacing: '0.3px',
            textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '0.3rem'
          }}
            onMouseEnter={e => { 
              e.currentTarget.style.background = 'rgba(6, 182, 212, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.6)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => { 
              e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.3)';
              e.currentTarget.style.color = '#22d3ee';
            }}
          >
            <span>Resume</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="nav-hamburger" style={{
          display: 'none', background: 'none', border: 'none',
          color: '#818cf8', fontSize: '1.4rem', cursor: 'pointer'
        }}>☰</button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: '68px', left: 0, right: 0, zIndex: 999,
          background: 'rgba(2,6,23,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(99,102,241,0.15)',
          padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem'
        }}>
          {links.map(link => (
            <button key={link} onClick={() => scrollTo(link)} style={{
              background: active === link ? 'rgba(99,102,241,0.1)' : 'none',
              border: 'none', cursor: 'pointer',
              color: active === link ? '#818cf8' : '#cbd5e1',
              fontFamily: 'Inter', fontWeight: 500, fontSize: '0.95rem',
              padding: '0.7rem 1rem', textAlign: 'left', borderRadius: '8px'
            }}>{link}</button>
          ))}
          <a href="/chandan_shridhar_Resume.pdf" target="_blank" rel="noreferrer" style={{
            background: 'rgba(6, 182, 212, 0.1)',
            border: '1px solid rgba(6, 182, 212, 0.25)',
            cursor: 'pointer',
            color: '#22d3ee',
            fontFamily: 'Inter', fontWeight: 600, fontSize: '0.95rem',
            padding: '0.7rem 1rem', borderRadius: '8px',
            textDecoration: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginTop: '0.5rem'
          }}>
            <span>Resume</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      )}

      <style>{`
        @media(max-width:820px){
          .nav-desktop{display:none!important;}
          .nav-hamburger{display:block!important;}
        }
      `}</style>
    </>
  )
}
