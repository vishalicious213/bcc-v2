import Head from 'next/head'
import Nav from '../components/nav'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boobtique | Breast Cancer Comfort Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <h1 className={styles.title}>
          BOOBTIQUE
        </h1>
      </main>

      <footer className={styles.footer}>
        FOOTER
      </footer>
    </div>
  )
}
