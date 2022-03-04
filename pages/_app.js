import Nav from '../components/nav'
import Footer from '../components/footer'
import ContactForm from '../components/contact'
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css" // import font awesome css
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false // don't add css automatically (we imported above)

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
