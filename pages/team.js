import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Share() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Our Team | Breast Cancer Comfort Foundation</title>
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
            <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
        </Head>

        <main className={styles.main}>
            <div className='img-container'>
                <img src='/about/team.jpg' alt='' />
            </div>

            <section className='grey-container'>
                <p>Do you want to help others fighting their battle with breast cancer?</p>
                <p>You can do this by sharing your story. Sometimes hearing the story of someone who has been through breast cancer can help brighten up a persons day and give them encouragement and support though the process. You can share much needed advice and tips from first hand experience. You story will be shared on our website to provide support for all our readers. You can share who you are or you can share anonymously.</p>
                <p>If you would like to share your story email us at <a className='email'>info@breastcancercomfort.org</a>.</p>
            </section>

            <div className='media-container'>
            <div className='video'>
                <div className='videoContainer'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/O0cpKBZFAck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
          </div>
        </main>

        <style jsx>
            {`
            .email {
                color: #ff99cc;
            }

            .email:hover {
                text-decoration: underline;
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
            `}
        </style>
    </div>
  )
}
