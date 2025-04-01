import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

import { RouterProvider } from 'react-router';
import { routes } from '@src/routes/routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
