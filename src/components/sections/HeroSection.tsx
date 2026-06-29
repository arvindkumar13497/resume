import { motion } from 'framer-motion'
import { Download, Monitor, Rocket, Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useRef } from 'react'
import { personalInfo } from '../../data/content'

const heroStats = [
  { label: 'Years Experience', value: '5+', icon: <Rocket size={18} /> },
  { label: 'Enterprise Projects', value: '12+', icon: <Monitor size={18} /> },
  { label: 'Performance Optimized Apps', value: 'Core Web Vitals', icon: <Sparkles size={18} /> },
]

export function HeroSection() {
  const containerRef = useRef<HTMLElement | null>(null)

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100

    container.style.setProperty('--pointer-x', `${x}%`)
    container.style.setProperty('--pointer-y', `${y}%`)
  }

  return (
    <section id="home" ref={containerRef} onPointerMove={handlePointerMove} className="hero-section">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-mesh" />
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <div className="hero-orb orb-three" />
        <div className="hero-spotlight" />
      </div>

      <div className="hero-card">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="eyebrow">{personalInfo.title}</p>
          <h1 className="hero-headline">
            Building scalable, high-performance interfaces for ambitious products.
          </h1>
          <p className="hero-text">
            I’m {personalInfo.name} — a senior frontend engineer crafting enterprise-grade digital experiences with React, TypeScript, Next.js, and modern frontend architecture.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-secondary" href="/arvind-frontend-developer.pdf" target="_blank" rel="noreferrer">
              <Download size={16} /> Download Resume
            </a>
            <a className="btn btn-secondary" href={personalInfo.github} target="_blank" rel="noreferrer">
              <FaGithub size={16} /> GitHub
            </a>
            <a className="btn btn-secondary" href={personalInfo.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin size={16} /> LinkedIn
            </a>
          </div>

          <div className="hero-stat-grid">
            {heroStats.map((stat) => (
              <motion.div
                key={stat.label}
                className="hero-stat"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="hero-panel-header">
            <p className="panel-label">Platform architecture</p>
            <p className="panel-value">Live systems</p>
          </div>

          <div className="hero-panel-grid">
            <div className="panel-card">
              <p className="panel-card-title">Micro Frontend</p>
              <p className="panel-card-text">Host + remote apps</p>
            </div>
            <div className="panel-card">
              <p className="panel-card-title">Shared UI</p>
              <p className="panel-card-text">Reusable component library</p>
            </div>
            <div className="panel-card">
              <p className="panel-card-title">Performance</p>
              <p className="panel-card-text">Code splitting & lazy loading</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
