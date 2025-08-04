"use client"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"

interface HeaderProps {
  className?: string
}

const translations = {
  sv: {
    nav: ["Om", "Tjänster", "Produkter", "Referenser", "Kontakt"],
    bookConsultation: "Boka gratis konsultation",
  },
  en: {
    nav: ["About", "Services", "Products", "References", "Contact"],
    bookConsultation: "Book Free Consultation",
  },
}

export default function Header({ className = "" }: HeaderProps) {
  const { language, setLanguage } = useLanguage()
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
              data-testid="logo-button"
            >
              <img
                src="/nils-holger-logo-new.png"
                alt="Nils Holger Logo"
                width={120}
                height={36}
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
                data-testid={`nav-${item.toLowerCase()}`}
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
              data-testid="language-toggle"
            >
              {language === "sv" ? "SV" : "EN"}
            </button>
            
            {/* Book Consultation Button */}
            <Button
              variant="outline"
              size="sm"
              className="bg-[#2B2B2B] hover:bg-[#1A1A1A] text-[#F5F5F5] border-[#F5F5F5] text-xs uppercase tracking-wide px-4 py-2 h-8 whitespace-nowrap"
              data-testid="book-consultation"
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
              data-testid="mobile-menu-toggle"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Add padding to body content to account for fixed header */}
      <div className="h-16"></div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#2B2B2B] transition-transform duration-500 ease-in-out"
          data-testid="mobile-menu"
        >
          {/* Background Image with Blur */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/placeholder.svg?height=1080&width=1920"
              alt="Mobile menu background"
              className="w-full h-full object-cover"
              style={{ filter: "blur(8px)" }}
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative h-full flex flex-col items-center justify-start pt-16 pb-8 px-6 text-center overflow-y-auto">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-[#F5F5F5] hover:text-white z-10"
              data-testid="mobile-menu-close"
            >
              <Menu className="w-8 h-8" />
            </Button>

            {/* Logo Image for Mobile */}
            <div className="mb-4 bg-[#AD8C44] rounded-lg p-3">
              <img
                src="/nils-holger-logo-new.png"
                alt="Nils Holger Logo"
                width={200}
                height={60}
                className="object-contain"
              />
            </div>

            {/* Tagline */}
            <p className="text-[#F5F5F5] text-sm md:text-base uppercase tracking-wide mb-12 max-w-xs">
              {language === "sv" ? "ANPASSADE INREDNINGAR FÖR OFFENTLIGA MILJÖER" : "CUSTOM INTERIORS FOR PUBLIC ENVIRONMENTS"}
            </p>

            {/* Navigation Buttons */}
            <nav className="flex flex-col space-y-6 w-full max-w-sm">
              {t.nav.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    scrollToSection(["about", "services", "products", "references", "contact"][index])
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full h-14 rounded-full bg-[#F5F5F5] text-[#2B2B2B] hover:bg-stone-200 text-sm font-semibold flex items-center justify-center px-8 shadow-lg"
                  data-testid={`mobile-nav-${item.toLowerCase()}`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Language Toggle and Booking Button */}
            <div className="mt-12 flex flex-col space-y-4 w-full max-w-sm">
              <button
                onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
                className="w-full h-12 rounded-full bg-[#FEEFC3] text-[#2B2B2B] text-sm font-medium hover:bg-[#FEE68A] transition-colors duration-200 shadow-lg"
                data-testid="mobile-language-toggle"
              >
                {language === "sv" ? "SV" : "EN"}
              </button>
              <Button
                variant="outline"
                size="lg"
                className="w-full h-12 rounded-full bg-[#2B2B2B] hover:bg-[#1A1A1A] text-[#F5F5F5] border-[#F5F5F5] text-sm uppercase tracking-wide shadow-lg"
                data-testid="mobile-book-consultation"
              >
                {t.bookConsultation}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}