import type { ExperienceEntry, NavItem, ProjectItem, SkillGroup, SocialLink } from '../types'

export const personalInfo = {
  name: 'Arvind Kumar',
  title: 'Senior Frontend Developer',
  email: 'arvindkumar.dev04@gmail.com',
  phone: '+91 8840152141, 8318214179',
  location: 'Kanpur, India',
  github: 'https://github.com/arvindkumar13497',
  linkedin: 'https://linkedin.com/in/arvind-kumar-319602109',
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Core Frontend',
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    title: 'State & UI',
    items: ['Redux', 'Redux Toolkit', 'Context API', 'MUI', 'CoreUI', 'Tailwind CSS'],
  },
  {
    title: 'Architecture',
    items: ['Frontend Architecture', 'Reusable Component Systems', 'Responsive UI/UX', 'Authentication & Authorization'],
  },
  {
    title: 'Performance & SEO',
    items: ['REST API Integration', 'Performance Optimization', 'Core Web Vitals', 'Schema Markup', 'Meta Tags', 'SEO'],
  },
  {
    title: 'Tools & Quality',
    items: ['Git', 'Chrome DevTools', 'Jest', 'Enzyme', 'Testing', 'Debugging'],
  },
]

export const experience: ExperienceEntry[] = [
  {
    company: 'NexaIntelliX Pvt. Ltd',
    role: 'Frontend Developer',
    period: 'March 2024 – Present',
    summary:
      'Leading frontend development for Realigno ERP and Zyluxx.com with reusable React components, secure authentication, REST API integration, and performance-focused ecommerce and ERP experiences.',
  },
  {
    company: 'Okoders.com',
    role: 'React.js Developer',
    period: 'March 2022 – March 2024',
    summary:
      'Delivered Darto.in and Imsom.org with secure login flows, tournament/event interfaces, responsive UI components, API integrations, and improved application performance.',
  },
  {
    company: 'Euro Footwear Pvt. Ltd.',
    role: 'Frontend Developer',
    period: 'Jan 2021 – Feb 2022',
    summary:
      'Built responsive ERP interfaces for inventory, orders, vendors, and reports while implementing reusable components, role-based access, and real-time data interactions.',
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'Realigno',
    category: 'ERP Platform',
    description:
      'An ERP platform with employee, reports, and calibration management modules built with scalable React components and secure integrations.',
    stack: ['React.js', 'REST APIs', 'Authentication', 'ERP Modules'],
    impact: 'Improved maintainability and speed for complex admin workflows across multiple business modules.',
  },
  {
    title: 'Zyluxx.com',
    category: 'Multi-Vendor Ecommerce',
    description:
      'A SEO-friendly ecommerce experience built with Next.js and Redux Toolkit for product listing, cart, checkout, and payment flows.',
    stack: ['Next.js', 'Redux Toolkit', 'SEO', 'Payment Gateway'],
    impact: 'Strengthened product discovery and conversion-focused UX across desktop and mobile.',
  },
  {
    title: 'Darto.in',
    category: 'Gaming Platform',
    description:
      'A community-driven gaming experience with responsive UI, secure login, tournament listings, and real-time participation features.',
    stack: ['React.js', 'API Integration', 'Responsive UI', 'Authentication'],
    impact: 'Delivered a polished, engaging interface for live events and tournament experiences.',
  },
  {
    title: 'Imsom.org',
    category: 'Membership Platform',
    description:
      'A membership-focused platform for events, donations, and user-friendly administration experiences.',
    stack: ['React.js', 'Redux', 'Membership UI', 'API Integration'],
    impact: 'Improved member-facing journeys and simplified events and donation workflows.',
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'Email', href: 'mailto:arvindkumar.dev04@gmail.com', icon: 'mail' },
  { label: 'GitHub', href: 'https://github.com/arvindkumar13497', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/arvind-kumar-319602109', icon: 'linkedin' },
]
