"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
  className?: string
  maxOffset?: number // New prop to limit upward movement
}

export default function ParallaxSection({
  children,
  speed = 0.5,
  className = "",
  maxOffset = -100, // Default maxOffset to -100px (moves up at most 100px)
}: ParallaxSectionProps) {
  const [offsetY, setOffsetY] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.pageYOffset
        let rate = scrolled * -speed
        // Cap the upward movement (negative value)
        rate = Math.max(rate, maxOffset) // Ensure rate is not more negative than maxOffset
        setOffsetY(rate)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, maxOffset])

  return (
    <div ref={ref} className={className}>
      <div style={{ transform: `translate3d(0, ${offsetY}px, 0)` }}>{children}</div>
    </div>
  )
}
