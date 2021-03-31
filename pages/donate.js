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
        <h1 className={styles.title}>
          DONATE
        </h1>
      </main>

      <Footer />
    </div>
  )
}
