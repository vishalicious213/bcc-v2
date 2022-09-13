import useCart from '../hooks/useCart'
import Link from 'next/link'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'

const CheckoutAddress = () => {
    const { cart, shipAddress, setShipAddress } = useCart()
    console.log('1', cart)

    const handleChange = event => {
        setShipAddress({ ...shipAddress, [event.target.name]: event.target.value });
    };

    const saveAddress = () => {
        // save shipping address to local storage
        localStorage.setItem('shipTo', JSON.stringify(shipAddress))
        processPayment()
    }

    // send data to easypost to generate shipping label and
    // send data to Stripe to charge visitor's credit card
    const processPayment = async () => {
        const url ='/.netlify/functions/charge-card'
        // const shipUrl = '/.netlify/functions/shipping-purchase'
        // get id and qty of products in cart (don't trust client-side prices!)
        // const newCart = cart.map(({ id, qty }) => ({
        //     id,
        //     qty
        // }))

        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
        // const { data } = await axios.post(url, { cart: newCart })
        const { data } = await axios.post(url, cart)
        console.log('2', cart)


        // await axios.post(shipUrl, { labelId: shippingInfo.carrier_id, shipId: shippingInfo.shipment_id })
        // .then((res) => console.log('shipping-purchage response', res.data))

        // await stripe.redirectToCheckout({ sessionId: data.id })
        console.log('3', cart)
    }

    return (
        <div className='checkout'>
            <h1>Checkout</h1>

            <div className='shipping'>
                <h2>Enter destination address:</h2>

                <form className='address-form'>
                    <label htmlFor="name">
                        <input 
                            className='field' 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder='name'
                            value={shipAddress.name}
                            onChange={event => handleChange(event)}
                        />
                    </label>

                    <label htmlFor="company">
                        <input 
                            className='field' 
                            type="text" 
                            id="company" 
                            name="company" 
                            placeholder='company'
                            value={shipAddress.company}
                            onChange={event => handleChange(event)}
                        />
                    </label>

                    <label htmlFor="street1">
                        <input 
                            className='field' 
                            type="text" 
                            id="street1" 
                            name="street1" 
                            placeholder='address 1'
                            value={shipAddress.street1}
                            onChange={event => handleChange(event)}
                        />
                    </label>

                    <label htmlFor="street2">
                        <input 
                            className='field' 
                            type="text" 
                            id="street2" 
                            name="street2" 
                            placeholder='address 2'
                            value={shipAddress.street2}
                            onChange={event => handleChange(event)}
                        />
                    </label>

                    <label htmlFor="city">
                        <input 
                            className='field' 
                            type="text" 
                            id="city" 
                            name="city" 
                            placeholder='city'
                            value={shipAddress.city}
                            onChange={event => handleChange(event)}
                        />
                    </label>

                    <div className='state-zip'>
                        <label htmlFor="state">
                            <input 
                                className='field' 
                                type="text" 
                                id="state" 
                                name="state" 
                                placeholder='state'
                                value={shipAddress.state}
                                onChange={event => handleChange(event)}
                            />
                        </label>

                        <label htmlFor="zip">
                            <input 
                                className='field' 
                                type="text" 
                                id="zip" 
                                name="zip" 
                                placeholder='zip code'
                                value={shipAddress.zip}
                                onChange={event => handleChange(event)}
                            />
                        </label>
                    </div>
                </form>
            </div>

            <div className='checkout-body'>
                <div className='pay-button'>
                    <Link href='/checkout'>
                        <button>Back</button>
                    </Link>
                    {/* <Link href='/checkout-shipping'> */}
                    <Link href=''>
                            <button onClick={() => saveAddress()}>Send Payment</button>
                    </Link>
                </div>
                {/* <button onClick={() => console.log('Shipping Address', shipAddress)}>CHECK BUTTON CONTEXT</button> */}
            </div>

            <style jsx>
                {`
                .checkout {
                    color: gainsboro;
                    max-width: 600px;
                    margin: 2rem auto 0 auto;
                }

                .address-form {
                    display: flex;
                    flex-direction: column;
                }

                .state-zip {
                    display: flex;
                    justify-content: space-between;
                }

                #state {
                    width: 50%;
                }

                #zip {
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
                    width: 100%;
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
                
                .pay-button {
                    display: flex;
                    justify-content: space-around;
                    margin: 0 0 1rem 0;
                }

                button {
                    color: gainsboro;
                    background-color: #b01e65;
                    border: none;
                    font-size: 1rem;
                    width: 40%;
                    max-width: 150px;
                    padding: .5rem 0;
                    border-radius: 1rem;
                }

                button:hover {
                    color: white;
                    background-color: deeppink;
                }

                .shipping {
                    padding-bottom: 1rem;
                    margin: 1rem 1rem 0 1rem;
                }

                .shipping h2 {
                    margin-top: 0;
                }

                @media only screen and (min-width: 460px) {
                    button {
                        max-width: 12rem;
                    }
                }                   
                `}
            </style>
        </div>
    )
}

export default CheckoutAddress