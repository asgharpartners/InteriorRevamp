"use client"

import { X, ArrowRight } from "lucide-react" // Removed Globe
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link" // Import Link

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  language: "sv" | "en"
  setLanguage: (lang: "sv" | "en") => void
}

const translations = {
  sv: {
    tagline: "ANPASSADE INREDNINGAR FÖR OFFENTLIGA MILJÖER",
    menuItems: [
      { label: "Start", sectionId: "hero", href: "/" },
      { label: "Portfolio", sectionId: "references", href: "/#references" }, // Updated href
      { label: "Våra Tjänster", sectionId: "services", href: "/#services" },
      { label: "Våra Produkter", sectionId: "products", href: "/#products" },
      { label: "Om Oss", sectionId: "about", href: "/#about" },
      { label: "Kontakta Oss", sectionId: "contact", href: "/#contact" },
    ],
    bookConsultation: "Boka gratis konsultation",
  },
  en: {
    tagline: "CUSTOM INTERIORS FOR PUBLIC ENVIRONMENTS",
    menuItems: [
      { label: "Start", sectionId: "hero", href: "/" },
      { label: "Portfolio", sectionId: "references", href: "/#references" }, // Updated href
      { label: "Our Services", sectionId: "services", href: "/#services" },
      { label: "Our Products", sectionId: "products", href: "/#products" },
      { label: "About Us", sectionId: "about", href: "/#about" },
      { label: "Contact Us", sectionId: "contact", href: "/#contact" },
    ],
    bookConsultation: "Book Free Consultation",
  },
}

export default function MobileMenu({ isOpen, onClose, language, setLanguage }: MobileMenuProps) {
  const t = translations[language]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleMenuItemClick = (href: string) => {
    onClose() // Close menu immediately
    // Use Next.js Link for navigation
    // For hash links, Next.js Link handles scrolling if the path is the same
    // If navigating to a different page with a hash, it will navigate and then scroll
  }

  return (
    <div
      className={`fixed inset-0 z-[100] bg-off-white transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Background Image with Blur */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Mobile menu background"
          className="w-full h-full object-cover"
          style={{ filter: "blur(8px)" }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-start pt-16 pb-8 px-6 text-center overflow-y-auto">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 text-off-white hover:text-primary-brown z-10"
        >
          <X className="w-8 h-8" />
        </Button>

        {/* Logo Image for Mobile */}
        <div className="mb-4 relative">
          {/* Background overlay to match navigation color */}
          <div
            className="absolute inset-0 bg-off-white"
            style={{
              backgroundColor: "#FFFAF6",
              mixBlendMode: "normal",
              zIndex: -1,
            }}
          />
          <Image
            src="/nils-holger-logo-new.png"
            alt="Nils Holger Logo"
            width={350} // Increased logo width for mobile
            height={105} // Increased logo height for mobile
            priority
            className="object-contain relative"
            style={{
              mixBlendMode: "multiply",
              filter: "contrast(1.2) brightness(1.1) saturate(1.1)",
              backgroundColor: "transparent",
            }}
          />
        </div>

        {/* Tagline */}
        <p className="text-off-white text-sm md:text-base uppercase tracking-wide mb-12 max-w-xs">{t.tagline}</p>

        {/* Navigation Buttons */}
        <nav className="flex flex-col space-y-6 w-full max-w-sm">
          {t.menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => handleMenuItemClick(item.href)}
              className="w-full h-14 rounded-full bg-off-white text-primary-brown hover:bg-stone-200 text-sm font-semibold flex items-center justify-between px-8 shadow-lg"
            >
              <span>{item.label}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          ))}
        </nav>

        {/* Language Toggle and Booking Button */}
        <div className="mt-12 flex flex-col space-y-4 w-full max-w-sm">
          <Button
            onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
            className="w-full h-12 rounded-full bg-primary-brown hover:bg-dark-grey text-off-white text-sm font-medium flex items-center justify-center gap-2 shadow-lg"
          >
            {/* Removed Globe icon */}
            {language === "sv" ? "SV" : "EN"}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full h-12 rounded-full bg-primary-brown hover:bg-dark-grey text-off-white border-primary-brown text-sm uppercase tracking-wide shadow-lg"
          >
            {t.bookConsultation}
          </Button>
        </div>
      </div>
    </div>
  )
}
