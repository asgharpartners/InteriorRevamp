import { useLanguage } from '@/hooks/use-language';
import { Pencil, User, Palette, Hammer } from 'lucide-react';

const teamMembers = [
  {
    name: "Dennis Andersson",
    role: "Senior Designer",
    description: "Lead designer with 15+ years of experience in commercial and residential projects",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    icon: <Pencil className="h-4 w-4" />
  },
  {
    name: "Asghar Rahman",
    role: "Project Manager", 
    description: "Ensures seamless project execution from concept to completion",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    icon: <User className="h-4 w-4" />
  },
  {
    name: "Noor Hassan",
    role: "Interior Coordinator",
    description: "Specializes in space planning and design coordination",
    image: "https://pixabay.com/get/gf8ace0f52b939f525af8ba1422bcb3f2af44cde261c1db2737d3fcc5558639142231945301115f2eff2b88b1ec87cf6d11bdb081d221466bf9ec57fed7fa83d8_1280.jpg",
    icon: <Palette className="h-4 w-4" />
  },
  {
    name: "Miks Bergström",
    role: "Master Craftsman",
    description: "Expert in traditional woodworking and furniture restoration",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    icon: <Hammer className="h-4 w-4" />
  }
];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-dark-brown mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-dark-grey max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="font-serif text-3xl font-bold text-dark-brown mb-6">
              {t('about.story')}
            </h3>
            <div className="space-y-6 text-lg">
              <p>
                Founded in 1998 by master craftsman Nils Holger Andersson, our studio began as a small workshop in Stockholm's Södermalm district. What started as a passion for traditional Swedish woodworking has evolved into a comprehensive design consultancy serving clients across Scandinavia.
              </p>
              
              <p>
                Our philosophy centers on the belief that great design should enhance daily life while respecting the environment. We source materials locally, employ time-honored craftsmanship techniques, and create pieces built to last generations.
              </p>
              
              <p>
                Today, our team of skilled designers, craftspeople, and project managers continues to push the boundaries of Scandinavian design while staying true to our roots of simplicity, functionality, and natural beauty.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Nils Holger showroom interior view" 
              className="rounded-lg shadow-2xl w-full h-auto parallax-bg"
            />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-warm-gold/20 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-dark-brown/10 rounded-full blur-lg" />
          </div>
        </div>
        
        {/* Team Members */}
        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl font-bold text-dark-brown mb-4">Our Team</h3>
          <p className="text-xl text-dark-grey">The creative minds behind every project</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-36 h-36 rounded-full mx-auto border-4 border-[#AD8C44] p-1">
                  <img 
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#AD8C44] rounded-full flex items-center justify-center">
                  <div className="text-white">
                    {member.icon}
                  </div>
                </div>
              </div>
              <h4 className="font-serif text-xl font-bold text-dark-brown mb-2">
                {member.name}
              </h4>
              <p className="text-dark-grey font-semibold mb-2">
                {member.role}
              </p>
              <p className="text-sm text-dark-grey">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
