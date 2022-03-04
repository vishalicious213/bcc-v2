import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrophy, faAward, faMedal, faRibbon } from "@fortawesome/free-solid-svg-icons"


const Tier = props => {
    return (
        <span className='award'>
            <FontAwesomeIcon icon={props.icon} style={{ fontsize: "1.5rem", color: props.color}} />
            <style jsx>{`.award {width: 2rem; margin: 0 1.75rem; text-align: center;}`}</style>
        </span>
    )
}

function Trophy() {
    return (
    <span className='award'>
        <FontAwesomeIcon icon={faTrophy} style={{ fontSize: "1.5rem", color: "#FFFFFF" }} />
        <style jsx>{`.award {width: 2rem; margin: 0 1.75rem; text-align: center;}`}</style>
    </span>
    )
}

function Ribbon() {
    return (
    <span className='award'>
        <FontAwesomeIcon icon={faRibbon} style={{ fontSize: "1.5rem", color: "#C9B037" }} />
        <style jsx>{`.award {width: 2rem; margin: 0 1.75rem; text-align: center;}`}</style>
    </span>
    )
}

function Medal() {
    return (
    <span className='award'>
        <FontAwesomeIcon icon={faMedal} style={{ fontSize: "1.5rem", color: "#B4B4B4" }} />
        <style jsx>{`.award {width: 2rem; margin: 0 1.75rem; text-align: center;}`}</style>
    </span>
    )
}

function Award() {
    return (
    <span className='award'>
        <FontAwesomeIcon icon={faAward} style={{ fontSize: "1.5rem", color: "#AD8A56" }} />
        <style jsx>{`.award {width: 2rem; margin: 0 1.75rem; text-align: center;}`}</style>
    </span>
    )
}

function Friends() {
    return (
    <span className='award'>
        <FontAwesomeIcon icon={faAward} style={{ fontSize: "1.5rem", color: "deeppink" }} />
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
                    <h2 className='grey mem-h2'><Trophy />Karen Kostroff, M.D., FACS</h2>
                    <h2 className='pink mem-h2'><Ribbon />Beth C. Tortolani Foundation</h2>
                    <h2 className='grey mem-h2'><Medal />New York Breast Cancer Reconstruction Associates</h2>
                    <h2 className='pink mem-h2'><Award />AAA Northeast</h2>
                    <h2 className='grey mem-h2'><Friends />We Care Fund of the Nassau County Bar Association</h2>
                    {/* <h2 className='grey mem-h2'><Tier icon={faTrophy} color='#FFFFFF' />Platinum</h2>
                    <h2 className='grey mem-h2'><Tier icon={faRibbon} color='#C9B037' />Gold</h2>
                    <h2 className='grey mem-h2'><Tier icon={faMedal} color='#B4B4B4' />Silver</h2>
                    <h2 className='grey mem-h2'><Tier icon={faAward} color='#AD8A56' />Bronze</h2>
                    <h2 className='grey mem-h2'><Tier icon={faAward} color='deeppink' />Friend</h2>
                    <h2 className='pink mem-h2'><img src='/gift.png' />Gift Icon</h2> */}
            </section>
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
