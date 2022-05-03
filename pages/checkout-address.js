import { useState, useEffect } from 'react'
import useCart from '../hooks/useCart'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import Link from 'next/link'

const CheckoutAddress = () => {
    const { cart, total, shipPrice, shipAddress, setShipAddress, calculateShipping } = useCart()
    const [rates, setRates] = useState([])

    let formName = document.getElementById("name").value
    let formCompany = document.getElementById("company").value
    let formStreet1 = document.getElementById("street1").value
    let formStreet2 = document.getElementById("street2").value
    let formCity = document.getElementById("city").value
    let formState = document.getElementById("state").value
    let formZip = document.getElementById("zip").value

    // get shipping services info from easypost
    const processShipping = async () => {
        const url ='/.netlify/functions/shipping'
        // console.log('checkout cart', cart)
        const { data } = await axios.post(url, { cart: cart })
        // console.log('process shipping', data)
        const getRates = data.carriers.rates
        setRates(getRates)
        // console.log('rates', getRates)
    }

    // send data to Context to globally calculate & update shipping costs
    const sendShippingRate = (newCarrierRate) => {
        let prevShipPrice = shipPrice
        let newShipPrice = newCarrierRate

        calculateShipping(prevShipPrice, (newShipPrice * 100))
    }

    // send data to Stripe to charge visitor's credit card
    const processPayment = async () => {
        const url ='/.netlify/functions/charge-card'

        // get id and qty of products in cart (don't trust client-side prices!)
        const newCart = cart.map(({ id, qty }) => ({
            id,
            qty
        }))

        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

        const { data } = await axios.post(url, { cart: newCart })
        // console.log('process payment', data)
        await stripe.redirectToCheckout({ sessionId: data.id })
    }

    // get initial shipping service options when page loads
    useEffect(() => {
        processShipping()
    }, [])    

    return (
        <div className='checkout'>
            <h1>Checkout</h1>

            <div className='shipping'>
                <h2>Enter destination address</h2>

                <form className='address-form'>
                    <label htmlFor="name">
                        <input className='field' type="text" id="name" name="name" placeholder='name'/>
                    </label>
                    <label htmlFor="company">
                        <input className='field' type="text" id="company" name="company" placeholder='company'/>
                    </label>
                    <label htmlFor="street1">
                        <input className='field' type="text" id="street1" name="street1" placeholder='address 1'/>
                    </label>
                    <label htmlFor="street2">
                        <input className='field' type="text" id="street2" name="street2" placeholder='address 2'/>
                    </label>
                    <label htmlFor="city">
                        <input className='field' type="text" id="city" name="city" placeholder='city'/>
                    </label>
                    <div className='state-zip'>
                        <label htmlFor="state">
                            <input className='field state' type="text" id="state" name="state" placeholder='state'/>
                        </label>
                        <label htmlFor="zip">
                            <input className='field zip' type="text" id="zip" name="zip" placeholder='zip code'/>
                        </label>
                    </div>
                </form>
            </div>

            <div className='checkout-body'>
                {/* <Link href='/checkout-shipping'> */}
                    <div className='pay-button'>
                        {/* <button>Choose Shipping Service</button> */}
                        <button onClick={() => setShipAddress({
                            name: formName,
                            company: formCompany,
                            street1: formStreet1,
                            street2: formStreet2,
                            city: formCity,
                            state: formState,
                            zip: formZip
                        })}>Choose Shipping Service</button>
                    </div>
                {/* </Link> */}
                {/* <button onClick={() => console.log('Shipping Address', shipAddress)}>CHECK</button> */}
            </div>

            <style jsx>
                {`
                .address-form {
                    display: flex;
                    flex-direction: column;
                }

                label {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: .5rem;
                    font-size: 1.25rem;
                    // outline: 1px solid red;
                }

                .state-zip {
                    display: flex;
                    justify-content: space-between;
                }

                .state {
                    width: 60%;
                }

                .zip {
                    width: 100%;
                }

                .field {
                    background: black;
                    border: 2px solid #292c2f;
                    border-radius: .35rem;
                    margin-bottom: .5rem;
                    padding: 1rem;
                    color: gainsboro;
                    font-size: 1.1rem;
                }

                .field:hover {
                    border: 2px solid #b01e65;
                }                

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
                    // margin-bottom: 0;
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

export default CheckoutAddress