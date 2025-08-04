"use client"
import Image from "next/image"
import { useEffect, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  language: "sv" | "en"
}

const slidesData = {
  sv: [
    {
      src: "/IMG_1568.jpg",
      alt: "Modern wooden bench in a public space",
      headline: "Anpassade Interiörer",
      subheadline: "Från idé till installation.",
    },
    {
      src: "/IMG_1600.jpg",
      alt: "Indoor seating area with black pergola and wooden furniture",
      headline: "Lokalt Tillverkade Möbler",
      subheadline: "Byggda med omsorg.",
    },
    {
      src: "/707.8.jpg",
      alt: "Luxurious hotel room with warm brown tones and elegant lighting",
      headline: "Eleganta Interiörer",
      subheadline: "Byggda för gästfrihet.",
    },
    {
      src: "/clarion-tapto-hotel-room.jpeg", // New image
      alt: "Luxurious hotel room with warm lighting and decorative pillows",
      headline: "Hotellrumslösningar",
      subheadline: "Från sänggavlar till textilier.",
    },
    {
      src: "/nykvarn.jpg",
      alt: "Luxurious bedroom with blue velvet headboard and quilted duvet",
      headline: "Hotellrumslösningar",
      subheadline: "Från sänggavlar till textilier.",
    },
    {
      src: "/DAR-06.jpg",
      alt: "Restaurant interior with red velvet booth and Colosseum mural",
      headline: "Möbler som Nya",
      subheadline: "Omklädnad och renovering.",
    },
    {
      src: "/cafe-restaurant-interior.jpeg",
      alt: "Inviting cafe or restaurant interior with warm wooden accents",
      headline: "Café & Restaurangdesign",
      subheadline: "Varma och funktionella utrymmen.",
    },
    {
      src: "/outdoor-cafe.jpeg",
      alt: "Outdoor cafe with people enjoying coffee",
      headline: "Uteserveringar med Stil",
      subheadline: "Inbjudande utomhusmiljöer.",
    },
    {
      src: "/modern-interior-bar.jpeg",
      alt: "Modern interior bar with wooden details",
      headline: "Bar & Restaurangmiljöer",
      subheadline: "Funktionell design.",
    },
    {
      src: "/sophisticated-bar-interior.jpeg",
      alt: "Sophisticated bar interior with marble counter and arched window",
      headline: "Exklusiva Bar & Lounger",
      subheadline: "Unika atmosfärer.",
    },
    {
      src: "/modern-office-space.jpeg",
      alt: "Spacious modern office or communal area with slatted wooden ceiling",
      headline: "Kontors- & Samarbetsytor",
      subheadline: "Produktiva och inspirerande.",
    },
    {
      src: "/Screenshot 2025-07-12 at 20.11.33.png",
      alt: "Modern curved reception desk with wooden slats",
      headline: "Ditt Projekt, Helt Hanterat",
      subheadline: "En partner från start till mål.",
    },
    {
      src: "/granite_floor_by_jonathan2478resource.jpg",
      alt: "Checkered granite floor with reflections",
      headline: "Från Skiss till Verklighet",
      subheadline: "Din vision, vår expertis.",
    },
    {
      src: "/sundbyberg-living-dining.jpeg", // New image
      alt: "Bright open living and dining space with exposed brick wall and balcony",
      headline: "Inredningslösningar Bostäder",
      subheadline: "Funktionella och estetiska hem.",
    },
    {
      src: "/nynashamn-staircase-hallway.jpeg", // New image
      alt: "Modern residential interior with wooden staircase and blue armchair",
      headline: "Design för Varje Hörn",
      subheadline: "Varje detalj räknas.",
    },
  ],
  en: [
    {
      src: "/IMG_1568.jpg",
      alt: "Modern wooden bench in a public space",
      headline: "Custom Interiors",
      subheadline: "From idea to installation.",
    },
    {
      src: "/IMG_1600.jpg",
      alt: "Indoor seating area with black pergola and wooden furniture",
      headline: "Locally Crafted Furniture",
      subheadline: "Built with care.",
    },
    {
      src: "/707.8.jpg",
      alt: "Luxurious hotel room with warm brown tones and elegant lighting",
      headline: "Elegant Interiors",
      subheadline: "Built for hospitality.",
    },
    {
      src: "/clarion-tapto-hotel-room.jpeg", // New image
      alt: "Luxurious hotel room with warm lighting and decorative pillows",
      headline: "Hotel Room Solutions",
      subheadline: "From headboards to textiles.",
    },
    {
      src: "/nykvarn.jpg",
      alt: "Luxurious bedroom with blue velvet headboard and quilted duvet",
      headline: "Hotel Room Solutions",
      subheadline: "From headboards to textiles.",
    },
    {
      src: "/DAR-06.jpg",
      alt: "Restaurant interior with red velvet booth and Colosseum mural",
      headline: "Furniture Reimagined",
      subheadline: "Reupholstery and renovation.",
    },
    {
      src: "/cafe-restaurant-interior.jpeg",
      alt: "Inviting cafe or restaurant interior with warm wooden accents",
      headline: "Cafe & Restaurant Design",
      subheadline: "Warm and functional spaces.",
    },
    {
      src: "/outdoor-cafe.jpeg",
      alt: "Outdoor cafe with people enjoying coffee",
      headline: "Stylish Outdoor Seating",
      subheadline: "Inviting outdoor environments.",
    },
    {
      src: "/modern-interior-bar.jpeg",
      alt: "Modern interior bar with wooden details",
      headline: "Bar & Restaurant Interiors",
      subheadline: "Functional design.",
    },
    {
      src: "/sophisticated-bar-interior.jpeg",
      alt: "Sophisticated bar interior with marble counter and arched window",
      headline: "Exclusive Bars & Lounges",
      subheadline: "Unique atmospheres.",
    },
    {
      src: "/modern-office-space.jpeg",
      alt: "Spacious modern office or communal area with slatted wooden ceiling",
      headline: "Office & Collaborative Spaces",
      subheadline: "Productive and inspiring.",
    },
    {
      src: "/Screenshot 2025-07-12 at 20.11.33.png",
      alt: "Modern curved reception desk with wooden slats",
      headline: "Your Project, Fully Managed",
      subheadline: "One partner from start to finish.",
    },
    {
      src: "/granite_floor_by_jonathan2478resource.jpg",
      alt: "Checkered granite floor with reflections",
      headline: "From Sketch to Reality",
      subheadline: "Your vision, our expertise.",
    },
    {
      src: "/sundbyberg-living-dining.jpeg", // New image
      alt: "Bright open living and dining space with exposed brick wall and balcony",
      headline: "Residential Interiors",
      subheadline: "Functional and aesthetic homes.",
    },
    {
      src: "/nynashamn-staircase-hallway.jpeg", // New image
      alt: "Modern residential interior with wooden staircase and blue armchair",
      headline: "Design for Every Corner",
      subheadline: "Every detail counts.",
    },
  ],
}

export default function Hero({ language }: HeroProps) {
  const [current, setCurrent] = useState(0)
  const slides = slidesData[language]

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative w-full overflow-hidden group" style={{ height: "calc(100vh - 100px)" }}>
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src || "/placeholder.svg"}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0} // Prioritize loading for the first image
          />
          {/* Dark translucent overlay */}
          <div className="absolute inset-0 bg-black opacity-30"></div>

          {/* Text overlay - hidden by default, visible on group hover */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-16 text-center text-off-white opacity-0 transition-all duration-500 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
            <h3 className="text-2xl md:text-4xl font-serif mb-2 md:mb-4">{slide.headline}</h3>
            <p className="text-sm md:text-lg font-light">{slide.subheadline}</p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-off-white hover:bg-white/20 hover:text-off-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-off-white hover:bg-white/20 hover:text-off-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </Button>
    </section>
  )
}
