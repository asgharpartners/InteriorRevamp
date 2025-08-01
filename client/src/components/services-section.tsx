import { Lightbulb, Compass, Hammer, Home } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

const services = [
  {
    title: "Project Management",
    description: "Comprehensive oversight of your interior design project from conception to completion.",
    longDescription: "Our experienced project managers coordinate all aspects of your design project, ensuring timelines are met, budgets are maintained, and quality standards are exceeded. We handle vendor relationships, permit processes, and daily oversight.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    icon: <Compass className="h-6 w-6" />
  },
  {
    title: "Project Planning", 
    description: "Strategic design planning and architectural coordination for seamless execution.",
    longDescription: "Detailed space planning, technical drawings, and design development ensure your project is executed flawlessly. We collaborate with architects and contractors to create comprehensive project documentation.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    icon: <Lightbulb className="h-6 w-6" />
  },
  {
    title: "Construction & Renovation",
    description: "Full-service construction and renovation for residential and commercial spaces.",
    longDescription: "From minor renovations to complete space transformations, our skilled craftsmen bring designs to life with precision and care. We specialize in sustainable building practices and premium finishes.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    icon: <Hammer className="h-6 w-6" />
  },
  {
    title: "Furniture Carpentry",
    description: "Bespoke furniture pieces crafted with traditional Swedish woodworking techniques.",
    longDescription: "Our master carpenters create custom furniture pieces that perfectly complement your space. Using sustainably sourced wood and time-honored techniques, each piece is built to last generations.",
    image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    icon: <Home className="h-6 w-6" />
  },
  {
    title: "Upholstery & Repair",
    description: "Expert upholstery services and restoration of cherished furniture pieces.",
    longDescription: "Breathe new life into beloved furniture with our expert upholstery and repair services. We work with premium fabrics and leathers to restore and refresh pieces while maintaining their original character.",
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    icon: <Hammer className="h-6 w-6" />
  },
  {
    title: "Interior Coordination",
    description: "Complete interior styling and design coordination for cohesive, beautiful spaces.",
    longDescription: "Our design coordinators ensure every element of your space works in harmony. From color palettes to furniture placement, lighting to accessories, we create perfectly balanced interiors.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    icon: <Lightbulb className="h-6 w-6" />
  },
  {
    title: "Professional Painting",
    description: "Premium painting services using eco-friendly materials and expert techniques.",
    longDescription: "Transform your space with our professional painting services. We use premium, eco-friendly paints and employ specialized techniques to achieve flawless finishes that enhance your interior design.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    icon: <Home className="h-6 w-6" />
  },
  {
    title: "Control Responsibility (KA)",
    description: "Certified construction oversight ensuring compliance with building regulations.",
    longDescription: "Our certified KA professionals provide construction oversight and quality control, ensuring all work meets Swedish building standards and regulations. We handle all compliance documentation and inspections.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    icon: <Compass className="h-6 w-6" />
  }
];

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-dark-brown mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-dark-grey max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-[3/4]">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark-brown/20 group-hover:bg-dark-brown/40 transition-all duration-300" />
              </div>
              <div className="flex items-center mb-3">
                <div className="text-warm-gold mr-3">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-dark-brown">
                  {service.title}
                </h3>
              </div>
              <p className="text-dark-grey mb-4">
                {service.description}
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-dark-grey">
                <p>{service.longDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
