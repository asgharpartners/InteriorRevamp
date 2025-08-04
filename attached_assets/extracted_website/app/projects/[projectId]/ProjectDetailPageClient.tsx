"use client"

import { getProjectById } from "@/lib/reference-data"
import Header from "@/components/header"
import Footer from "@/components/footer"
import NilsyAssistant from "@/components/nilsy-assistant"
import { notFound, useRouter } from "next/navigation"
import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin } from "lucide-react"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"

interface ProjectDetailPageProps {
  params: {
    projectId: string
  }
}

export default function ProjectDetailPageClient({ params }: ProjectDetailPageProps) {
  const [language, setLanguage] = useState<"sv" | "en">("sv")
  const router = useRouter()

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const project = getProjectById(params.projectId)
  if (!project) {
    notFound()
  }

  const handleBackClick = useCallback(() => {
    router.push("/#references") // Go back to the references section on the homepage
  }, [router])

  const pageTranslations = {
    sv: {
      back: "Tillbaka till Projekt",
      location: "Plats",
      categories: "Kategorier",
    },
    en: {
      back: "Back to Projects",
      location: "Location",
      categories: "Categories",
    },
  }
  const t = pageTranslations[language]

  return (
    <div className="min-h-screen bg-off-white">
      <Header language={language} setLanguage={setLanguage} />
      <main className="py-20">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={handleBackClick}
              className="text-primary-brown hover:bg-stone-100 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              {t.back}
            </Button>
          </div>

          <ScrollReveal direction="fade" delay={100}>
            <h1 className="text-6xl md:text-7xl font-serif text-primary-brown mb-4 text-center">{project.title}</h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <p className="text-xl text-dark-grey mb-12 text-center max-w-3xl mx-auto">{project.description}</p>
          </ScrollReveal>

          {/* Main Project Image */}
          <ScrollReveal direction="scale" delay={300}>
            <div className="relative w-full aspect-[16/9] md:aspect-[3/1] overflow-hidden rounded-2xl shadow-xl mb-16">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Project Details */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="left" delay={400}>
                <h2 className="text-4xl font-serif text-primary-brown mb-6">
                  {language === "sv" ? "Om Projektet" : "About the Project"}
                </h2>
                <p className="text-dark-grey text-lg leading-relaxed mb-8 text-justify">
                  {project.longDescription?.[language] || project.description}
                </p>
              </ScrollReveal>
            </div>

            {/* Sidebar Info */}
            <div>
              <ScrollReveal direction="right" delay={500}>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-serif text-primary-brown mb-6">
                    {language === "sv" ? "Projektfakta" : "Project Facts"}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-dark-grey">
                      <MapPin className="w-5 h-5 mr-3 text-primary-brown" />
                      <div>
                        <p className="font-semibold">{t.location}</p>
                        <p>{project.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-dark-grey">
                      <span className="text-primary-brown text-2xl font-bold mr-3">#</span>
                      <div>
                        <p className="font-semibold">{t.categories}</p>
                        <p>{project.tags.join(", ")}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-dark-grey">
                      <span className="text-primary-brown text-2xl font-bold mr-3">📅</span>
                      <div>
                        <p className="font-semibold">{language === "sv" ? "År" : "Year"}</p>
                        <p>{project.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-16">
              <ScrollReveal direction="fade" delay={600}>
                <h2 className="text-4xl font-serif text-primary-brown mb-8 text-center">
                  {language === "sv" ? "Galleri" : "Gallery"}
                </h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((imgSrc, index) => (
                  <ScrollReveal key={index} direction="up" delay={700 + index * 50}>
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                      <Image
                        src={imgSrc || "/placeholder.svg"}
                        alt={`${project.title} gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer language={language} />
      <NilsyAssistant language={language} />
    </div>
  )
}
