import { Upload, Globe, ServerCog, ShoppingBag, Image, LayoutDashboard, Link } from 'lucide-react'

export default function Work() {
 return (
 <section id="work" className="py-16 sm:py-20 lg:py-24 border-t dark:border-white/10 border-zinc-200/60">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-end justify-between gap-4">
 <div>
 <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight ">Selected work</h2>
 <p className="mt-2 text-zinc-600 dark:text-zinc-200/80">We'll showcase your past websites and ERP projects here. Send links and screenshots.</p>
 </div>
 <div className="hidden sm:flex items-center gap-2">
            <a href="#contact" className="inline-flex items-center gap-2 text-sm hover:text-violet-700 dark:hover:text-violet-300 transition-colors text-zinc-700 dark:text-zinc-200">
 <Upload className="w-4 h-4" />
 <span>Share assets</span>
 </a>
 </div>
 </div>

 <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="group rounded-xl overflow-hidden border dark:border-white/10 bg-white hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 transform border-zinc-200/70 dark:bg-zinc-900 animate-fade-in">
            <div className="aspect-[16/10] bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" alt="Marketing website screenshot" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-4 group-hover:bg-zinc-50 dark:group-hover:bg-zinc-800/50 transition-colors duration-300">
              <div className="flex items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md dark:bg-white/10 border dark:border-white/20 bg-zinc-100 text-zinc-700 dark:text-zinc-200 border-zinc-200/70 group-hover:scale-105 transition-transform duration-300">
                  <Globe className="w-3.5 h-3.5" />
                  Website
                </span>
              </div>
              <h3 className="mt-3 text-base font-semibold tracking-tight group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors duration-300">Marketing Website</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-200/80">Responsive site with CMS and analytics.</p>
            </div>
          </article>

          <article className="group rounded-xl overflow-hidden border dark:border-white/10 bg-white hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 transform border-zinc-200/70 dark:bg-zinc-900 animate-fade-in">
            <div className="aspect-[16/10] bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop" alt="Storage room inventory" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-4 group-hover:bg-zinc-50 dark:group-hover:bg-zinc-800/50 transition-colors duration-300">
              <div className="flex items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md dark:bg-white/10 border dark:border-white/20 bg-zinc-100 text-zinc-700 dark:text-zinc-200 border-zinc-200/70 group-hover:scale-105 transition-transform duration-300">
                  <ServerCog className="w-3.5 h-3.5" />
                  ERP
                </span>
              </div>
              <h3 className="mt-3 text-base font-semibold tracking-tight group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors duration-300">Inventory & Orders</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-200/80">Role‑based dashboards and workflows.</p>
            </div>
          </article>

          <article className="group rounded-xl overflow-hidden border dark:border-white/10 bg-white hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 transform border-zinc-200/70 dark:bg-zinc-900 animate-fade-in">
            <div className="aspect-[16/10] bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" alt="Banking and finance" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-4 group-hover:bg-zinc-50 dark:group-hover:bg-zinc-800/50 transition-colors duration-300">
              <div className="flex items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md dark:bg-white/10 border dark:border-white/20 bg-zinc-100 text-zinc-700 dark:text-zinc-200 border-zinc-200/70 group-hover:scale-105 transition-transform duration-300">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Website
                </span>
              </div>
              <h3 className="mt-3 text-base font-semibold tracking-tight group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors duration-300">E‑commerce</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-200/80">Product catalog, checkout, and integrations.</p>
            </div>
          </article>

          <article className="group rounded-xl overflow-hidden border-2 border-dashed dark:bg-white/5 hover:border-violet-400/70 transition border-zinc-300 dark:border-zinc-600 bg-zinc-50/70">
 <div className="aspect-[16/10] grid place-items-center">
 <div className="flex flex-col items-center text-center">
 <Image className="w-6 h-6 text-zinc-500 dark:text-zinc-200/70" />
 <h3 className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">Your website project</h3>
 <p className="text-xs text-zinc-500 dark:text-zinc-200/60">Add screenshot + live link</p>
 </div>
 </div>
 </article>

          <article className="group rounded-xl overflow-hidden border-2 border-dashed dark:bg-white/5 hover:border-violet-400/70 transition border-zinc-300 dark:border-zinc-600 bg-zinc-50/70">
 <div className="aspect-[16/10] grid place-items-center">
 <div className="flex flex-col items-center text-center">
 <LayoutDashboard className="w-6 h-6 text-zinc-500 dark:text-zinc-200/70" />
 <h3 className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">Your ERP project</h3>
 <p className="text-xs text-zinc-500 dark:text-zinc-200/60">Add dashboard screens</p>
 </div>
 </div>
 </article>

          <article className="group rounded-xl overflow-hidden border-2 border-dashed dark:bg-white/5 hover:border-violet-400/70 transition border-zinc-300 dark:border-zinc-600 bg-zinc-50/70">
 <div className="aspect-[16/10] grid place-items-center">
 <div className="flex flex-col items-center text-center">
 <Link className="w-6 h-6 text-zinc-500 dark:text-zinc-200/70" />
 <h3 className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">Add project links</h3>
 <p className="text-xs text-zinc-500 dark:text-zinc-200/60">We'll feature your case studies</p>
 </div>
 </div>
 </article>
 </div>
 </div>
 </section>
 )
}

