import Head from 'next/head'
import styles from '../styles/Home.module.css'

const team = [
    {id: '01', name: 'Debi Cavolo', title: 'CEO & Founder', linkedIn: '', url: ''},
    {id: '02', name: 'Ann Guarascio', title: 'Board Treasurer, Non-Profit Accounting Specialist', linkedIn: '', url: ''},
    {id: '03', name: 'Nicole Link', title: 'Director of Events & Fundraising', linkedIn: '', url: ''},
    {id: '04', name: 'Vish Singh', title: 'Web Developer', linkedIn: '', url: ''},
    // {id: '', name: '', title: '', linkedIn: '', url: ''},
]

export default function Team() {
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
        </main>

        <style jsx>
            {`
            .email {
                color: #ff99cc;
            }

            .email:hover {
                text-decoration: underline;
            } 
            `}
        </style>
    </div>
  )
}
