"use client"

import ScrollReveal from "./scroll-reveal"
import ParallaxSection from "./parallax-section"

interface AboutProps {
  language: "sv" | "en"
}

const translations = {
  sv: {
    title: "Om Oss",
    story:
      "Nils Holger är ett varumärke under Zenit International AB som bildades redan 1982. Vår långa historia har gett oss erfarenhet och kunskap, men annars vill vi gärna profilera oss som ett modernt företag som strävar efter hållbarhet och god kvalitet. Vi är ett utpräglat nätverksföretag med ett stort kontaktnät. Vi träffar gärna våra beställare i vår utställning efter avtalad tid, men oftast är det vi själva som åker ut till våra beställare på plats.",
    team: [
      { name: "Dennis", role: "Projektledning", image: "/dennis-profile-circle.png" },
      {
        name: "Asghar",
        role: "Försäljning och Kommunikation",
        image: "/Asghar.JPG", // Updated image path
      },
      { name: "Noor", role: "Administration och Ekonomi", image: "/noor-profile-circle.png" },
      { name: "Miks", role: "Lokal Produktion", image: "/smiling-man-profile.png" },
    ],
  },
  en: {
    title: "About Us",
    story:
      "Nils Holger is a brand under Zenit International AB, established in 1982. Our long history has provided us with experience and knowledge, but we also aim to position ourselves as a modern company striving for sustainability and high quality. We are a distinct network company with a large contact network. We are happy to meet our clients in our showroom by appointment, but most often, we visit our clients on-site.",
    team: [
      { name: "Dennis", role: "Project Management", image: "/dennis-profile-circle.png" },
      {
        name: "Asghar",
        role: "Sales & Communication",
        image: "/Asghar.JPG", // Updated image path
      },
      { name: "Noor", role: "Administration & Finance", image: "/noor-profile-circle.png" },
      { name: "Miks", role: "Local Production", image: "/smiling-man-profile.png" },
    ],
  },
}

export default function About({ language }: AboutProps) {
  const t = translations[language]

  return (
    <section id="about" className="pt-12 pb-32 bg-off-white overflow-hidden">
      {" "}
      {/* Changed py-32 to pt-12 pb-32 */}
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="fade" delay={100}>
            <div className="flex flex-col items-start">
              {/* New line above title */}
              <div className="w-32 h-2 bg-primary-brown rounded-full mb-4" />
              {/* Title */}
              <h2 className="text-6xl md:text-7xl font-serif text-primary-brown mb-20 text-center">{t.title}</h2>
            </div>
          </ScrollReveal>

          {/* Two-column layout for story and main image on large screens, stacks on mobile */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            {/* Left Column: Story Text */}
            <ScrollReveal direction="left" delay={200}>
              <div>
                <p className="text-xl text-dark-grey leading-relaxed mb-12 font-light text-justify">{t.story}</p>
                <div className="w-32 h-2 bg-primary-brown rounded-full"></div>
              </div>
            </ScrollReveal>

            {/* Right Column: Main Image */}
            <ScrollReveal direction="right" delay={300}>
              <ParallaxSection speed={0.3} maxOffset={-50}>
                <div className="relative">
                  <img
                    src="/showroom-interior-through-window.jpeg"
                    alt="Nils Holger showroom interior with wooden furniture displays" // More descriptive alt text
                    className="rounded-2xl shadow-2xl w-full aspect-[4/3] max-h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </ParallaxSection>
            </ScrollReveal>
          </div>

          {/* Add the new title above the team members grid */}
          <ScrollReveal direction="fade" delay={350}>
            <h2 className="text-6xl md:text-7xl font-serif text-primary-brown mb-20 text-center">
              {language === "sv" ? "Team" : "Team"}
            </h2>
          </ScrollReveal>

          {/* Team members section - remains below the two columns */}
          <div className="grid md:grid-cols-3 gap-12">
            {t.team.map((member, index) => (
              <ScrollReveal key={index} direction="up" delay={400 + index * 100}>
                <div className="text-center group">
                  <div className="relative mb-8 overflow-hidden rounded-full w-48 h-48 mx-auto border border-stone-200 shadow-md">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={`Profile picture of ${member.name}, ${member.role}`} // Dynamic and descriptive alt text
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-serif text-primary-brown mb-2">{member.name}</h3>
                  <p className="text-dark-grey text-lg font-sans">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
