import { useEffect, useState } from 'react'
import { AboutSection } from '../components/sections/AboutSection'
import { AchievementsSection } from '../components/sections/AchievementsSection'
import { ContactSection } from '../components/sections/ContactSection'
import { ExperienceSection } from '../components/sections/ExperienceSection'
import { HeroSection } from '../components/sections/HeroSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { SkillsSection } from '../components/sections/SkillsSection'
import { BackToTop } from '../components/layout/BackToTop'
import { Footer } from '../components/layout/Footer'
import { LoadingScreen } from '../components/layout/LoadingScreen'
import { Navbar } from '../components/layout/Navbar'
import { ScrollProgress } from '../components/layout/ScrollProgress'


export function PortfolioPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 800)
    return () => window.clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="app-shell">
      <ScrollProgress />
      <div className="aurora-layer" aria-hidden="true" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
