export interface Listing {
  id: string
  name: string
  tagline: string
  description: string
  illustration: string
  practical: string | null
}

export interface ListingCategory {
  category: string
  spotIllustration: string
  items: Listing[]
}

export const listings: ListingCategory[] = [
  {
    category: 'Museums & Culture',
    spotIllustration: '/illustrations/spot-museums.svg',
    items: [
      {
        id: 'folk-art',
        name: 'Museum of International Folk Art',
        tagline: 'One of the best small museums in the country.',
        description: "The collection here — 130,000 objects from 100 countries, displayed in dense, joyful arrangements — is genuinely extraordinary. The main gallery looks like someone's very wise grandmother organized it. Bring two hours minimum.",
        illustration: '/illustrations/listings/folk-art.svg',
        practical: 'On Museum Hill. 15 min drive or bus from downtown.',
      },
      {
        id: 'santa-fe-opera',
        name: 'Santa Fe Opera',
        tagline: "Open-air opera in the mountains. Yes, it's that good.",
        description: "The open-air theater sits on a ridge with views of the Jemez and Sangre de Cristo ranges. The season runs July through August. If you can get tickets to anything, do it — the tailgate picnics in the parking lot beforehand are half the experience.",
        illustration: '/illustrations/listings/santa-fe-opera.svg',
        practical: 'About 20 min north of Santa Fe. Check the schedule at santafeopera.org.',
      },
      {
        id: 'site-santa-fe',
        name: 'SITE Santa Fe',
        tagline: 'Contemporary art that earns it.',
        description: "SITE does contemporary and installation work at a level that punches well above its size. The building is good, the programming is serious. Worth checking what's up during your visit.",
        illustration: '/illustrations/listings/site-santa-fe.svg',
        practical: 'In the Railyard district. Easy walk from many hotels.',
      },
    ],
  },
  {
    category: 'Outdoors',
    spotIllustration: '/illustrations/spot-outdoors.svg',
    items: [
      {
        id: 'canyon-road',
        name: 'Canyon Road',
        tagline: 'A mile of galleries and gardens.',
        description: "A historic road lined with galleries, studios, and one very good coffee shop. You can spend twenty minutes or four hours. The quality of the art varies enormously — some of it is brilliant. Walk the whole thing.",
        illustration: '/illustrations/listings/canyon-road.svg',
        practical: 'Easy walk from downtown. Mostly flat.',
      },
      {
        id: 'ski-basin',
        name: 'Ski Basin / Monte Sol',
        tagline: 'The mountains above the city.',
        description: "The road up to the Santa Fe Ski Basin is one of the best easy drives in New Mexico — you climb from 7,000 to 10,000 feet in 16 miles. There are hiking trails at the top. Monte Sol is a lower hike with good views back down over the city.",
        illustration: '/illustrations/listings/ski-basin.svg',
        practical: "Drive up Hyde Park Road. Bring layers — it's 20 degrees cooler at the top.",
      },
      {
        id: 'ghost-ranch',
        name: 'Ghost Ranch',
        tagline: "O'Keeffe's landscape. One of the most beautiful drives in America.",
        description: "Georgia O'Keeffe lived and painted here for decades. The landscape is exactly what's in those paintings — red and ochre cliffs, sky that goes on forever. You can hike to the top of Chimney Rock. The drive through the Chama Valley to get there is half the point.",
        illustration: '/illustrations/listings/ghost-ranch.svg',
        practical: 'About an hour north toward Abiquiu — plan a full day.',
      },
      {
        id: 'black-white-place',
        name: 'Black Place + White Place',
        tagline: "More O'Keeffe country. A serious commitment.",
        description: "The Black Place (Canones) and White Place (Plaza Blanca) are more remote and more extraordinary than Ghost Ranch. The Black Place is grey badlands folded into strange formations. The White Place is white cliffs like chalk bones. You need a car and should want to be in the middle of nowhere.",
        illustration: '/illustrations/listings/black-white-place.svg',
        practical: '2-3 hours from Santa Fe. Remote roads. Very much worth it for the right person.',
      },
    ],
  },
  {
    category: 'Food',
    spotIllustration: '/illustrations/spot-food.svg',
    items: [
      {
        id: 'el-chile-toreado',
        name: 'El Chile Toreado',
        tagline: 'The best green chile in Santa Fe. No argument.',
        description: "A small, unassuming spot that most tourists walk past. Do not walk past it. The green chile cheeseburger is the one. They grow their own chiles. This is the kind of place a city earns over decades.",
        illustration: '/illustrations/listings/el-chile-toreado.svg',
        practical: 'Small, cash-preferred, closes early. Go at lunch.',
      },
      {
        id: 'harrys-road-house',
        name: "Harry's Road House",
        tagline: 'New Mexican comfort food. Always correct.',
        description: "Harry's is the place you go when you want green chile on everything and you want it to be good. A Santa Fe institution. The patio is great, the portions are generous, the margaritas are reliable.",
        illustration: '/illustrations/listings/harrys-road-house.svg',
        practical: 'Old Las Vegas Highway — a short drive from downtown.',
      },
      {
        id: 'the-shed',
        name: 'The Shed',
        tagline: 'A historic casita, a long line, worth it.',
        description: "The Shed occupies a courtyard compound from the 17th century and has been serving New Mexican food since 1953. The red chile is famous for a reason. Lunch lines get long — plan around it or go at opening.",
        illustration: '/illustrations/listings/the-shed.svg',
        practical: 'Closed Sundays. Expect a wait at peak lunch.',
      },
      {
        id: 'kakawa',
        name: 'Kakawa Chocolate House',
        tagline: 'Historic drinking chocolates. A very specific pleasure.',
        description: "Kakawa specializes in historically researched drinking chocolates — Aztec, Mayan, Colonial, European. It's unusual, it's small, and it's exactly the kind of thing Santa Fe does well. Worth a stop even if you just get one drink.",
        illustration: '/illustrations/listings/kakawa.svg',
        practical: 'Small shop on Canyon Road. Worth combining with a gallery walk.',
      },
      {
        id: 'plants-of-the-southwest',
        name: 'Plants of the Southwest',
        tagline: 'A nursery that doubles as a desert education.',
        description: "Not a restaurant — a nursery. But worth including because it's one of the most thoughtfully curated places in Santa Fe. They grow native and drought-adapted plants and will talk your ear off about any of them. Worth a visit if you care about plants, landscape, or the Southwest.",
        illustration: '/illustrations/listings/plants-of-the-southwest.svg',
        practical: 'A short drive from downtown. Bring cash for seeds.',
      },
    ],
  },
  {
    category: 'Drinks',
    spotIllustration: '/illustrations/spot-drinks.svg',
    items: [
      {
        id: 'la-reina',
        name: 'La Reina at La Fonda',
        tagline: 'The hotel bar Santa Fe deserves.',
        description: "The bar at La Fonda is one of those places that earns its reputation. Good margaritas, good lighting, the particular pleasure of drinking in a building that's been a hotel since the 1920s.",
        illustration: '/illustrations/listings/la-reina.svg',
        practical: 'On the Plaza. Can get crowded on weekends.',
      },
      {
        id: 'second-street-brewery',
        name: 'Second Street Brewery',
        tagline: 'Local beer, good patio.',
        description: "Santa Fe's most beloved local brewery. The beer is solid across the board and the Railyard location has a great outdoor space. A good spot for a relaxed afternoon drink.",
        illustration: '/illustrations/listings/second-street-brewery.svg',
        practical: 'Railyard location is the best. Opens at 11am daily.',
      },
    ],
  },
]
