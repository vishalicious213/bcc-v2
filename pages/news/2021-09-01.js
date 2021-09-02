import Head from 'next/head'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import styles from '../../styles/Home.module.css'

export default function Post() {
  return (
    <div className={styles.container}>
        <Head>
            <title>News | Breast Cancer Comfort Foundation</title>
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
            <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
        </Head>

        <main className={styles.main}>
            <div className='post'>
                <h2 className='no-space-below'>Making Strides Against Breast Cancer 2021</h2>
                <p className='no-space-above'>by <span>Maeryam Nasari & Zahel Nasari</span> | Sep 1, 2021</p>
                <p>On October 17th, 2021, the Breast Cancer Comfort Foundation (BCCF) will be joining the American Cancer Society in Making Strides Against Breast Cancer. The event will take place at Jones Beach Field 5 from 7:00 A.M. to 11:00 A.M. Due to the coronavirus pandemic, the foundation had been unable to hold in-person fundraising events. Now, after almost 1 1⁄2 years of raising money and spreading awareness online, the BCCF is making a comeback. We are thrilled to be joined by survivors, supporters, and, most importantly, fighters.</p>
                <p>Making Strides Long Island is more than just a walk; it is a movement to assist breast cancer research and programs, supporting patients, education, and prevention. Together, as a team, we hope to raise breast cancer awareness to help reduce the stigma around the disease and have more of the world join us in overcoming cancer! The Breast Cancer Comfort Foundation strives to offer care, aid, and motivation to patients undergoing curative or preventative treatment. By supporting the American Cancer Society’s Making Strides movement, we aim to provide more help to survivors and friends.</p>
                <p>The Breast Cancer Comfort Foundation was established in 2015 by survivor Deborah Cavolo. She strove to offer wholehearted support to women undergoing breast cancer treatment by crafting care packages. Her personal, hand-made comfort baskets have successfully offered confidence and hope to those experiencing or recovering from their difficult journey.</p>
                <p>Accompanying Deborah Cavolo, we are grateful to have Ann Guarascio. She has been involved with the Breast Cancer Comfort Foundation since 2018 in a volunteer capacity, when she began to serve the bookkeeping and accounting needs of the organization. She brings twenty-plus years of experience in the non-profit sector, with a background in both financial and development roles.</p>
                <p>As a team, we invite you to join forces with the American Cancer Society – the nation’s nonprofit leader in the breast cancer fight. Join the Making Strides movement to help save lives and fund the future of breast cancer research and programs. Making Strides will be adhering to CDC, state, and local guidelines and regulations regarding COVID-19. As these change on a day-to-day basis, Making Strides will update us on requirements.</p>
            </div>
        </main>
        <Footer />

        <style jsx>
          {`
          .post {
            width: 80%;
            margin: 3rem auto;
            color: white;
          }

          h2 {
            font-weight: 500;
            color: #ff99cc;
          }

          p {
            color: gainsboro;
          }

          span {
            color: #b83574;
          }
          `}
        </style>
    </div>
  )
}
