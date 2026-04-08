export interface Neighborhood {
  id: string
  name: string
  tagline: string
  description: string
  photo: string
  url: string
}

export const neighborhoods: Neighborhood[] = [
  {
    id: 'plaza',
    name: 'Plaza / Downtown',
    tagline: 'The center of everything.',
    description: 'The most walkable option. You can get from your Airbnb to the venue, most restaurants, and the Plaza itself without needing a car. The tradeoff is that it fills up fast and tends to be the priciest area to stay.',
    photo: '/images/neighborhoods/plaza.jpg',
    url: 'https://www.airbnb.com/s/Downtown--Santa-Fe--NM/homes',
  },
  {
    id: 'south-capitol',
    name: 'South Capitol',
    tagline: 'Residential, central, good value.',
    description: "A quiet residential neighborhood just south of downtown. It's close enough to walk to most things but still feels like a real neighborhood. Generally better value than the Plaza area. This is the last place we lived in Santa Fe and love the area.",
    photo: '/images/neighborhoods/south-capitol.jpg',
    url: 'https://www.airbnb.com/s/South-Capitol--Santa-Fe--NM/homes',
  },
  {
    id: 'railyard',
    name: 'Railyard / Guadalupe',
    tagline: 'Arts district, walkable, great restaurants.',
    description: "Southwest of the Plaza and still close enough to walk everywhere. More contemporary than downtown, with galleries, good restaurants, and SITE Santa Fe. Also home to Santa Fe's wonderful farmer's market.",
    photo: '/images/neighborhoods/railyard.jpg',
    url: 'https://www.airbnb.com/s/Railyard--Santa-Fe--NM/homes',
  },
  {
    id: 'canyon-road',
    name: 'Canyon Road',
    tagline: 'Galleries, adobe, genuinely beautiful.',
    description: "East of the Plaza along the famous gallery corridor. Walkable to the venue and one of the prettier parts of Santa Fe to wake up in, especially in July when everything is in bloom. Tends to be quiet at night once the galleries close.",
    photo: '/images/neighborhoods/canyon-road.jpg',
    url: 'https://www.airbnb.com/s/Canyon-Road--Santa-Fe--NM/homes',
  },
]
