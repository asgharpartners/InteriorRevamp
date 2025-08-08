import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { SearchModal } from '@/components/search-modal';
import nilsHolgerLogo from '@assets/Nils Holger Logo_1754501001479.jpeg';

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

export default function CleanHeader() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Clean Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Dark Brown Navigation Bar */}
        <div className="w-full bg-[#3E2516] h-16">
          <div className="container mx-auto px-4 h-full flex items-center justify-between">
            
            {/* Desktop Navigation - Right Side */}
            <div className="hidden lg:flex items-center space-x-8 ml-auto">
              {/* Navigation Links */}
              {t.nav.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(["about", "services", "products", "references", "contact"][index])}
                  className="text-white hover:text-[#F2DC74] font-medium text-sm tracking-wide uppercase transition-colors duration-200"
                  data-testid={`nav-${item.toLowerCase()}`}
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {item}
                </button>
              ))}
              
              {/* Search Icon */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-white hover:text-[#F2DC74] transition-colors duration-200 p-2"
                data-testid="search-button"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
                className="bg-[#F2DC74] hover:bg-[#F2DC74]/90 text-[#3E2516] text-sm font-medium px-3 py-1.5 rounded transition-colors duration-200"
                data-testid="language-toggle"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {language.toUpperCase()} | {language === "sv" ? "EN" : "SV"}
              </button>

              {/* Book Consultation Button */}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#F2DC74] hover:bg-[#F2DC74]/90 text-[#3E2516] font-bold text-sm tracking-wide px-6 py-2 rounded-full transition-colors duration-200"
                data-testid="book-consultation"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {t.bookConsultation}
              </Button>
            </div>

            {/* Mobile Hamburger Menu */}
            <button
              className="lg:hidden text-white hover:text-[#F2DC74] transition-colors duration-200 ml-auto"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Overlapping Logo */}
        <div className="absolute top-2 left-4 z-10">
          <div className="bg-[#AD8C44] rounded-lg p-2 shadow-lg">
            <img 
              src={nilsHolgerLogo}
              alt="Nils Holger Logo" 
              className="h-12 w-auto object-contain"
              onLoad={() => console.log('Logo loaded successfully')}
              data-testid="header-logo"
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden">
          <div className="fixed top-16 left-0 right-0 bg-[#3E2516] shadow-lg">
            <nav className="flex flex-col space-y-4 px-6 py-8">
              {t.nav.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(["about", "services", "products", "references", "contact"][index])}
                  className="text-white hover:text-[#F2DC74] font-medium text-lg tracking-wide uppercase transition-colors duration-200 text-left"
                  data-testid={`mobile-nav-${item.toLowerCase()}`}
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {item}
                </button>
              ))}
              
              {/* Mobile Search Button */}
              <button 
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="text-white hover:text-[#F2DC74] transition-colors duration-200 flex items-center gap-2 text-left"
                data-testid="mobile-search-button"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {language === 'sv' ? 'Sök' : 'Search'}
              </button>

              {/* Mobile Language Toggle */}
              <button
                onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
                className="bg-[#F2DC74] hover:bg-[#F2DC74]/90 text-[#3E2516] text-sm font-medium px-4 py-2 rounded w-fit"
                data-testid="mobile-language-toggle"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {language.toUpperCase()} | {language === "sv" ? "EN" : "SV"}
              </button>

              {/* Mobile Book Consultation Button */}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#F2DC74] hover:bg-[#F2DC74]/90 text-[#3E2516] font-bold text-sm tracking-wide px-6 py-3 rounded-full w-fit"
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
  );
}