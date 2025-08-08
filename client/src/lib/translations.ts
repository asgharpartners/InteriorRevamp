export const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services", 
      products: "Products",
      references: "References",
      contact: "Contact",
      bookConsultation: "Book Free Consultation"
    },
    hero: {
      slide1: {
        title: "Transform Your Commercial Space",
        subtitle: "Professional interior design solutions for hotels, restaurants, and office environments"
      },
      slide2: {
        title: "Scandinavian Design Excellence", 
        subtitle: "Trusted by Sweden's leading hospitality and commercial brands"
      },
      slide3: {
        title: "Sustainable Business Solutions",
        subtitle: "Creating lasting value through environmentally conscious design"
      }
    },
    intro: {
      title: "Välkomna till Nils Holger – Furniture & Project",
      subtitle: "Vår affärsidé är att vara en pålitlig och flexibel partner när det gäller inredning och byggnation för alla typer av offentliga projekt.",
      description: "Vi arbetar i såväl interiöra som exteriöra miljöer."
    },
    process: {
      title: "Our Process",
      step1: {
        title: "Prerequisite-Free Meeting",
        description: "Needs and visions, Timeline, Scope, Budget, Setup"
      },
      step2: {
        title: "Design & Concept", 
        description: "We develop a thoughtful interior concept based on your goals and the space's conditions."
      },
      step3: {
        title: "Production",
        description: "We execute the project with a way to be nicer towards the environment"
      },
      step4: {
        title: "Delivery",
        description: "We handle installation and final styling to ensure excellence"
      }
    },
    services: {
      title: "Our Services",
      subtitle: "From concept to completion, we offer comprehensive interior design and furniture services"
    },
    beforeAfter: {
      title: "Before & After",
      subtitle: "Witness the transformative power of thoughtful design and expert craftsmanship"
    },
    products: {
      title: "Our Products",
      subtitle: "Discover our collection of handcrafted furniture and bespoke design solutions",
      tabs: {
        custom: "Custom-made Products",
        standard: "Standard Products", 
        special: "Special Collections"
      }
    },
    references: {
      title: "Our Projects",
      subtitle: "Explore our portfolio of completed projects across various sectors"
    },
    about: {
      title: "About Us",
      subtitle: "Meet the passionate team behind Nils Holger's distinctive design philosophy",
      story: "Our Story"
    },
    workshop: {
      title: "Our Workshop",
      subtitle: "Where craftsmanship meets innovation"
    },
    contact: {
      title: "Contact Us",
      subtitle: "Ready to start your next project? We'd love to hear from you",
      form: {
        name: "Name",
        email: "Email",
        projectType: "Project Type",
        message: "Message",
        send: "Send Message"
      }
    },
    footer: {
      newsletter: "Stay Updated",
      subscribe: "Subscribe",
      partners: "Our Partners"
    },
    stickyCta: {
      title: "Ready to transform your space?",
      subtitle: "Get a free consultation today",
      button: "Book Now"
    }
  },
  sv: {
    nav: {
      about: "Om Oss",
      services: "Tjänster",
      products: "Produkter", 
      references: "Våra Projekt",
      contact: "Kontakt",
      bookConsultation: "Boka Gratis Konsultation"
    },
    hero: {
      slide1: {
        title: "Förvandla Era Kommersiella Lokaler",
        subtitle: "Professionella inredningslösningar för hotell, restauranger och kontorsmiljöer"
      },
      slide2: {
        title: "Skandinavisk Designexcellens",
        subtitle: "Förtroendet från Sveriges ledande hotell- och kommersiella varumärken"
      },
      slide3: {
        title: "Hållbara Affärslösningar",
        subtitle: "Skapar bestående värde genom miljömedveten design"
      }
    },
    intro: {
      title: "Välkomna till Nils Holger – Furniture & Project",
      subtitle: "Vår affärsidé är att vara en pålitlig och flexibel partner när det gäller inredning och byggnation för alla typer av offentliga projekt.",
      description: "Vi arbetar i såväl interiöra som exteriöra miljöer."
    },
    process: {
      title: "Vår Process",
      step1: {
        title: "Förutsättningslöst möte",
        description: "Behov och visioner, Tidplan, Omfattning, Budget, Upplägg"
      },
      step2: {
        title: "Design & Koncept",
        description: "Vi genomför varje projekt så det speglar ditt unika designkoncept - prisvärt och snällare mot miljön."
      },
      step3: {
        title: "Produktion",
        description: "Vi genomför projektet med ett sätt att vara snällare mot miljön"
      },
      step4: {
        title: "Leverans",
        description: "Vi hanterar installation och slutlig styling för att säkerställa excellens"
      }
    },
    services: {
      title: "Våra Tjänster",
      subtitle: "Från koncept till färdigställande erbjuder vi omfattande inredningsdesign och möbeltjänster"
    },
    beforeAfter: {
      title: "Före & Efter",
      subtitle: "Bevittna den transformativa kraften av genomtänkt design och experthantverk"
    },
    products: {
      title: "Våra Produkter", 
      subtitle: "Upptäck vår kollektion av handgjorda möbler och skräddarsydda designlösningar",
      tabs: {
        custom: "Skräddarsydda Produkter",
        standard: "Standardprodukter",
        special: "Specialsamlingar"
      }
    },
    references: {
      title: "Våra Projekt",
      subtitle: "Utforska vår portfölj av slutförda projekt inom olika sektorer"
    },
    about: {
      title: "Om Oss",
      subtitle: "Möt det passionerade teamet bakom Nils Holgers distinkta designfilosofi",
      story: "Vår Berättelse"
    },
    workshop: {
      title: "Vår Verkstad",
      subtitle: "Där hantverk möter innovation"
    },
    contact: {
      title: "Kontakt",
      subtitle: "Redo att starta ditt nästa projekt? Vi skulle älska att höra från dig",
      form: {
        name: "Namn",
        email: "E-post",
        projectType: "Projekttyp",
        message: "Meddelande", 
        send: "Skicka Meddelande"
      }
    },
    footer: {
      newsletter: "Håll dig Uppdaterad",
      subscribe: "Prenumerera",
      partners: "Våra Partners"
    },
    stickyCta: {
      title: "Redo att förvandla era lokaler?",
      subtitle: "Boka en gratis konsultation idag",
      button: "Boka Nu"
    }
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
