import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Memory() {
  return (
    <div className={styles.container}>
        <Head>
            <title>In Memory Of | Breast Cancer Comfort Foundation</title>
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
            <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
        </Head>

        <main className={styles.main}>
            <div className='img-container'>
                <img src='/donate/in-memoriam.jpg' alt='' />
            </div>

            <section className='pink-container'>
                <h2 className='no-space-below mem-h2'>Make a gift in honor of a special person while helping others. Their name will be honored below on our memorial wall.</h2>
                <p>To make a gift in honor of someone special click the donate button below and in the message section enter the name of that special person and a message if you would like to add one.</p>
            </section>

            <section className='memorial-list'>
                    <h2 className='grey mem-h2'><img src='/gift.png' />Walter Voight, FDNY</h2>
                    <h2 className='pink mem-h2'><img src='/gift.png' />Dave Goldman</h2>
                    <h2 className='grey mem-h2'><img src='/gift.png' />Michelle Weissman</h2>
                    <h2 className='pink mem-h2'><img src='/gift.png' />Ariel Bronfman</h2>
                    <h2 className='grey mem-h2'><img src='/gift.png' />Gilbert Bogis</h2>
            </section>
        </main>

        <style jsx>
            {`
            .mem-h2 {
                font-weight: 500;
            }

            .pink {
                color: white;
                background-color: #b01e65;
                margin: 0;
                padding: .5rem .5rem .5rem 2.5rem;
                display: flex;
            }

            .grey {
                color: white;
                background-color: #292c2f;
                margin: 0;
                padding: .5rem .5rem .5rem 2.5rem;
                display: flex;
            }

            .memorial-list img {
                width: 1.5rem;
                height: 1.75rem;
                margin: 0 2rem 0 0;
            }

            // 768 PX

            @media only screen and (min-width: 768px) {
                .memorial-list img {
                    margin: 0 2rem;
                }

                .pink {
                    padding: .5rem 0 .5rem 5rem;
                }
    
                .grey {
                    padding: .5rem 0 .5rem 5rem;
                }
            }
            `}
        </style>
    </div>
  )
}
