export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
  }

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', position: 'relative', zIndex: 1,
      padding: '0 2rem',
      background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99,102,241,0.08) 0%, transparent 70%)'
    }}>
      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div style={{ textAlign: 'center', maxWidth: '820px', position: 'relative' }}>

        {/* Status badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.4rem 1.2rem',
          background: 'rgba(99,102,241,0.08)',
          border: '1px solid rgba(99,102,241,0.3)',
          borderRadius: '50px', marginBottom: '2rem'
        }}>
          <span style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: '#22c55e', boxShadow: '0 0 8px #22c55e', display: 'inline-block'
          }} />
          <span style={{ color: '#a5b4fc', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.5px' }}>
            Available for opportunities
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(2.2rem,5.5vw,4rem)',
          fontFamily: 'Space Grotesk', fontWeight: 800,
          color: '#f8fafc', lineHeight: 1.15, marginBottom: '1rem',
          letterSpacing: '-1px'
        }}>
          Chandan Shridhar<br />
          <span style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #818cf8 40%, #06b6d4 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>Hegde</span>
        </h1>

        <p style={{
          fontSize: '1.15rem', color: '#94a3b8', marginBottom: '0.8rem',
          fontWeight: 500, letterSpacing: '0.3px'
        }}>
          Final-Year ISE Student &nbsp;·&nbsp; AI/ML Enthusiast &nbsp;
        </p>

        <p style={{
          fontSize: '1rem', color: '#64748b', marginBottom: '3rem',
          maxWidth: '620px', margin: '0 auto 3rem', lineHeight: 1.8
        }}>
          Passionate about building intelligent, data-driven solutions by combining Artificial Intelligence, Machine Learning, Data Analytics, and modern full-stack development to solve real-world problems.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          <button onClick={() => scrollTo('contact')} style={{
            padding: '0.85rem 2rem', borderRadius: '10px', border: 'none', cursor: 'pointer',
            background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff',
            fontFamily: 'Inter', fontWeight: 600, fontSize: '0.95rem',
            boxShadow: '0 8px 30px rgba(99,102,241,0.4)',
            transition: 'all 0.25s', letterSpacing: '0.3px'
          }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 14px 40px rgba(99,102,241,0.55)' }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 30px rgba(99,102,241,0.4)' }}
          >Get In Touch</button>

          <button onClick={() => scrollTo('projects')} style={{
            padding: '0.85rem 2rem', borderRadius: '10px', cursor: 'pointer',
            background: 'transparent',
            border: '1px solid rgba(99,102,241,0.4)', color: '#a5b4fc',
            fontFamily: 'Inter', fontWeight: 600, fontSize: '0.95rem',
            transition: 'all 0.25s', letterSpacing: '0.3px'
          }}
            onMouseEnter={e => { e.currentTarget.style.background='rgba(99,102,241,0.1)'; e.currentTarget.style.borderColor='rgba(99,102,241,0.7)'; e.currentTarget.style.color='#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='rgba(99,102,241,0.4)'; e.currentTarget.style.color='#a5b4fc' }}
          >View Projects</button>
        </div>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', marginBottom: '8rem' }}>
          {[
            { label: 'Email', href: 'mailto:hegdechandan6@gmail.com', icon: '✉' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chandan-shridhar-hegde-397524307', icon: 'Li' },
            { label: 'GitHub', href: 'https://github.com/Chandan1303', icon: 'Gh' }
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer" title={s.label} style={{
              width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(99,102,241,0.25)',
              borderRadius: '10px', color: '#64748b', fontSize: '0.8rem', fontWeight: 700,
              transition: 'all 0.25s', letterSpacing: '0.5px'
            }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(99,102,241,0.15)'; e.currentTarget.style.borderColor='rgba(99,102,241,0.6)'; e.currentTarget.style.color='#a5b4fc' }}
              onMouseLeave={e => { e.currentTarget.style.background='rgba(15,23,42,0.8)'; e.currentTarget.style.borderColor='rgba(99,102,241,0.25)'; e.currentTarget.style.color='#64748b' }}
            >{s.icon}</a>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        cursor: 'pointer', opacity: 0.5
      }} onClick={() => scrollTo('about')}>
        <span style={{ color: '#64748b', fontSize: '0.72rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(180deg,#6366f1,transparent)'
        }} />
      </div>
    </section>
  )
}
