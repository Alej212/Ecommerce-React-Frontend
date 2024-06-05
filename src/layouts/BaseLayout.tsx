import Header from '../components/Generics/Header'
import Footer from '../components/Generics/Footer'
import App from '../App'

export default function BaseLayout() {
  return (
    <>
      <Header />
      <main className="mt-14 sm:mt-16">
        <App />
      </main>
      <Footer />
    </>
  )
}
