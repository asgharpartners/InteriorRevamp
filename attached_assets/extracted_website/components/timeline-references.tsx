"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getYears, getProjectsByYear, type ReferenceProject } from "@/lib/reference-data"
import ScrollReveal from "./scroll-reveal"

interface TimelineReferencesProps {
  language: "sv" | "en"
}

const translations = {
  sv: {
    title: "Referensprojekt",
    viewProject: "Visa Projekt",
  },
  en: {
    title: "Reference Projects",
    viewProject: "View Project",
  },
}

export default function TimelineReferences({ language }: TimelineReferencesProps) {
  const t = translations[language]
  const years = getYears()
  const [activeYear, setActiveYear] = useState(years[0])
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [projectsInActiveYear, setProjectsInActiveYear] = useState<ReferenceProject[]>([])

  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const projects = getProjectsByYear(activeYear)
    setProjectsInActiveYear(projects)
    setCurrentProjectIndex(0) // Reset project index when year changes
  }, [activeYear])

  const handleYearClick = useCallback((year: number) => {
    setActiveYear(year)
  }, [])

  const nextProject = useCallback(() => {
    setCurrentProjectIndex((prev) => (prev + 1) % projectsInActiveYear.length)
  }, [projectsInActiveYear.length])

  const prevProject = useCallback(() => {
    setCurrentProjectIndex((prev) => (prev - 1 + projectsInActiveYear.length) % projectsInActiveYear.length)
  }, [projectsInActiveYear.length])

  const scrollTimeline = useCallback((direction: "left" | "right") => {
    if (timelineRef.current) {
      const scrollAmount = timelineRef.current.offsetWidth / 2 // Scroll half the width of the container
      timelineRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }, [])

  const currentProject = projectsInActiveYear[currentProjectIndex]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-off-white">
      <div className="container px-4 md:px-6">
        <ScrollReveal direction="fade" delay={100}>
          <h2 className="text-4xl md:text-5xl font-serif text-primary-brown text-center mb-12 md:mb-16">{t.title}</h2>
        </ScrollReveal>

        {/* Timeline Navigation */}
        <div className="relative mb-12 md:mb-16">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollTimeline("left")}
              className="text-dark-grey hover:bg-light-grey/50"
              aria-label="Scroll timeline left"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollTimeline("right")}
              className="text-dark-grey hover:bg-light-grey/50"
              aria-label="Scroll timeline right"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          <div
            ref={timelineRef}
            className="relative flex items-center justify-start md:justify-center overflow-x-auto pb-4 px-10 md:px-0 scrollbar-hide"
          >
            <div className="absolute h-0.5 bg-light-grey w-full top-1/2 -translate-y-1/2"></div>
            {years.map((year) => (
              <div
                key={year}
                className={`relative flex flex-col items-center mx-4 cursor-pointer transition-all duration-300 ${
                  activeYear === year ? "scale-110" : ""
                }`}
                onClick={() => handleYearClick(year)}
              >
                <div
                  className={`w-3 h-3 rounded-full bg-light-grey z-10 transition-all duration-300 ${
                    activeYear === year ? "w-4 h-4 bg-primary-brown" : ""
                  }`}
                ></div>
                <span
                  className={`mt-2 text-sm font-medium transition-colors duration-300 ${
                    activeYear === year ? "text-primary-brown" : "text-dark-grey"
                  }`}
                >
                  {year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Card */}
        {currentProject && (
          <ScrollReveal direction="up" delay={200} key={activeYear + "-" + currentProjectIndex}>
            <Card className="w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg bg-white">
              <CardContent className="p-0 flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/2 h-64 md:h-auto aspect-video md:aspect-auto">
                  <Image
                    src={currentProject.image || "/placeholder.svg"}
                    alt={currentProject.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-primary-brown text-off-white px-3 py-1 rounded-full text-xs font-semibold">
                    {currentProject.year}
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif text-primary-brown mb-3">{currentProject.title}</h3>
                    <p className="text-dark-grey text-base mb-4">{currentProject.description}</p>
                    {currentProject.location && (
                      <div className="flex items-center text-sm text-light-grey mb-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{currentProject.location}</span>
                      </div>
                    )}
                    {currentProject.tags && currentProject.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {currentProject.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-light-grey text-dark-grey px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {currentProject.ctaLink && (
                    <Button
                      variant="outline"
                      className="mt-4 self-start border-primary-brown text-primary-brown hover:bg-primary-brown hover:text-off-white bg-transparent"
                    >
                      {t.viewProject}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        )}

        {/* Bottom Navigation */}
        {projectsInActiveYear.length > 1 && (
          <div className="flex items-center justify-center mt-8 md:mt-12 gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevProject}
              disabled={currentProjectIndex === 0}
              className="text-dark-grey hover:bg-light-grey/50"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <span className="text-dark-grey font-medium">
              {currentProjectIndex + 1} / {projectsInActiveYear.length}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextProject}
              disabled={currentProjectIndex === projectsInActiveYear.length - 1}
              className="text-dark-grey hover:bg-light-grey/50"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
