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

        <main className={styles.main}>
            <div className='img-container'>
                <img src='/about/collage-01.jpg' alt='BCC collage of events' />
            </div>

            <section className='bio'>
                <div className='bio-img-container'>
                    <img className='bio-img' src='/about/nicole-profile.jpg' alt='Nicole Link' />
                </div>

                <div className='bio-text'>
                    <section className='identifiers'>
                        <div className='who'>
                            <h2 className='no-space-below'>Nicole Link</h2>
                            <p className='no-space-above'><span>Director of Events and Fundraising</span></p>
                        </div>
                        
                        <div className='social-media-icons'>
                            <a className='li icon' target='_blank' rel='noopener' href="https://www.linkedin.com/in/nicole-link/"></a>
                            <a className='tw icon' target='_blank' rel='noopener' href="https://twitter.com/BreastComfort"></a>
                            <a className='fb icon' target='_blank' rel='noopener' href="https://www.facebook.com/breastcancercomfort/"></a>
                            <a className='ig icon' target='_blank' rel='noopener' href="https://www.instagram.com/breastcancercomfort/"></a>
                        </div>
                    </section>

                    <p>Nicole comes to Breast Cancer Comfort with a background in public relations and a passion for building community and fundraising through events.  As our Director of Events and Fundraising, Nicole assists with social media management, community/media outreach, and fundraising events.</p>

                    {/* <h3>SKILLS</h3> */}
                    {/* <h3>LINKS</h3> */}
                </div>
            </section>
        </main>

        <style jsx>
          {`
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

          .social-media-icons {
            display: flex;
          }

          .icon {
              margin: 0 .5rem;
              width: 2.5rem;
              height: 2.5rem;
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
          
          @media only screen and (min-width: 992px) {
            .identifiers {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
          }
          `}
        </style>
    </div>
  )
}
