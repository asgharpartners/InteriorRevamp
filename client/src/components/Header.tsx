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
      <header className="relative top-0 left-0 right-0 z-50 bg-[#3C2315] transition-all duration-300 ease-in-out 2xl:h-[160px] xl:h-[140px] lg:h-[120px] md:h-[110px] sm:h-[90px] h-[80px] overflow-hidden">
        {/* Logo with yellow background - Top left corner */}
        <div className="absolute top-0 left-0 z-20">
          <div 
            className="flex items-center justify-start xl:pl-6 lg:pl-4 md:pl-3 sm:pl-2 pl-1 shadow-lg 2xl:w-[450px] xl:w-[400px] lg:w-[350px] md:w-[320px] sm:w-[280px] w-[240px] 2xl:h-[160px] xl:h-[140px] lg:h-[120px] md:h-[110px] sm:h-[90px] h-[80px]"
            style={{
              background: '#FCF4EE',
              borderRadius: '0 0 120px 0',
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
                className="2xl:h-60 xl:h-56 lg:h-52 md:h-48 sm:h-36 h-32"
                style={{ 
                  objectFit: 'contain', 
                  display: 'block',
                  maxWidth: '90%'
                }}
              />
            </button>
          </div>
        </div>

        {/* Main navigation container - same height as logo */}
        <div className="container mx-auto px-6 flex items-center justify-center h-full 2xl:pl-[450px] xl:pl-[400px] lg:pl-[350px] md:pl-[320px] sm:pl-[280px] pl-[240px]">
          {/* Desktop Navigation Links - Right side */}
          <nav className="hidden lg:flex items-center 2xl:space-x-6 xl:space-x-4 lg:space-x-2">
            {t.nav.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(["about", "services", "products", "references", "contact"][index])}
                className="2xl:text-sm xl:text-xs lg:text-xs text-[#F5F5F5] hover:text-white font-bold transition-colors duration-200 2xl:tracking-[0.1em] xl:tracking-[0.05em] lg:tracking-0 uppercase whitespace-nowrap"
                data-testid={`nav-${item.toLowerCase()}`}
                style={{ 
                  fontFamily: '"Playfair Display", "Merriweather", serif',
                  fontWeight: '700'
                }}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Desktop Right-aligned elements */}
          <div className="hidden lg:flex items-center 2xl:space-x-3 xl:space-x-2 lg:space-x-1 ml-auto pl-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white border border-gray-300 rounded-md 2xl:px-3 xl:px-2 lg:px-2 py-2 2xl:text-sm xl:text-xs lg:text-xs text-[#3C2315] 2xl:w-28 xl:w-24 lg:w-20 focus:outline-none focus:ring-1 focus:ring-[#F5D97C]"
                data-testid="search-input"
              />
            </div>
            
            {/* Language Toggle - off-white background */}
            <button
              onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
              className="bg-[#F5F5F5] hover:bg-white text-[#3C2315] 2xl:text-sm xl:text-xs lg:text-xs font-medium transition-colors duration-200 2xl:tracking-[0.05em] xl:tracking-0 lg:tracking-0 uppercase 2xl:px-2 xl:px-2 lg:px-1 py-2 rounded-md whitespace-nowrap"
              data-testid="language-toggle"
              style={{ fontFamily: '"Playfair Display", "Merriweather", serif' }}
            >
              {language === "sv" ? "SV" : "EN"}
            </button>
            
            {/* Book Consultation Button */}
            <Button
              variant="outline"
              size="sm"
              className="bg-[#F5D97C] hover:bg-[#F1D46A] text-[#3C2315] border-[#F5D97C] font-bold 2xl:text-xs xl:text-xs lg:text-xs 2xl:tracking-[0.05em] xl:tracking-0 lg:tracking-0 2xl:px-4 xl:px-3 lg:px-2 py-2 h-9 rounded-md whitespace-nowrap shadow-sm uppercase"
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
                  background: '#FCF4EE',
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