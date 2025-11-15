import { MessagesSquare, Mail, Phone, ShieldCheck, Send } from 'lucide-react'

export default function Contact() {
 const handleSubmit = (e) => {
 e.preventDefault()
 window.location.href = 'mailto:hello@awra-ict.example?subject=Project%20inquiry%20(AWRA%20ICT)'
 }

 return (
 <section id="contact" className="py-16 sm:py-20 lg:py-24 border-t dark:border-white/10 border-zinc-200/60">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2">
 <div className="rounded-2xl border dark:border-white/10 bg-white p-6 sm:p-8 border-zinc-200/70 dark:bg-zinc-900 ">
 <div className="flex items-start justify-between">
 <div>
 <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight ">Tell us about your project</h3>
 <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-200/80">Share goals, timeline, and assets. We'll respond within 1 business day.</p>
 </div>
 <MessagesSquare className="w-6 h-6 text-violet-600 dark:text-zinc-200" />
 </div>

 <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
 <div className="sm:col-span-1">
 <label htmlFor="name" className="block text-xs font-medium text-zinc-600 dark:text-zinc-200/80">Name</label>
 <input
 id="name"
 type="text"
 placeholder="Your name"
                className="mt-1 w-full h-11 rounded-md bg-white border dark:border-white/20 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/60 dark:focus:ring-violet-500/60 dark:bg-zinc-900 dark:text-zinc-200 border-zinc-200/70 placeholder:text-zinc-400 dark:placeholder:text-zinc-400"
 />
 </div>
 <div className="sm:col-span-1">
 <label htmlFor="email" className="block text-xs font-medium text-zinc-600 dark:text-zinc-200/80">Email</label>
 <input
 id="email"
 type="email"
 placeholder="you@company.com"
                className="mt-1 w-full h-11 rounded-md bg-white border dark:border-white/20 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/60 dark:focus:ring-violet-500/60 dark:bg-zinc-900 dark:text-zinc-200 border-zinc-200/70 placeholder:text-zinc-400 dark:placeholder:text-zinc-400"
 />
 </div>
 <div className="sm:col-span-2">
 <label htmlFor="message" className="block text-xs font-medium text-zinc-600 dark:text-zinc-200/80">Project details</label>
 <textarea
 id="message"
 rows="5"
 placeholder="Briefly describe your website or ERP needs..."
                className="mt-1 w-full rounded-md bg-white border dark:border-white/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/60 dark:focus:ring-violet-500/60 dark:bg-zinc-900 dark:text-zinc-200 border-zinc-200/70 placeholder:text-zinc-400 dark:placeholder:text-zinc-400"
 ></textarea>
 </div>
 <div className="sm:col-span-2 flex items-center justify-between gap-3">
 <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-200/70">
 <ShieldCheck className="w-4 h-4" />
 <span>Your information is kept confidential.</span>
 </div>
 <button
 type="submit"
 className="inline-flex items-center gap-2 h-11 px-5 rounded-md text-white dark:bg-white dark:text-black hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 bg-zinc-900 "
 >
 <Send className="w-4 h-4" />
 <span className="text-sm font-medium">Send inquiry</span>
 </button>
 </div>
 </form>
 </div>
 </div>

 <aside className="lg:col-span-1">
 <div className="rounded-2xl border dark:border-white/10 bg-white p-6 sm:p-8 border-zinc-200/70 dark:bg-zinc-900 ">
 <h4 className="text-lg font-semibold tracking-tight ">Quick contact</h4>
 <div className="mt-4 grid gap-3 text-sm">
                <a href="mailto:hello@awra-ict.example" className="inline-flex items-center gap-2 hover:text-violet-700 dark:hover:text-violet-300 transition-colors text-zinc-700 dark:text-zinc-200">
 <Mail className="w-4 h-4" />
 hello@awra-ict.example
 </a>
                <a href="tel:+10000000000" className="inline-flex items-center gap-2 hover:text-violet-700 dark:hover:text-violet-300 transition-colors text-zinc-700 dark:text-zinc-200">
 <Phone className="w-4 h-4" />
 +1 (000) 000‑0000
 </a>
 </div>
 <div className="mt-6 pt-6 border-t dark:border-white/10 border-zinc-200/70">
 <h5 className="text-sm font-medium text-zinc-700 dark:text-zinc-200">Share assets</h5>
 <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-200/70">Send logos, brand guide, screenshots, and reference links.</p>
 <div className="mt-3 rounded-md border border-dashed dark:bg-white/5 p-3 text-xs border-zinc-300 dark:border-white/20 bg-zinc-50/70 text-zinc-500 dark:text-zinc-200/70 ">
 Use email or your preferred drive link.
 </div>
 </div>
 </div>
 </aside>
 </div>
 </div>
 </section>
 )
}

