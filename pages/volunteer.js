import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Bio from '../components/bio'

export default function Volunteer() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Volunteer | Breast Cancer Comfort Foundation</title>
        <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
        <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
      </Head>

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
            <a className='fb icon' target='_blank' rel='noopener' href="https://www.signupgenius.com/go/5080d4eadad2ea5fe3-volunteer">
              <button className='button'>VOLUNTEER</button>
            </a>
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
            <p>Tell us about yourself and your ideas via email: <a id='email' href='mailto:info@breastcancercomfort.org'>info@breastcancercomfort.org</a> or using our contact form, below.</p>
            </div>
          </section>

          <section className='pink-container gift-container'>
            <div className='gift-img-container'>
                <img className='gift-img' src='gift.png' alt='wrapped gift' />
            </div>
            <div className='gift-text-container'>
                <h2 className='h2'>Current Volunteers</h2>
                <p className='no-space-above'>Volunteers are the backbone of the Breast Cancer Comfort Foundation. They are present at events, create content for the website, help produce comfort baskets and engage with the community to publicize our mission. Each and every one takes on initiatives to further our cause and delivers on them. We are honored to have shared in the selfless efforts of the following talented individuals:</p>
            </div>
          </section>

          <Bio />
      </main>

      <style jsx>
        {`
            #email {
              color: white;
              font-weight: 700;
          }
          
          #email:hover {
              text-decoration: underline;
          }
                  
        .button-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            background-image: linear-gradient(#b01e65 50%, #292c2f 50%);
        }

        .button {
            color: gainsboro;
            background-color: #b01e65;
            font-family: "Lato", "Helvetica Neue", Helvetica, sans-serif;
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: .1rem;
            text-transform: uppercase;
            border: 2px solid gainsboro;
            border-radius: 1rem;
            text-align: center;
            padding: .75rem;
            width: 9rem;
            height: 4rem;
        }

        .button:hover {
            color: white;
            background-color: deeppink;
            border: 2px solid white;
            cursor: pointer;
        }

        .button:focus {
            outline: none;
        }
        `}            
        </style>
    </div>
  )
}
