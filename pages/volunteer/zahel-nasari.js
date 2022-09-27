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
                <h1 className='invisible-text'>Zahel Nasari</h1>
                <h2 className='invisible-text'>Volunteer</h2>
            </div>

            <section className='bio'>
                <div className='bio-img-container'>
                    <img className='bio-img' src='/volunteer/zahel-profile.jpg' alt='Zahel Nasari' />
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
            color: white;
            background-image: url('/volunteer/profile-bg.jpg');
            background-size: cover;
            background-position: center center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 40rem;
          }

          h1 {
            font-size: 5vw;
            padding-bottom: 1rem;
            margin-bottom: 0;
          }

          h2 {
            font-size: 3.5vw;
            margin-top: 0;
          }
          
          .invisible-text {
            width: 100%;
            position: relative;
            text-align: center;
            background: rgba(0,0,0,0.3);
          }
          `}
        </style>
    </div>
  )
}
