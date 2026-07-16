export default function SectionTitle({ title, subtitle }) {
  return (
    <div style={{ marginBottom: '4.5rem', animation: 'fadeInUp 0.8s ease-out' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.2rem' }}>
        <div style={{
          width: '40px', height: '3px',
          background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 50%, transparent 100%)',
          borderRadius: '2px'
        }} />
        <span style={{
          color: '#818cf8', fontSize: '0.75rem', fontWeight: 700,
          letterSpacing: '3px', textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: '0.5rem'
        }}>
          ◆ {title}
        </span>
      </div>
      <h2 style={{
        fontFamily: 'Space Grotesk', fontSize: 'clamp(2rem, 4vw, 2.8rem)',
        fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.8px', lineHeight: 1.1,
        background: 'linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '0.5rem'
      }}>
        {subtitle || title}
      </h2>
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, rgba(99,102,241,0.5) 0%, transparent 100%)',
        marginTop: '1rem'
      }} />
    </div>
  )
}
