import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import useCart from "../hooks/useCart"

const ShoppingCart = () => {
    const { cart } = useCart()

    const handleClick = () => {
        console.log('close cart')
    }

    return (
        <div className='shopping-cart'>
            <div className='cart-head'>
                <span>SHOPPING CART</span>
                <span className='X' onClick={handleClick}>
                    <FontAwesomeIcon icon={faCircleXmark} style={{ fontsize: "1.5rem"}} />
                </span>
            </div>

            <div className='cart-body'>
                {cart.map((item) => {
                    return (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <div className='pricing'>
                                <p>Qty: {item.qty}</p>
                                <p>{`Price: $${item.price / 100}.00`}</p>
                                <p><b>Total: </b>{`$${item.price * item.qty / 100}.00`}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <style jsx>
                {`
                .shopping-cart {
                    position: fixed;
                    right: 0;
                    height: 50vh;
                    width: 300px;
                    background-color: white;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                    color: black;
                }
                
                .cart-head {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: .25rem 1rem;
                    outline: 2px solid blue;
                }

                .X:hover {
                    cursor: pointer;
                }

                .cart-body {
                    padding: 1rem;
                }

                h2 {
                    margin-bottom: 0;
                    // outline: 1px solid red;
                }

                .pricing {
                    display: grid;
                    grid-gap: 2rem;
                    grid-template-columns: 1fr 1fr 1fr;
                    margin-bottom: 3rem;
                }
                `}
            </style>
        </div>
    )
}

export default ShoppingCart