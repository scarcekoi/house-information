import type React from "react"

interface BannerProps {
  currentHouse: string
}

const Banner: React.FC<BannerProps> = ({ currentHouse }) => {
  return <div className="banner">Current House Cup: {currentHouse}</div>
}

export default Banner