import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function Boobtique() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boobtique | Breast Cancer Comfort Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={styles.main}>
          <div className='img-container'>
            <img src='/boobtique/boobtique.jpg' alt='' />
          </div>

          <section className='pink-container gift-container'>
            <div className='gift-img-container'>
                <img className='gift-img' src='gift.png' alt='wrapped gift' />
            </div>
            <div className='gift-text-container'>
                <h2 className='h2'>Welcome to our Boobtique!</h2>
                <p className='no-space-above'>We are getting ready to open our doors to the public. If you know someone who is undergoing treatment for breast cancer and you don’t know what to give, then let us help you.</p>
                <p>Handmade hearts, comfort bags, and custom gift baskets will be available soon. Select any one of our specialty items and we will ship to you, or anyone you choose, within 48 hours.</p>
            </div>
          </section>

          <section className='grey-container gift-container'>
            <div className='gift-img-container-top'>
                <img className='gift-img' src='gift.png' alt='wrapped gift' />
            </div>
            <div className='gift-text-container'>
            <h2 className='h2'>Have a Comfort Basket delivered</h2>
            <p>Demand for our <b>Comfort Baskets</b> have been increasing as our program is getting more popular. This makes us very proud of what we do. If you would like a basket we ask for a donation of $25 to help cover the costs of the baskets, delivery and keeping our program going.</p>
            <p>Each basket is specially-created with items hand-selected to provide comfort to individuals undergoing breast cancer treatment. These items can include a journal, pen, unflavored lip balm, tissues, mints, hand sanitizer, pocket calendar, stuffed animal, thank you cards, and handmade heart with hot/cold pack. The style of the contents may vary.</p>
            </div>
          </section>

          <section className='pink-container gift-container'>
            <div className='gift-img-container'>
                <img className='gift-img' src='gift.png' alt='wrapped gift' />
            </div>
            <div className='gift-text-container'>
                <h2 className='h2'>Chemotherapy</h2>
                <p className='no-space-above'><b>Chemo Comfort Bags</b> can include a puzzle or coloring book, pen, unflavored lip balm, tissues, mints,  pocket calendar, thank you cards, and blanket. </p>
            </div>
          </section>
      </main>

      <Footer />
    </div>
  )
}
