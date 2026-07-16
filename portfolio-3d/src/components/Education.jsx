import TiltCard from './TiltCard'
import SectionTitle from './SectionTitle'

const edu = [
  {
    icon: '🏛',
    degree: 'B.E. in Information Science & Engineering',
    school: 'The National Institute of Engineering (NIE), Mysuru',
    period: 'Oct 2023 – Present',
    desc: 'Currently pursuing B.E. in ISE with a CGPA of 8.78. Building strong foundation in AI/ML, Full-Stack Development, Data Structures, Algorithms, and DBMS. Active participant in coding competitions and research symposiums.',
    tags: ['CGPA: 8.78', 'AI/ML', 'Full-Stack', 'DSA', 'DBMS']
  },
  {
    icon: '🏫',
    degree: 'Pre-University Course (PCMCs)',
    school: 'MES Chaitanya Pre-University College, Sirsi',
    period: 'Aug 2021 – May 2023',
    desc: 'Completed Pre-University education with Physics, Chemistry, Mathematics, and Computer Science, achieving 95% marks. Built strong analytical and problem-solving skills.',
    tags: ['95% Marks', 'PCMCs', 'Science Stream']
  }
]

export default function Education() {
  return (
    <section id="education" style={{ padding: '110px 2rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <SectionTitle title="Education" subtitle="Academic Background" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {edu.map((e, i) => (
            <TiltCard key={i} style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                {/* Icon */}
                <div style={{
                  width: '52px', height: '52px', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)',
                  borderRadius: '12px', fontSize: '1.5rem'
                }}>{e.icon}</div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <h4 style={{
                      fontFamily: 'Space Grotesk', color: '#f1f5f9',
                      fontWeight: 700, fontSize: '1.05rem'
                    }}>{e.degree}</h4>
                    <span style={{
                      padding: '0.22rem 0.8rem',
                      background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)',
                      borderRadius: '6px', color: '#818cf8', fontSize: '0.75rem', fontWeight: 500,
                      whiteSpace: 'nowrap', height: 'fit-content'
                    }}>{e.period}</span>
                  </div>
                  <p style={{ color: '#6366f1', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.9rem' }}>
                    {e.school}
                  </p>
                  <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: '0.88rem', marginBottom: '1.2rem' }}>
                    {e.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {e.tags.map((t, j) => (
                      <span key={j} style={{
                        padding: '0.22rem 0.7rem',
                        background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)',
                        color: '#a5b4fc', borderRadius: '6px', fontSize: '0.73rem', fontWeight: 500
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
