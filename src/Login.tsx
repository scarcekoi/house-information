import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Lgn.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)