"use client"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import nilsHolgerLogo from "@/assets/nils-holger-logo.png"

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#3C2315] transition-all duration-300 ease-in-out" style={{ height: '100px' }}>
        {/* Logo with yellow background - Top left corner */}
        <div className="absolute top-0 left-0 z-10">
          <div 
            className="flex items-center justify-start pl-8 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #F5D97C 0%, #F0D060 50%, #E8C555 100%)',
              width: '280px',
              height: '100px',
              borderRadius: '0 0 80px 0',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.3)',
              position: 'relative'
            }}
          >
            <button 
              onClick={() => scrollToSection("hero")} 
              className="focus:outline-none"
              data-testid="logo-button"
            >
              <img
                src={nilsHolgerLogo}
                alt="Nils Holger – Furniture & Projects"
                className="h-20"
                style={{ 
                  objectFit: 'contain', 
                  maxWidth: '260px', 
                  display: 'block'
                }}
              />
            </button>
          </div>
        </div>

        {/* Main navigation container - same height as logo */}
        <div className="container mx-auto px-6 flex items-center justify-end h-full" style={{ paddingLeft: '300px' }}>
          {/* Desktop Navigation Links - Right side */}
          <nav className="hidden lg:flex items-center space-x-8 mr-8">
            {t.nav.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(["about", "services", "products", "references", "contact"][index])}
                className="text-sm text-[#F5F5F5] hover:text-white font-medium transition-colors duration-200 tracking-[0.2em] uppercase"
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
              className="text-[#F5F5F5] hover:text-white text-sm font-medium transition-colors duration-200 tracking-[0.1em] uppercase"
              data-testid="language-toggle"
              style={{ fontFamily: '"Playfair Display", "Merriweather", serif' }}
            >
              {language === "sv" ? "SV" : "EN"}
            </button>
            
            {/* Book Consultation Button */}
            <Button
              variant="outline"
              size="sm"
              className="bg-[#F5D97C] hover:bg-[#F1D46A] text-[#3C2315] border-[#F5D97C] font-bold text-xs tracking-[0.1em] px-5 py-2 h-9 rounded-md whitespace-nowrap shadow-sm uppercase"
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

            {/* Logo for Mobile with yellow background */}
            <div className="mb-8 relative">
              <div 
                className="rounded-2xl p-6 flex items-center justify-center shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #F5D97C 0%, #F0D060 50%, #E8C555 100%)',
                  width: '320px',
                  height: '120px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)'
                }}
              >
                <img
                  src="/logo-new.jpg"
                  alt="Nils Holger – Furniture & Projects"
                  className="h-20"
                  style={{ 
                    objectFit: 'contain', 
                    maxWidth: '300px', 
                    display: 'block',
                    filter: 'brightness(1.1) contrast(1.2) saturate(0.9)',
                    background: 'transparent'
                  }}
                />
              </div>
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