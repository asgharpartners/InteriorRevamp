"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Intro from "@/components/intro"
import Process from "@/components/process" // Import the new Process component
import About from "@/components/about"
import Services from "@/components/services"
import BeforeAfterSlider from "@/components/before-after-slider"
import Products from "@/components/products"
import FilterableProjectGrid from "@/components/filterable-project-grid" // Import the new component
import Partner from "@/components/partner"
import Career from "@/components/career" // Import the new Career component
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import NilsyAssistant from "@/components/nilsy-assistant"
import OurWorkshop from "@/components/our-workshop"
import { useScrollRestoration } from "@/hooks/use-scroll-restoration"

export default function Home() {
  const [language, setLanguage] = useState<"sv" | "en">("sv")
  const { saveScrollPosition } = useScrollRestoration()

  // Auto-load Swedish for .se domain visitors (client-side check)
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hostname.endsWith(".se")) {
      setLanguage("sv")
    }
  }, [])

  return (
    <div className="min-h-screen bg-off-white">
      <Header language={language} setLanguage={setLanguage} />

      <main>
        <Hero language={language} />
        <Intro language={language} />
        <Process language={language} />
        <BeforeAfterSlider language={language} />
        <Services language={language} />
        <Products language={language} saveScrollPosition={saveScrollPosition} />
        <FilterableProjectGrid language={language} /> {/* Replaced TimelineReferences */}
        <Partner language={language} />
        <Career language={language} /> {/* Added the new Career section */}
        <About language={language} />
        <OurWorkshop language={language} />
        <Contact language={language} />
      </main>

      <Footer language={language} />

      <NilsyAssistant language={language} />
    </div>
  )
}
