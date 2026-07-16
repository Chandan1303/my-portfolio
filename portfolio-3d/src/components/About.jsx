import { useRef } from 'react'
import SectionTitle from './SectionTitle'

const infos = [
  { label: 'Email', value: 'hegdechandan6@gmail.com', icon: '✉' },
  { label: 'Phone', value: '+91 7795226695', icon: '☎' },
  { label: 'Location', value: 'Sirsi, Karnataka, India', icon: '◎' },
  { label: 'CGPA', value: '8.78 / 10.0', icon: '◈' },
]

export default function About() {
  const photoRef = useRef()

  const handleMove = (e) => {
    const rect = photoRef.current.getBoundingClientRect()
    const rotX = ((e.clientY - rect.top - rect.height / 2) / rect.height) * -10
    const rotY = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 10
    photoRef.current.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`
  }

  const handleLeave = () => {
    photoRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
  }

  return (
    <section id="about" style={{
      padding: '110px 2rem', position: 'relative', zIndex: 1,
      background: 'linear-gradient(180deg, rgba(2,6,23,0) 0%, rgba(15,23,42,0.5) 100%)'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionTitle title="About Me" subtitle="Who I Am" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '4rem', alignItems: 'center' }}>

          {/* Photo */}
          <div style={{ position: 'relative' }}>
            <div
              ref={photoRef}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              style={{
                borderRadius: '20px', overflow: 'hidden',
                transition: 'transform 0.15s ease',
                boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.2)',
              }}
            >
              <img src="/myphoto.jpeg" alt="Chandan Hegde"
                style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
                background: 'linear-gradient(0deg, rgba(2,6,23,0.8) 0%, transparent 100%)'
              }} />
            </div>

            {/* Floating stat cards */}
            {[
              { val: '8.78', label: 'CGPA', pos: { top: '-16px', right: '-16px' } },
              { val: 'Final', label: 'Year', pos: { bottom: '30px', left: '-16px' } },
            ].map((b, i) => (
              <div key={i} style={{
                position: 'absolute', ...b.pos,
                background: 'rgba(15,23,42,0.95)',
                border: '1px solid rgba(99,102,241,0.35)',
                borderRadius: '12px', padding: '0.7rem 1.1rem',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
              }}>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.3rem', color: '#818cf8' }}>{b.val}</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 500, letterSpacing: '0.5px' }}>{b.label}</div>
              </div>
            ))}

            {/* Decorative corner */}
            <div style={{
              position: 'absolute', top: '-20px', left: '-20px',
              width: '80px', height: '80px',
              border: '2px solid rgba(99,102,241,0.2)',
              borderRight: 'none', borderBottom: 'none',
              borderRadius: '4px 0 0 0'
            }} />
            <div style={{
              position: 'absolute', bottom: '-20px', right: '-20px',
              width: '80px', height: '80px',
              border: '2px solid rgba(99,102,241,0.2)',
              borderLeft: 'none', borderTop: 'none',
              borderRadius: '0 0 4px 0'
            }} />
          </div>

          {/* Content */}
          <div>
            <h3 style={{
              fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700,
              color: '#f8fafc', marginBottom: '1rem', letterSpacing: '-0.3px'
            }}>
              Chandan Shridhar Hegde
            </h3>
            <p style={{ color: '#6366f1', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.2rem', letterSpacing: '0.5px' }}>
              B.E. Information Science &amp; Engineering · NIE Mysuru
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.95rem' }}>
              I am a final-year Information Science &amp; Engineering student passionate about building intelligent software solutions by combining Artificial Intelligence, Machine Learning, Data Analytics, and modern full-stack development.
            </p>
            <p style={{ color: '#64748b', lineHeight: 1.85, marginBottom: '2.5rem', fontSize: '0.92rem' }}>
              My interests span machine learning, deep learning, computer vision, generative AI, and data-driven application development. I enjoy turning ideas into practical products through hands-on projects, hackathons, and continuous learning.
            </p>

            {/* Info grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
              {infos.map((info, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.9rem 1rem',
                  background: 'rgba(15,23,42,0.6)',
                  border: '1px solid rgba(99,102,241,0.12)',
                  borderRadius: '10px',
                  transition: 'all 0.25s'
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(99,102,241,0.4)'; e.currentTarget.style.background='rgba(99,102,241,0.06)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(99,102,241,0.12)'; e.currentTarget.style.background='rgba(15,23,42,0.6)' }}
                >
                  <span style={{ color: '#6366f1', fontSize: '1rem', width: '20px', textAlign: 'center' }}>{info.icon}</span>
                  <div>
                    <div style={{ color: '#475569', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{info.label}</div>
                    <div style={{ color: '#cbd5e1', fontSize: '0.82rem', fontWeight: 500, marginTop: '1px' }}>{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
