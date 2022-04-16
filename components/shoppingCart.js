import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import useCart from "../hooks/useCart"

const ShoppingCart = () => {
    const { cart, isOpen, openCart, closeCart } = useCart()

    const handleClick = () => {
        console.log('close cart')
        // closeCart()
        const shoppingCart = document.getElementById('cart')
        shoppingCart.style.display = "none"
    }

    return (
        <div id='cart' className='shopping-cart'>
            <div className='cart-head'>
                <span>SHOPPING CART</span>
                <span className='X' onClick={handleClick}>
                    <FontAwesomeIcon icon={faCircleXmark} style={{ fontsize: "1.5rem"}} />
                </span>
            </div>

            <div className='cart-body'>
                {cart.map((item) => {
                    return (
                        <div className='item' key={item.id}>
                            <h2>{item.name}</h2>
                            <div className='pricing'>
                                <p>Qty: {item.qty}</p>
                                <p>{`Price: $${item.price / 100}.00`}</p>
                                <p><b>Subtotal: </b>{`$${item.price * item.qty / 100}.00`}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <p className='total'>TOTAL:</p>

            <div className='checkout'>
                <button>Checkout</button>
            </div>

            <style jsx>
                {`
                .shopping-cart {
                    display: none;
                    position: fixed;
                    right: 0;
                    height: 80vh;
                    width: 300px;
                    background-color: white;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                    color: black;
                    // transform: translateX(${isOpen ? '0' : '100'});
                }
                
                .cart-head {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: .25rem 1rem;
                    border-bottom: 1.5px solid gainsboro;
                    // outline: 2px solid blue;
                }

                .X:hover {
                    cursor: pointer;
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
                    border-bottom: 1px solid gainsboro;
                }

                .total {
                    padding: 0 1rem;
                }

                .checkout {
                    display: flex;
                    justify-content: flex-end;
                    padding: 0 1rem;
                }
                `}
            </style>
        </div>
    )
}

export default ShoppingCart