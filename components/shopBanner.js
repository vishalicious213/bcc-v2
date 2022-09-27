import styles from '../styles/Home.module.css'

export default function ShopBanner() {
    return (
        <div className='shop-banner-container'>
            <h2>If you are looking for a basket for yourself or a friend, <a className='shop-link' href='/boobtique'>visit our shop</a>!</h2>

            <style jsx>
            {`
            .shop-banner-container {
                display: flex;
                justify-content: center;
                background: #b01e65;
                border-bottom: 2px solid black;
            }

            h2 {
                color: gainsboro;
                font-size: 1.1rem;
                font-weight: 400;
                width: 90%;
                text-align: center;
            }

            .shop-link {
                text-decoration: underline;
                font-weight: 600;
            }

            .shop-link:hover {
                color: white;
            }

            @media only screen and (min-width: 460px) {
                h2 {
                    font-size: 1.5rem;
                }
            }           
            `}            
            </style>
        </div>
    )
}