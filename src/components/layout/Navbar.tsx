import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navigation } from '../../data/content'



export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
      <a className="brand" href="#home">
        <span className="brand-mark">AK</span>
        <span>Arvind Kumar</span>
      </a>

      <div className="nav-actions">
        <nav className="nav-links" aria-label="Primary">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>


        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mobile-nav"
            aria-label="Mobile"
          >
            {navigation.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
