"use client"

import { Hammer, Palette, Brush, ClipboardList, Building, Layout, ShieldCheck, FileText } from "lucide-react" // Added ShieldCheck and FileText
import ScrollReveal from "./scroll-reveal"

interface ServicesProps {
  language: "sv" | "en"
}

const translations = {
  sv: {
    title: "Tjänster",
    services: [
      {
        icon: ClipboardList, // Project Management
        title: "Projektledning",
        shortDescription: "Helhetsansvar för ditt projekt från start till mål.",
        longDescription:
          "När det finns färdiga underlag ser vi gärna att ett första möte blir en förutsättningslös diskussion om målbild & upplägg, omfattning, tidplan och ekonomi. Utifrån givna ramar tar vi sedan fram ett förslag på lösning oavsett innehåll. Inget projekt är för litet. Det kan t.ex. handla om att uppgradera en hotellobby, bygga om ett kontor, inreda nya hotellrum, skräddarsy en restaurang eller varför inte inreda en butik. Men det kan också handla om att bygga en helt ny byggnad eller att bygga om/bygga till en befintlig. Oavsett vad så tar vi hand om ert projekt från start till mål!",
        image: "/project-management-meeting.png",
      },
      {
        icon: Layout, // Project Planning
        title: "Projektering",
        shortDescription: "Hjälp med underlag och projekteringsledning för offentliga miljöer.",
        longDescription:
          "När våra beställare behöver hjälp med att ta fram underlag för sitt projekt så bistår vi gärna med projektering och projekteringsledning med stöd av vårt nätverk. Avser alla typer av offentliga miljöer. När projekten är av större omfattning inbegriper det olika typer av konsultgrupper såsom arkitektur, konstruktion, El, VVS, brand, tillgänglighet m.fl.",
        image: "/architectural-planning-workspace.png", // Placeholder image
      },
      {
        icon: ShieldCheck, // New icon for Kontrollansvar
        title: "Kontrollansvar (KA)",
        shortDescription: "Certifierad kontrollansvarig för ny-, om- och tillbyggnadsprojekt.",
        longDescription:
          "Många ny-, om- eller tillbyggnadsprojekt kräver en kontrollansvarig funktion. Vi är certifierade med behörighet K.",
        image: "/certified-inspector-blueprint.png",
      },
      {
        icon: Building,
        title: "Bygg & Renovering",
        shortDescription: "Smarta renoveringar med minimal störning.",
        longDescription:
          "Med hjälp av vårt stora nätverk av underentreprenörer erbjuder vi även projekt- och/eller byggledning för i stort sett alla typer av arbeten inom byggnation och inredning. En enkel och prisvärd lösning för beställaren. I alla typer av lokaler blir det ofrånkomligen slitage på ytskikten. Ibland kan detta innebära patina och en känsla av trivsel, men oftast så innebär det att helhetsintrycket dras ned och att det är läge att fräscha upp eller byta ut vissa delar. Vi har stor erfarenhet av att snabbt och effektivt förändra offentliga rum så att verksamheten drabbas så lite som möjligt, enkelt och prisvärt.",
        image: "/construction-renovation-site.png",
      },
      {
        icon: Palette, // Upholstery & Repair
        title: "Tapetsering & Reparation",
        shortDescription: "Ge gamla möbler nytt liv — hållbart och stilfullt.",
        longDescription:
          "Varför slänga bra och fungerande möbler som bara behöver en uppfräschning? Som ett hållbart och prisvärt alternativ i dagens ”slit & släng” samhälle erbjuder vi omklädnad och renovering av alla typer av stoppade möbler och andra inredningsdetaljer. Stommen i stoppade möbler är ofta i utmärkt skick även efter många år i bruk även om själva ytan kanske har gjort sitt. Stolar, soffor och fåtöljer med smutsigt eller trasigt tyg blir som nya efter en omklädnad.",
        image: "/upholstery-cowhide-chairs.jpeg", // Updated image
      },
      {
        icon: Hammer, // Furniture Carpentry
        title: "Möbelsnickeri",
        shortDescription: "Skräddarsydda möbler från skiss till installation.",
        longDescription:
          "Vi tillverkar unika möbler anpassade efter dina specifika behov och utrymmen. Från första skiss till slutlig installation hanterar vi hela processen med precision och kvalitet.",
        image: "/knobs-1.jpeg",
      },
      {
        icon: Brush,
        title: "Måleri",
        shortDescription: "Interiöra ytbehandlingar med detalj och hållbarhet.",
        longDescription:
          "Professionella måleriarbeten för alla typer av ytor. Vi fokuserar på detaljer och använder högkvalitativa material för långvariga resultat.",
        image: "/professional-painting-interior.png",
      },
      {
        icon: FileText, // Changed icon for Inredningssamordning
        title: "Inredningssamordning",
        shortDescription: "Smidig samverkan mellan alla hantverkare.",
        longDescription:
          "Vi koordinerar alla inblandade parter i ditt inredningsprojekt för att säkerställa en helhetslösning som levereras enligt plan och kvalitetskrav.",
        image: "/fabric-swatches-collage-new.jpeg", // Updated image
      },
    ],
  },
  en: {
    title: "Services",
    services: [
      {
        icon: ClipboardList, // Project Management
        title: "Project Management",
        shortDescription: "Overall responsibility for your project from start to finish.",
        longDescription:
          "Once the documentation is ready, we prefer an initial meeting to be a non-committal discussion about goals & setup, scope, timeline, and budget. Based on given frameworks, we then develop a solution proposal regardless of content. No project is too small. It could, for example, involve upgrading a hotel lobby, renovating an office, furnishing new hotel rooms, customizing a restaurant, or why not furnishing a retail store. But it can also involve building a completely new building or renovating/extending an existing one. Regardless, we take care of your project from start to finish!",
        image: "/project-management-meeting.png",
      },
      {
        icon: Layout, // Project Planning
        title: "Project Planning",
        shortDescription: "Assistance with documentation and project planning for public environments.",
        longDescription:
          "When our clients need help developing documentation for their project, we are happy to assist with project planning and project management with the support of our network. This applies to all types of public environments. For larger projects, it involves various types of consulting groups such as architecture, construction, electrical, plumbing, fire safety, accessibility, etc.",
        image: "/architectural-planning-workspace.png",
      },
      {
        icon: ShieldCheck,
        title: "Control Responsibility (KA)",
        shortDescription: "Certified control officer for new construction, renovation, and extension projects.",
        longDescription:
          "Many new construction, renovation, or extension projects require a control officer function. We are certified with authorization K.",
        image: "/certified-inspector-blueprint.png",
      },
      {
        icon: Building,
        title: "Construction & Renovation",
        shortDescription: "Smart renovations with minimal disruption.",
        longDescription:
          "With the help of our large network of subcontractors, we also offer project and/or construction management for virtually all types of work within construction and interior design. A simple and affordable solution for the client. In all types of premises, wear and tear on surfaces are inevitable. Sometimes this can mean patina and a feeling of comfort, but most often it means that the overall impression is diminished and it's time to refresh or replace certain parts. We have extensive experience in quickly and efficiently transforming public spaces so that operations are affected as little as possible, simply and affordably.",
        image: "/construction-renovation-site.png",
      },
      {
        icon: Palette,
        title: "Upholstery & Repair",
        shortDescription: "Give old furniture new life — sustainably.",
        longDescription:
          "Why discard good and functional furniture that only needs a refresh? As a sustainable and affordable alternative in today's 'throwaway' society, we offer reupholstery and renovation of all types of upholstered furniture and other interior details. The frame of upholstered furniture is often in excellent condition even after many years of use, even if the surface itself may have worn out. Chairs, sofas, and armchairs with dirty or torn fabric become like new after reupholstery.",
        image: "/upholstery-cowhide-chairs.jpeg",
      },
      {
        icon: Hammer,
        title: "Furniture Carpentry",
        shortDescription: "Custom-built for your space — from sketch to installation.",
        longDescription:
          "We manufacture unique furniture tailored to your specific needs and spaces. From initial sketch to final installation, we handle the entire process with precision and quality.",
        image: "/furniture-carpentry-workshop.png",
      },
      {
        icon: Brush,
        title: "Painting",
        shortDescription: "Interior finishes with detail and durability.",
        longDescription:
          "Professional painting work for all types of surfaces. We focus on details and use high-quality materials for long-lasting results.",
        image: "/professional-painting-interior.png",
      },
      {
        icon: FileText,
        title: "Interior Coordination",
        shortDescription: "Smooth collaboration between all trades.",
        longDescription:
          "We coordinate all involved parties in your interior project to ensure a comprehensive solution delivered according to plan and quality requirements.",
        image: "/fabric-swatches-collage-new.jpeg", // Updated image
      },
    ],
  },
}

export default function Services({ language }: ServicesProps) {
  const t = translations[language]

  return (
    <section id="services" className="py-32 bg-off-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Title remains centered within a container */}
        <ScrollReveal direction="fade" delay={100}>
          <h2 className="text-6xl md:text-7xl font-serif text-primary-brown mb-20 text-center">{t.title}</h2>
        </ScrollReveal>
      </div>

      {/* Full-width grid with 1mm padding on sides and 1mm gap between cards */}
      <div className="w-full px-px">
        <div className="grid md:grid-cols-3 gap-px border-t border-l border-stone-100">
          {t.services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={200 + index * 100}>
              <div className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-r border-b border-stone-100 flex flex-col h-full">
                {/* Service Image - Taller aspect ratio */}
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content - Ensures consistent height */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <service.icon className="w-8 h-8 text-primary-brown mb-4" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary-brown mb-4">{service.title}</h3>

                  {/* Short description - always visible */}
                  <p className="text-dark-grey leading-relaxed text-base mb-4 flex-grow">{service.shortDescription}</p>

                  {/* Long description - revealed on hover */}
                  <div className="max-h-0 overflow-hidden group-hover:max-h-[180px] group-hover:overflow-y-auto transition-all duration-300 ease-in-out pt-2 border-t border-stone-200">
                    <p className="text-dark-grey/80 leading-relaxed text-sm text-justify">{service.longDescription}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
