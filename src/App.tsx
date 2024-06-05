import { Routes, Route } from 'react-router-dom'
import IndexView from './views/IndexView'
import AboutView from './views/AboutView'
import ShoesView from './views/ShoesView'
import SweatersView from './views/SweatersView'
import JacketsView from './views/JacketsView'
import PantsView from './views/PantsView'

export default function App() {
  return (
    <Routes>
      <Route index path="/" element={<IndexView />} />
      <Route path="/about" element={<AboutView />} />
      <Route path="/shoes" element={<ShoesView />} />
      <Route path="/sweaters" element={<SweatersView />} />
      <Route path="/jackets" element={<JacketsView />} />
      <Route path="/pants" element={<PantsView />} />
    </Routes>
  )
}
