import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

const achievements = [
  'Built multiple ERP systems',
  'Built ecommerce platforms',
  'Built gaming platforms',
  'Improved Core Web Vitals',
  'Optimized page speed',
  'Created reusable component libraries',
  'Delivered SEO optimization',
  'Implemented authentication systems',
  'Built responsive UI experiences',
]

export function AchievementsSection() {
  return (
    <motion.section id="achievements" className="section-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
      <SectionHeading
        eyebrow="Achievements"
        title="A record of outcomes that mattered."
        description="The work has consistently focused on performance, reliability, and product quality."
      />
      <div className="achievement-grid">
        {achievements.map((item) => (
          <div key={item} className="achievement-item">
            <CheckCircle2 size={18} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
