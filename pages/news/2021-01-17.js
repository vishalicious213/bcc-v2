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

        <main className={styles.main}>
            <div className='post'>
                <h2 className='no-space-below'>How We Started and What We Do</h2>
                <p className='no-space-above'>by <span>Alaha Nasari</span> | Jan 17, 2021</p>
                <p>Nearly five years ago, Breast Cancer Comfort was founded by survivor Deborah Cavolo. Like many other women, Debi felt there was an absence of community and conversation about breast cancer. Women diagnosed with breast cancer face issues that significantly impact their quality and length of life. With this in mind, BCC has since set out to address the unique needs of women through the distribution of comfort baskets. Assembled with empathy, a dash of hope, and a few sprinkles of inspiration, these baskets strive to promote the spiritual, emotional, and mental healing of breast cancer patients. BCC has partnered with numerous hospitals and rehab centers within the Northwell Health System for the delivery of baskets to patients, entirely free of charge. We highly encourage requests for baskets. After all, BCC strives to offer women the sense of comradeship and understanding they seek.</p>
            </div>
        </main>

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
          `}
        </style>
    </div>
  )
}
