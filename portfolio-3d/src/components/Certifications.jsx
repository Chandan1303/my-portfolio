import TiltCard from './TiltCard'
import SectionTitle from './SectionTitle'

const certs = [
  {
    icon: '🏅',
    title: 'Certifications',
    items: [
      { label: 'Artificial Intelligence Fundamentals', org: 'IBM' },
      { label: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', org: 'Oracle' },
      { label: 'Generative AI for Data Analysts', org: 'IBM' },
    ]
  },
  {
    icon: '🏆',
    title: 'Competitions & Achievements',
    items: [
      { label: 'Meta PyTorch OpenEnv Hackathon', org: 'Participant' },
      { label: 'IBM BOB Hackathon', org: 'Participant' },
      { label: 'Student Research Symposium 2024', org: 'Presenter · IEEE Sensor Council' },
    ]
  }
]

export default function Certifications() {
  return (
    <section id="certifications" style={{
      padding: '110px 2rem', position: 'relative', zIndex: 1,
      background: 'rgba(15,23,42,0.4)'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <SectionTitle title="Certifications" subtitle="Credentials & Achievements" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.5rem' }}>
          {certs.map((c, i) => (
            <TiltCard key={i} style={{ padding: '2.5rem' }}>
              <div style={{
                width: '46px', height: '46px', borderRadius: '12px',
                background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem', marginBottom: '1.3rem'
              }}>{c.icon}</div>

              <h5 style={{
                fontFamily: 'Space Grotesk', color: '#f1f5f9',
                fontWeight: 700, fontSize: '1rem', marginBottom: '1.5rem'
              }}>{c.title}</h5>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {c.items.map((item, j) => (
                  <div key={j} style={{
                    padding: '0.9rem 0',
                    borderBottom: j < c.items.length - 1 ? '1px solid rgba(99,102,241,0.08)' : 'none',
                    display: 'flex', alignItems: 'flex-start', gap: '0.75rem'
                  }}>
                    <div style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: '#6366f1', marginTop: '6px', flexShrink: 0
                    }} />
                    <div>
                      <div style={{ color: '#cbd5e1', fontSize: '0.88rem', fontWeight: 500, lineHeight: 1.4 }}>
                        {item.label}
                      </div>
                      <div style={{ color: '#475569', fontSize: '0.75rem', marginTop: '2px' }}>
                        {item.org}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
