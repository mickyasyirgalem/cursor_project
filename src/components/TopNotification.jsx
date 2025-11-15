import { Sparkles, ArrowRight } from 'lucide-react'

export default function TopNotification() {
  return (
    <div className="hidden md:block">
      <div className="w-full text-xs md:text-sm border-b dark:border-white/10 text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/40 border-zinc-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span className="tracking-tight">We build reliable Websites & ERP systems for growing teams.</span>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 hover:text-violet-700 dark:hover:text-violet-300 transition-colors text-zinc-700 dark:text-zinc-200">
            <span>Get a quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

