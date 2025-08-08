import { useState, useEffect } from "react"
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
  const [isVisible, setIsVisible] = useState(true)

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

  // Hide/show header based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('[data-section="hero"]')
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setIsVisible(heroBottom > 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <>
      {/* Original header design with large logo */}
      <header className="fixed top-0 left-0 right-0 z-50 2xl:h-[160px] xl:h-[140px] lg:h-[120px] md:h-[110px] sm:h-[90px] h-[80px]">
        <div className="h-full w-full relative">
          {/* Yellow logo background with curve */}
          <div 
            className="absolute top-0 left-0 2xl:w-[460px] xl:w-[410px] lg:w-[370px] md:w-[330px] sm:w-[290px] w-[250px] h-full flex items-center justify-start pl-4"
            style={{
              background: 'linear-gradient(135deg, #F5D97C 0%, #F0D060 50%, #E8C555 100%)',
              borderRadius: '0 0 140px 0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          >
            <button 
              onClick={() => scrollToSection("hero")} 
              className="focus:outline-none flex items-center justify-start h-full w-full"
              data-testid="logo-button"
            >
              <img
                src={nilsHolgerLogo}
                alt="Nils Holger – Furniture & Projects"
                className="2xl:h-128 xl:h-112 lg:h-96 md:h-80 sm:h-72 h-64 object-contain"
                style={{ 
                  maxWidth: '90%',
                  display: 'block',
                  marginLeft: '-1rem'
                }}
                onLoad={() => console.log('Logo loaded successfully')}
                onError={(e) => {
                  console.error('Logo failed to load from:', nilsHolgerLogo);
                }}
              />
            </button>
          </div>

          {/* Navigation content - positioned on the right */}
          <div className="absolute top-0 right-0 h-full flex items-center justify-end pr-6 z-10">
              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center lg:space-x-2 xl:space-x-4 2xl:space-x-6">
                {t.nav.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(["about", "services", "products", "references", "contact"][index])}
                    className="lg:text-xs xl:text-sm text-[#F5F5F5] hover:text-white font-bold transition-colors duration-200 tracking-wide uppercase whitespace-nowrap"
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
              <div className="hidden lg:flex items-center space-x-4 ml-10">
                {/* Search Icon */}
                <button className="text-white hover:text-[#F2DC74] transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>

                {/* Language Toggle */}
                <button
                  onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
                  className="bg-[#F2DC74] hover:bg-[#F2DC74]/90 text-[#3E2516] text-sm font-medium transition-colors duration-200 tracking-wide uppercase px-3 py-2 rounded-md whitespace-nowrap"
                  data-testid="language-toggle"
                  style={{ fontFamily: '"Playfair Display", "Merriweather", serif' }}
                >
                  {language === "sv" ? "SV" : "EN"}
                </button>

                {/* Book Consultation Button */}
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-[#F2DC74] hover:bg-[#F2DC74]/90 text-[#3E2516] border-[#F2DC74] font-bold text-sm tracking-wide px-4 py-2 h-9 rounded-md whitespace-nowrap shadow-sm uppercase"
                  data-testid="book-consultation"
                  style={{ fontFamily: '"Playfair Display", "Merriweather", serif' }}
                >
                  {t.bookConsultation}
                </Button>
              </div>

              {/* Mobile hamburger menu */}
              <button
                className="lg:hidden text-[#F5F5F5] hover:text-white transition-colors duration-200 ml-4"
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