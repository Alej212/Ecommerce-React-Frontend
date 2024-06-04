import { BrowserRouter, Routes, Route } from 'react-router-dom/dist'
import Index from './views/IndexView'
import About from './views/AboutView'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" Component={Index} />
        <Route path="/about" Component={About} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
