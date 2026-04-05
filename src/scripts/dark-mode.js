const saved = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const isDark = saved ? saved === 'dark' : prefersDark

document.documentElement.classList.toggle('dark', isDark)

function toggleDarkMode() {
  const next = document.documentElement.classList.toggle('dark')
  localStorage.setItem('theme', next ? 'dark' : 'light')
}

window.__toggleDarkMode = toggleDarkMode
