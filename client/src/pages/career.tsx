import { useState } from "react"
import Header from "@/components/Header"
import { Footer } from "@/components/footer"
import { FloatingShortcuts } from "@/components/floating-shortcuts"
import { useLanguage } from "@/hooks/use-language"

const translations = {
  sv: {
    workshop: {
      title: "Vår Verkstad",
      subtitle: "Där hantverk möter innovation"
    }
  },
  en: {
    workshop: {
      title: "Our Workshop", 
      subtitle: "Where craftsmanship meets innovation"
    }
  }
}

export default function CareerPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-off-white" style={{ margin: 0, padding: 0 }}>
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B2B2B] mb-6">
            Career & Workshop
          </h1>
          <p className="text-[#5B401C] text-lg leading-relaxed max-w-3xl mx-auto">
            Discover opportunities to join our team and explore our state-of-the-art workshop where craftsmanship meets innovation.
          </p>
        </div>
      </section>

      {/* Pre-Career Section Text */}
      <section className="py-12 bg-[#FAF7F2] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#5B401C] text-lg leading-relaxed mb-4">
            Stay tuned for upcoming internship and full-time positions
          </p>
          <div className="mb-4">
            <span className="inline-block bg-[#FBD44C] text-[#2B2B2B] px-6 py-2 rounded-full text-sm font-semibold">
              Launching Soon
            </span>
          </div>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-[#FBD44C] text-[#2B2B2B] px-8 py-3 rounded-lg font-medium hover:bg-[#FBD44C]/90 transition-all duration-300 transform hover:scale-105"
            data-testid="pre-career-contact-button"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* Career & Internship Section */}
      <section id="career" className="career-section py-12 bg-off-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Title */}
          <div className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6 text-center">Career & Internship</h1>
            <p className="text-[#5B401C] max-w-2xl leading-relaxed text-lg text-left">
              We believe in nurturing the next generation of designers and craftspeople. 
              Our collaboration with students and young professionals creates opportunities for hands-on learning 
              in real-world projects while contributing fresh perspectives to our work.
            </p>
          </div>
          
          {/* Student Collaboration Card */}
          <div className="career-card bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h3 className="font-serif text-xl font-bold text-[#2B2B2B] mb-4 tracking-wide">Student Collaboration</h3>
            <p className="text-[#5B401C] mb-6 leading-relaxed">
              We regularly partner with design schools and universities to provide internship opportunities, 
              thesis project support, and mentorship programs. Students work alongside our experienced team 
              on live projects, gaining valuable industry experience.
            </p>
            
            {/* Two-column grid */}
            <div className="career-grid grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-[#F9F9F9] p-[2px]">
              <div className="career-card text-left bg-white p-8 h-[400px] flex flex-col justify-center">
                <h4 className="font-serif text-lg font-bold text-[#2B2B2B] mb-3 tracking-wide">What We Offer</h4>
                <ul className="text-[#5B401C] space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#FBD44C] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Real project experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#FBD44C] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Professional mentorship</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#FBD44C] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Portfolio development support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#FBD44C] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Industry network access</span>
                  </li>
                </ul>
              </div>
              <div className="career-card text-left bg-white p-8 h-[400px] flex flex-col justify-center">
                <h4 className="font-serif text-lg font-bold text-[#2B2B2B] mb-3 tracking-wide">Areas of Focus</h4>
                <ul className="text-[#5B401C] space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#FBD44C] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Interior design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#FBD44C] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Furniture craftsmanship</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#FBD44C] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Project management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#FBD44C] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Sustainable design practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-20 bg-dark-brown text-[#FFFAF7]">
        <div className="w-full">
          <div className="relative h-96 mb-16">
            <div 
              className="absolute inset-0 bg-cover bg-center parallax-bg" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606744824163-985d376605aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800')" }}
            />
            <div className="absolute inset-0 bg-dark-brown/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="font-serif text-5xl font-bold mb-4 text-[#FFFAF7]">{t.workshop.title}</h2>
                <p className="text-2xl font-light text-[#FFFAF7]">{t.workshop.subtitle}</p>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl leading-relaxed mb-8 text-[#FFFAF7]">
                Our 2,000 square meter workshop in Nykvarn combines traditional Swedish woodworking techniques with modern precision tools. Here, our master craftsmen transform sustainably sourced timber into bespoke furniture pieces that will grace homes and businesses for generations.
              </p>
              <p className="text-lg leading-relaxed text-[#FFFAF7]">
                Every piece that leaves our workshop carries the mark of genuine craftsmanship – from hand-selected wood grain to carefully applied finishes, each detail reflects our commitment to excellence and our respect for the natural beauty of Scandinavian materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section for easy access */}
      <section id="contact" className="py-16 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-[#5B401C] text-lg leading-relaxed mb-8">
            Whether you're interested in career opportunities or workshop collaborations, we'd love to hear from you.
          </p>
          <button 
            onClick={() => window.location.href = '/#contact'}
            className="bg-[#FBD44C] text-[#2B2B2B] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FBD44C]/90 transition-all duration-300 transform hover:scale-105"
            data-testid="contact-us-button"
          >
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
      <FloatingShortcuts />
    </div>
  )
}