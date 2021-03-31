import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function Volunteer() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Volunteer | Breast Cancer Comfort Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <h1 className={styles.title}>
          VOLUNTEER
        </h1>
      </main>

      <Footer />
    </div>
  )
}
