import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Carousel from '../components/carousel'
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

        <div className='button-container'>
          <button className='button'>DONATE</button>
        </div>

        <section className='carousel'>
          {/* <Carousel /> */}
          <h1 className={styles.title}>CAROUSEL PLACEHOLDER</h1>
        </section>

        <section className='pink-container gift-container'>
          <div className='gift-img-container'>
              <img className='gift-img' src='gift.png' alt='wrapped gift' />
          </div>
          <div className='gift-text-container'>
              <h2 className='h2'>Our Mission</h2>
              <p className='no-space-above'>The Breast Cancer Comfort Foundation aims to offer encouragement, support and laughter to individuals whose lives have been forever changed by curative or preventative breast cancer treatment. We do this by delivering unique “Comfort Baskets” and “Chemo Comfort Bags” containing thoughtfully chosen gifts and personal care items.</p>
          </div>
        </section>

        <section className='grey-container gift-container'>
          <div className='gift-img-container'>
              <img className='gift-img' src='gift.png' alt='wrapped gift' />
          </div>
          <div className='gift-text-container'>
              <h2 className='h2'>Our Project</h2>
              <p className='no-space-above'>Our current project, “Comfort Baskets”, was created to aid those who have recently undergone breast cancer surgery, at no cost to the recipient.  We have included treatments such as chemotherapy and created “Chemo Comfort Bags”. These “Comfort Baskets and Bags“ are central to our cause, as they give individuals reassurance in knowing they are not alone. We want to inspire and help them to realize the power of their inner strength.</p>
          </div>
        </section>

        <section className='pink-container gift-container'>
          <div className='gift-img-container'>
              <img className='gift-img' src='gift.png' alt='wrapped gift' />
          </div>
          <div className='gift-text-container'>
              <h2 className='h2'>Pay It Forward</h2>
              <p className='no-space-above'>If you would like to contribute to this or any of our many other future projects, please consider making a donation. Any amount is greatly appreciated and it all goes directly to funding “Comfort Baskets” and “Chemo Comfort Bags”.</p>
          </div>
        </section>

        <div className='button-container'>
          <button className='button'>GIVE NOW</button>
        </div>

        <div className="video">
            <div className="videoContainer">
                <iframe src="https://www.youtube.com/embed/3NSI1KX-5kk"></iframe>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
