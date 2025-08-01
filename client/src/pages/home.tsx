import { Header } from '@/components/header';
import { HeroSlider } from '@/components/hero-slider';
import { ServicesSection } from '@/components/services-section';
import { BeforeAfterSlider } from '@/components/before-after-slider';
import { ProductsSection } from '@/components/products-section';
import { ReferencesSection } from '@/components/references-section';
import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/hooks/use-language';
import { Lightbulb, Compass, Hammer, Home } from 'lucide-react';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <HeroSlider />
      
      {/* Intro Section */}
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-dark-brown mb-8">
              {t('intro.title')}
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <p className="text-lg leading-relaxed">
                {t('intro.paragraph1')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('intro.paragraph2')}
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Nils Holger showroom interior" 
                className="rounded-lg shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-warm-gold rounded-full flex items-center justify-center animate-bounce">
                <Home className="text-dark-brown text-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark-brown text-off-white">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold mb-16">{t('process.title')}</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="text-dark-brown text-xl" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">{t('process.concept.title')}</h3>
                <p>{t('process.concept.description')}</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Compass className="text-dark-brown text-xl" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">{t('process.design.title')}</h3>
                <p>{t('process.design.description')}</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Hammer className="text-dark-brown text-xl" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">{t('process.craft.title')}</h3>
                <p>{t('process.craft.description')}</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Home className="text-dark-brown text-xl" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">{t('process.deliver.title')}</h3>
                <p>{t('process.deliver.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <BeforeAfterSlider />
      <ProductsSection />
      <ReferencesSection />

      {/* Partners Section */}
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-dark-brown mb-4">Our Partners</h2>
            <p className="text-xl text-dark-grey max-w-2xl mx-auto">Collaborating with industry leaders to deliver exceptional results</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="bg-dark-grey/10 rounded-lg p-8 w-full h-24 flex items-center justify-center">
              <span className="text-dark-grey font-serif font-bold text-lg">IKEA</span>
            </div>
            <div className="bg-dark-grey/10 rounded-lg p-8 w-full h-24 flex items-center justify-center">
              <span className="text-dark-grey font-serif font-bold text-lg">MUUTO</span>
            </div>
            <div className="bg-dark-grey/10 rounded-lg p-8 w-full h-24 flex items-center justify-center">
              <span className="text-dark-grey font-serif font-bold text-lg">HAY</span>
            </div>
            <div className="bg-dark-grey/10 rounded-lg p-8 w-full h-24 flex items-center justify-center">
              <span className="text-dark-grey font-serif font-bold text-lg">GUBI</span>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <h3 className="font-serif text-2xl font-bold text-dark-brown mb-4">Become a Partner</h3>
            <p className="text-dark-grey mb-8 max-w-2xl mx-auto">
              We're always looking for like-minded businesses to collaborate with. If you share our commitment to quality and sustainability, let's explore partnership opportunities.
            </p>
            <button className="bg-dark-brown text-off-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 font-semibold">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 bg-dark-brown text-off-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-4xl font-bold mb-6">Careers & Internships</h2>
              <h3 className="text-2xl font-light mb-8">Join Our Creative Team</h3>
              <p className="text-lg mb-8 leading-relaxed">
                We're always looking for talented individuals who share our passion for Scandinavian design and sustainable craftsmanship. Whether you're a seasoned professional or just starting your career, we offer opportunities for growth in a collaborative, inspiring environment.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-warm-gold rounded-full flex items-center justify-center">
                    <span className="text-dark-brown text-sm">✓</span>
                  </div>
                  <span>Competitive salary and benefits package</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-warm-gold rounded-full flex items-center justify-center">
                    <span className="text-dark-brown text-sm">✓</span>
                  </div>
                  <span>Professional development opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-warm-gold rounded-full flex items-center justify-center">
                    <span className="text-dark-brown text-sm">✓</span>
                  </div>
                  <span>Creative, collaborative work environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-warm-gold rounded-full flex items-center justify-center">
                    <span className="text-dark-brown text-sm">✓</span>
                  </div>
                  <span>Flexible working arrangements</span>
                </div>
              </div>
              
              <button className="bg-warm-gold text-dark-brown px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 font-semibold">
                View Open Positions
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Career opportunities at Nils Holger" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Workshop Section */}
      <section className="py-20 bg-dark-brown text-off-white">
        <div className="w-full">
          <div className="relative h-96 mb-16">
            <div 
              className="absolute inset-0 bg-cover bg-center parallax-bg" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606744824163-985d376605aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800')" }}
            />
            <div className="absolute inset-0 bg-dark-brown/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="font-serif text-5xl font-bold mb-4">{t('workshop.title')}</h2>
                <p className="text-2xl font-light">{t('workshop.subtitle')}</p>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl leading-relaxed mb-8">
                Our 2,000 square meter workshop in Nykvarn combines traditional Swedish woodworking techniques with modern precision tools. Here, our master craftsmen transform sustainably sourced timber into bespoke furniture pieces that will grace homes and businesses for generations.
              </p>
              <p className="text-lg leading-relaxed">
                Every piece that leaves our workshop carries the mark of genuine craftsmanship – from hand-selected wood grain to carefully applied finishes, each detail reflects our commitment to excellence and our respect for the natural beauty of Scandinavian materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
