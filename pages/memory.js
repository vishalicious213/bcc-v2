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
            <div className='img-container'>
                <img src='/donate/in-memoriam.jpg' alt='' />
            </div>

            <section className='pink-container'>
                <h2 className='no-space-below mem-h2'>Make a gift in honor of a special person while helping others. Their name will be honored below on our memorial wall.</h2>
                <p>To make a gift in honor of someone special click the donate button below and in the message section enter the name of that special person and a message if you would like to add one.</p>
            </section>

            <section>
                <ul>
                    <li>Walter Voight, FDNY</li>
                    <li>Dave Goldman</li>
                    <li>Michelle Weissman</li>
                    <li>Ariel Bronfman</li>
                    <li>Gilbert Bogis</li>
                </ul>
            </section>
        </main>

        <Footer />

        <style jsx>
            {`
            .mem-h2 {
                font-weight: 500;
            }
            `}
        </style>
    </div>
  )
}
