import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import FB from '../../components/fb'

export default function Post() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Events | Breast Cancer Comfort Foundation</title>
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
            <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
        </Head>

        {/* <Nav /> */}

        <main className={`${styles.main} main-container`}>
            <div className='post'>
                <h1 className='no-space-below'>Fundraiser at Scrubz</h1>
                <p className='no-bot'>Thursday | <span>May 12, 2022</span> (7 - 9 pm)</p>
                <p className='no-top no-bot'>RSVP required by <span>April 30, 2022</span></p>
                <p className='no-top no-bot'>Contact: Alicia @ <span>onthego44@yahoo.com</span></p>
                <p className='no-top'>Call or text <span>(516) 695-2076 </span>for more information!</p>
                <div className='poster'>
                  <img src='/events/2022-05-12-scrubz.jpg' alt='Breast Cancer Comfort fundraiser with Scrubz in Farmingdale NY' />
                </div>
            </div>

            <FB />
        </main>

        {/* <Footer /> */}

        <style jsx>
          {`
          .main-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .post {
            width: 80%;
            margin: 3rem 0 auto;
            color: white;
          }

          h1 {
            font-weight: 500;
            color: #ff99cc;
          }

          p {
            color: gainsboro;
            font-size: 1.25rem;
          }

          span {
            color: #b83574;
          }

          .no-top {
            margin-top: 0;
          }

          .no-bot {
            margin-bottom: .25rem;
          }

          .poster {
            width: 100%;
            margin-bottom: 2rem;
          }

          .poster img {
            width: 100%;
          }
          
          @media only screen and (min-width: 1024px) {
            .main-container {
              justify-content: space-between;
              width: 90%;
              margin: 0 auto;
            }

            .post {
              width: calc(100% - 380px);
            }
          }
          `}
        </style>
    </div>
  )
}
