import Head from 'next/head'
import Carousel from '../components/carousel'
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
        {/* <article className='pink-container message'>
          <div id='ribbon'>
            <img src='/breast-cancer-ribbon.png' />
          </div>
          <div id='message-text'>
            <p className='no-space-below'><b>Breast Cancer Comfort Foundation</b></p>
            <p className='no-space-above'><b>January 17, 2021</b></p>
            <p>Nearly five years ago, Breast Cancer Comfort was founded by survivor Debi Cavolo. Like many other women, Debi felt there was an absence of community and conversation about breast cancer. Women diagnosed with breast cancer face issues that significantly impact their quality and length of life. With this in mind, BCC has since set out to address the unique needs of women through the distribution of comfort baskets. Assembled with empathy, a dash of hope, and a few sprinkles of inspiration, these baskets strive to promote the spiritual, emotional, and mental healing of breast cancer patients. BCC has partnered with numerous hospitals and rehab centers on Long Island for the delivery of baskets to patients, at no cost to the recipient . We highly encourage requests for baskets. After all, BCC strives to offer women the sense of comradeship and understanding.</p>
          </div>
        </article>

        <div className='button-container'>
          <a className='fb icon' target='_blank' rel='noopener' href="https://www.nfggive.com/donation/47-2782120">
            <button className='button'>DONATE</button>
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

        <div className='button-container'>
            <a className='fb icon' target='_blank' rel='noopener' href="https://www.nfggive.com/donation/47-2782120">
              <button className='button button-1'>NETWORK FOR GOOD</button>
            </a>

            <a className='fb icon' target='_blank' rel='noopener' href="https://venmo.com/u/breastcancercomfort">
              <button className='button'>VENMO</button>
            </a>
          </div>

        <div className='media-container'>
          <div className='video'>
              <div className='videoContainer'>
                  <iframe src="https://www.youtube.com/embed/3NSI1KX-5kk"></iframe>
              </div>
          </div>
        </div>
      </main>

      <style jsx>
        {`
        #ribbon {
          display: none;
        }

        .carousel {
          // outline: 2px solid yellow;
          width: 100%;
          background-color: #292c2f;
          padding: 1rem 0 2rem 0;
          // height: 22rem;
          position: relative;
        }

        .button {
          width: 9rem;
          height: 4rem;
        }

        .button-1 {
          margin-right: 1rem;
        }

        .media-container {
          display: flex;
          justify-content: center;
          background-color: #292c2f;
        }

        .video {
          padding-top: 2rem;
          padding-bottom: 2rem;
          width: 75%;
        }
        
        .videoContainer {
            position: relative;
            padding-top: 56.25%;
            width: 100%;
        }
        
        iframe {
            position: absolute;
            top: 0;
            border-radius: 1rem;
            border: 3px solid gainsboro;
            width: 100%;
            height: 100%;
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

          // .vid-img {
          //   outline: 1px solid red;
          //   width: 22.5%;
          //   margin: 1rem;
          //   display: flex;
          //   flex-direction: column;
          //   justify-content: space-between;
          // }

          // .vid-img img {
          //   width: 100%;
          // }

          // .side-pic {
          //   outline: 1px solid orange;
          //   width: 100%;
          //   height: 30%;
          //   border-radius: 50%;
          //   background: url('/index/baskets.jpg') no-repeat;
          //   background-position: center;
          //   background-size: contain;
          // }
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
