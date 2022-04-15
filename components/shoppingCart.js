import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

const ShoppingCart = () => {
    return (
        <div className='shopping-cart'>
            <div className='cart-head'>
                <span>SHOPPING CART</span>
                <FontAwesomeIcon icon={faCircleXmark} style={{ fontsize: "1.5rem"}} />
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
                    color: gainsboro;
                }
                
                .cart-head {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: .25rem 1rem;
                    outline: 2px solid blue;
                }
                `}
            </style>
        </div>
    )
}

export default ShoppingCart