import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Teammate() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Team Profile | Breast Cancer Comfort Foundation</title>
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
            <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
        </Head>

        <main className={styles.main} id='main'>
            <div className='invisible'>
                <h1 className='invisible-text'>Debi Cavolo</h1>
                <h2 className='invisible-text'>CEO & Founder</h2>
                <div className='social-media-icons'>
                    <a className='li icon' target='_blank' rel='noopener' href="https://www.linkedin.com/in/debi-cavolo-671a78132/"></a>
                    {/* <a className='tw icon' target='_blank' rel='noopener' href="https://twitter.com/BreastComfort"></a> */}
                    {/* <a className='fb icon' target='_blank' rel='noopener' href="https://www.facebook.com/breastcancercomfort/"></a> */}
                    {/* <a className='ig icon' target='_blank' rel='noopener' href="https://www.instagram.com/breastcancercomfort/"></a> */}
                </div>
            </div>

            <div className='img-container'>
                <img src='/about/debi-bg.jpg' alt='Nurse donning safety gear, Debi Cavolo, Founder & CEO overlaid' />
            </div>

            <section className='bio'>
                <div className='bio-img-container'>
                    <img className='bio-img' src='/about/debi-profile.jpg' alt='Debi Cavolo' />
                </div>

                <div className='bio-text'>
                    <p>Debi Cavolo is the CEO and Founder of The Breast Cancer Comfort Foundation (AKA Breast Cancer Comfort). Breast Cancer Comfort was created in 2015 to provide baskets and bags to women undergoing treatment for breast cancer.</p>
                    <p>Debi believes that every woman (or man) undergoing treatment deserves comfort and compassion as they begin their journey. Coming from experience, Debi knows first-hand the feelings of isolation and fear after surgery; the time when no one asked her about the loss of her breasts but asked about the level of her physical pain.</p>
                    <p>To date, Debi has supplied over 1900 “comfort” baskets and bags, gaining the support of a major healthcare system as well as doctors and cancer centers from all over Long Island. This would not have been possible without the help of her team and especially her sister, Susan Weber.</p>
                    <p>Debi is a Certified Registered Nurse, specializing in OR and Mental Illness. An Adjunct professor at both Molloy College and Adelphi University, Debi is a proud recipient of several awards for her work. Debi holds a BSN, with Magna Cum Laude and MSN in Nursing Education from Excelsior College, graduating with a 4.0GPA.</p>
                    <p>Debi has been featured on PIX11 for her work with breast cancer as well as NEWS12 as hero of the month. She has been honored as Mets batgirl and featured at Ducks games, throwing out the first pitch.</p>

                    {/* <h3>SKILLS</h3> */}
                    {/* <h3>LINKS</h3> */}
                </div>
            </section>
        </main>

        <style jsx>
          {`
          #main {
            outline: 1px solid white;
            position: relative;
          }

          .bio {
            width: 100%;
            color: white;
          }

          .bio-img-container {
            margin-top: 3rem;
            display: flex;
            justify-content: center;
            width: 80%;
            margin: 3rem auto;
          }

          .bio-img {
            width: 100%;
          }
          
          .bio-text {
            width: 80%;
            margin: 3rem auto;
          }

          h2, h3 {
            font-weight: 500;
            color: #ff99cc;
          }
          
          .link {
            text-decoration: underline;
          }

          .link:hover {
            color: #b83574;
          }

          p, li {
            color: gainsboro;
          }

          span {
            color: #b83574;
          }

          .invisible {
            position: absolute;
            top: 6vw;
            left: 50%;
            color: white;
          }

          h1 {
            font-size: 5vw;
          }

          h2 {
            font-size: 3.5vw;
            color: white;
          }
          
          .invisible-text {
            position: relative;
            left: -50%;
            text-align: center;
          }

          .social-media-icons {
            position: relative;
            left: -50%;
            display: flex;
            justify-content: center;
          }

          .icon {
              width: 2.5rem;
              height: 2.5rem;
              border-radius: 50%;
          }

          .fb {
              background: url('/fb.png') no-repeat;
              background-position: center;
              background-size: contain;
          }

          .fb:hover {
              background: url('/fb2.png') no-repeat;
              background-position: center;
              background-size: contain;
          }

          .li {
              background: url('/li.png') no-repeat;
              background-position: center;
              background-size: contain;
          }

          .li:hover {
              background: url('/li2.png') no-repeat;
              background-position: center;
              background-size: contain;
          }

          .tw {
              background: url('/twitter.jpg') no-repeat;
              background-position: center;
              background-size: contain;
          }

          .tw:hover {
              background: url('/twitter2.jpg') no-repeat;
              background-position: center;
              background-size: contain;
          }

          .ig {
              background: url('/ig.png') no-repeat;
              background-position: center;
              background-size: contain;
          }

          .ig:hover {
              background: url('/ig2.png') no-repeat;
              background-position: center;
              background-size: contain;
          }
          `}
        </style>
    </div>
  )
}
