import { useLanguage } from '@/hooks/use-language';
import { Pencil, User, Palette, Hammer } from 'lucide-react';

const teamMembers = [
  {
    name: "Dennis",
    role: "Projektledning",
    description: "Ansvarar för projektledning och koordinering av alla typer av inrednings- och byggprojekt",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    icon: <User className="h-4 w-4" />
  },
  {
    name: "Asghar",
    role: "Försäljning och kommunikation", 
    description: "Hanterar kundkontakt, försäljning och all kommunikation med våra beställare",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    icon: <Pencil className="h-4 w-4" />
  },
  {
    name: "Noor",
    role: "Administration och ekonomi",
    description: "Ansvarar för administration, ekonomi och företagets administrativa processer",
    image: "https://pixabay.com/get/gf8ace0f52b939f525af8ba1422bcb3f2af44cde261c1db2737d3fcc5558639142231945301115f2eff2b88b1ec87cf6d11bdb081d221466bf9ec57fed7fa83d8_1280.jpg",
    icon: <Palette className="h-4 w-4" />
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
                Nils Holger är ett varumärke under Zenit International AB som bildades redan 1982. Vår långa historia har gett oss erfarenhet och kunskap, men annars vill vi gärna profilera oss som ett modernt företag som strävar efter hållbarhet och god kvalitet.
              </p>
              
              <p>
                Vi är ett utpräglat nätverksföretag med ett stort kontaktnät. Vi träffar gärna våra beställare i vår utställning efter avtalad tid, men oftast är det vi själva som åker ut till våra beställare på plats.
              </p>
              
              <p>
                Vi har ett litet showroom på Birger Jarlsgatan 99 i Stockholm där vi visar vissa utvalda produkter och en del varuprover. Vi delar lokal med Kakeljätten som är duktiga på sten & kakel. Vi har även kontor och ett mindre lager vid Säbyholm strax utanför Bro.
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center relative overflow-hidden h-80 flex flex-col justify-center transition-all duration-300 hover:shadow-md">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full mx-auto border-4 border-[#AD8C44] p-1">
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
                <h4 className="font-serif text-lg font-bold text-dark-brown mb-2 tracking-wide">
                  {member.name}
                </h4>
                <p className="text-[#AD8C44] font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-dark-grey text-sm leading-relaxed">
                  {member.description}
                </p>
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-[#AD8C44]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
