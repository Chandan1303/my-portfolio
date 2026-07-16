import TiltCard from './TiltCard'
import SectionTitle from './SectionTitle'

const certs = [
  {
    icon: '🏅',
    title: 'Certifications',
    items: [
      { 
        label: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', 
        org: 'Oracle',
        date: '2025',
        skills: 'Cloud Infrastructure, Generative AI, OCI AI Services',
        link: '/oracle.png'
      },
      { 
        label: 'Artificial Intelligence Fundamentals', 
        org: 'IBM',
        date: '2024',
        skills: 'AI Concepts, Machine Learning, Deep Learning, AI Ethics',
        link: '/artificial-intelligence-fundamentals.png'
      },
      { 
        label: 'Generative AI for Data Analysts', 
        org: 'IBM',
        date: '2024',
        skills: 'Generative AI, Prompt Engineering, LLMs, Data Analysis',
        link: '/IBM-Genai.png'
      },
    ]
  },
  {
    icon: '🏆',
    title: 'Competitions & Achievements',
    items: [
      { 
        label: 'Student Research Symposium 2024', 
        org: 'IEEE Sensor Council',
        role: 'Presenter',
        date: '2024',
        skills: 'Research Presentation, Sensors, Academic Writing',
        link: '/Student Research Symposium 2024.png'
      },
      { 
        label: 'Meta PyTorch OpenEnv Hackathon', 
        org: 'Meta / PyTorch',
        role: 'Participant',
        date: '2024',
        skills: 'PyTorch, Deep Learning, Collaboration',
        link: '/Meta open env.jpg'
      },
      { 
        label: 'IBM BOB Hackathon', 
        org: 'IBM',
        role: 'Participant',
        date: '2024',
        skills: 'Problem Solving, Teamwork, Hackathon Development',
        link: '/IBM BOB.jpg'
      },
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '2rem' }}>
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
                fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.5rem'
              }}>{c.title}</h5>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {c.items.map((item, j) => (
                  <div key={j} style={{
                    padding: '1.25rem',
                    background: 'rgba(15,23,42,0.4)',
                    border: '1px solid rgba(99,102,241,0.12)',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                    transition: 'all 0.25s'
                  }}
                    onMouseEnter={e => { 
                      e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)';
                      e.currentTarget.style.background = 'rgba(15,23,42,0.6)';
                    }}
                    onMouseLeave={e => { 
                      e.currentTarget.style.borderColor = 'rgba(99,102,241,0.12)';
                      e.currentTarget.style.background = 'rgba(15,23,42,0.4)';
                    }}
                  >
                    {/* Header: Title and Date */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <div style={{ color: '#cbd5e1', fontSize: '0.88rem', fontWeight: 600, lineHeight: 1.45 }}>
                        {item.label}
                      </div>
                      <div style={{ color: '#64748b', fontSize: '0.72rem', fontWeight: 500, whiteSpace: 'nowrap', marginTop: '2px' }}>
                        {item.date}
                      </div>
                    </div>

                    {/* Org & Role */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ color: '#818cf8', fontSize: '0.78rem', fontWeight: 500 }}>
                        {item.org}
                      </span>
                      {item.role && (
                        <>
                          <span style={{ color: '#475569', fontSize: '0.75rem' }}>·</span>
                          <span style={{ 
                            color: '#94a3b8', 
                            fontSize: '0.72rem', 
                            background: 'rgba(148,163,184,0.08)', 
                            padding: '0.1rem 0.4rem', 
                            borderRadius: '4px',
                            fontWeight: 500
                          }}>
                            {item.role}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Skills Covered */}
                    {item.skills && (
                      <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', marginTop: '0.1rem' }}>
                        {item.skills.split(', ').map((skill, k) => (
                          <span key={k} style={{
                            background: 'rgba(99,102,241,0.05)',
                            border: '1px solid rgba(99,102,241,0.1)',
                            borderRadius: '4px',
                            padding: '0.15rem 0.4rem',
                            fontSize: '0.68rem',
                            color: '#a5b4fc',
                            fontFamily: 'Inter',
                            fontWeight: 500
                          }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Link */}
                    <div style={{ marginTop: '0.2rem' }}>
                      <a href={item.link} target="_blank" rel="noreferrer" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                        background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)',
                        color: '#a5b4fc', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 600,
                        padding: '0.35rem 0.75rem', borderRadius: '6px', transition: 'all 0.2s'
                      }}
                        onMouseEnter={e => { 
                          e.currentTarget.style.background = 'rgba(99,102,241,0.2)'; 
                          e.currentTarget.style.color = '#fff';
                          e.currentTarget.style.borderColor = 'rgba(99,102,241,0.45)';
                        }}
                        onMouseLeave={e => { 
                          e.currentTarget.style.background = 'rgba(99,102,241,0.08)'; 
                          e.currentTarget.style.color = '#a5b4fc';
                          e.currentTarget.style.borderColor = 'rgba(99,102,241,0.2)';
                        }}
                      >
                        <span>🔗 View Certificate</span>
                      </a>
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

