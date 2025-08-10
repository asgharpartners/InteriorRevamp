"use client"

import ScrollReveal from "./scroll-reveal"

interface ImageSectionProps {
  src: string
  alt: string
  language: "sv" | "en"
}

const translations = {
  sv: {
    caption: "Skräddarsydda lösningar för varje unikt utrymme.",
  },
  en: {
    caption: "Tailored solutions for every unique space.",
  },
}

export default function ImageSection({ src, alt, language }: ImageSectionProps) {
  const t = translations[language]

  return (
    <section className="pb-12 bg-off-white overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="fade" delay={100}>
          <div className="relative w-full aspect-[16/9] md:aspect-[3/1] overflow-hidden rounded-2xl shadow-xl">
            <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
          <p className="text-center text-dark-grey text-lg md:text-xl mt-8 font-light max-w-2xl mx-auto">{t.caption}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
