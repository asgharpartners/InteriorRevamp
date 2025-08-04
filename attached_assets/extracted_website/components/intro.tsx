"use client"

import ScrollReveal from "./scroll-reveal"

interface IntroProps {
  language: "sv" | "en"
}

const translations = {
  sv: {
    title: "Välkomna till Nils Holger – Furniture & Projects", // Moved here
    paragraph1:
      "Vår affärsidé är att vara en pålitlig och flexibel partner när det gäller inredning och byggnation för alla typer av offentliga projekt.",
    paragraph2: "Vi arbetar i såväl interiöra som exteriöra miljöer.",
  },
  en: {
    title: "Welcome to Nils Holger – Furniture & Projects", // Moved here
    paragraph1:
      "Our business idea is to be a reliable and flexible partner when it comes to interior design and construction for all types of public projects.",
    paragraph2: "We work in both interior and exterior environments.",
  },
}

export default function Intro({ language }: IntroProps) {
  const t = translations[language]

  return (
    <section id="intro" className="pt-24 pb-12 md:pt-32 md:pb-12 bg-off-white overflow-hidden">
      {" "}
      {/* Changed py-24 md:py-32 to pt-24 pb-12 md:pt-32 md:pb-12 */}
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="fade" delay={100}>
            <h2 className="text-5xl md:text-6xl font-serif text-primary-brown font-bold mb-12">{t.title}</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <p className="text-2xl md:text-3xl font-serif text-primary-brown leading-relaxed mb-8 text-justify">
              {t.paragraph1}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={300}>
            <p className="text-lg md:text-xl text-dark-grey leading-relaxed text-justify">{t.paragraph2}</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
