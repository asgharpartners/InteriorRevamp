"use client"

import { Button } from "@/components/ui/button"
import ScrollReveal from "./scroll-reveal"

interface ProcessProps {
  language: "sv" | "en"
}

const translations = {
  sv: {
    title: "Vår process",
    steps: [
      {
        number: "01",
        title: "Konsultation",
        description: "Vi lyssnar på dina behov och visioner",
      },
      {
        number: "02",
        title: "Koncept",
        description: "Utvecklar unika designkoncept",
      },
      {
        number: "03",
        title: "Produktion",
        description: "Tillverkar skräddarsydda lösningar",
      },
      {
        number: "04",
        title: "Installation",
        description: "Professionell installation på plats",
      },
    ],
    cta: "Diskutera ditt projekt",
  },
  en: {
    title: "Our Process",
    steps: [
      {
        number: "01",
        title: "Consultation",
        description: "We listen to your needs and visions",
      },
      {
        number: "02",
        title: "Concept",
        description: "Developing unique design concepts",
      },
      {
        number: "03",
        title: "Production",
        description: "Manufacturing custom solutions",
      },
      {
        number: "04",
        title: "Installation",
        description: "Professional on-site installation",
      },
    ],
    cta: "Discuss Your Project",
  },
}

export default function Process({ language }: ProcessProps) {
  const t = translations[language]

  return (
    <section id="process" className="py-32 bg-primary-brown text-off-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal direction="fade" delay={100}>
            <h2 className="text-5xl md:text-6xl font-serif mb-4">{t.title}</h2>
            <div className="w-48 h-0.5 bg-off-white/50 mx-auto mb-20"></div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-12 mb-20">
            {t.steps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={200 + index * 100}>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 flex items-center justify-center bg-amber-300/20 text-amber-300 rounded-full text-3xl font-serif mb-6 border-2 border-amber-300/50">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-off-white/80 font-light">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={600}>
            <Button size="lg" className="bg-amber-300 hover:bg-amber-400 text-primary-brown px-12 py-4 text-lg">
              {t.cta}
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
