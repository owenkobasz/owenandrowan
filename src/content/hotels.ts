export interface Hotel {
  id: string
  name: string
  tagline: string
  description: string
  illustration: string
  photo?: string
  url: string
  practical: string
}

export const hotels: Hotel[] = [
  {
    id: 'inn-on-alameda',
    name: 'Inn on Alameda',
    tagline: 'Boutique, walkable, genuinely charming.',
    description: "A small, owner-operated inn tucked between the Plaza and Canyon Road. The rooms feel like a thoughtful person lives there. Friendly staff, good breakfast, and a five-minute walk to the venue.",
    illustration: '/illustrations/hotels/inn-on-alameda.svg',
    photo: '/images/hotels/inn-on-alameda.webp',
    url: 'https://innonalamedа.com',
    practical: '~10 min walk to the venue.',
  },
  {
    id: 'la-fonda',
    name: 'Pinon Court — La Fonda',
    tagline: 'Historic, grand, right on the Plaza.',
    description: "La Fonda has been hosting guests on the Plaza since 1922. The Pinon Court rooms are the quieter, more tucked-away option inside the property. You are literally standing in the center of Santa Fe's history.",
    illustration: '/illustrations/hotels/la-fonda.svg',
    photo: '/images/hotels/pinon-court-la-fonda.jpg',
    url: 'https://lafondasantafe.com',
    practical: 'On the Plaza — 8 min walk to the venue.',
  },
  {
    id: 'el-rey',
    name: 'El Rey Court',
    tagline: 'Mid-century motor court, beautifully restored.',
    description: "A 1930s motor court that was rescued and done exactly right. Casita-style rooms around a courtyard, strong design sensibility, great bar. The vibe is cool Santa Fe, not historic Santa Fe.",
    illustration: '/illustrations/hotels/el-rey.svg',
    photo: '/images/hotels/el-rey-court.jpg',
    url: 'https://elreycourt.com',
    practical: 'A short drive or Lyft from the venue.',
  },
  {
    id: 'hilton-historic-plaza',
    name: 'Hilton Santa Fe Historic Plaza',
    tagline: 'Reliable, central, easy to book.',
    description: "It's a Hilton, so you know what you're getting: comfortable rooms, good service, no surprises. The location on the Plaza means everything is walkable, and it's easy to book for groups.",
    illustration: '/illustrations/hotels/hilton-historic-plaza.svg',
    photo: '/images/hotels/hilton-santa-fe-historic-plaza.jpg',
    url: 'https://hilton.com',
    practical: 'On the Plaza — 8 min walk to the venue.',
  },
  {
    id: 'drury',
    name: 'The Drury',
    tagline: 'The haunted one. No, really.',
    description: "The Drury occupies a building that has been, at various points in Santa Fe history, a post office, a federal courthouse, and allegedly a site of considerable supernatural activity. Great location. Allegedly.",
    illustration: '/illustrations/hotels/drury.svg',
    photo: '/images/hotels/the-drury.jpg',
    url: 'https://druryhotels.com',
    practical: 'Downtown — 10 min walk to the venue.',
  },
  {
    id: 'ten-thousand-waves',
    name: 'Ten Thousand Waves',
    tagline: 'Japanese mountain spa. Worth every penny.',
    description: "A Japanese-style mountain spa with cottages carved into the hillside above Santa Fe. The outdoor soaking tubs, the altitude, the quiet — it's a completely different experience from staying downtown. If you can spring for it, do.",
    illustration: '/illustrations/hotels/ten-thousand-waves.svg',
    photo: '/images/hotels/ten-thousand-waves.jpeg',
    url: 'https://tenthousandwaves.com',
    practical: '15 min drive up the mountain. You will need a car.',
  },
  {
    id: 'the-mystic',
    name: 'The Mystic',
    tagline: 'The black sheep pick.',
    description: "Smaller, weirder, more Santa Fe than the others. The Mystic leans into the city's eccentric reputation without being embarrassing about it. Good spot if you want something that feels local rather than hotel-y.",
    illustration: '/illustrations/hotels/the-mystic.svg',
    photo: '/images/hotels/the-mystic.jpg',
    url: 'https://themysticsantafe.com',
    practical: 'Downtown — short walk or ride to the venue.',
  },
]
