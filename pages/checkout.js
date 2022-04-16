import useCart from '../hooks/useCart'

const Checkout = () => {
    const { cart } = useCart()

    return (
        <div className='checkout'>
            <h1>Checkout</h1>

            {cart.length > 0 ? (
                <p>Has items</p>
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