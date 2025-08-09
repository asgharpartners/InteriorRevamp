import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

interface SearchResult {
  title: string;
  content: string;
  section: string;
  id: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export function SearchModal({ isOpen, onClose, onNavigate }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const { t, language } = useLanguage();

  // Define searchable content based on current language
  const searchableContent: SearchResult[] = [
    {
      title: t('intro.title'),
      content: `${t('intro.subtitle')} ${t('intro.description')}`,
      section: t('nav.about'),
      id: 'intro-process'
    },
    {
      title: 'Vår process',
      content: 'Konsultation, Koncept, Produktion, Installation - våra fyra steg för att förverkliga ditt projekt från idé till färdig lösning',
      section: t('nav.about'),
      id: 'intro-process'
    },
    {
      title: t('services.title'),
      content: t('services.subtitle'),
      section: t('nav.services'),
      id: 'services'
    },
    {
      title: t('products.title'),
      content: `${t('products.subtitle')} ${t('products.tabs.custom')} ${t('products.tabs.standard')} ${t('products.tabs.special')}`,
      section: t('nav.products'),
      id: 'products'
    },
    {
      title: t('references.title'),
      content: t('references.subtitle'),
      section: t('nav.references'),
      id: 'references'
    },
    {
      title: t('about.title'),
      content: `${t('about.subtitle')} ${t('about.story')}`,
      section: t('nav.about'),
      id: 'about'
    },
    {
      title: 'Career & Internship',
      content: 'Career opportunities, internships, student collaboration, mentorship programs',
      section: t('nav.about'),
      id: 'career'
    },
    {
      title: t('contact.title'),
      content: `${t('contact.subtitle')} ${t('contact.form.name')} ${t('contact.form.email')} ${t('contact.form.projectType')} ${t('contact.form.message')}`,
      section: t('nav.contact'),
      id: 'contact'
    }
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const results = searchableContent.filter(item => {
      const searchText = `${item.title} ${item.content}`.toLowerCase();
      const queryWords = query.toLowerCase().split(' ').filter(word => word.length > 1);
      
      return queryWords.some(word => searchText.includes(word));
    });

    setSearchResults(results);
  };

  const handleResultClick = (sectionId: string) => {
    onNavigate(sectionId);
    onClose();
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleClose = () => {
    onClose();
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            {language === 'sv' ? 'Sök på webbplatsen' : 'Search Website'}
          </DialogTitle>
          <DialogDescription>
            {language === 'sv' ? 'Sök genom allt innehåll på hemsidan' : 'Search through all website content'}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder={language === 'sv' ? 'Skriv för att söka...' : 'Type to search...'}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 pr-10"
              autoFocus
              data-testid="search-input"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearch('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                data-testid="clear-search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {searchQuery && searchResults.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                {language === 'sv' ? 'Inga resultat hittades' : 'No results found'}
              </div>
            )}
            
            {searchResults.map((result, index) => (
              <div
                key={index}
                onClick={() => handleResultClick(result.id)}
                className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                data-testid={`search-result-${result.id}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#3E2516]">{result.title}</h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {result.section}
                  </span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {result.content.slice(0, 150)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}