export type ReferenceProject = {
  id: string // Added for unique identification and routing
  year: number
  title: string
  description: string
  image: string
  alt: string
  location: string
  tags: string[] // Renamed from 'tags' to 'categories' for clarity in filtering
  ctaLink?: string
  longDescription?: {
    // Added for detail page
    sv: string
    en: string
  }
  gallery?: string[] // Added for detail page
}

// Helper to slugify titles for IDs
const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
}

export const referenceProjects: ReferenceProject[] = [
  {
    id: slugify("Grand Hotel Renovering"),
    year: 2025,
    title: "Grand Hotel Renovering",
    description:
      "Totalrenovering av lobby och restaurangområde med fokus på skandinavisk design och hållbara material.",
    longDescription: {
      sv: "Detta omfattande projekt innebar en fullständig omvandling av Grand Hotels lobby och restaurang. Vi fokuserade på att integrera hållbara material och tidlös skandinavisk design för att skapa en inbjudande och elegant atmosfär som speglar hotellets prestige. Arbetet inkluderade specialdesignade möbler, avancerade belysningslösningar och en optimerad planlösning för att förbättra gästupplevelsen.",
      en: "This extensive project involved a complete transformation of the Grand Hotel's lobby and restaurant area. We focused on integrating sustainable materials and timeless Scandinavian design to create an inviting and elegant atmosphere that reflects the hotel's prestige. The work included custom-designed furniture, advanced lighting solutions, and an optimized layout to enhance the guest experience.",
    },
    image: "/Royal_Hotel_Lobby_-_Swan_chairs.jpg",
    alt: "Grand Hotel Lobby",
    location: "Stockholm",
    tags: ["Hotell", "Restaurang"],
    ctaLink: "#",
    gallery: [
      "/Royal_Hotel_Lobby_-_Swan_chairs.jpg",
      "/707.8.jpg",
      "/clarion-tapto-hotel-room.jpeg",
      "/lounge-area-warm-lighting.jpeg",
    ],
  },
  {
    id: slugify("Nya Kontor för Tech Solutions AB"),
    year: 2025,
    title: "Nya Kontor för Tech Solutions AB",
    description:
      "Design och inredning av moderna kontorslokaler för ett växande teknikföretag, med fokus på flexibilitet och samarbete.",
    longDescription: {
      sv: "För Tech Solutions AB skapade vi en dynamisk och modern arbetsmiljö som främjar både individuell produktivitet och teamarbete. Projektet omfattade flexibla arbetsstationer, tysta zoner, och kreativa mötesplatser, allt designat med ergonomi och estetik i åtanke. Vi använde smarta förvaringslösningar och integrerade teknik för en sömlös arbetsdag.",
      en: "For Tech Solutions AB, we created a dynamic and modern work environment that promotes both individual productivity and teamwork. The project included flexible workstations, quiet zones, and creative meeting spaces, all designed with ergonomics and aesthetics in mind. We utilized smart storage solutions and integrated technology for a seamless workday.",
    },
    image: "/modern-office-space.jpeg",
    alt: "Tech Solutions Office",
    location: "Göteborg",
    tags: ["Kontor"],
    ctaLink: "#",
    gallery: ["/modern-office-space.jpeg", "/nils-holger-office.png", "/project-coordination-meeting.png"],
  },
  {
    id: slugify("Café Lyckan"),
    year: 2024,
    title: "Café Lyckan",
    description:
      "Skapande av en mysig och inbjudande atmosfär för ett nytt café, med specialdesignade möbler och belysning.",
    longDescription: {
      sv: "Café Lyckan behövde en unik identitet som lockade gäster att dröja sig kvar. Vi designade en varm och inbjudande atmosfär med specialtillverkade möbler, anpassad belysning och en färgpalett som skapar lugn och trivsel. Resultatet blev ett populärt mötesställe med en distinkt karaktär.",
      en: "Café Lyckan needed a unique identity that encouraged guests to linger. We designed a warm and inviting atmosphere with custom-made furniture, tailored lighting, and a color palette that creates calm and comfort. The result was a popular meeting place with a distinct character.",
    },
    image: "/cafe-restaurant-interior.jpeg",
    alt: "Café Lyckan Interior",
    location: "Malmö",
    tags: ["Café", "Restaurang"],
    ctaLink: "#",
    gallery: ["/cafe-restaurant-interior.jpeg", "/outdoor-cafe.jpeg", "/nils-holger-cafe.png"],
  },
  {
    id: slugify("Privat Villa, Djursholm"),
    year: 2024,
    title: "Privat Villa, Djursholm",
    description: "Exklusiv inredning av en privat villa, där klassisk elegans möter modern funktionalitet.",
    longDescription: {
      sv: "Denna privata villa i Djursholm krävde en inredning som balanserade klassisk elegans med modern funktionalitet. Vi skapade skräddarsydda lösningar för varje rum, från vardagsrum till sovrum, med fokus på högkvalitativa material, exklusiva textilier och smarta förvaringslösningar. Projektet resulterade i ett harmoniskt och lyxigt hem.",
      en: "This private villa in Djursholm required an interior that balanced classic elegance with modern functionality. We created tailored solutions for each room, from living rooms to bedrooms, focusing on high-quality materials, exclusive textiles, and smart storage solutions. The project resulted in a harmonious and luxurious home.",
    },
    image: "/sundbyberg-living-dining.jpeg",
    alt: "Djursholm Villa Interior",
    location: "Djursholm",
    tags: ["Bostad"],
    ctaLink: "#",
    gallery: ["/sundbyberg-living-dining.jpeg", "/nynashamn-staircase-hallway.jpeg", "/IMG_1556.jpg", "/bedroom.jpeg"],
  },
  {
    id: slugify("Restaurang Smak"),
    year: 2023,
    title: "Restaurang Smak",
    description:
      "Omdesign av en populär restaurang, med nya sittplatser och en uppdaterad färgpalett för att förstärka matupplevelsen.",
    longDescription: {
      sv: "Restaurang Smak genomgick en omfattande omdesign för att förnya sin atmosfär och förbättra gästupplevelsen. Vi introducerade nya sittplatser, en uppdaterad färgpalett och skräddarsydd belysning för att skapa en mer intim och modern känsla. Fokus låg på att optimera flödet och komforten för både personal och gäster.",
      en: "Restaurang Smak underwent an extensive redesign to refresh its atmosphere and enhance the guest experience. We introduced new seating, an updated color palette, and custom lighting to create a more intimate and modern feel. The focus was on optimizing flow and comfort for both staff and guests.",
    },
    image: "/modern-interior-bar.jpeg",
    alt: "Restaurang Smak Interior",
    location: "Uppsala",
    tags: ["Restaurang"],
    ctaLink: "#",
    gallery: ["/modern-interior-bar.jpeg", "/sophisticated-bar-interior.jpeg", "/nils-holger-restaurant.png"],
  },
  {
    id: slugify("Boutique Hotel 'The Nordic'"),
    year: 2023,
    title: "Boutique Hotel 'The Nordic'",
    description:
      "Komplett inredningskoncept för ett nytt boutiquehotell, med unika teman för varje rum och gemensamma utrymmen.",
    longDescription: {
      sv: "För 'The Nordic' utvecklade vi ett komplett inredningskoncept som genomsyrade hela hotellet, från lobby till varje enskilt rum. Vi skapade unika teman för olika utrymmen, med fokus på lokala material och skandinavisk estetik. Målet var att erbjuda gästerna en minnesvärd och personlig upplevelse.",
      en: "For 'The Nordic', we developed a complete interior concept that permeated the entire hotel, from the lobby to each individual room. We created unique themes for different spaces, focusing on local materials and Scandinavian aesthetics. The goal was to offer guests a memorable and personalized experience.",
    },
    image: "/clarion-tapto-hotel-room.jpeg",
    alt: "The Nordic Hotel Room",
    location: "Visby",
    tags: ["Hotell"],
    ctaLink: "#",
    gallery: ["/clarion-tapto-hotel-room.jpeg", "/nykvarn.jpg", "/nils-holger-hotel-room.png"],
  },
  {
    id: slugify("Co-working Space 'Innovate'"),
    year: 2022,
    title: "Co-working Space 'Innovate'",
    description:
      "Inredning av en dynamisk co-working space, optimerad för produktivitet och kreativitet med ergonomiska lösningar.",
    longDescription: {
      sv: "Innovate behövde en flexibel och inspirerande miljö för sina medlemmar. Vi designade en co-working space med olika zoner för koncentrerat arbete, samarbete och avkoppling. Ergonomiska möbler, smarta akustiklösningar och en modern estetik bidrog till en produktiv och trivsam atmosfär.",
      en: "Innovate needed a flexible and inspiring environment for its members. We designed a co-working space with different zones for focused work, collaboration, and relaxation. Ergonomic furniture, smart acoustic solutions, and a modern aesthetic contributed to a productive and pleasant atmosphere.",
    },
    image: "/nils-holger-office.png",
    alt: "Innovate Co-working Space",
    location: "Linköping",
    tags: ["Kontor"],
    ctaLink: "#",
    gallery: ["/nils-holger-office.png", "/modern-office-space.jpeg", "/project-management.png"],
  },
  {
    id: slugify("Lägenhetskomplex 'Stadshagen'"),
    year: 2022,
    title: "Lägenhetskomplex 'Stadshagen'",
    description: "Inredningsdesign för gemensamma utrymmen i ett nytt lägenhetskomplex, inklusive lobby och lounge.",
    longDescription: {
      sv: "För det nya lägenhetskomplexet 'Stadshagen' skapade vi inbjudande och funktionella gemensamma utrymmen. Lobbyn och loungen designades för att fungera som naturliga mötesplatser för de boende, med bekväma sittgrupper, konstnärliga inslag och en genomtänkt belysning som skapar en hemtrevlig känsla.",
      en: "For the new apartment complex 'Stadshagen', we created inviting and functional common areas. The lobby and lounge were designed to serve as natural meeting places for residents, with comfortable seating areas, artistic elements, and thoughtful lighting that creates a homely feel.",
    },
    image: "/nynashamn-staircase-hallway.jpeg",
    alt: "Stadshagen Apartment Complex",
    location: "Stockholm",
    tags: ["Bostad"],
    ctaLink: "#",
    gallery: ["/nynashamn-staircase-hallway.jpeg", "/sundbyberg-living-dining.jpeg", "/IMG_1556.jpg"],
  },
  {
    id: slugify("Konferenscenter 'Framtid'"),
    year: 2021,
    title: "Konferenscenter 'Framtid'",
    description:
      "Design av flexibla konferensrum och mötesytor, utrustade med den senaste tekniken och bekväma möbler.",
    longDescription: {
      sv: "Konferenscenter 'Framtid' behövde en modern uppgradering för att möta dagens krav på flexibla möteslösningar. Vi designade rum som enkelt kan anpassas för olika gruppstorlekar och ändamål, med integrerad teknik för presentationer och videokonferenser. Komfort och funktionalitet var nyckelord i detta projekt.",
      en: "Conference Center 'Framtid' needed a modern upgrade to meet today's demands for flexible meeting solutions. We designed rooms that can be easily adapted for different group sizes and purposes, with integrated technology for presentations and video conferencing. Comfort and functionality were key in this project.",
    },
    image: "/Screenshot 2025-07-12 at 20.11.33.png",
    alt: "Framtid Conference Center",
    location: "Västerås",
    tags: ["Konferens"],
    ctaLink: "#",
    gallery: ["/Screenshot 2025-07-12 at 20.11.33.png", "/project-coordination-meeting.png", "/nils-holger-office.png"],
  },
  {
    id: slugify("Privat Sommarstuga, Skärgården"),
    year: 2021,
    title: "Privat Sommarstuga, Skärgården",
    description:
      "Inredning av en sommarstuga med fokus på naturliga material och en ljus, luftig känsla som smälter in i skärgårdsmiljön.",
    longDescription: {
      sv: "Denna sommarstuga i Stockholms skärgård designades för att maximera känslan av närhet till naturen. Vi använde naturliga material som trä och linne, och en ljus färgpalett för att skapa en luftig och avkopplande atmosfär. Inredningen är både funktionell och estetiskt tilltalande, perfekt för sommarboende.",
      en: "This summer house in the Stockholm archipelago was designed to maximize the feeling of closeness to nature. We used natural materials like wood and linen, and a light color palette to create an airy and relaxing atmosphere. The interior is both functional and aesthetically pleasing, perfect for summer living.",
    },
    image: "/IMG_1556.jpg",
    alt: "Skärgården Summer House",
    location: "Stockholms Skärgård",
    tags: ["Bostad"],
    ctaLink: "#",
    gallery: ["/IMG_1556.jpg", "/sundbyberg-living-dining.jpeg", "/nynashamn-staircase-hallway.jpeg"],
  },
  {
    id: slugify("Custom Garderobslösning"),
    year: 2023,
    title: "Custom Garderobslösning",
    description: "Skräddarsydd garderobsinredning för optimal förvaring och estetik i privat bostad.",
    longDescription: {
      sv: "Vi designade och installerade en måttanpassad garderobslösning som utnyttjar utrymmet maximalt. Med smarta förvaringslösningar och en stilren design integrerades garderoben sömlöst i rummet, vilket skapade både ordning och en elegant känsla.",
      en: "We designed and installed a custom-fitted wardrobe solution that maximizes space utilization. With smart storage solutions and a sleek design, the wardrobe was seamlessly integrated into the room, creating both order and an elegant feel.",
    },
    image: "/empty-closet-shelving.jpeg",
    alt: "Custom Wardrobe Solution",
    location: "Uppsala",
    tags: ["Bostad", "Möbelsnickeri"],
    ctaLink: "#",
    gallery: ["/empty-closet-shelving.jpeg", "/custom-wardrobe-after.jpeg"], // Placeholder, add more if available
  },
]

export const getProjectById = (id: string): ReferenceProject | undefined => {
  return referenceProjects.find((project) => project.id === id)
}

export const getAllCategories = (language: "sv" | "en"): { name: string; slug: string }[] => {
  const categories = new Set<string>()
  referenceProjects.forEach((project) => {
    project.tags.forEach((tag) => categories.add(tag))
  })
  return Array.from(categories)
    .sort()
    .map((cat) => ({
      name: cat,
      slug: slugify(cat),
    }))
}

export const getAllYears = (): number[] => {
  const years = new Set<number>()
  referenceProjects.forEach((project) => years.add(project.year))
  return Array.from(years).sort((a, b) => b - a) // Sort descending
}

export const getFilteredProjects = (
  categorySlug: string | null,
  year: number | null,
  language: "sv" | "en",
): ReferenceProject[] => {
  let filtered = referenceProjects

  if (categorySlug) {
    const categoryName = getAllCategories(language).find((cat) => cat.slug === categorySlug)?.name
    if (categoryName) {
      filtered = filtered.filter((project) => project.tags.includes(categoryName))
    }
  }

  if (year) {
    filtered = filtered.filter((project) => project.year === year)
  }

  return filtered
}
