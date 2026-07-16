import TiltCard from './TiltCard'
import SectionTitle from './SectionTitle'

const projects = [
  {
    num: '01',
    title: 'Hybrid AI for Image Captioning',
    category: 'AI/ML · Full-Stack · 2025',
    desc: 'Architected an intelligent image captioning system leveraging Vision Transformer models and Generative AI (Gemini API) to automatically generate contextual, platform-specific captions. Built a full-stack application with Python Flask backend and React.js frontend.',
    tech: ['React.js','Python','Flask','Vision Transformers','Gemini API','MongoDB','NLP'],
    link: 'https://github.com/Chandan1303/image-caption-generator',
    accent: '#6366f1'
  },
  {
    num: '02',
    title: 'AI-Based Image Classification Interface',
    category: 'AI/ML · Web Development · 2025',
    desc: 'Built an AI-based image classification web interface allowing users to upload images and instantly view predictions with confidence scores and processing time. Implemented multi-model architecture with MobileNetV2, InceptionResNetV2, and EfficientNetB0.',
    tech: ['Python','TensorFlow','Streamlit','PIL','Deep Learning'],
    link: 'https://github.com/Chandan1303/image-classification',
    accent: '#06b6d4'
  },
  {
    num: '03',
    title: 'Laptop Price Prediction System',
    category: 'Machine Learning · Django · 2025',
    desc: 'Django-based machine learning web application leveraging Random Forest models to predict laptop specifications (CPU, GPU, OS, RAM, Storage) and prices. Features real-time predictions with pattern analysis and visualization. Implements 10 design patterns across Creational, Structural, and Behavioral categories.',
    tech: ['Django','Random Forest','scikit-learn','pandas','numpy','Bootstrap','Render'],
    link: 'https://github.com/Chandan1303/laptop-ML-model',
    accent: '#f97316'
  },
  {
    num: '04',
    title: 'Smart Weather Forecasting Web Application',
    category: 'React · Full-Stack · 2025',
    desc: 'Full-stack weather forecasting application delivering real-time weather data with comprehensive metrics including temperature, humidity, wind speed, air quality index, and sunrise/sunset times. Features JWT authentication, user-specific favorites, search history persistence, and dynamic dark/light theme switching.',
    tech: ['React 18','Bootstrap 5','JWT','PostgreSQL','bcrypt','React Icons','JavaScript'],
    link: 'https://github.com/Chandan1303/smart-weather-',
    accent: '#06b6d4'
  }
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '110px 2rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionTitle title="Projects" subtitle="Featured Work" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '1.5rem' }}>
          {projects.map((p, i) => (
            <TiltCard key={i} style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
              {/* Top row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <span style={{
                  fontFamily: 'Space Grotesk', fontSize: '2.5rem', fontWeight: 800,
                  color: '#f1f5f9', lineHeight: 1, letterSpacing: '-2px'
                }}>{p.num}</span>
                <a href={p.link} target="_blank" rel="noreferrer" style={{
                  width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)',
                  borderRadius: '8px', color: '#818cf8', fontSize: '0.85rem', fontWeight: 700,
                  transition: 'all 0.25s'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background='rgba(99,102,241,0.25)'; e.currentTarget.style.color='#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(99,102,241,0.1)'; e.currentTarget.style.color='#818cf8' }}
                >↗</a>
              </div>

              <div style={{
                width: '40px', height: '2px', marginBottom: '1.2rem',
                background: `linear-gradient(90deg,${p.accent},transparent)`
              }} />

              <h4 style={{
                fontFamily: 'Space Grotesk', color: '#f1f5f9', fontWeight: 700,
                fontSize: '1.1rem', marginBottom: '0.4rem', lineHeight: 1.3
              }}>{p.title}</h4>
              <p style={{ color: '#6366f1', fontSize: '0.78rem', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.5px' }}>
                {p.category}
              </p>
              <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: '0.88rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                {p.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {p.tech.map((t, j) => (
                  <span key={j} style={{
                    padding: '0.22rem 0.7rem',
                    background: 'rgba(99,102,241,0.08)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    color: '#a5b4fc', borderRadius: '6px',
                    fontSize: '0.73rem', fontWeight: 500
                  }}>{t}</span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
