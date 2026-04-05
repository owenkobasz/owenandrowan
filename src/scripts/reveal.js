const VARIANTS = {
  default: (el) => el.classList.add('is-visible'),
  stamp: (el) => {
    el.classList.add('is-pressed')
    setTimeout(() => el.classList.add('is-inked'), 80)
  },
  botanical: (el) => {
    el.querySelectorAll('path').forEach((path) => {
      const len = path.getTotalLength?.() ?? 800
      path.style.setProperty('--path-length', String(len))
    })
    el.classList.add('is-visible')
  },
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      const variant = entry.target.dataset.reveal || 'default'
      const handler = VARIANTS[variant] ?? VARIANTS.default
      handler(entry.target)
      observer.unobserve(entry.target)
    })
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
)

document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))

document.addEventListener('astro:page-load', () => {
  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
})
