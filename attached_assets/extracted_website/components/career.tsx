"use client"

import { Button } from "@/components/ui/button"
import ScrollReveal from "./scroll-reveal"
import Image from "next/image"
import { Briefcase, School, FolderKanban, Network } from "lucide-react"

interface CareerProps {
  language: "sv" | "en"
}

const translations = {
  sv: {
    title: "Karriär & Praktik",
    subtitle: "Bygg din framtid inom design med verkliga projekt.",
    description:
      "Är du en passionerad student inom design, arkitektur eller digitala medier? Vårt praktikprogram är din chans att omsätta teori till praktik. Arbeta sida vid sida med våra experter på verkliga kundprojekt, få ovärderlig erfarenhet och bygg en portfolio som öppnar dörrar för din framtida karriär.",
    benefits: [
      { icon: Briefcase, text: "Praktisk erfarenhet från branschen" },
      { icon: School, text: "Personlig handledning av erfarna mentorer" },
      { icon: FolderKanban, text: "Bygg en imponerande portfolio med riktiga projekt" },
      { icon: Network, text: "Utöka ditt professionella nätverk" },
    ],
    apply: "Ansök till vårt program",
  },
  en: {
    title: "Career & Internships",
    subtitle: "Build your future in design with real-world projects.",
    description:
      "Are you a passionate student of Design, Architecture, or Digital Media? Our intern program is your chance to turn theory into practice. Work side-by-side with our experts on real client projects, gain invaluable experience, and build a portfolio that opens doors for your future career.",
    benefits: [
      { icon: Briefcase, text: "Hands-on industry experience" },
      { icon: School, text: "Personal guidance from experienced mentors" },
      { icon: FolderKanban, text: "Build an impressive portfolio with real projects" },
      { icon: Network, text: "Expand your professional network" },
    ],
    apply: "Apply to Our Program",
  },
}

export default function Career({ language }: CareerProps) {
  const t = translations[language]

  return (
    <section id="career" className="py-32 bg-off-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Image */}
          <ScrollReveal direction="left" delay={200}>
            <div className="relative w-full aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src="/career-internship-program.png"
                alt="Design students collaborating in a modern workshop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </ScrollReveal>

          {/* Right Column: Text Content */}
          <ScrollReveal direction="right" delay={300}>
            <div>
              <h2 className="text-6xl md:text-7xl font-serif text-primary-brown mb-6 text-center">{t.title}</h2>
              <p className="text-xl text-dark-grey/90 mb-8">{t.subtitle}</p>
              <p className="text-dark-grey/80 mb-12 text-justify">{t.description}</p>

              <div className="space-y-4 mb-12">
                {t.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <benefit.icon className="w-6 h-6 text-primary-brown flex-shrink-0" />
                    <p className="text-dark-grey text-lg">{benefit.text}</p>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-primary-brown hover:bg-dark-grey text-off-white px-12 py-4 text-lg">
                {t.apply}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
