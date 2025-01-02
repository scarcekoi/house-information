import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './Lgn.tsx';
import './index.css';

const handleLoginSuccess = () => {
  console.log('Login was successful!');
};

createRoot(document.getElementById('login')!).render(
  <StrictMode>
    <Login onLoginSuccess={handleLoginSuccess} />
  </StrictMode>,
);