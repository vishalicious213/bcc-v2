import Head from 'next/head'
import styles from '../styles/Home.module.css'

const team = [
    {id: '01', name: 'Debi Cavolo', title: 'CEO & Founder', pic: 'debi-li.jpg', linkedIn: 'https://www.linkedin.com/in/debi-cavolo-671a78132/', url: '/team/debi-cavolo'},
    {id: '02', name: 'Ann Guarascio', title: 'Board Treasurer, Non-Profit Accounting Specialist', pic: 'ann-li.jpg', linkedIn: 'https://www.linkedin.com/in/ann-guarascio-3463719/', url: '/team/ann-guarascio'},
    {id: '03', name: 'Nicole Link', title: 'Director of Events & Fundraising', pic: 'nicole-li.jpg', linkedIn: 'https://www.linkedin.com/in/nicole-link/', url: '/team/nicole-link'},
    {id: '04', name: 'Alicia Cosentino', title: 'Administration & Fundraising', pic: 'placeholder-f.jpg', linkedIn: '', url: '/team/alicia-cosentino'},
    {id: '05', name: 'Vish Singh', title: 'Web Developer', pic: 'vish.jpg', linkedIn: 'https://www.linkedin.com/in/vish213/', url: '/team/vish-singh'},
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
                    <p className='no-space-above'>The people behind an organization are as important as the organization itself. Since 2015, The Breast Cancer Comfort Foundation has been working to provide comfort baskets and host events to support women undergoing breast cancer treatment. Below are some of our team members who volunteer their time and efforts to help raise the spirits of patients and remind them that they're not alone.</p>
                </div>
            </section>

            <section className='grey-container'>
                <section className='team'>
                    {team.map(person =>
                        <div key={person.id} className='person'>
                            <a className='person-link' href={person.url}>
                                <img className='person-img' src={`/about/${person.pic}`} alt={`${person.name}, ${person.title}`} />
                            </a>
                            <h2 className='no-space-below'>{person.name}</h2>
                            <p className='no-space-above person-title'>{person.title}</p>
                        </div>
                    )}
                </section>
            </section>

            <section className='pink-container gift-container'>
                <div className='gift-img-container'>
                    <img className='gift-img' src='gift.png' alt='wrapped gift' />
                </div>
                <div className='gift-text-container'>
                    <h2 className='h2'>Join our organization!</h2>
                    <p className='no-space-above'>BCC is powered by the skills and efforts of our volunteers. Our organization is seeking members to serve in the following capacities: Public Relations, Grant Writing, Marketing, Event Planning, and Social Media. Creative individuals with Fundraising experience are always welcome.</p>
                    <p>Tell us about yourself and your ideas via email: <a id='email' href='mailto:info@breastcancercomfort.org'>info@breastcancercomfort.org</a></p>
                </div>
            </section>
        </main>

        <style jsx>
            {`
            #email {
                color: white;
                font-weight: 700;
            }
            
            #email:hover {
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
                margin-bottom: 1rem;
                padding-top: 1rem;
                // background: linear-gradient(#292c2f 50%, #b01e65 50%);
                border-radius: 1rem;
            }

            .person:hover {
                background: linear-gradient(#292c2f 50%, #b01e65 50%);
                // background: #b01e65;
                // cursor: pointer;
            }

            .person:hover .person-img {
                outline: 2px solid white;
            }

            .person-title {
                width: 88%;
                text-align: center;
            }

            .person-link {
                width: 75%;
            }

            .person-img {
                width: 100%;
                border-radius: 50%;
            }

            @media only screen and (min-width: 768px) {
                .person {
                    // border: 1px solid orange;
                    width: 48%;
                }
            }

            @media only screen and (min-width: 992px) {
                .person {
                    // border: 1px solid orange;
                    width: 32%;
                }
            }

            @media only screen and (min-width: 1200px) {
                .person {
                    // border: 1px solid yellow;
                    width: 24%;
                }
            }
            `}
        </style>
    </div>
  )
}
