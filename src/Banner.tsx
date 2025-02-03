import type React from "react"
import { useState, useEffect } from "react"

interface BannerProps {
  currentHouse: string
}

const Banner: React.FC<BannerProps> = ({ currentHouse }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setIsVisible(currentScrollPos < 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return <div className={`banner ${isVisible ? "" : "hidden"}`}>Current House Cup: {currentHouse}</div>
}

export default Banner