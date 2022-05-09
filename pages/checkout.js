import useCart from '../hooks/useCart'
import Link from 'next/link'

const Checkout = () => {
    const { cart, total } = useCart()

    return (
        <div className='checkout'>
            <h1>Checkout</h1>

            <div className='shipping'>
                <h2>Gift summary:</h2>

                {cart.length > 0 ? (
                    <div>
                        {cart.map((item) => {
                            return (
                                <div className='gift' key={item.id}>
                                    <div className='checkout-gift-img-container'>
                                        <img src={item.img} alt={item.alt} />
                                    </div>

                                    <div className='gift-details'>
                                        <h3>{item.name}</h3>
                                        <div className='pricing'>
                                            <p>Qty: {item.qty}</p>
                                            <p>{`Donation: $${item.price / 100}.00`}</p>
                                            <p><b>Subtotal: </b>{`$${item.price * item.qty / 100}.00`}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <p>Your cart has no gifts!</p>
                )}

                <div>
                    <div className='total'>
                        <p></p>
                        <p></p>
                        <p>{`Total: $${(total / 100).toFixed(2)}`}</p>
                    </div>

                    <Link href='/checkout-address'>
                        <div className='pay-button'>
                            <button>Enter Address</button>
                        </div>
                    </Link>
                </div>
            </div>            

            <style jsx>
                {`
                .checkout {
                    color: gainsboro;
                    max-width: 600px;
                    margin: 2rem auto 0 auto;
                }

                .gift {
                    display: flex;
                    align-items: center;
                }

                .gift-details {
                    width: 100%;
                }

                h1 {
                    margin: 1rem 1rem 0 1rem;
                    padding-bottom: .5rem;
                    border-bottom: 2px solid #b01e65;
                }

                h3 {
                    margin-bottom: 0;
                }

                .checkout-gift-img-container {
                    width: 10%;
                }

                .checkout-gift-img-container img {
                    width: 70%;
                    border-top-right-radius: 1rem;
                    border-top-left-radius: 1rem;
                    border-bottom-left-radius: 1rem;
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
                    margin-left: 10%;
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
                    margin: 1rem;
                }

                .shipping h2 {
                    margin-top: 0;
                }

                @media only screen and (min-width: 460px) {
                    button {
                        // font-size: 1.25rem;
                        max-width: 12rem;
                    }
                }                
                `}
            </style>
        </div>
    )
}

export default Checkout