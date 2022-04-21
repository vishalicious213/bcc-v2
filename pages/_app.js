import Nav from '../components/nav'
import Footer from '../components/footer'
import ContactForm from '../components/contact'
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css" // import font awesome css
import { config } from "@fortawesome/fontawesome-svg-core"
import DonateBanner from '../components/donateBanner'
config.autoAddCss = false // don't add css automatically (we imported above)
import CartProvider from '../context/Cart'
import ShoppingCart from '../components/shoppingCart'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Nav />
      <div style={{height: '3rem'}}></div>
      <ShoppingCart />
      <DonateBanner />
      <Component {...pageProps} />
      <ContactForm />
      <Footer />
    </CartProvider>
  )
}

export default MyApp
