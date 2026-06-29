export interface NavItem {
  label: string
  href: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  summary: string
}

export interface ProjectItem {
  title: string
  category: string
  description: string
  stack: string[]
  impact: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}
