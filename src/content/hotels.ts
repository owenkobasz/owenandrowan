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
    tagline: 'Boutique, walkable, charming.',
    description: "A small, owner-operated inn tucked between the Plaza and Canyon Road. The rooms feel like a thoughtful person lives there. Friendly staff, good breakfast, and a five-minute walk to the venue.",
    illustration: '/illustrations/hotels/inn-on-alameda.svg',
    photo: '/images/hotels/inn-on-alameda.webp',
    url: 'https://innonalamedа.com',
    practical: '~10 min walk to the venue.',
  },
  {
    id: 'la-fonda',
    name: 'Pinon Court — La Fonda',
    tagline: 'Historic, grand, walkable.',
    description: "A nice and conveniently located hotel. La Fonda has been hosting guests on the Plaza since 1922. The Pinon Court rooms are the quieter, more tucked-away option inside the property.",
    illustration: '/illustrations/hotels/la-fonda.svg',
    photo: '/images/hotels/pinon-court-la-fonda.jpg',
    url: 'https://lafondasantafe.com',
    practical: 'On the Plaza — 8 min walk to the venue.',
  },
  {
    id: 'el-rey',
    name: 'El Rey Court',
    tagline: 'Mid-century motor court, beautifully restored, good vibes.',
    description: "A 1930s motor court that was restored. Casita-style rooms around a courtyard with strong design sensibility and good vibes. We love going to the bar and pool.",
    illustration: '/illustrations/hotels/el-rey.svg',
    photo: '/images/hotels/el-rey-court.jpg',
    url: 'https://elreycourt.com',
    practical: 'A short drive or Lyft from the venue.',
  },
  {
    id: 'inn-of-the-anasazi',
    name: 'Rosewood Inn of the Anasazi',
    tagline: 'Quiet luxury, right on the Plaza.',
    description: "The best hotel on the Plaza that most people haven't heard of. Rosewood-quality rooms in an old adobe building — good linens, thoughtful service, a restaurant worth going to even if you're not staying. The kind of place that doesn't need to announce itself.",
    illustration: '/illustrations/hotels/inn-of-the-anasazi.svg',
    photo: '/images/hotels/Rosewood Inn of the Anasazi.jpg',
    url: 'https://www.rosewoodhotels.com/en/inn-of-the-anasazi-santa-fe',
    practical: 'On the Plaza — 8 min walk to the venue.',
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
    description: "The Drury occupies a building that has been, at various points in Santa Fe history, a post office, a federal courthouse, and allegedly a site of considerable supernatural activity. If you stay here please let me know since I really want to visit the basement (— Owen).",
    illustration: '/illustrations/hotels/drury.svg',
    photo: '/images/hotels/the-drury.jpg',
    url: 'https://druryhotels.com',
    practical: 'Downtown — 10 min walk to the venue.',
  },
  {
    id: 'ten-thousand-waves',
    name: 'Ten Thousand Waves',
    tagline: 'Japanese mountain spa.',
    description: "The luxury pick. A Japanese-style mountain spa with cottages carved into the hillside above Santa Fe. Staying here gives you access to the hot tubs.",
    illustration: '/illustrations/hotels/ten-thousand-waves.svg',
    photo: '/images/hotels/ten-thousand-waves.jpeg',
    url: 'https://tenthousandwaves.com',
    practical: '15 min drive up the mountain. You will need a car.',
  },
  {
    id: 'rancho-encantado',
    name: 'Four Seasons Rancho Encantado',
    tagline: '57 acres in the foothills. The resort pick.',
    description: "If you want to make a proper trip of it, this is the one. A Four Seasons resort on 57 acres just outside of town — mountain casitas, hiking trails, horseback riding, the works. Very different vibe from everything else on this list, in a good way.",
    illustration: '/illustrations/hotels/rancho-encantado.svg',
    photo: '/images/hotels/Four Seasons Rancho Encantado.jpg',
    url: 'https://www.fourseasons.com/santafe/',
    practical: '~15 min drive from the venue. You will need a car.',
  },
  {
    id: 'the-mystic',
    name: 'The Mystic',
    tagline: 'The black sheep pick.',
    description: "Smaller, weirder, more Santa Fe than the others. The Mystic leans into the city's eccentric reputation without being embarrassing about it. Good spot if you want something that feels local rather than hotel-y.",
    illustration: '/illustrations/hotels/the-mystic.svg',
    photo: '/images/hotels/the-mystic.jpg',
    url: 'https://themysticsantafe.com',
    practical: 'Short walk or ride to the venue.',
  },
]
