import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function Memory() {
  return (
    <div className={styles.container}>
        <Head>
            <title>In Memory Of | Breast Cancer Comfort Foundation</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />

        <main className={styles.main}>
            <h1 className={styles.title}>IN MEMORY OF</h1>
        </main>
        <Footer />
    </div>
  )
}
