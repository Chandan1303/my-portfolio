import SectionTitle from './SectionTitle'

const experiences = [
  {
    title: 'Campus Crew Lead',
    company: 'HackerRank',
    period: 'July 2026 – Present',
    location: 'Remote',
    desc: 'Serve as campus representative, promoting coding challenges and driving student participation in HackerRank programs. Building community engagement and fostering competitive programming culture.',
    skills: ['Community Building', 'Leadership', 'Coding Challenges', 'Student Engagement']
  },
  {
    title: 'AI & Cloud Technology Intern',
    company: 'Edunet Foundation',
    period: 'Sep 2025 – Oct 2025',
    location: 'Remote',
    desc: 'Completed hands-on training in AI model development and cloud deployment, applying core ML concepts to real-world use cases. Developed skills in AI fundamentals, cloud infrastructure, and modern development methodologies.',
    skills: ['Artificial Intelligence', 'Cloud Technology', 'Machine Learning', 'Python']
  }
]

export default function Internships() {
  return (
    <section id="internships" style={{
      padding: '110px 2rem', position: 'relative', zIndex: 1,
      background: 'rgba(15,23,42,0.4)'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <SectionTitle title="Experience" subtitle="Internships & Work" />

        <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
          {experiences.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: idx < experiences.length - 1 ? '2.5rem' : 0 }}>
              {/* Timeline line */}
              <div style={{
                position: 'absolute', left: '7px', top: idx === 0 ? '8px' : '0px', 
                height: idx < experiences.length - 1 ? 'calc(100% + 60px)' : '60px',
                width: '1px',
                background: 'linear-gradient(180deg, #6366f1 0%, rgba(99,102,241,0.2) 100%)'
              }} />

              {/* Timeline dot */}
              <div style={{
                position: 'absolute', left: 0, top: '22px',
                width: '15px', height: '15px', borderRadius: '50%',
                background: '#020617', border: '2px solid #6366f1',
                boxShadow: '0 0 12px rgba(99,102,241,0.6)', zIndex: 2
              }} />

              <div style={{
                background: 'rgba(15,23,42,0.75)',
                border: '1px solid rgba(99,102,241,0.15)',
                borderRadius: '16px', padding: '2.5rem',
                backdropFilter: 'blur(16px)',
                transition: 'all 0.3s'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(99,102,241,0.4)'; e.currentTarget.style.boxShadow='0 0 35px rgba(99,102,241,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(99,102,241,0.15)'; e.currentTarget.style.boxShadow='none' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
                  <div>
                    <h5 style={{
                      fontFamily: 'Space Grotesk', color: '#f1f5f9', fontWeight: 700,
                      fontSize: '1.1rem', marginBottom: '0.3rem'
                    }}>{exp.title}</h5>
                    <p style={{ color: '#6366f1', fontWeight: 600, fontSize: '0.88rem' }}>{exp.company}</p>
                  </div>
                  <span style={{
                    padding: '0.3rem 0.9rem',
                    background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)',
                    borderRadius: '6px', color: '#818cf8', fontSize: '0.78rem', fontWeight: 500,
                    whiteSpace: 'nowrap'
                  }}>{exp.period} · {exp.location}</span>
                </div>

                <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  {exp.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {exp.skills.map((t, i) => (
                    <span key={i} style={{
                      padding: '0.22rem 0.7rem',
                      background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)',
                      color: '#a5b4fc', borderRadius: '6px', fontSize: '0.73rem', fontWeight: 500
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
