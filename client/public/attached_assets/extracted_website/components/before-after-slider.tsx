"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { GripVertical } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

interface BeforeAfterSliderProps {
  language: "sv" | "en"
}

interface RefurbishmentProject {
  id: string
  beforeImage: string
  afterImage: string
  caption: {
    sv: string
    en: string
  }
}

const refurbishmentProjects: RefurbishmentProject[] = [
  {
    id: "project-1",
    beforeImage: "/DAR-06.jpg", // Example: Restaurant interior before reupholstery
    afterImage: "/modern-interior-bar.jpeg", // Example: Restaurant interior after reupholstery
    caption: {
      sv: "Omklädnad av restaurangstolar för 'Restaurang Smak'.",
      en: "Reupholstery of restaurant chairs for 'Restaurang Smak'.",
    },
  },
  {
    id: "project-2",
    beforeImage: "/furniture-workshop-chair.png", // Example: Old chair in workshop
    afterImage: "/craftsman-upholstering.png", // Example: Refurbished chair
    caption: {
      sv: "Renovering av klassisk fåtölj för privat kund.",
      en: "Renovation of a classic armchair for a private client.",
    },
  },
  {
    id: "project-3",
    beforeImage: "/IMG_1568.jpg",
    afterImage: "/IMG_1600.jpg",
    caption: {
      sv: "Installation av anpassad sittgrupp för offentlig miljö.",
      en: "Installation of custom seating area for public environment.",
    },
  },
  {
    id: "project-4",
    beforeImage: "/reception-desk-before.jpeg",
    afterImage: "/reception-desk-after.jpeg",
    caption: {
      sv: "Design och konstruktion av en skräddarsydd reception för kontorsmiljö.",
      en: "Design and construction of a custom reception desk for an office environment.",
    },
  },
  {
    id: "project-5",
    beforeImage: "/images.jpeg", // Updated to the new image
    afterImage: "/Screenshot 2025-07-14 at 21.15.42.png",
    caption: {
      sv: "Totalrenovering av badrum med modern design.",
      en: "Complete bathroom renovation with modern design.",
    },
  },
]

const translations = {
  sv: {
    title: "Före & Efter",
    subtitle: "Se hur vi förvandlar och förnyar möbler och interiörer.",
  },
  en: {
    title: "Before & After",
    subtitle: "See how we transform and renew furniture and interiors.",
  },
}

export default function BeforeAfterSlider({ language }: BeforeAfterSliderProps) {
  const t = translations[language]

  return (
    <section id="before-after" className="py-32 bg-off-white overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="fade" delay={100}>
          <h2 className="text-6xl md:text-7xl font-serif text-primary-brown mb-6 text-center">{t.title}</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
          <p className="text-xl text-dark-grey/90 mb-16 text-center max-w-2xl mx-auto">{t.subtitle}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {refurbishmentProjects.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={300 + index * 100}>
              <ProjectSlider project={project} language={language} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectSliderProps {
  project: RefurbishmentProject
  language: "sv" | "en"
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ project, language }) => {
  const [sliderPosition, setSliderPosition] = useState(50) // Percentage from left
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      let newX = e.clientX - rect.left
      newX = Math.max(0, Math.min(newX, rect.width)) // Clamp between 0 and container width
      setSliderPosition((newX / rect.width) * 100)
    },
    [isDragging],
  )

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging || !containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      let newX = e.touches[0].clientX - rect.left
      newX = Math.max(0, Math.min(newX, rect.width)) // Clamp between 0 and container width
      setSliderPosition((newX / rect.width) * 100)
    },
    [isDragging],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
      window.addEventListener("touchmove", handleTouchMove, { passive: false })
      window.addEventListener("touchend", handleTouchEnd)
    } else {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] cursor-ew-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        role="img"
        aria-label={`Before and after comparison of ${project.caption[language]}`}
      >
        {/* Before Image */}
        <Image
          src={project.beforeImage || "/placeholder.svg"}
          alt="Before refurbishment"
          fill
          className="object-cover"
          priority
        />

        {/* After Image */}
        <div className="absolute top-0 left-0 h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
          <Image
            src={project.afterImage || "/placeholder.svg"}
            alt="After refurbishment"
            fill
            className="object-cover"
            style={{ transform: `translateX(-${100 - sliderPosition}%)` }} // Keep image fixed
            priority
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 h-full w-1 bg-off-white flex items-center justify-center cursor-ew-resize z-10"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
          aria-hidden="true"
        >
          <div className="w-10 h-10 bg-primary-brown rounded-full flex items-center justify-center shadow-md">
            <GripVertical className="w-5 h-5 text-off-white" />
          </div>
        </div>
      </div>
      <div className="p-6 text-center">
        <p className="text-dark-grey text-lg font-light">{project.caption[language]}</p>
      </div>
    </div>
  )
}
