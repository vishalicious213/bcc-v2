import useCart from '../hooks/useCart'

const Checkout = () => {
    const { cart, total } = useCart()

    const processPayment = () => {
        console.log('process payment')
    }

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
                    <div className='total'>
                        <p className='test'></p>
                        <p className='test'></p>
                        <p className='test'>{`Total: $${total / 100}.00`}</p>
                    </div>
                    <button onClick={processPayment}>Process Payment</button>
                </div>
            ) : (
                <p>Your cart has no gifts!</p>
            )}

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
                `}
            </style>
        </div>
    )
}

export default Checkout