import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'

// this component will replace the shop component for now. it will show gifts, pricing and allow ordering.
// it will connect to stripe and will have simplified shopping (shipping price is built-in).

export default function ShopGifts(gifts) {
    let items=gifts.gifts
    // console.log(items)

    // send data to Stripe to charge visitor's credit card
    const processPayment = async (name, price) => {
        await console.log('connect to Stripe')
        console.log('name:', name)
        console.log('cost:', price)
        // const url ='/.netlify/functions/charge-card'

        // get id and qty of products in cart (don't trust client-side prices!)
        // const newCart = cart.map(({ id, qty }) => ({
        //     id,
        //     qty
        // }))

        // const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
        // const { data } = await axios.post(url, { cart: newCart })

        // await stripe.redirectToCheckout({ sessionId: data.id })
    }

    return (
        <div id="gifts-main">
            <h2>Make a donation and send a comfort basket or bag to a loved one</h2>

            <section className='gifts'>
                    {items.map(item =>
                        <div key={item.id} className='gift' style={{backgroundImage: `url(${item.img})`}}>
                            <div className="gift-txt">
                                <div className="gift-details">
                                    <h3>{item.name}</h3>
                                    <p className='pricing-detail'><b>Donation:</b> <span className='price'>${item.price/100}.00</span></p>
                                    <p>{item.short}</p>
                                    {/* <p>{item.desc}</p> */}
                                </div>

                                <div className='button'>
                                    <button onClick={() => processPayment(item.name, item.price)}>Donate</button>
                                </div>
                            </div>
                        </div>
                    )}
                </section>            

            <style jsx>
                {`
                #gifts-main {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 90%;
                    margin-left: auto;
                    margin-right: auto;
                    color: white;
                }

                h2 {
                    margin-bottom: 2rem;
                    margin-top: 2rem;
                    color: #f5d3e4;
                }

                .gift {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    border-bottom: 1px solid #b01e65;
                    min-height: 75vh;
                    margin-bottom: 2rem;
                }

                .gift-txt {
                    width: 100%;
                    min-height: 50%;
                    padding-left: 2rem;
                    padding-right: 2rem;
                    padding-bottom: 2rem;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .gift-details {
                    
                }

                h3 {
                    font-size: 1.75rem;
                    margin-bottom: 0;
                    color: deeppink;
                }  
                
                .pricing-detail {
                    color: gainsboro;
                    color: #f5d3e4;
                }

                .price {
                    color: white;
                }

                .button {
                    display: flex;
                    justify-content: center;
                }

                button {
                    color: gainsboro;
                    background-color: #b01e65;
                    border: none;
                    font-size: 1.1rem;
                    height: 2rem;
                    width: 45%;
                    padding: .5rem 0;
                    border-radius: 1rem;
                }

                button:hover {
                    color: white;
                    background-color: deeppink;
                }

                @media only screen and (min-width: 800px) {
                    .gifts {
                        display: grid;
                        grid-gap: 2rem;
                        grid-template-columns: 1fr 1fr;
                        margin-bottom: 3rem;
                    }

                    .gift:hover {
                        outline: 2px solid #b01e65;
                        background-size: auto;
                    }
                }

                @media only screen and (min-width: 1200px) {
                    .gifts {
                        display: grid;
                        grid-gap: 2rem;
                        grid-template-columns: 1fr 1fr 1fr;
                        margin-bottom: 3rem;
                    }
                }
                `}
            </style>
        </div>
    )
}