import React from 'react'
import ReactDOM from 'react-dom/client'
import IndexLayout from './layouts/IndexLayout.tsx'
// import './assets/styles/defaults.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IndexLayout />
  </React.StrictMode>,
)
