export type ProductCategory = {
  id: string
  slug: string
  image: string
  name: {
    sv: string
    en: string
  }
}

export type ProductType = {
  id: "custom" | "standard" | "special"
  slug: string
  name: {
    sv: string
    en: string
  }
}

export type Product = {
  id: string
  categoryId: string
  typeId: ProductType["id"] // Link to the product type
  image: string
  name: {
    sv: string
    en: string
  }
  shortDescription: {
    sv: string
    en: string
  }
  price: string | null // Null for custom/reupholstery
}

export const productTypesData: ProductType[] = [
  {
    id: "custom",
    slug: "mattbestallda",
    name: { sv: "Måttbeställda produkter", en: "Custom-made Products" },
  },
  {
    id: "standard",
    slug: "standardprodukter",
    name: { sv: "Standardprodukter", en: "Standard Products" },
  },
  {
    id: "special",
    slug: "specialkollektioner",
    name: { sv: "Specialkollektioner", en: "Special Collections" },
  },
]

export const productCategoriesData: ProductCategory[] = [
  {
    id: "chairs",
    slug: "stolar",
    image: "/category-chairs.png",
    name: { sv: "Stolar", en: "Chairs" },
  },
  {
    id: "tables",
    slug: "bord",
    image: "/category-tables.png",
    name: { sv: "Bord", en: "Tables" },
  },
  {
    id: "sofas",
    slug: "soffor",
    image: "/category-sofas.png",
    name: { sv: "Soffor", en: "Sofas" },
  },
  {
    id: "cabinets",
    slug: "skåp",
    image: "/category-cabinets.png",
    name: { sv: "Skåp", en: "Cabinets" },
  },
  {
    id: "lighting",
    slug: "belysning",
    image: "/category-lighting.png",
    name: { sv: "Belysning", en: "Lighting" },
  },
  {
    id: "textiles",
    slug: "textilier",
    image: "/category-textiles.png",
    name: { sv: "Textilier", en: "Textiles" },
  },
]

// Helper to generate product data for demonstration
const generateProductsForCategoryAndType = (
  categoryId: string,
  typeId: ProductType["id"],
  count: number,
  showPrice: boolean,
  categoryNameSv: string,
  categoryNameEn: string,
): Product[] => {
  const productImages = [
    "/placeholder.svg?height=600&width=450",
    "/placeholder.svg?height=600&width=450",
    "/placeholder.svg?height=600&width=450",
    "/placeholder.svg?height=600&width=450",
  ]

  return Array.from({ length: count }, (_, i) => ({
    id: `${typeId}-${categoryId}-${i + 1}`,
    categoryId: categoryId,
    typeId: typeId,
    image: productImages[i % productImages.length],
    name: {
      sv: `${categoryNameSv} ${i + 1}`,
      en: `${categoryNameEn} ${i + 1}`,
    },
    shortDescription: {
      sv: `Högkvalitativ skandinavisk design för offentliga miljöer (${typeId}).`,
      en: `High-quality Scandinavian design for public environments (${typeId}).`,
    },
    price: showPrice ? `${Math.floor(Math.random() * 50000) + 5000} SEK` : null,
  }))
}

export const allProductsData: Product[] = [
  // Standard Products
  ...generateProductsForCategoryAndType("chairs", "standard", 10, true, "Standardstol", "Standard Chair"),
  ...generateProductsForCategoryAndType("tables", "standard", 8, true, "Standardbord", "Standard Table"),
  ...generateProductsForCategoryAndType("sofas", "standard", 6, true, "Standardsoffa", "Standard Sofa"),
  ...generateProductsForCategoryAndType("cabinets", "standard", 4, true, "Standardsskåp", "Standard Cabinet"),

  // Custom Products (Måttbeställda) - typically no price
  ...generateProductsForCategoryAndType("chairs", "custom", 5, false, "Måttbeställd Stol", "Custom Chair"),
  ...generateProductsForCategoryAndType("tables", "custom", 4, false, "Måttbeställt Bord", "Custom Table"),
  ...generateProductsForCategoryAndType("sofas", "custom", 3, false, "Måttbeställd Soffa", "Custom Sofa"),
  ...generateProductsForCategoryAndType("cabinets", "custom", 2, false, "Måttbeställt Skåp", "Custom Cabinet"),

  // Special Collections (Specialkollektioner) - ONLY Lighting and Textiles
  ...generateProductsForCategoryAndType(
    "lighting",
    "special",
    5,
    true,
    "Specialkollektion Belysning",
    "Special Collection Lighting",
  ),
  ...generateProductsForCategoryAndType(
    "textiles",
    "special",
    4,
    true,
    "Specialkollektion Textil",
    "Special Collection Textile",
  ),
  // New Standard Chair product
  {
    id: "standard-chair-showroom",
    categoryId: "chairs",
    typeId: "standard",
    image: "/chairs-showroom.jpeg",
    name: { sv: "Showroom Stol", en: "Showroom Chair" },
    shortDescription: {
      sv: "Ett urval av våra standardstolar visade i showroom.",
      en: "A selection of our standard chairs displayed in the showroom.",
    },
    price: "8500 SEK",
  },
  // New Custom Sofa product
  {
    id: "custom-sofa-velvet",
    categoryId: "sofas",
    typeId: "custom",
    image: "/velvet-chair.jpeg", // Using the velvet chair image for a custom sofa example
    name: { sv: "Måttbeställd Sammetsoffa", en: "Custom Velvet Sofa" },
    shortDescription: {
      sv: "Lyxig sammetsoffa anpassad för unika utrymmen.",
      en: "Luxurious velvet sofa customized for unique spaces.",
    },
    price: null,
  },
  // New Custom Cabinet product (representing custom hardware/details)
  {
    id: "custom-cabinet-knobs",
    categoryId: "cabinets",
    typeId: "custom",
    image: "/knobs-2.jpeg",
    name: { sv: "Måttbeställda Skåpdetaljer", en: "Custom Cabinet Details" },
    shortDescription: {
      sv: "Unika handtag och detaljer för skräddarsydda skåp.",
      en: "Unique handles and details for custom-made cabinets.",
    },
    price: null,
  },
  // New Special Collection Textile product
  {
    id: "special-textile-swatches",
    categoryId: "textiles",
    typeId: "special",
    image: "/fabric-swatches-collage.jpeg",
    name: { sv: "Specialkollektion Textilprover", en: "Special Collection Fabric Swatches" },
    shortDescription: {
      sv: "Exklusiva textilprover från vår specialkollektion.",
      en: "Exclusive fabric swatches from our special collection.",
    },
    price: "På förfrågan",
  },
]

export const getProductsByCategoryAndType = (
  typeSlug: string,
  categorySlug: string,
  language: "sv" | "en",
): Product[] => {
  const productType = productTypesData.find((type) => type.slug === typeSlug)
  const productCategory = productCategoriesData.find((cat) => cat.slug === categorySlug)

  if (!productType || !productCategory) {
    return []
  }

  return allProductsData.filter(
    (product) => product.typeId === productType.id && product.categoryId === productCategory.id,
  )
}

export const getProductTypeBySlug = (typeSlug: string): ProductType | undefined => {
  return productTypesData.find((type) => type.slug === typeSlug)
}

export const getCategoryBySlug = (categorySlug: string): ProductCategory | undefined => {
  return productCategoriesData.find((cat) => cat.slug === categorySlug)
}
