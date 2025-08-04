import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
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
    <header className="fixed w-full top-0 z-50 bg-[#2B2B2B]">
      <div className="w-full px-4 py-4 flex items-center justify-between">
        {/* Logo with golden rounded background */}
        <div className="flex items-center">
          <div className="bg-[#AD8C44] rounded-lg px-4 py-2">
            <h1 className="text-white font-serif text-2xl font-bold tracking-tight">
              Nils Holger
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-off-white hover:text-[#AD8C44] transition-colors font-medium text-sm"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-off-white hover:text-[#AD8C44] transition-colors font-medium text-sm"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-off-white hover:text-[#AD8C44] transition-colors font-medium text-sm"
            >
              {t('nav.products')}
            </button>
            <button 
              onClick={() => scrollToSection('references')}
              className="text-off-white hover:text-[#AD8C44] transition-colors font-medium text-sm"
            >
              {t('nav.references')}
            </button>
            <button 
              onClick={() => scrollToSection('partners')}
              className="text-off-white hover:text-[#AD8C44] transition-colors font-medium text-sm"
            >
              Partners
            </button>
            <button 
              onClick={() => scrollToSection('career')}
              className="text-off-white hover:text-[#AD8C44] transition-colors font-medium text-sm"
            >
              Career
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-off-white hover:text-[#AD8C44] transition-colors font-medium text-sm"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-off-white hover:text-[#AD8C44] transition-colors font-medium text-sm"
            >
              {t('nav.contact')}
            </button>
          </nav>
          
          {/* Language Switcher with yellow background */}
          <div className="bg-yellow-200 px-3 py-1 rounded flex items-center space-x-2">
            <button 
              onClick={() => setLanguage('sv')}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                language === 'sv' ? 'text-[#2B2B2B]' : 'text-[#2B2B2B]/60 hover:text-[#2B2B2B]'
              }`}
            >
              SV
            </button>
            <div className="w-px h-3 bg-[#2B2B2B]/30"></div>
            <button 
              onClick={() => setLanguage('en')}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                language === 'en' ? 'text-[#2B2B2B]' : 'text-[#2B2B2B]/60 hover:text-[#2B2B2B]'
              }`}
            >
              EN
            </button>
          </div>
          
          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-[#AD8C44] text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-[#AD8C44]/90 transition-all duration-300"
            data-testid="header-cta-button"
          >
            {t('nav.bookConsultation')}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-off-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu - Full width dark dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#2B2B2B] shadow-2xl">
          <nav className="flex flex-col p-6 space-y-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-left text-off-white hover:text-[#AD8C44] transition-colors font-medium text-sm py-3"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-left text-off-white hover:text-[#AD8C44] transition-colors font-medium text-sm py-3"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-left text-off-white hover:text-[#AD8C44] transition-colors font-medium text-sm py-3"
            >
              {t('nav.products')}
            </button>
            <button 
              onClick={() => scrollToSection('references')}
              className="text-left text-off-white hover:text-[#AD8C44] transition-colors font-medium text-sm py-3"
            >
              {t('nav.references')}
            </button>
            <button 
              onClick={() => scrollToSection('partners')}
              className="text-left text-off-white hover:text-[#AD8C44] transition-colors font-medium text-sm py-3"
            >
              Partners
            </button>
            <button 
              onClick={() => scrollToSection('career')}
              className="text-left text-off-white hover:text-[#AD8C44] transition-colors font-medium text-sm py-3"
            >
              Career
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left text-off-white hover:text-[#AD8C44] transition-colors font-medium text-sm py-3"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left text-off-white hover:text-[#AD8C44] transition-colors font-medium text-sm py-3"
            >
              {t('nav.contact')}
            </button>
            
            <div className="flex items-center space-x-4 pt-4 border-t border-off-white/20">
              <span className="text-off-white/60 text-xs">Language:</span>
              <button 
                onClick={() => setLanguage('sv')}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                  language === 'sv' ? 'text-[#AD8C44]' : 'text-off-white/60'
                }`}
              >
                SV
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                  language === 'en' ? 'text-[#AD8C44]' : 'text-off-white/60'
                }`}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
