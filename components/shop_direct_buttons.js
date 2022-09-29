import { useState } from 'react'
import useShopDirectCart from '../hooks/useShopDirectCart'

export default function ShopDirectButtons(props) {
    const { shopDirectCart, addItemToShopDirectCart } = useShopDirectCart()
    const [quantity, setQuantity] = useState(0)

    const removeOne = () => {
        setQuantity(quantity - 1)
        // console.log(props.price)
    }

    console.log('shopDirectCart', shopDirectCart)

    return (
        <div className='buttons'>
            <button className='itemButton' onClick={() => addItemToShopDirectCart(props.id)}>+</button>
            {/* <span className='itemQuantity'>{quantity}</span> */}
            <span className='itemQuantity'>{shopDirectCart[props.id] ? shopDirectCart[props.id].qty : 0}</span>
            <button className='itemButton' onClick={() => removeOne()}>-</button>   

            <style jsx>
                {`
                .buttons {
                    display: flex;
                    justify-content: space-around;
                    width: 18rem;
                }

                .itemQuantity {
                    color: gainsboro;
                    background-color: rgba(0, 0, 0, 0.2);
                    font-size: 1.1rem;
                    width: 5rem;
                    padding: .5rem 0;
                    text-align: center;
                }

                .itemButton {
                    width: 5rem;
                }

                .button {
                    display: flex;
                    justify-content: center;
                }

                button {
                    color: gainsboro;
                    background-color: #b01e65;
                    border: none;
                    font-size: 1.1rem;
                    height: 2rem;
                    width: 45%;
                    padding: .5rem 0;
                    border-radius: 1rem;
                }

                button:hover {
                    color: white;
                    background-color: deeppink;
                }                
                `}
            </style>                                 
        </div>        
    )
}