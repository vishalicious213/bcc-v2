import styles from '../styles/Home.module.css'

const team = [
    {id: '01', name: 'Alaha Nasari', title: 'Volunteer', pic: 'alaha-thumb.jpg', url: '/volunteer/alaha-nasari'},
    // {id: '', name: '', title: '', pic: '', linkedIn: '', url: ''},
]

export default function Bio() {
  return (
    <div className={styles.container}>
        {/* <div className='img-container'>
            <img src='/about/team.jpg' alt='' />
        </div> */}

        {/* <section className='pink-container gift-container'>
            <div className='gift-img-container'>
                <img className='gift-img' src='gift.png' alt='wrapped gift' />
            </div>
            <div className='gift-text-container'>
                <h2 className='h2'>Our Team</h2>
                <p className='no-space-above'>The people behind an organization are as important as the organization itself. Since 2015, The Breast Cancer Comfort Foundation has been working to provide comfort baskets and host events to support women undergoing breast cancer treatment. Below are some of our team members who volunteer their time and efforts to help raise the spirits of patients and remind them that they're not alone.</p>
            </div>
        </section> */}

        <section className='pink-container'>
            <section className='team'>
                {team.map(person =>
                    <div key={person.id} className='person'>
                        <a className='person-link' href={person.url}>
                            <img className='person-img' src={`/volunteer/${person.pic}`} alt={`${person.name}, ${person.title}`} />
                        </a>
                        <h2 className='no-space-below'>{person.name}</h2>
                        <p className='no-space-above person-title'>{person.title}</p>
                    </div>
                )}
            </section>
        </section>

        {/* <section className='pink-container gift-container'>
            <div className='gift-img-container'>
                <img className='gift-img' src='gift.png' alt='wrapped gift' />
            </div>
            <div className='gift-text-container'>
                <h2 className='h2'>Join our organization!</h2>
                <p className='no-space-above'>BCC is powered by the skills and efforts of our volunteers. Our organization is seeking members to serve in the following capacities: Public Relations, Grant Writing, Marketing, Event Planning, and Social Media. Creative individuals with Fundraising experience are always welcome.</p>
                <p>Tell us about yourself and your ideas via email: <a id='email' href='mailto:info@breastcancercomfort.org'>info@breastcancercomfort.org</a></p>
            </div>
        </section> */}

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
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                width: 100%;
                margin-top: 2rem;
            }

            .person {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 85%;
                margin-bottom: 1rem;
                padding-top: 1rem;
                border-radius: 1rem;
            }

            .person:hover {
                background: linear-gradient(#b01e65 50%, #292c2f 50%);
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
                    width: 48%;
                }
            }

            @media only screen and (min-width: 992px) {
                .person {
                    width: 32%;
                }
            }

            @media only screen and (min-width: 1200px) {
                .person {
                    width: 24%;
                }
            }
            `}
        </style>
    </div>
  )
}
