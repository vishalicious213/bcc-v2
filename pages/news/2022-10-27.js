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
                <h2 className='no-space-below'>What is a Preventative (Prophylactic) Mastectomy?</h2>
                <p className='no-space-above'>by <span>Zahel Nasari</span> | Oct 27, 2022</p>
                <p>In an attempt to avoid future diseases, some women at very high risk of developing breast cancer choose to have their breasts surgically removed, a procedure known as preventative mastectomy. The surgery aims to remove all breast tissue that could potentially develop breast cancer. Breast cancer may develop in the glandular tissue of the breast, particularly in the milk ducts and the milk lobules. These ducts and lobules are found in all regions of the breast tissue, including tissue just beneath the skin. The breast tissue extends from the collarbone to the lower rib margin, and from the middle of the chest, around the side, and under the arm.</p>
                <p>During a mastectomy, tissue must be removed from just beneath the skin down to the chest wall and around the borders of the chest. However, even with highly thorough and delicate surgical procedures, it is impossible to remove every milk duct and lobule, given the dimension of the breast tissue and the location of these glands beneath the skin.</p>
                <p>A preventive mastectomy might also be considered if a woman has the BRCA1 or BRCA2 genetic mutation that increases their risk of developing breast cancer, has a strong family history of breast cancer, has a diagnosis of LCIS, or history of radiation to the chest before age 30. Approximately 10% of women will develop breast cancer even though their breast tissue has been removed. But in most studies, patients did not develop breast cancer after prophylactic mastectomy. </p>
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

          .link {
            text-decoration: underline;
            font-weight: bold;
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
