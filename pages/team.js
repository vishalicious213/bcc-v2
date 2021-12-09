import Head from 'next/head'
import styles from '../styles/Home.module.css'

const team = [
    {id: '01', name: 'Debi Cavolo', title: 'CEO & Founder', pic: 'debi-li.jpg', linkedIn: '', url: ''},
    {id: '02', name: 'Ann Guarascio', title: 'Board Treasurer, Non-Profit Accounting Specialist', pic: 'ann-li.jpg', linkedIn: '', url: ''},
    {id: '03', name: 'Nicole Link', title: 'Director of Events & Fundraising', pic: 'nicole-li.jpg', linkedIn: '', url: ''},
    {id: '04', name: 'Vish Singh', title: 'Web Developer', pic: 'vish.jpg', linkedIn: '', url: ''},
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

        <section className='pink-container gift-container'>
          <div className='gift-img-container'>
              <img className='gift-img' src='gift.png' alt='wrapped gift' />
          </div>
          <div className='gift-text-container'>
              <h2 className='h2'>Our Team</h2>
              <p className='no-space-above'>The people behind an organization are as important as the organization itself. Since 2015, The Breast Cancer Comfort Foundation has been working to provide comfort baskets and host events to support women undergoing breast cancer treatment. These are some of our team members who volunteer their time and efforts to help raise the spirits of patients and remind them that they're not alone.</p>
          </div>
        </section>

            <section className='grey-container'>
                {/* <h2 className='h2'>Our Team</h2> */}
                {/* <p>Do you want to help others fighting their battle with breast cancer?</p> */}

                <section className='team'>
                    {team.map(person =>
                        <div key={person.id} className='person'>
                            <img className='person-img' src={`/about/${person.pic}`} alt={`${person.name}, ${person.title}`} />
                            <h2 className='no-space-below'>{person.name}</h2>
                            <p className='no-space-above person-title'>{person.title}</p>
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

            .team {
                // border: 1px solid red;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                width: 100%;
                margin-top: 2rem;
            }

            .person {
                // border: 1px solid pink;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 85%;
                margin-bottom: 2rem;
                background: linear-gradient(#292c2f 50%, #b01e65 50%);
                border-radius: 1rem;
            }

            .person-title {
                text-align: center;
            }

            .person-img {
                width: 75%;
                border-radius: 50%;
            }

            @media only screen and (min-width: 992px) {
                .person {
                    // border: 1px solid orange;
                    width: 48%;
                }
            }

            @media only screen and (min-width: 1200px) {
                .person {
                    // border: 1px solid yellow;
                    width: 30%;
                }
            }
            `}
        </style>
    </div>
  )
}
