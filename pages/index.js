import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Breast Cancer Comfort Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <article className='pink-container'>
          <p className='no-space-below'><b>Breast Cancer Comfort Foundation</b></p>
          <p className='no-space-above'><b>January 17, 2021</b></p>

          <p>Nearly five years ago, Breast Cancer Comfort was founded by survivor Debi Cavolo. Like many other women, Debi felt there was an absence of community and conversation about breast cancer. Women diagnosed with breast cancer face issues that significantly impact their quality and length of life. With this in mind, BCC has since set out to address the unique needs of women through the distribution of comfort baskets. Assembled with empathy, a dash of hope, and a few sprinkles of inspiration, these baskets strive to promote the spiritual, emotional, and mental healing of breast cancer patients. BCC has partnered with numerous hospitals and rehab centers on Long Island for the delivery of baskets to patients, at no cost to the recipient . We highly encourage requests for baskets. After all, BCC strives to offer women the sense of comradeship and understanding.</p>
        </article>
      </main>

      <Footer />
    </div>
  )
}
