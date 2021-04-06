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
                <p className='no-space-above min-space-below'>(516) 490-4255   |   <a href='mailto:info@breastcancercomfort.org'>info@breastcancercomfort.org</a></p>
                <p className='no-space-below'>Ⓒ 2021 Breast Cancer Comfort Foundation</p>
                <p className='no-space-above'>All rights reserved</p>
            </div>

            <div className='footer-social'>
                <a target='_blank' rel='noopener' className='icon' href="https://www.linkedin.com/company/breast-cancer-comfort-foundation-inc/">
                    <img src='/li.png' alt='LinkedIn' />
                </a>
                <a target='_blank' rel='noopener' className='icon' href="https://twitter.com/BreastComfort">
                    <img src='/twitter.jpg' alt='Twitter' />
                </a>
                <a target='_blank' rel='noopener' className='icon' href="https://www.facebook.com/breastcancercomfort/">
                    <img src='/fb.png' alt='Facebook' />
                </a>
                <a target='_blank' rel='noopener' className='icon' href="https://www.instagram.com/breastcancercomfort/">
                    <img src='/ig.png' alt='Instagram' />
                </a>
            </div>
        </footer>

        <style jsx>
            {`
            .footer {
                // outline: 1px solid red;
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
                //   outline: 1px solid orange;
                  width: 33%;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  text-align: center;
              }

              .min-space-below {
                  margin-bottom: 0;
              }

              .footer-social {
                //   outline: 1px solid orange;
                  width: 33%;
                  display: flex;
                  justify-content: center;
              }

              .footer img {
                width: 2.5rem;
                // margin: 0 .5rem;
              }

              .footer a {
                color: #ff99cc;
              }

              .icon {
                margin: 0 .5rem;
              }
            `}
        </style>
        </>
    )
}