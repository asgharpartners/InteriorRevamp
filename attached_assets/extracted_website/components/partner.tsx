"use client"

import { Button } from "@/components/ui/button"
import ScrollReveal from "./scroll-reveal"

interface PartnerProps {
  language: "sv" | "en"
}

const translations = {
  sv: {
    title: "Bli Partner",
    subtitle:
      "För att uppnå era mest ambitiösa inredningsmål, är ett strategiskt partnerskap med oss avgörande. Vi tillhandahåller den grund ni behöver för att lyckas.",
    criteria: [
      "Hög kvalitet i arbete och produkter",
      "Pålitlighet och professionalism",
      "Estetisk känsla för skandinavisk design",
      "Dokumenterad erfarenhet inom branschen",
    ],
    apply: "Ansök som partner",
  },
  en: {
    title: "Become a Partner",
    subtitle:
      "Achieving your most ambitious interior goals requires a strategic partnership. We provide the foundation and support necessary for your success.",
    criteria: [
      "High quality in work and products",
      "Reliability and professionalism",
      "Aesthetic sense for Scandinavian design",
      "Documented experience in the industry",
    ],
    apply: "Apply as partner",
  },
}

export default function Partner({ language }: PartnerProps) {
  const t = translations[language]

  return (
    <section id="partner" className="py-32 bg-primary-brown overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="fade" delay={100}>
            <h2 className="text-6xl md:text-7xl font-serif text-off-white mb-6">{t.title}</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <p className="text-xl text-off-white/90 mb-12">{t.subtitle}</p>
          </ScrollReveal>

          <ScrollReveal direction="fade" delay={250}>
            <div className="relative w-full max-w-2xl mx-auto aspect-[16/9] overflow-hidden rounded-2xl shadow-xl mb-12">
              <img
                src="/partnership-agreement.png" // Updated image path
                alt="Professional handshake or business collaboration in a modern office setting" // Updated alt text
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {t.criteria.map((criterion, index) => (
              <ScrollReveal key={index} direction="up" delay={300 + index * 100}>
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <div className="w-3 h-3 bg-off-white rounded-full flex-shrink-0"></div>
                  <p className="text-off-white/90 text-lg">{criterion}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={700}>
            <Button size="lg" className="bg-off-white hover:bg-stone-200 text-primary-brown px-12 py-4 text-lg">
              {t.apply}
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
