import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/Lgn.tsx'
import './index.css'

createRoot(document.getElementById('login')!).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)