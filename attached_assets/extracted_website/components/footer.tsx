"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ScrollReveal from "./scroll-reveal"

interface FooterProps {
  language: "sv" | "en"
}

const translations = {
  sv: {
    newsletter: "Prenumerera på vårt nyhetsbrev",
    subscribe: "Prenumerera",
    copyright: "© 2025 Nils Holger. Alla rättigheter reserverade.",
    partners: "Våra partners",
    address: "Birger Jarlsgatan 99, Stockholm",
    email: "info@nilsholger.se",
  },
  en: {
    newsletter: "Subscribe to our newsletter",
    subscribe: "Subscribe",
    copyright: "© 2025 Nils Holger. All rights reserved.",
    partners: "Our partners",
    address: "Birger Jarlsgatan 99, Stockholm",
    email: "info@nilsholger.se",
  },
}

const partners = [
  { name: "Brunner", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Kakeljätten", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Zenit", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Kvadrat", logo: "/placeholder.svg?height=60&width=120" },
]

export default function Footer({ language }: FooterProps) {
  const t = translations[language]

  return (
    <footer className="bg-primary-brown text-off-white py-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Newsletter */}
          <ScrollReveal direction="up" delay={100}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-serif mb-6">{t.newsletter}</h3>
              <div className="flex max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Din e-postadress"
                  className="flex-1 bg-off-white text-dark-grey border-0"
                />
                <Button className="bg-dark-grey hover:bg-stone-700 text-off-white ml-2">{t.subscribe}</Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Company Info & Partners */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Company Info */}
            <ScrollReveal direction="left" delay={200}>
              <div className="text-center md:text-left">
                <h4 className="text-xl font-semibold mb-4">Nils Holger</h4>
                <p className="text-off-white/90 mb-2">{t.address}</p>
                <p className="text-off-white/90">{t.email}</p>
              </div>
            </ScrollReveal>

            {/* Partners */}
            <ScrollReveal direction="right" delay={300}>
              <div className="text-center md:text-right">
                <h4 className="text-xl font-semibold mb-4">{t.partners}</h4>
                <div className="flex justify-center md:justify-end items-center space-x-8 flex-wrap">
                  {partners.map((partner, index) => (
                    <img
                      key={index}
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="h-12 opacity-70 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Copyright */}
          <ScrollReveal direction="fade" delay={400}>
            <div className="text-center pt-8 border-t border-dark-grey/50">
              <p className="text-off-white/70">{t.copyright}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  )
}
