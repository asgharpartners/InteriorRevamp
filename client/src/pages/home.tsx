import { useState } from 'react';
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
import { FloatingShortcuts } from '@/components/floating-shortcuts';
import { useLanguage } from '@/hooks/use-language';
import { ChevronDown } from 'lucide-react';

export default function HomePage() {
  const { t } = useLanguage();
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-off-white" style={{ margin: 0, padding: 0 }}>
      <Header />
      <HeroSlider />
      
      {/* Combined Intro & Process Section */}
      <section className="bg-[#F5F1EA] py-20" style={{ minHeight: '100vh' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Intro Text */}
            <div className="text-left">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-brown mb-8 leading-tight">
                {t('intro.title')}
              </h2>
              <p className="text-xl md:text-2xl text-dark-grey leading-relaxed">
                {t('intro.subtitle')}<br />
                {t('intro.description')}
              </p>
            </div>

            {/* Right Side - Process Diagram */}
            <div className="relative">
              <h3 className="font-serif text-3xl font-bold text-dark-brown mb-12 text-center">
                {t('process.title')}
              </h3>
              
              {/* Circular Process Steps */}
              <div className="relative max-w-lg mx-auto">
                {/* Step 1 - Top */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div 
                    className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 cursor-pointer transition-all duration-300 hover:shadow-xl"
                    onClick={() => toggleStep(1)}
                    style={{ width: '200px' }}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#AD8C44] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">1</span>
                      </div>
                      <h4 className="font-serif font-bold text-dark-brown mb-2 text-sm leading-tight">
                        {t('process.step1.title')}
                      </h4>
                      <div className={`overflow-hidden transition-all duration-300 ${expandedStep === 1 ? 'max-h-96' : 'max-h-0'}`}>
                        <p className="text-dark-grey text-xs leading-relaxed mt-3">
                          {t('process.step1.description')}
                        </p>
                      </div>
                      <ChevronDown 
                        className={`w-4 h-4 text-[#AD8C44] mx-auto mt-2 transition-transform duration-300 ${
                          expandedStep === 1 ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </div>
                </div>

                {/* Arrow 1 to 2 */}
                <div className="absolute top-24 right-8 transform rotate-45">
                  <div className="w-16 h-0.5 bg-[#AD8C44]"></div>
                  <div className="absolute right-0 top-0 w-0 h-0 border-l-4 border-l-[#AD8C44] border-t-2 border-b-2 border-t-transparent border-b-transparent transform -translate-y-0.5"></div>
                </div>

                {/* Step 2 - Right */}
                <div className="absolute top-20 right-0 transform translate-x-4">
                  <div 
                    className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 cursor-pointer transition-all duration-300 hover:shadow-xl"
                    onClick={() => toggleStep(2)}
                    style={{ width: '200px' }}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#AD8C44] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">2</span>
                      </div>
                      <h4 className="font-serif font-bold text-dark-brown mb-2 text-sm leading-tight">
                        {t('process.step2.title')}
                      </h4>
                      <div className={`overflow-hidden transition-all duration-300 ${expandedStep === 2 ? 'max-h-96' : 'max-h-0'}`}>
                        <p className="text-dark-grey text-xs leading-relaxed mt-3">
                          {t('process.step2.description')}
                        </p>
                      </div>
                      <ChevronDown 
                        className={`w-4 h-4 text-[#AD8C44] mx-auto mt-2 transition-transform duration-300 ${
                          expandedStep === 2 ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </div>
                </div>

                {/* Arrow 2 to 3 */}
                <div className="absolute top-48 right-8 transform rotate-135">
                  <div className="w-16 h-0.5 bg-[#AD8C44]"></div>
                  <div className="absolute right-0 top-0 w-0 h-0 border-l-4 border-l-[#AD8C44] border-t-2 border-b-2 border-t-transparent border-b-transparent transform -translate-y-0.5"></div>
                </div>

                {/* Step 3 - Bottom */}
                <div className="absolute top-64 left-1/2 transform -translate-x-1/2 translate-y-4">
                  <div 
                    className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 cursor-pointer transition-all duration-300 hover:shadow-xl"
                    onClick={() => toggleStep(3)}
                    style={{ width: '200px' }}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#AD8C44] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">3</span>
                      </div>
                      <h4 className="font-serif font-bold text-dark-brown mb-2 text-sm leading-tight">
                        {t('process.step3.title')}
                      </h4>
                      <div className={`overflow-hidden transition-all duration-300 ${expandedStep === 3 ? 'max-h-96' : 'max-h-0'}`}>
                        <p className="text-dark-grey text-xs leading-relaxed mt-3">
                          {t('process.step3.description')}
                        </p>
                      </div>
                      <ChevronDown 
                        className={`w-4 h-4 text-[#AD8C44] mx-auto mt-2 transition-transform duration-300 ${
                          expandedStep === 3 ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </div>
                </div>

                {/* Arrow 3 to 4 */}
                <div className="absolute top-48 left-8 transform rotate-225">
                  <div className="w-16 h-0.5 bg-[#AD8C44]"></div>
                  <div className="absolute right-0 top-0 w-0 h-0 border-l-4 border-l-[#AD8C44] border-t-2 border-b-2 border-t-transparent border-b-transparent transform -translate-y-0.5"></div>
                </div>

                {/* Step 4 - Left */}
                <div className="absolute top-20 left-0 transform -translate-x-4">
                  <div 
                    className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 cursor-pointer transition-all duration-300 hover:shadow-xl"
                    onClick={() => toggleStep(4)}
                    style={{ width: '200px' }}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#AD8C44] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">4</span>
                      </div>
                      <h4 className="font-serif font-bold text-dark-brown mb-2 text-sm leading-tight">
                        {t('process.step4.title')}
                      </h4>
                      <div className={`overflow-hidden transition-all duration-300 ${expandedStep === 4 ? 'max-h-96' : 'max-h-0'}`}>
                        <p className="text-dark-grey text-xs leading-relaxed mt-3">
                          {t('process.step4.description')}
                        </p>
                      </div>
                      <ChevronDown 
                        className={`w-4 h-4 text-[#AD8C44] mx-auto mt-2 transition-transform duration-300 ${
                          expandedStep === 4 ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </div>
                </div>

                {/* Arrow 4 to 1 */}
                <div className="absolute top-24 left-8 transform rotate-315">
                  <div className="w-16 h-0.5 bg-[#AD8C44]"></div>
                  <div className="absolute right-0 top-0 w-0 h-0 border-l-4 border-l-[#AD8C44] border-t-2 border-b-2 border-t-transparent border-b-transparent transform -translate-y-0.5"></div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-16">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#AD8C44] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#AD8C44]/90 transition-all duration-300 transform hover:scale-105"
                  data-testid="discuss-project-button"
                >
                  Diskutera ditt projekt
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      

      
      <div id="products">
        <ProductsSection />
      </div>
      
      <div id="references">
        <ReferencesSection />
      </div>
      
      <BeforeAfterSlider />



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

      {/* Career & Internship Section - Refactored to match Services visual system */}
      <section id="career" className="career-section py-12 bg-off-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Title - H1 style matching Services */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark-brown mb-6">Career & Internship</h1>
            <p className="text-dark-grey max-w-2xl mx-auto leading-relaxed text-lg">
              We believe in nurturing the next generation of designers and craftspeople. 
              Our collaboration with students and young professionals creates opportunities for hands-on learning 
              in real-world projects while contributing fresh perspectives to our work.
            </p>
          </div>
          
          {/* Student Collaboration Card - Services card style */}
          <div className="career-card bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
            <h3 className="font-serif text-xl font-bold text-dark-brown mb-4 tracking-wide">Student Collaboration</h3>
            <p className="text-dark-grey mb-6 leading-relaxed">
              We regularly partner with design schools and universities to provide internship opportunities, 
              thesis project support, and mentorship programs. Students work alongside our experienced team 
              on live projects, gaining valuable industry experience.
            </p>
            
            {/* Two-column grid */}
            <div className="career-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-left">
                <h4 className="font-serif text-lg font-bold text-dark-brown mb-3 tracking-wide">What We Offer</h4>
                <ul className="text-dark-grey space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#AD8C44] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Real project experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#AD8C44] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Professional mentorship</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#AD8C44] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Portfolio development support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#AD8C44] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Industry network access</span>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-serif text-lg font-bold text-dark-brown mb-3 tracking-wide">Areas of Focus</h4>
                <ul className="text-dark-grey space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#AD8C44] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Interior design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#AD8C44] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Furniture craftsmanship</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#AD8C44] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Project management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#AD8C44] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Sustainable design practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Job Openings Card - Services card style */}
          <div className="career-card bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
            <h3 className="font-serif text-xl font-bold text-dark-brown mb-4 tracking-wide">Job Openings & Opportunities</h3>
            <p className="text-dark-grey mb-6 leading-relaxed">
              Stay tuned for upcoming internship and full-time positions
            </p>
            
            {/* Launching Soon Badge */}
            <div className="mb-4">
              <span className="badge--launching inline-block bg-[#F2DC74] text-[#3E2516] px-4 py-2 rounded-full text-sm font-semibold">
                Launching Soon
              </span>
            </div>
            
            {/* Primary CTA Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary bg-[#AD8C44] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#AD8C44]/90 transition-all duration-300 transform hover:scale-105"
              data-testid="career-contact-button"
            >
              Get In Touch
            </button>
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
      <FloatingShortcuts />
    </div>
  );
}
