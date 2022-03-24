import styles from '../styles/Home.module.css'

export default function donateBanner() {
    return (
        <>
        <div className='button-container'>
            <a className='fb icon' target='_blank' rel='noopener' href="https://www.nfggive.com/donation/47-2782120">
                <button className='button button-1'>NETWORK FOR GOOD</button>
            </a>

            <a className='fb icon' target='_blank' rel='noopener' href="https://venmo.com/u/breastcancercomfort">
                <button className='button'>VENMO</button>
            </a>
        </div>
        </>
    )
}