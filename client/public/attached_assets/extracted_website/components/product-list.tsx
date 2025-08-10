"use client"

import { ShoppingCart, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "./scroll-reveal"
import Image from "next/image"
import type { Product } from "@/lib/product-data"

interface ProductListProps {
  products: Product[]
  categoryName: string
  language: "sv" | "en"
}

const translations = {
  sv: {
    requestQuote: "Begär offert",
    addToInquiry: "Lägg till förfrågan",
  },
  en: {
    requestQuote: "Request Quote",
    addToInquiry: "Add to Inquiry",
  },
}

export default function ProductList({ products, categoryName, language }: ProductListProps) {
  const t = translations[language]

  if (!products || products.length === 0) {
    return (
      <div className="text-center text-dark-grey text-xl py-20">
        {language === "sv" ? "Inga produkter hittades i denna kategori." : "No products found in this category."}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px border-t border-l border-stone-100">
      {products.map((product, index) => (
        <ScrollReveal key={product.id} direction="scale" delay={100 + index * 50}>
          <div className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-r border-b border-stone-100 flex flex-col h-full">
            <div className="aspect-[3/4] overflow-hidden relative">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name[language]}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-semibold text-primary-brown mb-2 text-lg">{product.name[language]}</h3>
              <p className="text-dark-grey text-sm mb-4 flex-grow">{product.shortDescription[language]}</p>

              {product.price && <p className="text-dark-grey font-semibold mb-4 text-lg">{product.price}</p>}

              <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 mt-auto">
                {product.price ? (
                  <Button size="sm" className="bg-primary-brown hover:bg-dark-grey text-off-white text-sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {t.addToInquiry}
                  </Button>
                ) : (
                  <Button size="sm" className="bg-primary-brown hover:bg-dark-grey text-off-white text-sm">
                    <CreditCard className="w-4 h-4 mr-2" />
                    {t.requestQuote}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}
