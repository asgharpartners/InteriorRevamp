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
                className="absolute inset-0 bg-[#FFFAF6] rounded-full transform -translate-x-2 -translate-y-1"
                style={{
                  width: '140px',
                  height: '60px',
                  borderRadius: '30px 100px 100px 30px',
                  zIndex: -1
                }}
              />
              <img
                src="/nils-holger-logo-new.png"
                alt="Nils Holger Logo"
                width={120}
                height={40}
                className="object-contain relative z-10 mix-blend-multiply"
              />
            </button>
          </div>

          {/* Desktop Navigation Links - Center area */}
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-12">
            {t.nav.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(["about", "services", "products", "references", "contact"][index])}
                className="text-sm text-[#F5F5F5] hover:text-white font-serif font-medium transition-colors duration-200 tracking-[0.15em]"
                data-testid={`nav-${item.toLowerCase()}`}
                style={{ fontFamily: '"Playfair Display", "Merriweather", serif' }}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Desktop Right-aligned elements */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Toggle - plain text */}
            <button
              onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
              className="text-[#F5F5F5] hover:text-white text-sm font-medium transition-colors duration-200 tracking-wide"
              data-testid="language-toggle"
            >
              {language === "sv" ? "SV" : "EN"}
            </button>
            
            {/* Book Consultation Button */}
            <Button
              variant="outline"
              size="sm"
              className="bg-[#F5D97C] hover:bg-[#F3D563] text-[#3C2315] border-[#F5D97C] font-bold text-xs tracking-wide px-6 py-2 h-10 rounded-lg whitespace-nowrap"
              data-testid="book-consultation"
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
                className="absolute inset-0 bg-[#FFFAF6] rounded-full transform -translate-x-4 -translate-y-2"
                style={{
                  width: '180px',
                  height: '80px',
                  borderRadius: '40px 120px 120px 40px',
                  zIndex: -1
                }}
              />
              <img
                src="/nils-holger-logo-new.png"
                alt="Nils Holger Logo"
                width={160}
                height={60}
                className="object-contain relative z-10 mix-blend-multiply"
              />
            </div>

            {/* Tagline */}
            <p className="text-[#F5F5F5] text-sm uppercase tracking-wide mb-12 max-w-xs font-serif">
              {language === "sv" ? "ANPASSADE INREDNINGAR FÖR OFFENTLIGA MILJÖER" : "CUSTOM INTERIORS FOR PUBLIC ENVIRONMENTS"}
            </p>

            {/* Navigation Buttons */}
            <nav className="flex flex-col space-y-4 w-full max-w-sm">
              {t.nav.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    scrollToSection(["about", "services", "products", "references", "contact"][index])
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full h-14 rounded-lg bg-[#FFFAF6] text-[#3C2315] hover:bg-[#F5F5F5] font-serif font-medium flex items-center justify-center px-8 shadow-lg tracking-wide"
                  data-testid={`mobile-nav-${item.toLowerCase()}`}
                  style={{ fontFamily: '"Playfair Display", "Merriweather", serif' }}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Language Toggle and Booking Button */}
            <div className="mt-12 flex flex-col space-y-4 w-full max-w-sm">
              <button
                onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
                className="text-[#F5F5F5] hover:text-white text-lg font-medium transition-colors duration-200 tracking-wide"
                data-testid="mobile-language-toggle"
              >
                {language === "sv" ? "SV" : "EN"}
              </button>
              <Button
                variant="outline"
                size="lg"
                className="w-full h-14 rounded-lg bg-[#F5D97C] hover:bg-[#F3D563] text-[#3C2315] border-[#F5D97C] font-bold uppercase tracking-wide shadow-lg"
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