import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppLoader from './components/App/AppLoader'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLoader />
  </StrictMode>,
)
