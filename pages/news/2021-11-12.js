import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Post() {
  return (
    <div className={styles.container}>
        <Head>
            <title>News | Breast Cancer Comfort Foundation</title>
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
            <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
        </Head>

        {/* <Nav /> */}

        <main className={styles.main}>
            <div className='post'>
                <h2 className='no-space-below'>9th Annual Pink Cans 4 Cancer Fundraising Event</h2>
                <p className='no-space-above'>by <span>Ann M Rose Guarascio</span> | Nov 12, 2021</p>
                <p>BREAST CANCER COMFORT FOUNDATION INC Treasurer Ann Guarascio and Volunteer Sara Guarascio attended the 9th Annual Pink Cans 4 Cancer fundraising event on November 8 at Bar Grazie Cantina, Massapequa NY. We welcome the opportunity to forge relationships with like regional organizations.</p>
                <p>#cans4cancerNY #togetherwemakeadifference #recycling4acure</p>
                <p><a className='link' target="_blank" rel="noopener" href='https://recycling4acure.org/'>Pink Cans 4 Cancer</a> is a Garden City NY non-profit organization, and movement of hope & sustainability to help people with cancer while saving the planet!</p>
                <p>Check out our FaceBook page <a className='link' target="_blank" rel="noopener" href='https://www.facebook.com/breastcancercomfort/'>Breast Cancer Comfort</a> and the FaceBook page for <a className='link' target="_blank" rel="noopener" href='https://www.facebook.com/Cans4CancerNY'>Pink Cans 4 Cancer</a> to find out how you can #makeadifference</p>

                <div className='img-container'>
                    <img src='/news/2021-11-12.jpg' alt='' />
                </div>
            </div>
        </main>

        {/* <Footer /> */}

        <style jsx>
          {`
          .post {
            width: 80%;
            margin: 3rem auto;
            color: white;
          }

          h2 {
            font-weight: 500;
            color: #ff99cc;
          }

          p {
            color: gainsboro;
          }

          span {
            color: #b83574;
          }

          .link {
            text-decoration: underline;
            font-weight: bold;
          }

          .img-container {
              width: 50%;
              margin: 2rem auto;
          }

          img {
              width: 100%;
          }
          `}
        </style>
    </div>
  )
}
