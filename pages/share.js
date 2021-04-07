import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function Share() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Share Your Story | Breast Cancer Comfort Foundation</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />

        <main className={styles.main}>
            <div className='img-container'>
                <img src='/volunteer/share-your-story.png' alt='' />
            </div>
        </main>
        <Footer />
    </div>
  )
}
