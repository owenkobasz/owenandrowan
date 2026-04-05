/// <reference path="../.astro/types.d.ts" />

interface Window {
  __toggleDarkMode: () => void
  checkRSVPPassword: () => void
  submitRSVP: (e: Event) => void
}
