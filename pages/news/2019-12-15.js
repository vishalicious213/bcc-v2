import Head from 'next/head'
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
                <h2 className='no-space-below'>What to do when the end of the year is here and you are not ready</h2>
                <p className='no-space-above'>by <span>Debi Cavolo</span> | Dec 15, 2019</p>
                <p>2019 will be leaving us soon and I for one am not ready!! I just got used to the fact that New Year's Day was over and I would now have to correct every date by putting a 9 instead of an 8. Valentine's Day has passed? When exactly was that, because I must have blinked. I wanted to buy a heart full of chocolate but now all I can get is a bag full of M&M’s on sale.</p> 
                <p>I love pink! I love Valentine's Day and now I have to start looking towards St. Patrick’s Day. I was not Irish, I should tell you that first, BUT I found out through 23 and Me that - lo and behold - I AM Irish, so now I should have bought something green but Easter and Passover are approaching so I have to start thinking about that.</p> 
                <p>WHAT?? Those holidays passed also? This is ridiculous, next you are going to tell me I missed summer and Halloween and Thanksgiving. Well, Christmas and Hanukkah are next week so before they pass me by and its too late, I want to wish all of you a happy holiday season. May your days be warm and your drinks be cold (or the other way around lol ). I wish for you gratitude and peace, I wish acceptance and kindness, I wish support and laughter. In other words, have an amazing few weeks and start practicing your 2020’s! 🙂</p>
            </div>
        </main>

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
