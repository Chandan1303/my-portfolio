import TiltCard from './TiltCard'
import SectionTitle from './SectionTitle'

const skills = [
  { icon: '⌨', title: 'Programming', items: ['C / C++', 'Java', 'Python', 'JavaScript'] },
  { icon: '🌐', title: 'Web Technologies', items: ['React.js', 'Node.js', 'Express.js', 'Flask', 'REST APIs'] },
  { icon: '🧠', title: 'AI / ML', items: ['Deep Learning', 'Vision Transformers', 'Generative AI', 'TensorFlow', 'Streamlit'] },
  { icon: '🗄', title: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
  { icon: '🛠', title: 'Dev Tools', items: ['Git & GitHub', 'VS Code', 'Postman', 'Tableau', 'Power BI'] },
  { icon: '⚙', title: 'Core CS', items: ['DSA', 'OOP', 'DBMS', 'Agile / Scrum'] },
  { icon: '👥', title: 'Soft Skills', items: ['Leadership', 'Communication', 'Problem-Solving', 'Team Collaboration'] },
  { icon: '💡', title: 'Specializations', items: ['NLP', 'Computer Vision', 'Full-Stack Dev', 'API Design'] },
]

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: '110px 2rem', position: 'relative', zIndex: 1,
      background: 'rgba(15,23,42,0.4)'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionTitle title="Skills" subtitle="Technical Expertise" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '1.2rem' }}>
          {skills.map((s, i) => (
            <TiltCard key={i} style={{ padding: '1.8rem' }}>
              <div style={{
                width: '42px', height: '42px', borderRadius: '10px',
                background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem', marginBottom: '1.1rem'
              }}>{s.icon}</div>
              <h5 style={{
                fontFamily: 'Space Grotesk', color: '#f1f5f9', fontWeight: 600,
                fontSize: '0.92rem', marginBottom: '0.9rem', letterSpacing: '0.2px'
              }}>{s.title}</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {s.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#6366f1', flexShrink: 0 }} />
                    <span style={{ color: '#94a3b8', fontSize: '0.83rem' }}>{item}</span>
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
