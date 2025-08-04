import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Curved white background for logo */}
      <div className="absolute left-0 top-0 w-80 h-16 bg-white" 
           style={{
             clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)'
           }}>
      </div>
      
      {/* Dark brown background */}
      <div className="bg-[#4A2C2A] h-16 w-full">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <div 
            className="relative z-10 cursor-pointer flex items-center pl-6"
            onClick={() => scrollToSection('intro')}
          >
            <div>
              <h1 className="font-serif text-lg font-bold text-[#4A2C2A]" style={{ fontFamily: 'serif' }}>
                Nils Holger
              </h1>
              <p className="text-xs text-[#4A2C2A]/70 -mt-1">FURNITURE & PROJECTS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-[#D4AF37] transition-colors font-medium text-sm tracking-wide"
              >
                OM OSS
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-[#D4AF37] transition-colors font-medium text-sm tracking-wide"
              >
                TJÄNSTER
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-white hover:text-[#D4AF37] transition-colors font-medium text-sm tracking-wide"
              >
                PRODUKTER
              </button>
              <button 
                onClick={() => scrollToSection('references')}
                className="text-white hover:text-[#D4AF37] transition-colors font-medium text-sm tracking-wide"
              >
                REFERENSER
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-[#D4AF37] transition-colors font-medium text-sm tracking-wide"
              >
                KONTAKT
              </button>
            </nav>
            
            {/* Search & CTA */}
            <div className="flex items-center space-x-6">
              <button className="text-white hover:text-[#D4AF37] transition-colors">
                <Search size={18} />
              </button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#D4AF37] text-[#4A2C2A] px-6 py-2 font-medium hover:bg-[#D4AF37]/90 transition-all duration-300 text-sm tracking-wide rounded-none"
                data-testid="header-cta-button"
              >
                BOKA GRATIS KONSULTATION
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu - Full width dark dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#4A2C2A] shadow-2xl">
            <nav className="flex flex-col p-6 space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-white hover:text-[#D4AF37] transition-colors font-medium text-sm py-3 tracking-wide"
              >
                OM OSS
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-white hover:text-[#D4AF37] transition-colors font-medium text-sm py-3 tracking-wide"
              >
                TJÄNSTER
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-left text-white hover:text-[#D4AF37] transition-colors font-medium text-sm py-3 tracking-wide"
              >
                PRODUKTER
              </button>
              <button 
                onClick={() => scrollToSection('references')}
                className="text-left text-white hover:text-[#D4AF37] transition-colors font-medium text-sm py-3 tracking-wide"
              >
                REFERENSER
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-white hover:text-[#D4AF37] transition-colors font-medium text-sm py-3 tracking-wide"
              >
                KONTAKT
              </button>
              
              <div className="pt-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-[#D4AF37] text-[#4A2C2A] px-6 py-3 font-medium hover:bg-[#D4AF37]/90 transition-all duration-300 text-sm tracking-wide rounded-none"
                >
                  BOKA GRATIS KONSULTATION
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
