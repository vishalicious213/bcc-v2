import { useState, useEffect } from 'react'
import useCart from '../hooks/useCart'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import Link from 'next/link'

const Checkout = () => {
    const { cart, total, shipPrice, calculateShipping } = useCart()
    const [rates, setRates] = useState([])

    // get shipping services info from easypost
    // const processShipping = async () => {
    //     const url ='/.netlify/functions/shipping'
    //     // console.log('checkout cart', cart)
    //     const { data } = await axios.post(url, { cart: cart })
    //     // console.log('process shipping', data)
    //     const getRates = data.carriers.rates
    //     setRates(getRates)
    //     // console.log('rates', getRates)
    // }

    // send data to Context to globally calculate & update shipping costs
    // const sendShippingRate = (newCarrierRate) => {
    //     let prevShipPrice = shipPrice
    //     let newShipPrice = newCarrierRate

    //     calculateShipping(prevShipPrice, (newShipPrice * 100))
    // }

    // send data to Stripe to charge visitor's credit card
    // const processPayment = async () => {
    //     const url ='/.netlify/functions/charge-card'

    //     // get id and qty of products in cart (don't trust client-side prices!)
    //     const newCart = cart.map(({ id, qty }) => ({
    //         id,
    //         qty
    //     }))

    //     const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

    //     const { data } = await axios.post(url, { cart: newCart })
    //     // console.log('process payment', data)
    //     await stripe.redirectToCheckout({ sessionId: data.id })
    // }

    // get initial shipping service options when page loads
    // useEffect(() => {
    //     processShipping()
    // }, [])    

    return (
        <div className='checkout'>
            <h1>Checkout</h1>

            <div className='shipping'>
                <h2>Gift summary:</h2>

                {cart.length > 0 ? (
                    <div className='checkout-body'>
                        {cart.map((item) => {
                            return (
                                <div className='item' key={item.id}>
                                    <h3>{item.name}</h3>
                                    <div className='pricing'>
                                        <p>Qty: {item.qty}</p>
                                        <p>{`Donation: $${item.price / 100}.00`}</p>
                                        <p><b>Subtotal: </b>{`$${item.price * item.qty / 100}.00`}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <p>Your cart has no gifts!</p>
                )}

                <div className='checkout-body'>
                    <div className='total'>
                        <p className='test'></p>
                        <p className='test'></p>
                        <p className='test'>{`Total: $${(total / 100).toFixed(2)}`}</p>
                    </div>

                    <Link href='/checkout-address'>
                        <div className='pay-button'>
                            <button>Enter Shipping Address</button>
                        </div>
                    </Link>
                </div>
            </div>            

            <style jsx>
                {`
                .checkout {
                    color: gainsboro;
                }

                h1 {
                    margin: 1rem 1rem 0 1rem;
                    padding-bottom: .5rem;
                    border-bottom: 2px solid #b01e65;
                }

                .checkout-body {
                    // padding: 1rem;
                }

                h3 {
                    margin-bottom: 0;
                }

                .pricing {
                    display: grid;
                    grid-gap: 2rem;
                    grid-template-columns: 1fr 1fr 1fr;
                    margin-bottom: 1rem;
                    border-bottom: 1px solid #b01e65;
                }

                .total {
                    display: grid;
                    grid-gap: 2rem;
                    grid-template-columns: 1fr 1fr 1fr;
                    font-size: 1.25rem;
                    font-weight: 600;
                }

                .pay-button {
                    display: flex;
                    justify-content: center;
                    margin-top: 1rem;
                }

                button {
                    color: gainsboro;
                    background-color: #b01e65;
                    border: none;
                    font-size: 1.5rem;
                    width: 90%;
                    padding: .5rem 0;
                    border-radius: 1rem;
                }

                button:hover {
                    color: white;
                    background-color: deeppink;
                }

                .shipping {
                    // outline: 1px solid red;
                    padding-bottom: 1rem;
                    margin: 1rem 1rem 0 1rem;
                    // width: 90%;
                    border-bottom: 2px solid #b01e65;
                }

                .shipping h2 {
                    margin-top: 0;
                }

                // .carriers {
                //     display: grid;
                //     grid-template-columns: .25fr .5fr 1fr 1fr 1fr;
                //     grid-gap: 1rem;
                //     padding: .5rem;
                //     border-bottom: 1px solid gainsboro;
                //     // outline: 1px solid red;
                // }

                // .carrier-heading {
                //     font-weight: 600;
                //     margin-bottom: .5rem;
                //     margin-top: .5rem;
                //     color: white;
                // }

                // .carrier-option {
                //     // margin-bottom: .5rem;
                // }

                // .carrier-option:hover {
                //     // outline: 1px solid #b01e65;
                //     color: white;
                //     font-weight: 600;
                // }
                `}
            </style>
        </div>
    )
}

export default Checkout