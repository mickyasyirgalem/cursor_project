import { useTheme } from './hooks/useTheme'
import Header from './components/Header'
import TopNotification from './components/TopNotification'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Work from './components/Work'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MatrixBackground from './components/MatrixBackground'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="antialiased bg-white text-slate-900 dark:bg-[#060A08] dark:text-slate-100 selection:bg-slate-900 selection:text-white dark:selection:bg-white dark:selection:text-black relative">
        <MatrixBackground />
        <div className="relative z-10">
          <TopNotification />
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Hero />
          <Services />
          <Pricing />
          <Work />
          <Process />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App

