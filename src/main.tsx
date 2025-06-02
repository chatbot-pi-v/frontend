import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

import { RouterProvider } from 'react-router-dom';
import { routes } from '@src/routes/routes';
import { AuthProvider } from '@src/contexts/auth'; // Ajuste o caminho conforme necessário

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </StrictMode>,
)