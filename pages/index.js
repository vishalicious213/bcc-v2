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
        <article className='pink-container message'>
          <div id='ribbon'>
            <img src='/breast-cancer-ribbon.png' />
          </div>
          <div id='message-text'>
            <p className='no-space-below'><b>Breast Cancer Comfort Foundation</b></p>
            <p className='no-space-above'><b>September 1, 2021</b></p>
            <p>On October 17th, 2021, the Breast Cancer Comfort Foundation (BCCF) will be joining the <a className='link' target="_blank" rel="noopener" href='https://www.cancer.org/'>American Cancer Society</a> in <a className='link' target="_blank" rel="noopener" href='https://secure.acsevents.org/site/SPageServer?pagename=strides_msabc'>Making Strides Against Breast Cancer</a>. The event will take place at Jones Beach Field 5 from 7:00 A.M. to 11:00 A.M. Due to the coronavirus pandemic, the foundation had been unable to hold in-person fundraising events. Now, after almost 1 1⁄2 years of raising money and spreading awareness online, the BCCF is making a comeback. We are thrilled to be joined by survivors, supporters, and, most importantly, fighters.</p>
            <p>Making Strides Long Island is more than just a walk; it is a movement to assist breast cancer research and programs, supporting patients, education, and prevention. Together, as a team, we hope to raise breast cancer awareness to help reduce the stigma around the disease and have more of the world join us in overcoming cancer! The Breast Cancer Comfort Foundation strives to offer care, aid, and motivation to patients undergoing curative or preventative treatment. By supporting the American Cancer Society’s Making Strides movement, we aim to provide more help to survivors and friends.</p>
            <p>The Breast Cancer Comfort Foundation was established in 2015 by survivor Deborah Cavolo. She strove to offer wholehearted support to women undergoing breast cancer treatment by crafting care packages. Her personal, hand-made comfort baskets have successfully offered confidence and hope to those experiencing or recovering from their difficult journey.</p>
            <p>Accompanying Deborah Cavolo, we are grateful to have Ann Guarascio. She has been involved with the Breast Cancer Comfort Foundation since 2018 in a volunteer capacity, when she began to serve the bookkeeping and accounting needs of the organization. She brings twenty-plus years of experience in the non-profit sector, with a background in both financial and development roles.</p>
            <p>As a team, we invite you to join forces with the American Cancer Society – the nation’s nonprofit leader in the breast cancer fight. Join the Making Strides movement to help save lives and fund the future of breast cancer research and programs. Making Strides will be adhering to CDC, state, and local guidelines and regulations regarding COVID-19. As these change on a day-to-day basis, Making Strides will update us on requirements.</p>
            <p>Please support our team and Making Strides Against Breast Cancer by clicking on the button below!</p>
          </div>
        </article>

        <div className='button-container'>
            <a className='fb icon' target='_blank' rel='noopener' href="https://secure.acsevents.org/site/TR;jsessionid=00000000.app308b?team_id=2584056&pg=team&fr_id=100837&s_locale=en_US&et=RfVj63xp_4HduwOAiiN2dRYOcroWZKS2iWgM-NWs1lgU3YwxBH0MgQ&s_tafId=2386672&NONCE_TOKEN=E79B0F8788AB45920E08D1D89C183754">
              <button className='button'>Making Strides</button>
            </a>

            {/* <a className='fb icon' target='_blank' rel='noopener' href="https://www.nfggive.com/donation/47-2782120">
              <button className='button button-1'>NETWORK FOR GOOD</button>
            </a>

            <a className='fb icon' target='_blank' rel='noopener' href="https://venmo.com/u/breastcancercomfort">
              <button className='button'>VENMO</button>
            </a> */}
        </div>

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

        .link {
          text-decoration: underline;
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
