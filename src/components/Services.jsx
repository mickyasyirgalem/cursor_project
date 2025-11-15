import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Globe, ServerCog, ChevronRight, Zap, Search, Accessibility, Paintbrush, Database, Lock, Workflow, Cloud } from 'lucide-react'

export default function Services() {
 const [isVisible, setIsVisible] = useState(false)
 const sectionRef = useRef(null)

 useEffect(() => {
   const observer = new IntersectionObserver(
     (entries) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
           setIsVisible(true)
         } else {
           setIsVisible(false)
         }
       })
     },
     {
       threshold: 0.1, // Trigger when 10% of the section is visible
       rootMargin: '0px 0px -100px 0px' // Trigger slightly before it's fully in view
     }
   )

   const currentRef = sectionRef.current
   if (currentRef) {
     // Check if section is already visible on mount
     const rect = currentRef.getBoundingClientRect()
     const isInView = rect.top < window.innerHeight && rect.bottom > 0
     if (isInView) {
       setIsVisible(true)
     }
     
     observer.observe(currentRef)
   }

   return () => {
     if (currentRef) {
       observer.unobserve(currentRef)
     }
   }
 }, [])

 return (
 <section id="services" ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-end justify-between gap-4">
 <div>
 <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight ">What we do</h2>
 <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-200/80">End‑to‑end delivery: discovery, design, development, testing, launch, and ongoing support.</p>
 </div>
 <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm hover:text-violet-700 dark:hover:text-[#00ff41] transition-colors text-zinc-700 dark:text-zinc-200/90">
 <span>Start a project</span>
 <ArrowRight className="w-4 h-4" />
 </a>
 </div>

 <div className="mt-10 grid md:grid-cols-2 gap-6 lg:gap-8">
 <div className={`group relative rounded-2xl border dark:border-white/10 bg-white p-6 sm:p-8 hover:-translate-y-0.5 transition-all duration-700 ease-out transform border-zinc-200/70 dark:bg-zinc-900 ${
   isVisible 
     ? 'opacity-100 translate-x-0' 
     : 'opacity-0 -translate-x-10'
 }`}
 style={{
   transitionDelay: isVisible ? '0ms' : '0ms'
 }}>
 <div className="flex items-start justify-between">
 <div className="flex items-center gap-3">
 <div className="h-10 w-10 rounded-md bg-violet-600/10 text-violet-600 dark:bg-white/10 dark:text-zinc-200 grid place-items-center ring-1 ring-violet-500/20 dark:ring-white/20/30 ">
 <Globe className="w-5 h-5" />
 </div>
 <h3 className="text-xl font-semibold tracking-tight ">Website Design & Development</h3>
 </div>
 <ChevronRight className="w-5 h-5 group-hover:text-violet-500 dark:group-hover:text-[#00ff41] transition text-zinc-400" />
 </div>
 <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-200/80">Marketing sites, product sites, and portals built with performance, SEO, and accessibility in mind.</p>
 <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
 <li className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200/90">
 <Zap className="w-4 h-4 text-violet-500 dark:text-zinc-200" />
 <span>Fast, responsive UI</span>
 </li>
 <li className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200/90">
 <Search className="w-4 h-4 text-violet-500 dark:text-zinc-200" />
 <span>SEO & analytics</span>
 </li>
 <li className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200/90">
 <Accessibility className="w-4 h-4 text-violet-500 dark:text-zinc-200" />
 <span>WCAG compliance</span>
 </li>
 <li className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200/90">
 <Paintbrush className="w-4 h-4 text-violet-500 dark:text-zinc-200" />
 <span>Brand‑aligned visuals</span>
 </li>
 </ul>
 </div>

 <div className={`group relative rounded-2xl border dark:border-white/10 bg-white p-6 sm:p-8 hover:-translate-y-0.5 transition-all duration-700 ease-out transform border-zinc-200/70 dark:bg-zinc-900 ${
   isVisible 
     ? 'opacity-100 translate-x-0' 
     : 'opacity-0 translate-x-10'
 }`}
 style={{
   transitionDelay: isVisible ? '150ms' : '0ms'
 }}>
 <div className="flex items-start justify-between">
 <div className="flex items-center gap-3">
 <div className="h-10 w-10 rounded-md bg-violet-600/10 text-violet-600 dark:bg-white/10 dark:text-zinc-200 grid place-items-center ring-1 ring-violet-500/20 dark:ring-white/20/30 ">
 <ServerCog className="w-5 h-5" />
 </div>
 <h3 className="text-xl font-semibold tracking-tight ">ERP Systems & Integrations</h3>
 </div>
 <ChevronRight className="w-5 h-5 group-hover:text-violet-500 dark:group-hover:text-[#00ff41] transition text-zinc-400" />
 </div>
 <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-200/80">Custom modules, role‑based dashboards, and secure workflows integrated into your stack.</p>
 <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
 <li className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200/90">
 <Database className="w-4 h-4 text-violet-500 dark:text-zinc-200" />
 <span>Data modeling & APIs</span>
 </li>
 <li className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200/90">
 <Lock className="w-4 h-4 text-violet-500 dark:text-zinc-200" />
 <span>RBAC & security</span>
 </li>
 <li className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200/90">
 <Workflow className="w-4 h-4 text-violet-500 dark:text-zinc-200" />
 <span>Process automation</span>
 </li>
 <li className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200/90">
 <Cloud className="w-4 h-4 text-violet-500 dark:text-zinc-200" />
 <span>On‑prem or cloud</span>
 </li>
 </ul>
 </div>
 </div>
 </div>
 </section>
 )
}

