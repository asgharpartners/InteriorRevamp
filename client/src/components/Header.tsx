import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { SearchModal } from "@/components/search-modal"
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
  const [isSearchOpen, setIsSearchOpen] = useState(false)

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

          {/* Desktop Navigation - positioned for proper spacing */}
          <div className="absolute top-0 h-full w-full flex items-center z-10">
            
            {/* Center navigation section - shifted right for better spacing */}
            <div className="flex-1 flex justify-center px-4 2xl:ml-[520px] xl:ml-[470px] lg:ml-[420px] md:ml-[320px]">
              
              {/* Full navigation for desktop */}
              <nav className="hidden 2xl:flex items-center space-x-6">
                {t.nav.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(["about", "services", "products", "references", "contact"][index])}
                    className="text-sm text-[#F5F1EA] hover:text-white font-bold transition-all duration-200 tracking-wide uppercase whitespace-nowrap px-3 py-2 rounded-md bg-[#3E2516]/80 hover:bg-[#3E2516]/90"
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
              
              {/* Compact navigation for large screens */}
              <nav className="hidden xl:flex 2xl:hidden items-center space-x-3">
                {t.nav.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(["about", "services", "products", "references", "contact"][index])}
                    className="text-xs text-[#F5F1EA] hover:text-white font-bold transition-all duration-200 tracking-wide uppercase whitespace-nowrap px-2 py-2 rounded-md bg-[#3E2516]/80 hover:bg-[#3E2516]/90"
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
              
              {/* Standard navigation for large screens */}
              <nav className="hidden lg:flex xl:hidden items-center space-x-2">
                {t.nav.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(["about", "services", "products", "references", "contact"][index])}
                    className="text-xs text-[#F5F1EA] hover:text-white font-bold transition-all duration-200 tracking-wide uppercase whitespace-nowrap px-2 py-1 rounded-md bg-[#3E2516]/80 hover:bg-[#3E2516]/90"
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
              
              {/* iPad navigation - all links visible */}
              <nav className="hidden md:flex lg:hidden items-center space-x-1">
                {t.nav.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(["about", "services", "products", "references", "contact"][index])}
                    className="text-xs text-[#F5F1EA] hover:text-white font-bold transition-all duration-200 tracking-wide uppercase whitespace-nowrap px-1 py-1 rounded-sm bg-[#3E2516]/80 hover:bg-[#3E2516]/90"
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
            </div>

            {/* Right-aligned elements - always positioned at far right with safe margins */}
            <div className="hidden md:flex items-center md:space-x-2 lg:space-x-3 xl:space-x-4 pr-6 flex-shrink-0 2xl:mr-4 xl:mr-8 lg:mr-12 md:mr-16">
                {/* Search Icon */}
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="text-[#3E2516] hover:text-[#2B1B0F] transition-colors duration-200 p-2 rounded-md bg-[#F5F1EA]/80 hover:bg-[#F5F1EA]/90 flex-shrink-0 min-w-fit"
                  data-testid="search-button"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>

                {/* Language Toggle */}
                <button
                  onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
                  className="bg-[#F2DC74] hover:bg-[#F2DC74]/90 text-[#3E2516] text-xs lg:text-sm font-medium transition-colors duration-200 tracking-wide uppercase md:px-2 lg:px-3 py-2 rounded-md whitespace-nowrap flex-shrink-0 min-w-fit"
                  data-testid="language-toggle"
                  style={{ fontFamily: '"Playfair Display", "Merriweather", serif' }}
                >
                  {language === "sv" ? "SV" : "EN"}
                </button>

                {/* Book Consultation Button */}
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-[#F2DC74] hover:bg-[#F2DC74]/90 text-[#3E2516] border-[#F2DC74] font-bold text-xs lg:text-sm tracking-wide md:px-2 lg:px-4 py-2 h-9 rounded-md whitespace-nowrap shadow-sm uppercase flex-shrink-0 min-w-fit"
                  data-testid="book-consultation"
                  style={{ fontFamily: '"Playfair Display", "Merriweather", serif' }}
                >
                  {t.bookConsultation}
                </Button>
              </div>

            
            {/* Mobile hamburger menu - positioned absolutely */}
            <button
              className="md:hidden text-[#3E2516] hover:text-[#2B1B0F] transition-colors duration-200 p-2 rounded-md bg-[#F5F1EA]/80 hover:bg-[#F5F1EA]/90 absolute top-1/2 right-4 transform -translate-y-1/2 z-20"
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
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
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

              {/* Mobile Search Button */}
              <button 
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="text-white hover:text-[#F2DC74] transition-colors duration-200 flex items-center gap-2"
                data-testid="mobile-search-button"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {language === 'sv' ? 'Sök' : 'Search'}
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
      
      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onNavigate={scrollToSection}
      />
    </>
  )
}