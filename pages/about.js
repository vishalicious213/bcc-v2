import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About US | Breast Cancer Comfort Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={styles.main}>
          <div className='img-container'>
            <img src='/about/collage-01.jpg' alt='BCC collage of events' />
          </div>
      </main>

      <Footer />

      <style jsx>
        {`
        .img-container {
          margin: 0;
        }

        .img-container img {
          width: 100%;
        }
        `}
      </style>
    </div>
  )
}
