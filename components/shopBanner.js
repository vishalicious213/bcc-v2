import styles from '../styles/Home.module.css'

export default function ShopBanner() {
    return (
        <>
        <div className='button-container'>
            <h2>If you are looking for a basket for yourself or a friend, <a className='shop-link' href='/boobtique'>visit our shop</a>!</h2>

            {/* <div id='buttons'>
                <a className='' target='_blank' rel='noopener' href="https://venmo.com/u/breastcancercomfort">
                    <button className='button button-1'>VENMO</button>
                </a>
                <a className='' target='_blank' rel='noopener' href="https://www.nfggive.com/donation/47-2782120">
                    <button className='button'>NETWORK FOR GOOD</button>
                </a>
            </div> */}
        </div>

        <style jsx>
        {`
        .button-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            background: #b01e65;
            border-bottom: 2px solid black;
            padding: .5rem 0;
        }

        h2 {
            color: gainsboro;
            margin-right: 1rem;
            font-size: 1.1rem;
        }

        #buttons {
            display: flex;
        }

        .button {
            color: gainsboro;
            background-color: #b01e65;
            font-family: "Lato", "Helvetica Neue", Helvetica, sans-serif;
            font-size: .75rem;
            font-weight: 700;
            letter-spacing: .1rem;
            text-transform: uppercase;
            border: 2px solid gainsboro;
            border-radius: 1rem;
            text-align: center;
            width: 7rem;
            height: 3rem;
        }

        .button:hover {
            color: white;
            background-color: deeppink;
            border: 2px solid white;
            cursor: pointer;
        }

        .button:focus {
            outline: none;
        }

        .button-1 {
            margin-right: 1rem;
        }

        @media only screen and (min-width: 460px) {
            .button-container {
                padding: 1rem 0;
            }

            h2 {
                font-size: 1.5rem;
            }

            .button {
                font-size: 1rem;
                width: 9rem;
                height: 4rem;
            }
        }           
        `}            
        </style>
        </>
    )
}