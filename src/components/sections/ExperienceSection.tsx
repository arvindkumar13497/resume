import { motion } from 'framer-motion'
import { experience } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'

export function ExperienceSection() {
  return (
    <section id="experience" className="section-card">
      <SectionHeading
        eyebrow="Experience"
        title="Product-minded frontend leadership across scale and complexity."
        description="Each role shaped my approach to craft, systems thinking, and cross-team execution."
      />
      <div className="timeline">
        {experience.map((item, index) => (
          <motion.div
            key={item.company}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <p className="timeline-period">{item.period}</p>
              <h3>{item.company}</h3>
              <p>{item.role}</p>
              <p className="timeline-summary">{item.summary}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
