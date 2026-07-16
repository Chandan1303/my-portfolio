export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(2,6,23,0.98)',
      borderTop: '1px solid rgba(99,102,241,0.12)',
      padding: '2.5rem 2rem',
      textAlign: 'center',
      position: 'relative',
      zIndex: 1
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '7px',
            background: 'linear-gradient(135deg,#6366f1,#4f46e5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            color: '#fff',
            fontSize: '0.85rem'
          }}>C</div>
          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, color: '#475569', fontSize: '0.9rem' }}>
            Chandan Shridhar Hegde
          </span>
        </div>
        <p style={{ color: '#334155', fontSize: '0.82rem', marginBottom: '1.2rem' }}>
          © 2026 · All rights reserved
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem' }}>
          {[
            { label: '✉', href: 'mailto:hegdechandan6@gmail.com' },
            { label: 'Li', href: 'https://www.linkedin.com/in/chandan-shridhar-hegde-397524307' },
            { label: 'Gh', href: 'https://github.com/Chandan1303' }
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(99,102,241,0.06)',
              border: '1px solid rgba(99,102,241,0.15)',
              borderRadius: '8px',
              color: '#475569',
              fontSize: '0.75rem',
              fontWeight: 700,
              transition: 'all 0.25s',
              cursor: 'pointer'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(99,102,241,0.15)'
                e.currentTarget.style.color = '#818cf8'
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(99,102,241,0.06)'
                e.currentTarget.style.color = '#475569'
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.15)'
              }}
            >{s.label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
