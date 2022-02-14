import Nav from '../components/nav'
import Footer from '../components/footer'
import ContactForm from '../components/contact'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <ContactForm />
      <Footer />
    </>
  )
}

export default MyApp
