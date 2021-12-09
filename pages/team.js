import Head from 'next/head'
import styles from '../styles/Home.module.css'

const team = [
    {id: '01', name: 'Debi Cavolo', title: 'CEO & Founder', pic: '', linkedIn: '', url: ''},
    {id: '02', name: 'Ann Guarascio', title: 'Board Treasurer, Non-Profit Accounting Specialist', pic: '', linkedIn: '', url: ''},
    {id: '03', name: 'Nicole Link', title: 'Director of Events & Fundraising', pic: '', linkedIn: '', url: ''},
    {id: '04', name: 'Vish Singh', title: 'Web Developer', pic: '', linkedIn: '', url: ''},
    // {id: '', name: '', title: '', pic: '', linkedIn: '', url: ''},
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
                <h2 className='h2'>Our Team</h2>
                <p>Do you want to help others fighting their battle with breast cancer?</p>

                <section className='team'>
                    {team.map(person =>
                      <div key={person.id} className='person'>
                          <h2>{person.name}</h2>
                          <p>{person.title}</p>
                        {/* <h2 className='no-space-below'><a href={post.url}>{post.title}</a></h2> */}
                        {/* <p className='no-space-above'>by <span>{post.author}</span> | {post.date}</p> */}
                        {/* <p>{post.excerpt}</p> */}
                      </div>
                    )}
                </section>


                <p>If you would like to join our team email us at <a className='email'>info@breastcancercomfort.org</a>.</p>
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
