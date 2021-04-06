import styles from '../styles/Home.module.css'

export default function Footer() {
    return (
        <>
        <footer className='footer'>
            <div>
                Breast Cancer Comfort Foundation is a 501(C)(3) non-profit organization recognized by the Internal Revenue Service, and all donations to the Breast Cancer Comfort Foundation are tax-deductible in accordance with IRS regulations.
            </div>

            <div>
                <p>36C West Green Village, Hicksville, NY 11801</p>
                <p>(516) 490-4255   |   info@breastcancercomfort.org</p>
                <p>Ⓒ 2021 Breast Cancer Comfort Foundation</p>
                <p>All rights reserved</p>
            </div>

            <div>
                <a href="https://twitter.com/BreastComfort">
                    <img src='/twitter.jpg' alt='Twitter' />
                </a>
                <a href="https://www.facebook.com/breastcancercomfort/">
                    <img src='/fb.png' alt='Facebook' />
                </a>
                <a href="https://www.instagram.com/breastcancercomfort/">
                    <img src='/ig.png' alt='Instagram' />
                </a>
            </div>
        </footer>

        <style jsx>
            {`
            .footer {
                width: 100%;
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .footer img {
                margin-left: 0.5rem;
              }

              .footer a {
                display: flex;
                justify-content: center;
                align-items: center;
              }
            `}
        </style>
        </>
    )
}