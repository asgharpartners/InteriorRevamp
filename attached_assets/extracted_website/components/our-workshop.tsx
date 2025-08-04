"use client"

import ScrollReveal from "./scroll-reveal"
import Image from "next/image"

interface OurWorkshopProps {
  language: "sv" | "en"
}

const translations = {
  sv: {
    title: "Vår Verkstad",
    tagline: "Vi designar inte bara – vi bygger, restaurerar och levererar inredningar som håller.",
    intro:
      "I hjärtat av vår verksamhet finns vår verkstad, där traditionellt hantverk möter modern precision. Här skapar våra skickliga hantverkare unika möbler och restaurerar befintliga med omsorg och expertis, vilket säkerställer att varje detalj är perfekt och byggd för att hålla i generationer.",
  },
  en: {
    title: "Our Workshop",
    tagline: "We don’t just design—we build, restore, and deliver interiors that last.",
    intro:
      "At the heart of our operations is our workshop, where traditional craftsmanship meets modern precision. Here, our skilled artisans create unique furniture and restore existing pieces with care and expertise, ensuring every detail is perfect and built to last for generations.",
  },
}

export default function OurWorkshop({ language }: OurWorkshopProps) {
  const t = translations[language]

  return (
    <section id="our-workshop" className="py-32 bg-off-white overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="fade" delay={100}>
          <h2 className="text-6xl md:text-7xl font-serif text-primary-brown mb-6 text-center">{t.title}</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
          <p className="text-xl text-dark-grey/90 mb-16 text-center max-w-2xl mx-auto">{t.tagline}</p>
        </ScrollReveal>
      </div>

      {/* Full-width image section */}
      <ScrollReveal direction="fade" delay={300}>
        <div className="relative w-full aspect-[16/9] md:aspect-[3/1] overflow-hidden shadow-xl mb-16">
          <Image
            src="/vast-workshop-landscape.png"
            alt="Panoramic view of a modern Scandinavian furniture workshop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </ScrollReveal>

      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" delay={400}>
          <p className="text-xl text-dark-grey leading-relaxed mb-20 max-w-4xl mx-auto text-justify">{t.intro}</p>
        </ScrollReveal>

        {/* Removed Meet the Makers Grid as requested */}
      </div>
    </section>
  )
}
