import Header from '../components/Generics/Header'
import Footer from '../components/Generics/Footer'
import { PrimeReactProvider } from 'primereact/api'
import App from '../App'

export default function IndexLayout() {
  return (
    <PrimeReactProvider>
      <Header />
      <main>
        <App />
      </main>
      <Footer />
    </PrimeReactProvider>
  )
}
