import Header from '../components/generics/Header';
import Footer from '../components/generics/Footer';
import App from '../App';

export default function IndexLayout() {
  return (
    <>
      <Header />
      <main>
        <App />
      </main>
      <Footer />
    </>
  );
}
