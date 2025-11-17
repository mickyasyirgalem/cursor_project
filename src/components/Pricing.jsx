import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Landing Page',
    price: '10,000',
    tierLabel: 'Basic Tier',
    description: 'Best for individuals or businesses needing a single-page online presence.',
    features: [
      '1-page website',
      'Hero section + intro + contact',
      'Template-based design',
      'Mobile responsive',
    ],
    featured: false,
  },
  {
    name: 'Basic Website',
    price: '25,000',
    tierLabel: 'Pro Tier',
    badge: 'Most popular',
    description: 'Best for small businesses needing a simple, multi-section site.',
    features: [
      '2-3 pages',
      'Customized layout',
      'Mobile responsive',
      'Contact form',
    ],
    featured: true,
  },
  {
    name: 'Pro Website',
    price: '45,000',
    tierLabel: 'Custom Tier',
    description: 'Best for brands needing clear storytelling and multiple sections.',
    features: [
      'Up to 5 pages',
      'Custom styling',
      'Mobile responsive',
      'SEO',
    ],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
            Pricing plans
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Choose the right package for your website
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-200/80">
            Every plan is mobile responsive and delivered fast. We’ll help you pick the option that best
            matches your goals.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-6 sm:p-8 flex flex-col gap-6 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:-translate-y-1 ${
                plan.featured
                  ? 'border-violet-500/70 bg-white/95 shadow-2xl shadow-violet-500/20 dark:bg-zinc-900'
                  : 'border-zinc-200/60 bg-white/90 dark:border-white/10 dark:bg-zinc-900'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center rounded-full border border-zinc-200 dark:border-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-200/80">
                  {plan.tierLabel}
                </span>
                {plan.badge && (
                  <span className="inline-flex items-center rounded-full bg-violet-600/10 px-3 py-1 text-xs font-medium text-violet-600 dark:text-violet-300">
                    {plan.badge}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                  <span className="text-lg text-zinc-500 dark:text-zinc-400">ETB</span>
                </div>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-200/80">{plan.description}</p>
              </div>

              <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200/90">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-600 dark:text-violet-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <a
                  href="#contact"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    plan.featured
                      ? 'bg-violet-600 text-white hover:bg-violet-500'
                      : 'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900'
                  }`}
                >
                  Get started
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-400">
          Prices exclude hosting, domain, and third-party services. We’ll help you choose the best options for
          your needs.
        </p>
      </div>
    </section>
  )
}

