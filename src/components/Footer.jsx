import { Mail, Linkedin, Github } from 'lucide-react'
import { useEffect, useState } from 'react'
import logoGradient from '../assets/logo_gradient.png'

export default function Footer() {
 const [year, setYear] = useState(2025)

 const scrollToTop = () => {
   window.scrollTo({ top: 0, behavior: 'smooth' })
 }

 useEffect(() => {
 setYear(new Date().getFullYear())
 }, [])

 return (
 <footer className="py-10 border-t dark:border-white/10 border-zinc-200/60">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
 <div className="flex items-center gap-3">
 <button
   type="button"
   onClick={scrollToTop}
   className="focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 rounded-full"
   aria-label="Scroll to top"
 >
   <img src={logoGradient} alt="AWRA ICT logo" className="h-9 w-9 object-contain" />
 </button>
 <div className="text-sm text-zinc-600 dark:text-zinc-200/70">© {year} AWRA ICT. All rights reserved.</div>
 </div>
 <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-200/70">
 <a href="#" className="inline-flex items-center gap-2 hover:text-violet-700 dark:hover:text-[#00ff41] transition-colors">
 <Linkedin className="w-4 h-4" />
 <span className="text-sm">LinkedIn</span>
 </a>
 <a href="#" className="inline-flex items-center gap-2 hover:text-violet-700 dark:hover:text-[#00ff41] transition-colors">
 <Github className="w-4 h-4" />
 <span className="text-sm">GitHub</span>
 </a>
 <a href="mailto:hello@awra-ict.example" className="inline-flex items-center gap-2 hover:text-violet-700 dark:hover:text-[#00ff41] transition-colors">
 <Mail className="w-4 h-4" />
 <span className="text-sm">Email</span>
 </a>
 </div>
 </div>
 </div>
 </footer>
 )
}

