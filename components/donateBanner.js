import styles from '../styles/Home.module.css'

export default function DonateBanner() {
    return (
        <>
        <div className='button-container'>
            <h2>DONATE:</h2>

            <a className='fb icon' target='_blank' rel='noopener' href="https://www.nfggive.com/donation/47-2782120">
                <button className='button button-1'>NETWORK FOR GOOD</button>
            </a>

            <a className='fb icon' target='_blank' rel='noopener' href="https://venmo.com/u/breastcancercomfort">
                <button className='button'>VENMO</button>
            </a>
        </div>

        <style jsx>
        {`
        .button-container {
            display: flex;
            justify-content: center;
            // background-image: linear-gradient(#b01e65 50%, #292c2f 50%);
            background: #b01e65;
            border-bottom: 2px solid black;
            padding: 1rem 0;
        }

        h2 {
            color: gainsboro;
            margin-right: 1rem;
        }

        .button {
            color: gainsboro;
            background-color: #b01e65;
            font-family: "Lato", "Helvetica Neue", Helvetica, sans-serif;
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: .1rem;
            text-transform: uppercase;
            border: 2px solid gainsboro;
            border-radius: 1rem;
            text-align: center;
            padding: .75rem;
            width: 9rem;
            height: 4rem;
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
        `}            
        </style>
        </>
    )
}