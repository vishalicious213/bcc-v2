import { useState, useEffect } from 'react'
import useCart from '../hooks/useCart'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'

const CheckoutShipping = () => {
    const { cart, total, shipPrice, shipAddress, calculateShipping } = useCart()
    const [rates, setRates] = useState([])
    const [shippingLabel, setShippingLabel] = useState()
    // let shippingLabel

    // get shipping services info from easypost
    const processShipping = async () => {
        const url ='/.netlify/functions/shipping'
        const { data } = await axios.post(url, { cart: cart, shipTo: shipAddress })
        const getRates = data.carriers.rates

        // console.log('shipping data', data)
        console.log('carriers data', data.carriers.rates)

        setRates(getRates)
    }

    // send data to Context to globally calculate & update shipping costs
    const sendShippingRate = (newCarrierRate, carrierId) => {
        let prevShipPrice = shipPrice
        let newShipPrice = newCarrierRate
        setShippingLabel(carrierId)

        console.log('carrierId', carrierId)
        console.log('shippingLabel / sendShippingRate', shippingLabel)

        calculateShipping(prevShipPrice, (newShipPrice * 100))
    }

    // send data to Stripe to charge visitor's credit card
    const processPayment = async () => {
        const url ='/.netlify/functions/charge-card'
        const shipUrl = '/.netlify/functions/shipping-purchase'
        // get id and qty of products in cart (don't trust client-side prices!)
        const newCart = cart.map(({ id, qty }) => ({
            id,
            qty
        }))

        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
        const { data } = await axios.post(url, { cart: newCart })

        console.log('shippingLabel / processPayment', shippingLabel)
        await axios.post(shipUrl, { labelId: shippingLabel })
        .then((res) => console.log('shipping-purchage response', res.data))
        
        // .then((res) => console.log('res', res))
        // const { shipData } = await axios.post(shipUrl, { labelId: shippingLabel})
        // .then((res) => console.log('res', res))
        // console.log('shipData', shipData)

        // await stripe.redirectToCheckout({ sessionId: data.id })
    }

    // get initial shipping service options when page loads
    useEffect(() => {
        processShipping()
    }, [])

    return (
        <div className='checkout'>
            <h1>Checkout</h1>

            <div className='shipping'>
                <p className='address address-first'>To: {shipAddress.name}</p>
                {shipAddress.company ? <p className='address'>{shipAddress.company}</p> : <></>}
                <p className='address'>{shipAddress.street1}</p>
                {shipAddress.street2 ? <p className='address'>{shipAddress.street2}</p> : <></>}
                <p className='address address-last'>{shipAddress.city}, {shipAddress.state} {shipAddress.zip}</p>

                <h2>Choose shipping</h2>

                <form>
                    <div className='carriers'>
                        <span className='carrier-heading'></span>
                        <span className='carrier-heading'>Carrier</span>
                        <span className='carrier-heading'>Service</span>
                        <span className='carrier-heading'>Rate</span>
                        <span className='carrier-heading'>Time</span>
                    </div>
                    {rates.map((carrier) => {
                        return (
                            <label htmlFor={carrier.service} className='carriers carrier-option' key={carrier.id}>
                                <input 
                                    type='radio' 
                                    id={carrier.service} 
                                    name='shipment-option' 
                                    value={carrier.id} 
                                    onClick={() => sendShippingRate(carrier.rate, carrier.id)}
                                />
                                <span>{carrier.carrier}</span>
                                <span>{carrier.service}</span>
                                <span>{`$${carrier.rate}`}</span>
                                {carrier.delivery_days ? (
                                    <span>{`${carrier.delivery_days} days`}</span>
                                ) : (
                                    <span>unknown</span>
                                )}
                            </label>
                        )
                    })}
                </form>
            </div>

            <div className='checkout-body'>
                <div className='total'>
                    <p></p>
                    <p></p>
                    <p>{`Total: $${(total / 100).toFixed(2)}`}</p>
                </div>

                <div className='pay-button'>
                    <button onClick={() => processPayment()}>Process Payment</button>
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

                .address {
                    margin-bottom: 0;
                    margin-top: 0;
                }

                .address-first {
                    font-weight: 600;
                }

                .address-last {
                    margin-bottom: 1rem;
                    padding-bottom: .5rem;
                    border-bottom: 1px solid #b01e65;
                }

                .checkout-body {
                    padding: 1rem;
                }

                h2 {
                    margin-bottom: 0;
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
                    font-size: 1.25rem;
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

                .carriers {
                    display: grid;
                    grid-template-columns: .25fr .5fr 1fr 1fr 1fr;
                    grid-gap: 1rem;
                    padding: .5rem;
                    border-bottom: 1px solid gainsboro;
                    // outline: 1px solid red;
                }

                .carrier-heading {
                    font-weight: 600;
                    margin-bottom: .5rem;
                    margin-top: .5rem;
                    color: white;
                }

                .carrier-option {
                    // margin-bottom: .5rem;
                }

                .carrier-option:hover {
                    // outline: 1px solid #b01e65;
                    color: white;
                    font-weight: 600;
                }
                `}
            </style>
        </div>
    )
}

export default CheckoutShipping