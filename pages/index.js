import Head from 'next/head'
import Carousel from '../components/carousel'
import Video from '../components/video'
import ShopBanner from '../components/shopBanner'
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
        <ShopBanner />

        <article className='pink-container message'>
          {/* remove this temp div after breast cancer awareness month */}
          <div className='temp'>
            <p className='no-space-below'><b>Breast Cancer Comfort Foundation</b></p>
            <p className='no-space-above'><b>September 27, 2022</b></p>
            <div className='poster'>
              <img src='/news/2022-10-01.gif' alt='' />
            </div>
          </div>
          {/* <div id='ribbon'>
            <img src='/breast-cancer-ribbon.png' />
          </div>
          <div id='message-text'>
            <p className='no-space-below'><b>Breast Cancer Comfort Foundation</b></p>
            <p className='no-space-above'><b>September 27, 2022</b></p>
            <p>Receiving a breast cancer diagnosis and treatment can bring a variety of feelings, including anxiety and depression. This can affect a person's physical health as well as psychological well-being. It can feel overwhelming to manage side effects and fatigue, all while navigating concerns about day-to-day life. Hence, an individual must take care of their mental health in order to support their treatment and help them feel better physically. Additionally, bettering your mental health when you have breast cancer could improve your outlook and enhance your overall quality of life. It is important to remember that you are more than your cancer!</p>
            <p><a className='link' href='/news/2022-09-27'>See more...</a></p>
          </div> */}
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

        .temp {
          margin: auto;
        }

        .poster {
          margin: auto;
          display: flex;
          justify-content: center;
          // height: 60vh;
        }

        .poster img {
          border-radius: 1rem;
          width: 100%;
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
