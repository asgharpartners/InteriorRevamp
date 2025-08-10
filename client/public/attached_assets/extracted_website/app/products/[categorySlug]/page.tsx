"use client"

import { getProductsByCategory, getCategoryBySlug } from "@/lib/product-data"
import ProductList from "@/components/product-list"
import Header from "@/components/header"
import Footer from "@/components/footer"
import NilsyAssistant from "@/components/nilsy-assistant"
import { notFound, useRouter } from "next/navigation"
import { useState, useCallback, useEffect } from "react" // Import useEffect
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface CategoryPageProps {
  params: {
    categorySlug: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const [language, setLanguage] = useState<"sv" | "en">("sv")
  const router = useRouter()

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const category = getCategoryBySlug(params.categorySlug)
  if (!category) {
    notFound()
  }

  const products = getProductsByCategory(params.categorySlug, language)

  const handleBackClick = useCallback(() => {
    router.back()
  }, [router])

  const pageTranslations = {
    sv: {
      back: "Tillbaka till Produkter",
    },
    en: {
      back: "Back to Products",
    },
  }
  const t = pageTranslations[language]

  return (
    <div className="min-h-screen bg-off-white">
      <Header language={language} setLanguage={setLanguage} />
      <main className="py-20">
        <div className="container mx-auto px-px">
          {/* Back Button */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={handleBackClick}
              className="text-primary-brown hover:bg-stone-100 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              {t.back}
            </Button>
          </div>

          <h1 className="text-6xl md:text-7xl font-serif text-primary-brown mb-16 text-center">
            {category.name[language]}
          </h1>
          <ProductList products={products} categoryName={category.name[language]} language={language} />
        </div>
      </main>
      <Footer language={language} />
      <NilsyAssistant language={language} />
    </div>
  )
}
