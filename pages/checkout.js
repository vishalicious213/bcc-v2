import { useState, useEffect } from 'react'
import useCart from '../hooks/useCart'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'

const Checkout = () => {
    const { cart, total } = useCart()
    const [rates, setRates] = useState([])

    const processShipping = async () => {
        const url ='/.netlify/functions/serverless-test'

        // get id and qty of products in cart (don't trust client-side prices!)
        const newCart = cart.map(({ id, qty }) => ({
            id,
            qty
        }))

        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

        const { data } = await axios.post(url, { cart: newCart })
        // console.log('process shipping', data)
        const getRates = data.carriers.rates
        setRates(getRates)
        // console.log('rates', getRates)
        // await stripe.redirectToCheckout({ sessionId: data.id })
    }    

    const processPayment = async () => {
        const url ='/.netlify/functions/charge-card'

        // get id and qty of products in cart (don't trust client-side prices!)
        const newCart = cart.map(({ id, qty }) => ({
            id,
            qty
        }))

        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

        const { data } = await axios.post(url, { cart: newCart })
        console.log('process payment', data)
        // await stripe.redirectToCheckout({ sessionId: data.id })
    }

    useEffect(() => {
        processShipping()
    }, [])    

    return (
        <div className='checkout'>
            <h1>Checkout</h1>

            {cart.length > 0 ? (
                <div className='checkout-body'>
                    {cart.map((item) => {
                        return (
                            <div className='item' key={item.id}>
                                <h2>{item.name}</h2>
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
                <h2>Choose shipping</h2>

                <div>
                    {rates.map((carrier) => {
                        return (
                            <div key={carrier.id}>
                                <p>{carrier.carrier}</p>
                                <p>{carrier.service}</p>
                                <p>{carrier.rate}</p>
                            </div>
                        )
                    })}
                </div>

                <div className='pay-button'>
                    <button onClick={processShipping}>Process Shipping</button>
                </div>                
            </div>

            <div className='checkout-body'>
                <div className='total'>
                    <p className='test'></p>
                    <p className='test'></p>
                    <p className='test'>{`Total: $${total / 100}.00`}</p>
                </div>

                <div className='pay-button'>
                    <button onClick={processPayment}>Process Payment</button>
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
                    padding: 1rem;
                }

                h2 {
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
                `}
            </style>
        </div>
    )
}

export default Checkout