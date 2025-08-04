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
    <header className="fixed w-full top-0 z-50 bg-off-white/95 backdrop-blur-sm border-b border-dark-grey/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div>
            <h1 className="text-dark-brown font-serif text-xl font-bold">Nils Holger</h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-dark-grey hover:text-dark-brown transition-colors"
          >
            {t('nav.about')}
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-dark-grey hover:text-dark-brown transition-colors"
          >
            {t('nav.services')}
          </button>
          <button 
            onClick={() => scrollToSection('products')}
            className="text-dark-grey hover:text-dark-brown transition-colors"
          >
            {t('nav.products')}
          </button>
          <button 
            onClick={() => scrollToSection('references')}
            className="text-dark-grey hover:text-dark-brown transition-colors"
          >
            {t('nav.references')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-dark-grey hover:text-dark-brown transition-colors"
          >
            {t('nav.contact')}
          </button>
          
          {/* Language Switcher */}
          <div className="flex items-center space-x-2 border-l border-dark-grey/20 pl-6">
            <button 
              onClick={() => setLanguage('en')}
              className={`font-semibold transition-colors ${
                language === 'en' ? 'text-dark-brown' : 'text-dark-grey hover:text-dark-brown'
              }`}
            >
              EN
            </button>
            <span className="text-dark-grey/40">|</span>
            <button 
              onClick={() => setLanguage('sv')}
              className={`font-semibold transition-colors ${
                language === 'sv' ? 'text-dark-brown' : 'text-dark-grey hover:text-dark-brown'
              }`}
            >
              SV
            </button>
          </div>
          
          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-dark-brown text-off-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            {t('nav.bookConsultation')}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-dark-brown"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-off-white border-b border-dark-grey/10 shadow-lg">
          <nav className="flex flex-col p-4 space-y-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left text-dark-grey hover:text-dark-brown transition-colors"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-left text-dark-grey hover:text-dark-brown transition-colors"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-left text-dark-grey hover:text-dark-brown transition-colors"
            >
              {t('nav.products')}
            </button>
            <button 
              onClick={() => scrollToSection('references')}
              className="text-left text-dark-grey hover:text-dark-brown transition-colors"
            >
              {t('nav.references')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left text-dark-grey hover:text-dark-brown transition-colors"
            >
              {t('nav.contact')}
            </button>
            
            <div className="flex items-center space-x-4 pt-4 border-t border-dark-grey/20">
              <button 
                onClick={() => setLanguage('en')}
                className={`font-semibold transition-colors ${
                  language === 'en' ? 'text-dark-brown' : 'text-dark-grey'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('sv')}
                className={`font-semibold transition-colors ${
                  language === 'sv' ? 'text-dark-brown' : 'text-dark-grey'
                }`}
              >
                SV
              </button>
            </div>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-dark-brown text-off-white mt-4"
            >
              {t('nav.bookConsultation')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
