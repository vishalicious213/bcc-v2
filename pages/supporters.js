import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function Support() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Supporters | Breast Cancer Comfort Foundation</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />

        <main className={styles.main}>
            <div className='img-container'>
                <img src='/donate/supporters.png' alt='' />
            </div>

            <section className='pink-container'>
                <h2 className='no-space-below'>Thank you to our supporters!</h2>
                <p>We are lucky to have you as donors and appreciate you for investing in our organization. Because of you, we can continue our mission to deliver Comfort Baskets and Chemo Comfort Bags to those who have recently undergone breast cancer surgery and remind them that they are not alone or unloved.</p>
            </section>

            <section className='supporter-list'>
                    <h2 className='grey mem-h2'><img src='/gift.png' />Karen Kostroff, M.D., FACS</h2>
                    <h2 className='pink mem-h2'><img src='/gift.png' />Beth C. Tortolani Foundation</h2>
                    <h2 className='grey mem-h2'><img src='/gift.png' />New York Breast Cancer Reconstruction Associates</h2>
                    <h2 className='pink mem-h2'><img src='/gift.png' />AAA Northeast</h2>
                    <h2 className='grey mem-h2'><img src='/gift.png' />We Care Fund of the Nassau County Bar Association</h2>
            </section>
        </main>

        <Footer />

        <style jsx>
            {`
            .mem-h2 {
                font-weight: 500;
            }

            .pink {
                color: white;
                background-color: #b01e65;
                margin: 0;
                padding: .5rem 0 .5rem 5rem;
                display: flex;
            }

            .grey {
                color: white;
                background-color: #292c2f;
                margin: 0;
                padding: .5rem 0 .5rem 5rem;
                display: flex;
            }

            .supporter-list img {
                width: 1.5rem;
                margin: 0 2rem;
            }
            `}
        </style>
    </div>
  )
}
