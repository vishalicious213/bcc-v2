import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Breast Cancer Comfort Foundation</title>
        <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
        <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
        <meta http-equiv="refresh" content="0; url='https://www.breastcancercomfort.org'" />
      </Head>

      <main className={styles.main}>
        <article className='pink-container message'>
          <div id='ribbon'>
            <img src='/breast-cancer-ribbon.png' />
          </div>
          <div id='message-text'>
          <p>Redirecting to home page. Please follow <a className='link' href="https://www.breastcancercomfort.org">this link</a>.</p>
          </div>
        </article>
      </main>

      <style jsx>
        {`
        #ribbon {
          display: none;
        }

        .link {
          text-decoration: underline;
          font-weight: bold;
        }        

        @media only screen and (min-width: 768px) {
          .message {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
  
          #message-text {
            width: 75%;
          }
  
          #ribbon {
            display: block;
            padding-top: 1rem;
            width: 20%;
          }
  
          #ribbon img {
            width: 100%;
          }
        }

        @media only screen and (min-width: 1024px) {
          .message {
            align-items: center;
          }

          #ribbon {
            padding-top: 0;
          }
        }
        `}
      </style>
    </div>
  )
}
