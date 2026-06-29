import { skillGroups } from '../../data/content'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'

export function SkillsSection() {
  return (
    <section id="skills" className="section-card">
      <SectionHeading
        eyebrow="Skills"
        title="A modern stack for ambitious product teams."
        description="From UI architecture to delivery quality, these are the capabilities I bring to every build."
      />
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <GlassCard key={group.title} delay={index * 0.05}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
