import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyAwesomeApp2 } from './4-Colocar-estilos-CSS/MyAwesomeApp2'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyAwesomeApp2 />
  </StrictMode>,
)
