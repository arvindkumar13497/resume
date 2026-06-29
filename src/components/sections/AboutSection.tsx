import { motion } from 'framer-motion'
import { personalInfo } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'

export function AboutSection() {
  return (
    <motion.section id="about" className="section-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
      <SectionHeading
        eyebrow="About"
        title="Senior frontend developer with a strong product and performance mindset."
        description="I build scalable, secure, and high-performing web applications that balance architecture quality with polished user experience."
      />
      <div className="about-grid">
        <p>
          {personalInfo.name} is a Senior Frontend Developer with 5+ years of experience building scalable web applications using React.js, Next.js, and TypeScript. My background includes frontend architecture, reusable component systems, REST API integration, authentication, SEO optimization, and responsive UI development.
        </p>
        <div>
          <p>
            Core expertise includes frontend architecture, React.js and Next.js development, responsive UI/UX, performance optimization, authentication, SEO, reusable component development, ERP, and ecommerce platforms.
          </p>
          <ul className="expertise-list">
            <li>Frontend Architecture</li>
            <li>React.js & Next.js Development</li>
            <li>Performance Optimization</li>
            <li>SEO & Core Web Vitals</li>
            <li>ERP & Ecommerce Platforms</li>
          </ul>
          <p className="education-copy">
            Education: Bachelor of Computer Applications (BCA) — Chhatrapati Shahu Ji Maharaj University (2013 – 2016)
          </p>
        </div>
      </div>
    </motion.section>
  )
}
