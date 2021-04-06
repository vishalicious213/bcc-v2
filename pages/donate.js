import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function Donate() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Donate | Breast Cancer Comfort Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={styles.main}>
          <div className='img-container'>
            <img src='/donate/better-together.jpg' alt='' />
          </div>

          <section className='pink-container gift-container'>
            <div className='gift-img-container'>
                <img className='gift-img' src='gift.png' alt='wrapped gift' />
            </div>
            <div className='gift-text-container'>
                <h2 className='h2'>What happens when someone donates money to the Breast Cancer Comfort Foundation?</h2>
                <p className='no-space-above'>Amazing things happen! Each donation contributes to a basket or bag to be given to a patient, but in order to make the baskets we need office space and supplies.</p>
                <p>A typical day for us at the office may begin with me cleaning out my car to make room for all of the baskets we want to deliver (sometimes a hundred in one day). We have probably been to the office for several days and have put together, filled, and created the final look. My sister is our creative mind and she has to have every basket look the same and show the same quality. This sometimes takes the longest, but is most-appreciated by patients.</p>
            </div>
          </section>
      </main>

      <Footer />
    </div>
  )
}
