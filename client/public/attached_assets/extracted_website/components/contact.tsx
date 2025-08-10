"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Clock, Phone } from "lucide-react" // Added Phone icon
import ScrollReveal from "./scroll-reveal"
import Image from "next/image"

interface ContactProps {
  language: "sv" | "en"
}

const translations = {
  sv: {
    title: "Kontakt",
    form: {
      name: "Namn",
      email: "E-post",
      message: "Meddelande",
      send: "Skicka meddelande",
    },
    info: {
      email: "info@nilsholger.se",
      address: "Nils Holger – Furniture & Project\nBirger Jarlsgatan 99\n104 32 Stockholm",
      hours: "Endast bokade besök",
      phone: "+46 - 08 673 50 80", // Added phone number
      findUs: "Här finns vi",
      showroomTitle: "Utställning/Kontor",
      showroomDescription:
        "Vi har ett litet showroom på Birger Jarlsgatan 99 i Stockholm där vi visar vissa utvalda produkter och en del varuprover. Vi delar lokal med Kakeljätten som är duktiga på sten & kakel.",
      warehouseDescription: "Vi har även kontor och ett mindre lager vid Säbyholm strax utanför Bro.",
    },
  },
  en: {
    title: "Contact",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
    },
    info: {
      email: "info@nilsholger.se",
      address: "Nils Holger – Furniture & Project\nBirger Jarlsgatan 99\n104 32 Stockholm",
      hours: "By appointment only",
      phone: "+46 - 08 673 50 80", // Added phone number
      findUs: "Where to find us",
      showroomTitle: "Showroom/Office",
      showroomDescription:
        "We have a small showroom at Birger Jarlsgatan 99 in Stockholm where we display selected products and samples. We share premises with Kakeljätten, who are experts in stone & tiles.",
      warehouseDescription: "We also have an office and a smaller warehouse at Säbyholm just outside Bro.",
    },
  },
}

export default function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const t = translations[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-32 bg-off-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="fade" delay={100}>
            <h2 className="text-6xl md:text-7xl font-serif text-primary-brown mb-20 text-center">{t.title}</h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal direction="left" delay={200}>
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder={t.form.name}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 border border-stone-300 rounded-lg focus:border-primary-brown focus:ring-primary-brown text-dark-grey"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder={t.form.email}
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 border border-stone-300 rounded-lg focus:border-primary-brown focus:ring-primary-brown text-dark-grey"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder={t.form.message}
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full p-4 border border-stone-300 rounded-lg focus:border-primary-brown focus:ring-primary-brown resize-none text-dark-grey"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary-brown hover:bg-dark-grey text-off-white py-4"
                  >
                    {t.form.send}
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal direction="right" delay={300}>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary-brown mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-brown mb-2">Email</h3>
                    <p className="text-dark-grey">{t.info.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary-brown mt-1" /> {/* Phone icon */}
                  <div>
                    <h3 className="font-semibold text-primary-brown mb-2">Phone</h3>
                    <p className="text-dark-grey">{t.info.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-brown mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-brown mb-2">Address</h3>
                    <p className="text-dark-grey whitespace-pre-wrap">{t.info.address}</p>
                  </div>
                </div>

                {/* New location details */}
                <div className="space-y-4 pt-4 border-t border-stone-200">
                  <h3 className="font-semibold text-primary-brown text-xl">{t.info.findUs}</h3>
                  <div>
                    <h4 className="font-medium text-primary-brown mb-1">{t.info.showroomTitle}</h4>
                    <p className="text-dark-grey text-sm leading-relaxed text-justify">{t.info.showroomDescription}</p>
                  </div>
                  <div>
                    <p className="text-dark-grey text-sm leading-relaxed text-justify">{t.info.warehouseDescription}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-brown mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-brown mb-2">Visiting Hours</h3>
                    <p className="text-dark-grey">{t.info.hours}</p>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8">
                  <div className="relative w-full h-64 rounded-lg shadow-md overflow-hidden">
                    <Image
                      src="/showroom-exterior-pink-chair.jpeg"
                      alt="Nils Holger showroom exterior with pink chair"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
