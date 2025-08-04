"use client"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"

interface HeaderProps {
  className?: string
}

const translations = {
  sv: {
    nav: ["OM", "TJÄNSTER", "PRODUKTER", "REFERENSER", "KONTAKT"],
    bookConsultation: "BOKA GRATIS KONSULTATION",
  },
  en: {
    nav: ["ABOUT", "SERVICES", "PRODUCTS", "REFERENCES", "CONTACT"],
    bookConsultation: "BOOK FREE CONSULTATION",
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#3C2315] transition-all duration-300 ease-in-out">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between flex-nowrap">
          {/* Logo with off-white semi-circle background - Far left */}
          <div className="flex-shrink-0 relative">
            <button 
              onClick={() => scrollToSection("hero")} 
              className="focus:outline-none relative"
              data-testid="logo-button"
            >
              {/* Off-white semi-circle background */}
              <div 
                className="absolute inset-0 bg-[#F5F5F5]"
                style={{
                  width: '160px',
                  height: '50px',
                  borderRadius: '25px 80px 80px 25px',
                  transform: 'translateX(-8px) translateY(-2px)',
                  zIndex: 0
                }}
              />
              <img
                src="/logo.png"
                alt="Nils Holger – Furniture & Projects"
                className="object-contain relative z-10 h-12 max-w-[140px]"
                style={{ filter: 'brightness(0.8) contrast(1.2)' }}
              />
            </button>
          </div>

          {/* Desktop Navigation Links - Center area */}
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-10">
            {t.nav.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(["about", "services", "products", "references", "contact"][index])}
                className="text-sm text-[#F5F5F5] hover:text-white font-medium transition-colors duration-200 tracking-[0.2em]"
                data-testid={`nav-${item.toLowerCase()}`}
                style={{ 
                  fontFamily: '"Playfair Display", "Merriweather", serif',
                  fontWeight: '500'
                }}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Desktop Right-aligned elements */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Language Toggle - plain text */}
            <button
              onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
              className="text-[#F5F5F5] hover:text-white text-sm font-medium transition-colors duration-200 tracking-[0.1em]"
              data-testid="language-toggle"
              style={{ fontFamily: '"Playfair Display", "Merriweather", serif' }}
            >
              {language === "sv" ? "SV" : "EN"}
            </button>
            
            {/* Book Consultation Button */}
            <Button
              variant="outline"
              size="sm"
              className="bg-[#F5D97C] hover:bg-[#F1D46A] text-[#3C2315] border-[#F5D97C] font-bold text-xs tracking-[0.1em] px-5 py-2 h-9 rounded-md whitespace-nowrap shadow-sm"
              data-testid="book-consultation"
              style={{ fontFamily: '"Playfair Display", "Merriweather", serif' }}
            >
              {t.bookConsultation}
            </Button>
          </div>

          {/* Mobile/Tablet Hamburger Menu Icon */}
          <div className="lg:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-[#F5F5F5] hover:text-white hover:bg-[#4A2A1A]"
              data-testid="mobile-menu-toggle"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Add padding to body content to account for fixed header */}
      <div className="h-20"></div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#3C2315] transition-transform duration-500 ease-in-out"
          data-testid="mobile-menu"
        >
          {/* Background with overlay */}
          <div className="absolute inset-0 bg-[#3C2315]"></div>

          <div className="relative h-full flex flex-col items-center justify-start pt-20 pb-8 px-6 text-center overflow-y-auto">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-[#F5F5F5] hover:text-white z-10"
              data-testid="mobile-menu-close"
            >
              <X className="w-8 h-8" />
            </Button>

            {/* Logo Image for Mobile with semi-circle background */}
            <div className="mb-8 relative">
              <div 
                className="absolute inset-0 bg-[#F5F5F5]"
                style={{
                  width: '200px',
                  height: '70px',
                  borderRadius: '35px 100px 100px 35px',
                  transform: 'translateX(-10px) translateY(-5px)',
                  zIndex: 0
                }}
              />
              <img
                src="/logo.png"
                alt="Nils Holger – Furniture & Projects"
                className="object-contain relative z-10 h-16 max-w-[180px]"
                style={{ filter: 'brightness(0.8) contrast(1.2)' }}
              />
            </div>

            {/* Tagline */}
            <p className="text-[#F5F5F5] text-xs uppercase tracking-wide mb-10 max-w-xs text-center" style={{ fontFamily: '"Playfair Display", "Merriweather", serif' }}>
              {language === "sv" ? "ANPASSADE INREDNINGAR FÖR OFFENTLIGA MILJÖER" : "CUSTOM INTERIORS FOR PUBLIC ENVIRONMENTS"}
            </p>

            {/* Navigation Buttons */}
            <nav className="flex flex-col space-y-3 w-full max-w-sm">
              {t.nav.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    scrollToSection(["about", "services", "products", "references", "contact"][index])
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full h-12 rounded-md bg-[#F5F5F5] text-[#3C2315] hover:bg-[#EEEEEE] font-medium flex items-center justify-center px-6 shadow-md tracking-[0.1em]"
                  data-testid={`mobile-nav-${item.toLowerCase()}`}
                  style={{ fontFamily: '"Playfair Display", "Merriweather", serif' }}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Language Toggle and Booking Button */}
            <div className="mt-10 flex flex-col space-y-4 w-full max-w-sm">
              <button
                onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
                className="text-[#F5F5F5] hover:text-white text-base font-medium transition-colors duration-200 tracking-[0.1em]"
                data-testid="mobile-language-toggle"
                style={{ fontFamily: '"Playfair Display", "Merriweather", serif' }}
              >
                {language === "sv" ? "SV" : "EN"}
              </button>
              <Button
                variant="outline"
                size="lg"
                className="w-full h-12 rounded-md bg-[#F5D97C] hover:bg-[#F1D46A] text-[#3C2315] border-[#F5D97C] font-bold tracking-[0.1em] shadow-md"
                data-testid="mobile-book-consultation"
                style={{ fontFamily: '"Playfair Display", "Merriweather", serif' }}
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