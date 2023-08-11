import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import Home from './routes/pages/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Home />
      <h1 className="text-center text-red-500 h-full">hello</h1>
    </HelmetProvider>
  </React.StrictMode>,
)
