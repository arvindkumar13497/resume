import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personalInfo, socialLinks } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'

export function ContactSection() {
  return (
    <motion.section id="contact" className="section-card contact-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something exceptional together."
        description="Open to frontend opportunities, product collaborations, and high-quality web experiences."
      />
      <div className="contact-details">
        <a href={`mailto:${personalInfo.email}`}><Mail size={16} /> {personalInfo.email}</a>
        <a href={`tel:${personalInfo.phone}`}><Phone size={16} /> {personalInfo.phone}</a>
        <span><MapPin size={16} /> {personalInfo.location}</span>
      </div>
      <form className="contact-form">
        <div className="input-row">
          <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
        </div>
        <label>
          <span>Message</span>
          <textarea name="message" rows={5} placeholder="Tell me about the product or challenge you’re working on." />
        </label>
        <button className="btn btn-primary" type="submit">
          Send Message <Send size={16} />
        </button>
      </form>
      <div className="social-row">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.icon === 'mail' ? <Mail size={16} /> : null}
            {link.icon === 'github' ? <FaGithub size={16} /> : null}
            {link.icon === 'linkedin' ? <FaLinkedin size={16} /> : null}
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </motion.section>
  )
}
