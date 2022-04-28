import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import useCart from "../hooks/useCart"
import Link from 'next/link'

const ShoppingCart = () => {
    const { cart, isOpen, openCart, closeCart, total, shipPrice } = useCart()

    const handleClick = () => {
        // console.log('close cart')
        // closeCart()
        const shoppingCart = document.getElementById('cart')
        shoppingCart.style.display = "none"
    }

    return (
        <div id='cart' className='shopping-cart'>
            <div className='cart-head'>
                <span>GIFT CART</span>
                <span className='X' onClick={handleClick}>
                    <FontAwesomeIcon icon={faCircleXmark} style={{ fontsize: "1.5rem"}} />
                </span>
            </div>

            {/* if cart is not empty, show contents, else show empty message */}
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
                </div>
            ) : (
                <div className='cart-body'>
                    <p className='empty'>Gift cart is empty!</p>
                    <p className='empty no-bottom-margin'>Please visit our Shop to</p>
                    <p className='empty no-top-margin'>send a gift to a loved one.</p>
                </div>
            )}

            {cart.length > 0 && shipPrice ? (
                <div className='cart-body shipping'>
                    <span><b>Shipping Price:</b></span>
                    {shipPrice ? (
                        <span>{`$${(shipPrice / 100).toFixed(2)}`}</span>
                    ) : (
                        <span>none</span>
                    )}
                </div>                
            ) : (
                <p></p>
            )}

            {/* if cart is not empty, show total price, else show nothing */}
            {cart.length > 0 ? (
                <p className='total'>{`Total: $${(total / 100).toFixed(2)}`}</p>
            ) : (
                <p></p>
            )}

            {/* if cart is not empty, show checkout button, else show nothing */}
            {cart.length > 0 ? (
                <div className='checkout'>
                    <Link href='/checkout'>
                        <button onClick={handleClick}>Checkout</button>
                    </Link>
                </div>
            ) : (
                <p></p>
            )}

            <style jsx>
                {`
                .shopping-cart {
                    display: none;
                    position: fixed;
                    z-index: 1;
                    right: 0;
                    top: 0;
                    height: 100vh;
                    width: 305px;
                    background-color: ghostwhite;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                    color: black;
                    border-left: 3px solid #b01e65;
                    border-radius: 1rem 0 0 1rem;
                }
                
                .cart-head {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.5rem 1rem .5rem 1rem;
                    border-bottom: 1.5px solid #b01e65;
                    // outline: 2px solid blue;
                }

                .X:hover {
                    cursor: pointer;
                    color: #b01e65;
                }

                .cart-body {
                    padding: 1rem;
                }

                .item {
                    // outline: 1px solid red;
                }

                h2 {
                    margin-bottom: 0;
                    // outline: 1px solid red;
                }

                .pricing {
                    display: grid;
                    grid-gap: 2rem;
                    grid-template-columns: 1fr 1fr 1fr;
                    margin-bottom: 1rem;
                    border-bottom: 1px solid #b01e65;
                }

                .shipping {
                    margin-top: 0;
                    display: flex;
                    justify-content: space-between;
                    padding-right: 2.25rem;
                }

                .total {
                    padding: 0 1.1rem;
                    font-size: 1.25rem;
                    font-weight: 600;
                    text-align: right;
                }

                .checkout {
                    padding: 0 1rem;
                }

                button {
                    color: gainsboro;
                    background-color: #b01e65;
                    border: none;
                    font-size: 1.5rem;
                    width: 100%;
                    padding: .5rem 0;
                    border-radius: 1rem;
                }

                button:hover {
                    color: white;
                    background-color: deeppink;
                    // outline: 2px solid #b01e65;
                }

                .empty {
                    text-align: center;
                }

                .no-bottom-margin {
                    margin-bottom: 0;
                    color: #b01e65;
                    font-weight: 600;
                }

                .no-top-margin {
                    margin-top: 0;
                    color: #b01e65;
                    font-weight: 600;
                }
                `}
            </style>
        </div>
    )
}

export default ShoppingCart