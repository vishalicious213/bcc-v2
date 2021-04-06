import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function Donate() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Donate | Breast Cancer Comfort Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={styles.main}>
          <div className='img-container'>
            <img src='/donate/better-together.jpg' alt='' />
          </div>

          <section className='pink-container gift-container'>
            <div className='gift-img-container'>
                <img className='gift-img' src='gift.png' alt='wrapped gift' />
            </div>
            <div className='gift-text-container'>
                <h2 className='h2'>What happens when someone donates money to the Breast Cancer Comfort Foundation?</h2>
                <p className='no-space-above'>Amazing things happen! Each donation contributes to a basket or bag to be given to a patient, but in order to make the baskets we need office space and supplies.</p>
                <p>A typical day for us at the office may begin with me cleaning out my car to make room for all of the baskets we want to deliver (sometimes a hundred in one day). We have probably been to the office for several days and have put together, filled, and created the final look. My sister is our creative mind and she has to have every basket look the same and show the same quality. This sometimes takes the longest, but is most-appreciated by patients.</p>
            </div>
          </section>

          <section className='grey-container gift-container'>
            <div className='gift-img-container'>
                <img className='gift-img' src='gift.png' alt='wrapped gift' />
            </div>
            <div className='gift-text-container'>
                <p>I have tried to consider the needs of each patient, and our team makes the final decisions, but here’s what goes into each comfort basket:</p>
                <ul>
                    <li className='li'>Lip balm, because lips get dry in the hospital</li>
                    <li className='li'>Tissues, because sometimes we cry</li>
                    <li className='li'>A pen and a journal, because the most important thoughts and feelings are from the person writing them</li>
                    <li className='li'>Thank-you cards for the support we are given</li>
                    <li className='li'>Mints, because again, the mouth is so dry</li>
                    <li className='li'>Last, but not least, a handmade heart filled with a hot/cold pack</li>
                </ul>
                <p>The heart is a gift of love from my sister and I, we shop together and pick out the fabrics and sometimes I even go to her house and help assemble the hearts to sew but it is all <b>Susan Weber</b> that sews each one.</p>
            </div>
          </section>

          <section className='pink-container gift-container'>
            <div className='gift-img-container'>
                <img className='gift-img' src='gift.png' alt='wrapped gift' />
            </div>
            <div className='gift-text-container'>
                <p>For a small donation you win our heart, but the patients that receive these comfort baskets will feel the support from all of us.</p>
                <p>Your donation is tax deductible. The Breast Cancer Comfort Foundation Inc. is a registered 501(c)(3) organization.</p>
                <p>With a donation of $500 or more you are eligible to be added to our supporters listing on our website!</p>
                <p>Corporate donations and opportunities are welcome!</p>
            </div>
          </section>
      </main>

      <Footer />

      <style jsx>
        {`
        .li {
          margin-bottom: .25rem;
        }
        `}
      </style>
    </div>
  )
}
