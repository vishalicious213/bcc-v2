import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import FB from '../../components/fb'

export default function Post() {
  return (
    <div className={styles.container}>
        <Head>
            <title>News | Breast Cancer Comfort Foundation</title>
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
            <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
        </Head>

        <main className={`${styles.main} main-container`}>
            <div className='post'>
                <h2 className='no-space-below'>Mental Health & Breast Cancer</h2>
                <p className='no-space-above'>by <span>Zahel Nasari</span> | Sep 27, 2022</p>
                <p>Receiving a breast cancer diagnosis and treatment can bring a variety of feelings, including anxiety and depression. This can affect a person's physical health as well as psychological well-being. It can feel overwhelming to manage side effects and fatigue, all while navigating concerns about day-to-day life. Hence, an individual must take care of their mental health in order to support their treatment and help them feel better physically. Additionally, bettering your mental health when you have breast cancer could improve your outlook and enhance your overall quality of life. It is important to remember that you are more than your cancer!</p>
                <p>Regardless, be gentle with yourself and look for ways to feel good inside and out. Breast cancer treatment can bring side effects such as insomnia, memory changes, and mood swings. There are many options available to help patients: prescription medication, counseling, acupuncture, massage, meditation, relaxation techniques, and physical therapy, among others. It's normal to have bad days. Some women self-blame while others feel punished. Remember, you are not alone. </p>
                <p>Some degree of stress is typical when you are living with breast cancer. It will not make your breast cancer worse or stop you from recovering. However, it is crucial to seek assistance if you find that fear, anxiety, or stress is interfering with your daily routine, sleep patterns, or relationships. You may find that your mental health support needs to be adjusted as you go through the different stages of breast cancer treatment and recovery. Even after you conclude breast cancer treatment, fear of recurrence can make it challenging to enjoy your survivorship status. Do not hesitate to try out a few different methods before choosing an option. You may discover that a variety of different approaches work best for you. Most of all, do not forget to reach out to <a className='link' href='https://www.breastcancercomfort.org/'>Breast Cancer Comfort</a> if you are ever in need of comfort baskets. Assembled with empathy, hope, and love, these baskets strive to promote the spiritual and emotional healing of breast cancer patients!</p>
            </div>

            <FB />
        </main>

        <style jsx>
          {`
          .main-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .post {
            width: 80%;
            margin: 3rem 0 auto;
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

          .link {
            text-decoration: underline;
            font-weight: bold;
          }

          @media only screen and (min-width: 1024px) {
            .main-container {
              justify-content: space-between;
              width: 90%;
              margin: 0 auto;
            }

            .post {
              width: calc(100% - 380px);
            }
          }
          `}
        </style>
    </div>
  )
}
