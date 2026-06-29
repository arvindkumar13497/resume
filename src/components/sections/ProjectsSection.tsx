import { projects } from '../../data/content'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'

export function ProjectsSection() {
  return (
    <section id="projects" className="section-card">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work that balances aesthetics, performance, and business impact."
        description="Each product has been shaped for clarity, speed, and long-term maintainability."
      />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <GlassCard key={project.title} delay={index * 0.06}>
            <div className="project-top">
              <p className="project-type">{project.category}</p>
              <span className="pill">Featured</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="stack-row">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <p className="impact-copy">{project.impact}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
