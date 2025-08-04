"use client"
import { Button } from "@/components/ui/button"
import { Search, Menu } from "lucide-react" // Removed Globe
import { useState } from "react"
import MobileMenu from "./mobile-menu"
import Image from "next/image"

interface HeaderProps {
  language: "sv" | "en"
  setLanguage: (lang: "sv" | "en") => void
}

const translations = {
  sv: {
    nav: ["Om", "Tjänster", "Produkter", "Referenser", "Kontakt"],
    bookConsultation: "Boka gratis konsultation",
    search: "Search",
  },
  en: {
    nav: ["About", "Services", "Products", "References", "Contact"],
    bookConsultation: "Book Free Consultation",
    search: "Search",
  },
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const t = translations[language]
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header className={`relative z-50 bg-off-white transition-all duration-300 ease-in-out`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between md:justify-start flex-nowrap">
          {/* Logo Image - Far left, functions as "Start" button */}
          <div className="flex-shrink-0 relative">
            <button onClick={() => scrollToSection("hero")} className="focus:outline-none">
              {/* Background overlay to match navigation color */}
              <div
                className="absolute inset-0 bg-off-white"
                style={{
                  backgroundColor: "#FFFAF6",
                  mixBlendMode: "normal",
                  zIndex: -1,
                }}
              />
              <Image
                src="/nils-holger-logo-new.png"
                alt="Nils Holger Logo"
                width={300} // Increased logo width
                height={90} // Increased logo height
                priority
                className="object-contain relative"
                style={{
                  mixBlendMode: "multiply",
                  filter: "contrast(1.2) brightness(1.1) saturate(1.1)",
                  backgroundColor: "transparent",
                }}
              />
            </button>
          </div>

          {/* Desktop Navigation Links - visible on md and up */}
          <nav className="hidden md:flex items-center space-x-4 ml-16">
            {t.nav.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(["about", "services", "products", "references", "contact"][index])}
                className="text-[0.65rem] uppercase tracking-wide text-primary-brown hover:text-primary-brown font-medium transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Spacer to push right-aligned elements to the far right on md and up */}
          <div className="flex-grow hidden md:block" />

          {/* Desktop Right-aligned elements - visible on md and up */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-dark-grey hover:bg-off-white hover:text-primary-brown">
              <Search className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
              className="flex items-center gap-0.5 bg-transparent hover:bg-off-white text-dark-grey hover:text-primary-brown text-[0.65rem] font-medium transition-colors tracking-wider px-2 py-0.5"
              size="sm"
            >
              {/* Removed Globe icon */}
              {language === "sv" ? "SV" : "EN"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-primary-brown hover:bg-dark-grey text-off-white border-primary-brown text-[0.6rem] uppercase tracking-wide px-4 py-2"
            >
              {t.bookConsultation}
            </Button>
          </div>

          {/* Mobile Hamburger Menu Icon - hidden on md and up */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="w-6 h-6 text-dark-grey" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        language={language}
        setLanguage={setLanguage}
      />
    </>
  )
}
