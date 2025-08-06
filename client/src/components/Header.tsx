import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
const nilsHolgerLogo = "/nils-holger-logo-new.jpg"

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <>
      {/* Clean straight navigation bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#3E2516]">
        <div className="h-full w-full relative">
          {/* Logo overlapping on top - left aligned */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
            <button 
              onClick={() => scrollToSection("hero")} 
              className="focus:outline-none bg-[#F2DC74] rounded-lg p-2 shadow-lg hover:bg-[#F2DC74]/90 transition-colors duration-200"
              data-testid="logo-button"
            >
              <img
                src={nilsHolgerLogo}
                alt="Nils Holger – Furniture & Projects"
                className="h-10 w-auto object-contain"
                onLoad={() => console.log('Logo loaded successfully')}
                onError={(e) => {
                  console.error('Logo failed to load from:', nilsHolgerLogo);
                }}
              />
            </button>
          </div>

          {/* Navigation content - right aligned */}
          <div className="h-full flex items-center justify-end px-6 ml-20">
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6">
              {t.nav.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(["about", "services", "products", "references", "contact"][index])}
                  className="text-sm text-white hover:text-[#F2DC74] font-medium transition-colors duration-200 tracking-wide uppercase whitespace-nowrap"
                  data-testid={`nav-${item.toLowerCase()}`}
                  style={{ 
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: '600'
                  }}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Right side elements */}
            <div className="hidden lg:flex items-center space-x-4 ml-8">
              {/* Search Icon */}
              <button className="text-white hover:text-[#F2DC74] transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Language Toggle - yellow background */}
              <button
                onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
                className="bg-[#F2DC74] hover:bg-[#F2DC74]/90 text-[#3E2516] text-sm font-semibold transition-colors duration-200 px-3 py-1 rounded whitespace-nowrap"
                data-testid="language-toggle"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {language.toUpperCase()} | {language === "sv" ? "EN" : "SV"}
              </button>

              {/* Book Consultation Button - yellow with rounded edges */}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#F2DC74] hover:bg-[#F2DC74]/90 text-[#3E2516] border-none font-semibold text-sm tracking-wide px-6 py-2 rounded-full whitespace-nowrap shadow-sm uppercase"
                data-testid="book-consultation"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {t.bookConsultation}
              </Button>
            </div>

            {/* Mobile hamburger menu */}
            <button
              className="lg:hidden text-white hover:text-[#F2DC74] transition-colors duration-200 ml-4"
              onClick={toggleMobileMenu}
              data-testid="mobile-menu-toggle"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleMobileMenu}
        >
          <div className="fixed top-0 left-0 right-0 bg-[#3E2516] shadow-lg pt-20" onClick={(e) => e.stopPropagation()}>
            <nav className="flex flex-col items-center space-y-6 px-6 pb-8">
              {t.nav.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(["about", "services", "products", "references", "contact"][index])}
                  className="text-lg text-white hover:text-[#F2DC74] font-semibold transition-colors duration-200 tracking-wide uppercase"
                  data-testid={`mobile-nav-${item.toLowerCase()}`}
                  style={{ 
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: '600'
                  }}
                >
                  {item}
                </button>
              ))}
              
              {/* Mobile Language Toggle */}
              <button
                onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
                className="bg-[#F2DC74] hover:bg-[#F2DC74]/90 text-[#3E2516] text-sm font-semibold transition-colors duration-200 px-4 py-2 rounded mt-4"
                data-testid="mobile-language-toggle"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {language.toUpperCase()} | {language === "sv" ? "EN" : "SV"}
              </button>

              {/* Mobile Book Consultation Button */}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#F2DC74] hover:bg-[#F2DC74]/90 text-[#3E2516] border-none font-semibold text-sm tracking-wide px-6 py-3 rounded-full shadow-sm uppercase mt-4"
                data-testid="mobile-book-consultation"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {t.bookConsultation}
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}