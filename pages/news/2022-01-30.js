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
                <p className='no-space-above'>by <span>Zahel Nasari</span> | Jan 30, 2021</p>
                <p>Dr. Karen Michele Kostroff (MD) is a Surgical Oncology Specialist in New Hyde Park, NY, and has over 42 years of experience in the medical field. She is one of New York’s most renowned breast cancer surgeons and is presently Chief of Breast Surgery for the North Shore-Long Island Jewish Health System and operates at both Long Island Jewish Medical Center and North Shore University Hospital. Educated in the six-year medical honors program at Boston University, she then completed her surgical training at New York Hospital-Cornell Medical Center, which included a concentration on cancer surgery and breast disorders at Memorial Sloan-Kettering Cancer Institute. This was followed by additional training in cancer surgery at Brigham and Women’s Hospital of Harvard Medical School.</p>
                <p>Dr. Kostroff is one of the nation’s leading breast cancer specialists in the diagnosis and treatment of women at risk for genetic-based breast cancer. She has provided consultations for hundreds of women at risk for hereditary breast cancer. The Breast Cancer Comfort Foundation is lucky to have Dr. Kostroff as a part of our team. With her support, we can continue our mission to deliver Comfort Baskets and Chemo Comfort Bags to those who have recently undergone breast cancer surgery and remind them that they are not alone or unloved.</p>
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

          span {
            color: #b83574;
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
