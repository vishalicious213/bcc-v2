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
            <div className='invisible'>
                <h1 className='invisible-text'>ALICIA COSENTINO</h1>
                <h2 className='invisible-text'>Administrative Assistant</h2>
                <div className='social-media-icons'>
                    {/* <a className='li icon' target='_blank' rel='noopener' href="https://www.linkedin.com/in/vish213/"></a> */}
                    {/* <a className='tw icon' target='_blank' rel='noopener' href="https://twitter.com/BreastComfort"></a> */}
                    {/* <a className='fb icon' target='_blank' rel='noopener' href="https://www.facebook.com/breastcancercomfort/"></a> */}
                    {/* <a className='ig icon' target='_blank' rel='noopener' href="https://www.instagram.com/breastcancercomfort/"></a> */}
                </div>
            </div>

            <div className='img-container'>
                <img src='/about/alicia-bg.jpg' alt='JavaScript code image with Vish Singh, Web Developer overlaid' />
            </div>

            <section className='bio'>
                <div className='bio-img-container'>
                    <img className='bio-img' src='/about/placeholder-f.jpg' alt='Alicia Cosentino' />
                </div>

                <div className='bio-text'>
                    <p>I am a two-time breast cancer survivor.  In September of 1999 I had a left breast mastectomy and DIEP flap reconstruction and life was good for 22 years.  On July 2, 2021 during a routine mammogram, my second breast cancer was found.  On August of 2021 I had a lumpectomy and sentinel node surgery to remove a small tumor in my right breast.  I am currently finishing radiation and will be on medication for 7 years. I am a survivor, I am lucky!  I am happy to be able to be there and to help others who are going through this horrific disease.</p>
                    <p>I started volunteering about 20+ years ago for the American Cancer Society’s Relay for Life (an event that celebrates all cancer survivors) in my local area.  I had a team and we set up fundraising events locally to raise money. I loved doing this and meeting the survivors. I wound up first chairing the Survivor Dinner then moving on to be the Community Event Chair.  When my ACS family asked if I’d like to volunteer at Strides and be in the Survivor Tent I said yes.  Nothing compares to being able to talk to people who you can totally empathize with, it’s healing on both sides.</p>
                    <p>About 10 years ago I started volunteering, for the then newly chartered, Bethpage Central Kiwanis Club which is part of Kiwanis International.  I have been on the Board for 9 years and was the Club President for two years.  I continue to be on their Board and volunteer with them as well.</p>
                    <p>I met Debi Cavolo and Breast Cancer Comfort when my Surgeon’s office handed me one of their baskets after my recent surgery.  I knew I felt the love coming from this gift and knew I needed to work with them to help others, like myself, who are going through this.  We all walk together and we all need to feel that we are not alone.  No one understands this journey unless you’ve been there.</p>

                    <p className='no-space-below'>Alicia Cosentino</p>
                    <p className='no-space-above'>10/22/2021</p>

                    {/* <h3>SKILLS</h3>
                    <ul>
                    </ul>

                    <h3>LINKS</h3>
                    <ul>
                      <li><a className='link' target='_blank' rel='noopener' href='https://neophyte.home.blog/'>Redo From Start (Coding Blog)</a></li>
                    </ul> */}
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

          .no-space-above {
            margin-top: 0;
          }
          
          .no-space-below {
            margin-bottom: 0;
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
            color: #b83574;
          }

          h2 {
            font-size: 3.5vw;
            color: black;
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
