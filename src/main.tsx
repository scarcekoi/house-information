import { useState, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Banner from "./Banner"

const [currentHouse] = useState("Baldwin")

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Banner currentHouse={currentHouse} />
    <App />
  </StrictMode>,
)