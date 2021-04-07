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

            <section className='grey-container gift-container'>
                <div className='gift-text-container'>
                    <p>Do you want to help others fighting their battle with breast cancer?</p>
                    <p>You can do this by sharing your story. Sometimes hearing the story of someone who has been through breast cancer can help brighten up a persons day and give them encouragement and support though the process. You can share much needed advice and tips from first hand experience. You story will be shared on our website to provide support for all our readers. You can share who you are or you can share anonymously.</p>
                    <p>If you would like to share your story email us at <a className='email'>info@breastcancercomfort.org</a>.</p>
                </div>
            </section>
        </main>
        
        <Footer />

        <style jsx>
            {`
            .email {
                color: #ff99cc;
            }

            .email:hover {
                text-decoration: underline;
            }
            `}
        </style>
    </div>
  )
}
