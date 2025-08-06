import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
// Using a placeholder for now - will be replaced with actual logo
const nilsHolgerLogo = "/api/placeholder/200/80"

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
      {/* Combined Header - Single element with both logo and navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 2xl:h-[160px] xl:h-[140px] lg:h-[120px] md:h-[110px] sm:h-[90px] h-[80px]">
        {/* Unified background container */}
        <div className="h-full w-full relative">
          {/* Yellow logo background with curve */}
          <div 
            className="absolute top-0 left-0 2xl:w-[521px] xl:w-[461px] lg:w-[421px] md:w-[381px] sm:w-[341px] w-[301px] h-full flex items-center justify-start pl-4"
            style={{
              background: 'linear-gradient(135deg, #F5D97C 0%, #F0D060 50%, #E8C555 100%)',
              borderRadius: '0 0 140px 0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
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
                className="2xl:h-64 xl:h-60 lg:h-56 md:h-52 sm:h-40 h-36"
                style={{ 
                  objectFit: 'contain', 
                  display: 'block',
                  maxWidth: '90%'
                }}
              />
            </button>
          </div>

          {/* Dark brown navigation background with bulged edge for seamless docking */}
          <div 
            className="absolute top-0 h-full 2xl:left-[380px] xl:left-[320px] lg:left-[280px] md:left-[240px] sm:left-[200px] left-[160px] right-0"
            style={{
              background: '#3C2315',
              borderRadius: '140px 0 0 0'
            }}
          >
            {/* Navigation container - right aligned content */}
            <div className="h-full flex items-center justify-end pr-6 pl-40 relative z-10">
              {/* Desktop Navigation Links - Right aligned */}
              <nav className="hidden lg:flex items-center space-x-6">
                {t.nav.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(["about", "services", "products", "references", "contact"][index])}
                    className="text-sm text-[#F5F5F5] hover:text-white font-bold transition-colors duration-200 tracking-wide uppercase whitespace-nowrap"
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
                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-[#3C2315] w-32 focus:outline-none focus:ring-1 focus:ring-[#F5D97C]"
                    data-testid="search-input"
                  />
                </div>
                
                {/* Language Toggle - off-white background */}
                <button
                  onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
                  className="bg-[#FCF4EE] hover:bg-white text-[#3C2315] text-sm font-medium transition-colors duration-200 tracking-wide uppercase px-3 py-2 rounded-md whitespace-nowrap"
                  data-testid="language-toggle"
                  style={{ fontFamily: '"Playfair Display", "Merriweather", serif' }}
                >
                  {language === "sv" ? "SV" : "EN"}
                </button>

                {/* Book Consultation Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-[#F5D97C] hover:bg-[#F1D46A] text-[#3C2315] border-[#F5D97C] font-bold text-sm tracking-wide px-4 py-2 h-9 rounded-md whitespace-nowrap shadow-sm uppercase"
                  data-testid="book-consultation"
                  style={{ fontFamily: '"Playfair Display", "Merriweather", serif' }}
                >
                  {t.bookConsultation}
                </Button>
              </div>

              {/* Mobile hamburger menu */}
              <button
                className="lg:hidden text-[#F5F5F5] hover:text-white transition-colors duration-200 ml-4"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="mobile-menu-toggle"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="fixed top-0 left-0 right-0 bg-[#3C2315] shadow-lg pt-20">
            {/* Logo for Mobile with yellow background */}
            <div className="mb-8 relative">
              <div 
                className="rounded-2xl p-6 flex items-center justify-center shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #F5D97C 0%, #F0D060 50%, #E8C555 100%)',
                  width: '320px',
                  height: '120px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  margin: '0 auto'
                }}
              >
                <img
                  src={nilsHolgerLogo}
                  alt="Nils Holger – Furniture & Projects"
                  className="h-16"
                  style={{ 
                    objectFit: 'contain', 
                    display: 'block',
                    maxWidth: '90%'
                  }}
                />
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col items-center space-y-6 px-6 pb-8">
              {t.nav.map((item, index) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(["about", "services", "products", "references", "contact"][index])
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-lg text-[#F5F5F5] hover:text-white font-bold transition-colors duration-200 tracking-wide uppercase"
                  data-testid={`mobile-nav-${item.toLowerCase()}`}
                  style={{ 
                    fontFamily: '"Playfair Display", "Merriweather", serif',
                    fontWeight: '700'
                  }}
                >
                  {item}
                </button>
              ))}
              
              {/* Mobile Language Toggle */}
              <button
                onClick={() => {
                  setLanguage(language === "sv" ? "en" : "sv")
                  setIsMobileMenuOpen(false)
                }}
                className="bg-[#FCF4EE] hover:bg-white text-[#3C2315] text-sm font-medium transition-colors duration-200 tracking-wide uppercase px-4 py-3 rounded-md mt-4"
                data-testid="mobile-language-toggle"
                style={{ fontFamily: '"Playfair Display", "Merriweather", serif' }}
              >
                {language === "sv" ? "SV" : "EN"}
              </button>

              {/* Mobile Book Consultation Button */}
              <Button
                variant="outline"
                size="lg"
                className="bg-[#F5D97C] hover:bg-[#F1D46A] text-[#3C2315] border-[#F5D97C] font-bold text-base tracking-wide px-8 py-3 rounded-md shadow-sm uppercase mt-4"
                data-testid="mobile-book-consultation"
                style={{ fontFamily: '"Playfair Display", "Merriweather", serif' }}
                onClick={() => setIsMobileMenuOpen(false)}
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