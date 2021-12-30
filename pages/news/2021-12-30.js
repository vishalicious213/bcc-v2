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
                <h2 className='no-space-below'>BCC Collaboration with Memorial Sloan Kettering</h2>
                <p className='no-space-above'>by <span>Amina Nasari & Zahel Nasari</span> | Dec 30, 2021</p>
                <p>The Breast Cancer Comfort Foundation is proud to announce its most recent collaboration with <a className='link' target="_blank" rel="noopener" href='https://www.mskcc.org/'>Memoral Sloan Kettering</a> (MSK), New York City’s largest cancer treatment center. MSK has devoted more than 135 years to exceptional patient care, influential educational programs, and innovative research to discover more effective strategies to prevent, control, and ultimately cure cancer. <a className='link' target="_blank" rel="noopener" href='https://www.ccny.cuny.edu/csom'>CUNY School of Medicine</a> students who are members of the <a className='link' target="_blank" rel="noopener" href='https://www.amwa-doc.org/'>American Medical Women’s Association</a>, a professional advocacy and educational organization of women physicians and medical students, delivered around 20 bags and 5 baskets to breast cancer patients who are currently undergoing chemotherapy. The personal, hand-made comfort baskets are intended to offer confidence and hope to those experiencing or recovering from their difficult journey. We will continue to partner with MSK in the future and extend our outreach efforts.</p>

                <div className='img-container'>
                  <a target="blank" rel="noopener" href="https://www.breastcancercomfort.org/news/mskcc-4.jpg">
                    <img src='/news/mskcc-4.jpg' alt='CUNY School of Medicine students at Memorial Sloan Kettering delivering Breast Cancer Comfort gift bags and comfort baskets for patients' />
                  </a>
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
                    <a className='img-gallery-link' target="blank" rel="noopener" href="https://www.breastcancercomfort.org/news/mskcc-1.jpg">
                        <img className='gallery-img'  src='/news/mskcc-1.jpg' alt='Memorial Sloan Kettering patient room with Breast Cancer Comfort gift bag' />
                    </a>
                    <a className='img-gallery-link' target="blank" rel="noopener" href="https://www.breastcancercomfort.org/news/mskcc-2.jpg">
                        <img className='gallery-img' src='/news/mskcc-2.jpg' alt='Nurses from Memorial Sloan Kettering with Breast Cancer Comfort gift bags' />
                    </a>
                    <a className='img-gallery-link' target="blank" rel="noopener" href="https://www.breastcancercomfort.org/news/mskcc-3.jpg">
                        <img className='gallery-img' src='/news/mskcc-3.jpg' alt='Memorial Sloan Kettering patient room with Breast Cancer Comfort gift bag' />
                    </a>
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

          img:hover {
            outline: 2px solid #ff99cc;
          }

          .img-gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 2rem;
          }

          .img-gallery-link {
            width: 30%;
          }

          .gallery-img {
            width: 100%;
          }
          `}
        </style>
    </div>
  )
}
