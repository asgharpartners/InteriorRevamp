"use client"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#2B2B2B] transition-all duration-300 ease-in-out">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between flex-nowrap">
          {/* Logo with warm brown background - Far left */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection("hero")} 
              className="focus:outline-none bg-[#AD8C44] rounded-lg p-2 hover:bg-[#936F39] transition-colors duration-200"
            >
              <Image
                src="/nils-holger-logo-new.png"
                alt="Nils Holger Logo"
                width={120}
                height={36}
                priority
                className="object-contain"
              />
            </button>
          </div>

          {/* Desktop Navigation Links - Center/Right area */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto mr-6">
            {t.nav.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(["about", "services", "products", "references", "contact"][index])}
                className="text-sm text-[#F5F5F5] hover:text-white font-medium transition-colors duration-200 uppercase tracking-wide"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Desktop Right-aligned elements */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Toggle with yellow background */}
            <button
              onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
              className="bg-[#FEEFC3] text-[#2B2B2B] px-3 py-1 rounded text-sm font-medium hover:bg-[#FEE68A] transition-colors duration-200"
            >
              {language === "sv" ? "SV" : "EN"}
            </button>
            
            {/* Book Consultation Button */}
            <Button
              variant="outline"
              size="sm"
              className="bg-[#2B2B2B] hover:bg-[#1A1A1A] text-[#F5F5F5] border-[#F5F5F5] text-xs uppercase tracking-wide px-4 py-2 h-8 whitespace-nowrap"
            >
              {t.bookConsultation}
            </Button>
          </div>

          {/* Mobile Hamburger Menu Icon */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-[#F5F5F5] hover:text-white hover:bg-[#3B3B3B]"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Add padding to body content to account for fixed header */}
      <div className="h-16"></div>

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
