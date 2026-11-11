import { useEffect, useState } from 'react'
import './index.css'

const projects = [
  { n:'01', title:'SugarYield AI', type:'AGRICULTURE / MACHINE LEARNING', desc:'An AI-based sugarcane yield forecasting and agricultural decision-support platform, bringing machine learning together with weather and satellite analysis.', points:['Yield forecasts and farm management','Sentinel-2 imagery with NDVI analysis','District monitoring and weather context','Crop recommendations with explainable ML'], stack:['React','Flask','MySQL','Python','Random Forest','XGBoost','Google Earth Engine','SHAP'], repo:'https://github.com/Chandan1303/new-major', live:'https://sugaryieldai-frontend.onrender.com', visual:'earth', featured:true },
  { n:'02', title:'Hybrid AI for Image Captioning', type:'COMPUTER VISION / GENERATIVE AI', desc:'A full-stack image captioning application combining Vision Transformer and BLIP with Gemini to produce useful, context-aware descriptions.', points:['Upload an image for AI captions','Choose short, medium or long output','Tailor captions for social platforms'], stack:['React','Flask','Python','BLIP','Vision Transformer','Gemini API','MongoDB'], repo:'https://github.com/Chandan1303/image-caption-generator', visual:'vision' },
  { n:'03', title:'LaptopPilot', type:'RECOMMENDATION / DATA SCIENCE', desc:'A machine learning-based laptop recommendation platform that matches requirements and budget with suitable specifications.', points:['Requirement-based recommendations','Laptop specification matching','Budget-aware suggestions'], stack:['Python','Django','Machine Learning','Random Forest','Data Analysis'], repo:'https://github.com/Chandan1303/laptop-ML-model', visual:'device' },
  { n:'04', title:'QueryBot', type:'FULL-STACK / CONVERSATIONAL AI', desc:'A conversational application built with React and Gemini API, with user authentication and MongoDB-backed data management.', points:['Conversational interface','User authentication','MongoDB data persistence'], stack:['React','Node.js','Express.js','Gemini API','MongoDB','Mongoose'], visual:'query' }
]
const skills = [
  ['01','Programming',['C','C++','Java','Python','JavaScript']], ['02','Frontend',['React.js','HTML','CSS']],
  ['03','Backend',['Flask','Node.js','Express.js']], ['04','Databases',['MySQL','MongoDB']],
  ['05','AI & machine learning',['Machine Learning','Deep Learning','Computer Vision','Generative AI']],
  ['06','Data & tools',['Tableau','Power BI','Git','GitHub','VS Code','Postman']]
]
const credentials = [
  {title:'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',issuer:'Oracle',date:'2025',image:'/oracle.png',type:'CERTIFICATION'},
  {title:'Artificial Intelligence Fundamentals',issuer:'IBM',date:'2024',image:'/artificial-intelligence-fundamentals.png',type:'CERTIFICATION'},
  {title:'Generative AI for Data Analysts',issuer:'IBM',date:'2024',image:'/IBM-Genai.png',type:'CERTIFICATION'},
  {title:'Student Research Symposium · Presenter',issuer:'IEEE Sensor Council',date:'2024',image:'/Student Research Symposium 2024.png',type:'RESEARCH'},
  {title:'Meta PyTorch OpenEnv Hackathon · Participant',issuer:'Meta / PyTorch',date:'2024',image:'/Meta open env.jpg',type:'HACKATHON'},
  {title:'IBM BOB Hackathon · Participant',issuer:'IBM',date:'2024',image:'/IBM BOB.jpg',type:'HACKATHON'}
]
const Arrow = ({up=false}) => <span aria-hidden="true">{up ? '↗' : '→'}</span>
function Header() {
  const [open,setOpen] = useState(false)
  const links = [['Work','#work'],['About','#about'],['Skills','#skills'],['Journey','#journey'],['Contact','#contact']]
  return <header className="topbar"><a className="brand" href="#home"><span className="brand-stamp">CH<span>↗</span></span><span>CHANDAN HEGDE<small>SOFTWARE · AI · DATA</small></span></a><button className="nav-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button><nav className={open ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">{links.map(([label,href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cv" href="/Chandan_Shridhar_Hegde_Resume.pdf" download>Résumé <Arrow up/></a></nav></header>
}
function Project({project}) {
  return <article className={`work-card ${project.featured?'work-featured':''}`}><div className="work-info"><div className="work-meta"><span>{project.n} / PROJECT</span><span>{project.type}</span></div><h3>{project.title}</h3><p className="work-desc">{project.desc}</p><ul className="work-points">{project.points.map(point=><li key={point}>{point}</li>)}</ul><div className="tech-tags">{project.stack.map(item=><span key={item}>{item}</span>)}</div><div className="work-actions">{project.repo&&<a href={project.repo} target="_blank" rel="noreferrer">Source code <Arrow up/></a>}{project.live&&<a className="action-live" href={project.live} target="_blank" rel="noreferrer">Open live site <Arrow up/></a>}</div></div></article>
}
function SectionHead({index,kicker,title,aside}) {
  return <div className="section-head"><div><span className="section-index">{index} / {kicker}</span><h2>{title}<i>.</i></h2></div>{aside&&<p>{aside}</p>}</div>
}
export default function App() {
 useEffect(() => {
  const targets = document.querySelectorAll('.section-head, .work-card, .education-entry, .skill-tile, .journey-item, .credential-card')
  targets.forEach((el, index) => {
   el.classList.add('motion-reveal')
   el.style.setProperty('--motion-delay', `${(index % 4) * 70}ms`)
  })
  if (!('IntersectionObserver' in window)) {
   targets.forEach(el => el.classList.add('motion-visible'))
   return
  }
  const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
    if (entry.isIntersecting) {
     entry.target.classList.add('motion-visible')
     observer.unobserve(entry.target)
    }
   })
  }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' })
  targets.forEach(el => observer.observe(el))
  const progress = document.querySelector('.scroll-progress')
  let frame = 0
  const updateProgress = () => {
   cancelAnimationFrame(frame)
   frame = requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    if (progress) progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
   })
  }
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
  return () => {
   observer.disconnect()
   window.removeEventListener('scroll', updateProgress)
   cancelAnimationFrame(frame)
  }
 }, [])
 return <div className="site-shell"><div className="scroll-progress" aria-hidden="true"/><Header/><main>
  <section className="hero" id="home"><div className="hero-copy"><div className="availability"><i/> INFORMATION SCIENCE ENGINEERING <span>·</span> NIE MYSURU</div><h1>Ideas into<br/><em>intelligent</em><br/>experiences<span className="hero-dot">.</span></h1><p className="hero-summary">I’m Chandan Shridhar Hegde, a final-year engineering student shaping thoughtful software with AI, data and full-stack development.</p><div className="hero-buttons"><a className="button-primary" href="#work">Explore my work <Arrow/></a><a className="button-quiet" href="/Chandan_Shridhar_Hegde_Resume.pdf" download>Download résumé <Arrow up/></a></div><div className="social-row"><a href="https://github.com/Chandan1303" target="_blank" rel="noreferrer">GitHub <Arrow up/></a><a href="https://www.linkedin.com/in/chandan-shridhar-hegde-397524307" target="_blank" rel="noreferrer">LinkedIn <Arrow up/></a><a href="mailto:hegdechandan6@gmail.com">Email <Arrow up/></a></div></div><div className="hero-art"><div className="portrait-wrap"><img src="/myphoto.jpeg" alt="Chandan Shridhar Hegde"/><div className="portrait-label">CHANDAN<br/>SHRIDHAR HEGDE</div><div className="portrait-number">01</div></div><div className="hero-orbit orbit-top">SIRSI, KARNATAKA</div><div className="hero-orbit orbit-bottom">BUILD / LEARN / REPEAT</div><div className="hero-sticker">ISE<br/><b>’27</b></div></div><div className="hero-index"><span>PORTFOLIO / 2026</span><a href="#work">SCROLL TO EXPLORE ↓</a><span>MYSURU · INDIA</span></div></section>
  <section className="work-section section-pad" id="work"><SectionHead index="01" kicker="SELECTED WORK" title="Built with purpose" aside="Machine learning, useful interfaces and systems made for real questions."/><div className="work-grid">{projects.map(project=><Project key={project.n} project={project}/>)}</div></section>
  <section className="about-section section-pad" id="about"><div className="about-side"><span className="section-index">02 / ABOUT</span><div className="about-stamp">CURIOUS<br/>BY NATURE<span>✳</span></div></div><div className="about-content"><h2>Grounded in engineering.<br/><em>Drawn to what’s next.</em></h2><div className="about-copy"><p>I’m pursuing a B.E. in Information Science and Engineering at The National Institute of Engineering (NIE), Mysuru. I’m currently in my seventh semester with a CGPA of 8.78.</p><p>My interests span software engineering, artificial intelligence and machine learning, data analytics, and full-stack application development. I grew up in Sirsi, Karnataka.</p></div><div className="education-list"><div className="education-entry"><span>2023 — PRESENT</span><div><h3>B.E. Information Science &amp; Engineering</h3><p>The National Institute of Engineering (NIE), Mysuru · 7th semester / final year</p><small>Core interests: AI/ML, full-stack development, data structures, algorithms and DBMS.</small></div><strong>8.78<small>CGPA</small></strong></div><div className="education-entry"><span>2021 — 2023</span><div><h3>Pre-University Course · PCMCs</h3><p>MES Chaitanya Pre-University College, Sirsi</p><small>Physics, Chemistry, Mathematics and Computer Science.</small></div><strong>95%<small>MARKS</small></strong></div></div></div></section>
  <section className="skills-section section-pad" id="skills"><SectionHead index="03" kicker="TECHNICAL TOOLKIT" title="Things I work with" aside="A broad foundation across the stack, applied project by project."/><div className="skill-grid">{skills.map(([num,title,items])=><div className="skill-tile" key={num}><span>{num}</span><div><h3>{title}</h3><p>{items.map((item,i)=><b key={item}>{item}{i<items.length-1&&<i> / </i>}</b>)}</p></div><span className="skill-arrow">↗</span></div>)}</div></section>
  <section className="journey-section section-pad" id="journey"><SectionHead index="04" kicker="COMMUNITY & RECOGNITION" title="Learning in company" aside="Technical communities, shared learning and experiences along the way."/><div className="journey-layout"><div className="journey-list"><article className="journey-item"><span className="journey-date">JUL 2026 — NOW</span><div><h3>HackerRank Campus Crew Lead</h3><p>Campus Crew at The National Institute of Engineering, Mysuru. Supporting coding challenges, campus engagement and technical initiatives.</p></div><span className="journey-mark">↗</span></article><article className="journey-item"><span className="journey-date">SEP — OCT 2025</span><div><h3>AI &amp; Cloud Technology Intern</h3><p>Edunet Foundation · Hands-on training in AI model development and cloud deployment, applying core machine learning concepts to practical use cases.</p></div><span className="journey-mark">↗</span></article><article className="journey-item"><span className="journey-date">2024 — 2025</span><div><h3>Research &amp; hackathons</h3><p>Presented at the Student Research Symposium 2024 with IEEE Sensor Council. Participated in Meta PyTorch OpenEnv and IBM BOB hackathons.</p></div><span className="journey-mark">↗</span></article></div><div className="recognition-note"><span>ALWAYS IN PROGRESS</span><p>Learn a little.<br/>Build a little.<br/><em>Share what works.</em></p><span>TECHNICAL COMMUNITY / NIE</span></div></div></section>
  <section className="credentials-section section-pad"><SectionHead index="05" kicker="CERTIFICATES & MILESTONES" title="Proof of practice" aside="A selection of credentials and event records. Select an image to view it larger."/><div className="credential-grid">{credentials.map((item,i)=><article className="credential-card" key={item.title}><a className="credential-thumb" href={item.image} target="_blank" rel="noreferrer"><img src={item.image} alt={`${item.title} record`}/><span>VIEW RECORD ↗</span></a><div className="credential-text"><span>{item.type} / {item.date}</span><h3>{item.title}</h3><p>{item.issuer}</p><b>0{i+1}</b></div></article>)}</div></section>
  <section className="contact-section section-pad" id="contact"><div className="contact-topline"><span>06 / GET IN TOUCH</span><span>OPEN TO GOOD QUESTIONS</span></div><h2>Let’s build<br/><em>something useful.</em></h2><div className="contact-footer"><a className="contact-cta" href="mailto:hegdechandan6@gmail.com">Start a conversation <Arrow up/></a><div className="contact-links"><a href="mailto:hegdechandan6@gmail.com">hegdechandan6@gmail.com</a><a href="tel:+917795226695">+91 77952 26695</a></div><span>SIRSI, KARNATAKA · INDIA</span></div></section>
 </main><footer className="footer"><a className="footer-brand" href="#home"><span className="brand-stamp">CH<span>↗</span></span>CHANDAN HEGDE</a><span>MADE WITH CURIOSITY · 2026</span><a href="#home">BACK TO TOP ↑</a></footer></div>
}
