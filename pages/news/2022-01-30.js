import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import FB from '../../components/fb'

export default function Post() {
  return (
    <div className={styles.container}>
        <Head>
            <title>News | Breast Cancer Comfort Foundation</title>
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
            <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
        </Head>

        <main className={`${styles.main} main-container`}>
            <div className='post'>
                <h2 className='no-space-below'>About Dr. Karen Kostroff & her relationship with BCCF</h2>
                <p className='no-space-above'>by <span>Zahel Nasari</span> | Jan 30, 2022</p>
                <p>Dr. Karen Michele Kostroff (MD) is a Surgical Oncology Specialist in New Hyde Park, NY, and has over 42 years of experience in the medical field. She is one of New York’s most renowned breast cancer surgeons and is presently Chief of Breast Surgery for <a className='link' target="_blank" rel="noopener" href='https://en.wikipedia.org/wiki/Northwell_Health'>Northwell Health</a> and operates at <a className='link' target="_blank" rel="noopener" href='https://lij.northwell.edu/'>Long Island Jewish Medical Center</a>. Educated in the six-year medical honors program at Boston University, she then completed her surgical training at <a className='link' target="_blank" rel="noopener" href='https://weill.cornell.edu/'>New York Hospital-Cornell Medical Center</a>, which included a concentration on cancer surgery and breast disorders at <a className='link' target="_blank" rel="noopener" href='https://www.mskcc.org/'>Memorial Sloan-Kettering Cancer Institute</a>. This was followed by additional training in cancer surgery at <a className='link' target="_blank" rel="noopener" href='https://www.brighamandwomens.org/'>Brigham and Women’s Hospital</a> of <a className='link' target="_blank" rel="noopener" href='https://hms.harvard.edu/'>Harvard Medical School</a>.</p>
                <p>Dr. Kostroff is one of the nation’s leading breast cancer specialists in the diagnosis and treatment of women at risk for genetic-based breast cancer. She has provided consultations for hundreds of women at risk for hereditary breast cancer. The Breast Cancer Comfort Foundation is fortunate to have Dr. Kostroff as a part of our team. With her support, we can continue our mission to deliver Comfort Baskets and Chemo Comfort Bags to those who have recently undergone breast cancer surgery and remind them that they are not alone or unloved.</p>

                <div className='img-container'>
                    <img src='/news/2022-01-30.jpg' alt='' />
                </div>
            </div>

            <FB />
        </main>

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

          h2 {
            font-weight: 500;
            color: #ff99cc;
          }

          p {
            color: gainsboro;
          }

          .link {
            text-decoration: underline;
            font-weight: bold;
          }

          span {
            color: #b83574;
          }

          .img-container {
            width: 50%;
            margin: auto;
          }

          img {
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

            .img-container {
              width: 90%;
            }
          }

          @media only screen and (min-width: 1200px) {
            .img-container {
              width: 60%;
            }
          }
          `}
        </style>
    </div>
  )
}
