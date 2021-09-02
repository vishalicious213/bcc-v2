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
                <h2 className='no-space-below'>A Recipe for Successful Coping</h2>
                <p className='no-space-above'>by <span>Alaha Nasari</span> | Apr 6, 2020</p>
                <p>Schools have closed, the economy is in decline, and health-care professionals are struggling to deal with the shortage of medical supplies. For anyone reading the news, these facts are just a grim reminder of the unfortunate situation our world is currently in. The tipping point of the coronavirus has escalated over the past several weeks, wreaking unexpected havoc on our lives ever since the announcement of the first case in January. No matter where we may live, almost everyone has been impacted by the pandemic. Many Americans have been forced to adapt to a new normal, with entire cities under orders to stay indoors and practice social distancing. Our team at the Breast Cancer Comfort is just one of the countless organizations that are coping in this crisis.</p>
                <p>But in the midst of the pandemic, we would like to take a step back and remind everyone of the myriad ways we can still stay positive. In these strange and isolating times, it is critical that we redirect our focus toward scientific advancements, acts of kindness, and the forward movement of communities in many areas of the world. Breast Cancer Comfort wants to remind you that the core ingredient in the recipe for successful coping is optimism. Capturing the small moments of happiness in your day can foster positive emotions and build your resilience to difficulty.</p>
                <p>For us, this means reflecting on our three founding principles – comfort, emotional support, and encouragement. We realize that now, more than ever, our breast cancer patients and their families are in dire need of reassurance that they are not alone. By centering our attention on the pro-social aspects of the coronavirus pandemic, we can foster a sense of unity in our communities. We urge you to savor the small moments and to look for the good in your life. It is important to be here in the present and to be grateful for the things going well, rather than dwelling on unrealistic and fearful thoughts about the future. Maintain those meaningful connections with the individuals you trust and feel safe with, and remember that we are dealing with this as one world. There is light at the end of the dark tunnel that seems to have enveloped our lives at the moment, but we can – and we will – overcome this virus.</p>
                <p>By tuning into these silver linings, we can rise above our daily challenges and replenish the energy and inspiration we need in our lives. Whether that involves listening to beautiful music, taking a short walk outdoors, keeping a journal, or creating something, hope is the antidote that will help us see things from a new perspective. The Breast Cancer Comfort community is with you, every step of the way. Together, we can create a stronger, more unified, loving world.</p>
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
