import Head from 'next/head'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
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
                <h2 className='no-space-below'>BCC Collaboration with Memorial Sloan Kettering</h2>
                <p className='no-space-above'>by <span>Maeryam Nasari & Zahel Nasari</span> | Dec 1, 2021</p>
                <p>The Breast Cancer Comfort Foundation is proud to announce its most recent collaboration with <a className='link' target="_blank" rel="noopener" href='https://www.mskcc.org/'>Memoral Sloan Kettering</a>, NYC’s largest cancer treatment center. <a className='link' target="_blank" rel="noopener" href='https://www.ccny.cuny.edu/csom'>CUNY School of Medicine</a> students who are members of the <a className='link' target="_blank" rel="noopener" href='https://www.amwa-doc.org/'>American Medical Women’s Association</a> delivered around 20 bags and 5 baskets to breast cancer patients who are currently undergoing chemotherapy.</p>

                <div className='img-container'>
                    <img src='/news/mskcc-4.jpg' alt='' />
                </div>

                <p>Pictured:</p>
                <ul>
                  <li>Meaghan Lane, Assistant Manager at Memorial Sloan Kettering</li>
                </ul>

                <p>CUNY School of Medicine Students:</p>
                <ul>
                  <li>Rachelle Monteau</li>
                  <li>Udeme Udom</li>
                  <li>Layla Morgan</li>
                  <li>Amina Nasari</li>
                  <li>Mariam Qureishi</li>
                </ul>

                <div className='img-gallery'>
                    <img className='gallery-img' src='/news/mskcc-1.jpg' alt='' />
                    <img className='gallery-img' src='/news/mskcc-2.jpg' alt='' />
                    <img className='gallery-img' src='/news/mskcc-3.jpg' alt='' />
                </div>

            </div>
        </main>

        {/* <Footer /> */}

        <style jsx>
          {`
          li {
            color: gainsboro;
          }

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

          .img-gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 2rem;
          }

          .gallery-img {
            width: 30%;
          }
          `}
        </style>
    </div>
  )
}
