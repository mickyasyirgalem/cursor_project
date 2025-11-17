import { useEffect, useState } from 'react'
import { ShieldCheck, LayoutDashboard, Briefcase, Clock, Award, Shield, Globe, ServerCog, ImagePlus, LayoutTemplate } from 'lucide-react'
import frontWebsite from '../assets/frontwebsite.webp'
import frontErp from '../assets/fronterp.webp'

export default function Hero() {
  const headlineFull = 'Websites and ERP systems that move your business forward'
  const paragraphFull =
    'AWRA ICT designs and delivers fast, accessible websites and robust ERP solutions. We tailor every build to your operations so you can scale with confidence.'
  const [headlineText, setHeadlineText] = useState('')
  const [paragraphText, setParagraphText] = useState('')

  useEffect(() => {
    const timeouts = []

    const typeText = (text, setter, onComplete, speed = 12) => {
      let index = 0
      const type = () => {
        setter(text.slice(0, index + 1))
        if (index < text.length - 1) {
          const id = setTimeout(() => {
            index += 1
            type()
          }, speed)
          timeouts.push(id)
        } else if (onComplete) {
          const id = setTimeout(onComplete, 80)
          timeouts.push(id)
        }
      }
      type()
    }

    typeText(headlineFull, setHeadlineText, () => typeText(paragraphFull, setParagraphText, null, 10))

    return () => {
      timeouts.forEach((id) => clearTimeout(id))
    }
  }, [headlineFull, paragraphFull])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(300px_200px_at_20%_20%,#8b5cf6,transparent),radial-gradient(300px_200px_at_80%_0%,#7c3aed,transparent)] dark:hidden"></div>
        <div className="hidden dark:block absolute inset-0 opacity-[0.18]" style={{
          backgroundImage: `
            radial-gradient(1000px 600px at 50% -10%, rgba(139, 92, 246, 0.12), transparent 60%),
            radial-gradient(700px 400px at 10% 10%, rgba(139, 92, 246, 0.08), transparent 60%),
            linear-gradient(to right, rgba(139, 92, 246, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.12) 1px, transparent 1px);
          `,
          backgroundSize: `auto, auto, 24px 24px, 24px 24px`,
          backgroundPosition: `center, center, center, center`
        }}></div>
      </div>

      <div className="sm:px-6 lg:px-8 sm:py-20 lg:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-violet-50 text-violet-700 border border-violet-200/80 dark:bg-white/10 dark:text-zinc-200 dark:border-white/10/30 text-xs ">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="font-medium">Professional • Reliable • Scalable</span>
            </div>
            <div className="sr-only">
              <p>{headlineFull}</p>
              <p>{paragraphFull}</p>
            </div>
            <h1
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight min-h-[3.5rem]"
              aria-live="polite"
            >
              {headlineText}
            </h1>
            <p
              className="mt-5 text-base sm:text-lg max-w-2xl text-zinc-600 dark:text-zinc-200/80 min-h-[4.5rem]"
              aria-live="polite"
            >
              {paragraphText}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#services" className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-md text-white dark:bg-white dark:text-black hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 bg-zinc-900 ">
                <LayoutDashboard className="w-4 h-4" />
                <span className="text-sm font-medium">Explore services</span>
              </a>
              <a href="#work" className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-md border dark:border-white/10/30 dark:hover:border-white/25/50 dark:hover:bg-white/5/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 border-zinc-200/70 hover:border-zinc-300 hover:bg-zinc-50 ">
                <Briefcase className="w-4 h-4" />
                <span className="text-sm font-medium">See our work</span>
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-zinc-500 dark:text-zinc-200/70">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>On‑time delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Quality-first builds</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Security best practices</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="group relative overflow-hidden rounded-xl border dark:border-white/10/20 bg-white hover:shadow-sm hover:-translate-y-0.5 transition transform border-zinc-200/70 dark:bg-black/50 ">
                <div className="aspect-[16/10] bg-zinc-100 dark:bg-zinc-900">
                  <img src={frontWebsite} alt="Website interface mockup" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/80 dark:bg-black/50 backdrop-blur border dark:border-white/10/30 border-zinc-200/70">
                    <Globe className="w-3.5 h-3.5 text-violet-600 dark:text-zinc-200" />
                    <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">Website Design</span>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl border dark:border-white/10/20 bg-white hover:shadow-sm hover:-translate-y-0.5 transition transform border-zinc-200/70 dark:bg-black/50 ">
                <div className="aspect-[16/10] bg-zinc-100 dark:bg-zinc-900">
                  <img src={frontErp} alt="ERP analytics dashboard visualization" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/80 dark:bg-black/50 backdrop-blur border dark:border-white/10/30 border-zinc-200/70">
                    <ServerCog className="w-3.5 h-3.5 text-violet-600 dark:text-zinc-200" />
                    <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">ERP Systems</span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl border border-dashed p-4 dark:bg-white/5 hover:border-[#00ff41]/50 transition border-zinc-300 dark:border-white/10/30 bg-zinc-50/70 ">
                <div className="h-full min-h-[160px] flex flex-col items-center justify-center text-center">
                  <ImagePlus className="w-6 h-6 text-zinc-500 dark:text-zinc-200/70" />
                  <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">Your website screenshot</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-200/60">We'll add it once you share assets</p>
                </div>
              </div>
              <div className="relative rounded-xl border border-dashed p-4 dark:bg-white/5 hover:border-[#00ff41]/50 transition border-zinc-300 dark:border-white/10/30 bg-zinc-50/70 ">
                <div className="h-full min-h-[160px] flex flex-col items-center justify-center text-center">
                  <LayoutTemplate className="w-6 h-6 text-zinc-500 dark:text-zinc-200/70" />
                  <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">Your ERP dashboard</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-200/60">Placeholder for your ERP screens</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

