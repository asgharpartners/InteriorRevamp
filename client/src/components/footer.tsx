import { useState } from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/hooks/use-language';

export function Footer() {
  const [email, setEmail] = useState('');
  const { t } = useLanguage();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-dark-brown text-off-white py-16">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">{t('footer.newsletter')}</h4>
            <p className="text-off-white/80 mb-4">Subscribe to our newsletter for design inspiration and project updates</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-off-white/10 border-off-white/20 text-off-white placeholder-off-white/60 focus:ring-warm-gold focus:border-transparent"
              />
              <Button 
                type="submit" 
                className="w-full bg-warm-gold text-dark-brown hover:bg-opacity-90 transition-colors font-semibold"
              >
                {t('footer.subscribe')}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Contact</h4>
            <div className="space-y-3 text-off-white/80">
              <p>info@nilsholger.se</p>
              <p>+46 - 08 673 50 80</p>
              <p>Birger Jarlsgatan 99<br/>104 32 Stockholm</p>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-2 text-off-white/80">
              <li><a href="#" className="hover:text-warm-gold transition-colors">Interior Design</a></li>
              <li><a href="#" className="hover:text-warm-gold transition-colors">Custom Furniture</a></li>
              <li><a href="#" className="hover:text-warm-gold transition-colors">Project Management</a></li>
              <li><a href="#" className="hover:text-warm-gold transition-colors">Consultation</a></li>
            </ul>
          </div>
          
          {/* Social & Legal */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-off-white/10 rounded-lg flex items-center justify-center hover:bg-warm-gold hover:text-dark-brown transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-off-white/10 rounded-lg flex items-center justify-center hover:bg-warm-gold hover:text-dark-brown transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-off-white/10 rounded-lg flex items-center justify-center hover:bg-warm-gold hover:text-dark-brown transition-all">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <ul className="space-y-2 text-off-white/80 text-sm">
              <li><a href="#" className="hover:text-warm-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-warm-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-off-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-off-white/60 text-sm mb-4 md:mb-0">
              © 2024 Nils Holger Interior Design. All rights reserved.
            </p>
            <p className="text-off-white/60 text-sm">
              Crafted with ❤️ in Stockholm, Sweden
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
