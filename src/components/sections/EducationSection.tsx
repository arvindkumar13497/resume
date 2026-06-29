import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

export function EducationSection() {
  return (
    <motion.section id="education" className="section-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation for modern product engineering."
        description="A strong technical base combined with hands-on experience in shipping real products."
      />
      <div className="education-card">
        <div className="education-icon"><GraduationCap size={22} /></div>
        <div>
          <h3>Bachelor of Computer Applications</h3>
          <p>Chhatrapati Shahu Ji Maharaj University</p>
          <span>2013 – 2016</span>
        </div>
      </div>
    </motion.section>
  )
}
