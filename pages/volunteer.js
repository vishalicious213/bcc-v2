import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function Volunteer() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Volunteer | Breast Cancer Comfort Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={styles.main}>
          <div className='img-container'>
            <img src='/volunteer/volunteer.jpg' alt='' />
          </div>

          <section className='pink-container gift-container'>
            <div className='gift-img-container'>
                <img className='gift-img' src='gift.png' alt='wrapped gift' />
            </div>
            <div className='gift-text-container'>
                <h2 className='h2'>Make a difference!</h2>
                <p className='no-space-above'>What would we do without our volunteers? BCC is so grateful to have the input of such amazing people. They create, design, produce ideas, fund-raise, plan events, laugh, cry, dance, deliver, and most of all they keep coming back to do more!</p>
                <p>If you’d like to volunteer with Breast Cancer Comfort <b>apply here:</b></p>
            </div>
          </section>

          <div className='button-container'>
            <button className='button'>VOLUNTEER</button>
          </div>

          <section className='grey-container gift-container'>
            <div className='gift-img-container-top'>
                <img className='gift-img' src='gift.png' alt='wrapped gift' />
            </div>
            <div className='gift-text-container'>
            <h2 className='h2'>Become a part of the team!</h2>
            <p>We are looking for volunteers to:</p>
                <ul>
                    <li className='li'>Deliver baskets</li>
                    <li className='li'>Attend our meetings</li>
                    <li className='li'>Join us at fundraising events</li>
                    <li className='li'>Be excited, be inspired and Have Fun!</li>
                </ul>
            </div>
          </section>
      </main>

      <Footer />
    </div>
  )
}
