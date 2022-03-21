import Head from 'next/head'
import Video from '../components/video'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrophy, faAward, faMedal, faRibbon } from "@fortawesome/free-solid-svg-icons"

const supporters = [
    {id: 0, name: 'Karen Kostroff, M.D., FACS', icon: faTrophy, color: 'FFFFFF'},
    {id: 1, name: 'Beth C. Tortolani Foundation', icon: faAward, color: 'deeppink'},
    {id: 2, name: 'New York Breast Cancer Reconstruction Associates', icon: faAward, color: 'deeppink'},
    {id: 3, name: 'AAA Northeast', icon: faAward, color: 'deeppink'},
    {id: 4, name: 'We Care Fund of the Nassau County Bar Association', icon: faAward, color: 'deeppink'},
    // {id: 0, name: '', icon: {}, color: ''},
]

// These are the colors/icons for each tier
{/* <h2 className='grey mem-h2'><Tier icon={faTrophy} color='#FFFFFF' />Platinum</h2> */}
{/* <h2 className='grey mem-h2'><Tier icon={faRibbon} color='#C9B037' />Gold</h2> */}
{/* <h2 className='grey mem-h2'><Tier icon={faMedal} color='#B4B4B4' />Silver</h2> */}
{/* <h2 className='grey mem-h2'><Tier icon={faAward} color='#AD8A56' />Bronze</h2> */}
{/* <h2 className='grey mem-h2'><Tier icon={faAward} color='deeppink' />Friend</h2> */}
{/* <h2 className='pink mem-h2'><img src='/gift.png' />Gift Icon</h2> */}

const Tier = props => {
    return (
        <span className='award'>
            <FontAwesomeIcon icon={props.icon} style={{ fontsize: "1.5rem", color: props.color}} />
            <style jsx>{`.award {width: 2rem; margin: 0 1.75rem; text-align: center;}`}</style>
        </span>
    )
}

export default function Support() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Supporters | Breast Cancer Comfort Foundation</title>
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
            <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
        </Head>

        <main className={styles.main}>
            <div className='img-container'>
                <img src='/donate/supporters.png' alt='' />
            </div>

            <section className='pink-container'>
                <h2 className='no-space-below'>Thank you to our supporters!</h2>

                <p>We are lucky to have you as donors and appreciate you for investing in our organization. Because of you, we can continue our mission to deliver Comfort Baskets and Chemo Comfort Bags to those who have recently undergone breast cancer surgery and remind them that they are not alone or unloved.</p>
            </section>

            <section className='supporter-list'>
                {supporters.map(supporter =>
                    <h2 className={supporter.id % 2 === 0 ? 'grey mem-h2' : 'pink mem-h2'} key={supporter.id}><Tier icon={supporter.icon} color={supporter.color} />{supporter.name}</h2>
                )}
            </section>

            {/* Sana Hashmat's video */}
            <Video vid="https://www.youtube.com/embed/6WCnE0x2654" />
        </main>

        <style jsx>
            {`
            main {
                margin-bottom: 1rem;
            }

            .mem-h2 {
                font-weight: 500;
            }

            .pink {
                color: white;
                background-color: #b01e65;
                margin: 0;
                padding: .5rem .5rem .5rem 2.5rem;
                display: flex;
            }

            .grey {
                color: white;
                background-color: #292c2f;
                margin: 0;
                padding: .5rem .5rem .5rem 2.5rem;
                display: flex;
            }

            .supporter-list img {
                width: 1.5rem;
                height: 1.75rem;
                margin: 0 2rem 0 0;
            }

            // 768 PX

            @media only screen and (min-width: 768px) {
                .supporter-list img {
                    margin: 0 2rem;
                }

                .pink {
                    padding: .5rem 0 .5rem 5rem;
                }
    
                .grey {
                    padding: .5rem 0 .5rem 5rem;
                }
            }
            `}
        </style>
    </div>
  )
}
