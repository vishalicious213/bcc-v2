import Head from 'next/head'
import Carousel from '../components/carousel'
import Video from '../components/video'
// import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'

// using dynamic import to load carousel in the client, not server, to avoid "window is not defined"
// const ShowCarousel = dynamic(
//   () => {
//     return import('../components/carousel')
//   },
//   { ssr: false }
// )

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Breast Cancer Comfort Foundation</title>
        <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
        <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
      </Head>

      <main className={styles.main}>
        <article className='pink-container message'>
          <div id='ribbon'>
            <img src='/breast-cancer-ribbon.png' />
          </div>
          <div id='message-text'>
            <p className='no-space-below'><b>Breast Cancer Comfort Foundation</b></p>
            <p className='no-space-above'><b>December 30, 2021</b></p>
            <p>The Breast Cancer Comfort Foundation is proud to announce its most recent collaboration with <a className='link' target="_blank" rel="noopener" href='https://www.mskcc.org/'>Memoral Sloan Kettering</a> (MSK), New York City’s largest cancer treatment center. MSK has devoted more than 135 years to exceptional patient care, influential educational programs, and innovative research to discover more effective strategies to prevent, control, and ultimately cure cancer. <a className='link' target="_blank" rel="noopener" href='https://www.ccny.cuny.edu/csom'>CUNY School of Medicine</a> students who are members of the <a className='link' target="_blank" rel="noopener" href='https://www.amwa-doc.org/'>American Medical Women’s Association</a>, a professional advocacy and educational organization of women physicians and medical students, delivered around 20 bags and 5 baskets to breast cancer patients who are currently undergoing chemotherapy. The personal, hand-made comfort baskets are intended to offer confidence and hope to those experiencing or recovering from their difficult journey. We will continue to partner with MSK in the future and extend our outreach efforts.</p>
            <p><a className='link' href='/news/2021-12-30'>See more...</a></p>
          </div>
        </article>

        {/* <div className='button-container'>
            <a className='fb icon' target='_blank' rel='noopener' href="https://secure.acsevents.org/site/TR;jsessionid=00000000.app308b?team_id=2584056&pg=team&fr_id=100837&s_locale=en_US&et=RfVj63xp_4HduwOAiiN2dRYOcroWZKS2iWgM-NWs1lgU3YwxBH0MgQ&s_tafId=2386672&NONCE_TOKEN=E79B0F8788AB45920E08D1D89C183754">
              <button className='button'>Making Strides</button>
            </a>

            <a className='fb icon' target='_blank' rel='noopener' href="https://www.nfggive.com/donation/47-2782120">
              <button className='button button-1'>NETWORK FOR GOOD</button>
            </a>

            <a className='fb icon' target='_blank' rel='noopener' href="https://venmo.com/u/breastcancercomfort">
              <button className='button'>VENMO</button>
            </a>
        </div> */}

        <section className='carousel'>
          <Carousel />
          {/* <ShowCarousel /> */}
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
              <p>There are two ways to donate to Breast Cancer Comfort: through <b>Network For Good</b> and through <b>Venmo</b>. Pick either one!</p>
          </div>
        </section>

        {/* News 12 video */}
        <Video vid="https://www.youtube.com/embed/3NSI1KX-5kk" />
      </main>

      <style jsx>
        {`
        #ribbon {
          display: none;
        }

        .link {
          text-decoration: underline;
          font-weight: bold;
        }

        .carousel {
          // outline: 2px solid yellow;
          width: 100%;
          background-color: #292c2f;
          padding: 1rem 0 2rem 0;
          // height: 22rem;
          position: relative;
        }

        @media only screen and (min-width: 768px) {
          .message {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
  
          #message-text {
            width: 75%;
          }
  
          #ribbon {
            display: block;
            padding-top: 1rem;
            width: 20%;
          }
  
          #ribbon img {
            width: 100%;
          }
        }

        @media only screen and (min-width: 1024px) {
          .message {
            align-items: center;
          }

          #ribbon {
            padding-top: 0;
          }
        }
        `}
      </style>
    </div>
  )
}
