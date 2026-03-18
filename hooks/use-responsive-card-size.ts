"use client"

import { useState, useEffect } from "react"

interface CardSize {
  cardWidth: number
  cardHeight: number
}

export function useResponsiveCardSize(): CardSize {
  const [size, setSize] = useState<CardSize>({ cardWidth: 480, cardHeight: 300 })

  useEffect(() => {
    function update() {
      const w = window.innerWidth
      if (w < 640) {
        setSize({ cardWidth: 280, cardHeight: 180 })
      } else if (w < 1024) {
        setSize({ cardWidth: 380, cardHeight: 240 })
      } else {
        setSize({ cardWidth: 480, cardHeight: 300 })
      }
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return size
}
