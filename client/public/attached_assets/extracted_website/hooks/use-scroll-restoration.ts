"use client"

import { useEffect, useCallback } from "react"
import { usePathname } from "next/navigation"

const SCROLL_POS_KEY = "scroll_position_global"

export function useScrollRestoration() {
  const pathname = usePathname()

  // Save scroll position before navigating away
  const saveScrollPosition = useCallback(() => {
    sessionStorage.setItem(SCROLL_POS_KEY, String(window.pageYOffset))
  }, [])

  // Restore scroll position when component mounts (if coming back to home page)
  useEffect(() => {
    if (pathname === "/") {
      // Only restore if on the home page (where Products section is)
      const savedScrollPos = sessionStorage.getItem(SCROLL_POS_KEY)
      if (savedScrollPos) {
        window.scrollTo({
          top: Number.parseInt(savedScrollPos, 10),
          behavior: "smooth",
        })
        sessionStorage.removeItem(SCROLL_POS_KEY) // Clear after restoring
      }
    }
    // Removed the `pathname.startsWith("/products/")` condition from here
  }, [pathname]) // Depend on pathname to re-run when route changes

  return { saveScrollPosition }
}
