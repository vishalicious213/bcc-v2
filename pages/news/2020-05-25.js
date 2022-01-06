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
                <h2 className='no-space-below'>The Road to Recovery</h2>
                <p className='no-space-above'>by <span>Alaha Nasari</span> | May 25, 2020</p>
                <p>Ever since the declaration of a national emergency in March, daily life in the United States has been changing rapidly with the spread of the coronavirus. States have mandated strict guidelines including orders to stay home and the cancellation of activities and large gatherings. Almost two months following the declaration, different parts of the country have started to reopen and experts are working to determine the safest way to initiate this trajectory.</p>
                <p>Following the strict measures imposed by state and local officials is imperative in slowing the spread of the disease, especially as many communities are now easing those restrictions. This means continued practices such as washing hands, wearing face masks, and maintaining a six-foot distance when possible. There are many ways you can protect yourself and those you interact with and it is critical to seek medical attention immediately if you are experiencing any warning symptoms.</p>
                <p>Our team here at Breast Cancer Comfort understands that preventing anxiety during the COVID crisis is especially challenging. Aside from staying updated on the latest news, we have found that directing our attention to stories of people engaging in wonderful acts of kindness to help others alleviates our worries. These stories remind us that everyone has a role to play in not only protecting each other but also bringing that much-needed smile to another’s face.</p>
                <p>Ordinary people have done extraordinary things to contribute to their communities. There are inspiring stories of individuals donating homemade reusable face masks to healthcare professionals. Others have contributed food and domestic necessities to people who are unable to leave their homes. Cultivating this common sense of humanity serves as a reminder that there is still hope, after all. Here at Breast Cancer Comfort, we continue to create comfort baskets and are prepared to deliver them to hospitals as soon as conditions improve. It is the compassionate nature of the members of our community that motivates us to personify the mission our organization was founded upon. Our baskets continue to be crafted with the love and care we hope to provide for others. </p>
                <p>Whether performing small or large acts of generosity, there are multiple creative and thoughtful ways we can do good from the comfort of our own homes. Donating money to a non-profit, writing thank you letters to healthcare workers, or picking up groceries for someone who’s at a higher risk for the virus than you are only a few ideas. These small actions ultimately translate into a beautiful difference in the lives of others. The feeling of uncertainty that haunts many of us is unavoidable, but one thing is for sure – together, we can make things better.</p>
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
