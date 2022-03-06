import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Teammate() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Volunteer Profile | Breast Cancer Comfort Foundation</title>
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
            <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
        </Head>

        <main className={styles.main}>
            <div className='invisible'>
                <h1 className='invisible-text'>Alaha Nasari</h1>
                <h2 className='invisible-text'>Volunteer</h2>
                <div className='social-media-icons'>
                    {/* <a className='li icon' target='_blank' rel='noopener' href="https://www.linkedin.com/in/nicole-link/"></a> */}
                    {/* <a className='tw icon' target='_blank' rel='noopener' href="https://twitter.com/BreastComfort"></a> */}
                    {/* <a className='fb icon' target='_blank' rel='noopener' href="https://www.facebook.com/breastcancercomfort/"></a> */}
                    {/* <a className='ig icon' target='_blank' rel='noopener' href="https://www.instagram.com/breastcancercomfort/"></a> */}
                </div>
            </div>

            <div className='img-container'>
                <img src='/about/nicole-bg.jpg' alt='BCC collage of events' />
            </div>

            <section className='bio'>
                <div className='bio-img-container'>
                    <img className='bio-img' src='/volunteer/alaha-profile.jpg' alt='Alaha Nasari' />
                </div>

                <div className='bio-text'>
                    <p>I have performed service work for the Breast Cancer Comfort Foundation for the past five years. From leading a mental health initiative during the pandemic to assembling baskets for patients undergoing recovery, I have been closely involved with the team at BCCF. I have also played a prominent role in publishing articles for the website and local newspaper to promote our initiatives. As a current college sophomore, I am looking forward to continuing my work with the organization through involvement in outreach and fundraising events.</p>

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

          .invisible {
            position: absolute;
            top: 15vw;
            left: 50%;
            color: white;
          }

          h1 {
            font-size: 5vw;
          }

          h2 {
            font-size: 3.5vw;
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
