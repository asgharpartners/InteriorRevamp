import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { X } from 'lucide-react';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section
      const scrolled = window.scrollY > window.innerHeight * 0.5;
      setIsVisible(scrolled && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in slide-in-from-right-full duration-500">
      <div className="bg-dark-brown text-off-white px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-4 max-w-sm">
        <div className="flex-1">
          <p className="text-sm font-medium mb-1">{t('stickyCta.title')}</p>
          <p className="text-xs opacity-90">{t('stickyCta.subtitle')}</p>
        </div>
        <Button
          onClick={scrollToContact}
          className="bg-warm-gold text-dark-brown hover:bg-warm-gold/90 font-semibold text-sm px-4 py-2 rounded"
          data-testid="sticky-cta-button"
        >
          {t('stickyCta.button')}
        </Button>
        <button
          onClick={handleDismiss}
          className="text-off-white/60 hover:text-off-white transition-colors"
          data-testid="sticky-cta-dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}