import styles from '../styles/Home.module.css'

export default function Footer() {
    return (
        <>
        <footer className='footer'>
            <div className='footer-text'>
                Breast Cancer Comfort Foundation is a 501(C)(3) non-profit organization recognized by the Internal Revenue Service, and all donations to the Breast Cancer Comfort Foundation are tax-deductible in accordance with IRS regulations.
            </div>

            <div className='footer-text'>
                <p className='no-space-below'>36C West Green Village, Hicksville, NY 11801</p>
                <p className='no-space-above min-space-below'>(516) 490-4255   |   <a className='email' href='mailto:info@breastcancercomfort.org'>info@breastcancercomfort.org</a></p>
                <p className='no-space-below'>Ⓒ 2021 Breast Cancer Comfort Foundation</p>
                <p className='no-space-above'>All rights reserved</p>
            </div>

            <div className='footer-social'>
                <a className='li icon' target='_blank' rel='noopener' href="https://www.linkedin.com/company/breast-cancer-comfort-foundation-inc/"></a>
                <a className='tw icon' target='_blank' rel='noopener' href="https://twitter.com/BreastComfort"></a>
                <a className='fb icon' target='_blank' rel='noopener' href="https://www.facebook.com/breastcancercomfort/"></a>
                <a className='ig icon' target='_blank' rel='noopener' href="https://www.instagram.com/breastcancercomfort/"></a>
            </div>
        </footer>

        <style jsx>
            {`
            .footer {
                color: gainsboro;
                background: black;
                font-size: .75rem;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: .5rem 0;
            }

            .footer-text {
                width: 33%;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }

            .email:hover {
                text-decoration: underline;
            }

            .min-space-below {
                margin-bottom: 0;
            }

            .footer-social {
                width: 33%;
                display: flex;
                justify-content: center;
            }

            .footer img {
                width: 2.5rem;
            }

            .footer a {
                color: #ff99cc;
            }

            .icon {
                margin: 0 .5rem;
                width: 2.5rem;
                height: 2.5rem;
            }

            .fb {
                background: url('/fb.png') no-repeat;
                background-position: center;
                background-size: contain;
            }

            .fb:hover {
                background: url('/fb2.png') no-repeat;
                background-position: center;
                background-size: contain;
            }

            .li {
                background: url('/li.png') no-repeat;
                background-position: center;
                background-size: contain;
            }

            .li:hover {
                background: url('/li2.png') no-repeat;
                background-position: center;
                background-size: contain;
            }

            .tw {
                background: url('/twitter.jpg') no-repeat;
                background-position: center;
                background-size: contain;
            }

            .tw:hover {
                background: url('/twitter2.jpg') no-repeat;
                background-position: center;
                background-size: contain;
            }

            .ig {
                background: url('/ig.png') no-repeat;
                background-position: center;
                background-size: contain;
            }

            .ig:hover {
                background: url('/ig2.png') no-repeat;
                background-position: center;
                background-size: contain;
            }
            `}
        </style>
        </>
    )
}