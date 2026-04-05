const KONAMI = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a',
]
let konamiIndex = 0

document.addEventListener('keydown', (e) => {
  if (e.key === KONAMI[konamiIndex]) {
    konamiIndex++
    if (konamiIndex === KONAMI.length) {
      document.dispatchEvent(new CustomEvent('easter-egg', { detail: 'konami' }))
      konamiIndex = 0
    }
  } else {
    konamiIndex = 0
  }
})

let stampClicks = 0
let stampTimer

const stampEl = document.querySelector('[data-easter="stamp"]')
stampEl?.addEventListener('click', () => {
  stampClicks++
  clearTimeout(stampTimer)
  stampTimer = setTimeout(() => { stampClicks = 0 }, 1500)
  if (stampClicks >= 5) {
    document.dispatchEvent(new CustomEvent('easter-egg', { detail: 'stamp' }))
    stampClicks = 0
  }
})

let hoverTimer
const botanicalEl = document.querySelector('[data-easter="botanical"]')
botanicalEl?.addEventListener('mouseenter', () => {
  hoverTimer = setTimeout(() => {
    document.dispatchEvent(new CustomEvent('easter-egg', { detail: 'botanical' }))
  }, 3000)
})
botanicalEl?.addEventListener('mouseleave', () => {
  clearTimeout(hoverTimer)
})

const hiddenWordEl = document.querySelector('[data-easter="word"]')
hiddenWordEl?.addEventListener('click', () => {
  const aside = document.getElementById('easter-aside')
  aside?.classList.toggle('hidden')
})

document.addEventListener('easter-egg', (e) => {
  const detail = e.detail
  if (detail === 'konami') showKonamiOverlay()
  else if (detail === 'stamp') triggerConfetti()
  else if (detail === 'botanical') bloomIllustration()
})

function triggerConfetti() {
  import('canvas-confetti').then(({ default: confetti }) => {
    confetti({
      particleCount: 80,
      spread: 70,
      colors: ['#B85C38', '#7A8C6A', '#A8C0CC', '#C49A3C', '#F2EBD9'],
      origin: { y: 0.6 },
    })
  })
}

function showKonamiOverlay() {
  const overlay = document.getElementById('konami-overlay')
  if (!overlay) return
  overlay.classList.remove('hidden')
  overlay.addEventListener('click', () => overlay.classList.add('hidden'), { once: true })
}

function bloomIllustration() {
  botanicalEl?.classList.add('bloom')
}
