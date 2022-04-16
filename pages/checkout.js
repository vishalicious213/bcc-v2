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
                <div className='cart-body'>
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
                    <p className='total'>{`Total: $${total / 100}.00`}</p>
                    <button onClick={processPayment}>Process Payment</button>
                </div>
            ) : (
                <p>Your cart has no gifts!</p>
            )}

            <style jsx>
                {`
                .checkout {
                    color: white;
                }
                `}
            </style>
        </div>
    )
}

export default Checkout