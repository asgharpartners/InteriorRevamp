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
    <header className="fixed w-full top-0 z-50 bg-off-white/98 backdrop-blur-md">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-dark-brown font-serif text-2xl font-bold tracking-tight">
            Nils Holger Design
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-12">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-dark-grey hover:text-dark-brown transition-colors font-medium text-sm uppercase tracking-wider"
          >
            {t('nav.about')}
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-dark-grey hover:text-dark-brown transition-colors font-medium text-sm uppercase tracking-wider"
          >
            {t('nav.services')}
          </button>
          <button 
            onClick={() => scrollToSection('products')}
            className="text-dark-grey hover:text-dark-brown transition-colors font-medium text-sm uppercase tracking-wider"
          >
            {t('nav.products')}
          </button>
          <button 
            onClick={() => scrollToSection('references')}
            className="text-dark-grey hover:text-dark-brown transition-colors font-medium text-sm uppercase tracking-wider"
          >
            {t('nav.references')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-dark-grey hover:text-dark-brown transition-colors font-medium text-sm uppercase tracking-wider"
          >
            {t('nav.contact')}
          </button>
          
          {/* Language Switcher */}
          <div className="flex items-center space-x-3 ml-8">
            <button 
              onClick={() => setLanguage('en')}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                language === 'en' ? 'text-dark-brown' : 'text-dark-grey hover:text-dark-brown'
              }`}
            >
              EN
            </button>
            <div className="w-px h-4 bg-dark-grey/30"></div>
            <button 
              onClick={() => setLanguage('sv')}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                language === 'sv' ? 'text-dark-brown' : 'text-dark-grey hover:text-dark-brown'
              }`}
            >
              SV
            </button>
          </div>
          
          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-dark-brown text-off-white px-8 py-3 rounded-none font-medium text-sm uppercase tracking-wider hover:bg-dark-brown/90 transition-all duration-300"
          >
            {t('nav.bookConsultation')}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-dark-brown p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-off-white/98 backdrop-blur-md shadow-2xl">
          <nav className="flex flex-col p-8 space-y-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left text-dark-grey hover:text-dark-brown transition-colors font-medium text-sm uppercase tracking-wider py-2"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-left text-dark-grey hover:text-dark-brown transition-colors font-medium text-sm uppercase tracking-wider py-2"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-left text-dark-grey hover:text-dark-brown transition-colors font-medium text-sm uppercase tracking-wider py-2"
            >
              {t('nav.products')}
            </button>
            <button 
              onClick={() => scrollToSection('references')}
              className="text-left text-dark-grey hover:text-dark-brown transition-colors font-medium text-sm uppercase tracking-wider py-2"
            >
              {t('nav.references')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left text-dark-grey hover:text-dark-brown transition-colors font-medium text-sm uppercase tracking-wider py-2"
            >
              {t('nav.contact')}
            </button>
            
            <div className="flex items-center space-x-6 pt-6 border-t border-dark-grey/20">
              <button 
                onClick={() => setLanguage('en')}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                  language === 'en' ? 'text-dark-brown' : 'text-dark-grey'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('sv')}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                  language === 'sv' ? 'text-dark-brown' : 'text-dark-grey'
                }`}
              >
                SV
              </button>
            </div>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-dark-brown text-off-white mt-6 rounded-none font-medium text-sm uppercase tracking-wider hover:bg-dark-brown/90 transition-all duration-300 py-4"
            >
              {t('nav.bookConsultation')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
