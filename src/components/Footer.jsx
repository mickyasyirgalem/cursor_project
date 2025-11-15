import { Mail, Linkedin, Github } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Footer() {
 const [year, setYear] = useState(2025)

 useEffect(() => {
 setYear(new Date().getFullYear())
 }, [])

 return (
 <footer className="py-10 border-t dark:border-white/10 border-zinc-200/60">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
 <div className="flex items-center gap-3">
 <div className="h-7 w-7 rounded-md dark:bg-white text-white dark:text-black grid place-items-center ring-1 dark:ring-white/20 bg-zinc-900 ring-zinc-200/70 ">
 <span className="text-[11px] font-semibold tracking-[0.08em]">AW</span>
 </div>
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

