import { useEffect, useState } from 'react'
import './App.css'
import { PortfolioPage } from './pages/PortfolioPage'

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return <PortfolioPage theme={theme} toggleTheme={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))} />
}

export default App
