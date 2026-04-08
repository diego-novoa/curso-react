import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp2 } from './6- Mostrar-listados-elementos/FirstStepsApp2'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepsApp2 />
  </StrictMode>,
)
