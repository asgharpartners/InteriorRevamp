import { useLanguage } from '@/hooks/use-language';
import { Pencil, User, Palette, Hammer, Factory } from 'lucide-react';
import dennisImage from '@assets/dennis_1754742490063.jpg';
import miksImage from '@assets/Screenshot 2025-08-09 at 19.33.37_1754760848991.png';
import noorImage from '@assets/Screenshot 2025-08-09 at 19.34.32_1754760888357.png';

const teamMembers = [
  {
    name: "Dennis",
    role: "Projektledning",
    description: "Ansvarar för projektledning och koordinering av alla typer av inrednings- och byggprojekt",
    image: dennisImage,
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
    image: noorImage,
    icon: <Palette className="h-4 w-4" />
  },
  {
    name: "Miks",
    role: "Local Production",
    description: "Ansvarar för lokal produktion och tillverkning av skräddarsydda möbler och inredningslösningar",
    image: miksImage,
    icon: <Factory className="h-4 w-4" />
  }
];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl font-bold text-dark-brown mb-4">
            {t('about.title')}
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="font-serif text-3xl font-bold text-dark-brown mb-6">
              {t('about.story')}
            </h3>
            <div className="space-y-6 text-lg text-[#5B401C]">
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
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FBD44C]/20 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-dark-brown/10 rounded-full blur-lg" />
          </div>
        </div>
        
        {/* Team Members */}
        <div className="mb-12 text-center">
          <h3 className="font-serif text-3xl font-bold text-dark-brown mb-4">Our Team</h3>
          <p className="text-xl text-[#5B401C] max-w-2xl mx-auto text-left">Meet the passionate team behind Nils Holger's distinctive design philosophy</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-[#F9F9F9] p-[2px]">
          {teamMembers.map((member, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="team-card bg-[#2B2B2B] rounded-2xl shadow-sm border border-gray-200 p-8 text-left relative overflow-hidden h-[400px] flex flex-col justify-center transition-all duration-300 hover:shadow-md">
                <div className="relative mb-6 flex justify-start">
                  <div className="w-20 h-20 rounded-full border-4 border-[#AD8C44] p-1">
                    <img 
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-16 w-8 h-8 bg-[#AD8C44] rounded-full flex items-center justify-center">
                    <div className="text-[#5B401C]">
                      {member.icon}
                    </div>
                  </div>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#fffaf7] mb-2 tracking-wide">
                  {member.name}
                </h4>
                <p className="text-[#fffaf7] font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-[#fffaf7] text-sm leading-relaxed">
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
