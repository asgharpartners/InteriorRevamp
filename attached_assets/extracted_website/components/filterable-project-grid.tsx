"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getAllCategories, getAllYears, getFilteredProjects, type ReferenceProject } from "@/lib/reference-data"
import ScrollReveal from "./scroll-reveal"

interface FilterableProjectGridProps {
  language: "sv" | "en"
}

const translations = {
  sv: {
    title: "Våra Projekt",
    allCategories: "Alla Kategorier",
    allYears: "Alla År",
    viewProject: "Visa Projekt",
    categories: "Kategorier", // Kept for internal use if needed, but removed from display
    years: "År", // Kept for internal use if needed, but removed from display
  },
  en: {
    title: "Our Projects",
    allCategories: "All Categories",
    allYears: "All Years",
    viewProject: "View Project",
    categories: "Categories", // Kept for internal use if needed, but removed from display
    years: "Years", // Kept for internal use if needed, but removed from display
  },
}

export default function FilterableProjectGrid({ language }: FilterableProjectGridProps) {
  const t = translations[language]
  const allCategories = getAllCategories(language)
  const allYears = getAllYears()

  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | null>(null)
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [filteredProjects, setFilteredProjects] = useState<ReferenceProject[]>([])

  useEffect(() => {
    setFilteredProjects(getFilteredProjects(selectedCategorySlug, selectedYear, language))
  }, [selectedCategorySlug, selectedYear, language])

  const handleCategoryClick = useCallback((slug: string | null) => {
    setSelectedCategorySlug(slug)
  }, [])

  const handleYearClick = useCallback((year: number | null) => {
    setSelectedYear(year)
  }, [])

  return (
    <section id="references" className="py-32 bg-off-white overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="fade" delay={100}>
          <h2 className="text-6xl md:text-7xl font-serif text-primary-brown mb-16 text-center">{t.title}</h2>
        </ScrollReveal>

        {/* Filters */}
        <div className="mb-16 space-y-8">
          {/* Category Filters */}
          <ScrollReveal direction="up" delay={200}>
            <div className="flex flex-wrap justify-center gap-3">
              {/* Removed "Categories:" label */}
              <Button
                variant={selectedCategorySlug === null ? "default" : "outline"}
                onClick={() => handleCategoryClick(null)}
                className={`${
                  selectedCategorySlug === null
                    ? "bg-primary-brown text-off-white hover:bg-dark-grey"
                    : "border-primary-brown text-primary-brown hover:bg-primary-brown hover:text-off-white"
                } px-6 py-2 rounded-full text-sm`}
              >
                {t.allCategories}
              </Button>
              {allCategories.map((category) => (
                <Button
                  key={category.slug}
                  variant={selectedCategorySlug === category.slug ? "default" : "outline"}
                  onClick={() => handleCategoryClick(category.slug)}
                  className={`${
                    selectedCategorySlug === category.slug
                      ? "bg-primary-brown text-off-white hover:bg-dark-grey"
                      : "border-primary-brown text-primary-brown hover:bg-primary-brown hover:text-off-white"
                  } px-6 py-2 rounded-full text-sm`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </ScrollReveal>

          {/* Year Filters */}
          <ScrollReveal direction="up" delay={300}>
            <div className="flex flex-wrap justify-center gap-3">
              {/* Removed "Years:" label */}
              <Button
                variant={selectedYear === null ? "default" : "outline"}
                onClick={() => handleYearClick(null)}
                className={`${
                  selectedYear === null
                    ? "bg-primary-brown text-off-white hover:bg-dark-grey"
                    : "border-primary-brown text-primary-brown hover:bg-primary-brown hover:text-off-white"
                } px-6 py-2 rounded-full text-sm`}
              >
                {t.allYears}
              </Button>
              {allYears.map((year) => (
                <Button
                  key={year}
                  variant={selectedYear === year ? "default" : "outline"}
                  onClick={() => handleYearClick(year)}
                  className={`${
                    selectedYear === year
                      ? "bg-primary-brown text-off-white hover:bg-dark-grey"
                      : "border-primary-brown text-primary-brown hover:bg-primary-brown hover:text-off-white"
                  } px-6 py-2 rounded-full text-sm`}
                >
                  {year}
                </Button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border-t border-l border-stone-100">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} direction="scale" delay={400 + index * 50}>
                <Link
                  href={`/projects/${project.id}`}
                  className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-r border-b border-stone-100 block"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image src={project.image || "/placeholder.svg"} alt={project.alt} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 bg-primary-brown text-off-white px-3 py-1 rounded-full text-xs font-semibold">
                      {project.year}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col min-h-[220px]">
                    <h3 className="font-semibold text-primary-brown mb-2 text-xl">{project.title}</h3>
                    <p className="text-dark-grey text-sm mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-stone-100 text-dark-grey px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 border-primary-brown text-primary-brown hover:bg-primary-brown hover:text-off-white text-sm bg-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 mt-auto"
                    >
                      {t.viewProject}
                    </Button>
                  </div>
                </Link>
              </ScrollReveal>
            ))
          ) : (
            <div className="col-span-full text-center text-dark-grey text-xl py-20">
              {language === "sv"
                ? "Inga projekt hittades för de valda filtren."
                : "No projects found for the selected filters."}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
