import { useState } from 'react'
import { Sun, Moon, Menu, X, Mail } from 'lucide-react'

export default function Header({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b dark:border-white/10 supports-[backdrop-filter]:dark:bg-zinc-900/40 dark:bg-zinc-900/60 border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-8 w-8 rounded-md dark:bg-white text-white dark:text-black grid place-items-center ring-1 dark:ring-white/20 bg-zinc-900 ring-zinc-200/70">
              <span className="text-[12px] font-semibold tracking-[0.08em]">AW</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-semibold tracking-tight">AWRA ICT</span>
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400">Websites • ERP</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-violet-700 dark:hover:text-violet-300 transition-colors text-zinc-700 dark:text-zinc-200">Services</a>
            <a href="#pricing" className="hover:text-violet-700 dark:hover:text-violet-300 transition-colors text-zinc-700 dark:text-zinc-200">Pricing</a>
            <a href="#work" className="hover:text-violet-700 dark:hover:text-violet-300 transition-colors text-zinc-700 dark:text-zinc-200">Work</a>
            <a href="#process" className="hover:text-violet-700 dark:hover:text-violet-300 transition-colors text-zinc-700 dark:text-zinc-200">Process</a>
            <a href="#contact" className="hover:text-violet-700 dark:hover:text-violet-300 transition-colors text-zinc-700 dark:text-zinc-200">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              type="button"
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-md border dark:border-white/15 dark:hover:border-white/25 dark:hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 border-zinc-200/70 hover:border-zinc-300 hover:bg-zinc-50"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-zinc-200" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700" />
              )}
            </button>
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-md text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 bg-zinc-900">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Get in touch</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border dark:border-white/15 dark:hover:border-white/25 dark:hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 border-zinc-200/70 hover:border-zinc-300 hover:bg-zinc-50"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 dark:text-zinc-200" />
              ) : (
                <Menu className="w-5 h-5 dark:text-zinc-200" />
              )}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t dark:border-white/10 border-zinc-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid gap-2 text-sm">
            <a href="#services" className="py-2 hover:text-violet-700 dark:hover:text-violet-300 transition-colors text-zinc-700 dark:text-zinc-200">Services</a>
            <a href="#pricing" className="py-2 hover:text-violet-700 dark:hover:text-violet-300 transition-colors text-zinc-700 dark:text-zinc-200">Pricing</a>
            <a href="#work" className="py-2 hover:text-violet-700 dark:hover:text-violet-300 transition-colors text-zinc-700 dark:text-zinc-200">Work</a>
            <a href="#process" className="py-2 hover:text-violet-700 dark:hover:text-violet-300 transition-colors text-zinc-700 dark:text-zinc-200">Process</a>
            <a href="#contact" className="py-2 hover:text-violet-700 dark:hover:text-violet-300 transition-colors text-zinc-700 dark:text-zinc-200">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

