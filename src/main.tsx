import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout'
import './assets/styles/defaults.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <BaseLayout />
    </React.StrictMode>
  </BrowserRouter>,
)
