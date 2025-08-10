"use client"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import ScrollReveal from "./scroll-reveal"
import Link from "next/link"
import Image from "next/image"
import { productCategoriesData, productTypesData } from "@/lib/product-data" // Import categories and types data
import { useState } from "react" // Import useState

interface ProductsProps {
  language: "sv" | "en"
  saveScrollPosition: () => void // New prop
}

const translations = {
  sv: {
    title: "Produkter",
    description:
      "Vi erbjuder ett stort urval av fast och lös inredning för alla typer av offentliga miljöer och för olika funktioner. Utforska våra kategorier nedan.",
    viewCategory: "Visa kategori",
  },
  en: {
    title: "Products",
    description:
      "We offer a large selection of fixed and loose furnishings for all types of public environments and for various functions. Explore our categories below.",
    viewCategory: "View Category",
  },
}

export default function Products({ language, saveScrollPosition }: ProductsProps) {
  const t = translations[language]
  const [activeTypeIndex, setActiveTypeIndex] = useState(0) // State for active main tab

  const activeProductType = productTypesData[activeTypeIndex]

  return (
    <section id="products" className="py-32 bg-off-white overflow-hidden">
      <div className="w-full px-px">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="fade" delay={100}>
            <h2 className="text-6xl md:text-7xl font-serif text-primary-brown mb-20 text-center">{t.title}</h2>
          </ScrollReveal>

          {/* Section Description */}
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mb-16">
              <p className="text-xl text-dark-grey font-light max-w-2xl mx-auto">{t.description}</p>
            </div>
          </ScrollReveal>

          {/* Main Product Type Tabs */}
          <ScrollReveal direction="up" delay={250}>
            <div className="flex justify-center mb-16">
              <div className="bg-stone-100 p-2 rounded-xl flex flex-wrap gap-2">
                {productTypesData.map((type, index) => (
                  <button
                    key={type.id}
                    onClick={() => setActiveTypeIndex(index)}
                    className={`px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg ${
                      activeTypeIndex === index
                        ? "bg-primary-brown text-off-white shadow-lg"
                        : "text-dark-grey hover:bg-stone-200"
                    }`}
                  >
                    {type.name[language]}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Product Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px border-t border-l border-stone-100">
            {productCategoriesData.map((category, index) => (
              <ScrollReveal key={category.id} direction="scale" delay={300 + index * 50}>
                <Link
                  href={`/products/${activeProductType.slug}/${category.slug}`} // Dynamic link with type and category slugs
                  onClick={saveScrollPosition}
                  className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-r border-b border-stone-100 flex flex-col h-full"
                >
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name[language]}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6 flex flex-col items-center text-center flex-grow">
                    <h3 className="font-semibold text-primary-brown mb-4 text-2xl flex-grow">
                      {category.name[language]}
                    </h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary-brown text-primary-brown hover:bg-primary-brown hover:text-off-white text-sm bg-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 mt-auto"
                    >
                      {t.viewCategory}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
