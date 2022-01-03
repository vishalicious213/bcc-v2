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
                <h1 className='invisible-text'>VISH SINGH</h1>
                <h2 className='invisible-text'>Web Developer</h2>
                <div className='social-media-icons'>
                    <a className='li icon' target='_blank' rel='noopener' href="https://www.linkedin.com/in/vish213/"></a>
                    {/* <a className='tw icon' target='_blank' rel='noopener' href="https://twitter.com/BreastComfort"></a> */}
                    {/* <a className='fb icon' target='_blank' rel='noopener' href="https://www.facebook.com/breastcancercomfort/"></a> */}
                    {/* <a className='ig icon' target='_blank' rel='noopener' href="https://www.instagram.com/breastcancercomfort/"></a> */}
                </div>
            </div>

            <div className='img-container'>
                <img src='/about/vish-bg.jpg' alt='BCC collage of events' />
            </div>

            <section className='bio'>
                <div className='bio-img-container'>
                    <img className='bio-img' src='/about/vish-profile.jpg' alt='Vish Singh' />
                </div>

                <div className='bio-text'>
                    <p>A 2020 transplant from New York to California, I'm also a 20+ year I/T veteran who took the steps to software design and then development. My focus is on web pages and web applications.</p>
                    <p>My start as a developer comes from Lambda School (now Bloom Institute of Technology), a coding bootcamp. The bulk of my work experience comes from helping to build a clinical EMR for nursing homes, including research, planning, writing specifications, designing the front-end and testing. I worked with clinicians and administrative staff to ensure that software met their needs and was compliant with federal and state regulations. I also worked with vendors to ensure interoperability between our software.</p>
                    <p>My role at Breast Cancer Comfort is web developer. I redesigned the organization's former WordPress site and implemented it as a custom-built Next.js website that's faster and more customizable than its previous incarnation.</p>

                    <h3>SKILLS</h3>
                    <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>JavaScript</li>
                      <li>React.js</li>
                      <li>Node.js</li>
                      <li>Next.js</li>
                      <li>Express.js</li>
                    </ul>

                    <h3>LINKS</h3>
                    <ul>
                      <li><a className='link' target='_blank' rel='noopener' href='https://neophyte.home.blog/'>Redo From Start (Coding Blog)</a></li>
                    </ul>
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
            top: 25%;
            left: 50%;
            color: white;
            font-size: 200%;
          }
          
          .invisible-text {
            position: relative;
            left: -50%;
            text-align: center;
          }

          .social-media-icons {
            display: flex;
          }

          .icon {
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
