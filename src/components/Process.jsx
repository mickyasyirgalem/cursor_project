import { useState, useEffect, useRef } from 'react'

export default function Process() {
 const steps = [
 { number: '01', title: 'Discover', description: 'Workshops, requirements, and success criteria.' },
 { number: '02', title: 'Design', description: 'UX flows, UI, prototypes, and validation.' },
 { number: '03', title: 'Build', description: 'Development, integrations, QA, and security.' },
 { number: '04', title: 'Launch', description: 'Deployment, handover, and ongoing support.' },
 ]

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
 <section id="process" ref={sectionRef} className="py-16 sm:py-20 lg:py-24">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="max-w-3xl">
 <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight ">How we work</h2>
 <p className="mt-2 text-zinc-600 dark:text-zinc-200/80">A transparent, collaborative process with clear milestones.</p>
 </div>

 <ol className="mt-10 grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
 {steps.map((step, index) => (
 <li 
   key={step.number} 
   className={`relative rounded-xl border dark:border-white/10 p-5 bg-white border-zinc-200/70 dark:bg-zinc-900 transition-all duration-700 ease-out ${
     isVisible 
       ? 'opacity-100 translate-y-0' 
       : 'opacity-0 translate-y-10'
   }`}
   style={{
     transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
   }}
 >
 <div className="flex items-center gap-3">
 <div className="h-9 w-9 rounded-md dark:bg-white/10 grid place-items-center bg-zinc-100 ">
 <span className="text-sm font-medium dark:text-zinc-200">{step.number}</span>
 </div>
 <span className="text-base font-semibold tracking-tight ">{step.title}</span>
 </div>
 <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-200/80">{step.description}</p>
 </li>
 ))}
 </ol>
 </div>
 </section>
 )
}

