"use client"

import { useState, useEffect } from "react"

interface CardSize {
  cardWidth: number
  cardHeight: number
  maxVisible: number
}

export function useResponsiveCardSize(): CardSize {
  const [size, setSize] = useState<CardSize>({ cardWidth: 480, cardHeight: 300, maxVisible: 5 })

  useEffect(() => {
    function update() {
      const w = window.innerWidth
      if (w < 400) {
        const cw = Math.min(w - 60, 280)
        setSize({ cardWidth: cw, cardHeight: Math.round(cw * 0.67), maxVisible: 3 })
      } else if (w < 640) {
        const cw = Math.min(w - 80, 320)
        setSize({ cardWidth: cw, cardHeight: Math.round(cw * 0.67), maxVisible: 3 })
      } else if (w < 1024) {
        setSize({ cardWidth: 420, cardHeight: 280, maxVisible: 5 })
      } else {
        setSize({ cardWidth: 540, cardHeight: 360, maxVisible: 5 })
      }
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return size
}
