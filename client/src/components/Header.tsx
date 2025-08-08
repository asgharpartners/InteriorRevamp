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
  const [isScrolled, setIsScrolled] = useState(false)
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

  // Hide/show header based on scroll position and track scroll state
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroSection = document.querySelector('[data-section="hero"]')
      
      // Set scrolled state for navigation positioning
      setIsScrolled(scrollY > 200)
      
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
      {/* Restructured header with logo above navigation bar */}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Logo Container - positioned above navigation */}
        <div className="relative z-20">
          <div 
            className="absolute top-0 left-4 2xl:w-[320px] xl:w-[280px] lg:w-[240px] md:w-[200px] sm:w-[180px] w-[160px] 2xl:h-[120px] xl:h-[100px] lg:h-[90px] md:h-[80px] sm:h-[70px] h-[60px] flex items-center justify-start"
            style={{
              background: 'linear-gradient(135deg, #F5D97C 0%, #F0D060 50%, #E8C555 100%)',
              borderRadius: '0 0 120px 0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          >
            <button 
              onClick={() => scrollToSection("hero")} 
              className="focus:outline-none flex items-center justify-start h-full w-full pl-3"
              data-testid="logo-button"
            >
              <img
                src={nilsHolgerLogo}
                alt="Nils Holger – Furniture & Projects"
                className="2xl:h-20 xl:h-16 lg:h-14 md:h-12 sm:h-10 h-8 object-contain"
                onLoad={() => console.log('Logo loaded successfully')}
                onError={(e) => {
                  console.error('Logo failed to load from:', nilsHolgerLogo);
                }}
              />
            </button>
          </div>
        </div>

        {/* Full-width Navigation Bar */}
        <div className="2xl:mt-[120px] xl:mt-[100px] lg:mt-[90px] md:mt-[80px] sm:mt-[70px] mt-[60px] w-full bg-[#3E2516] shadow-lg">
          <div className="max-w-full mx-auto px-4">
            <div className="flex items-center justify-between h-14">
              
              {/* Desktop Navigation - Left side */}
              <nav className="hidden lg:flex items-center space-x-2 flex-1">
                {t.nav.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(["about", "services", "products", "references", "contact"][index])}
                    className="px-3 py-2 text-xs font-bold tracking-wide uppercase text-[#F5F1EA] hover:text-white hover:bg-[#3E2516]/50 backdrop-blur-sm rounded-md transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#AD8C44]"
                    style={{ 
                      fontFamily: '"Playfair Display", "Merriweather", serif',
                      fontWeight: '700'
                    }}
                    data-testid={`nav-${item.toLowerCase()}`}
                  >
                    {item}
                  </button>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden text-[#F5F1EA] hover:text-white p-2 rounded-md transition-colors duration-200"
                data-testid="mobile-menu-button"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Right side controls */}
              <div className="flex items-center space-x-2">
                {/* Search Button */}
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-[#F5F1EA] hover:text-white hover:bg-[#3E2516]/50 rounded-md transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#AD8C44]"
                  aria-label={language === 'sv' ? 'Sök' : 'Search'}
                  data-testid="search-button"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>

                {/* Language Toggle */}
                <button
                  onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
                  className="px-3 py-2 text-xs font-bold tracking-wide uppercase text-[#F5F1EA] hover:text-white hover:bg-[#3E2516]/50 rounded-md transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#AD8C44]"
                  style={{ 
                    fontFamily: '"Playfair Display", "Merriweather", serif',
                    fontWeight: '700'
                  }}
                  data-testid="language-toggle"
                >
                  {language === "sv" ? "SV" : "EN"}
                </button>

                {/* Book Consultation Button - hidden on small screens */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hidden md:block px-4 py-2 text-xs font-bold tracking-wide uppercase text-[#F5F1EA] hover:text-white bg-[#AD8C44]/80 hover:bg-[#AD8C44] rounded-md border border-[#AD8C44] transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#F2DC74] hover:scale-105 whitespace-nowrap"
                  style={{ 
                    fontFamily: '"Playfair Display", "Merriweather", serif',
                    fontWeight: '700'
                  }}
                  data-testid="book-consultation-button"
                >
                  {t.bookConsultation}
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="lg:hidden border-t border-[#3E2516]/20 py-4 animate-in slide-in-from-top duration-200">
                <nav className="flex flex-col space-y-2">
                  {t.nav.map((item, index) => (
                    <button
                      key={item}
                      onClick={() => {
                        scrollToSection(["about", "services", "products", "references", "contact"][index]);
                        setIsMobileMenuOpen(false);
                      }}
                      className="px-3 py-2 text-left text-sm font-bold tracking-wide uppercase text-[#F5F1EA] hover:text-white hover:bg-[#3E2516]/50 rounded-md transition-all duration-200"
                      style={{ 
                        fontFamily: '"Playfair Display", "Merriweather", serif',
                        fontWeight: '700'
                      }}
                      data-testid={`mobile-nav-${item.toLowerCase()}`}
                    >
                      {item}
                    </button>
                  ))}
                  
                  {/* Mobile Book Consultation Button */}
                  <button
                    onClick={() => {
                      scrollToSection('contact');
                      setIsMobileMenuOpen(false);
                    }}
                    className="mt-4 px-4 py-2 text-sm font-bold tracking-wide uppercase text-[#F5F1EA] hover:text-white bg-[#AD8C44]/80 hover:bg-[#AD8C44] rounded-md border border-[#AD8C44] transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#F2DC74] text-center"
                    style={{ 
                      fontFamily: '"Playfair Display", "Merriweather", serif',
                      fontWeight: '700'
                    }}
                    data-testid="mobile-book-consultation-button"
                  >
                    {t.bookConsultation}
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>


      
      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onNavigate={scrollToSection}
      />
    </>
  )
}