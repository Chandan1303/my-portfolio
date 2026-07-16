import { useRef } from 'react'

export default function TiltCard({ children, style = {} }) {
  const ref = useRef()

  const handleMove = (e) => {
    const card = ref.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotX = ((y - cy) / cy) * -5
    const rotY = ((x - cx) / cx) * 5
    card.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(8px)`
  }

  const handleLeave = () => {
    ref.current.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateZ(0)'
    ref.current.style.borderColor = 'rgba(99,102,241,0.2)'
    ref.current.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)'
  }

  const handleEnter = () => {
    ref.current.style.borderColor = 'rgba(99,102,241,0.5)'
    ref.current.style.boxShadow = '0 0 40px rgba(99,102,241,0.2), 0 20px 60px rgba(0,0,0,0.3)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={handleEnter}
      style={{
        background: 'linear-gradient(135deg, rgba(30,41,59,0.8) 0%, rgba(30,41,59,0.4) 100%)',
        border: '1px solid rgba(99,102,241,0.2)',
        borderRadius: '18px',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        transition: 'transform 0.1s ease, border-color 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        ...style
      }}
    >
      {children}
    </div>
  )
}
