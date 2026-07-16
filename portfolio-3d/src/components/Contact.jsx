import { useState } from 'react'
import TiltCard from './TiltCard'
import SectionTitle from './SectionTitle'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    const mailto = `mailto:hegdechandan6@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
    window.location.href = mailto
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  const inputStyle = {
    width: '100%', padding: '0.8rem 1rem', borderRadius: '10px',
    background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(99,102,241,0.18)',
    color: '#f1f5f9', fontFamily: 'Inter', fontSize: '0.9rem', outline: 'none',
    transition: 'border-color 0.25s, box-shadow 0.25s'
  }

  const labelStyle = {
    display: 'block', color: '#64748b', fontSize: '0.78rem',
    fontWeight: 600, marginBottom: '0.4rem', letterSpacing: '0.5px', textTransform: 'uppercase'
  }

  const focusInput = (e) => {
    e.target.style.borderColor = 'rgba(99,102,241,0.6)'
    e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)'
  }
  const blurInput = (e) => {
    e.target.style.borderColor = 'rgba(99,102,241,0.18)'
    e.target.style.boxShadow = 'none'
  }

  return (
    <section id="contact" style={{ padding: '110px 2rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <SectionTitle title="Contact" subtitle="Get In Touch" />

        {/* Contact info cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            { icon: '✉', label: 'Email', val: 'hegdechandan6@gmail.com', href: 'mailto:hegdechandan6@gmail.com' },
            { icon: 'Li', label: 'LinkedIn', val: 'Connect with me', href: 'https://www.linkedin.com/in/chandan-shridhar-hegde-397524307' },
            { icon: 'Gh', label: 'GitHub', val: 'Chandan1303', href: 'https://github.com/Chandan1303' },
          ].map((c, i) => (
            <a key={i} href={c.href} target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: '0.9rem',
              padding: '1.2rem 1.4rem',
              background: 'rgba(15,23,42,0.75)', border: '1px solid rgba(99,102,241,0.15)',
              borderRadius: '12px', backdropFilter: 'blur(16px)',
              transition: 'all 0.25s', textDecoration: 'none'
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(99,102,241,0.45)'; e.currentTarget.style.background='rgba(99,102,241,0.06)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(99,102,241,0.15)'; e.currentTarget.style.background='rgba(15,23,42,0.75)' }}
            >
              <div style={{
                width: '38px', height: '38px', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)',
                borderRadius: '9px', color: '#818cf8', fontSize: '0.78rem', fontWeight: 700
              }}>{c.icon}</div>
              <div>
                <div style={{ color: '#475569', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{c.label}</div>
                <div style={{ color: '#cbd5e1', fontSize: '0.82rem', fontWeight: 500, marginTop: '1px' }}>{c.val}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <TiltCard style={{ padding: '2.5rem' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={labelStyle}>Name</label>
                <input style={inputStyle} value={form.name} required placeholder="John Doe"
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  onFocus={focusInput} onBlur={blurInput} />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input style={inputStyle} type="email" value={form.email} required placeholder="john@example.com"
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  onFocus={focusInput} onBlur={blurInput} />
              </div>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={labelStyle}>Subject</label>
              <input style={inputStyle} value={form.subject} required placeholder="Project Collaboration"
                onChange={e => setForm({ ...form, subject: e.target.value })}
                onFocus={focusInput} onBlur={blurInput} />
            </div>
            <div style={{ marginBottom: '1.8rem' }}>
              <label style={labelStyle}>Message</label>
              <textarea style={{ ...inputStyle, height: '130px', resize: 'vertical' }}
                value={form.message} required placeholder="Your message..."
                onChange={e => setForm({ ...form, message: e.target.value })}
                onFocus={focusInput} onBlur={blurInput} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <button type="submit" style={{
                padding: '0.85rem 2.2rem', borderRadius: '10px', border: 'none', cursor: 'pointer',
                background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff',
                fontFamily: 'Inter', fontWeight: 600, fontSize: '0.92rem',
                boxShadow: '0 6px 25px rgba(99,102,241,0.35)', transition: 'all 0.25s'
              }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 35px rgba(99,102,241,0.5)' }}
                onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 6px 25px rgba(99,102,241,0.35)' }}
              >Send Message</button>
              {sent && (
                <span style={{ color: '#22c55e', fontSize: '0.88rem', fontWeight: 500 }}>
                  ✓ Message prepared — check your email client.
                </span>
              )}
            </div>
          </form>
        </TiltCard>
      </div>
    </section>
  )
}
