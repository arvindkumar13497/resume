import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personalInfo } from '../../data/content'

export function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 {personalInfo.name}. Senior Frontend Developer based in {personalInfo.location}.</p>
      <div className="footer-socials">
        <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={18} /></a>
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
        <a href={`mailto:${personalInfo.email}`} aria-label="Email"><Mail size={18} /></a>
      </div>
    </footer>
  )
}
