import Header from '@/components/Header';
import { HeroSlider } from '@/components/hero-slider';
import { ServicesSection } from '@/components/services-section';
import { BeforeAfterSlider } from '@/components/before-after-slider';
import { ProductsSection } from '@/components/products-section';
import { ReferencesSection } from '@/components/references-section';
import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { StickyCTA } from '@/components/sticky-cta';
import { useLanguage } from '@/hooks/use-language';
import { Lightbulb, Compass, Hammer, Home } from 'lucide-react';

export default function HomePage() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-off-white" style={{ margin: 0, padding: 0 }}>
      <Header />
      <HeroSlider />
      
      {/* Intro/Welcome Section */}
      <section id="intro" className="py-20 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-dark-brown mb-8">
              Welcome to Nils Holger – Design & Furniture Projects
            </h2>
            <p className="text-xl text-dark-grey max-w-3xl mx-auto leading-relaxed">
              Our mission is to be a reliable and flexible partner for interior design and construction 
              in all types of public environments. We work in both interior and exterior spaces.
            </p>
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
      
      {/* Our Process Section */}
      <section id="process" className="py-20 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-dark-brown mb-8">Our Process</h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#AD8C44] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div className="bg-[#AD8C44]/10 rounded-lg p-6">
                    <h3 className="font-serif text-xl font-bold text-dark-brown mb-4">Förutsättningslöst Möte</h3>
                    <ul className="text-sm text-dark-grey space-y-2 text-left">
                      <li>• Behov och visioner</li>
                      <li>• Tidplan</li>
                      <li>• Omfattning</li>
                      <li>• Budget</li>
                      <li>• Upplägg</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#AD8C44] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div className="bg-[#AD8C44]/10 rounded-lg p-6">
                    <h3 className="font-serif text-xl font-bold text-dark-brown mb-4">Design & Koncept</h3>
                    <p className="text-sm text-dark-grey text-left">
                      Utveckling av kreativa lösningar, materialval och detaljerade planer baserat på era behov och visioner.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#AD8C44] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div className="bg-[#AD8C44]/10 rounded-lg p-6">
                    <h3 className="font-serif text-xl font-bold text-dark-brown mb-4">Produktion & Förädling</h3>
                    <p className="text-sm text-dark-grey text-left">
                      Tillverkning av skräddarsydda möbler och anpassningar med högsta kvalitet och hantverksskicklighet.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#AD8C44] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <div className="bg-[#AD8C44]/10 rounded-lg p-6">
                    <h3 className="font-serif text-xl font-bold text-dark-brown mb-4">Leverans & Installation</h3>
                    <p className="text-sm text-dark-grey text-left">
                      Professionell installation och slutlig styling för att säkerställa att resultatet överträffar förväntningarna.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div id="products">
        <ProductsSection />
      </div>
      <BeforeAfterSlider />
      
      <div id="references">
        <ReferencesSection />
      </div>

      {/* Career & Internship Section */}
      <section id="career" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-dark-brown mb-8">Career & Internship</h2>
            <p className="text-xl text-dark-grey mb-8 leading-relaxed">
              We believe in nurturing the next generation of designers and craftspeople. 
              Our collaboration with students and young professionals creates opportunities for hands-on learning 
              in real-world projects while contributing fresh perspectives to our work.
            </p>
            
            <div className="bg-[#AD8C44]/5 rounded-lg p-8 mb-8">
              <h3 className="font-serif text-2xl font-bold text-dark-brown mb-4">Student Collaboration</h3>
              <p className="text-dark-grey mb-6">
                We regularly partner with design schools and universities to provide internship opportunities, 
                thesis project support, and mentorship programs. Students work alongside our experienced team 
                on live projects, gaining valuable industry experience.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="text-left">
                  <h4 className="font-semibold text-dark-brown mb-2">What We Offer:</h4>
                  <ul className="text-sm text-dark-grey space-y-1">
                    <li>• Real project experience</li>
                    <li>• Professional mentorship</li>
                    <li>• Portfolio development support</li>
                    <li>• Industry network access</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-dark-brown mb-2">Areas of Focus:</h4>
                  <ul className="text-sm text-dark-grey space-y-1">
                    <li>• Interior design</li>
                    <li>• Furniture craftsmanship</li>
                    <li>• Project management</li>
                    <li>• Sustainable design practices</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-brown/5 rounded-lg p-6">
              <h3 className="font-serif text-xl font-bold text-dark-brown mb-4">Job Openings & Opportunities</h3>
              <p className="text-dark-grey mb-4">
                <span className="inline-block bg-[#AD8C44] text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">
                  Launching Soon
                </span>
                Stay tuned for upcoming internship and full-time positions
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#AD8C44] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#AD8C44]/90 transition-all duration-300"
                data-testid="career-contact-button"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-dark-brown mb-8">Partners</h2>
          </div>
          
          {/* Brand Partners - Minimal layout matching footer style */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="flex items-center justify-center p-4">
                <span className="text-dark-brown/60 font-serif font-bold text-lg">HAY</span>
              </div>
              <div className="flex items-center justify-center p-4">
                <span className="text-dark-brown/60 font-serif font-bold text-lg">GUBI</span>
              </div>
              <div className="flex items-center justify-center p-4">
                <span className="text-dark-brown/60 font-serif font-bold text-lg">MUUTO</span>
              </div>
              <div className="flex items-center justify-center p-4">
                <span className="text-dark-brown/60 font-serif font-bold text-lg">IKEA</span>
              </div>
            </div>
          </div>
          
          {/* Partnership CTA */}
          <div className="max-w-2xl mx-auto text-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#AD8C44] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#AD8C44]/90 transition-all duration-300"
              data-testid="partner-inquiry-button"
            >
              Partner Inquiry
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
      <StickyCTA />
    </div>
  );
}
