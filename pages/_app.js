import Nav from '../components/nav'
import Footer from '../components/footer'
import ContactForm from '../components/contact'
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css" // import font awesome css
import { config } from "@fortawesome/fontawesome-svg-core"
import DonateBanner from '../components/donateBanner'
config.autoAddCss = false // don't add css automatically (we imported above)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <DonateBanner />
      <Component {...pageProps} />
      <ContactForm />
      <Footer />
    </>
  )
}

export default MyApp
